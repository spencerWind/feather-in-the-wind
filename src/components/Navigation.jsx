import { motion, useCycle } from "framer-motion";

import linkedinIcon from "../assets/linkedinIcon.svg";
import facebookIcon from "../assets/facebookIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";

const Navigation = () => {
    const [mobileNav, toggleMobileNav] = useCycle(false, true);

    return (
        <nav className="h-16 border sticky z-50 border-slate-50 p-2 flex flex-row items-center justify-between">
            <div className="lg:flex items-center">
                <span
                    id="mobileMenu"
                    className="border-2 border-black w-12 h-12 flex items-center justify-center rounded-full bg-slate-950">
                    <p className="text-slate-100">logo</p>
                </span>
                <h1 className="max-lg:hidden ml-3 text-xl font-bold">
                    Feather In The Wind
                </h1>
            </div>
            <div className="max-md:w-12 h-12 flex items-center justify-center relative z-10">
                <motion.button
                    animate={mobileNav ? "open" : "closed"}
                    onClick={() => toggleMobileNav()}
                    className="lg:hidden flex flex-col items-center gap-2">
                    <motion.span
                        variants={{
                            closed: { rotate: 0 },
                            open: { rotate: 45, y: 14 },
                        }}
                        className={
                            mobileNav
                                ? "bg-slate-100 h-1.5 w-10 "
                                : "bg-slate-900 h-1.5 w-10 "
                        }></motion.span>
                    <motion.span
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        }}
                        className="bg-slate-900 h-1.5 w-10"></motion.span>
                    <motion.span
                        variants={{
                            closed: { rotate: 0 },
                            open: { rotate: -45, y: -14 },
                        }}
                        className={
                            mobileNav
                                ? "bg-slate-100 h-1.5 w-10 "
                                : "bg-slate-900 h-1.5 w-10 "
                        }></motion.span>
                </motion.button>
            </div>
            {mobileNav && (
                <div className="fixed -z-0 inset-0 bg-slate-950 text-slate-100 flex flex-col justify-center">
                    <div className="px-8">
                        <ul className="text-4xl font-bold space-y-6">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Menu</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="border-t-4 mx-8 my-12">
                        <div className="flex items-center justify-center pt-12 space-x-6">
                            <img
                                src={facebookIcon}
                                alt="facebook"
                            />
                            <img
                                src={instagramIcon}
                                alt="instagram"
                            />
                            <img
                                src={linkedinIcon}
                                alt="linkedin"
                            />
                        </div>
                    </div>
                </div>
            )}
            <div className="max-lg:hidden font-medium">
                <ul className="flex items-center justify-center gap-12">
                    <li className="underline">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Menu</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
