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

    Squares2X2Icon,
    TicketIcon,
    ReceiptRefundIcon,

    AdjustmentsHorizontalIcon,
    DocumentCheckIcon,
} from '@heroicons/react/24/outline';

export function NavigationMenu(path: string) {
    const t = useTranslations("Panel_SideBar");

    const profile_navigation = [
        { name: t('profile.info'), icon: UsersIcon, current: false, href: '/panel/profile' },
        { name: t('profile.address'), icon: MapPinIcon, current: false, href: '/panel/profile/address' },
        { name: t('profile.billing'), icon: BanknotesIcon, current: false, href: '/panel/profile/billing' },
        { name: t('profile.card.name'), icon: CreditCardIcon, current: false, href: '/panel/profile/card' },
        { name: t('profile.request'), icon: ArrowPathRoundedSquareIcon, current: false, href: '/panel/profile/request' },
        { name: t('profile.security'), icon: LockClosedIcon, current: false, href: '/panel/profile/security' },
        {
            name: t('profile.config.config'), icon: Cog8ToothIcon, current: false, children: [
                { name: t('profile.config.general'), href: '/panel/profile/config' },
                { name: t('profile.config.follow'), href: '/panel/profile/config/follow' },
                { name: t('profile.config.custom'), href: '/panel/profile/config/custom' },
                { name: t('profile.config.delete'), href: '/panel/profile/config/delete' },
            ],
        },
    ]

    const event_navigation = [
        { name: t('event.event'), icon: CalendarIcon, current: true, href: '/panel/event/' },
        { name: t('event.discount'), icon: MinusCircleIcon, current: false, href: '/panel/event/discount' },
        { name: t('event.special'), icon: SquaresPlusIcon, current: false, href: '/panel/event/special' },
    ]
    
    const ticket_navigation = [
        { name: t('dashboard'), icon: Squares2X2Icon, current: true, href: '/panel/ticket/' },
        { name: t('ticket.ticket'), icon: TicketIcon, current: false, href: '/panel/ticket/list' },
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
            name: t('admin.config.config'), icon: AdjustmentsHorizontalIcon, current: true, children: [
                { name: t('admin.config.setting'), href: '/panel/admin/config/settings' },
                { name: t('admin.config.cookie'), href: '/panel/admin/config/cookie' },
                { name: t('admin.config.term'), href: '/panel/admin/config/term' },
                { name: t('admin.config.privacy'), href: '/panel/admin/config/privacy' },
            ],
        },
        {
            name: t('admin.event.event'), icon: CalendarIcon, current: false, children: [
                { name: t('admin.event.category'), href: '/panel/admin/event/category' },
                { name: t('admin.event.subcategory'), href: '/panel/admin/event/subcategory' },
                { name: t('admin.event.subsubcategory'), href: '/panel/admin/event/subsubcategory' },
                { name: t('admin.event.supplier'), href: '/panel/admin/event/supplier' },
                { name: t('admin.event.tag'), href: '/panel/admin/event/tag' },
                {
                    name: t('admin.event.venue'), href: '/panel/admin/event/venue', children: [
                        { name: t('admin.event.category'), href: '/panel/admin/event/venues/category' },
                        { name: t('admin.event.venue'), href: '/panel/admin/event/venue' },
                    ]
                },
            ],
        },
        {
            name: t('admin.review'), icon: DocumentCheckIcon, current: false, children: [
                { name: t('admin.user'), href: '/panel/review/user' },
            ],
        },
        { name: t('admin.user'), icon: UsersIcon, current: false, href: '/panel/user/' },
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
