import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  return (
    <form action="https://formspree.io/f/xzbwyneq" method="POST" className='form-container'>
      <label>
        Email
        <input
          type="email"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Subject
        <input
          type="text"
          value={subject}
          name="Subject"
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </label>
      <label>
        Body
        <textarea
          value={body}
          name="Body"
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </label>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
