import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Head } from "@inertiajs/react";
import TopLandingSection from "@/Components/Sections/TopLandingSection";
import TrustBadgeSection from "@/Components/Sections/TrustBadgeSection";
import CatalogueList from "@/Components/CatalogueList";
import { Card } from "@nextui-org/card";
import FeaturedSection from "@/Components/Sections/FeaturedSection";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Selamat datang di Thrift Shop!
                </h2>
            }
        >
            <Head title="Home" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Card>
                        <div className="p-6 text-gray-900 my-12">
                            <div className="flex flex-col space-y-16">
                                <TopLandingSection />
                                <div className="flex justify-center">
                                    <CatalogueList heading="Produk Kita" />
                                </div>
                                <TrustBadgeSection heading="Jaminan Kita" />
                                <FeaturedSection />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
