import JSZip from 'jszip';
import { http } from '@/lib/https';
import { endpoints } from '@/config/endpoints';

export type CountResult = { words: number; chars: number };

const WORD_RE = /[A-Za-zÀ-ÖØ-öø-ÿ0-9]+(?:'[A-Za-z0-9]+)?/g;

function countText(text: string): CountResult {
  const words = (text.match(WORD_RE) || []).length;
  const chars = text.replace(/\s+/g, '').length;
  return { words, chars };
}

async function countTxt(file: File): Promise<CountResult> {
  const text = await file.text();
  return countText(text);
}

async function countDocx(file: File): Promise<CountResult> {
  const buf = await file.arrayBuffer();
  const zip = await JSZip.loadAsync(buf);
  const docXml = await zip.file('word/document.xml')?.async('string');
  if (!docXml) return { words: 0, chars: 0 };

  const text = docXml
    .replace(/<w:.*?>/g, '')
    .replace(/<.*?>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
  return countText(text);
}

export const FilesService = {
  async countLocal(file: File): Promise<CountResult> {
    const ext = file.name.toLowerCase().split('.').pop() || '';
    if (ext === 'txt') return countTxt(file);
    if (ext === 'docx') return countDocx(file);

    try {
      const text = await file.text();
      return countText(text);
    } catch {
      return { words: 0, chars: 0 };
    }
  },

  async upload(orderId: string, file: File): Promise<{ ok: true; url?: string }> {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('orderId', orderId);
    return http.post('/files/upload', fd); // adjust when you implement this endpoint
  },

  async countOnServer(file: File): Promise<CountResult> {
    const fd = new FormData();
    fd.append('file', file);
    return http.post(endpoints.translations.estimate, fd);
  },
};
