import basketImage from "../assets/basket.png"
import { useTheme } from "../context/ThemeContext"

function Hero() {

    const { darkMode } = useTheme()

    return (
        <section
            id="home"
            aria-labelledby="hero-heading"
            className={`min-h-[calc(100vh-80px)] transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
        >
            <div className="max-w-7xl mx-auto px-5 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <span
                            className={`inline-block mb-6 px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? "bg-orange-900/40 text-orange-400" : "bg-orange-100 text-orange-600"}`}
                        >
                            Export Best Quality...
                        </span>
                        <h1
                            id="hero-heading"
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        >
                            Tasty Organic Fruits & Veggies
                            <span className="text-orange-500">
                                {" "}In Your City
                            </span>
                        </h1>
                        <p
                            className={`mt-6 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                        >
                            Fresh, healthy and delicious organic fruits and vegetables delivered straight to your doorstep.
                        </p>
                        <a
                            href="#products"
                            className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-full bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                        >
                            Shop Now
                            <span>
                                <ion-icon name="arrow-forward"></ion-icon>
                            </span>
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src={basketImage}
                            alt="Basket of fresh fruits and vegetables"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl object-contain animate-basket"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero