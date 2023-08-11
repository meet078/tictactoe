import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function   Modal() {
    let appState = useContext(AppContext);
    const xClickHandle = () =>{
        appState.setPlayer(true)
    }
    const oClickHandle = () =>{
        appState.setPlayer(false)
    }
    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-heading">
                        <h3>Select Player</h3>
                    </div>
                    <div className="modal-body">
                        <img src="/image/x.png" alt="" onClick={xClickHandle}/>
                        <img src="/image/o.png" alt="" onClick={oClickHandle}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;