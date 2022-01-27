import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import { getBuildingUpgrades, getProduction, getTotalProductionFromBuildings } from '../../../redux/store/buildings';
import { getCoinsPerSecond, getCoinsPerSecondUpgradeAmount, getCoinsPerSecondUpgrades } from '../../../redux/store/player';
import { abbreviateNumber } from '../../Logic/logic';

export default function CoinsPerClickStats(props) {

    const buildings = useSelector(state => state.buildings);
    const player = useSelector(state => state.player);

    const [detailedViewOpen, setDetailedViewOpen] = useState(false);
    const [selectedBuilding, setSelectedBuilding] = useState();

    let totalBaseAdd = 0;

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
                                    Click Reward Statistics
                                </Dialog.Title>
                                {!detailedViewOpen && (
                                    <div className='flex flex-col'>
                                        <div className="mt-4 text-lg text-grey">
                                            <p className="">
                                                Here you will find a breakdown of all factors affecting your click reward.

                                            </p>

                                        </div>

                                        <div className='flex flex-row text-white'>
                                            <div>

                                            </div>
                                        </div>
                                        <div className='flex flex-col w-full'>
                                            <div className='self-end mr-[95px] font-semibold text-white'>
                                                Total
                                            </div>
                                            <div className='flex flex-row justify-around items-center'>
                                                <div className='w-3/12  text-white self-start font-semibold'>
                                                    Click Reward
                                                </div>
                                                <div className='flex flex-col overflow-y-auto h-72'>
                                                    <ul role='list' className=' text-white w-10/12 grid grid-cols-3  text-center self-center '>

                                                        <li className='text-sm'>
                                                            Base Reward
                                                        </li>
                                                        <li>
                                                            1
                                                        </li>
                                                        <li>
                                                            1
                                                        </li>
                                                    </ul>
                                                    <div className='w-full mt-3 px-4'>
                                                        <hr className='w-full  border-selected-grey  border-1' />
                                                    </div>
                                                    <ul role='list' className='text-white mt-4 grid gap- grid-cols-1 w-10/12  self-center'>
                                                        {player.coinsPerClickUpgrades.filter(upgrade => upgrade.bonusType === 'baseAdd').map(upgrade => (

                                                            <li
                                                                key={upgrade.upgrade.name}
                                                                className='items-center py-2 rounded-md font-inter col-span-1 flex flex-row text-center justify-around '

                                                            >

                                                                <ul role='list' className='text-white grid gap-0 grid-cols-3  w-full'>
                                                                    <li className='text-sm'>
                                                                        {upgrade.upgrade.name}
                                                                    </li>
                                                                    <li>
                                                                        +{abbreviateNumber(upgrade.value)}
                                                                    </li>
                                                                    <li>
                                                                        {abbreviateNumber(totalBaseAdd += upgrade.value)}
                                                                    </li>
                                                                </ul>



                                                            </li>))
                                                        }


                                                    </ul>
                                                    <div className='w-full mt-3 px-4'>
                                                        <hr className='w-full  border-selected-grey  border-1' />
                                                    </div>
                                                    <ul role='list' className='text-white mt-4 grid gap- grid-cols-1 w-10/12  self-center'>
                                                        {player.coinsPerClickUpgrades.filter(upgrade => upgrade.bonusType === 'mul').map(upgrade => (

                                                            <li
                                                                key={upgrade.upgrade.name}
                                                                className='items-center py-2 rounded-md font-inter col-span-1 flex flex-row text-center justify-around '

                                                            >

                                                                <ul role='list' className='text-white grid gap-0 grid-cols-3  w-full'>
                                                                    <li className='text-sm'>
                                                                        {upgrade.upgrade.name}
                                                                    </li>
                                                                    <li>
                                                                        +{abbreviateNumber(upgrade.value) * 100 - 100}%
                                                                    </li>
                                                                    <li>
                                                                        {abbreviateNumber(totalBaseAdd *= upgrade.value)}
                                                                    </li>
                                                                </ul>



                                                            </li>))
                                                        }


                                                    </ul>
                                                    <div className='w-full mt-3 px-4'>
                                                        <hr className='w-full  border-selected-grey  border-1' />
                                                    </div>
                                                    <ul role='list' className='text-white mt-4 grid gap- grid-cols-1 w-10/12  self-center'>
                                                        {player.coinsPerClickUpgrades.filter(upgrade => upgrade.bonusType === 'add').map(upgrade => (

                                                            <li
                                                                key={upgrade.upgrade.name}
                                                                className='items-center py-2 rounded-md font-inter col-span-1 flex flex-row text-center justify-around '

                                                            >

                                                                <ul role='list' className='text-white grid gap-0 grid-cols-3  w-full'>
                                                                    <li className='text-sm'>
                                                                        {upgrade.upgrade.name}
                                                                    </li>
                                                                    <li>
                                                                        +{abbreviateNumber(upgrade.value)}
                                                                    </li>
                                                                    <li>
                                                                        {abbreviateNumber(totalBaseAdd += upgrade.value)}
                                                                    </li>
                                                                </ul>



                                                            </li>))
                                                        }


                                                    </ul>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                )}

                                <div className='w-full mt-12 '>
                                    <hr className='w-full  border-selected-grey  border-1' />
                                </div>


                                <div className={`mt-4 ${detailedViewOpen ? 'flex flex-row space-x-2' : ''}`}>
                                    {detailedViewOpen && (
                                        <button
                                            type="button"
                                            className="inline-flex justify-center px-4 py-2 text-md font-medium text-white bg-blue-400 border border-transparent rounded-md hover:bg-blue-200 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                            onClick={() => {
                                                setDetailedViewOpen(false);
                                                setSelectedBuilding();
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
