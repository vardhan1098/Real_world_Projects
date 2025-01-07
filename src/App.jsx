import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Tasks from "./pages/Task";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import SignIn from "./components/Profile/SignIn";
import SignUp from "./components/Profile/SignUp";

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
