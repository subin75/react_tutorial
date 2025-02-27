import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import './Style.scss';
import { BrowserRouter, Router, Route, NavLink, Routes} from 'react-router-dom'
import StateProps from './page/StateProps';
import Deploy from './page/Deploy';
import Css from './page/Css';


function App() {
  return (
    <BrowserRouter>
     <header>
      <NavLink to ="/">HOME</NavLink>
      <NavLink to="/css">CSS</NavLink>
      <NavLink to="/router">Router</NavLink>
      <NavLink to="/stateprops">State&Props</NavLink>
      <NavLink to="/deploy">Deploy</NavLink>
     </header>

     <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/css" element={<Css/>} />
        <Route path="/router" element={<Router/>} />
        <Route path="/stateprops" element={<StateProps/>} />
        <Route path="/deploy" element={<Deploy/>} />
      </Routes>
     </main>
    </BrowserRouter>
  );
}

export default App;
