import React from 'react';


const Body: React.FC = () => {


    return (

        <div className="container mx-auto">

        <nav className="grid grid-cols-5 gap-10 text-center">
            <a href="" className="text-gray-700 hover:text-blue-500 hover:underline underline-offset-4">Home</a>
            <a href="contact" className="text-gray-700 hover:text-blue-500 hover:underline underline-offset-4">Contact</a>
            <a href="login" className="text-gray-700 hover:text-blue-500 hover:underline underline-offset-4">Login</a>
            <a href="register" className="text-gray-700 hover:text-blue-500 hover:underline underline-offset-4">Register</a>
            <a href="projectdetails" className="text-gray-700 hover:text-blue-500 hover:underline underline-offset-4">ProjectDetails</a>
        </nav>

        <div className='box-border  mt-4 h-[75vh]'>

        </div>
    </div>

      );
}

export default Body;