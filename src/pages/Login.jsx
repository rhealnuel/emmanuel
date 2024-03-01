import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()
    

    const myPassword = "hello"
    const myUserName = "rheal"

    const store = myUserName + myPassword;


    const submit = (e) => {
       // e.preventDefault()
        localStorage.clear()


        if(username === "" || password === ""){
            e.preventDefault()
            setError('please fill username or password')
        } else if( username !== myUserName){
            e.preventDefault()
            setError('user not found');
        } else if (password !== myPassword){
            e.preventDefault()
            setError('please input correct pasword')

        } else {
            setError('')
           
            localStorage.setItem("token", store)

            navigate('/dashboard')
            
        }



    }

  return (
    <div className=' bg-gray-300 flex items-center justify-center  h-[100vh] '>
        <div className=" bg-white p-4 rounded-lg shadow-2xl">
            <div className='flex flex-col items-center p-4'>
                <p className=' text-[25px] font-bold text-[#0077FF]'>N</p>
                <p>Welcome please Login</p>
            <div className={` ${error? "block" : "hidden"} outline outline-[1px] outline-red-600 text-red-600 text-center px-6 py-1 font-bold rounded-lg `}>
                <p>{error}</p>
            </div>
            </div>
            <form action="" onSubmit={submit}>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">username</label>
                    <input type="text" name="" id=""  className='w-[350px] h-[30px] outline outline-[1px] outline-gray-400 px-2' onChange={(e) => setUsername(e.target.value)} value={username}/>
                </div>
                <div  className='flex flex-col gap-2'>
                    <label htmlFor="">password</label>
                    <input type="password" name="" id=""  className='w-[350px] h-[30px] outline outline-[1px] outline-gray-400 px-2' onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>

                <div className='py-4'><button className='bg-[#0077FF] text-white font-bold w-[100%] h-[40px] rounded-md' type='submit'>Log In</button></div>
            </form>
        </div>
    </div>
  )
}

export default Login