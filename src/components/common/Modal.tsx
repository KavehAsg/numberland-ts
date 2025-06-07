// icons
import { RiCloseLargeFill } from "react-icons/ri";

type propsType = {
    children: React.ReactNode;
    componentId: string;
}

export default function Modal({ children, componentId }: propsType) {
    return (
        <dialog id={componentId} className="modal">
            <div className="modal-box pt-5 md:pt-8 w-[95%] lg:w-[512px] px-7 md:px-14 absolute top-[5%] h-fit rounded-xl">
                <form method="dialog">
                    <button className="btn btn-circle border-none bg-inherit shadow-none hover:rotate-180 hover:bg-btnHoverBg duration-500">
                        <RiCloseLargeFill className="w-6 h-6" />
                    </button>
                </form>
                {children}
            </div>
        </dialog>
    );

}