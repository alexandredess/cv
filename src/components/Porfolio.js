import React from 'react'

function Porfolio() {
    return (
        <div>
            <h2 className="text-center ml-2 font-bold mt-5 bg-blue-500 text-white underline text-xl mb-5">Portfolio</h2>
            <div className="flex ...">
                <div className="mt-2 text-center w-1/3">
                    <a href="https://www.ams-batiment6259.fr"><img  className='w-1/2 mt-5 mx-auto moi h-20' src="./images/ams.JPG" alt="" /></a> 
                    <a href="https://www.ams-batiment6259.fr" >AMS-BATIMENT</a> 
                    <p>Symfony 5</p>
                </div>
                <div className="mt-2 text-center w-1/3">
                    <a href="https://www.thinkgaming.fr"><img  className='w-1/2 mt-5 mx-auto moi h-20' src="./images/thinkgaming.JPG" alt="" /></a> 
                    <a href="https://www.thinkgaming.fr" >Thinkgaming</a> 
                    <p>Symfony 5</p>
                </div>
                <div className="mt-2 text-center w-1/3 ">
                    <img  className='w-1/2 mt-5 mx-auto moi h-20' src="./images/justeprix.jpg" alt="" />
                    <p>Le juste Prix</p> 
                    <p>React Native | Projet android non déployé</p>
                </div>
            </div>
        </div>
    )
}

export default Porfolio
