import { useState } from "react"
import { useTheme } from "../context/ThemeContext"
function Navbar() {

    const [search, setSearch] = useState("")
    const [menuOpen, setMenuOpen] = useState(false)
    const [searchError, setSearchError] = useState("")
    const { darkMode, toggleTheme } = useTheme()

    const handleSearch = (event) => {
        event.preventDefault()
        if (search.trim() === "") {
            setSearchError("Please enter something to search")
            return
        }
        setSearchError("")
        console.log("Searching for:", search)
    }

    const toggleMenu = () => {
        setMenuOpen((isOpen) => !isOpen)
    }

    return (
        <nav
            className={`sticky top-0 z-50 border-b ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-800 border-gray-200"}`}
        >
            <div className="max-w-7xl mx-auto px-5 py-4">
                <div className="flex items-center justify-between">
                    <a
                        href="#home"
                        className="text-2xl font-bold text-orange-500"
                    >
                        Grocify Website
                    </a>
                    <div className="hidden lg:flex items-center gap-8">
                        <a
                            href="#home"
                            className="hover:text-orange-500 transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="hover:text-orange-500 transition-colors"
                        >
                            About Us
                        </a>
                        <a
                            href="#process"
                            className="hover:text-orange-500 transition-colors"
                        >
                            Process
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-orange-500 transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                    <div className="hidden md:flex items-center gap-3">
                        <form
                            onSubmit={handleSearch}
                            className="flex items-center border border-gray-300 rounded-full overflow-hidden"
                        >
                            <input
                                type="text"
                                placeholder="Search..."
                                value={search}
                                onChange={(event) => {
                                    setSearch(event.target.value)
                                    setSearchError('')
                                }}
                                className="w-36 px-4 py-2 outline-none bg-transparent"
                                required
                            />
                            <button
                                type="submit"
                                aria-label="Search"
                                className="p-2 text-orange-500 hover:bg-orange-50 transition"
                            >
                                <ion-icon name="search"></ion-icon>
                            </button>
                        </form>
                        {searchError && (
                            <p className="absolute mt-12 text-xs text-red-500">
                                {searchError}
                            </p>
                        )}
                        <button
                            type="button"
                            aria-label="Wishlist"
                            className="p-2 hover:text-orange-500 transition"
                        >
                            <ion-icon name="heart"></ion-icon>
                        </button>
                        <button
                            type="button"
                            aria-label="Shopping cart"
                            className="p-2 hover:text-orange-500 transition"
                        >
                            <ion-icon name="cart"></ion-icon>
                        </button>
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                            className="p-2 hover:text-orange-500 transition"
                        >
                            {darkMode ? (
                                <ion-icon name="sunny"></ion-icon>
                            ) : (
                                <ion-icon name="moon"></ion-icon>
                            )}
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={toggleMenu}
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={menuOpen}
                        className="lg:hidden p-2 hover:text-orange-500 transition"
                    >
                        {menuOpen ? ('X') : (<ion-icon name="menu"></ion-icon>)}
                    </button>
                </div>
                {menuOpen && (
                    <div className="lg:hidden mt-4 flex flex-col gap-4 pb-2">
                        <a
                            href="#home"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-orange-500"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-orange-500"
                        >
                            About Us
                        </a>
                        <a
                            href="#process"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-orange-500"
                        >
                            Process
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-orange-500"
                        >
                            Contact Us
                        </a>
                        <form
                            onSubmit={handleSearch}
                            className="flex items-center border border-gray-300 rounded-full overflow-hidden"
                        >
                            <input
                                type="text"
                                placeholder="Search..."
                                aria-label="Search groceries"
                                value={search}
                                onChange={(event) => {
                                    setSearch(event.target.value)
                                    setSearchError('')
                                }}
                                className="flex-1 px-4 py-2 outline-none bg-transparent"
                                required
                            />
                            <button
                                type="submit"
                                className="p-2 text-orange-500"
                            >
                                <ion-icon name="search"></ion-icon>
                            </button>
                        </form>
                        {searchError && (
                            <p className="absolute mt-12 text-xs text-red-500">
                                {searchError}
                            </p>
                        )}
                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                aria-label="Open wishlist"
                                className="hover:text-orange-500"
                            >
                                <ion-icon name="heart"></ion-icon>
                            </button>
                            <button
                                type="button"
                                aria-label="Open shopping cart"
                                className="hover:text-orange-500"
                            >
                                <ion-icon name="cart"></ion-icon>
                            </button>
                            <button
                                type="button"
                                onClick={toggleTheme}
                                className="hover:text-orange-500"
                                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {darkMode ? (
                                    <ion-icon name="sunny"></ion-icon>
                                ) : (
                                    <ion-icon name="moon"></ion-icon>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar