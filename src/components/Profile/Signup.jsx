import React, { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const naviagte = useNavigate();

  const { name, email, password } = details;

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(
          data.message || data.errors?.[0]?.msg || "Registration failed"
        );
      }

      const data = await response.json();
      console.log("Registration Successful:", data);
      setSuccess(true);
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
    }
  };


  return (
    <div
      style={{
        position: "relative",
        padding: "1rem",
        color: "black",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "5px",
        zIndex: "1000",
      }}
    >
      <form onSubmit={handleSubmit}>
        <dl>
          <dt>UserName:</dt>
          <dd>
            <input
              type="text"
              value={name}
              placeholder="Enter a name"
              name="name"
              onChange={handleChange}
            />
          </dd>
          <dt>Email:</dt>
          <dd>
            <input
              type="email"
              value={email}
              placeholder="Enter an email"
              name="email"
              onChange={handleChange}
            />
          </dd>
          <dt>Password:</dt>
          <dd>
            <input
              type="password"
              value={password}
              onChange={handleChange}
              name="password"
              placeholder="Enter a password"
            />
          </dd>
        </dl>
        <button type="submit">SignUp</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Registration successful!</p>}
    </div>
  );
};

export default SignUp;
