import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

export default function AdminCreateProduct() {
    const breadcrumb = ["Produk", "Tambahkan Produk"];

    return (
        <AdminLayout breadcrumb={breadcrumb}>
            <div>AdminCreateProduct</div>
        </AdminLayout>
    );
}
