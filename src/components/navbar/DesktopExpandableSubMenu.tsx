import { useRef, useState } from 'react'
import { Link } from 'react-router';

// icons
import { FaChevronDown } from 'react-icons/fa6';


type propsType = {
    expandableMenu: {
        name: string;
        link?: string;
        subMenu?: {
            name: string;
            link: string;
        }[];
    };
}

export default function DesktopExpandableSubMenu({ expandableMenu }: propsType) {
    const { name, link, subMenu } = expandableMenu;

    const [expandableMenuPosition, setSubMenuTitlePosition] = useState({
        top: 0,
        left: 0,
    }); // position of the expandable sub menu

    const [isSubMenuTitleHovered, setIsSubmenuTitleHovered] = useState(false); // state to check if the sub menu title is hovered

    const [isExpandableMenuHovered, setIsExpandableMenuHovered] = useState(false); // state to check if the expandable menu it self is hovered


    const subMenuRefs = useRef<HTMLLIElement | null>(null);


    const handleSubmenuTitleMouseEnter = () => {
        const menuItem = subMenuRefs.current;
        if (!menuItem) return;
        const rect = menuItem.getBoundingClientRect();
        const leftPosition = rect.left;
        setSubMenuTitlePosition({ top: rect.bottom, left: leftPosition });
        setIsSubmenuTitleHovered(true);
    };
    return (
        <li
            ref={subMenuRefs}
            className="group px-5 list-item"
            onMouseEnter={handleSubmenuTitleMouseEnter}
            onMouseLeave={() => setIsSubmenuTitleHovered(false)}
            key={link}
        >
            <div className="menu-title-dropdown cursor-pointer">
                {name}
                <FaChevronDown className="menu-svg" />
            </div>

            <ul // appears when the sub menu title or the expandable menu is hovered
                className={`absolute flex flex-col gap-2 bg-white px-5 py-4 rounded-lg transition-all duration-200 shadow-custom arrow-right min-w-44 leading-7 ${isExpandableMenuHovered || isSubMenuTitleHovered
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                    }`}
                style={{
                    top: `${expandableMenuPosition.top - 80}px`,
                    left: `-170px`,
                }}
                onMouseEnter={() => setIsExpandableMenuHovered(true)}
                onMouseLeave={() => setIsExpandableMenuHovered(false)}
            >
                {subMenu?.map((item) => {
                    return (
                        <li key={item.link}>
                            <Link
                                to={item.link}
                                className="hover:text-secondary transition-colors duration-100"
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </li>
    )
}
