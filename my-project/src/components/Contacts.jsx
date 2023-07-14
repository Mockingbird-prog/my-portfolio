

const Contacts = () => {
  return (
    
    <div 
    name="contacts"
     className='h-screen w-full bg-gradient-to-b from-gray-800 to-black  '>
      <div className='flex flex-col  text-white text-bold'>
        <div >
            <p className='text-7xl font-bold flex flex-col mx-10 mt-10 my-10 ml-10 text-white '>
                Contact 
            </p >
            <p className='px-6 py-4 justify-center ml-10 text-2xl items-center flex text-white'>
                Submit the form below to get in touch with me.</p>
        </div>
        <div className='flex justify-center items-center p-6'>
            <form action="https://getform.io/f/9ecfc8e0-5c6d-4198-b4c8-e46005a386ed" method="POST" className='flex flex-col ml-10 w-full md:w-1/2 my-4'>
<input 
type="text"
 name="name" 
 placeholder="Enter your name" 
 className=' ml-10 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

<input 
type="text"
 name="email" 
 placeholder="Enter your email" 
 className=' mt-2 ml-10 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>      
            
<textarea 
name="message" 
placeholder='Enter your message.'
rows="5" 
className='ml-10 mt-2  bg-transparent border-2 rounded-md text-white focus:outline:none'>
    </textarea>
    <button className='text-black font-bold bg-gradient-to-r from-orange-300 to-orange-500
    py-2 mt-4 mx-auto flex items-center border-4 rounded-md hover:scale-110 duration-300'>
        Click here to access. 
    </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts;
