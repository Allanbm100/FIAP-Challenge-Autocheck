interface ButtonProps {
    children: React.ReactNode;
    type: "button" | "submit" | "reset" | undefined;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ children, type, onClick, ...rest }: ButtonProps) => {
    return (
        <button
            className="bg-sky-400 px-5 py-2.5 border-none rounded-lg text-base font-bold text-black"
            type={type}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}