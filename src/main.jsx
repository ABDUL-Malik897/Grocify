import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import ErrorBoundary from "./components/ErrorBoundary"
import "./index.css"
import { ThemeProvider } from "./context/ThemeProvider.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </StrictMode>
)