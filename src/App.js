import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import ViewDatabase from './components/ViewDatabase';
import ModifyDatabase from './components/ModifyDatabase';
// import About from './components/pages/About';
// import schema from './components/pages/schema';


function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/gui370" exact Component={Home} />
        {/* <Route path="/about" exact Component={About} />
        <Route path="/schema" exact Component={schema} /> */}
        <Route path="/view-database" exact Component={ViewDatabase} />
        <Route path="/modify-database" exact Component={ModifyDatabase} />
     </Routes>
    </Router>
    </>
  );
}

export default App;
