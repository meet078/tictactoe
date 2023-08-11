import React from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
function Column(props) {
  const appState = useContext(AppContext);
  const col = useRef(null);
    let clickHandle = () => {
        if(props.value === -1 && appState.win === 0){
            props.row[props.index] = appState.player?1:0
            col.current.classList.remove("active");
            props.setRow([...props.row])
        }
    }
    return (
        <>
            <div ref={col} className={props.className} onClick={clickHandle} onDoubleClick={(event)=>{event.preventDefault()}}>
                {
                    props.value !== -1?
                    (<img src={`/image/${props.value === 1?'x':'o'}.png`} className="col-image" alt=''/>):
                    (<></>)
                }
            </div>
        </>
    );
}

export default Column;