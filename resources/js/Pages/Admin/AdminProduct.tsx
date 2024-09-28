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
    const breadcrumb = ["Product"];
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
                            size="sm"
                            variant="outline"
                            className="h-8 gap-1"
                        >
                            <File className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Ekspor
                            </span>
                        </Button>
                        <Button size="sm" className="h-8 gap-1">
                            <PlusCircle className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Tambahkan Produk
                            </span>
                        </Button>
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
