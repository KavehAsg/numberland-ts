import { navbarMenu } from '@/constants/navbarMenu'
import MegaMenu from '@components/navbar/MegaMenu'
import User from '../auth/User'


export default function Navbar() {
  return (
    <div className="flex flex-row-reverse justify-between items-center pl-3 pr-3 lg:pr-6 h-13 bg-secondary-content relative text-menuItem ">
       <User />
        
      <MegaMenu navbarMenu={navbarMenu} /> 
    </div>
  )
}
