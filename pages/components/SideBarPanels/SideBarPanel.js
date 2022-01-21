import { useEffect, useState } from "react";

export default function SideBarPanel(props){

    const [panelToRender, setPanelToRender] = useState(props.currentPanel.window)

    useEffect(() => {
        setPanelToRender(props.currentPanel.window)
    }, [props])

    return (
        <div className={`bg-secondary-blue  sm:w-[430px] w-[250px]  rounded-tr-2xl rounded-br-2xl fixed left-0 transform duration-75 ease-in-out ${props.isSideBarOpen ? 'h-[80vh]  md:translate-x-[164px] sm:translate-x-[100px] translate-x-[100px]' : 'translate-x-[80px]  h-0'}`}>
            {console.log(props.currentPanel)}
            {panelToRender && (
                <>
                 {panelToRender}
                </>
            )}
        </div>
    );
}