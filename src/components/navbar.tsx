import { appleImg, searchImg, bagImg } from "../utils";
import { navLists } from "../constants";


export function Navbar() {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex items-center justify-between">
            <nav className="w-full flex screen-max-width">
                <img src={appleImg} alt="apple" width={14} height={18} />

                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((nav: string) => (
                        <div className="px-5 text-sm text-gray cursor-pointer hover:text-white transition-all" key={nav}>
                            {nav}
                        </div>
                    ))}
                </div>

                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt='search' width={18} height={18} />
                    <img src={bagImg} alt='bag' width={18} height={18} />
                </div>
            </nav>
        </header>
    )
}