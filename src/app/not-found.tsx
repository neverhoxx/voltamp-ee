import React from "react";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black select-none">
            <div className="text-center px-6">
                {/* Неоновая цифра 404 */}
                <h1
                    className="text-[9rem] font-bold drop-shadow-[0_0_25px_#00BFFF]"
                    style={{
                        color: "#00BFFF",

                    }}
                >
                    ⚡ 404 ⚡
                </h1>


                <h2 className="text-3xl font-bold text-gray-200 mt-4">
                    Lost in the Grid
                </h2>

                {/* Подзаголовок */}
                <p className="mt-3 text-gray-400 text-lg max-w-lg mx-auto">
                    The page you are looking for is not connected to the circuit.<br />
                    Maybe the solar panels are offline ☀️🔋
                </p>

                <Link
                    href="/"
                    className="inline-block mt-8 px-10 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
                    style={{
                        backgroundColor: "#00BFFF",
                        boxShadow: "0 0 20px #00BFFF, 0 0 40px #00BFFF",
                    }}
                >
                    ⚡ Back to Power
                </Link>


            </div>
        </div>
    );
}
