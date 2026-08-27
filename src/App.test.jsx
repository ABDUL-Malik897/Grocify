import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import App from "./App"

describe("Grocify Homepage", () => {
    test("renders the Grocify navigation", () => {
        render(<App />)
        expect(screen.getByText("Grocify Website")).toBeInTheDocument()
    })
    test("renders the hero heading", () => {
        render(<App />)
        const headings = screen.getAllByText(/Tasty Organic Fruits & Veggies/i)
        expect(headings.length).toBeGreaterThan(0)
    })
})