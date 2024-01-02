import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="text-gray-700 bg-slate-100 px-6">
            {/* Hero Section */}
            <div className="flex flex-col justify-between items-center py-16 sm:flex-row sm:justify-between sm:items-center sm:px-16">
                <div className="sm:w-2/3">
                    <h2 className="text-4xl">Charles Montoya</h2>

                    <div className="mb-4 sm:text-lg sm:mt-6">
                        <p className="text-lg my-2 sm:text-xl">
                            Software Developer
                        </p>
                        <p className="sm:text-lg">New York, NY</p>
                        <Link
                            href="mailto:charles.j.montoya@gmail.com"
                            target="_blank"
                            className="text-sky-700"
                        >
                            Email
                        </Link>{" "}
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

                    <div className="sm:mt-8">
                        <p className="text-xl mb-2">Technologies:</p>
                        <p className="mb-2 sm:text-lg">
                            <span className="font-semibold">Frontend:</span>{" "}
                            React, NextJS, SASS/LESS/CSS, Tailwind, MaterialUI,
                            Redux, React Query
                        </p>
                        <p className="mb-2 sm:text-lg">
                            <span className="font-semibold">Backend:</span>{" "}
                            Node, Express, REST, Firebase, Supabase, MongoDB,
                            PostgreSQL, Sqlite3
                        </p>
                        <p className="mb-2 sm:text-lg">
                            <span className="font-semibold">Languages:</span>{" "}
                            Javascript, TypeScript, Python, PHP{" "}
                        </p>
                        <p className="mb-2 sm:text-lg">
                            <span className="font-semibold">PaaS:</span> Google
                            Cloud
                        </p>
                    </div>
                    <div className="text-justify my-4 sm:text-lg">
                        Previously a financial derivatives contract analyst and
                        CFA charterholder for various investment management
                        firms on Wall Street. I am now a contract software
                        engineer at a digital marketing agency where I've built
                        solutions for a number of small businesses.
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
                            Built Customer Loyalty Program for Restaurant
                        </p>
                        <div>
                            <p className="mb-2 text-justify sm:ml-2 sm:text-lg">
                                Customers signs-up with mobile number or email
                                on a tablet. After fourth visit, customer is
                                presented with a discount. User can also
                                check-in and sign-up with their mobile browser
                                via QR code.
                            </p>
                            <div className="sm:ml-2 sm:text-lg">
                                <p>
                                    <span className="font-semibold">
                                        Tech Stack:
                                    </span>{" "}
                                    NextJS, Firebase, MailSend, Twilio
                                </p>
                                <Link
                                    href="https://youtu.be/dSTr10kPeYY"
                                    target="_blank"
                                    className="text-red-700"
                                >
                                    video
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project */}
                <div className="mb-6">
                    <div className="flex flex-col sm:flex-row">
                        <p className="mb-2 text-sky-700 sm:text-lg sm:w-2/3">
                            Built Web-to-SMS Contact Form for Roofer
                        </p>
                        <div>
                            <p className="mb-2 sm:ml-2 sm:text-lg">
                                Improved lead conversion opportunity by creating
                                and implementing an sms contact form alongside
                                their traditional email contact form. SMS
                                contact form outperformed in extraordinary
                                fashion.
                            </p>
                            <div className="sm:ml-2 sm:text-lg">
                                <p>
                                    <span className="font-semibold">
                                        Tech Stack:
                                    </span>{" "}
                                    React, Firebase, Twilio
                                </p>
                                <Link
                                    href="https://youtu.be/Qkl-QvjrXhI"
                                    target="_blank"
                                    className="text-red-700"
                                >
                                    video
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project */}
                <div className="mb-6">
                    <div className="flex flex-col sm:flex-row">
                        <p className="mb-2 text-sky-700 sm:text-lg sm:w-2/3">
                            Built SMS Marketing Program for Jewelry Store
                        </p>
                        <div>
                            <p className="mb-2 sm:ml-6 sm:text-lg">
                                The shop sends promotional and marketing
                                messages during the holidays to over 8,000
                                customer numbers that we helped them collect via
                                a tablet located in the store. Text messages
                                usually a nice image.
                            </p>
                            <div className="sm:ml-6 sm:text-lg">
                                <p>
                                    <span className="font-semibold">
                                        Tech Stack:
                                    </span>{" "}
                                    PHP, NodeJS, Twilio
                                </p>
                                <Link
                                    href="https://youtu.be/K9ntyTDBULQ"
                                    target="_blank"
                                    className="text-red-700"
                                >
                                    video
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
