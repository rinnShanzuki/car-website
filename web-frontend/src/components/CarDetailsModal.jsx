import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CarDetailsModal = ({ isOpen, onClose, car }) => {
    if (!car) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="bg-gradient-to-b from-gray-900 to-black border border-cyan-500/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-500/10">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-700 text-white flex items-center justify-center transition-colors z-10"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Car Image */}
                            <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-3xl">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8">
                                <div className="mb-6">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{car.name}</h2>
                                    <p className="text-xl text-gray-400">{car.type}</p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <div className="text-gray-400 text-sm mb-1">Price</div>
                                        <div className="text-2xl font-bold text-cyan-400">{car.price}</div>
                                    </div>

                                    {car.category && (
                                        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                            <div className="text-gray-400 text-sm mb-1">Category</div>
                                            <div className="text-2xl font-bold text-white capitalize">{car.category}</div>
                                        </div>
                                    )}
                                </div>

                                {/* Specifications or Features */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-white mb-4">Specifications</h3>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <span className="text-cyan-400">⚡</span>
                                            <span>Electric Powertrain</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <span className="text-cyan-400">🔋</span>
                                            <span>Long Range Battery</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <span className="text-cyan-400">🚀</span>
                                            <span>0-60 in 3.5s</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <span className="text-cyan-400">🛡️</span>
                                            <span>5-Star Safety Rating</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <button
                                    onClick={onClose}
                                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CarDetailsModal;
