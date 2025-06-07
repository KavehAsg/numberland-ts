import { FaRegFaceSadTear } from "react-icons/fa6";

type propsType = {
    children?: React.ReactNode;
    error: String
}

export default function ErrorSnippet({
    children,
    error = "متاسفیم! مشکلی در اتصال به وجود اومده ...",
} : propsType) {
    return (
        <div className="flex flex-col justify-center items-center text-center italic text-lg font-bold text-red-600">
            <p>{error}</p>
            <FaRegFaceSadTear  className="mt-2 w-14 h-14 fill-neutral" />
            <div className="mt-4">{children}</div>
        </div>
    );
}
