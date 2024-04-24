"use client"
import React, { useState, useEffect } from "react";
import { HelpRequest } from "@/models/types";

const HelpResponsePage = () => {
    const [helpRequests, setHelpRequests] = useState<HelpRequest[]>([]);

    useEffect(() => {
        fetch("/api/helpresponse")
            .then((res) => res.json())
            .then((data: HelpRequest[]) => setHelpRequests(data));
    }, []);

    const openGmailCompose = (userEmail: string, subject: string, body: string) => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            userEmail
        )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, "_blank");
    };

    return (
        <div>
            <h1>Help Requests</h1>
            <ul>
                {helpRequests.map((request) => (
                    <li key={request._id}>
                        <div>{request.userInput}</div>
                        <div>User Email: {request.userEmail}</div>
                        <button
                            onClick={() =>
                                openGmailCompose(
                                    request.userEmail,
                                    "Response to your help request",
                                    `Hello,\n\nThank you for your help request. Please find our response below:\n\n`
                                )
                            }
                        >
                            Respond
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HelpResponsePage;