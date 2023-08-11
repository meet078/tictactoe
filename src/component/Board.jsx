import { useContext, useEffect, useRef, useState } from 'react';
import Column from './Column';
import Modal from './Modal';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
function Board() {
    const winLine = useRef()
    const appState = useContext(AppContext);
    const [row1, setRow1] = useState([-1, -1, -1]);
    const [row2, setRow2] = useState([-1, -1, -1]);
    const [row3, setRow3] = useState([-1, -1, -1]);
    const reset = () => {
      setRow1([-1, -1, -1]);
      setRow2([-1, -1, -1]);
      setRow3([-1, -1, -1]);
      appState.setWin(0);
      appState.setPlayer(null);
    }
    useEffect(() => {
      switch (appState.win) {
        case 1:
          winLine.current.style.display = "block";
          winLine.current.style.width = "100%"
          winLine.current.style.top = "calc(100%/6*1)"
          winLine.current.style.left = "0"
          winLine.current.style.transform = "translateY(-50%)"
          break;
        case 2:
          winLine.current.style.display = "block";
          winLine.current.style.width = "100%"
          winLine.current.style.top = "calc(100%/6*3)"
          winLine.current.style.left = "0"
          winLine.current.style.transform = "translateY(-50%)"
          break;
        case 3:
          winLine.current.style.display = "block";
          winLine.current.style.width = "100%"
          winLine.current.style.top = "calc(100%/6*5)"
          winLine.current.style.left = "0"
          winLine.current.style.transform = "translateY(-50%)"
          break;
        case 4:
          winLine.current.style.display = "block";
          winLine.current.style.width = "100%"
          winLine.current.style.left = "calc(100%/6*1)";
          winLine.current.style.top = "0";
          winLine.current.style.transform = "translateY(-50%) rotate(90deg)";
          break;
        case 5:
          winLine.current.style.display = "block";
          winLine.current.style.width = "100%"
          winLine.current.style.left = "calc(100%/6*3)"
          winLine.current.style.top = "0"
          winLine.current.style.transform = "translateY(-50%) rotate(90deg)";
          break;
        case 6:
          winLine.current.style.display = "block";
          winLine.current.style.width = "100%"
          winLine.current.style.left = "calc(100%/6*5)"
          winLine.current.style.top = "0"
          winLine.current.style.transform = "translateY(-50%) rotate(90deg)";
          break;
        case 7:
          winLine.current.style.display = "block";
          winLine.current.style.width = "141.52%"
          winLine.current.style.left = "0"
          winLine.current.style.top = "0"
          winLine.current.style.transform = "translateY(-60%) rotate(45deg)";
          break;
        case 8:
          winLine.current.style.display = "block";
          winLine.current.style.width = "141.52%"
          winLine.current.style.left = "100%"
          winLine.current.style.top = "0"
          winLine.current.style.transform = "translateY(-70%) rotate(135deg)";
          break;
        default:
          winLine.current.style.display = "none";
          break;
      }
    }, [appState]);
    useEffect(() => {
      if ((row1[0] === 1 && row1[1] === 1 && row1[2] === 1) || (row1[0] === 0 && row1[1] === 0 && row1[2] === 0)) {
        appState.setWin(1)
      } else if ((row2[0] === 1 && row2[1] === 1 && row2[2] === 1) || (row2[0] === 0 && row2[1] === 0 && row2[2] === 0)) {
        appState.setWin(2)
      } else if ((row3[0] === 1 && row3[1] === 1 && row3[2] === 1) || (row3[0] === 0 && row3[1] === 0 && row3[2] === 0)) {
        appState.setWin(3)
      } else if ((row1[0] === 1 && row2[0] === 1 && row3[0] === 1) || (row1[0] === 0 && row2[0] === 0 && row3[0] === 0)) {
        appState.setWin(4)
      } else if ((row1[1] === 1 && row2[1] === 1 && row3[1] === 1) || (row1[1] === 0 && row2[1] === 0 && row3[1] === 0)) {
        appState.setWin(5)
      } else if ((row1[2] === 1 && row2[2] === 1 && row3[2] === 1) || (row1[2] === 0 && row2[2] === 0 && row3[2] === 0)) {
        appState.setWin(6)
      } else if ((row1[0] === 1 && row2[1] === 1 && row3[2] === 1) || (row1[0] === 0 && row2[1] === 0 && row3[2] === 0)) {
        appState.setWin(7)
      } else if ((row1[2] === 1 && row2[1] === 1 && row3[0] === 1) || (row1[2] === 0 && row2[1] === 0 && row3[0] === 0)) {
        appState.setWin(8)
      } else if (appState.player !== null) {
        appState.setPlayer(!appState.player);
      }
      // eslint-disable-next-line
    }, [row1, row2, row3])
    if (appState.win !== 0) {
      let col = document.querySelectorAll(".col.active");
      for (let i = 0; i < col.length; i++) {
        col[i].classList.remove("active");
      }
    }
    return (
      <>
        {
          appState.player === null &&
          <Modal />
        }
        <div className="background">
          <div className="board-heading">
            Player: {appState.player ? "X" : "O"}
          </div>
          <div className="board">
  
            <div ref={winLine} className="winline">
            </div>
  
            <div className="row top">
              {row1.map((data, index) => {
                return <Column key={index} index={index} className={`col active${index % 2 === 1 ? " middle" : ""}`} row={row1} setRow={setRow1} value={data}></Column>
              })}
            </div>
            <div className="row middle">
              {row2.map((data, index) => {
                return <Column key={index} index={index} className={`col active${index % 2 === 1 ? " middle" : ""}`} row={row2} setRow={setRow2} value={data}></Column>
              })}
            </div>
            <div className="row bottom">
              {row3.map((data, index) => {
                return <Column key={index} index={index} className={`col active${index % 2 === 1 ? " middle" : ""}`} row={row3} setRow={setRow3} value={data}></Column>
              })}
            </div>
  
          </div>
          <div className="board-bottom">
            <button onClick={reset}>Reset</button>
          </div>
        <Link to="/privacypolicy">Privacy Policy</Link>
        </div>

      </>
    );
  }
  
  export default Board;