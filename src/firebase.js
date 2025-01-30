// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export const saveFormData = async (data) => {
  try {
    await db.collection('contact-forms').add(data);
    console.log('Form data saved!');
  } catch (error) {
    console.error('Error saving data: ', error);
  }
};

