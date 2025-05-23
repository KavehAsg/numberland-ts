import { Link } from "react-router";

// types
import type { menuReducerActionType, mobileMenuReducerStateType, navbarMenuType } from "@/vite-env";

// components
import MobileExpandableSubMenu from "@components/navbar/MobileExpandableSubMenu";

// icons
import { FaChevronDown } from "react-icons/fa6";

type propsType = {
    index: number;
    menu: navbarMenuType;
    mobileMenuState: mobileMenuReducerStateType;
    dispatch: React.ActionDispatch<[action: menuReducerActionType]>;
}

export default function MobileSubMenu({ index, menu, mobileMenuState, dispatch }: propsType) {

    const { isBurgerMenuTitleClicked, burgerMenuTitleClickedIndex } = mobileMenuState;


    const handleBurgerTitlesClick = (index: number) => {
        if (
            index == burgerMenuTitleClickedIndex &&
            isBurgerMenuTitleClicked == true
        )
            dispatch({ type: "burgerMenuTitle-click", state: false });
        else if (
            index == burgerMenuTitleClickedIndex &&
            isBurgerMenuTitleClicked == false
        )
            dispatch({ type: "burgerMenuTitle-click", state: true });
        else {
            dispatch({ type: "set-burgerTitle-clickedIndex", clickedIndex: index });
            dispatch({ type: "burgerMenuTitle-click", state: true });
        }
    };


    return (
        <li className="menu-Item group cursor-pointer">
            <div
                className="menu-title-dropdown px-4"
                onClick={() =>
                    handleBurgerTitlesClick(index)
                }
            >
                {menu.title}
                <FaChevronDown className="menu-svg" />
            </div>
            <div
                className={`w-full flex flex-col  h-[1px] bg-base-100 rounded-md overflow-hidden transition-all duration-300
                      ${isBurgerMenuTitleClicked &&
                    burgerMenuTitleClickedIndex ==
                    index &&
                    "!h-fit py-2"
                    } `}
            >
                <ul>
                    {menu.options.map((item) => {
                        if (item.subMenu != undefined) {
                            return (
                                <MobileExpandableSubMenu
                                key={item.link}
                                expandableMenu={item}
                                />
                            );
                        }
                        else if (item.subMenu === undefined) {
                            return (
                                <li key={item.link} className="menu-Item">
                                    <Link
                                        to={item.link || '/'}
                                        className="hover:text-secondary transition-colors duration-100 px-5"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </li>
    )
}
