import React from 'react'

const Login = () => {
  return (
    <div className='h-screen w-full relative flex bg-black'>


      <div className='bg-food bg-no-repeat w-[28%] h-full'>
        <img src="" alt="Not Working  " />
        <div>
          <h1>01</h1>
          <p>"GOOD FOOD IS THE FOUNDATION <br/> OF GENUINE HAPPINESS"</p>
        </div>
      </div>



      <div className='flex flex-col items-center justify-center absolute top-0 right-0 w-[79%] h-full rounded-3xl z-10 bg-black text-white'>


        <div className='flex w-9/12 items-center justify-between text-inyellow mb-[5rem]'>
          
          <div className='flex gap-3'>
          <div className='flex w-24 h-14 justify-center items-center hover:bg-ingrey hover:text-white'>
            Sign up
          </div>
          <div className='flex w-24 h-14 justify-center items-center hover:bg-ingrey hover:text-white'>Sign in</div>
          </div>
          <div className='flex gap-3'>
          <div className='flex w-24 h-14 justify-center items-center hover:bg-ingrey hover:text-white'>User</div>
          <div className='flex w-24 h-14 justify-center items-center hover:bg-ingrey hover:text-white'>Admin</div>
          </div>
          </div>

          <div className='flex w-9/12 justify-between mb-[8rem] '>

          <div className='w-1/3'>

          <h6>WELCOME</h6>
          <p className='text-5xl'>is simply dummy <br /> text of the <br />printing and lorem <br />
ipsum industry</p>

          </div >

            <div className='flex  flex-col w-7/12 gap-10'>

              <input className='h-20 focus:outline-none placeholder:focus:absolute placeholder:focus:top-[-5px]  bg-ingrey px-[3rem] rounded-lg' placeholder='Email or phone Number' type="text" name="" id="" />

              <div className='relative'>
              <input className='h-20 w-full focus:outline-none bg-ingrey px-[3rem] rounded-lg' placeholder='Password' type="password" name="" id="" />
                <img className='absolute w-7 top-[50%] translate-y-[-50%] right-12' src="/Lock.svg" alt="" />
              </div>

              <div className='relative'>
              <input className='h-20 focus:outline-none w-full bg-ingrey px-[3rem] rounded-lg' placeholder='Confirm Password' type="password " name="" id="" />
              <img className='absolute w-7 top-[50%] translate-y-[-50%] right-12' src="/Lock.svg" alt="" />
              </div>
              <div className='flex gap-5'>
<input type="checkbox" name="" id="" /> <p>I agree to the <span>terms and conditions</span></p>
              </div>

            <div className='flex justify-between'>
              <button className='bg-inyellow w-[10rem] text-black  h-[4.5rem]'>LOGIN</button>
              <div className='relative'>
                <p>Do you already have an <br />account? Please use the </p>
              <a className='absolute right-0 text-inyellow' href="">Login</a>
                </div>
            </div>

            </div>
            


      </div>

      </div>




    </div>
  )
}

export default Login