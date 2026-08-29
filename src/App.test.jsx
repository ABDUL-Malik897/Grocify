import { render, screen, fireEvent } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"
import App from "./App"
import { ThemeProvider } from "./context/ThemeContext"


const renderApp = () => {
    return render(
        <ThemeProvider>
            <App />
        </ThemeProvider>
    )
}

describe("Grocify Homepage", () => {

    test("renders the Grocify navigation", () => {
        renderApp()
        expect(screen.getByText("Grocify Website")).toBeInTheDocument()
    })

    test("renders the hero heading", () => {
        renderApp()
        expect(screen.getByRole("heading", {name: /Tasty Organic Fruits & Veggies/i})).toBeInTheDocument()
    })

    test("renders the main sections", () => {
        renderApp()
        expect(screen.getByText("Freshness You Can Trust")).toBeInTheDocument()
        expect(screen.getByText("Our Process")).toBeInTheDocument()
        expect(screen.getByText("Fresh Products Coming Your Way")).toBeInTheDocument()
        expect(screen.getByRole("heading", { name: "Contact Us" })).toBeInTheDocument()
    })

    test("search input accepts text", () => {
        renderApp()
        const searchInput = screen.getAllByPlaceholderText("Search...")[0]
        fireEvent.change(searchInput, {
            target: { value: "apple" }
        })
        expect(searchInput).toHaveValue("apple")
    })

    test("search form can be submitted", () => {
        const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {})
        renderApp()
        const searchInput = screen.getAllByPlaceholderText("Search...")[0]
        fireEvent.change(searchInput, {
            target: { value: "banana" }
        })
        fireEvent.submit(searchInput.closest("form"))
        expect(consoleSpy).toHaveBeenCalledWith("Searching for:", "banana")
        consoleSpy.mockRestore()
    })

    test("dark mode button can be clicked", () => {
        renderApp()
        const darkModeButton = screen.getByRole("button", {
            name: /dark mode|light mode|theme/i
        })
        fireEvent.click(darkModeButton)
        expect(document.body).toBeInTheDocument()
    })

    test("mobile menu button can be clicked", () => {
        renderApp()
        const menuButton = screen.getByRole("button", {
            name: /menu/i
        })
        fireEvent.click(menuButton)
        expect(menuButton).toBeInTheDocument()
    })
})