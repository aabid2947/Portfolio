import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, info) => {
      console.error("Error Boundary Caught an Error:", error, info);
      setHasError(true);
    };

    window.onerror = errorHandler; // Captures errors globally
    window.onunhandledrejection = (event) => errorHandler(event.reason, "Unhandled Promise");

    return () => {
      window.onerror = null;
      window.onunhandledrejection = null;
    };
  }, []);

  const handleReload = () => {
    window.location.reload(); // Refresh the page
  };

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
        <h1 className="text-5xl font-bold text-red-500">🚨 Oops!</h1>
        <p className="text-lg mt-2 text-gray-300">
          Something went wrong. Please try again.
        </p>
        <button
          onClick={handleReload}
          className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-lg transition duration-200"
        >
          🔄 Refresh Page
        </button>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;
