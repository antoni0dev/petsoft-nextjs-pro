import { PATHS } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={PATHS.home}>
      <Image src='/logo.svg' alt='' width={33} height={33} />
    </Link>
  );
};

export default Logo;
