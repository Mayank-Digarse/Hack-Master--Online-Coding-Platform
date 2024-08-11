const express = require('express');
const axios = require("axios");
const language_id = {
    cpp:54,
    java:91,
    python:92,
    javascript:63
}


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getResult = async(token) => {
    const pollStartTime = Date.now();

      while(Date.now() - pollStartTime < 1000 * 60){   
          const resultResponse = await axios.get(
           ` https://judge0-ce.p.rapidapi.com/submissions/${token}/?base64_encoded=true`,
            {
              headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                'x-rapidapi-key': process.env.JUDGE_API_KEY,
              },
            }
          );
          const data = resultResponse.data;
          if(data.error){
            return data;
          }

          if(data.status['id'] > 2){
            const stdout = (data.stdout) ? atob(data.stdout) : "";
            const time = data.time;
            const memory = data.memory;
            const error = data.stderr || data.compile_output ? atob(data.stderr || data.compile_output) : null;
            const status = data.status;

            return {
                stdout,time,memory,error,status
            }
          }
          await delay(500);
      }

    return { error: "Polling timed out." };
}

async function executeAnswer(request,response) {
  try {
    const { language, stdin, code } = request.body;

    const submissionData = {
      source_code: code,
      language_id: language_id[language],
      stdin: stdin
    };

    const submissionResponse = await axios.post(
     'https://judge0-ce.p.rapidapi.com/submissions/',
      submissionData,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'judge0-ce.p.rapidapi.com', 
          'x-rapidapi-key': process.env.JUDGE_API_KEY, 
        },  
      }
    );

    const token = submissionResponse.data.token;

    if (token) {
        return reponse.status(200).json({
            result:await getResult(token)});
    }
    else {
      return response.status(500).json({ error: `Failed to get submission token` });
    }
  } catch (error) {
    console.log(error);
    return response.status(500).json({error:`Submission failed - ${error.message}` });
  }
}

module.exports = executeAnswer;