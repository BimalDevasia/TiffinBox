import Link from "next/link";

const Custom404 = () => {
    return (
        <div className='h-screen w-full relative flex flex-col bg-black font-bebasneue'>
            <div className='flex-grow flex justify-between p-10'>
                <div className='text-neutral-50 font-normal text-2xl'>
                    TiffinBox
                </div>
                <div className='flex gap-10'>
                    <div className='text-neutral-50 font-normal text-lg'>Privacy</div>
                    <div className='text-neutral-50 font-normal text-lg'>Help</div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center text-white flex-grow">
                <div>
                    <img src="/path/to/your/image.png" alt="404 Not Found" className="w-64 h-auto mb-6" />
                </div>
                <div className="text-center text-neutral-50 font-normal ">
                    <p className="text-lg">The page you're looking for doesn't exist or has been moved.</p>
                </div>
                <div className="mt-4">
                    <Link href="/">
                        <p className="bg-yellow-400 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors duration-300">Go back</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Custom404;
