import React from "react";
export default function RandomHeroImage() {
    const width = 1920, height = 1080;
    return (
        <div className="w-full lg:px-[200px] mb-3">
            <img
                src={`https://picsum.photos/${width}/${height}?dummy=${Math.floor(Math.random() * 100000)}`}
                className="w-full"
            />
        </div>
    )
}