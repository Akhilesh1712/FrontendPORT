import "./Form.css";
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importing toastify CSS

const Form = () => {
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const baseUrl = 'https://portfoliobackend-lcr3.onrender.com'; 

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const response = await sendEmail();
  
    if (response.ok) {
      // If the response is ok, clear the form and show success toast
      setFormData({
        email: '',
        subject: '',
        message: ''
      });
      setFileName(""); // Clear the file name as well
      toast.success("Email Sent Successfully!");
    } else {
      // Show an error toast if the response is not ok
      toast.error("Failed to send email. Please try again.");
    }
  };
  
  const sendEmail = async () => {
    const dataSend = {
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
  
    try {
      const res = await fetch(`${baseUrl}/email/sendEmail`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
  
      return res; // Return the response to handle it in the handleSubmit function
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again later.");
      return { ok: false }; // Return a false response to handle the error
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          <label>
            Your Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Subject
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Enter Message
            <textarea
              name="message"
              rows="6"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <label className="attachment">
            Attach Document
            <input
              type="file"
              onChange={handleFileChange}
            />
            {fileName && <span className="file-name">Selected: {fileName}</span>}
          </label>
          <button className="btn4" type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer /> {/* Toast Container to display notifications */}
    </div>
  );
};

export default Form;
