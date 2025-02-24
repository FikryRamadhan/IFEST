import React from 'react'

const LoadingIndicator = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-300"></div>
            </div>
        </div>
    )
}

export default LoadingIndicator