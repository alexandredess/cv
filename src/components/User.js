import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMobile } from "react-icons/ai";


function User() {
    return (
        <div>
            <img  className='w-1/2 mt-5 mx-auto moi' src="./images/moi.png" alt="" />
            <h1 className='mt-2 text-2xl font-bold'>Alexandre Dessoly</h1>
            <p className='mt-2 text-lg font-medium'>Développeur web Full Stack</p>
            <div className='user_info bg-white opacity-60 font-bold '>
                <p className="adress text-left mt-2 ml-2">35 rue de constantinople</p>
                <p className="complement-adress text-left ml-2">62440 Harnes</p>
                <p className="age-permis text-left ml-2">39 ans | Permis B | Véhiculé</p>
                <p className="telephone text-left ml-2">
                    <a href="tel+330612575414">06 12 57 54 14</a>
                </p>
                <p className="mail text-left ml-2">
                    <a href="mailto:alexandre.dessoly1@gmail.com">alexandre.dessoly1@gmail.com</a>
                </p>
            </div>      
                    
                
        </div>
    )
}

export default User
