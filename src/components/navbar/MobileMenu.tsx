import { useReducer } from "react";
import { Link } from "react-router";

// types
import type { menuReducerActionType, mobileMenuReducerStateType, navbarMenuType } from "@/vite-env";

// components
import DrawerSideBar from "@components/navbar/DrawerSideBar";
import HamburgerMenuToggle from "@components/navbar/HamburgerMenuToggle";
import MobileSubMenu from "@components/navbar/MobileSubMenu";


const mobileMenuReducerState: mobileMenuReducerStateType = {
  isBurgerMenuClicked: false,
  isBurgerMenuTitleClicked: false,
  burgerMenuTitleClickedIndex: null,
};

function mobileMenuReducer(state: mobileMenuReducerStateType, action: menuReducerActionType) {
  switch (action.type) {
    case "burgerMenuTitle-click":
      return { ...state, isBurgerMenuTitleClicked: action.state ?? false };
    case "set-burgerTitle-clickedIndex":
      return { ...state, burgerMenuTitleClickedIndex: action.clickedIndex ?? null };
    case "burgerMenu-open":
      return { ...state, isBurgerMenuClicked: true };
    case "burgerMenu-close":
      return { ...state, isBurgerMenuClicked: false };
  }
  throw Error("Unknown action: " + action.type);
}

type propsType = {
  navbarMenu: navbarMenuType[]
}

export default function MobileMenu({ navbarMenu }: propsType) {

  const [mobileMenuState, dispatch] = useReducer(mobileMenuReducer, mobileMenuReducerState);

  return (
    <div>
      <HamburgerMenuToggle dispatch={dispatch} />

      <DrawerSideBar dispatch={dispatch} mobileMenuState={mobileMenuState} >
        <ul
          id="mobile-menu-list"
          className="w-full text-base font-medium">
          {navbarMenu.map((menu, index) => {
            if (menu.options.length === 0) {
              return (
                <li className="menu-Item cursor-pointer" key={menu.id}>
                  <Link to={menu.link || '/'} className="px-4">
                    {menu.title}
                  </Link>
                  <div
                    className={`w-full h-[1px] bg-base-100 rounded-md`}
                  ></div>
                </li>
              );
            } else if (menu.options.length > 0) {
              return (
                <MobileSubMenu key={menu.id} menu={menu} index={index} mobileMenuState={mobileMenuState} dispatch={dispatch} />
              );
            }
          })}
        </ul>
      </DrawerSideBar>
    </div>
  )
}
