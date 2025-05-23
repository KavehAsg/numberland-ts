import { useState } from "react";
import { Link } from "react-router"

// icons
import { FaChevronDown } from "react-icons/fa6";

type propsType = {
    expandableMenu: {
        name: string;
        link?: string;
        subMenu?: Array<{
            name: string;
            link: string;
        }>;
    }
}

export default function MobileExpandableSubMenu({ expandableMenu }: propsType) {
    const { name, link, subMenu } = expandableMenu;

    const [isBurgerTitleClicked, setIsBurgerTitleClicked] = useState(false);

    return (
        <li
            key={link}
            className="list-item menu-Item">
            <div
                className="menu-title-dropdown px-5"
                onClick={() => setIsBurgerTitleClicked((prevState) => !prevState)}
            >
                {name}
                <FaChevronDown className="menu-svg" />
            </div>

            <div
                className={`w-full h-[0px] bg-base-100 rounded-md overflow-hidden transition-all duration-300
                      ${isBurgerTitleClicked && "!h-fit py-2"} `}
            >
                <ul className="flex flex-col gap-3">
                    {subMenu?.map((item) => {
                        return (
                            <li key={item.link}>
                                <Link
                                    to={item.link}
                                    className="hover:text-secondary transition-colors duration-100 pr-10"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </li>
    )
}
