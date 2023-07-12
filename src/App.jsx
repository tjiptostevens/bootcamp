import { useEffect, useState } from "react";
import "./App.css";
import "./assets/css/other.css";
import "./assets/css/animation.css";
import NavBar from "./website/navbar";
import Home from "./website/home";
import { BekalContextProvider } from "./context/bekalContext";
import { UserContextProvider } from "./context/userContext";
import useMousePosition from "./custom/useMousePosition";
import useRandomPosition from "./custom/useRandomPosition";

function App() {
  const randomPosition = useRandomPosition();
  const mousePosition = useMousePosition();
  const [position, setPosition] = useState({
    x: randomPosition.x,
    y: randomPosition.y,
  });

  useEffect(() => {
    setPosition({ x: mousePosition.x, y: mousePosition.y });
  }, [mousePosition]);

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     const mouseX = event.clientX;
  //     const mouseY = event.clientY;
  //     // console.log(mouseX, mouseY);
  //     setPosition({
  //       ...position,
  //       x: position.x + mouseX,
  //       y: position.y + mouseY,
  //     });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);
  // useEffect(() => {
  //   const updatePosition = () => {
  //     const newX = Math.random() * window.innerWidth;
  //     const newY = Math.random() * window.innerHeight;
  //     setPosition({ x: newX, y: newY });
  //   };

  //   const interval = setInterval(updatePosition, 10000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="__main">
        <div
          className="__ball"
          style={{
            "--ballsize": Math.floor("3000" * Math.random()) + "px",
            "--ballcolor": "#354AE6",
            "--ballx": Math.floor(position.x * Math.random()) + "px",
            "--bally": Math.floor(position.y * Math.random()) + "px",
          }}
        ></div>
        <div
          className="__ball"
          style={{
            "--ballsize": Math.floor("3000" * Math.random()) + "px",
            "--ballcolor": "#0FE3CA",
            "--ballx": Math.floor(position.x * Math.random()) + "px",
            "--bally": Math.floor(position.y * Math.random()) + "px",
          }}
        ></div>
        <div
          className="__ball"
          style={{
            "--ballsize": Math.floor("3000" * Math.random()) + "px",
            "--ballcolor": "#354AE6",
            "--ballx": Math.floor(position.x * Math.random()) + "px",
            "--bally": Math.floor(position.y * Math.random()) + "px",
          }}
        ></div>
        <UserContextProvider>
          <BekalContextProvider>
            <NavBar />
            <Home />
          </BekalContextProvider>
        </UserContextProvider>
        {/* <LmsHome /> */}
        {/* <Login /> */}
        {/* {crypto.randomUUID()} */}
      </div>
    </>
  );
}

export default App;
