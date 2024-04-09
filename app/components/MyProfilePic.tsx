import Image from "next/image";

const MyProfilePic = () => {
    return (
        <section className="w-full mx-auto">
            <Image
                className="border-2 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                src="/assets/images/hands.jpg"
                width={100}
                height={100}
                alt="Charles Montoya"
            />
        </section>
    );
};

export default MyProfilePic;
