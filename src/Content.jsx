import React, { useState } from 'react';

function Content1() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Send the form data to the backend
      const res = await fetch('http://localhost:5000/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, company }),
      });
  
      const data = await res.json();
      setResponseMessage(data.message);
    };
  
    return (
      <>
      <div className="App">
        <h1>Submit Your Details</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Company: </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
  
        {responseMessage && <p>{responseMessage}</p>}
      </div>

      </>
    );
  }
  
  export default Content1;