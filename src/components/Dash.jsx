import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // Connect to the backend

const Dash = () => {
    const [chat, setChat] = useState("");
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState(""); // Store the user ID (or socket ID)

    useEffect(() => {
        // Generate a unique user ID (you can also use socket ID)
        setUserId(new Date().getTime().toString());

        // Listen for incoming messages
        socket.on("receive_message", (messageData) => {
            setData((prevData) => [...prevData, messageData]);
        });

        return () => {
            socket.off("receive_message");
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (chat.trim() === "") {
            alert("Please add a message");
        } else {
            const newChat = {
                id: new Date().getTime().toString(),
                message: chat,
                timing: new Date().toLocaleTimeString(),
                sender: userId, // Add sender info to differentiate
            };
            // Emit the new message to the backend
            socket.emit("new_message", newChat);
            setChat("");
        }
    };

    return (
        <div style={{ backgroundColor: "#8174A0", height: "90vh" }}>
            <h2>Welcome To ChatHub</h2>
            <div
                style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
            >
                <input
                    type="text"
                    style={{
                        padding: "20px",
                        width: "500px",
                        caretColor: "red",
                        border: "0.6px solid black",
                        borderRadius: "10px",
                        marginRight: "10px",
                    }}
                    placeholder="Enter a Message.."
                    value={chat}
                    onChange={(e) => setChat(e.target.value)}
                />
                <button
                    style={{
                        padding: "5px 20px",
                        cursor: "pointer",
                        background: "black",
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                    }}
                    onClick={handleSubmit}
                >
                    Send
                </button>
            </div>
            <div>
                {data.map((chatter) => (
                    <div
                        key={chatter.id}
                        style={{
                            background: "white",
                            maxWidth: "500px",
                            display: "flex",
                            flexDirection: "column",
                            float: chatter.sender === userId ? "right" : "left", // Align based on sender
                            marginRight: "20px",
                            marginLeft: chatter.sender === userId ? "0" : "20px", // Add margin for left alignment
                            marginTop:"10px",
                            border: "1px solid black",
                            borderRadius: "5px",
                            padding: "10px",
                        }}
                    >
                        <p>{chatter.message}</p>
                        <p>{chatter.timing}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dash;
