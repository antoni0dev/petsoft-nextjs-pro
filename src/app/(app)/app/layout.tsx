import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppFooter';
import BackgroundPattern from '@/components/AppFooter';
import { Pet } from '@/lib/types';
import PetsContextProvider from '@/providers/PetsContextProvider';

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  const response = await fetch(
    'https://bytegrad.com/course-assets/projects/petsoft/api/pets'
  );

  if (!response.ok) {
    throw new Error('Failed to fetch pets.');
  }

  const petsData: Pet[] = await response.json();

  // this will still go through the root layout
  return (
    <PetsContextProvider petsData={petsData}>
      <BackgroundPattern />
      <div className='flex flex-col max-w-[1050px] mx-auto px-4 min-h-screen'>
        <AppHeader></AppHeader>
        {children}
        <AppFooter></AppFooter>
      </div>
    </PetsContextProvider>
  );
};

export default AppLayout;
