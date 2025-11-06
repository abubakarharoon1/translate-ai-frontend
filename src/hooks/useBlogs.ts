'use client';
import { useQuery } from '@tanstack/react-query';
import { BlogService } from '@/services/blog.service';
import type { Blog } from '@/types/blog';

export function useBlogs() {
  return useQuery<Blog[]>({
    queryKey: ['blogs'],
    queryFn: () => BlogService.list(),
  });
}

export function useBlog(id?: number | string) {
  return useQuery<Blog>({
    queryKey: ['blog', id],
    queryFn: () => BlogService.byId(id!),
    enabled: !!id,
  });
}
