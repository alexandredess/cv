import React from 'react'

function Formation({title,etablissement,lieu}) {
    return (
        <div>
        <p className="skill__label text-left ml-10 mb-3">{title} - {etablissement} - {lieu}</p>
        </div>
    )
}

export default Formation
