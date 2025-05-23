import { navbarMenu } from '@/constants/navbarMenu'
import MegaMenu from '@components/navbar/MegaMenu'


export default function Navbar() {
  return (
    <div className="flex flex-row-reverse justify-between items-center pl-3 pr-3 lg:pr-6 h-13 bg-secondary-content relative text-menuItem ">
       {/* <LoginModal /> */}
       <div>ddd</div>

      <MegaMenu navbarMenu={navbarMenu} /> 
    </div>
  )
}
