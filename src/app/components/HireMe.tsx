import React from "react";
import { CircularText } from "./Icon";
import Link from "next/link";

const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-4 flex item-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
            <div className="w-48 md:w-24 h-auto flex items-center justify-center relative">
                <CircularText
                    className={
                        "fill-dark dark:fill-light dark: animate-spin-slow"
                    }
                />
                <Link
                    href={"mailto:atumabhi@gmail.coom"}
                    className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 md:w-12 h-20 md:h-12 md:text-[10px] rounded-full font-semibold hover:bg-light hover:text-dark
                    dark:bg-light  dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                >
                    Hire Me
                </Link>
            </div>
        </div>
    );
};

export default HireMe;
