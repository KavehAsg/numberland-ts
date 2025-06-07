import type { loginFormsPropsType } from "@/vite-env";
import { FaSimCard } from "react-icons/fa6";

export default function PhoneLoginForm({ loginInputs, loginMethodBtns, inputsChangeHandler }: loginFormsPropsType) {

  const { phone } = loginInputs;

  return (
    <>
      <div className="inputs flex flex-col gap-6 select-none">
        <span className="block text-center text-xl lg:text-2xl">
          ورود با شماره تلفن
        </span>
        <label
          className={`input bg-base-300 mt-6 group h-16 !outline-none border-2 placeholder-shown:bg-black flex flex-row-reverse items-center gap-2 focus-within:bg-inherit focus-within:border-info transition-all duration-500 input-filled`}
        >
          <FaSimCard className="h-6 w-6 opacity-70 group-focus-within:fill-info transition-all duration-300" />
          <input
            dir="ltr"
            type="number"
            className="grow mt-1 text-base sm:text-lg"
            placeholder="شماره موبایل"
            value={phone}
            name="phone"
            onChange={inputsChangeHandler}
          />
        </label>

        <div
          className="tooltip bg-red-400 w-32 mt-2 right-[calc(50%-4rem)] rounded-lg "
          data-tip="این گزینه نمایشیه:)"
        >
          <button type="button" className="relative w-full py-3 h-full button-effect rounded-lg bg-info overflow-hidden hover:scale-105 transition-all duration-500 before:right-[-10px] text-white">
            دریافت کد تایید
          </button>
        </div>
      </div>
      <div className="my-3 flex w-full justify-between text-neutral cursor-pointer">
        <button type="button" name="usernameMethod" onClick={loginMethodBtns}>
          ورود با نام کاربری
        </button>
      </div>
    </>
  )
}
