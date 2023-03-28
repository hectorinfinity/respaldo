import Image from "next/image"

const payMethod = [
    { name: "MasterCard", image: "/images/brands/mastercard_3x.png" },
]

export const EventPayMethod = () => {
    return (
        <>
            <ul role="list" className="flex items-center space-x-1">
                {payMethod.map((item) => (
                    <li key={item.name}>
                        <span className="sr-only">{item.name}</span>
                        <Image src={item.image} alt={item.name} width={24} height={10} className="object-cover object-center" />
                    </li>
                ))}
            </ul>
        </>
    )
}