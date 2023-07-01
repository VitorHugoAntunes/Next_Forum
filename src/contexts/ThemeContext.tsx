import { darkTheme, lightTheme } from "@/styles/styles";
import { ReactNode, RefObject, useRef, useState } from "react";
import { createContext } from "react";

interface ThemeContextType {
    theme: string;
    changeThemeStatus: () => void
}

interface ThemeProviderProps {
    children: ReactNode,
}

export const ThemeContext = createContext({} as ThemeContextType)

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState(lightTheme.className);

    function changeThemeStatus() {
        theme === lightTheme.className ? setTheme(darkTheme.className) : setTheme(lightTheme.className);
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            changeThemeStatus
        }}>
            {children}
        </ThemeContext.Provider>
    )
}