"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
const illustrations = [
    "/SIH_1.jpg",
    "/SIH_2.jpg",
    "/SIH_3.jpg",
    "/SIH_4.jpg",
];

export default function StackedCardGallery() {
    const [active, setActive] = useState(null);

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const randomTransforms = isMobile
        ? [
            "-rotate-[2deg] -translate-x-[5%] translate-y-[5%]",
            "rotate-[2deg] translate-x-[5%] -translate-y-[5%]",
            "-rotate-[1deg] translate-x-[3%] translate-y-[3%]",
            "rotate-[1deg] -translate-x-[3%] translate-y-[2%]",
        ]
        : [
            "-rotate-[35deg] -translate-x-[20%] translate-y-[10%]",
            "rotate-[20deg] translate-x-[15%] -translate-y-[15%]",
            "-rotate-[30deg] translate-x-[10%] translate-y-[5%]",
            "rotate-[10deg] -translate-x-[20%] translate-y-[20%]",
        ];

    const handleClick = (index) => {
        setActive(index);
    };

    return (
        <div className="w-full h-[400px] lg:h-[700px] flex items-start justify-start px-4">
            <div className="relative w-full max-w-3xl h-[600px] perspective-[1500px]">
                {illustrations.map((bg, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={clsx(
                            "absolute w-[280px] h-[360px] rounded-[18px] shadow-xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] bg-cover bg-center",
                            {
                                "z-10 scale-[1.1] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]":
                                    active === index,
                                [
                                    isMobile ?  "top-0 left-0":"top-1/4 left-1/3" 
                                ]: active !== index
                            },
                            active !== index && randomTransforms[index % randomTransforms.length]
                        )}
                        style={{
                            backgroundImage: `url(${bg})`,
                        }}
                    />

                ))}
            </div>
        </div>
    );
}
