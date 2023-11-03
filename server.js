const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//Initialize Path
let initialize_path = path.join(__dirname, 'public');

const app = express();
app.use(express.static(initialize_path));

// Middleware to parse JSON data
app.use(bodyParser.json());
// Middleware to parse URL-encoded data  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Initialize Firebase Admin SDK with your Firebase project's service account key
const serviceAccount = require('./firebase/callarboat-19b3b-firebase-adminsdk-z2cux-0ee2f662e7.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Get a Firestore reference
const db = admin.firestore();

// Handle GET requests to the root path '/'
app.get('/', (req, res) => {
  // Send the 'index.html' file when users visit the root URL
  // The file is located within the 'pages' directory under the 'initialize_path'
  res.sendFile(path.join(initialize_path, 'pages', 'index.html'));
});



// //Building with rest Api
// app.post('/regSubscriber', (req, res) => {
//   // Received data from the form
//   const formData = req.body;
//   // Do something with the received data (e.g., save to a database, perform operations, etc.)

//   // Sending a response back (if needed)
//   res.json({ message: 'Data received successfully!' });
// });

// Your route to handle the POST request
app.post('/subscribe', async (req, res) => {
  const { subplan, subdate, subdaterenew, companyname, email, role } = req.body;

  try {
    // Store user subscription data in Firestore 'Users' collection
    const result = await admin.firestore().collection('Travel_agencies').add({
      subplan,
      subdate,
      subdaterenew,
      companyname,
      email,
      role
    });

    res.status(200).json({ message: 'Subscription stored successfully' });
  } catch (error) {
    console.error('Error storing subscription:', error);
    res.status(500).json({ error: 'Subscription storing failed' });
  }
});



//For Server listening
app.listen('3000', () => {
  console.log("Server is now running...");
})