import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

export default function AdminCreateProduct() {
    const breadcrumb = ["Produk", "Edit Produk"];

    return (
        <AdminLayout breadcrumb={breadcrumb}>
            <div>AdminEditProduct</div>
        </AdminLayout>
    );
}
