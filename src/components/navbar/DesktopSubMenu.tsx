import { Link } from 'react-router';

// types 
import type { desktopMenuReducerStateType, menuReducerActionType, navbarMenuType } from '@/vite-env';

// components
import DesktopExpandableSubMenu from '@components/navbar/DesktopExpandableSubMenu';

type submenuPropsType = {
    desktopMenuState: desktopMenuReducerStateType;
    dispatch: React.ActionDispatch<[action: menuReducerActionType]>;
    navbarMenu: navbarMenuType[];
}

export default function DesktopSubMenu({ desktopMenuState, dispatch, navbarMenu }: submenuPropsType) {
    const {
        menuTitleHoveredIndex,
        isMenuTitleHovered,
        menuTitlePosition,
        isSubmenuHovered,
    } = desktopMenuState;

    return (
        <div
            className={`absolute menu-transition pt-3 rounded-lg text-base tracking-tight font-normal z-[1000] ${!isSubmenuHovered && !isMenuTitleHovered && "pointer-events-none"
                }`}
            style={{
                top: `${menuTitlePosition.top - 2}px`,
                right: `${menuTitlePosition.right}px`,
            }}
            onMouseEnter={() => dispatch({ type: "submenu-mouseEnter" })}
            onMouseLeave={() => dispatch({ type: "submenu-mouseLeave" })}
        >
            <ul
                className={`bg-white flex flex-col gap-[0.35rem] py-4 rounded-lg text-slimBlack shadow-custom arrow-top min-w-36 leading-7
                  ${isSubmenuHovered || isMenuTitleHovered
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }
            `}
            >
                {(isSubmenuHovered || isMenuTitleHovered) && menuTitleHoveredIndex !== null && menuTitleHoveredIndex !== undefined &&
                    navbarMenu[menuTitleHoveredIndex].options.map((item) => {
                        if (item.subMenu === undefined) {
                            return (
                                <li key={item.link}>
                                    <Link
                                        to={item.link || "/"}
                                        className="hover:text-secondary transition-colors duration-100 px-5"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        }
                        else if (item.subMenu !== undefined) {
                            return (
                                <DesktopExpandableSubMenu key={item.link} expandableMenu={item} />
                            );
                        }
                    })}
            </ul>
        </div>
    )
}
