type propsType = {
    onClickFunc: () => void;
    color: string;
    children: React.ReactNode;
}

export default function BubbleButton({ onClickFunc, color, children }: propsType) {
    return (
        <button
            type="button"
            className={`relative button-effect hover:scale-105 z-10 transition-all duration-500 overflow-hidden flex justify-between items-center rounded-md p-2 pr-5 gap-1 text-white h-8 lg:h-8 ${color} before:right-[-15px]`}
            onClick={() => onClickFunc()}
        >
            {children}
        </button>
    );
}
