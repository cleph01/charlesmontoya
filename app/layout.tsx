import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Charles Montoya | Cybersecurity & Web Dev",
    description: "Skilled in React, Typescript, Tailwind, Node, and more!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`dark:bg-slate-100 dark:text-gray-700 font-poppins ${poppins.className}`}
            >
                <Nav />
                {children}
            </body>
        </html>
    );
}
