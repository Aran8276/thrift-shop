import { File, ListFilter, PlusCircle } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminTable from "@/Components/Sections/AdminTable";
import { CatalogueContent } from "@/Components/CatalogueList";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";

export default function AdminProduct() {
    const productsList: CatalogueContent[] = [
        {
            pakaianId: "Abcdef",
            pakaianNama: "Baju 1",
            pakaianHarga: 20000,
            pakaianStok: 12,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
        {
            pakaianId: "Abcsadsaddef",
            pakaianNama: "Baju 2",
            pakaianHarga: 40000,
            pakaianStok: 0,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
        {
            pakaianId: "Abc3e3def",
            pakaianNama: "Baju 3",
            pakaianHarga: 120000,
            pakaianStok: 24,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
        {
            pakaianId: "Abc354tdef",
            pakaianNama: "Baju 3",
            pakaianHarga: 120000,
            pakaianStok: 24,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
        {
            pakaianId: "Abcde3e413wef",
            pakaianNama: "Baju 3",
            pakaianHarga: 120000,
            pakaianStok: 24,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
        {
            pakaianId: "Abcd32432ef",
            pakaianNama: "Baju 3",
            pakaianHarga: 120000,
            pakaianStok: 24,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
        {
            pakaianId: "Abe3d32cdef",
            pakaianNama: "Baju 3",
            pakaianHarga: 120000,
            pakaianStok: 24,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
        {
            pakaianId: "Abe32ecd21ef",
            pakaianNama: "Baju 3",
            pakaianHarga: 120000,
            pakaianStok: 24,
            pakaianGambarUrl: "http://via.placeholder.com/300",
        },
    ];
    const breadcrumb = ["Produk"];

    const convertToCSV = (array: CatalogueContent[]) => {
        const header = Object.keys(array[0]).join(",") + "\n";
        const rows = array
            .map((obj) => Object.values(obj).join(","))
            .join("\n");
        return header + rows;
    };

    const downloadCSV = () => {
        const csv = convertToCSV(productsList);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.setAttribute("download", "data_produk.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <AdminLayout breadcrumb={breadcrumb}>
            <Tabs defaultValue="all">
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="all">Semua</TabsTrigger>
                        <TabsTrigger value="instock">Stok Tersedia</TabsTrigger>
                        <TabsTrigger value="outofstock">Stok Habis</TabsTrigger>
                        <TabsTrigger
                            value="archived"
                            className="hidden sm:flex"
                        >
                            Arsip
                        </TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 gap-1"
                                >
                                    <ListFilter className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Sortir
                                    </span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>
                                    Sortir dengan:
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem checked>
                                    -
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Pembelian terbanyak
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Pembelian terendah
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                            onClick={downloadCSV}
                            size="sm"
                            variant="outline"
                            className="h-8 gap-1"
                        >
                            <File className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Ekspor
                            </span>
                        </Button>
                        <Link href={route("adminCreateProduct")}>
                            <Button size="sm" className="h-8 gap-1">
                                <PlusCircle className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                    Tambahkan Produk
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <TabsContent value="all">
                    <Card x-chunk="dashboard-06-chunk-0">
                        <CardHeader>
                            <CardTitle>Produk</CardTitle>
                            <CardDescription>
                                Kelola produk di Thrift Shop.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <AdminTable data={productsList} />
                        </CardContent>
                        <CardFooter>
                            <div className="text-xs text-muted-foreground">
                                Showing <strong>1-10</strong> of{" "}
                                <strong>32</strong> products
                            </div>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="active">
                    <div>Hello world</div>
                </TabsContent>
            </Tabs>
        </AdminLayout>
    );
}
