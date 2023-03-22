import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Icons
import { HeartIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/20/solid";

export const EventCardVert = () => {
    return (
        <div className="inline-block px-5 py-5">
            <div className="flex flex-col items-center justify-center drop-shadow-xl">
                <div className="relative h-64 w-80 rounded-t-[2rem] border-b-[20px] border-customBlue">
                    <Image src="/images/events/event/prueba01.webp" alt="prueba" fill />
                    <div className="absolute top-0 right-0 m-3 flex h-10 w-10 items-center justify-center rounded-full bg-white drop-shadow-xl">
                        <HeartIcon name="favoriteD" className="w-6 h-6" />
                        {/* <HeartSolid name="favoriteE" className="w-6 h-6 text-customYellow" /> */}
                    </div>
                </div>
                <div className="w-80 rounded-b-[2rem] border-x-customForm shadow-lg bg-white">
                    <div className="space-y-3 px-4 py-5">
                        <h1 className="text-xl font-bold capitalize">Aladín - El Deslumbrante Show De Brodway</h1>
                        <div>
                            <p className="text-base font-light text-customGray">
                                Martes, 16 Enero 2023
                            </p>

                            <p className="text-base font-light text-customGray">
                                19:00 - 00:00 hrs
                            </p>
                        </div>
                        <div className="flex items-center space-x-2 text-customGray">
                            <MapPinIcon name="location" className="w-5 h-5" />
                            <p className="text-base font-medium leading-tight">
                                Centro cultural, Ciudad de México
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
