import React from 'react';


const Header: React.FC = () => {


    return (
        
        <div className="container mx-auto p-4">
            <div className="flex items-center mb-6">
            <a href="/">
                <div className="w-12 h-12 bg-zinc-500 text-white flex justify-center items-center font-bold rounded-tl-lg rounded-br-lg">
                        LOGO
                </div>
            </a>
                <h1 className="ml-4 text-2xl font-semibold text-gray-800">Infosys Project</h1>
            </div>
        </div>
     
    );
}

export default Header;