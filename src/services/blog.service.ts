import { apiFetch } from '@/lib/https/fetch-client';
import { endpoints } from '@/config/endpoints';
import type { Blog } from '@/types/blog';

export const BlogService = {
  list() { return apiFetch<Blog[]>(endpoints.blogs.list); },
  byId(id: number | string) { return apiFetch<Blog>(endpoints.blogs.byId(id)); },
};
