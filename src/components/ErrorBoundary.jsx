import { Component } from "react"
import PropTypes from "prop-types"

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, errorInfo) {
        console.error("Grocify error:", error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-orange-50 px-5">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Something went wrong
                        </h1>
                        <p className="mt-3 text-gray-600">
                            Sorry, Grocify could not load this page.
                        </p>
                        <button
                            type="button"
                            onClick={() => window.location.reload()}
                            className="mt-6 px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            )
        }
        return this.props.children
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ErrorBoundary