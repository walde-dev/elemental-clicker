export default function SideBarButton(props) {
    return (
        <div
            className='flex justify-center items-center w-[81px] h-[69px]  hover:bg-hover-grey rounded-2xl cursor-pointer '
            onClick={() => {
                props.setIsSideBarOpen(!props.isSideBarOpen);
                console.log(props.panel)
                props.setCurrentPanel(props.panel);
            }}
        >
            <props.icon
                className='py-1 px-1 w-10 h-10 rounded-md text-white bg-accent-blue'
            />
        </div>
    );
}