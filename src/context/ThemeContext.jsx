import { createContext, useContext, useState } from "react"
import PropTypes from "prop-types"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false)

    const toggleTheme = () => {
        setDarkMode((currentMode) => !currentMode)
    }

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export function useTheme() {
    return useContext(ThemeContext)
}