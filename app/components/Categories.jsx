import React, { useState } from "react";

const Categories = ({ categories, filterMenus }) => {
    const [mainCategory, setMainCategory] = useState("all");

    return (
        <div className="flex justify-center py-4 my-8">
            {categories.map((category, index) => (
                <button
                    key={index}
                    type="button"
                    className={
                        category === mainCategory ? "border-transparent text-base mx-2 py-1.5 px-3 cursor-pointer transition-all duration-300 ease-linear rounded text-white hover:text-white hover:bg-orange-400 hover:dark:bg-orange-400 bg-orange-400" : "bg-transparent border-transparent text-base mx-2 py-1.5 px-3 cursor-pointer transition-all duration-300 ease-linear rounded text-zinc-600 hover:text-white dark:text-gray-200 hover:bg-orange-300 hover:dark:bg-orange-400"
                    }
                    onClick={() => {
                        setMainCategory(category)
                        filterMenus(category)
                    }}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
