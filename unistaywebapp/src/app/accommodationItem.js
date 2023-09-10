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
        <div className={`my-5 w-[calc(33vw+(2*0.75rem))] md:w-[calc(15vw+(2*0.75rem))] max-w-[calc(200px+(2*0.75rem))] bg-gray rounded-xl p-3 ${className}`}>
            <figure className="w-[33vw] h-[33vw] md:w-[15vw] md:h-[15vw] max-w-[200px] max-h-[200px] bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${imageUrl})`}}></figure>
            <div>
                <Label text={location} icon={Loc} order={true} measures="my-4 sm:max-w-[initial] hidden sm:flex" textProperties="text-xs" />
                <p className="block sm:hidden my-4">{location}</p>
                <p>{rent}<span className="">/month</span></p>
                <Label text={rating} icon={Star} order={false} measures="mt-4" textProperties="text-xs" />
                
            </div>
        </div>
    )
}