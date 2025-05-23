import { useReducer, useRef } from 'react'
import { Link } from 'react-router'

// components
import DesktopSubMenu from '@components/navbar/DesktopSubMenu'

// types
import type { desktopMenuReducerStateType, navbarMenuType, menuReducerActionType } from '@/vite-env'

// icons
import { FaChevronDown } from 'react-icons/fa6'

type DesktopMenuProps = {
  navbarMenu: navbarMenuType[]
}


const desktopMenuReducerState: desktopMenuReducerStateType = {
  menuTitleHoveredIndex: null,
  isMenuTitleHovered: false,
  menuTitlePosition: {
    top: 0,
    right: 0,
  },
  isSubmenuHovered: false,
};

function desktopMenuReducer(state: desktopMenuReducerStateType, action: menuReducerActionType) {
  switch (action.type) {
    case "menuTitle-mouseEnter":
      return { ...state, isMenuTitleHovered: true };
    case "menuTitle-mouseLeave":
      return { ...state, isMenuTitleHovered: false };
    case "set-menuTitle-HoveredIndex":
      return { ...state, menuTitleHoveredIndex: action.hoveredIndex };
    case "submenu-mouseEnter":
      return { ...state, isSubmenuHovered: true };
    case "submenu-mouseLeave":
      return { ...state, isSubmenuHovered: false };
    case "set-menuTitle-Position":
      return { ...state, menuTitlePosition: action.position || { top: 0, right: 0 } };
  }
  throw Error("Unknown action: " + action.type);
}


export default function DesktopMenu({ navbarMenu }: DesktopMenuProps) {

  const [desktopMenuState, dispatch] = useReducer(desktopMenuReducer, desktopMenuReducerState);

  const menuTitlesRefs = useRef<(HTMLLIElement | null)[]>([])

  const handleMenuTitleMouseEnter = (index: number) => {
    const menuItem = menuTitlesRefs.current[index];
    if (!menuItem) return;
    const rect = menuItem.getBoundingClientRect();
    const rightPosition = window.innerWidth - rect.right;
    dispatch({
      type: "set-menuTitle-Position",
      position: { top: rect.bottom, right: rightPosition },
    });
    dispatch({ type: "set-menuTitle-HoveredIndex", hoveredIndex: index });
    dispatch({ type: "menuTitle-mouseEnter" });
  };


  return (
    <div id='desktop-menu-container'>

      <ul id='desktop-menu-list' className="flex gap-2 justify-between text-[17px] text-menuItem">

        {navbarMenu.map((menu) => {
          if (menu.options.length == 0) {
            return (
              <li key={menu.id} className='cursor-pointer'>
                <Link to={menu.link || "/"} className="menu-Item block">
                  {menu.title}
                </Link>
              </li>
            )
          }
          else if (menu.options.length > 0) {
            return (
              <li
                key={menu.id}
                className="menu-Item group cursor-pointer"
                ref={(el) => {
                  (menuTitlesRefs.current[navbarMenu.indexOf(menu)] = el)
                }
                }
                onMouseEnter={() =>
                  handleMenuTitleMouseEnter(navbarMenu.indexOf(menu))
                }
                onMouseLeave={() => dispatch({ type: "menuTitle-mouseLeave" })}
              >
                <div className="menu-title-dropdown">
                  {menu.title}
                  <FaChevronDown className="menu-svg" />
                </div>
              </li>
            );
          }
        })}

      </ul>

      <DesktopSubMenu desktopMenuState={desktopMenuState} dispatch={dispatch} navbarMenu={navbarMenu} />
    </div>
  )
}
