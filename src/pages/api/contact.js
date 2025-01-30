// src/pages/api/contact.js
import { db, collection, addDoc } from '../../firebase';

export async function post({ request }) {
  try {
    // Parse the JSON body
    const { name, email, subject, message } = await request.json();

    // Define the Firestore collection where you want to store the contact data
    const contactCollection = collection(db, 'contactForm');

    // Store the data in Firestore
    await addDoc(contactCollection, {
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    // Return a success response
    return new Response(
      JSON.stringify({ message: 'Thank you for your message! We will get back to you soon.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error storing contact form submission:', error);
    return new Response(
      JSON.stringify({ message: 'Oops! Something went wrong. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

