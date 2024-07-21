import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppFooter';
import BackgroundPattern from '@/components/AppFooter';
import PetsContextProvider from '@/providers/PetsContextProvider';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  // this will still go through the root layout
  return (
    <PetsContextProvider>
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
