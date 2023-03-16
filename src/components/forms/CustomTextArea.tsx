// Helpers
import { CurrentColor } from "@/helpers/currentColor";

type Props = {
    field: string,
    rows?: number,
}

export const CustomTextArea = ({ field, rows = 4 }: Props) => {
    const currentColor = CurrentColor();

    return (
        <textarea
            name={field}
            id={field}
            rows={rows}
            className={`block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-2 ring-inset ring-customForm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-${currentColor} sm:text-sm sm:leading-6`}
            defaultValue={''}
        />
    )
}