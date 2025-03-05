import Footer from "../component/Footer"
import Navbar from "../component/Navbar"

const Detail = () => {
    return (
        <>
        <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className=" shadow-lg p-6 md:p-8 flex flex-col md:flex-row w-full max-w-5xl">
                    <div className="w-full md:w-1/2 flex flex-col items-start mb-6 md:mb-0 md:pr-8">
                        <h1 className="text-2xl font-bold mb-3">Name Produk</h1>
                        <div className="w-full h-64 flex items-center justify-center bg-gray-200">
                            <img
                                src="https://via.placeholder.com/200x200?text=Product+Image"
                                alt="Product Placeholder"
                                className="object-contain h-full"
                            />
                        </div>

                        {/* Product Info */}

                        <p className="text-gray-600 mt-2">
                            Description
                        </p>

                        <p className="mt-4 font-semibold">Jumlah Terjual</p>
                    </div>

                    {/* Right Section: Similar Products */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-xl font-semibold mb-4">Produk Serupa</h2>

                        {/* Grid of Similar Products */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Card 1 */}
                            <div className="border border-gray-300 p-4 flex items-center justify-center bg-gray-100">
                                <img
                                    src="https://via.placeholder.com/100x100?text=Item+1"
                                    alt="Similar Product 1"
                                    className="object-contain h-20"
                                />
                            </div>

                            {/* Card 2 */}
                            <div className="border border-gray-300 p-4 flex items-center justify-center bg-gray-100">
                                <img
                                    src="https://via.placeholder.com/100x100?text=Item+2"
                                    alt="Similar Product 2"
                                    className="object-contain h-20"
                                />
                            </div>

                            {/* Card 3 */}
                            <div className="border border-gray-300 p-4 flex items-center justify-center bg-gray-100">
                                <img
                                    src="https://via.placeholder.com/100x100?text=Item+3"
                                    alt="Similar Product 3"
                                    className="object-contain h-20"
                                />
                            </div>

                            {/* Card 4 */}
                            <div className="border border-gray-300 p-4 flex items-center justify-center bg-gray-100">
                                <img
                                    src="https://via.placeholder.com/100x100?text=Item+4"
                                    alt="Similar Product 4"
                                    className="object-contain h-20"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Detail