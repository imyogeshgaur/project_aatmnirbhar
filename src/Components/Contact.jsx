import React from 'react'


const Contact = () =>{
  return(
    <>
    <div className="container mb-4">
    <h1 style={{ display: "grid", placeItems: "center" }}>
     Contact Us 
     </h1>
     <h3 style={{ display: "grid", placeItems: "center" }}>Our Customer Care Service is Open for 24X7</h3>
    <div className="mb-3">
      <label for="fname" className="form-label">Name</label>
      <input
        type="text"
        className="form-control"
        id="name"
        placeholder="Enter Your Full Name"
      />
    </div>
    <div className="mb-3">
      <label for="lname" className="form-label">Email</label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Enter Your Email"
      />
      <div className="mb-3">
      <label for="lname" className="form-label">Message</label>
      <textarea
        type="text"
        className="form-control"
        id="Message"
        placeholder="Enter Your Message"
      />
      </div>
      </div>
      <button className="btn btn-outline-primary">Submit</button>
      </div>
    </>
  );
} 

export default Contact;


