
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-8">The page you're looking for does not exist.</p>
            <Link href="/">
                <p className="text-blue-500 hover:underline">Go back to home</p>
            </Link>
        </div>
    );
};

export default Custom404;
