import React from 'react';
import Formation from './Formation';



function Formations() {
    return (
        <>
            <div className="skills">
                <h2 className="text-center ml-2 font-bold mt-5 bg-blue-500 text-white underline text-xl mb-5">Formations DEVELOPPEUR</h2>
                <Formation title="FORMATION POE JAVA JEE ANGULAR" etablissement="ASTON-ECOLE INFORMATIQUE" lieu="EURATECHNOLOGIE"/>
                <Formation title="FORMATION JAVA JEE" etablissement="AFPA" lieu="ROUBAIX"/>
                <Formation title="DEVELOPPEUR FULL STACK" etablissement="INSY2S" lieu="LOMME"/>
                <Formation title="MS DEVELOPPEUR D'APPLICATION" etablissement="Id Formation" lieu="BETHUNE"/>
                <Formation title="TITRE PRO DEVELOPPEUR WEB-WEB MOBILE" etablissement="Id Formation" lieu="LENS"/>
                
            </div>
            <div className="skills">
                <h2 className="text-center ml-2 font-bold mt-5 bg-blue-500 text-white underline text-xl mb-5">Formations ANNEXES</h2>
                <Formation title="FORMATION Auxiliaire ambulancier" etablissement="SMUR" lieu="ARRAS"/>
                <Formation title="BTS Assistant gestion PME PMI" etablissement="LYCEE GUY MOLLET" lieu="SAINT POL SUR TERNOISE"/>
                <Formation title="BAC STT Informatique de gestion" etablissement="Lycée SAINT DENIS" lieu="SAINT OMER"/>
                <Formation title="BEP Comptabilité" etablissement="Fondation Depoorter" lieu="HAZEBROUCK"/>
                <Formation title="BAFA" etablissement="CHATEAU DE MOULIN LE CONTE" lieu="MOULIN LE CONTE"/>
                
            </div>
        </>
    )
}

export default Formations