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
        <div className={`bg-gray rounded-xl p-3 ${className}`}>
            <figure className="bg-cover bg-center rounded-xl w-full aspect-square" style={{backgroundImage: `url(${imageUrl})`}}></figure>
            <div>
                <Label text={location} icon={Loc} order={true} measures="my-4 sm:max-w-[initial] hidden sm:flex" textProperties="text-xs" />
                <p className="block sm:hidden my-4">{location}</p>
                <p>{rent}<span className="">/month</span></p>
                <Label text={rating} icon={Star} order={false} measures="mt-4" textProperties="text-xs" />
                
            </div>
        </div>
    )
}