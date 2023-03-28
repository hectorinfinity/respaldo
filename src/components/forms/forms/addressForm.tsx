import { useTranslations } from "next-intl";
// Components
import { CustomLabel } from "../labels"
// Helpers
import { FormStyles } from "@/helpers"

export const AddressForm = () => {
    const tc = useTranslations("Common_Forms");

    return (
        <>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                    <CustomLabel field="addressname" name={tc('field_addressname')} required />
                    <input
                        type="text"
                        name="addressname"
                        id="addressname"
                        autoComplete={tc('auto_addressname')}
                        placeholder={tc('field_addressname')}
                        className={FormStyles('input')}
                    />
                </div>

                <div className="col-span-12">
                    <CustomLabel field="searchaddress" name={tc('field_searchaddress')} />
                    <input
                        type="text"
                        name="searchaddress"
                        id="searchaddress"
                        autoComplete={tc('auto_searchaddress')}
                        placeholder={tc('field_searchaddress')}
                        className={FormStyles('input')}
                    />
                </div>
            </div>

            <div className="mt-6 flex flex-col lg:flex-row">
                <div className="relative isolate bg-white py-10">
                    <div className="flex justify-start w-screen">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.7347204632892!2d-102.54627301188026!3d22.767649335671468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86824eb8de657407%3A0x1036f7d9db767840!2sJos%C3%A9%20Sergio%20B%C3%A1ez%20101%2C%20Villas%20del%20Sol%2C%2098067%20Guadalupe%2C%20Zac.!5e0!3m2!1ses-419!2smx!4v1678590382873!5m2!1ses-419!2smx" width="1200" height="450" style={{ border: 0 }} loading="lazy"></iframe>
                    </div>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-12 gap-6">
                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
                    <CustomLabel field="address1" name={tc('field_address1')} required />
                    <input
                        type="text"
                        name="address1"
                        id="address1"
                        autoComplete={tc('auto_address1')}
                        placeholder={tc('field_address1')}
                        className={FormStyles('input')}
                    />
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
                    <CustomLabel field="address2" name={tc('field_address2')} />
                    <input
                        type="text"
                        name="address2"
                        id="address2"
                        autoComplete={tc('auto_address2')}
                        placeholder={tc('field_address2')}
                        className={FormStyles('input')}
                    />
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
                    <CustomLabel field="pc" name={tc('field_pc')} required />
                    <input
                        type="text"
                        name="pc"
                        id="pc"
                        autoComplete={tc('auto_pc')}
                        placeholder={tc('field_pc')}
                        className={FormStyles('input')}
                    />
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
                    <CustomLabel field="country" name={tc('field_country')} required />
                    <input
                        type="text"
                        name="country"
                        id="country"
                        autoComplete={tc('auto_country')}
                        placeholder={tc('field_country')}
                        className={FormStyles('input')}
                    />
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
                    <CustomLabel field="state" name={tc('field_state')} required />
                    <input
                        type="text"
                        name="state"
                        id="state"
                        autoComplete={tc('auto_state')}
                        placeholder={tc('field_state')}
                        className={FormStyles('input')}
                    />
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
                    <CustomLabel field="city" name={tc('field_city')} required />
                    <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete={tc('auto_city')}
                        placeholder={tc('field_city')}
                        className={FormStyles('input')}
                    />
                </div>
            </div>
        </>
    )
}