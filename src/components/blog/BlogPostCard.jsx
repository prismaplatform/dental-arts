// components/BlogPostCard.jsx
import { Link } from '@/i18n/navigation';
import { MessageCircle, User } from 'lucide-react'; // Import User and MessageCircle icons


const BlogPostCard = ({ post }) => {
  const { image, date, author, comments, title, category } = post;

  // Function to extract day and month from the date string
  const getDateParts = (dateString) => {
    // Assuming dateString format is "DD MMM YYYY", e.g., "01 Jan 2023"
    const parts = dateString.split(' ');
    return { day: parts[0], month: parts[1] };
  };

  const { day, month } = getDateParts(date);

  return (
    <div className="relative group">
      <div className="relative">
        <figure className="overflow-hidden mb-5 md:mb-8">
          {/* Consider using Next.js Image component here for optimization */}
          {/* <Image
            src={image}
            alt={title}
            width={600} // Set appropriate width
            height={400} // Set appropriate height
            className="group-hover:scale-[1.1] group-hover:rotate-[3deg] duration-500 w-full object-cover rounded-md"
          /> */}
          <img
            src={image}
            alt={title}
            className="group-hover:scale-[1.1] group-hover:rotate-[3deg] duration-500 w-full object-cover rounded-md"
          />
        </figure>
        <h6 className="text-secondary font-sora font-bold">
          <Link
            href={`/blog/${post.slug}`} // Dynamic link to individual blog post
            className="absolute xxl:text-[33px] text-lg leading-25 max-xxl:size-90 size-110 rounded-full text-center xl:p-32 p-5 md:p-6 text-bold right-2 md:right-5 top-2 md:top-5 shadow-[0px_7px_31px_-6px_rgba(0,0,0,0.15)] font-sora group-hover:bg-primary group-hover:text-white duration-500 text-secondary bg-white"
          >
            {day} <span className="text-2sm text-primary group-hover:text-white duration-500">{month}</span>
          </Link>
        </h6>
      </div>
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline">
          <Link
            href={`/blog/${post.slug}`}
            className="text-gray-600 inline-flex items-center gap-x-1 font-sora text-sm md:text-base hover:text-primary duration-500"
          >
            <User size={15} color="#646464" /> {/* Lucide User icon */}
            By {author}
          </Link>
        </div>
        <div className="inline">
          <Link
            href={`/blog/${post.slug}`}
            className="text-gray-600 inline-flex items-center gap-x-1 font-sora text-sm md:text-base hover:text-primary duration-500"
          >
            <MessageCircle size={15} color="#646464" /> {/* Lucide MessageCircle icon */}
            {comments.toString().padStart(2, '0')} Comment
          </Link>
        </div>
      </div>
      <h3 className="xxl:text-2xl xl:text-xxl text-xl leading-34 font-bold pb-5 pt-2 text-secondary font-sora hover:text-primary duration-500">
        <Link href={`/blog/${post.slug}`}>{title}</Link>
      </h3>
      <Link href={`/blog/${post.slug}`} className="btn two inline-flex items-center gap-x-2 text-primary hover:text-white duration-500">
        <span>Tovább olvasok </span>
      </Link>
    </div>
  );
};

export default BlogPostCard;