import { useEffect, useState } from "react"
import { useTheme } from "./context/ThemeContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {

    const [loading, setLoading] = useState(true)
    const { darkMode } = useTheme()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 700)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div
            className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-white text-gray-900"}
        >
            {loading && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-white">
                    <div className="text-center">
                        <div className="w-10 h-10 mx-auto rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
                        <p className="mt-4 font-semibold text-gray-700">
                            Loading Grocify...
                        </p>
                    </div>
                </div>
            )}
            <Navbar />
            <Hero />
            <section
                id="about"
                className={`px-5 py-20 transition-colors duration-300 ${darkMode ? "bg-gray-800" : "bg-orange-50"}`}
            >
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-orange-500 font-semibold mb-3">
                        ABOUT GROClFY
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                        Freshness You Can Trust
                    </h2>
                    <p
                        className={`max-w-2xl mx-auto leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                        Grocify makes it easy to discover fresh, high-quality fruits and vegetables for your everyday needs. We focus on quality, freshness and simple grocery shopping.
                    </p>
                </div>
            </section>
            <section
                id="process"
                className={`px-5 py-20 transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-white"}`}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-orange-500 font-semibold mb-3">
                            HOW IT WORKS
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Our Process
                        </h2>
                        <p
                            className={`mt-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                        >
                            Fresh groceries delivered in three simple steps.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            className={`p-7 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 ${darkMode ? "bg-gray-800" : "bg-orange-50"}`}
                        >
                            <div className="flex justify-center mb-5">
                                <div className="p-4 rounded-full bg-orange-500 text-white">
                                    <ion-icon name="cart"></ion-icon>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                Choose
                            </h3>
                            <p
                                className={darkMode ? "text-gray-300" : "text-gray-600"}
                            >
                                Browse and select your favourite fruits and vegetables.
                            </p>
                        </div>
                        <div
                            className={`p-7 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 ${darkMode ? "bg-gray-800" : "bg-orange-50"}`}
                        >
                            <div className="flex justify-center mb-5">
                                <div className="p-4 rounded-full bg-orange-500 text-white">
                                    <ion-icon name="cube"></ion-icon>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                Pack
                            </h3>
                            <p
                                className={darkMode ? "text-gray-300" : "text-gray-600"}
                            >
                                Your groceries are carefully prepared for delivery.
                            </p>
                        </div>
                        <div
                            className={`p-7 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 ${darkMode ? "bg-gray-800" : "bg-orange-50"}`}
                        >
                            <div className="flex justify-center mb-5">
                                <div className="p-4 rounded-full bg-orange-500 text-white">
                                    <ion-icon name="car"></ion-icon>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                Deliver
                            </h3>
                            <p
                                className={darkMode ? "text-gray-300" : "text-gray-600"}
                            >
                                Get fresh groceries delivered to your doorstep.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="products"
                className={`px-5 py-20 transition-colors duration-300 ${darkMode ? "bg-gray-800" : "bg-orange-50"}`}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-orange-500 font-semibold mb-3">
                            OUR PRODUCTS
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Fresh Products Coming Your Way
                        </h2>
                        <p
                            className={`mt-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                        >
                            Discover quality fruits and vegetables with Grocify.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div
                            className={`p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 ${darkMode ? "bg-gray-900" : "bg-white"}`}
                        >
                            <div className="flex justify-center mb-5">
                                <div className="p-4 rounded-full bg-orange-100 text-orange-500">
                                    <ion-icon name="nutrition"></ion-icon>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Fresh Fruits
                            </h3>
                            <p
                                className={darkMode ? "text-gray-300" : "text-gray-600"}
                            >
                                Fresh and delicious fruits selected for your everyday needs.
                            </p>
                        </div>
                        <div
                            className={`p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 ${darkMode ? "bg-gray-900" : "bg-white"}`}
                        >
                            <div className="flex justify-center mb-5">
                                <div className="p-4 rounded-full bg-orange-100 text-orange-500">
                                    <ion-icon name="logo-apple"></ion-icon>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Fresh Vegetables
                            </h3>
                            <p
                                className={darkMode ? "text-gray-300" : "text-gray-600"}
                            >
                                Quality vegetables picked with freshness in mind.
                            </p>
                        </div>
                        <div
                            className={`p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 ${darkMode ? "bg-gray-900" : "bg-white"}`}
                        >
                            <div className="flex justify-center mb-5">
                                <div className="p-4 rounded-full bg-orange-100 text-orange-500">
                                    <ion-icon name="leaf"></ion-icon>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Organic Choices
                            </h3>
                            <p
                                className={darkMode ? "text-gray-300" : "text-gray-600"}
                            >
                                Healthy and natural choices for your lifestyle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="contact"
                className={`px-5 py-20 text-center transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-white"}`}
            >
                <div className="max-w-3xl mx-auto">
                    <p className="text-orange-500 font-semibold mb-3">
                        GET IN TOUCH
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Contact Us
                    </h2>
                    <p
                        className={`mt-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                        Have questions? We'd love to hear from you.
                    </p>
                    <button
                        type="button"
                        onClick={() => {window.location.href = "mailto:contact@grocify.com"}}
                        className="mt-7 px-7 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300"
                    >
                        Get In Touch
                    </button>
                </div>
            </section>
            <footer
                className={`px-5 py-6 text-center border-t ${darkMode ? "bg-gray-900 border-gray-700 text-gray-400" : "bg-white border-gray-200 text-gray-500"}`}
            >
                <p>
                    &copy; 2026 Grocify Website. All rights reserved.
                </p>
            </footer>
        </div>
    )
}

export default App