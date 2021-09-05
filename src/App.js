import "./styles.css";
import PlayList from "./playlist.js";
import { useState } from "react";

export default function App() {
  let [playList, setPlayList] = useState("Romantic");

  function playListHandler(music) {
    setPlayList(music);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>🎵🎵 Music Playlist</h1>
        <h4>Checkout my music Playlist</h4>
        <div id="menu">
          {Object.keys(PlayList).map((item) => {
            return (
              <button id="btn" onClick={() => playListHandler(item)}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <ul>
          {PlayList[playList].map((music) => {
            return (
              <li id="listItem">
                <div id="song">{music.name}</div>
                <div id="pic">
                  <img src={music.pic} id="pic" />
                </div>
                <div id="singer">By {music.singer}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
