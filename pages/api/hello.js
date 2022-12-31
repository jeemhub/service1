// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import {firebase} from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/storage';
// import 'firebase/database';
// import { createServer } from 'next';


// // Initialize Firebase
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyARJ7vGR6AUCAZLNqiauQYO3wzpOXcckxQ",
//   authDomain: "servicestore-cc04d.firebaseapp.com",
//   projectId: "servicestore-cc04d",
//   storageBucket: "servicestore-cc04d.appspot.com",
//   messagingSenderId: "750319629865",
//   appId: "1:750319629865:web:4063576c5fffac79e60e38"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Get references to the Firestore and Storage services

// const firestore = app.firestore();
// const storage = app.storage();

// // Create the Next.js server
// const server = createServer();

// // Handle the POST request to the first endpoint
// server.post('/save-photo', async (req, res) => {
//   try {
//     // Get the photo and caption from the request body
//     const photo = req.body.photo;
//     const caption = req.body.caption;

//     // Upload the photo to Firebase Storage
//     const storageRef = storage.ref();
//     const fileRef = storageRef.child(`photos/${Date.now()}`);
//     await fileRef.putString(photo, 'data_url');
//     const photoUrl = await fileRef.getDownloadURL();

//     // Save the photo and caption to Firestore
//     await firestore.collection('photos').add({
//       photoUrl,
//       caption
//     });

//     // Send a response back to the client
//     res.send({ status: 'success' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ status: 'error', message: error.message });
//   }
// });
// // Handle the GET request to the second endpoint
// server.get('/photos', async (req, res) => {
//   try {
//     // Get all the photos from Firestore
//     const snapshot = await firestore.collection('photos').get();
//     const photos = snapshot.docs.map(doc => doc.data());

//     // Send the photos back to the client
//     res.send({ status: 'success', photos });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ status: 'error'})}})

// // Start the server
// server.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

