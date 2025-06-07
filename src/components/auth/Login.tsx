import { useState } from "react";
import UsernameLoginForm from "./UsernameLoginForm";
import type { loginInputsType } from "@/vite-env";
import PhoneLoginForm from "./PhoneLoginForm";
import ForgetPassword from "./ForgetPassword";
import ErrorSnippet from "../common/ErrorSnippet";

export default function Login() {

    const [loginInputs, setLoginInputs] = useState<loginInputsType>({
        username: "",
        password: "",
        phone: "",
        isShowPassword: false,
    });

    const [loginMethod, setLoginMethod] = useState("login-usernameMethod");
    // inputs render based on this state

    const inputsChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = (event.target as HTMLInputElement).name;
        const value = (event.target as HTMLInputElement).value;
        setLoginInputs((loginInputs) => ({ ...loginInputs, [name]: value }));
    };

    const loginMethodBtns = (event: React.MouseEvent<HTMLButtonElement>) => {
        const name = (event.target as HTMLButtonElement).name;
        setLoginMethod(`login-${name}`);
    };

    function switchLoginMethods() {
        switch (loginMethod) {
            case "login-usernameMethod":
                return <UsernameLoginForm loginInputs={loginInputs} setLoginInputs={setLoginInputs} loginMethodBtns={loginMethodBtns} inputsChangeHandler={inputsChangeHandler} />
            case "login-phoneMethod":
                return <PhoneLoginForm inputsChangeHandler={inputsChangeHandler} loginMethodBtns={loginMethodBtns} loginInputs={loginInputs} />
            case "login-forgetPassword":
                return <ForgetPassword inputsChangeHandler={inputsChangeHandler} loginMethodBtns={loginMethodBtns} loginInputs={loginInputs} />
            default:
                return <ErrorSnippet error={"ورودی نامشخص!"} >
                    <button type="button" name="usernameMethod" className="text-primary underline" onClick={loginMethodBtns}>
                        ورود با نام کاربری
                    </button>
                </ErrorSnippet>
        }
    }


    return (
        <div>
            {switchLoginMethods()}
        </div>
    )
}
