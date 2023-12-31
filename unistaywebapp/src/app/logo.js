import Image from "next/image"


export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <Image src='/uni.png' alt="Logo" width={20} height={20} />
            <p className="font-einaBold text-xl">UniStay</p>
        </div>
    )
}