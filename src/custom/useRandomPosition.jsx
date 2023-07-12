import { useEffect, useState } from "react";

const useRandomPosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const newX = Math.random() * window.innerWidth;
      const newY = Math.random() * window.innerHeight;
      setPosition({ x: newX, y: newY });
    };

    const interval = setInterval(updatePosition, 10000);

    return () => clearInterval(interval);
  }, []);

  return position;
};

export default useRandomPosition;
