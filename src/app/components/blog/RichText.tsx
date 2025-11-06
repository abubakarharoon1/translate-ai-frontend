'use client';

import DOMPurify from 'isomorphic-dompurify';

type Props = {
  html: string;
  className?: string;
  /**
   * If your CMS can embed iframes/videos and you want to allow them,
   * set allowUnsafe=false (default) to true and we’ll enable a broader profile.
   */
  allowUnsafe?: boolean;
};

export default function RichText({ html, className = '', allowUnsafe = false }: Props) {
  const clean = DOMPurify.sanitize(html, {
    // Default safe profile (no scripts). Flip to {USE_PROFILES: {html: true}} for more.
    ...(allowUnsafe ? {} : { USE_PROFILES: { html: true } }),
    ALLOWED_ATTR: [
      'href', 'target', 'rel',
      'src', 'alt', 'width', 'height',
      'style', 'class', 'title', 'loading'
    ],
    // if you want to whitelist iframes from trusted sources:
    ADD_TAGS: allowUnsafe ? ['iframe'] : [],
    ADD_ATTR: allowUnsafe ? ['allow', 'allowfullscreen', 'frameborder'] : [],
  });

  return (
    <article
      className={`prose prose-lg max-w-none prose-headings:font-extrabold prose-img:rounded-xl prose-img:w-full prose-a:text-blue-600 hover:prose-a:underline ${className}`}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
