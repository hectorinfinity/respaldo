
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Tab, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, FunnelIcon, MagnifyingGlassIcon, ShoppingBagIcon, Squares2X2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid'
import { classNames, FormStyles } from '@/helpers'
import { EventCardVert } from '../event/eventCardVert'
import { EventCardHor } from '../event/eventCardHor'
import DatePicker, { DateObject } from "react-multi-date-picker"

import Image from "next/image";
import { CategorySeparator } from './categorySeparator'
import { SearchInput } from './searchInput'


const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
];
const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White' },
            { value: 'beige', label: 'Beige' },
            { value: 'blue', label: 'Blue' },
            { value: 'brown', label: 'Brown' },
            { value: 'green', label: 'Green' },
            { value: 'purple', label: 'Purple' },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'All New Arrivals' },
            { value: 'tees', label: 'Tees' },
            { value: 'crewnecks', label: 'Crewnecks' },
            { value: 'sweatshirts', label: 'Sweatshirts' },
            { value: 'pants-shorts', label: 'Pants & Shorts' },
        ],
    },
    {
        id: 'sizes',
        name: 'Sizes',
        options: [
            { value: 'xs', label: 'XS' },
            { value: 's', label: 'S' },
            { value: 'm', label: 'M' },
            { value: 'l', label: 'L' },
            { value: 'xl', label: 'XL' },
            { value: '2xl', label: '2XL' },
        ],
    },
]

const products = [
    {
        id: 1,
        name: 'Basic Tee 8-Pack',
        href: '#',
        price: '$256',
        description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
        options: '8 colors',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
        imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$32',
        description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
        options: 'Black',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
        imageAlt: 'Front of plain black t-shirt.',
    },
    // More products...
]

const CustomRangeInput = ({ openCalendar, value }: any) => {
    let from = new DateObject(value[0])?.format("DD / MMMM / YYYY") || "";
    let to = new DateObject(value[1]).format("DD / MMMM / YYYY") || "";
  
    return (
      <div className='w-full flex flex-row overflow-hidden border-[2px] border-[#7B7B7B] rounded-[4px] '>
        <input className='w-[48%] py-2  border-r border-r-[#7B7B7B] text-[#7B7B7B] text-center' onFocus={openCalendar} value={from} readOnly />
        <input className='w-[52%] py-2 text-center text-[#7B7B7B]' onFocus={openCalendar} value={to} readOnly />
      </div>
    );
  }

export const Content = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [dateValues, setDateValues] = useState<[DateObject, DateObject]>([new DateObject(), new DateObject()]);

    return (
        <>
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                    <button
                                        type="button"
                                        className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                                        onClick={() => setMobileFiltersOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Filters */}
                                <form className="mt-4 px-4">
                                <div className='pt-5'>
                                    <fieldset>
                                        <legend className="block text-sm font-medium text-gray-900">Categories</legend>
                                        <div className="space-y-3 pt-6">
                                            <select
                                                id="sex"
                                                name="sex"
                                                className={FormStyles('select')}
                                                defaultValue={''}
                                            >
                                                <option value=''>Load Categories</option>

                                            </select>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className='pt-5'>
                                    <fieldset>
                                        <legend className="block text-sm font-medium text-gray-900">Subcategories</legend>
                                        <div className="space-y-3 pt-6">
                                            <select
                                                id="sex"
                                                name="sex"
                                                className={FormStyles('select')}
                                                defaultValue={''}
                                            >
                                                <option value=''>Load Subcategories</option>

                                            </select>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className='pt-5'>
                                    <fieldset>
                                        <legend className="block text-sm font-medium text-gray-900">Sub-Subcategories</legend>
                                        <div className="space-y-3 pt-6">
                                            <select
                                                id="sex"
                                                name="sex"
                                                className={FormStyles('select')}
                                                defaultValue={''}
                                            >
                                                <option value=''>Load Sub-Subcategories</option>

                                            </select>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className='pt-5'>
                                    <fieldset>
                                        <legend className="block text-sm font-medium text-gray-900">Date</legend>
                                        <div className="space-y-3 pt-6">
                                            <DatePicker
                                                className="rmdp-prime"
                                                value={dateValues}
                                                onChange={setDateValues}
                                                numberOfMonths={2}
                                                range
                                                render={<CustomRangeInput value={dateValues} />}
                                            />
                                        </div>
                                    </fieldset>
                                </div>

                                <div className='pt-5'>
                                    <fieldset>
                                        <legend className="block text-sm font-medium text-gray-900">Location</legend>
                                        <div className="space-y-3 pt-6">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                autoComplete="location"
                                                placeholder="location"
                                                className={FormStyles('input')}
                                            />
                                        </div>
                                    </fieldset>
                                </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <main className="mx-auto px-4 lg:px-8">
                <div className="py-6">
                    <div className="flex flex-col items-center">
                        <SearchInput />
                    </div>
                </div>
                <div className="pt-6">
                    <CategorySeparator />
                </div>
                <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                    <h1 className="text-lg font-bold tracking-tight text-gray-900">16 Results of "Cine"</h1>
                    <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sort
                                    <ChevronDownIcon
                                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <Menu.Item key={option.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={option.href}
                                                        className={classNames(
                                                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        {option.name}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                            <span className="sr-only">View grid</span>
                            <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-2">
                            <span className="sr-only">View grid</span>
                            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
                        </button>

                        <button
                            type="button"
                            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            onClick={() => setMobileFiltersOpen(true)}
                        >
                            <span className="sr-only">Filters</span>
                            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                    <aside>
                        <h2 className="sr-only">Filters</h2>

                        <button
                            type="button"
                            className="inline-flex items-center lg:hidden"
                            onClick={() => setMobileFiltersOpen(true)}
                        >
                            <span className="text-sm font-medium text-gray-700">Filters</span>
                            <PlusIcon className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        </button>

                        <div className="hidden lg:block">
                            <form className="space-y-10 divide-y divide-gray-200">

                                <div className='pt-5'>
                                    <fieldset>
                                        <legend className="block text-sm font-medium text-gray-900">Categories</legend>
                                        <div className="space-y-3 pt-6">
                                            <select
                                                id="sex"
                                                name="sex"
                                                className={FormStyles('select')}
                                                defaultValue={''}
                                            >
                                                <option value=''>Load Categories</option>

                                            </select>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className='pt-5'>
                                    <fieldset>
                                        <legend className="block text-sm font-medium text-gray-900">Subcategories</legend>
                                        <div className="space-y-3 pt-6">
                                            <select
                                                id="sex"
                                                name="sex"
                                                className={FormStyles('select')}
                                                defaultValue={''}
                                            >
                                                <option value=''>Load Subcategories</option>

                                            </select>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className='pt-5'>
                                    <fieldset>
                                        <legend className="block text-sm font-medium text-gray-900">Sub-Subcategories</legend>
                                        <div className="space-y-3 pt-6">
                                            <select
                                                id="sex"
                                                name="sex"
                                                className={FormStyles('select')}
                                                defaultValue={''}
                                            >
                                                <option value=''>Load Sub-Subcategories</option>

                                            </select>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className='pt-5'>
                                    <fieldset>
                                        <legend className="block text-sm font-medium text-gray-900">Date</legend>
                                        <div className="space-y-3 pt-6">
                                            <DatePicker
                                                className="rmdp-prime"
                                                value={dateValues}
                                                onChange={setDateValues}
                                                numberOfMonths={2}
                                                range
                                                render={<CustomRangeInput value={dateValues} />}
                                            />
                                        </div>
                                    </fieldset>
                                </div>

                                <div className='pt-5'>
                                    <fieldset>
                                        <legend className="block text-sm font-medium text-gray-900">Location</legend>
                                        <div className="space-y-3 pt-6">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                autoComplete="location"
                                                placeholder="location"
                                                className={FormStyles('input')}
                                            />
                                        </div>
                                    </fieldset>
                                </div>

                            </form>
                        </div>
                    </aside>

                    <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
                        <h2 id="product-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                            {/*products.map((product) => (
                                <div
                                    key={product.id}
                                    className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                                >
                                    <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col space-y-2 p-4">
                                        <h3 className="text-sm font-medium text-gray-900">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="text-sm text-gray-500">{product.description}</p>
                                        <div className="flex flex-1 flex-col justify-end">
                                            <p className="text-sm italic text-gray-500">{product.options}</p>
                                            <p className="text-base font-medium text-gray-900">{product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))*/}
                            <EventCardHor />
                            <EventCardHor />
                            <EventCardVert />
                            <EventCardVert />
                            <EventCardVert />
                            <EventCardVert />
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}