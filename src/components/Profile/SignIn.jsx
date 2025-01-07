import React, { useState } from "react";

const SignIn = ({ onSuccess, onFailure }) => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { email, password } = details;

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    setSuccess(false);
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(
          data.message || data.errors?.[0]?.msg || "Login failed"
        );
      }
  
      const data = await response.json();
      console.log("Login Successful:", data);
  
      setSuccess(true);
  
      // Notify parent of successful login
      if (onSuccess) {
        const userName = data?.user?.name || "Unknown User"; // Safeguard for name
        onSuccess({ name: userName }); // Pass the user name to the parent
      }
  
      // Save token in localStorage or state for future use
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
  
      // Notify parent of failure
      if (onFailure) {
        onFailure(error.message);
      }
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
          <dt>Email</dt>
          <dd>
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
              placeholder="Enter an email"
              required
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
              placeholder="Enter a password"
              required
            />
          </dd>
        </dl>
        <button type="submit">Sign In</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Login successful!</p>}
    </div>
  );
};

export default SignIn;
