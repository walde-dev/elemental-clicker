import Image from 'next/image'

export default function TopMenuButton(props){
    return (
        <div className='flex justify-center items-center px-2 py-2 rounded-2xl hover:bg-hover-grey hover:fill-accent-blue  cursor-pointer'>
            <props.icon className='w-6 h-6 text-white hover:text-accent-blue'/>
        </div>
    );
}