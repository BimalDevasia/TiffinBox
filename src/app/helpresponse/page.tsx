"use client"

import React, { useState, useEffect } from "react";
import { HelpRequest } from "@/models/types";
import ProtectedRoute from "../components/ProtectedRoute";

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
        <ProtectedRoute>
            <div className="h-screen w-[1286px] bg-black text-white flex flex-col gap-10 justify-center items-center">
                <h1 className="text-xl text-inyellow font-bold">HELP REQUESTS</h1>
                <ul className="flex gap-5 flex-wrap w-[80%]">
                    {helpRequests.map((request) => (
                        <div key={request._id} className="p-5 border flex flex-col items-center gap-6" >
                            <div className="text-[15px] -m-5 p-3 mb-2 bg-ingrey rounded-sm">User Email: {request.userEmail}</div>
                            <div className="py-5 px-2 bg-ingrey/30 rounded-sm w-[90%]">{request.userInput}</div>
                            <button
                                className="p-3 w-[100px] bg-inyellow text-black cursor-pointer rounded-lg"
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
                        </div>
                    ))}
                </ul>
            </div>
        </ProtectedRoute>
    );
};

export default HelpResponsePage;