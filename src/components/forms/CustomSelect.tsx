// Helpers
import { CurrentColor } from "@/helpers/currentColor";

type Props = {
    field: string,
    placeholder?: string,
    options: Sex[],
    defaultValue?: string
}

interface Sex {
    value: string,
    name: string
}

export const CustomSelect = ({ field, placeholder = '', options, defaultValue }: Props) => {
    const currentColor = CurrentColor();

    return (
        <select
            id={field}
            name={field}
            className={`block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-customForm ring-2 ring-inset ring-customForm focus:ring-2 focus:ring-${currentColor} sm:text-sm sm:leading-6`}
            defaultValue={defaultValue}
        >
            { !defaultValue ? (<option value=''>{placeholder}</option>) : '' }
            {options.map((item: Sex) => {
                return (
                    <option value={item.value}>{item.name}</option>
                )
            })}
            
        </select>
    )
}