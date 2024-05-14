/* Components */
import { PagesLayout } from '../../components/layouts/PagesLayout.jsx';
/* Utils */
import { tabsActresses } from '../../utils/helpers.jsx';
/* Headless UI */
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

// PÁGINA
/* Actrices Principales */
const Index = () => (
    <PagesLayout title='Actrices Principales'>
        <div className="mt-12 w-full max-w-4xl">
            <TabGroup>
                <TabList className='flex items-center justify-center'>
                    {tabsActresses.map(({ id, name }) => (
                        <Tab className={`px-4 py-1 ${id !== 1 && '-ml-2'} bg-white border border-b-0 border-violet-300 rounded-t-md text-xs font-semibold text-gray-800 focus:outline-none data-[selected]:bg-violet-300 data-[selected]:border-violet-300 data-[selected]:border-b-0 sm:px-8 sm:text-sm`} key={id}>{ name }</Tab>
                    ))}
                </TabList>

                <TabPanels className='border-2 border-violet-300 shadow-md sm:rounded-xl'>
                    {tabsActresses.map(({ id, image, name, rol, }) => (
                        <TabPanel className='p-6 flex flex-wrap items-center justify-center rounded-xl sm:flex-nowrap sm:justify-start' key={id}>
                            <img
                                alt={name}
                                className="w-auto h-52 rounded-md"
                                src={image}
                            />

                            <div className="mx-0 mt-8 text-gray-800 sm:mx-8 sm:mt-0">
                                <h2 className="text-blue text-2xl text-center font-basker font-bold sm:text-3xl">{ name }</h2>

                                <div className="flex flex-col items-center text-sm sm:text-base">
                                    <div className='mt-4'>
                                        <span className="font-bold">Rol en la Película:</span> { rol }
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    ))}
                </TabPanels>
            </TabGroup>
        </div>
    </PagesLayout>
);

export default Index;
