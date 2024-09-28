import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

export default function AdminDashboard() {
    return (
        <AdminLayout breadcrumb={["Dashboard"]}>
            <h1>Hello world</h1>
        </AdminLayout>
    );
}
