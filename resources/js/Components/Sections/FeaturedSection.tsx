import { Button } from "@nextui-org/button";
import React from "react";

export default function FeaturedSection() {
    return (
        <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 space-x-0 md:space-x-8 mx-6 py-24">
            <div className="md:hidden mb-8">
                <img
                    src="/rack.jpg"
                    alt="rack.jpg"
                    className="object-cover w-full rounded-xl shadow-lg"
                />
            </div>
            <div className="flex justify-center items-center max-w-[40rem]">
                <div className="flex flex-col space-y-8">
                    <h1 className="font-bold text-3xl text-center md:text-start">
                        Baju Merek Bagus Itu Bagus Sangat
                    </h1>
                    <h2 className="text-gray-700 text-xl text-center md:text-start">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptate, neque tempore. Ratione ipsum
                        perferendis ducimus?
                    </h2>
                    <div className="flex md:justify-start justify-center">
                        <Button
                            size="lg"
                            className="bg-sky-500 px-12 py-6 text-lg text-white"
                        >
                            Belanja
                        </Button>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <img
                    src="/rack.jpg"
                    alt="rack.jpg"
                    className="object-cover w-[32rem] rounded-xl shadow-lg"
                />
            </div>
        </div>
    );
}
