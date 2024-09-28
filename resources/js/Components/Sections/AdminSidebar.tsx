import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";
import {
    Home,
    HomeIcon,
    LineChart,
    Package,
    Package2,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react";
import { Link } from "@inertiajs/react";

export interface NavLink {
    label: string;
    icon: React.ReactNode;
    href: string;
}

export default function AdminSidebar() {
    const navLinks: NavLink[] = [
        {
            label: "Beranda",
            icon: <HomeIcon className="h-5 w-5" />,
            href: route("adminDashboard"),
        },
        {
            label: "Produk",
            icon: <Package className="h-5 w-5" />,
            href: route("adminProduct"),
        },
    ];

    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href={route("welcome")}
                                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                            >
                                <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                                <span className="sr-only">Aran8276</span>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            Kembali ke mode Pelanggan
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                {navLinks.map((items, index) => {
                    return (
                        <TooltipProvider key={index}>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={items.href}
                                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                        >
                                            {items.icon}

                                            <span className="sr-only">
                                                Dashboard
                                            </span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">
                                        {items.label}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </TooltipProvider>
                    );
                })}
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    );
}
