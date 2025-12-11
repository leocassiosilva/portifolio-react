function Container({ children }) {
    return (
        <main className="
            w-full min-h-screen
            bg-white text-black
            dark:bg-[#0d2438] dark:text-white
        ">
            {children}
        </main>
    );
}

export default Container;
