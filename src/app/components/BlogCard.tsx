import Link from 'next/link';
import type { Blog } from '@/types/blog';

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={`/blogs/${blog.id}`}
      className="bg-white rounded-md shadow hover:shadow-lg overflow-hidden transition-shadow duration-200 flex flex-col"
    >
      {/* You can swap to next/image if you want optimization */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={blog.posterImage}
        alt={blog.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h2>
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
          {blog.description}
        </p>
        {/* If you add createdAt later, render it here */}
      </div>
    </Link>
  );
}
