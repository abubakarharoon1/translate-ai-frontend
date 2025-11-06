export class ApiError extends Error {
  status: number;
  data?: unknown;
  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

export async function handleResponse(res: Response) {
  if (res.ok) return res.json().catch(() => ({}));
  let payload: any = null;
  try { payload = await res.json(); } catch {}
  throw new ApiError(payload?.message || res.statusText, res.status, payload);
}
