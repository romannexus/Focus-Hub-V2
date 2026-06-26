import { useState, useEffect, useRef } from "react";
import PlayVolume from "./PlayVolume";
import SoundButton from "./SoundButton";

function Atmosphere() {
  const audioRef = useRef(null);
  const [activeSound, setActiveSound] = useState("forest");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const SOUNDS_URL = import.meta.env.VITE_SOUNDS_BASE_URL;

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(`${SOUNDS_URL}/${activeSound}.ogg`);
      audioRef.current.loop = true;
    } else {
      audioRef.current.src = `${SOUNDS_URL}/${activeSound}.ogg`;
      setIsPlaying(false);
    }
  }, [activeSound, SOUNDS_URL]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume / 100;
  }, [volume]);

  return (
    <section className="py-8 px-6 md:px-8 bg-white rounded-[20px] shadow-[0_0_15px_rgba(0,0,0,0.04)] border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold font-condensed text-gray-600 uppercase tracking-wider">
          Atmosphere
        </h2>

        <PlayVolume
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          volume={volume}
          setVolume={setVolume}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <SoundButton
          sound="rain"
          emoji="🌧️"
          label="Rain"
          isActive={activeSound === "rain"}
          onClick={setActiveSound}
        />
        <SoundButton
          sound="calm1"
          emoji="💤"
          label="Calm"
          isActive={activeSound === "calm1"}
          onClick={setActiveSound}
        />
        <SoundButton
          sound="forest"
          emoji="🌲"
          label="Forest"
          isActive={activeSound === "forest"}
          onClick={setActiveSound}
        />
      </div>
    </section>
  );
}

export default Atmosphere;
