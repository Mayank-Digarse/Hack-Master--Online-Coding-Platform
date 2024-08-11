require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes');

// async function main() {
//   await mongoose.connect(process.env.DB_URL);
// }

// main()
// .then(() => {
//     console.log("Connection successful");
// })
// .catch(err => console.log(err));

const corsOptions = {
    credentials: true,
    origin: process.env.REACT_APP_API_URL, // Ensure this is set correctly in your .env
};

// Use CORS before any route definitions
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json({ limit: '8mb' }));
app.use(cors());
// Routes
app.use(router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//Use Problem routes
// app.use(problemRoutes);

// PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



// Real-time leaderboard updates
// let leaderboard = [];
// io.on('connection', (socket) => {
//     console.log('User connected');

//     // Emit leaderboard updates
//     socket.emit('leaderboardUpdate', leaderboard);

//     socket.on('disconnect', () => {
//         console.log('User disconnected');
//     });
// });