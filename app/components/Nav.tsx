import Link from "next/link";

const Nav = () => {
    return (
        <div className="bg-slate-600 px-2 sm:px-8 py-4 sticky top-0 z-10 drop-shadow-xl flex justify-between text-xs sm:text-base">
            <div className="hover:text-white">
                <Link
                    href="/"
                    className="text-white/90 no-underline text-xl sm:text-3xl font-semibold"
                >
                    Montoya.
                </Link>
            </div>
            <div className="flex w-2/3 sm:w-1/4 justify-between items-center">
                <Link
                    href="/journal"
                    className="text-white/90 hover:text-white no-underline"
                >
                    Journal
                </Link>
                <a
                    href="https://www.linkedin.com/in/charlesmontoya"
                    className="text-white/90 hover:text-white no-underline"
                    target="_blank"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/cleph01"
                    className="text-white/90 hover:text-white no-underline"
                    target="_blank"
                >
                    Github
                </a>
                <Link
                    href="/assets/pdf/resume.pdf"
                    target="_blank"
                    className="text-white/90 hover:text-white no-underline"
                >
                    Resume
                </Link>
            </div>
        </div>
    );
};

export default Nav;
