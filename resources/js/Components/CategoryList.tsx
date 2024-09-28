import { Link } from "@nextui-org/link";
import React from "react";

interface CategoryContent {
    kategoriPakaianNama: string;
}

export default function CategoryList() {
    const categoryList: CategoryContent[] = [
        { kategoriPakaianNama: "Jeans" },
        { kategoriPakaianNama: "Baju" },
        { kategoriPakaianNama: "Kemeja" },
        { kategoriPakaianNama: "Batik" },
        { kategoriPakaianNama: "Baju Muslim" },
        { kategoriPakaianNama: "Casual" },
    ];

    return (
        <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-3xl">Kategori Pakaian</h1>
            <div className="flex flex-col text-lg">
                {categoryList.map((item, index) => (
                    <Link
                        href="#"
                        key={index}
                    >
                        {item.kategoriPakaianNama}
                    </Link>
                ))}
            </div>
        </div>
    );
}
