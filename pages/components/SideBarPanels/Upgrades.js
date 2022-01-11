export default function Upgrades(props){
    if(props.isSideBarOpen){
        return <></>
    }

    return (
        <div className='flex flex-col items-center px-2 py-2'>
            <div className='flex mt-4 justify-center items-center text-white font-normal text-2xl bg-selected-grey rounded-md w-[237px] h-[60px]'>
                Upgrades
            </div>
            <div className='flex mt-10 justify-center items-center text-white text-md bg-selected-grey rounded-2xl w-[237px] h-[30px]'>
                Available Upgrades
            </div>
        </div>
    );
}