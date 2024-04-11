import TitleBar from "@/components/TitleBar";
import Link from "next/link";

const Custom404 = () => {
    return (
        <div className='h-screen w-full relative flex flex-col bg-black font-bebasneue'>
            <TitleBar />
            <div className="flex flex-col items-center justify-center text-white flex-grow">
                <div>
                    <img src="/path/to/your/image.png" alt="404 Not Found" className="w-64 h-auto mb-6" />
                </div>
                <div className="text-center text-neutral-50 font-normal">
                    <p className="text-3xl">The page you're looking for doesn't exist or has been moved.</p>
                </div>
                <div className="mt-10">
                    <Link href="/">
                        <p className="bg-yellow-400 text-white px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 text-lg font-bold">Go back</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Custom404;
