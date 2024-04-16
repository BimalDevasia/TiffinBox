import Link from "next/link";

const TitleBar = () => {
    return (
        <div className="flex-grow flex justify-between pt-10 px-10">
            <div className="text-neutral-50 font-normal text-2xl">
                <Link href="/"><p className="hover:text-yellow-400">TiffinBox</p></Link>
            </div>
            <div className="flex gap-10">
                <div className="text-neutral-50 font-normal text-lg">
                    <Link href="/">
                        <p className="hover:text-yellow-400">Privacy</p>
                    </Link>
                </div>
                <div className="text-neutral-50 font-normal text-lg">
                    <Link href="/">
                        <p className="hover:text-yellow-400">Help</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TitleBar;
