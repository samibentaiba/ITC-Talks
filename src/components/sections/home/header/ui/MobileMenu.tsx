import { Mail, X } from "lucide-react";
import { motion } from "framer-motion";
import NavItems from "./NavItems";
import Link from "next/link";

interface MobileMenuProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
    handleScroll: (id: string) => void;
}

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen, handleScroll }: MobileMenuProps) => (
    <motion.div
        initial={{ x: "100%" }}
        animate={{ x: mobileMenuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 bottom-0 w-full md:w-[400px] bg-black z-50 flex flex-col"
    >
        <div className="flex justify-end p-6">
            <button onClick={() => setMobileMenuOpen(false)} className="text-white" aria-label="Close menu">
                <X size={24} />
            </button>
        </div>

        <div className="flex flex-col flex-grow justify-center px-8">
            <NavItems handleScroll={handleScroll} styles="text-white text-4xl font-bold font-syne uppercase mb-8 hover:text-gray-300" />
        </div>

        <div className="p-8 flex justify-center">
            <Link href="mailto:contact.itc.talks@gmail.com" className="flex items-center text-sm text-white hover:text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                contact.itc.talks@gmail.com
            </Link>
        </div>
    </motion.div>
);

export default MobileMenu;
