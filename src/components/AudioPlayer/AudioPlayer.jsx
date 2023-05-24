import { useEffect, useRef, useState } from "react";
import { radioSource } from '../../utils/audioPlayerPaths';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { IconButton } from "@mui/material";
import "./AudioPlayer.scss"

// import components
// import Controls from './Controls';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [muteVolume, setMuteVolume] = useState(false);

  // const audioElement = new Audio(radioSource);
  // audioElement.setAttribute("preload", "true");

  // const togglePlayPause = () =>{
  //   // if(audioElement.waiting){
  //     // audioElement.pause();
  //     // console.log("Buffering..")
  //   // }
  //   // console.log(audioElement.waiting)
  //   if (isPlaying){
  //     audioElement.pause();
  //     setIsPlaying(false);
  //   } else{ 
  //     audioElement.play();
  //     setIsPlaying(true);
  //   }
  //  console.log(audioElement.play)
  // }

  return (
    <>
      <div className="audio-player">
        {/* <IconButton aria-label="play/pause" onClick={togglePlayPause}> */}
          {/* {isPlaying ? <PauseIcon /> : <PlayArrowIcon />} */}
        {/* </IconButton> */}

        <audio preload="true" src={radioSource} controls className="audioPlayerStyle">
          <PlayArrowIcon onClick={() => console.log(Audio)}/>
          
        </audio>

      </div>
    </>
  );
};
export default AudioPlayer;