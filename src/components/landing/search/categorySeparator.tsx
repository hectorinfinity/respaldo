import Image from "next/image";


export const CategorySeparator = () => {
    return (
        <>
            <div className="px-2 w-[90%] lg:w-full border-b-[12vw] sm:border-b-[8vw] lg:border-b-[4vw] border-customPurple rounded-xl rounded-t-xl">
                <div className="border-b-[22vw] sm:border-b-[10vw] lg:border-b-[4vw] border-transparent">
                    <Image
                        width={120}
                        height={120}
                        src="/images/events/category/cine.png"
                        alt="cine"
                        className="object-contain absolute"
                    />
                </div>
                <div className="flex justify-center -mb-10 sm:-mb-12 lg:-mb-14">
                    <h1 className="text-3xl text-white">Cine</h1>
                </div>
            </div>
        </>
    )
}