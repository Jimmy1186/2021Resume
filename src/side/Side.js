import React,{useState} from "react";
import Copyright from "./Copyright";
import NameAndPhoto from "./NameAndPhoto";
import Routers from "./Routers";
import ThemeBtm from './ThemeBtm'

function Side({themeToggler}) {
  const [show, setshow] = useState(false)



  return (
    <div>
       <header  id={show ? "header-active":''}>
        <ThemeBtm themeToggler={themeToggler}/>
        <NameAndPhoto />
        <Routers show={show} setshow={setshow}/>
        <Copyright />
      </header>
      <div className="burger" onClick={()=>setshow(!show)}>
             <div className={show ? 'toggle line1' : ''}></div>
             <div className={show ? 'toggle line2' : ''}></div>
             <div className={show ? 'toggle line3' : ''}></div>
        </div>
        
    </div>
  );
}

export default Side;
