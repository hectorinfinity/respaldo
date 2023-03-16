// Helpers
import { CurrentColor } from "@/helpers/currentColor";

type Props = {
    type: string,
    field: string,
    autocomplete: string,
    placeholder?: string
}

export const CustomInput = ({ type, field, autocomplete, placeholder = '' }: Props) => {
    const currentColor = CurrentColor();

    return (
        <input
            type={type}
            name={field}
            id={field}
            autoComplete={autocomplete}
            placeholder={placeholder}
            className={`block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-2 ring-inset ring-customForm placeholder:text-customForm focus:border-0 focus:ring-2 focus:ring-inset focus:ring-${currentColor} sm:text-sm sm:leading-6`}
        />
    )
}