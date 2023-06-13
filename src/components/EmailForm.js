import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');

    // Reset form fields
    setEmail('');
    setSubject('');
    setBody('');
  };

  return (
    <form action="https://formsubmit.co/bfhetyrhyr12@email.com" method="POST">
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Subject:
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </label>
      <label>
        Body:
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </label>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
