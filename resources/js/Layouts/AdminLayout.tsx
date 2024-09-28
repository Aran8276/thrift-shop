import AdminHeader from "@/Components/Sections/AdminHeader";
import AdminSidebar from "@/Components/Sections/AdminSidebar";
import React, { PropsWithChildren, ReactNode } from "react";

export default function AdminLayout({
    breadcrumb,
    children,
}: PropsWithChildren<{ breadcrumb: string[] }>) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <AdminSidebar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <AdminHeader breadcrumb={breadcrumb} />
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
