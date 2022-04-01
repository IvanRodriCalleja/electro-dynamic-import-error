import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Hello = () => {
  const onClick = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = await window.electron.ipcRenderer.invoke('loadModule');
    console.log(result);
    alert(JSON.stringify(result));
  };

  return (
    <div>
      <button type="button" onClick={onClick}>
        Load dynamic module
      </button>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
