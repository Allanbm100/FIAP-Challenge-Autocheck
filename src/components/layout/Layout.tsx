interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-[calc(100vh-250px)] mx-auto w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]">
            <main>{children}</main>
        </div>
    )
}