import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    let timeoutId;

    const handleMouseStop = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        window.removeEventListener("mousemove", handleMouseMove);
      }, 300); // Adjust the timeout duration as needed
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseStop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseStop);
    };
  }, []);

  return position;
};

export default useMousePosition;
