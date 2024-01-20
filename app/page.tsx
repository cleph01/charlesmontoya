import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="text-gray-700 bg-slate-100 px-6">
            {/* Hero Section */}
            <div className="flex flex-col justify-between items-center py-16 sm:flex-row sm:justify-between sm:items-center sm:px-16">
                <div className="sm:w-2/3 sm:pr-8">
                    <h2 className="text-4xl">Charles Montoya</h2>

                    <div className="mb-4 sm:text-lg sm:mt-6">
                        <p className="text-lg my-3 sm:text-xl">
                            Software Developer
                        </p>
                        <p className="sm:text-lg">New York, NY</p>
                        <div className="text-xs mt-4 sm:text-base">
                            <span className="text-sky-700 ">
                                charles.j.montoya@gmail.com
                            </span>{" "}
                            |{" "}
                            <Link
                                href="/assets/pdf/resume.pdf"
                                target="_blank"
                                className="text-sky-700"
                            >
                                Resume
                            </Link>{" "}
                            |{" "}
                            <a
                                href="https://linkedin.com/in/charlesmontoya"
                                target="_blank"
                                className="text-sky-700"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="my-4 sm:text-lg">
                        Previously a financial derivatives contract analyst and
                        CFA charterholder for various investment management
                        firms on Wall Street. I am now a contract software
                        engineer at a digital marketing agency where I have
                        built solutions for a number of small businesses.
                    </div>

                    <div className="mt-4 mb-10 sm:mt-6">
                        <p className="text-xl mb-2">Technologies:</p>
                        <p className="mb-2 sm:text-lg">
                            <span className="font-semibold">Frontend:</span>{" "}
                            React, NextJS, Redux, CSS/SASS/LESS, Tailwind
                        </p>
                        <p className="mb-2 sm:text-lg">
                            <span className="font-semibold">Backend:</span>{" "}
                            Node, Express, PostgreSQL, MongoDB, Firebase,
                            Supabase
                        </p>
                        <p className="mb-2 sm:text-lg">
                            <span className="font-semibold">Languages:</span>{" "}
                            Javascript, TypeScript, Python, PHP
                        </p>
                        <p className="mb-2 sm:text-lg">
                            <span className="font-semibold">PaaS:</span> Google
                            Cloud
                        </p>
                    </div>
                </div>
                <div>
                    <Image
                        src="/assets/images/profile.jpg"
                        width={350}
                        height={613}
                        alt="profile"
                        className="rounded-md"
                    />
                </div>
            </div>
            {/* Portfolio Projects */}
            <div className="pb-24 sm:px-16">
                <h3 className="text-xl mb-6 sm:text-2xl">Select Projects</h3>
                {/* Project */}
                <div className="mb-6">
                    <div className="flex flex-col sm:flex-row">
                        <p className="mb-2 text-sky-700 sm:text-lg sm:w-2/3">
                            Customer Loyalty Program for Restaurant
                        </p>
                        <div>
                            <p className="mb-2 text-justify sm:ml-2 sm:text-lg">
                                Customers sign-up with mobile number or email on
                                a tablet. After fourth visit, customer is
                                presented with a discount. Customer can also
                                check-in and sign-up via QR code.
                            </p>
                            <div className="sm:ml-2 sm:text-lg">
                                <p>
                                    <span className="font-semibold">
                                        Tech Stack:
                                    </span>{" "}
                                    NextJS, Firebase, Twilio, MailSend
                                </p>
                                <Link
                                    href="/projects/reward-club"
                                    className="text-red-700"
                                >
                                    Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project */}
                <div className="mb-6">
                    <div className="flex flex-col sm:flex-row">
                        <p className="mb-2 text-sky-700 sm:text-lg sm:w-2/3">
                            Web-to-SMS Contact Form for Roofer
                        </p>
                        <div>
                            <p className="mb-2 sm:ml-2 sm:text-lg">
                                Improved lead conversion opportunity by creating
                                and implementing an sms contact form alongside
                                their traditional email contact form. SMS
                                contact form outperforms in extraordinary and
                                profitable fashion.
                            </p>
                            <div className="sm:ml-2 sm:text-lg">
                                <p>
                                    <span className="font-semibold">
                                        Tech Stack:
                                    </span>{" "}
                                    React, Firebase, Twilio
                                </p>
                                <Link
                                    href="/projects/web-to-sms"
                                    className="text-red-700"
                                >
                                    Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project */}
                <div className="mb-6">
                    <div className="flex flex-col sm:flex-row">
                        <p className="mb-2 text-sky-700 sm:text-lg sm:w-2/3">
                            SMS Marketing Program for Jewelry Store
                        </p>
                        <div>
                            <p className="mb-2 sm:ml-6 sm:text-lg">
                                The shop sends promotional and marketing
                                messages during the holidays to over 8,000
                                customer numbers that we helped them collect via
                                a tablet located in the store.
                            </p>
                            <div className="sm:ml-6 sm:text-lg">
                                <p>
                                    <span className="font-semibold">
                                        Tech Stack:
                                    </span>{" "}
                                    PHP, NodeJS, Twilio
                                </p>
                                <Link
                                    href="/projects/sms-marketing"
                                    className="text-red-700"
                                >
                                    Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
