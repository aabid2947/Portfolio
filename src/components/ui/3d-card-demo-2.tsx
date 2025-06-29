"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import RotatingGlowButton from "./RotatingGlowButton";
import { ChevronsRight } from 'lucide-react';
export default function ThreeDCardDemo({ project }: {
    project: {
        Name: string;
        Desc: string;
        Live?: string;
        Repo?: string[];
    };
}) {
    const { Name, Desc, Live, Repo } = project;

    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-zinc-950 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-zinc-950 border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">

                {/* Project Title */}
                <CardItem
                    translateZ={50}
                    className="text-xl font-bold font-mono text-neutral-600 text-white"
                >
                    {Name}
                </CardItem>

                {/* Project Description */}
                <CardItem
                    as="p"
                    translateZ={60}
                    className="text-neutral-500 font-mono text-sm max-w-sm mt-2 text-neutral-300"
                >
                    {Desc}
                </CardItem>

                {/* Main Image (unchanged) */}
                <CardItem
                    translateZ={100}
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4 cursor-pointer"

                >
                    <a href={project.Live} target="_blank">
                        <img
                            src={project?.pic}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"

                        />
                    </a>
                </CardItem>

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-20">
                    <a href={Repo[0]} target="_blank">
                        <div className='flex justify-center'>

                            <div
                                className="flex items-center text-center w-36 sm:w-40 gap-2 cursor-pointer px-3 py-2 sm:px-4 sm:py-3 dark:hover:bg-black bg-black hover:bg-white hover:text-black text-white border-black dark:hover:text-white transition-all border-2 dark:border-white dark:bg-white dark:text-black rounded-full font-semibold text-sm sm:text-base"
                            >
                                GitHub Repo
                                <ChevronsRight className='w-4 h-4 sm:w-5 sm:h-5' />
                            </div>
                        </div>
                    </a>
                    {Live ? (
                        <a href={Live} target="_blank">
                            <RotatingGlowButton
                                text="Watch It Live!"
                                width="150px"
                                height="50px"
                            />
                        </a>
                    ) :
                        <RotatingGlowButton
                            text="Not Available"
                            width="150px"
                            height="50px"
                        />
                    }



                </div>
            </CardBody>
        </CardContainer>
    );
}
