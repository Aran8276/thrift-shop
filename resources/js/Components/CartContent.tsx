import React, { ChangeEvent } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardHeader } from "@nextui-org/card";
import { Minus, Plus } from "lucide-react";
import { CatalogueContent } from "@/Components/CatalogueList";
import { Input } from "@nextui-org/input";

interface SelfProps extends CatalogueContent {
    purchaseAmt: number;
    hargaTotal: number;
    onIncrement: () => void; // function yg return void
    onDecrement: () => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CartContent(props: SelfProps) {
    return (
        <Card className="py-8">
            <div className="flex items-center justify-around">
                <div className="w-48 h-48">
                    <img
                        src="http://via.placeholder.com/400"
                        className="rounded-xl object-contain"
                    />
                </div>
                <div className="space-y-2">
                    <h3 className="text-slate-700 font-bold text-2xl">
                        {props.pakaianNama}
                    </h3>
                    <p className="text-slate-700 text-lg">
                        Rp
                        {props.pakaianHarga.toLocaleString()}
                    </p>
                    <p>Thrift Shop</p>
                </div>
                <div className="flex items-center space-x-4">
                    <Button
                        onClick={props.onDecrement}
                        isIconOnly
                        size="sm"
                        color="danger"
                    >
                        <Minus />
                    </Button>
                    <Input
                        type="text"
                        size="lg"
                        onChange={props.onChange}
                        value={
                            isNaN(props.purchaseAmt)
                                ? "1"
                                : props.purchaseAmt.toString()
                        }
                        classNames={{
                            input: "border-0 focus:ring-0 text-center",
                        }}
                        className="text-lg text-center w-[4.25rem]"
                    />
                    <Button
                        onClick={props.onIncrement}
                        isIconOnly
                        size="sm"
                        color="primary"
                    >
                        <Plus />
                    </Button>
                </div>
                <div className="flex flex-col text-center font-bold text-xl">
                    <h2>Rp{props.hargaTotal.toLocaleString()}</h2>
                </div>
            </div>
        </Card>
    );
}
