import React from "react";
import "./../style/metronome.css";
import useTimer from "./../costomHook/useTimer";


function Metronome() {

  const[handleScroll,handleDecream,handleIncream,handleBeatDecream,handleBeatIncream,bpm,beat,text,setstarting,starting] = useTimer()



  return (
    <section className="content-wapper">
      <div className="container-metro">
        <div className="metronome">
          <div className="bpm-display">
            <span className="tempo">{bpm}</span>
            <span className="bpm">BPM</span>
          </div>
          <div className="tempo-text">{text}</div>
          <div className="tempo-settings">
            <div
              className="adjust-tempo-btn decrease-tempo"
              onClick={handleDecream}
            >
              -
            </div>
            <input
              type="range"
              min="20"
              max="300"
              step="1"
              className="metro-slider"
              onChange={handleScroll}
            ></input>
            <div
              className="adjust-tempo-btn increase-tempo"
              onClick={handleIncream}
            >
              +
            </div>
          </div>
          <div className="start-stop" onClick={() => setstarting(!starting)}>
            {starting ? "STOP":"START"}
          </div>
          <div className="measures">
            <div className="subtract-beats stepper" onClick={handleBeatDecream}>
              -
            </div>
            <div className="measure-count">{beat}</div>
            <div className="add-beats stepper" onClick={handleBeatIncream}>
              +
            </div>
          </div>
          <span className="beats-per-measure-text">Beats per measure</span>
        </div>
      </div>
    </section>
  );
}

export default Metronome;
