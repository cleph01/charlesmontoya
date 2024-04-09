import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
    post: BlogPost;
};

const BlogItem = ({ post }: Props) => {
    const { id, title, date } = post;
    const formattedDate = getFormattedDate(date);

    return (
        <li className="mt-4 text-2xl sm:ml-4">
            <Link href={`/journal/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>
        </li>
    );
};

export default BlogItem;
