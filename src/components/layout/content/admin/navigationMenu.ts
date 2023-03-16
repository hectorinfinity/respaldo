import { useTranslations } from "next-intl";
// Icons
import {
    HeartIcon,
    UsersIcon,
    MapPinIcon,
    BanknotesIcon,
    CreditCardIcon,
    ArrowPathRoundedSquareIcon,
    LockClosedIcon,
    Cog8ToothIcon,

    CalendarIcon,
    MinusCircleIcon,
    SquaresPlusIcon,

    TicketIcon,
    ReceiptRefundIcon,

    AdjustmentsHorizontalIcon,
    DocumentCheckIcon
} from '@heroicons/react/24/outline';

export function NavigationMenu(path: string) {
    const t = useTranslations("Panel_SideBar");

    const profile_navigation = [
        { name: t('profile.favorite'), icon: HeartIcon, current: true, href: '/panel/profile/personal' },
        { name: t('profile.info'), icon: UsersIcon, current: false, href: '/panel/profile/personal' },
        { name: t('profile.address'), icon: MapPinIcon, current: false, href: '/panel/profile/address' },
        { name: t('profile.billing'), icon: BanknotesIcon, current: false, href: '/panel/profile/billing' },
        { name: t('profile.card'), icon: CreditCardIcon, current: false, href: '/panel/profile/cards' },
        { name: t('profile.request'), icon: ArrowPathRoundedSquareIcon, current: false, href: '/panel/profile/request' },
        { name: t('profile.security'), icon: LockClosedIcon, current: false, href: '/panel/profile/security' },
        {
            name: t('profile.config.config'), icon: Cog8ToothIcon, current: false, children: [
                { name: t('profile.config.general'), href: '/panel/profile/general' },
                { name: t('profile.config.follow'), href: '/panel/profile/follow' },
                { name: t('profile.config.custom'), href: '/panel/profile/custom' },
                { name: t('profile.config.delete'), href: '/panel/profile/delete' },
            ],
        },
    ]

    const event_navigation = [
        { name: t('event.event'), icon: CalendarIcon, current: true, href: '/panel/event/' },
        { name: t('event.discount'), icon: MinusCircleIcon, current: false, href: '/panel/event/discount' },
        { name: t('event.special'), icon: SquaresPlusIcon, current: false, href: '/panel/event/category-special' },
    ]
    
    const ticket_navigation = [
        { name: t('ticket.ticket'), icon: TicketIcon, current: true, href: '/panel/ticket/' },
        { name: t('ticket.refund'), icon: ReceiptRefundIcon, current: false, href: '/panel/ticket/refund' },
        {
            name: t('ticket.user.user'), icon: UsersIcon, current: false, children: [
                { name: t('ticket.user.app'), href: '/panel/ticket/app' },
                { name: t('ticket.user.pos'), href: '/panel/ticket/pos' },
            ],
        },
    ]
    
    const admin_navigation = [
        {
            name: t('admin.config.config'), icon: AdjustmentsHorizontalIcon, current: false, children: [
                { name: t('admin.config.setting'), href: '/panel/config/settings' },
                { name: t('admin.config.cookie'), href: '/panel/config/cookie' },
                { name: t('admin.config.term'), href: '/panel/config/term' },
                { name: t('admin.config.privacy'), href: '/panel/event/privacy' },
            ],
        },
        {
            name: t('admin.event.event'), icon: CalendarIcon, current: false, children: [
                { name: t('admin.event.category'), href: '/panel/event/category' },
                { name: t('admin.event.subcategory'), href: '/panel/event/subcategory' },
                { name: t('admin.event.subsubcategory'), href: '/panel/event/subsubcategory' },
                { name: t('admin.event.supplier'), href: '/panel/event/suppliers' },
                { name: t('admin.event.tag'), href: '/panel/event/tags' },
                {
                    name: t('admin.event.venue'), href: '/panel/event/venues', children: [
                        { name: t('admin.event.category'), href: '/panel/event/venues/category' },
                        { name: t('admin.event.venue'), href: '/panel/event/venues' },
                    ]
                },
            ],
        },
        {
            name: t('admin.review'), icon: DocumentCheckIcon, current: false, children: [
                { name: t('admin.user'), href: '/panel/review/user' },
            ],
        },
        { name: t('admin.user'), icon: UsersIcon, current: true, href: '/panel/user/' },
    ]

    if(path.includes('profile')) {
        return profile_navigation;
    } else if(path.includes('event')) {
        return event_navigation;
    } else if(path.includes('ticket')) {
        return ticket_navigation;
    } else if(path.includes('admin')) {
        return admin_navigation;
    } else {
        return profile_navigation;
    }
}
