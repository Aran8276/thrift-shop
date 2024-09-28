import React, { useEffect, useReducer, useRef, useState } from "react";
import PaymentMethodCard from "@/Components/PaymentMethodCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import DeliveryAddressFormSection from "@/Components/Sections/DeliveryAddressFormSection";
import { Button } from "@nextui-org/button";
import { CircleDollarSign } from "lucide-react";

interface PaymentMethods {
    name: string;
    label: string;
    svg: string;
    isSelected: boolean;
}

interface CardPricesState {
    type: "selectPaymentMethod";
    payload: string;
}

const reducer = (state: PaymentMethods[], action: CardPricesState) => {
    switch (action.type) {
        case "selectPaymentMethod":
            return state.map((item) =>
                item.name === action.payload
                    ? { ...item, isSelected: true }
                    : { ...item, isSelected: false }
            );
        default:
            return state;
    }
};

const intialValue: PaymentMethods[] = [
    { name: "dana", label: "Dana", svg: "/dana.svg", isSelected: false },
    { name: "bca", label: "BCA", svg: "/bca.svg", isSelected: false },
    { name: "ovo", label: "OVO", svg: "/ovo.svg", isSelected: false },
    {
        name: "cod",
        label: "Cash on Delivery",
        svg: "/indomaret.png",
        isSelected: false,
    },
];

export default function Payment() {
    const [paymentMethodCards, dispatch] = useReducer(reducer, intialValue);
    const [paymentMethod, setPaymentMethod] = useState("");

    const [pembelianDetailJumlah, setAmt] = useState(5);
    const [subTotal, setSubtotal] = useState(320000);
    const [shipping, setShipping] = useState(6400);
    const [discount, setDiscount] = useState(0);
    const [pembelianDetailTotalHarga, setPrice] = useState(326400);

    const formRef = useRef<HTMLFormElement>(null);

    const submitForm = () => {
        formRef.current?.requestSubmit();
    };

    useEffect(() => {
        dispatch({
            type: "selectPaymentMethod",
            payload: paymentMethod,
        });
    }, [paymentMethod]);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Checkout
                </h2>
            }
        >
            <Head title="Pembayaran" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Card>
                        <div className="p-6 text-gray-900 my-4">
                            <div className="flex justify-start">
                                <div className="flex flex-col space-y-16">
                                    <div>
                                        <h2 className="self-center font-bold text-2xl pb-10">
                                            Metode Pembayaran (data:{" "}
                                            {paymentMethod})
                                        </h2>
                                        <div className="grid grid-cols-2 w-[26rem] gap-y-6 md:w-[52rem] md:grid-cols-4">
                                            {paymentMethodCards.map(
                                                (item, index) => {
                                                    return (
                                                        <PaymentMethodCard
                                                            isSelected={
                                                                item.isSelected
                                                            }
                                                            index={index}
                                                            label={item.label}
                                                            name={item.name}
                                                            setPaymentMethod={
                                                                setPaymentMethod
                                                            }
                                                            svg={item.svg}
                                                            key={index}
                                                        />
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="self-center font-bold text-2xl pb-10">
                                            Informasi Pengiriman
                                        </h2>
                                        {/* handle dgn onSubmit dan ambil nilai pakai event */}
                                        {/* Tombol dibawah akan memanggil function `submitForm` yg mengsubmit */}
                                        {/* form ini menggunakan referensi formRef */}
                                        <form action="#" ref={formRef}>
                                            <DeliveryAddressFormSection
                                                pembelianDetailJumlah={
                                                    pembelianDetailJumlah
                                                }
                                                pembelianDetailTotalHarga={
                                                    pembelianDetailTotalHarga
                                                }
                                                subtotal={subTotal}
                                                discount={discount}
                                                shipping={shipping}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center my-12">
                                <Button
                                    onClick={submitForm}
                                    className="px-12"
                                    size="lg"
                                    color="primary"
                                    startContent={<CircleDollarSign />}
                                >
                                    Bayar
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
