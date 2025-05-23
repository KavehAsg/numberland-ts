import useScreenWidth from '@/hooks/useScreenSize'
import type { navbarMenuType } from '@/vite-env'
import DesktopMenu from '@components/navbar/DesktopMenu'
import MobileMenu from '@components/navbar/MobileMenu'

type MegaMenuProps = {
    navbarMenu: navbarMenuType[]
}

export default function MegaMenu({ navbarMenu }: MegaMenuProps) {

    const { isSmallScreen } = useScreenWidth(900);

    return (
        <div>
            {
                isSmallScreen ? <MobileMenu navbarMenu={navbarMenu} /> :
                    <DesktopMenu navbarMenu={navbarMenu} />
            }
        </div>
    )
}
