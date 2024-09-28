import React, { ChangeEvent, FormEvent, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";

interface SelfProps {
    pakianId: string;
    pakaianNama: string;
    pakaianHarga: string;
    pakaianStok: string;
    pakaianGambarUrl: string;
}

export default function Product(props: SelfProps) {
    const [purchaseAmt, setPurchaseAmt] = useState(1);

    const increment = () => {
        setPurchaseAmt((prev) => Math.min(prev + 1, 50));
    };

    const decrement = () => {
        setPurchaseAmt((prev) => Math.max(prev - 1, 1));
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setPurchaseAmt(
            isNaN(Number(value)) || Number(value) < 1 ? 1 : Number(value)
        );
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Detail Produk
                </h2>
            }
        >
            <Head title="Home" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Card>
                        <div className="p-6 text-gray-900 my-12">
                            <div className="flex justify-center">
                                <div className="flex justify-between space-x-32">
                                    <div className="max-w-[20rem]">
                                        <img
                                            className="object-contain rounded-xl"
                                            src="http://via.placeholder.com/320"
                                            alt="image"
                                        />
                                    </div>
                                    <div className="flex flex-col pt-6 space-y-6 max-w-[40rem]">
                                        <div>
                                            <h2 className="font-bold text-3xl">
                                                Product Nama
                                            </h2>
                                        </div>
                                        <div>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Nisi quos optio ullam explicabo
                                                voluptates nesciunt officia
                                                sequi debitis consectetur.
                                                Aliquid ut excepturi distinctio
                                                ex provident facilis sunt, optio
                                                sit voluptates.
                                            </p>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-2xl">
                                                Rp20,000
                                            </h2>
                                        </div>
                                        <div className="flex items-center space-x-6">
                                            <div className="flex justify-center space-x-4 items-center w-fit">
                                                <Button
                                                    isIconOnly
                                                    size="sm"
                                                    color="danger"
                                                    onClick={decrement}
                                                >
                                                    <Minus />
                                                </Button>
                                                <Input
                                                    onChange={onChange}
                                                    value={
                                                        isNaN(purchaseAmt)
                                                            ? "1"
                                                            : purchaseAmt.toString()
                                                    }
                                                    type="text"
                                                    size="lg"
                                                    classNames={{
                                                        input: "border-0 focus:ring-0 text-center",
                                                    }}
                                                    className="text-lg text-center w-[4.25rem]"
                                                />
                                                <Button
                                                    isIconOnly
                                                    size="sm"
                                                    color="primary"
                                                    onClick={increment}
                                                >
                                                    <Plus />
                                                </Button>
                                            </div>
                                            <a href={route("cart")}>
                                                <Button
                                                    className="px-8 py-6 space"
                                                    color="primary"
                                                    startContent={
                                                        <ShoppingCart />
                                                    }
                                                >
                                                    Tambahkan ke Keranjang
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
