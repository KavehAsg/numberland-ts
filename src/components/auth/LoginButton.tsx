// components
import BubbleButton from "@components/common/BubbleButton";
import Modal from "@components/common/Modal";

// icons
import { FaArrowRightToBracket } from "react-icons/fa6";
import Login from "./Login";

export default function LoginButton() {
  return (
    <div>
      <BubbleButton
        color={"bg-secondary"}
        onClickFunc={() => (document.getElementById("login-modal") as HTMLDialogElement | null)?.showModal()}
      >
        <FaArrowRightToBracket className="w-4 lg:w-4 " />
        ورود | ثبت نام
      </BubbleButton>

      <Modal componentId="login-modal">
        <Login />
      </Modal>
    </div>
  )
}
