import React from 'react';
import './App.css';
import Skills from './components/Skills';
import User from './components/User';
import Experiences from './components/Experiences';
import Formations from './components/Formations';
import Porfolio from './components/Porfolio';
import Interests from './components/Interests';



function App() {
    return (
        <div className="App">
          <div className="flex ...">
            <div className="border border-sky-500... w-1/4 text-center bg-blue-500 m-px">
              <User ></User>
              <Skills/>
              <Interests/>
                
        
            </div>
            <div className="border border-sky-500... w-3/4 border bg-slate-200 m-px">
              <Experiences/>
              <Formations/>
              <Porfolio/>
        
                
        
        
        
            </div>
        
        
            
          </div>   
                {/* react, material ui, react-html2pdf */}
                {/* variables css*/}
                

                

                {/*light / dark mode*/}
                {/*génération pdf*/}
           
        </div>
        
    );
}

export default App;
