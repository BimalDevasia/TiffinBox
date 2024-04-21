"use client";

import TitleBar from "@/components/TitleBar";
import { useState } from "react";

const HelpPage = () => {
    const [userInput, setUserInput] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/help", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userInput }),
            });

            if (response.ok) {
                console.log("Help request submitted successfully");
                setUserInput(""); // Clear the input field
            } else {
                console.error("Error submitting help request");
            }
        } catch (error) {
            console.error("Error submitting help request:", error);
        }
    };

    return (
        <div className="h-screen w-full relative flex flex-col bg-black font-bebasneue">
            <TitleBar />
            <div className="flex flex-col items-center text-white flex-grow px-4">
                <div className="text-center text-neutral-50 font-normal">
                    <h1 className="text-3xl font-bold mb-4">Help</h1>
                    <p className="mb-4">
                        Please describe your issue or request in the text area below, and we
                        will assist you as soon as possible.
                    </p>
                    <form onSubmit={handleSubmit} className="w-full max-w-lg">
                        <textarea
                            className="w-full h-48 p-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your issue or request here..."
                            value={userInput}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="mt-4 bg-yellow-400 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors duration-300 text-lg font-bold"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;