import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { CatalogueContent } from "@/Components/CatalogueList";
import CartContent from "@/Components/CartContent";
import { useEffect, useReducer, useState } from "react";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { MoveRight } from "lucide-react";

interface CartDetail extends CatalogueContent {
    pakaianId: string;
    purchaseAmt: number;
}

interface CardPrices {
    name: string;
    label: string;
    amt: number;
}

interface CartContentState {
    type: "increment" | "decrement" | "onchange";
    payload: string;
    value?: number;
}

interface CardPricesState {
    type: "changeValue";
    payload: "discount" | "shipping" | "subtotal";
    value: number;
}

const initialPricesValue: CardPrices[] = [
    { name: "subtotal", label: "Subtotal", amt: 0 },
    { name: "shipping", label: "Ongkir", amt: 0 },
    { name: "discount", label: "Diskon", amt: 0 },
];

const initialCartValue: CartDetail[] = [
    {
        pakaianId: "aWer3wef",
        pakaianNama: "Baju 1",
        pakaianHarga: 20000,
        pakaianStok: 12,
        purchaseAmt: 2,
        pakaianGambarUrl: "http://via.placeholder.com/300",
    },
    {
        pakaianId: "bcdwre",
        pakaianNama: "Baju 2",
        pakaianHarga: 40000,
        pakaianStok: 3,
        purchaseAmt: 1,
        pakaianGambarUrl: "http://via.placeholder.com/300",
    },
    {
        pakaianId: "4e45y5rt",
        pakaianNama: "Baju 3",
        pakaianHarga: 120000,
        pakaianStok: 24,
        purchaseAmt: 2,
        pakaianGambarUrl: "http://via.placeholder.com/300",
    },
];

const cardPricesReducer = (state: CardPrices[], action: CardPricesState) => {
    switch (action.type) {
        case "changeValue":
            return state.map((item) =>
                item.name === action.payload
                    ? { ...item, amt: action.value }
                    : item
            );
        default:
            return state;
    }
};

const cartContentReducer = (state: CartDetail[], action: CartContentState) => {
    switch (action.type) {
        case "increment":
            return state.map((item) =>
                // jika pakaianId === parameter yg diberikan
                item.pakaianId === action.payload
                    ? /// ... = spread operator atau disebarkan
                      {
                          ...item,
                          purchaseAmt: Math.min(item.purchaseAmt + 1, 50),
                      }
                    : item
            );
        case "decrement":
            return state.map((item) =>
                item.pakaianId === action.payload
                    ? {
                          ...item,
                          purchaseAmt: Math.max(item.purchaseAmt - 1, 1),
                      }
                    : item
            );

        case "onchange":
            return state.map((item) =>
                item.pakaianId == action.payload
                    ? {
                          ...item,
                          purchaseAmt: Math.max(
                              1,
                              Math.min(action.value ?? item.purchaseAmt, 50)
                          ),
                      }
                    : item
            );

        default:
            return state;
    }
};

export default function Dashboard() {
    const [catalogueList, dispatchCart] = useReducer(
        cartContentReducer,
        initialCartValue
    );
    const [cardPricesList, dispatchPrice] = useReducer(
        cardPricesReducer,
        initialPricesValue
    );
    const [grandTotal, setGrandTotal] = useState(0);
    const [totalPurchaseAmt, setTotalPurchaseAmt] = useState(0);
    const [lastDiscountValue, setLastDiscountValue] = useState(0);

    const handleChangeQty = () => {
        const cartTotalSum = catalogueList.reduce(
            (sum, item) => sum + item.purchaseAmt * item.pakaianHarga,
            0
        );
        const newTotalQty = catalogueList.reduce(
            (sum, item) => sum + item.purchaseAmt,
            0
        );

        let newShipping = (cartTotalSum * 2) / 100;
        let newDiscount = 0;

        if (newTotalQty < 10) {
            newDiscount = 0;
        } else if (newTotalQty < 20) {
            newDiscount = (cartTotalSum * 10) / 100;
        } else if (newTotalQty == 20) {
            newDiscount = (cartTotalSum * 10) / 100;
            setLastDiscountValue((cartTotalSum * 10) / 100);
        } else if (newTotalQty > 20) {
            newDiscount = lastDiscountValue;
        }

        dispatchPrice({
            type: "changeValue",
            payload: "shipping",
            value: newShipping,
        });

        dispatchPrice({
            type: "changeValue",
            payload: "discount",
            value: newDiscount,
        });

        dispatchPrice({
            type: "changeValue",
            payload: "subtotal",
            value: cartTotalSum,
        });

        setTotalPurchaseAmt(newTotalQty);
        setGrandTotal(cartTotalSum + newShipping - newDiscount);
    };

    useEffect(() => {
        handleChangeQty();
    }, []);

    useEffect(() => {
        handleChangeQty();
    }, [catalogueList]);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Keranjang
                </h2>
            }
        >
            <Head title="Keranjang" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Card>
                        <div className="p-6 text-gray-900 my-3">
                            <div className="flex flex-col space-y-6">
                                <div className="flex flex-col space-y-4">
                                    {catalogueList.map((item, index) => {
                                        return (
                                            <CartContent
                                                key={index}
                                                hargaTotal={
                                                    item.purchaseAmt *
                                                    item.pakaianHarga
                                                }
                                                pakaianNama={item.pakaianNama}
                                                pakaianHarga={item.pakaianHarga}
                                                pakaianStok={item.pakaianStok}
                                                purchaseAmt={item.purchaseAmt}
                                                pakaianGambarUrl={
                                                    item.pakaianGambarUrl
                                                }
                                                onIncrement={() => {
                                                    dispatchCart({
                                                        type: "increment", // aksi yg dilakukan
                                                        payload: item.pakaianId, // parameter yg kita berikan (atau objek yg mana kita akan edit lah)
                                                    });
                                                }}
                                                onDecrement={() => {
                                                    dispatchCart({
                                                        type: "decrement",
                                                        payload: item.pakaianId,
                                                    });
                                                }}
                                                onChange={(e) => {
                                                    dispatchCart({
                                                        type: "onchange",
                                                        payload: item.pakaianId,
                                                        value: parseInt(
                                                            // nilai yg kita kasih nanti
                                                            e.target.value
                                                        ),
                                                    });
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="pt-12 px-3">
                                <div className="grid grid-cols-4">
                                    {cardPricesList.map((item, index) => {
                                        return (
                                            <Card className="max-w-[256px] min-h-[128px]">
                                                <CardHeader className="flex justify-center">
                                                    <p className="text-lg text-center">
                                                        {item.label}
                                                    </p>
                                                </CardHeader>
                                                <Divider />
                                                <CardBody className="flex justify-center items-center">
                                                    <h2 className="text-lg font-bold">
                                                        Rp
                                                        {item.amt.toLocaleString()}
                                                    </h2>
                                                </CardBody>
                                            </Card>
                                        );
                                    })}
                                    <Card className="max-w-[256px] min-h-[128px]">
                                        <CardHeader className="flex justify-center">
                                            <p className="text-lg text-center">
                                                Total Belanja (
                                                {totalPurchaseAmt} item)
                                            </p>
                                        </CardHeader>
                                        <Divider />
                                        <CardBody className="flex justify-center items-center">
                                            <h2 className="text-lg font-bold">
                                                Rp
                                                {grandTotal.toLocaleString()}
                                            </h2>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="float-right pt-12 pr-12">
                                    <a href={route("payment")}>
                                        <Button
                                            size="lg"
                                            className="bg-yellow-300/100"
                                            variant="shadow"
                                            endContent={<MoveRight size={24} />}
                                        >
                                            Checkout Pembayaran
                                        </Button>
                                    </a>
                                    <div className="grid grid-cols-2 gap-8 py-8 w-full self-center scale-[0.85]">
                                        <img className="w-24" src="/dana.svg" />
                                        <img
                                            className="w-24"
                                            src="/indomaret.png"
                                        />
                                        <img className="w-24" src="/ovo.svg" />
                                        <img
                                            className="relative bottom-[34px] w-24"
                                            src="/bca.svg"
                                        />
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
