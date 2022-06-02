import React from 'react';
import Skill from './Skill';


function Skills() {
    return (
        <>
            <div className="skills">
                <h2 className="text-left ml-2 font-bold mt-2 underline text-xl">Compétences</h2>
                <Skill title="HTML" rating="4"/>
                <Skill title="CSS" rating="4"/>
                <Skill title="BOOTSTAP" rating="4"/>
                <Skill title="TAILWIND" rating="3"/>
                <Skill title="JAVASCRIPT" rating="4"/>
                <Skill title="REACT" rating="3"/>
                <Skill title="REACT NATIVE" rating="3"/>
                <Skill title="NODE" rating="3"/>
                <Skill title="SQL" rating="3"/>
                <Skill title="PHP" rating="3"/>
                <Skill title="SYMFONY" rating="3"/>
                <Skill title="JAVA" rating="2"/>
                <Skill title="METHODE AGILE" rating="4"/>
                
            </div>
            <div className="skills">
                <h2 className="text-left ml-2 font-bold underline text-xl mb-2">OUTILS</h2>
                <Skill title="GIT / GITHUB" rating="4"/>
                <Skill title="PLANT UML" rating="3"/>
                <Skill title="PLANT TEXT" rating="3"/>
                <Skill title="TRELLO" rating="4"/>
                <Skill title="VISUAL STUDIO CODE" rating="4"/>
                <Skill title="ECLIPSE" rating="3"/>
                <Skill title="INTELLIJ" rating="3"/>
                
            </div>
            <div className="skills">
                <h2 className="text-left ml-2 font-bold underline text-xl mb-2">Langues</h2>
                <Skill title="Anglais" rating="3"/>
            </div>
        </>
    )
}

export default Skills
