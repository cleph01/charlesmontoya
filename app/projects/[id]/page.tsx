import Link from "next/link";
import React from "react";

interface ProjectData {
    id: string;
    title: string;
    desc: string;
    highlights: string[];
    stack: {
        front: string[];
        back: string[];
    };
    youtubeUrl: string;
}

const projectData = [
    {
        id: "reward-club",
        title: "Reward Club",
        desc: "A customer loyalty program that I built for a chicken wing restaurant in Queens, NY. The system is at two locations: Astoria and Rego Park. The system is served as a web app on an iPad broswer alongside the cash register. Customers can signup with a mobile number or email.  After the 4th visit, they earn a discount on their purchase. Customers and staff can also use a look-up function to check stats like current points and last time the customer checked in or earned a discount.",
        highlights: [
            "Over 4,000 users",
            "Custom Solution to allow browser based Mobile CheckIn via QR Code.",
        ],
        stack: {
            front: ["NextJS", "CSS"],
            back: ["Firebase", "Cloud Functions", "SendMail"],
        },
        youtubeUrl: "https://youtube.com/embed/dSTr10kPeYY",
    },
    {
        id: "web-to-sms",
        title: "Web to SMS",
        desc: "A Web-to-SMS contact form I build for a roofer in Ansonia, CT. The roofer had previously made casual comments about how much spam they were getting from their contact form and how it would result in their missing requests for estimates. My form is an alternative to a standard email form in that the potential client sends this message to the owner's mobile phone.  Since its deployment, this tool has recorded over 201 incoming requests for estimates, volume that the owner verifies is much more than what would previously come in from emails.",
        highlights: [
            "Elimiated Spam from Email Contact Form",
            "Improved Sales Conversion",
        ],
        stack: {
            front: ["NextJS", "CSS"],
            back: ["Firebase", "Cloud Functions", "Twilio"],
        },
        youtubeUrl: "https://youtube.com/embed/Qkl-QvjrXhI",
    },
    {
        id: "sms-marketing",
        title: "SMS Marketing",
        desc: "An SMS marketing service I built for a jewelry store in Yonkers, NY. One of my first independent projects, which I coded in PHP and was served on an iPad browser on display on a stand in the jewelry store.  Over 6 years, we've helped the business collect over 8,000 mobile numbers, which they send promotional messages to throughout the year.",
        highlights: [
            "Captured over 8,000",
            "Customers routinely thankful for the promotions.",
        ],
        stack: {
            front: ["NextJS", "CSS"],
            back: ["Firebase", "Cloud Functions", "Twilio"],
        },
        youtubeUrl: "https://youtube.com/embed/K9ntyTDBULQ",
    },
];

// function to create slugs
export async function generateStaticParams() {
    // Return a list of possible value for id
    return projectData.map((project) => {
        return {
            id: project.id,
        };
    });
}

function getPost({ params }: { params: { id: string } }) {
    const project = projectData.find((project) => project.id === params.id);
    return project;
}

const Project = ({ params }: { params: { id: string } }) => {
    const project = getPost({ params });

    return (
        <div className="flex flex-col items-center justify-center text-gray-700 bg-slate-100 p-6">
            {/* Breadcrumbs */}
            <div className="flex flex-col items-center justify-center sm:bg-gray-50 sm:w-[760px] sm:border sm:border-gray-400 sm:rounded-lg sm:px-6 sm:shadow-xl">
                <div className="w-full flex justify-between text-sm sm:text-base sm:pt-4">
                    <div> </div>
                    <div>
                        {project?.id === "reward-club" && (
                            <Link href="/projects/web-to-sms">
                                next project {">"}
                            </Link>
                        )}
                        {project?.id === "web-to-sms" && (
                            <Link href="/projects/sms-marketing">
                                next project {">"}
                            </Link>
                        )}
                    </div>
                </div>
                {/* Header */}
                <div className="my-12">
                    <h2 className="text-4xl font-semibold">{project?.title}</h2>
                </div>
                {/* Video */}
                <div className="w-full">
                    <iframe
                        className="rounded-lg w-full aspect-video"
                        src={project?.youtubeUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                {/* Footer */}
                <div className="py-6 w-full items:start">
                    <p>
                        <span className="font-semibold text-base sm:text-lg">
                            Description:{" "}
                        </span>
                        <span className="text-sm sm:text-lg">
                            {project?.desc}
                        </span>
                    </p>
                    <div className="text-sm sm:text-lg">
                        <p className="my-6">Highlights:</p>
                        <ul className="list-disc px-4">
                            {project?.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6 text-sm sm:text-lg">
                        <p className="my-4">Technologies:</p>
                        {/* Front end Technologies */}
                        <div className="mb-4 ml-4">
                            <label htmlFor="front-tech">Front End:</label>
                            <ul id="front-tech" className="list-disc px-4">
                                {project?.stack.front.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        {/* Back end Technologies */}
                        <div className="ml-4">
                            <label htmlFor="back-tech">Back End:</label>
                            <ul id="back-tech" className="list-disc px-4">
                                {project?.stack.back.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
