import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FaUserAlt } from "react-icons/fa";
import Modal from "../Modal";
import SignUp from "../Profile/SignUp";
import SignIn from "../Profile/SignIn";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Track modal visibility
  const [isSignUp, setIsSignUp] = useState(true); // Track whether it's SignUp or SignIn
  const [user, setUser] = useState(null); // Track logged-in user
  const [showTooltip, setShowTooltip] = useState(false); // Track tooltip visibility

  const handleHome = () => navigate("/");

  const handleUserClick = () => {
    if (user) {
      // Toggle tooltip for logged-in users
      setShowTooltip((prev) => !prev);
    } else {
      // Open modal for non-logged-in users
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false); // Close modal
    setShowTooltip(false); // Close tooltip (if any)
  };

  const toggleAuthMode = () => setIsSignUp((prev) => !prev);

  const handleSignInSuccess = (userData) => {
    setUser(userData); // Save user data
    setIsOpen(false); // Close modal after successful login
  };

  const handleSignInFailure = (errorMessage) => {
    console.error("Sign-in failed:", errorMessage); // Log error for debugging
  };

  const handleLogout = () => {
    setUser(null); // Clear user data
    localStorage.removeItem("token"); // Clear token
    setShowTooltip(false); // Close tooltip
  };

  return (
    <header
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#282c34",
        color: "white",
      }}
    >
      <h1 onClick={handleHome} style={{ cursor: "pointer" }}>
        Task Manager
      </h1>
      <div style={{ position: "relative" }}>
        <button
          style={{
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
          onClick={handleUserClick}
        >
          {user ? (
            <span
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              {user.name.charAt(0)} {/* Show first letter of the user's name */}
            </span>
          ) : (
            <FaUserAlt />
          )}
        </button>
        {/* Tooltip for logged-in users */}
        {showTooltip && user && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              backgroundColor: "white",
              color: "black",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              zIndex: 1000,
            }}
          >
            <p style={{ margin: 0, cursor: "pointer" }} onClick={handleHome}>
              Profile
            </p>
            <p
              style={{
                margin: "10px 0 0",
                cursor: "pointer",
                color: "red",
              }}
              onClick={handleLogout}
            >
              Logout
            </p>
          </div>
        )}
      </div>
      {/* Modal for SignUp/SignIn */}
      <Modal isOpen={isOpen} onClose={handleClose}>
        {isSignUp ? (
          <SignUp />
        ) : (
          <SignIn
            onSuccess={handleSignInSuccess} // Pass success handler
            onFailure={handleSignInFailure} // Pass failure handler
          />
        )}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <span>
            {isSignUp
              ? "Already have an account? "
              : "Don't have an account? "}
          </span>
          <b
            onClick={toggleAuthMode}
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "blue",
            }}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </b>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
