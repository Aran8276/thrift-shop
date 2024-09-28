import { Card } from "@nextui-org/card";
import React from "react";

interface SelfProps {
    heading?: string;
    additionalCss?: string;
}

export interface CatalogueContent {
    pakaianNama: string;
    pakaianHarga: number;
    pakaianStok: number;
    pakaianGambarUrl: string;
}

export default function CatalogueList(props: SelfProps) {
    const catalogueList: CatalogueContent[] = [
        {
            pakaianNama: "Baju 1",
            pakaianHarga: 20000,
            pakaianStok: 12,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
        {
            pakaianNama: "Baju 2",
            pakaianHarga: 40000,
            pakaianStok: 0,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
        {
            pakaianNama: "Baju 3",
            pakaianHarga: 120000,
            pakaianStok: 24,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
        {
            pakaianNama: "Baju 3",
            pakaianHarga: 120000,
            pakaianStok: 24,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
        {
            pakaianNama: "Baju 3",
            pakaianHarga: 120000,
            pakaianStok: 24,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
        {
            pakaianNama: "Baju 3",
            pakaianHarga: 120000,
            pakaianStok: 24,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
        {
            pakaianNama: "Baju 3",
            pakaianHarga: 120000,
            pakaianStok: 24,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
        {
            pakaianNama: "Baju 3",
            pakaianHarga: 120000,
            pakaianStok: 24,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
    ];
    return (
        <div className={`flex justify-center flex-col ${props.additionalCss}`}>
            <h1 className="self-center text-center font-bold text-2xl pb-10">
                {props.heading}
            </h1>
            <div
                className={`grid grid-cols-1 md:grid-cols-3 space-y-3 md:space-y-0 gap-6`}
            >
                {catalogueList.map((item, index) =>
                    item.pakaianStok == 0 ? (
                        <Card
                            className="flex flex-col max-w-[18rem] opacity-35 hover:cursor-not-allowed"
                            key={index}
                        >
                            <div className="w-full flex justify-center">
                                <img
                                    src={item.pakaianGambarUrl}
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col space-y-1 px-6 py-3">
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-lg">
                                        {item.pakaianNama}
                                    </h3>
                                    {item.pakaianStok == 0 ? (
                                        <p className="text-red-700">
                                            Stok habis
                                        </p>
                                    ) : (
                                        <p className="text-gray-700">
                                            Tersedia: {item.pakaianStok} stok
                                        </p>
                                    )}
                                </div>
                                <p className="font-bold">
                                    Rp{item.pakaianHarga.toLocaleString()}
                                </p>
                            </div>
                        </Card>
                    ) : (
                        <a href="#">
                            <Card
                                isPressable
                                className="flex flex-col max-w-[18rem] hover:scale-[1.07] text-start"
                                key={index}
                            >
                                <div className="w-full flex justify-center">
                                    <img
                                        src={item.pakaianGambarUrl}
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col space-y-1 px-6 py-3">
                                    <div className="flex flex-col">
                                        <h3 className="font-bold text-lg">
                                            {item.pakaianNama}
                                        </h3>
                                        {item.pakaianStok == 0 ? (
                                            <p className="text-red-700">
                                                Stok habis
                                            </p>
                                        ) : (
                                            <p className="text-gray-700">
                                                Tersedia: {item.pakaianStok}{" "}
                                                stok
                                            </p>
                                        )}
                                    </div>
                                    <p className="font-bold">
                                        Rp{item.pakaianHarga.toLocaleString()}
                                    </p>
                                </div>
                            </Card>
                        </a>
                    )
                )}
            </div>
        </div>
    );
}
