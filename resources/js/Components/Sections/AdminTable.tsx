import React from "react";
import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { CatalogueContent } from "../CatalogueList";
import { Link } from "@inertiajs/react";

interface SelfProps {
    data: CatalogueContent[];
}

export default function AdminTable(props: SelfProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Gambar</TableHead>
                    <TableHead>Nama Produk</TableHead>
                    <TableHead>Harga</TableHead>
                    <TableHead className="hidden md:table-cell">Stok</TableHead>
                    <TableHead className="hidden md:table-cell">
                        Dibuat pada
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.data.map((item, index) => {
                    return (
                        <TableRow>
                            <TableCell>
                                <img
                                    alt="Product img"
                                    className="aspect-square rounded-md object-cover max-w-24"
                                    src="http://via.placeholder.com/320"
                                />
                            </TableCell>
                            <TableCell className="font-medium">
                                {item.pakaianNama}
                            </TableCell>
                            <TableCell>
                                Rp{item.pakaianHarga.toLocaleString()}
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                {item.pakaianStok}
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                2023-07-12 10:42 AM
                            </TableCell>
                            <TableCell className="hidden md:table-cell"></TableCell>
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            aria-haspopup="true"
                                            size="icon"
                                            variant="ghost"
                                        >
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">
                                                Toggle menu
                                            </span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>
                                            Aksi
                                        </DropdownMenuLabel>
                                        <Link
                                            href={route("adminEditProduct", {
                                                id: item.pakaianId,
                                            })}
                                        >
                                            <DropdownMenuItem>
                                                Edit
                                            </DropdownMenuItem>
                                        </Link>
                                        <DropdownMenuItem>
                                            <span className="text-red-500">
                                                Hapus
                                            </span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
