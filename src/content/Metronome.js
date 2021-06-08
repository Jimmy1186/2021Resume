import React from "react";
import './../style/metronome.css'

function Metronome() {
  return (
    <section className="content-wapper">
     <div className="container-metro">
        <div className="metronome">
            <div className="bpm-display">
                <span className="tempo">140</span>
                <span className="bpm">BPM</span>
            </div>
            <div className="tempo-text">Nice and steady</div>
            <div className="tempo-settings">
                <div className="adjust-tempo-btn decrease-tempo">-</div>
                <input type="range" min="20" max="280" step="1" className="metro-slider"></input>
                <div className="adjust-tempo-btn increase-tempo">+</div>
            </div>
            <div className="start-stop">START</div>
            <div className="measures">
                <div className="subtract-beats stepper">-</div>
                <div className="measure-count">4</div>
                <div className="add-beats stepper">+</div>
            </div>
            <span className="beats-per-measure-text">Beats per measure</span>
        </div>
    </div>
    </section>
  );
}

export default Metronome;
