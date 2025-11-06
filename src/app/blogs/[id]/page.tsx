import { BlogService } from '@/services/blog.service';
import RichText from '@/app/components/blog/RichText';

type Props = { params: Promise<{ id: string }> }; // for newest Next (await params)

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const blog = await BlogService.byId(id);

  return (
    <section className="min-h-screen bg-gray-50 py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1100px] px-4">
        {/* Title block */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{blog.title}</h1>
          {/* Optional: author/date line */}
          {/* <p className="text-gray-600 mt-2">By ... | {new Date(blog.createdAt!).toLocaleDateString()}</p> */}
        </header>

        {/* Cover image */}
        {blog.posterImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={blog.posterImage}
            alt={blog.title}
            className="w-full h-auto rounded-xl shadow mb-10"
            loading="eager"
          />
        )}

        {/* DESCRIPTION: this is RICH HTML from your CMS/back end */}
        <RichText html={blog.description} className="mx-auto" />

        {/* If you ALSO have a separate long body (richText), render it too: */}
        {/* {blog.richText ? <RichText html={blog.richText} className="mt-10" /> : null} */}
      </div>
    </section>
  );
}
