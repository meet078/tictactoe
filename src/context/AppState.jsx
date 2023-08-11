import { useState } from "react";
import AppContext from "./AppContext";

function AppState(props) {
    const [player, setPlayer] = useState(null);
    const [win, setWin] = useState(0);
    return (
        <AppContext.Provider value={{
            player,
            setPlayer,
            win,
            setWin
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppState;