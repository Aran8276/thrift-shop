import { Card } from "@nextui-org/card";
import { CircleDollarSign, Headset, Lock, Truck } from "lucide-react";
import React from "react";

interface TrustBadge {
    text: string;
    Icon: any;
}

interface SelfProps {
    heading: string;
}

export default function TrustBadgeSection(props: SelfProps) {
    const trustBadges: TrustBadge[] = [
        { text: "Gratis Ongkir", Icon: Truck },
        { text: "Jaminan Uang Kembali", Icon: CircleDollarSign },
        { text: "Layanan 24/7", Icon: Headset },
        { text: "Pembayaran Aman", Icon: Lock },
    ];

    return (
        <div className="flex flex-col space-y-8">
            <h1 className="self-center text-center font-bold text-2xl py-10">
                {props.heading}
            </h1>
            <div className="md:flex justify-center grid grid-cols-2 gap-4 md:flex-row items-center h-full md:h-24 space-x-0 md:space-x-12">
                {trustBadges.map((badge, index) => (
                    <Card
                        key={index}
                        className="flex flex-col justify-center items-center w-44 h-44 text-center space-y-4"
                    >
                        <div>
                            <badge.Icon size={48} />
                        </div>
                        <span className="w-32 h-12 text-center flex justify-center items-center">
                            <span>{badge.text}</span>
                        </span>
                    </Card>
                ))}
            </div>
        </div>
    );
}
