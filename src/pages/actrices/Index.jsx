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
        <div className="mt-4 w-full max-w-4xl sm:mt-12">
            <TabGroup>
                <TabList className='flex items-center justify-center'>
                    {tabsActresses.map(({ id, name }) => (
                        <Tab className={`px-4 py-1 ${id !== 1 && '-ml-2'} bg-white border border-b-0 border-violet-300 rounded-t-md text-xs font-semibold text-gray-800 focus:outline-none data-[selected]:bg-violet-300 data-[selected]:border-violet-300 data-[selected]:border-b-0 sm:px-8 sm:text-sm`} key={id}>{ name }</Tab>
                    ))}
                </TabList>

                <TabPanels className='border-2 border-violet-300 shadow-md sm:rounded-xl'>
                    {tabsActresses.map(({ id, birthday, description, image, name, rol, }) => (
                        <TabPanel className='p-6 flex flex-wrap items-center justify-center rounded-xl sm:flex-nowrap sm:justify-start' key={id}>
                            <img
                                alt={name}
                                className="w-auto h-48 rounded-md"
                                src={image}
                            />

                            <div className="mx-0 mt-8 text-gray-800 sm:mx-8 sm:mt-0">
                                <h2 className="mb-4 text-blue text-2xl text-center font-basker font-bold sm:text-3xl">{ name }</h2>

                                <div className="pr-4 h-24 flex flex-col items-center text-sm overflow-auto sm:h-60 sm:text-base">
                                    <div>
                                        <span className="font-bold">Fecha de Nacimiento:</span> { birthday }
                                    </div>
                                    <div className='mt-1'>
                                        <span className="font-bold">Rol en la Película:</span> { rol }
                                    </div>
                                    <div className='mt-1.5'>
                                        <div className=' text-center font-bold'>Descripción:</div>

                                        {description.map((item, index) => (
                                            <div className="mt-0.5 text-justify" key={index}>{ item }</div>
                                        ))}
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
