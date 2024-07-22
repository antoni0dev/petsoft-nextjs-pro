'use client';

import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { PATHS } from '@/lib/constants';

const routes = [
  {
    label: 'Dashboard',
    path: PATHS.app.dashboard,
  },
  {
    label: 'Account',
    path: PATHS.app.account,
  },
];

export default function AppHeader() {
  const activePathname = usePathname();

  console.log('## activePathname', activePathname);

  return (
    <header className='flex justify-between items-center border-b border-white/10 py-2'>
      <Logo />

      <nav>
        <ul className='flex gap-2 text-xs'>
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={cn(
                  'text-white/70 rounded-sm px-2 py-1 hover:text-white focus:text-white transition',
                  {
                    'bg-black/10 text-white': route.path === activePathname,
                  }
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
