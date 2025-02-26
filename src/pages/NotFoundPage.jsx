import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFoundPage() {
    const navigate = useNavigate();
    const [glitchText, setGlitchText] = useState("404");

    useEffect(() => {
        const glitchInterval = setInterval(() => {
            const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
            const randomChar = chars[Math.floor(Math.random() * chars.length)];
            const position = Math.floor(Math.random() * 3);
            setGlitchText((prev) => prev.substring(0, position) + randomChar + prev.substring(position + 1));
            setTimeout(() => setGlitchText("404"), 100);
        }, 2000);

        return () => clearInterval(glitchInterval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <div className="text-center space-y-8 p-8 max-w-md">
                <h1 className="text-9xl font-extrabold relative">
                    <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-300">
                        {glitchText}
                    </span>
                    <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-50 text-gray-600 animate-pulse">
                        404
                    </span>
                </h1>
                <p className="p-6 text-xl text-gray-400">
                    Oops! The page you are looking for has vanished into the digital void.
                </p>
                <Button
                    className="text-zinc-900 hover:text-blue-600 transition-transform duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-md  hover:shadow-lg"
                    variant="outline"
                    onClick={() => navigate("/")}
                >
                    <Home className="w-4 h-4 mr-2" />
                    Return Home
                </Button>

            </div>
        </div>
    );
}
