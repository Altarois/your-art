import './App.css';
import {Routes, Route, Navigate } from "react-router-dom";
import Gallery from './components/Gallery';

function App() {
  return (
    <Routes>
   
            <Route path="*" exact element={<Navigate to="/artwork/1" replace />} />
            <Route path="artwork/:commandId" index element={<Gallery />} />

    </Routes>
  );
}

export default App;
