import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import AdminLayout from "@/Layouts/AdminLayout";
import { Progress } from "@/Components/ui/progress";
import React from "react";
import LineChartComp from "@/Components/LinearChartComp";
import { Link } from "@inertiajs/react";

export default function AdminDashboard() {
    return (
        <AdminLayout breadcrumb={["Dashboard"]}>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8 space-x-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-[36rem] w-[22rem]">
                    <Card className="col-span-1 md:col-span-2" x-chunk="dashboard-05-chunk-0">
                        <CardHeader className="pb-3">
                            <CardTitle>Produk Anda</CardTitle>
                            <CardDescription className="max-w-lg text-balance leading-relaxed">
                                Selamat datang di Admin Dashboard Thrift Shop.
                                Anda dapat menekan tombol dibawah ini untuk
                                mengelola dan menambahkan produk anda!
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Link href={route("adminProduct")}>
                                <Button>Kelola Produk</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card x-chunk="dashboard-05-chunk-1">
                        <CardHeader className="pb-2">
                            <CardDescription>
                                Penghasilan Minggu Ini
                            </CardDescription>
                            <CardTitle className="text-4xl">
                                Rp{Number(480000).toLocaleString()}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                +25% dari minggu kemarin
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Progress value={25} aria-label="25% increase" />
                        </CardFooter>
                    </Card>
                    <Card x-chunk="dashboard-05-chunk-1">
                        <CardHeader className="pb-2">
                            <CardDescription>
                                Penghasilan Bulan Ini
                            </CardDescription>
                            <CardTitle className="text-4xl">
                                Rp{Number(3500000).toLocaleString()}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                +50% dari bulan kemarin
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Progress value={50} aria-label="25% increase" />
                        </CardFooter>
                    </Card>
                </div>
                <div className="w-[22rem] md:w-[41rem]">
                    <LineChartComp />
                </div>
            </div>
        </AdminLayout>
    );
}
