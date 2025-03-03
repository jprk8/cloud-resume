import { useState } from 'react';
import '../styles/Contact.css'


export default function Contact() {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Message sent!');
        form.reset();
      } else {
        setStatus('Failed to send the message, please try again later.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='contact'>
      <div className='contact-title'>Contact Me</div>
      <form
        id='contact-form'
        action='https://formspree.io/f/xdkaqepb'
        method='POST'
        onSubmit={handleSubmit}
      >
        {/* Optional: Hidden input to set a custom subject */}
        <input type='hidden' name='_subject' value='New Submission from johnjpark.com' />
        
        <div>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <textarea
            rows='7'
            cols='30'
            name='message'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        
        <button className='send-btn' type='submit'>SEND</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};
