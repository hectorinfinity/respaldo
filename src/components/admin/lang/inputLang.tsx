// Components
import { CustomLabel } from "@/components/forms";
// Helpers
import { FormStyles } from "@/helpers";
// ICons
import { TrashIcon } from "@heroicons/react/24/solid";

type Props = {
    lang: string
}

export const InputLang = ({lang}: Props) => {
    return (
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <div className="h-fit gap-x-16 gap-y-10 border-2">
                <div className="inputCoverAd relative space-y-1 px-5 pt-10 pb-10">
                    <CustomLabel field='name' name='name' />
                    <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        placeholder="name"
                        className={FormStyles('input')}
                    />
                    <div className="absolute -top-5 w-fit bg-white px-2 py-1 text-xl font-black uppercase text-customShadow">
                        {lang}
                    </div>
                    <TrashIcon
                        name="delete"
                        className="w-4 h-4 absolute right-0 top-[18%] hidden px-[6%] text-customRed"
                    />
                </div>
            </div>
        </div>
    )
}