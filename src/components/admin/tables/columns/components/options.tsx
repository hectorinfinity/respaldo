import Link from 'next/link';
// Icons
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

type Props = {
    id: number,
    color: string
}

export const Options = ({id, color}: Props) => {
    return (
        <div className='flex justify-start'>
          <Link href={`/panel/events/special/edit/${id}`} className="px-1">
            <PencilIcon className={`w-4 h-4 hover:text-${color}`} />
          </Link>
          <Link href={`/panel/events/special/delete/${id}`} className="px-1">
            <TrashIcon className={`w-4 h-4 hover:text-${color}`} />
          </Link>
        </div>
    )
}