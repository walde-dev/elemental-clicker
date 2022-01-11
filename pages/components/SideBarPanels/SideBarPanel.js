export default function SideBarPanel(props){
    return (
        <div className={`bg-secondary-blue  sm:w-[430px] w-[250px]  rounded-tr-2xl rounded-br-2xl fixed left-0 transform duration-200 ease-in-out ${props.isSideBarOpen ? 'h-[80vh]  md:translate-x-[164px] sm:translate-x-[100px] translate-x-[100px]' : 'translate-x-[80px] opacity-0 h-0'}`}>
            {props.currentPanel && (
                <>
                 {props.currentPanel}
                </>
            )}
        </div>
    );
}