import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { useState } from 'react';
import Details from './Details';

function App() {
  const [show, setShow] = useState(false);
  const [defobj, setDefobj] = useState({});
  
  function onHide() { 
    setShow(false) 
  }

  function onShow(obj) { 
    setDefobj(obj)
    setShow(true) 
  }

  return (
    <>
      <Header />
      <Main onShow={onShow} />
      <Footer />

      <Details show={show} onHide={onHide} obj={defobj} />
    </>
  );
}

export default App;
