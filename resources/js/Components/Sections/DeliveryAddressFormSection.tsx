import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import React, { useEffect, useState } from "react";
import { City, cityIndonesia, provinceIndonesia } from "../Data/Indonesia";
import { Button } from "@nextui-org/button";
import { CircleDollarSign } from "lucide-react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

interface SelfProps {
    pembelianDetailJumlah: number;
    pembelianDetailTotalHarga: number;
    subtotal: number;
    discount: number;
    shipping: number;
}

export default function DeliveryAddressFormSection(props: SelfProps) {
    const [cityFiltered, setCity] = useState<City[]>([]);
    const [selectedProvince, setSelectedProvince] = useState("");

    // useEffect(() => {},[])

    const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProvince(e.target.value);
    };

    useEffect(() => {
        const filteredCities = cityIndonesia.filter(
            (item) => item.province == selectedProvince
        );

        setCity(filteredCities);
    }, [selectedProvince]);

    return (
        <div className="flex justify-start space-x-16 w-screen">
            <div className="w-[38rem]">
                <div className="flex flex-col space-y-4">
                    <div className="flex space-x-4">
                        <div className="w-full">
                            <Input
                                name="firstName"
                                label="Nama Depan"
                                classNames={{
                                    input: "border-0 focus:ring-0 relative top-2 px-2",
                                    label: "px-2",
                                }}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <Input
                                name="lastName"
                                label="Nama Belakang"
                                classNames={{
                                    input: "border-0 focus:ring-0 relative top-2 px-2",
                                    label: "px-2",
                                }}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <div className="w-full">
                            <Input
                                name="email"
                                label="Email"
                                value="aran8276@gmail.com"
                                classNames={{
                                    input: "border-0 focus:ring-0 relative top-2 px-2",
                                    label: "px-2",
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="w-full">
                            <Input
                                name="phone"
                                label="Nomor Telepon"
                                classNames={{
                                    input: "border-0 focus:ring-0 relative top-2 px-2",
                                    label: "px-2",
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex space-x-4">
                            <div className="w-full">
                                <Select
                                    label="Provinsi"
                                    onChange={handleSelectionChange}
                                >
                                    {provinceIndonesia.map((item) => {
                                        return (
                                            <SelectItem key={item.name}>
                                                {item.label}
                                            </SelectItem>
                                        );
                                    })}
                                </Select>
                            </div>
                            <div className="w-full">
                                <Select
                                    label="Kota"
                                    isDisabled={
                                        cityFiltered.length < 1 ? true : false
                                    }
                                >
                                    {cityFiltered.map((item) => {
                                        return (
                                            <SelectItem key={item.name}>
                                                {item.label}
                                            </SelectItem>
                                        );
                                    })}
                                </Select>
                            </div>
                            <div className="w-full">
                                <Input
                                    isDisabled={
                                        cityFiltered.length < 1 ? true : false
                                    }
                                    name="postal"
                                    label="Kode Pos"
                                    classNames={{
                                        input: "border-0 focus:ring-0 relative top-2 px-2",
                                        label: "px-2",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full">
                            <Input
                                isClearable
                                name="address"
                                label="Alamat Rumah"
                                classNames={{
                                    input: "border-0 focus:ring-0 relative top-2 px-2",
                                    label: "px-2",
                                }}
                            ></Input>
                        </div>
                    </div>
                </div>
            </div>
            <Card className="relative bottom-12 w-[30rem]">
                <CardHeader className="flex justify-center py-6">
                    <h2 className="font-bold text-lg text-center">
                        Ringkasan Pembelian
                    </h2>
                </CardHeader>
                <Divider />
                <CardBody className="flex flex-col space-y-3 p-6">
                    <div className="flex w-full justify-center pb-6">
                        <p>{props.pembelianDetailJumlah} barang</p>
                    </div>
                    <div className="flex justify-between w-full">
                        <strong className="font-bold">Subtotal</strong>
                        <p>Rp{props.subtotal.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between w-full">
                        <strong className="font-bold">Diskon</strong>
                        <p>Rp{props.discount.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between w-full">
                        <strong className="font-bold">Ongkir</strong>
                        <p>Rp{props.shipping.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between w-full">
                        <strong className="font-bold">Total Belanja</strong>
                        <p>
                            Rp{props.pembelianDetailTotalHarga.toLocaleString()}
                        </p>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
