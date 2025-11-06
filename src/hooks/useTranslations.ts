'use client';
import { useMutation } from '@tanstack/react-query';
import { FilesService, type CountResult } from '@/services/files.service';

export function useWordCount() {
  return useMutation<CountResult, Error, File>({
    mutationFn: (file) => FilesService.countLocal(file),
  });
}
