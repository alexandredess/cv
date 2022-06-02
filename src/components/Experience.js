import React from 'react'

function Experience({
    title,
    entreprise,
    lieu,date,
    description_1,
    description_2,
    description_3,
    description_4,
    description_5,
    description_6,
    description_7,
    description_8,
    description_9,
    description_10,
    description_11
    }) {
    return (
        
            <div className="experience">
                <p className="skill__label text-left ml-10 mt-3 font-bold underline">{title}</p>
                <div className="experience_details">
                    <p className="skill__label text-left ml-10 ">{entreprise} | {lieu} | {date}</p>
                    <ul className="ml-10">
                        <li>{description_1}</li>
                        <li>{description_2}</li>
                        <li>{description_3}</li>
                        <li>{description_4}</li>
                        <li>{description_5}</li>
                        <li>{description_6}</li>
                        <li>{description_7}</li>
                        <li>{description_8}</li>
                        <li>{description_9}</li>
                        <li>{description_10}</li>
                        <li>{description_11}</li>
                    </ul>
                </div>
             </div>
            
        
    )
}

export default Experience
