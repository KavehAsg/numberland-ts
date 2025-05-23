// types
import type { menuReducerActionType } from "@/vite-env"

type propsType = {
    dispatch: React.ActionDispatch<[action: menuReducerActionType]>;
}

export default function HamburgerMenuToggle({ dispatch }: propsType) {
    return (
        <div
            id="hamburger-menu"
            className="flex h-full items-center gap-2 hover:pr-1 transition-all cursor-pointer"
            onClick={() => dispatch({ type: "burgerMenu-open" })}
        >
            <div id="bars-icon" className="w-4 flex flex-col justify-center gap-1">
                <span className="w-4 h-0.5 inline-block bg-primary rounded-[10px]"></span>
                <span className="w-4 h-0.5 inline-block bg-primary rounded-[10px]"></span>
                <span className="w-4 h-0.5 inline-block bg-primary rounded-[10px]"></span>
            </div>
            <span id="bars-title" className="text-primary">
                فهرست
            </span>
        </div>
    )
}
