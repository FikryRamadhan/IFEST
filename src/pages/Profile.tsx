import React, { useState } from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const Profile = () => (
    <div className="bg-white p-4 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" placeholder="John Doe" className="w-full lg:w-1/2  bg-gray-100 p-2  rounded-lg" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" placeholder="johndoe@gmail.com" className="w-full lg:w-1/2  bg-gray-100 p-2  rounded-lg" />
            </div>
            <button className="bg-black text-white px-4 py-2 rounded">Update Profile</button>
        </form>
    </div>
);

const Wishlist = () => (
    <div className="bg-white p-4 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
        <p>No items in your wishlist.</p>
    </div>
);

const Settings = () => (
    <div className="bg-white p-4 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Change Password</h1>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700">New Password</label>
                <input type="password" placeholder="New Password" className="w-full lg:w-1/2 bg-gray-100 p-2 rounded-lg" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" className="w-full lg:w-1/2 bg-gray-100 p-2 rounded-lg" />
            </div>
            <button className="bg-black text-white px-4 py-2 rounded">Change Password</button>
        </form>
    </div>
);

const OrderHistory = () => {
    const [activeSection, setActiveSection] = useState('Order History');

    const renderContent = () => {
        switch (activeSection) {
            case 'Profile':
                return <Profile />;
            case 'Wishlist':
                return <Wishlist />;
            case 'Settings':
                return <Settings />;
            default:
                return (
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <h1 className="text-2xl font-bold mb-6">Order History</h1>
                        <div className="space-y-4">
                            {[{
                                orderId: '12345',
                                date: 'Jan 15, 2025',
                                productName: 'Product Name',
                                quantity: 1,
                                price: 99.99
                            }, {
                                orderId: '12346',
                                date: 'Jan 10, 2025',
                                productName: 'Product Name',
                                quantity: 2,
                                price: 199.98
                            }].map(order => (
                                <div key={order.orderId} className="flex flex-row md:flex-row items-center justify-between bg-white p-4 shadow-md rounded-lg">
                                    <div>
                                        <p className="text-gray-500">Order #{order.orderId}</p>
                                        <p className="text-sm text-gray-500">Placed on {order.date}</p>
                                        <div className="mt-2 flex items-center space-x-2">
                                            <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-lg">
                                                <span className="text-gray-400">🛒</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold">{order.productName}</p>
                                                <p className="text-gray-500">Quantity: {order.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right mt-4 md:mt-0">
                                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full mb-2">Delivered</span>
                                        <p className="text-xl font-bold">${order.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row p-10 bg-gray-100 h-[70%] pt-25">
                <aside className="w-full md:w-1/4 p-4 bg-white shadow-md rounded-xl mb-6 md:mb-0">
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                            <span className="text-4xl">👤</span>
                        </div>
                        <h2 className="text-xl font-semibold">John Doe</h2>
                        <p className="text-gray-500">Member since 2025</p>
                    </div>
                    <nav className="mt-6 lg:ml-20 max-md:ml-20">
                        <ul className="space-y-4">
                            {['Profile', 'Order History', 'Wishlist', 'Settings'].map((section) => (
                                <li key={section}>
                                    <button
                                        className={`flex items-center space-x-2 text-gray-700 hover:text-black ${activeSection === section ? 'font-bold' : ''}`}
                                        onClick={() => setActiveSection(section)}
                                    >
                                        <span>{section === 'Profile' ? '👤' : section === 'Order History' ? '🔄' : section === 'Wishlist' ? '❤️' : '⚙️'}</span>
                                        <span>{section}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <main className="flex-1 min-md:ml-10">
                    {renderContent()}
                </main>
            </div>
            <Footer />
        </>
    );
};

export default OrderHistory;
