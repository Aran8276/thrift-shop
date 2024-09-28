import React from "react";
import { Card } from "@nextui-org/card";

interface SelfProps {
    index: number;
    name: string;
    svg: string;
    label: string;
    isSelected: boolean;
    setPaymentMethod: (method: string) => void;
}

export default function PaymentMethodCard(props: SelfProps) {
    return (
        <Card
            key={props.index}
            isPressable
            onPress={() => props.setPaymentMethod(props.name)}
            className={
                props.isSelected
                    ? "flex flex-col justify-center items-center w-44 h-44 text-center space-y-4 ring-4 ring-blue-400"
                    : "flex flex-col justify-center items-center w-44 h-44 text-center space-y-4"
            }
        >
            <div className="border-black w-28">
                <img src={props.svg} alt="image" />
            </div>
            <div className="w-32 h-12 max-h-8 text-center flex text-lg justify-center items-center">
                {props.name !== "bca" ? (
                    <span className="relative top-4">{props.label}</span>
                ) : (
                    <span className="relative bottom-6">{props.label}</span>
                )}
            </div>
        </Card>
    );
}
