import TitleBar from "@/components/TitleBar";

const ForgotPassword = () => {
    return (
        <>
            <div className='h-screen w-full relative flex flex-col bg-black font-bebasneue'>
                <TitleBar />
                <div>
                    <img src="../../../../public/forgotpassword.png" alt="Forgot Password Image" />
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;

