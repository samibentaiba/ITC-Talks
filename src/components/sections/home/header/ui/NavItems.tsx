interface NavItemProps {
    handleScroll: (id: string) => void;
    styles: string;
}

const NavItems = ({ handleScroll, styles }: NavItemProps) => {
    const navItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Agenda", id: "agenda" },
        { name: "Speakers", id: "speakers" },
    ];

    return (
        <>
            {navItems.map(({ name, id }) => (
                <button
                    key={id}
                    onClick={() => handleScroll(id)}
                    className={styles}
                >
                    {name}
                </button>
            ))}
        </>
    );
};

export default NavItems;
