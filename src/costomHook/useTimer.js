import { useState, useEffect } from "react";
import audio1 from "./../audio/a1.mp3";
import audio2 from "./../audio/a2.mp3";

let timer;
let count=0;
let sound1 = new Audio(audio1);
let sound2 = new Audio(audio2);
const clear =()=>{
  clearInterval(timer)
}


function useTimer() {
  const [bpm, setbpm] = useState(60);
  const [beat, setbeat] = useState(4);
  const [text, settext] = useState("");
  const [starting, setstarting] = useState(false);


  let handleScroll = (e) => {
    setbpm(Number(e.target.value));
  };
  const handleIncream = () => {
    if (bpm >= 300) return;
    setbpm((pre) => pre + 1);
  };
  const handleDecream = () => {
    if (bpm <= 20) return;
    setbpm((pre) => pre - 1);
  };

  const handleBeatIncream = () => {
    if (beat >= 16) return;
    setbeat((pre) => pre + 1);
    setstarting(false)
  };
  const handleBeatDecream = () => {
    if (beat <= 1) return;
    setbeat((pre) => pre - 1);
    setstarting(false)
  };

  useEffect(() => {
    if (bpm <= 40) {
      settext("Pianissimo");
    }
    if (bpm > 40 && bpm < 80) {
      settext("Piano");
    }
    if (bpm > 80 && bpm < 120) {
      settext("Mezzo Piano");
    }
    if (bpm > 120 && bpm < 180) {
      settext("Mezzo Forte");
    }
    if (bpm > 180 && bpm < 220) {
      settext("Forte");
    }
    if (bpm > 220 && bpm < 240) {
      settext("Fortissimo");
    }
    if (bpm > 240 && bpm < 260) {
      settext("Fortississimo");
    }
    if (bpm > 260 && bpm <= 280) {
      settext("Sforzando");
    }
  
    timer=window.setInterval(function () {
      if(count===beat){
        count=0
      }
      if(count===0){
        sound2.play()
      }else{
        sound1.play()
      };
      count++
    }, Math.round(60000 / bpm) );


    if(starting){
      timer
    }else{
      clear()
    }
    
  return () =>   clear()

  }, [bpm,starting]);


  return [handleScroll,handleDecream,handleIncream,handleBeatDecream,handleBeatIncream,bpm,beat,text,setstarting,starting]
}

export default useTimer;
