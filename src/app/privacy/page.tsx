import TitleBar from "@/components/TitleBar";
import Link from "next/link";

const PrivacyTerms = () => {
    return (
        <div className="h-screen w-full relative flex flex-col bg-black font-bebasneue">
            <TitleBar />
            <div className="flex flex-col items-center  text-white flex-grow px-4">
                <div className="text-center text-neutral-50 font-normal">
                    <h1 className="text-3xl font-bold mb-10">Privacy Terms</h1>
                    <p className="mb-5">
                        We take your privacy seriously in our college canteen food delivery
                        app. Please read the following terms and conditions carefully:
                    </p>
                    <ol className="list-decimal list-inside">
                        <li className="mb-5">
                            We collect only the necessary personal information required for
                            order processing and delivery, such as your name, contact
                            details, and delivery address.
                        </li>
                        <li className="mb-5">
                            Your payment information is securely processed by our trusted
                            payment gateway and is not stored on our servers.
                        </li>
                        <li className="mb-5">
                            We may use your order history and preferences to provide a better
                            user experience and personalized recommendations.
                        </li>
                        <li className="mb-5">
                            Your personal information will never be shared with third parties
                            without your explicit consent, except as required by law.
                        </li>
                        <li className="mb-5">
                            You have the right to access, modify, or delete your personal
                            information stored in our system at any time.
                        </li>
                    </ol>
                </div>
                <div className="mt-10">
                    <Link href="/register">
                        <p className="bg-yellow-400 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors duration-300 text-lg font-bold">
                            Go back
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyTerms;