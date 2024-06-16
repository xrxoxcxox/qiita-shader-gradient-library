import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
      <ShaderGradientCanvas
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
        }}
      >
        <ShaderGradient
          control="query"
          urlString="animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.5&cAzimuthAngle=0&cDistance=0&cPolarAngle=90&cameraZoom=8&color1=%23ff7a33&color2=%2333a0ff&color3=%23ffc53d&destination=onCanvas&embedMode=off&enableTransition=false&envPreset=dawn&format=gif&fov=30&frameRate=0&grain=off&animate=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=0&rangeStart=0&reflection=0&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&type=sphere&uAmplitude=1&uDensity=2&uFrequency=5.5&uSpeed=0.1&uStrength=1&uTime=0&wireframe=false&zoomOut=false"
        />
      </ShaderGradientCanvas>
    </>
  );
}

export default App;
