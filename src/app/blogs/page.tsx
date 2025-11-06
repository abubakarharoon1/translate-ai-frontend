import Link from 'next/link';
import { BlogService } from '@/services/blog.service';
import type { Blog } from '@/types/blog';

// Always fetch fresh (tweak to your caching needs)
export const dynamic = 'force-dynamic';

function stripHtmlToText(html: string, max = 220) {
  const text = html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > max ? text.slice(0, max).trimEnd() + '…' : text;
}

function formatDate(d?: string) {
  if (!d) return '';
  return new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

/** Horizontal card for "Featured" */
function FeaturedCard({ item }: { item: Blog }) {
  return (
    <Link
      href={`/blogs/${item.id}`}
      className="group grid grid-cols-[180px,1fr] md:grid-cols-[220px,1fr] gap-4 items-start"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.posterImage}
        alt={item.title}
        className="w-[180px] h-[120px] md:w-[220px] md:h-[140px] object-cover rounded-lg shadow-sm group-hover:shadow transition"
      />
      <div>
        <h3 className="text-lg md:text-xl font-extrabold leading-snug group-hover:underline">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          {stripHtmlToText(item.description, 180)}
        </p>
        <span className="mt-2 inline-block text-sm text-blue-600 group-hover:underline">
          Read the news
        </span>
      </div>
    </Link>
  );
}

/** Stacked row for "Latest" */
function LatestRow({ item }: { item: Blog }) {
  return (
    <div className="grid grid-cols-[minmax(120px,140px),1fr] gap-6">
      <div className="text-xs text-gray-500 uppercase tracking-wide pt-1">
        {formatDate(item.createdAt)}
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-extrabold leading-snug mb-1">
          <Link href={`/blogs/${item.id}`} className="hover:underline">
            {item.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          {stripHtmlToText(item.description, 220)}
        </p>
        <Link href={`/blogs/${item.id}`} className="mt-2 inline-block text-blue-600 hover:underline text-sm">
          Read the news
        </Link>
      </div>
    </div>
  );
}

export default async function BlogsHomePage() {
  // 1) Fetch all blogs (works now)
  const all = await BlogService.list();

  // 2) Sort by featured + date (if createdAt present)
  const sorted = [...all].sort((a, b) => {
    const fa = (a as any).featured ? 1 : 0;
    const fb = (b as any).featured ? 1 : 0;
    if (fb !== fa) return fb - fa; // featured first
    const da = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const db = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return db - da; // newest first
  });

  // 3) Choose featured + latest
  const featured = sorted.filter((b: any) => b.featured).slice(0, 3);
  const fallbackFeatured = featured.length ? featured : sorted.slice(0, 3);
  const latest = sorted.filter((b) => !fallbackFeatured.find((f) => f.id === b.id));

  // If you add a dedicated endpoint later, replace the above with:
  // const featured = await BlogService.listFeatured(); // your new endpoint
  // const latest = (await BlogService.list()).filter(b => !featured.some(f => f.id === b.id));

  return (
    <main className="py-10 md:py-12">
      {/* Featured */}
      <section className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Featured News</h2>
        <div className="space-y-8">
          {fallbackFeatured.map((it) => <FeaturedCard key={it.id} item={it} />)}
        </div>
      </section>

      {/* Latest */}
      <section className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold mt-12 mb-6">Latest news</h2>
        <div className="space-y-8">
          {latest.map((it) => <LatestRow key={it.id} item={it} />)}
        </div>
      </section>
    </main>
  );
}
