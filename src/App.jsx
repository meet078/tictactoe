import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Board from './component/Board';
import PrivacyPolicy from './component/PrivacyPolicy';
import './css/App.css';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Board/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/> }/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
