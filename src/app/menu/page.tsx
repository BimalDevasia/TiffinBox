import React from 'react'


const foodtype=["BREAKFAST","LUNCH","SNACKS","DINNER","DRINKS"]
const items=[{name:"BREAD OMLET",desp:"A bread omelet is a quick and satisfying dish made by sandwiching beaten eggs between slices of bread Seasoned to taste and optionally filled with vegetables or cheese, it a versatile meal perfect for breakfast, brunch, or a light dinner.",price:"40",link:"/item.png"},
{name:"BREAD OMLET",desp:"A bread omelet is a quick and satisfying dish made by sandwiching beaten eggs between slices of bread Seasoned to taste and optionally filled with vegetables or cheese, it a versatile meal perfect for breakfast, brunch, or a light dinner.",price:"40",link:"/item.png"},
{name:"BREAD OMLET",desp:"A bread omelet is a quick and satisfying dish made by sandwiching beaten eggs between slices of bread Seasoned to taste and optionally filled with vegetables or cheese, it a versatile meal perfect for breakfast, brunch, or a light dinner.",price:"40",link:"/item.png"},
{name:"BREAD OMLET",desp:"A bread omelet is a quick and satisfying dish made by sandwiching beaten eggs between slices of bread Seasoned to taste and optionally filled with vegetables or cheese, it a versatile meal perfect for breakfast, brunch, or a light dinner.",price:"40",link:"/item.png"}
]


function page() {
  return (
    
    <div className='flex flex-col items-center w-screen bg-no-repeat bg-cover h-screen bg-menu text-white'>

      <h1>Our Menu</h1>
      <div className='flex w-2/3 h-10 justify-center gap-5'>
      { foodtype.map((items,id)=>(
        <div className=' flex justify-center items-center w-[10rem] rounded-3xl border-solid border-inyellow  border-[1px]' key={id}>{items}</div>
        ))}
      </div>

        <div className='grid grid-cols-2 w-9/12 h-3/4 gap-6 overflow-y-scroll'>
          
        {items.map((item,id)=>(
          <div key={id} className='box flex w-full '>
            <div style={{ backgroundImage: `url(${item.link})` }} className='h-full w-[35%] bg-no-repeat bg-cover'></div>
            <div className='w-[65%] bg-white/5 shadow-md rounded-lg backdrop-blur filter'>
              <p>{item.name}</p>
              <p>{item.desp}</p>
              <p>Price : {item.price}₹</p>
            </div>
            </div>
        ))}
<style>


 
  -ms-overflow-style: none;


  scrollbar-width: none;

</style>

        </div>

        
          


        

    </div>
  )
}

export default page