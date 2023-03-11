import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { MapPinIcon, GlobeAltIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { LanguageSwitcher } from '@/components/layout/content/toolbar/LanguageSwitcher';
import { Login } from '@/components/layout/content/toolbar/Login';

export const ToolBar = () => {
  const t = useTranslations("Header_Tool");

  return (
    <div className="isolate bg-black z-auto">
      <nav className="flex flex-row" aria-label="Global">
        <div className="hidden lg:flex lg:basis-1/6 lg:gap-x-12 lg:justify-left lg:pl-2 lg:py-2">
          <div className="flex items-center text-white">
            <MapPinIcon className="h-6 w-6 text-white mr-2" aria-hidden="true" />
            <p className="font-bold text-sm">
              Toluca<span className="hidden lg:inline">, Estado de México</span>
            </p>
          </div>
        </div>
        <div className="hidden lg:flex lg:basis-1/6 lg:gap-x-12 lg:justify-left  lg:pl-2 lg:py-2">
          <div className="flex items-center text-white">
            <GlobeAltIcon className="h-8 w-8 text-white mr-2" aria-hidden="true" />
            <LanguageSwitcher />
          </div>
        </div>
        <div className="flex justify-center lg:basis-2/6 lg:justify-cente lg:pl-2 lg:py-2">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Culturízate</span>
            <Image
              src={"/images/assets/logos/logo_white.png"}
              alt="logo"
              width={200}
              height={120}
              className="mt-2 select-none self-center object-contain"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:basis-1/6 lg:justify-end  lg:pl-2 lg:py-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder='Search...'
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:basis-1/6 lg:justify-end">
          <Login />
        </div>
      </nav>
    </div>
  )
}
