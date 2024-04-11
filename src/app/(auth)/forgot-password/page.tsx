import TitleBar from "@/components/TitleBar";

const ForgotPassword = () => {
    return (
        <>

            <div className='h-screen w-full relative flex bg-black font-bebasneue'>
                
            <div className='bg-forgot avg:block hidden relative bg-cover bg-no-repeat w-[28%] h-full'></div>



<div className='w-screen avg:w-[72%] h-min rounded-3xl  text-white mt-40 px-10'>


  <div className='flex justify-around w-full '>

    <div className='w-1/3'>

    <h6 className='text-4xl mb-3 font-bebasneue'>FORGOT <br />PASSWORD ?</h6>
      <p className='text-2xl font-bebasneue'>Enter the email address associated with account</p>

    </div >

    <form className='flex  flex-col med:w-7/12 w-full gap-10'>

      <input className='h-20 focus:outline-none bg-ingrey px-[3rem] rounded-lg' placeholder='Email address' type="text" name="" id="email" required />

      <div className="w-full place-items-center flex justify-between">
        <p className="text-inyellow">Try Another Way</p>
        <button type='submit' className='bg-inyellow rounded-lg w-[10rem] text-black  h-[4.5rem] font-bold text-[20px] '>SUBMIT</button>
      </div>


    </form>



  </div>

</div>




</div>

           
        </>
    );
};

export default ForgotPassword;

