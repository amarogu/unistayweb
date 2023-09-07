import Image from "next/image"


export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <Image src='/uni.png' alt="Logo" width={24} height={24} />
            <p className="font-einaBold text-2xl">UniStay</p>
        </div>
    )
}