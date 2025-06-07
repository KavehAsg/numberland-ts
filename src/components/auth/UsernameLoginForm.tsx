import type { loginFormsPropsType } from '@/vite-env';

import { FaKey, FaRegEye, FaUser } from 'react-icons/fa6'


export default function UsernameLoginForm({ loginInputs, setLoginInputs, loginMethodBtns, inputsChangeHandler }: loginFormsPropsType) {

    const { username, password, isShowPassword } = loginInputs;

    return (
        <form
            id="login-usernameMethod">
            <div className="inputs flex flex-col gap-6 select-none">
                <span className="block text-center text-xl lg:text-2xl">
                    ورود / ثبت نام
                </span>
                <label
                    className={`input bg-base-300 group h-16 !outline-none border-2 placeholder-shown:bg-black flex flex-row-reverse items-center gap-2 focus-within:bg-inherit focus-within:border-info transition-all duration-500 input-filled`}
                >
                    <FaUser className="h-6 w-6 opacity-70 group-focus-within:fill-info transition-all duration-300" />
                    <input
                        dir="ltr"
                        type="text"
                        className="grow mt-1 text-base sm:text-lg"
                        placeholder="Username"
                        value={username}
                        name="username"
                        onChange={inputsChangeHandler}
                    />
                </label>

                <label className="input group h-16 !outline-none border-2 bg-base-300 flex flex-row-reverse items-center gap-2 focus-within:bg-inherit focus-within:border-info transition-all duration-500">
                    <FaKey className="h-6 w-6 opacity-70 group-focus-within:fill-info transition-all duration-300" />
                    <input
                        dir="ltr"
                        type={`${isShowPassword ? "text" : "password"}`}
                        className="grow text-left"
                        placeholder="password"
                        value={password}
                        name="password"
                        onChange={inputsChangeHandler}
                    />
                    <FaRegEye
                        className="h-6 w-6 opacity-70 cursor-pointer"
                        onClick={() => {
                            if (setLoginInputs) {
                                setLoginInputs((loginInputs) => {
                                    return {
                                        ...loginInputs,
                                        isShowPassword: !isShowPassword,
                                    }
                                });
                            }
                        }}
                    />
                </label>
                <div
                    className="tooltip bg-red-400 w-32 mt-2 right-[calc(50%-4rem)] rounded-lg "
                    data-tip="این گزینه نمایشیه:)"
                >
                    <button type='button' className="relative w-full py-3 h-full button-effect rounded-lg bg-info overflow-hidden hover:scale-105 transition-all duration-500 before:right-[-10px] text-white">
                        ورود
                    </button>
                </div>
            </div>
            <div className="my-3 flex w-full justify-between text-neutral cursor-pointer">
                <button type='button' name="phoneMethod" onClick={loginMethodBtns}>
                    ورود با پیامک
                </button>
                <button type='button' name="forgetPassword" onClick={loginMethodBtns}>
                    فراموشی رمز
                </button>
            </div>
        </form>
    )
}
