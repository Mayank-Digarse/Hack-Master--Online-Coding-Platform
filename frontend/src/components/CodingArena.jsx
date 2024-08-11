// // src/components/CodingArena.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CodingArena = () => {
//     const [problems, setProblems] = useState([]);
//     const [newProblem, setNewProblem] = useState({
//         title: '',
//         description: '',
//         constraints: '',
//         testCases: '',
//     });

//     useEffect(() => {
//         // Fetch problems from the backend
//         axios.get('/api/problems')
//             .then(response => setProblems(response.data))
//             .catch(error => console.error('Error fetching problems:', error));
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewProblem({ ...newProblem, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Send new problem to the backend
//         axios.post('/api/problems', newProblem)
//             .then(response => {
//                 setProblems([...problems, response.data]);
//                 setNewProblem({ title: '', description: '', constraints: '', testCases: '' });
//             })
//             .catch(error => console.error('Error uploading problem:', error));
//     };

//     return (
//         <div>
//             <h2>Coding Arena</h2>

//             <h3>Practice Problems</h3>
//             <ul>
//                 {problems.map((problem) => (
//                     <li key={problem._id}>
//                         <h4>{problem.title}</h4>
//                         <p>{problem.description}</p>
//                     </li>
//                 ))}
//             </ul>

//             <h3>Upload New Problem</h3>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Title</label>
//                     <input
//                         type="text"
//                         name="title"
//                         value={newProblem.title}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Description</label>
//                     <textarea
//                         name="description"
//                         value={newProblem.description}
//                         onChange={handleInputChange}
//                         required
//                     ></textarea>
//                 </div>
//                 <div>
//                     <label>Constraints</label>
//                     <textarea
//                         name="constraints"
//                         value={newProblem.constraints}
//                         onChange={handleInputChange}
//                         required
//                     ></textarea>
//                 </div>
//                 <div>
//                     <label>Test Cases</label>
//                     <textarea
//                         name="testCases"
//                         value={newProblem.testCases}
//                         onChange={handleInputChange}
//                         required
//                     ></textarea>
//                 </div>
//                 <button type="submit">Upload Problem</button>
//             </form>
//         </div>
//     );
// };

// export default CodingArena;
