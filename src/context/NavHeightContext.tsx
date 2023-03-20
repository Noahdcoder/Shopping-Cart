import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface NavHeightContextType {
  navHeight: number;
}

const NavHeightContext = createContext<NavHeightContextType>({
  navHeight: 0,
});

interface NavHeightProviderProps {
  children: ReactNode;
}

export function NavHeightProvider({ children }: NavHeightProviderProps) {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const height = document.querySelector("nav")?.offsetHeight || 0;
      setNavHeight(height);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <NavHeightContext.Provider value={{ navHeight }}>
      {children}
    </NavHeightContext.Provider>
  );
}

export function useNavHeight() {
  const { navHeight } = useContext(NavHeightContext);
  if (navHeight === undefined) {
    throw new Error("useNavHeight must be used within a NavHeightProvider");
  }
  return navHeight;
}
