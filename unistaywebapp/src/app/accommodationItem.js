import Image from "next/image"
import Label from "./label"
import { PlaceOutlined as Loc, StarOutline as Star } from "@mui/icons-material"

export default function AccommodationItem(props) {
    const imageUrl = '/house.jpg'
    const location = props.location
    const rent = props.rent
    const rating = props.rating
    return(
        <div>
            <figure className="w-[150px] h-[150px] lg:w-[250px] lg:h-[190px] bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${imageUrl})`}}></figure>
            <div>
                <Label text={location} icon={Loc} order={true} measures="my-4" />
                <p>{rent}<span className="">/month</span></p>
                <Label text={rating} icon={Star} order={false} measures="mt-4" />
            </div>
        </div>
    )
}