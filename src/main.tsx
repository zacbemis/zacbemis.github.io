import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'
import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key from environment variable
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)