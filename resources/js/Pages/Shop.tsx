import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import CatalogueList from "@/Components/CatalogueList";
import CategoryList from "@/Components/CategoryList";
import { Search } from "lucide-react";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Card } from "@nextui-org/card";

interface CategoryContent {
    kategoriPakaianId: string;
    kategoriPakaianNama: string;
}

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Halaman Belanja
                </h2>
            }
        >
            <Head title="Belanja" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Card>
                        <div className="flex flex-col justify-center p-6 w-full text-gray-900 my-6">
                            <div className="flex space-x-4 pl-8 pt-8">
                                <Input
                                    size="lg"
                                    className="w-fit self-center"
                                    placeholder="Cari Produk"
                                    startContent={<Search />}
                                    classNames={{
                                        input: "border-0 focus:ring-0",
                                    }}
                                />
                                <Select
                                    label="Pilih Stok"
                                    className="w-64"
                                    size="sm"
                                >
                                    <SelectItem key={1}>Semua</SelectItem>
                                    <SelectItem key={2}>Tersedia</SelectItem>
                                </Select>
                                <Select
                                    label="Sortir Harga"
                                    className="w-64"
                                    size="sm"
                                >
                                    <SelectItem key={1}>-</SelectItem>
                                    <SelectItem key={2}>Termahal</SelectItem>
                                    <SelectItem key={3}>Termurah</SelectItem>
                                </Select>
                            </div>
                            <div className="flex justify-around space-x-4">
                                <div className="relative left-8 mt-16">
                                    <CategoryList />
                                </div>
                                <div className="relative left-8 scale-[0.86] bottom-12">
                                    <CatalogueList />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
