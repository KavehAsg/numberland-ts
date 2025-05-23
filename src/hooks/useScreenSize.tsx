import { useEffect, useState } from "react";

const useScreenWidth = (breakPoint = 768) => {
    const [screenWidth, setIsSmallScreen] = useState({
        isSmallScreen: window.innerWidth < breakPoint,
        screenWidth: window.innerWidth,
    });

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen({
                isSmallScreen: window.innerWidth < breakPoint, screenWidth: window.innerWidth
            });
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenWidth;
};

export default useScreenWidth;
