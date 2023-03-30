import { useTranslations } from "next-intl";
// Components
import { CustomError, CustomLabel, CustomCancel, CustomSubmit } from '@/components/forms';
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import { useState } from "react";
import Map from "@/components/forms/forms/map";
// Helpers
import { FormStyles } from "@/helpers"
import { useGoogleMapsAPIKey } from "@/hooks/useGoogleMapsApi";



export const AddressForm = ({ register, errors, searchAddress, onPlaceSelected, markerPosition }) => {
    const [autocomplete, setAutocomplete] = useState(null);
    const [librariesLoaded, setLibrariesLoaded] = useState(false);

    const { apiKey } = useGoogleMapsAPIKey();


    const tc = useTranslations("Common_Forms");
    const onAutocompleteLoad = (autocompleteInstance) => {
        setAutocomplete(autocompleteInstance);
    };

    const onPlaceChanged = () => {
        if (autocomplete) {
            const place = autocomplete.getPlace();
            const address = place.formatted_address;
            const latLng = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            };
            console.log("Selected address: ", address, latLng);
            onPlaceSelected(address, latLng);
        }
    };
    const handleLoad = () => {
        setLibrariesLoaded(true);
    };

    return (
        <>
            <LoadScript
                googleMapsApiKey={apiKey}
                libraries={["places"]}
                onLoad={handleLoad}
            >
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
                        <CustomError error={errors.addressname?.message} />
                    </div>

                    <div className="col-span-12">
                        <CustomLabel field="searchaddress" name={tc('field_searchaddress')} />
                        <Autocomplete onLoad={onAutocompleteLoad} onPlaceChanged={onPlaceChanged}>
                            <input
                                type="text"
                                name="searchaddress"
                                id="searchaddress"
                                autoComplete={tc('auto_searchaddress')}
                                placeholder={tc('field_searchaddress')}
                                className={FormStyles('input')}
                            />
                        </Autocomplete>
                    </div>
                </div>

                <div className="mt-6 flex flex-col lg:flex-row">
                    <div className="relative isolate bg-white py-10">
                        <div className="flex justify-start w-screen">
                            <Map searchAddress={searchAddress} center={{ lat: 22.767649, lng: -102.546273 }} markerPosition={markerPosition} />
                        </div>
                    </div>
                </div>
            </LoadScript>
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