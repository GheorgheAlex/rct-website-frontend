// import { useState, useEffect, useRef, useCallback } from 'react';

// // icons
// import PauseIcon from '@mui/icons-material/Pause';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
// import VolumeDownIcon from '@mui/icons-material/VolumeDown';
// import VolumeUpIcon from '@mui/icons-material/VolumeUp';

// const Controls = ({
//                     audioRef,
//                   }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(50);
//   const [muteVolume, setMuteVolume] = useState(false);

//   const togglePlayPause = () => {
//     setIsPlaying((prev) => !prev);
//   };

//   useEffect(() => {
//     if (isPlaying) {
//       audioRef.current.play();
//     } else {
//       // audioRef.current.pause();
//     }
//   }, [isPlaying, audioRef]);

//   useEffect(() => {
//     if (audioRef) {
//       // audioRef.current.volume = volume / 100;
//       // audioRef.current.muted = muteVolume;
//     }
//   }, [volume, audioRef, muteVolume]);

//   return (
//     <div className="controls-wrapper">
//       <div className="controls">
//         <button onClick={togglePlayPause}>
//           {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
//         </button>
//       </div>
//       <div className="volume">
//         <button onClick={() => setMuteVolume((prev) => !prev)}>
//           {muteVolume || volume < 5 ? (
//             <VolumeMuteIcon />
//           ) : volume < 40 ? (
//             <VolumeDownIcon />
//           ) : (
//             <VolumeUpIcon />
//           )}
//         </button>
//         <input
//           type="range"
//           min={0}
//           max={100}
//           value={volume}
//           onChange={(e) => setVolume(e.target.value)}
//           style={{
//             background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Controls;