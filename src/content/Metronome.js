import React, { useState } from "react";
import "./../style/metronome.css";

function Metronome() {
  const [Bpm, setBpm] = useState(60);
  const [beat, setbeat] = useState(4);

  let handleScroll = (e) => {
    setBpm(Number(e.target.value));
  };
  const handleIncream = () => {
    if (Bpm >= 300) return;
    setBpm((pre) => pre + 1);
  };
  const handleDecream = () => {
    if (Bpm <= 20) return;
    setBpm((pre) => pre - 1);
  };

  const handleBeatIncream = () => {
    if (beat >= 16) return;
    setbeat((pre) => pre + 1);
  };
  const handleBeatDecream = () => {
    if (beat <= 0) return;
    setbeat((pre) => pre - 1);
  };

  return (
    <section className="content-wapper">
      <div className="container-metro">
        <div className="metronome">
          <div className="bpm-display">
            <span className="tempo">{Bpm}</span>
            <span className="bpm">BPM</span>
          </div>
          <div className="tempo-text">Nice and steady</div>
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
          <div className="start-stop">START</div>
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
