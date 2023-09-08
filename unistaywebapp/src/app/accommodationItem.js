import Image from "next/image"
import Label from "./label"
import { LocationCityOutlined as Loc } from "@mui/icons-material"

export default function AccommodationItem() {
    const imageUrl = '/house.jpg'
    return(
        <div>
            <figure className="w-[200px] h-[200px] lg:w-[260px] lg:h-[200px] bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${imageUrl})`}}></figure>
            <div>
                <Label text="Entire house" icon={Loc} order={true} />
            </div>
        </div>
    )
}