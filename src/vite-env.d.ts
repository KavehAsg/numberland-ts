/// <reference types="vite/client" />



export interface menuReducerActionType { // navbar
    type: string;
    position?: { top: number; right: number };
    hoveredIndex?: number | null;
    state?: boolean;
    clickedIndex?: number;
}

export interface desktopMenuReducerStateType { // navbar
    menuTitlePosition: { top: number; right: number };
    menuTitleHoveredIndex: number | null | undefined;
    isMenuTitleHovered: boolean;
    isSubmenuHovered: boolean;
}

export interface mobileMenuReducerStateType { // navbar
    isBurgerMenuClicked: boolean;
    isBurgerMenuTitleClicked: boolean ;
    burgerMenuTitleClickedIndex: number | null,
}


export interface navbarMenuType { // constant/navbarMenu.ts
    title: string;
    id: number;
    link?: string;
    options: Array<{
        name: string;
        link?: string;
        subMenu?: Array<{
            name: string;
            link: string;
        }>;
    }>
}

export interface loginInputsType {
    username: string;
    password: string;
    phone: string;
    isShowPassword: boolean;
}

export type loginFormsPropsType = {
    loginInputs: loginInputsType;
    setLoginInputs?: React.Dispatch<React.SetStateAction<loginInputsType>>;
    loginMethodBtns: (event: React.MouseEvent<HTMLButtonElement>) => void;
    inputsChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}