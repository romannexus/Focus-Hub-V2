import { createContext, useContext, useReducer } from "react";

const initialState = {
    isPlaying: false,
    volume: 50,
    sound: "rain",
}
const SoundContext = createContext();
function reducer(state, action) {
    switch (action.type) {
        case "setIsPlaying":
            return { ...state, isPlaying: action.payload };
        case "setVolume":
            return { ...state, volume: action.payload };
        case "setSound":
            return { ...state, sound: action.payload };
        default:
            return state;
    }
}

function SoundProvider({ children }) {
    const [{ isPlaying, volume, sound }, dispatch] = useReducer(reducer, initialState);
    function setIsPlaying(value) {
        dispatch({ type: "setIsPlaying", payload: value });
    }
    function setVolume(value) {
        dispatch({ type: "setVolume", payload: value });
    }
    function setSound(value) {
        dispatch({ type: "setSound", payload: value });
    }
    return (
        <SoundContext.Provider value={{ isPlaying, volume, sound, setIsPlaying, setVolume, setSound }}>
            {children}
        </SoundContext.Provider>
    )
}

const useSound = () => {
    const context = useContext(SoundContext);
    if (context === undefined) {
        throw new Error("useSound must be used within a SoundProvider");
    }
    return context;
}

export { SoundProvider, useSound };