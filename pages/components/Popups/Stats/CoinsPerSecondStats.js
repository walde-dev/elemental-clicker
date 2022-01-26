import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import { getProduction } from '../../../redux/store/buildings';
import { abbreviateNumber } from '../../Logic/logic';

export default function CoinsPerSecondStats(props) {

    const buildings = useSelector(state => state.buildings)
    const [detailedViewOpen, setDetailedViewOpen] = useState(false);
    const [selectedBuilding, setSelectedBuilding] = useState();
    console.log(selectedBuilding)

    function closeModal() {
        props.setIsOpen(false)
    }

    function openModal() {
        prop.setIsOpen(true)
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open dialog
                </button>
            </div>

            <Transition appear show={props.isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-50 transition-opacity' />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-main-background-blue shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-2xl font-medium leading-6 text-white"
                                >
                                    Production Statistics
                                </Dialog.Title>
                                {!detailedViewOpen && (
                                    <div className='flex flex-col'>
                                        <div className="mt-4 text-lg text-grey">
                                            <p className="">
                                                Here you will find a breakdown of all your production values.

                                            </p>
                                            <p>
                                                You can click on any building to get a more detailed breakdown of
                                                all the factors affecting the production.
                                            </p>
                                        </div>

                                        <div className='flex flex-row text-white'>
                                            <div>

                                            </div>
                                        </div>
                                        <ul role='list' className='text-white mt-4 grid gap- grid-cols-1 '>
                                            {(buildings) && Object.entries(buildings).map(building => (

                                                <li
                                                    key={building[1].name}
                                                    className='items-center cursor-pointer hover:bg-hover-grey py-2 rounded-md font-inter col-span-1 flex flex-row text-center justify-around '
                                                    onClick={() => {
                                                        setSelectedBuilding(building[1]);
                                                        setDetailedViewOpen(true);
                                                    }}
                                                >
                                                    <ul role='list' className='text-white grid gap-0 grid-cols-2 w-6/12 '>
                                                        <li className='font-semibold'>
                                                            {building[1].name}
                                                        </li>
                                                        <li>
                                                            {abbreviateNumber(getProduction(building[1]))}/s
                                                        </li>
                                                    </ul>


                                                </li>))
                                            }


                                        </ul>
                                        <div className='w-full mt-3 px-4'>
                                            <hr className='w-full  border-selected-grey  border-1' />
                                        </div>
                                        <ul role='list' className='mt-3 w-6/12 self-center text-center text-white grid gap-0 grid-cols-2 '>
                                            <li className='font-semibold'>
                                                External Upgrades
                                            </li>
                                            <li>
                                                +2324%
                                            </li>
                                        </ul>
                                    </div>
                                )}

                                {detailedViewOpen && (
                                    <div className='flex flex-col w-full'>
                                        <div className='self-end mr-16 font-semibold text-white'>
                                            Total
                                        </div>
                                        <div className='flex flex-row  mt-2 justify-around items-center'>
                                            <div className='w-3/12 text-white self-start font-semibold'>
                                                {selectedBuilding.name}
                                            </div>
                                            <ul role='list' className='text-white text-center  grid gap-2 grid-rows-3 grid-cols-3'>
                                                <li className='text-xs self-center'>
                                                    Base Production
                                                </li>
                                                <li>
                                                    {selectedBuilding.baseProduction}
                                                </li>
                                                <li>
                                                    {abbreviateNumber(selectedBuilding.baseProduction)}/s
                                                </li>
                                                <li className='text-xs self-center'>
                                                    Production Multiplier
                                                </li>
                                                <li>
                                                    +{abbreviateNumber((selectedBuilding.productionMultiplier * 100) - 100)}%
                                                </li>
                                                <li>
                                                    {abbreviateNumber(selectedBuilding.baseProduction * selectedBuilding.productionMultiplier)}/s
                                                </li>
                                                <li className='text-xs self-center'>
                                                    Amount
                                                </li>
                                                <li>
                                                    x{abbreviateNumber(selectedBuilding.amount)}
                                                </li>
                                                <li>
                                                    {abbreviateNumber(selectedBuilding.baseProduction * selectedBuilding.productionMultiplier * selectedBuilding.amount)}/s
                                                </li>

                                            </ul>
                                        </div>
                                        <div className='w-full mt-3 px-4'>
                                            <hr className='w-full  border-selected-grey  border-1' />
                                        </div>
                                    </div>
                                )}


                                <div className={`mt-12 ${detailedViewOpen ? 'flex flex-row space-x-2' : ''}`}>
                                    {detailedViewOpen && (
                                        <button
                                            type="button"
                                            className="inline-flex justify-center px-4 py-2 text-md font-medium text-white bg-blue-400 border border-transparent rounded-md hover:bg-blue-200 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                            onClick={() => {
                                                setDetailedViewOpen(false);
                                            }}
                                        >
                                            Back
                                        </button>
                                    )}
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-md font-medium text-white bg-red-400 border border-transparent rounded-md hover:bg-red-200 hover:text-red-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
