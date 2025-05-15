import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { LuMenu } from "react-icons/lu";

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      {/* Updated Logo */}
      <Link
        href="/"
        className="group flex items-center gap-2 text-2xl font-bold tracking-wide text-white bg-gradient-to-r from-blue-600 to-blue-500 px-3 py-1.5 rounded-md shadow-sm hover:from-blue-700 hover:to-blue-600 transition-all duration-300 dark:from-blue-500 dark:to-blue-400 dark:hover:from-blue-600 dark:hover:to-blue-500 transform hover:scale-105"
      >
        {/* Optional Icon (Uncomment if you want to use an icon) */}
        {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg> */}
        <span className="font-[Poppins,Inter,sans-serif]">FileFly</span>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-6 text-base font-semibold">
        {["Home", "About", "Privacy Policy"].map((item, idx) => (
          <Link
            key={idx}
            href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="relative text-foreground hover:text-blue-600 transition duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Right Side */}
      <div className="items-center hidden gap-3 md:flex">
        <ModeToggle />
        <Link href="https://github.com/TanishKumarDev" target="_blank" rel="noopener noreferrer">
          <span className="flex items-center gap-2 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300">
            Github Repo <BsGithub className="text-xl" />
          </span>
        </Link>
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger className="block p-3 md:hidden">
          <span className="text-2xl text-slate-950 dark:text-slate-200">
            <LuMenu />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {/* <SheetDescription>
              <div className="flex flex-col w-full h-full gap-4 mt-6">
                {["Home", "About", "Privacy Policy"].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-base font-semibold text-foreground hover:text-blue-600 transition"
                  >
                    {item}
                  </Link>
                ))}
                <ModeToggle />
              </div>
            </SheetDescription> */}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}