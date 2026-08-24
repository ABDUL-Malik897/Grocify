import { useState } from "react"
import {
    Search,
    Heart,
    ShoppingCart,
    Menu,
    X,
    Sun,
    Moon
} from "lucide-react"


function Navbar({ darkMode, setDarkMode }) {

    const [search, setSearch] = useState("")
    const [menuOpen, setMenuOpen] = useState(false)

    const handleSearch = (event) => {
        event.preventDefault()
        console.log(search)
    }

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    return (
        <nav
            className={`sticky top-0 z-50 border-b ${
                darkMode
                    ? "bg-gray-900 text-white border-gray-700"
                    : "bg-white text-gray-800 border-gray-200"
            }`}
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
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                className="w-36 px-4 py-2 outline-none bg-transparent"
                            />
                            <button
                                type="submit"
                                className="p-2 text-orange-500 hover:bg-orange-50 transition"
                            >
                                <Search size={20} />
                            </button>
                        </form>
                        <button
                            type="button"
                            className="p-2 hover:text-orange-500 transition"
                        >
                            <Heart size={21} />
                        </button>
                        <button
                            type="button"
                            className="p-2 hover:text-orange-500 transition"
                        >
                            <ShoppingCart size={21} />
                        </button>
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="p-2 hover:text-orange-500 transition"
                        >
                            {darkMode ? (
                                <Sun size={21} />
                            ) : (
                                <Moon size={21} />
                            )}
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden p-2 hover:text-orange-500 transition"
                    >
                        {menuOpen ? (
                            <X size={26} />
                        ) : (
                            <Menu size={26} />
                        )}
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
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                className="flex-1 px-4 py-2 outline-none bg-transparent"
                            />
                            <button
                                type="submit"
                                className="p-2 text-orange-500"
                            >
                                <Search size={20} />
                            </button>
                        </form>
                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                className="hover:text-orange-500"
                            >
                                <Heart size={21} />
                            </button>
                            <button
                                type="button"
                                className="hover:text-orange-500"
                            >
                                <ShoppingCart size={21} />
                            </button>
                            <button
                                type="button"
                                onClick={toggleTheme}
                                className="hover:text-orange-500"
                            >
                                {darkMode ? (
                                    <Sun size={21} />
                                ) : (
                                    <Moon size={21} />
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