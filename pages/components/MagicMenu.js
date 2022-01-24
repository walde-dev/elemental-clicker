import { useSelector } from "react-redux"

export default function MagicMenu() {

    const spells = useSelector(state => state.magic)


    return (
        <div className='flex flex-col  h-full justify-between'>
            <ul role='list' className=' grid gap-0 grid-rows-1 sm:grid-rows-1 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 '>
                {(spells) && Object.entries(spells).map(spell => (

                    <li
                        key={spell[1].name}
                        className=' font-inter col-span-1 flex flex-col text-center justify-center '
                    >

                    </li>)
                )}

            </ul>
        </div>
    )
}
