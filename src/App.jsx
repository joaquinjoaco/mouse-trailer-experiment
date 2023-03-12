import { useEffect } from 'react';
import { useMouseTrailer } from './useMouseTrailer';
function App() {

  useEffect(() => {
    useMouseTrailer();
  }, []);

  return (
    <div className="App">

      <div className="hero inside">

        <div id="blob"></div>
        <div id="blob2"></div>
        <div id="blur"></div>

        <div className="borders">
          <div className="heroContainer">
            <h1 className="interactable">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, earum.</h1>
          </div>
        </div>
      </div>

      <div className="container outside">
        <h1 className="interactable">Test</h1>
      </div>
      <div className="container outside">
        <h1 className="interactable">Test</h1>
      </div>
      <div className="container white">
        <h1 className="interactable">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, earum.</h1>
      </div>

    </div>

  )
}

export default App;
