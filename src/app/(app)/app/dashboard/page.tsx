import Branding from '@/components/Branding';
import Stats from '@/components/Stats';
import ContentBlock from '@/components/ContentBlock';
import PetButton from '@/components/PetButton';
import SearchForm from '@/components/SearchForm';
import PetList from '@/components/PetList';
import PetDetails from '@/components/PetDetails';
import { usePetContext } from '@/providers/PetsContextProvider';

const DashboardPage = async () => {
  const { handleSetPets } = usePetContext();

  const response = await fetch(
    'https://bytegrad.com/course-assets/projects/petsoft/api/pets'
  );
  if (!response.ok) {
    throw new Error('Failed to fetch pets.');
  }

  const petsData = await response.json();

  return (
    <main>
      <div className='flex items-center justify-between text-white py-8'>
        <Branding />
        <Stats />
      </div>

      <div className='grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-4 md:h-[600px]'>
        <div className='md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1'>
          <SearchForm />
        </div>

        <div className='relative md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1'>
          <ContentBlock>
            <PetList />

            <div className='absolute bottom-4 right-4'>
              <PetButton actionType='add' />
            </div>
          </ContentBlock>
        </div>

        <div className='md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full'>
          <ContentBlock>
            <PetDetails />
          </ContentBlock>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;