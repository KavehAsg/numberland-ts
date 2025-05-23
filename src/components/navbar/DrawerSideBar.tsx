// types
import type { menuReducerActionType, mobileMenuReducerStateType } from '@/vite-env';

// icons
import { RiCloseLargeFill } from 'react-icons/ri';

type propsType = {
    mobileMenuState: mobileMenuReducerStateType,
    dispatch: React.ActionDispatch<[action: menuReducerActionType]>;
    children: React.ReactNode
}

export default function DrawerSideBar({ mobileMenuState, dispatch, children }: propsType) {
    const { isBurgerMenuClicked } = mobileMenuState;


    return (
        <div
            id='sidebar-container'
            className={`fixed z-[1000] overflow-hidden flex w-screen h-dvh max-h-lvh top-[-10px] right-[-100%] 
            ${isBurgerMenuClicked && "right-[0%]"
                } 
                transition-all duration-500 z-10`}
        >
            <div
                id='sidebar'
                className={`w-3/5 sm:w-4/12 text-sm h-full overflow-y-auto overflow-x-hidden bg-white z-20 pt-4 flex flex-col gap- items-start`}
            >
                <div className='flex justify-end w-full'>
                    <button
                        id='sidebar-close-btn'
                        type='button'
                        className="btn btn-sm btn-circle ml-3 mt-3 border-none bg-inherit shadow-none hover:rotate-180 hover:bg-btnHoverBg duration-500"
                        onClick={() => dispatch({ type: "burgerMenu-close" })}
                    >
                        <RiCloseLargeFill className='w-5 h-5' />

                    </button>
                </div>

                <div id='sidebar-content' >
                    {children}
                </div>


            </div>

            <div // filler backdrop - onclick => close the visible menu
                id='sidebar-filler'
                className={`w-2/5 sm:w-8/12 h-full z-20 transition-opacity duration-500 ${isBurgerMenuClicked ? "bg-black opacity-50 delay-[350ms]" : "opacity-0 delay-0"}`}
                onClick={() => dispatch({ type: "burgerMenu-close" })}
            ></div>
        </div>
    )
}
