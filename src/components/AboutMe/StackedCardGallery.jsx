"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import SIH_1 from "../../assets/SIH_1.jpg";
import SIH_2 from "../../assets/SIH_2.jpg";
import SIH_3 from "../../assets/SIH_3.jpg";
import SIH_4 from "../../assets/SIH_4.jpg";

const illustrations = [SIH_1, SIH_2, SIH_3, SIH_4];

export default function StackedCardGallery() {
    const [active, setActive] = useState(null);

    const randomTransforms = [
        "-rotate-[8deg] -translate-x-[30%] translate-y-[10%]",
        "rotate-[20deg] translate-x-[25%] -translate-y-[15%]",
        "-rotate-[30deg] translate-x-[10%] translate-y-[5%]",
        "rotate-[10deg] -translate-x-[20%] translate-y-[20%]",
    ];

    const handleClick = (index) => {
        setActive(index);
    };

    return (
        <div className="w-full h-[700px] flex items-start justify-start px-4">
            <div className="relative w-full max-w-3xl h-[660px] perspective-[1500px]">
                {illustrations.map((bg, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={clsx(
                            "absolute w-[280px] h-[360px] bg-white rounded-[18px] p-6 shadow-xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]",
                            {
                                "z-10 scale-[1.1] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]":
                                    active === index,
                                "top-1/4 left-1/4": active !== index,
                            },
                            active !== index && randomTransforms[index % randomTransforms.length]
                        )}
                    >
                        <div
                            key={index}
                            onClick={() => handleClick(index)}
                            className={clsx(
                                "absolute w-[280px] h-[360px] rounded-[18px] shadow-xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] bg-cover bg-center",
                                {
                                    "z-10 scale-[1.1] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]":
                                        active === index,
                                    "top-0 left-0": active !== index,
                                },
                                active !== index && randomTransforms[index % randomTransforms.length]
                            )}
                            style={{
                                backgroundImage: `url(${bg})`,
                            }}
                        />

                    </div>
                ))}
            </div>
        </div>
    );
}
