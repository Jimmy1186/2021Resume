import React,{useState} from "react";
import Copyright from "./Copyright";
import NameAndPhoto from "./NameAndPhoto";
import Routers from "./Routers";

function Side() {
  const [show, setshow] = useState(false)



  return (
    <>
      <header  id={show ? "header-active":''}>
        <NameAndPhoto />
        <Routers show={show} setshow={setshow}/>
        <Copyright />
      </header>
      <div className="burger" onClick={()=>setshow(!show)}>
             <div className={show ? 'toggle line1' : ''}></div>
             <div className={show ? 'toggle line2' : ''}></div>
             <div className={show ? 'toggle line3' : ''}></div>
        </div>
    </>
  );
}

export default Side;
