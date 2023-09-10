"use client";
import Image from "next/image"
import Label from "./label"
import { PlaceOutlined as Loc, StarOutline as Star } from "@mui/icons-material"
import { useEffect, useState } from "react"

export default function AccommodationItem(props) {
    const imageUrl = '/house.jpg'
    const location = props.location
    const rent = props.rent
    const rating = props.rating
    const className = props.className;
    return(
        <div className={`w-[40vw] min-w-[120px] md:w-[15vw] max-w-[200px] ${className}`}>
            <figure className="w-[40vw] h-[40vw] min-w-[120px] min-h-[120px] md:w-[15vw] md:h-[15vw] max-w-[200px] max-h-[200px] bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${imageUrl})`}}></figure>
            <div>
                <Label text={location} icon={Loc} order={true} measures="my-4" textProperties="text-xs" />
                <p>{rent}<span className="">/month</span></p>
                <Label text={rating} icon={Star} order={false} measures="mt-4" textProperties="text-xs" />
                
            </div>
        </div>
    )
}