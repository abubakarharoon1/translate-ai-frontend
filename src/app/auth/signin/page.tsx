// src/app/auth/signup/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthService } from '@/services/auth.service';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
type Form = { firstName: string; lastName: string; email: string; phone: string; password: string };
type Field = keyof Form;
type Errors = Partial<Record<Field, string>>;

function pwScore(pw: string) {
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[a-z]/.test(pw)) s++;
  if (/\d/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return s;
}

// PURE validator: returns a message or undefined. No setState here.
function validateField(field: Field, value: string): string | undefined {
  if (field === 'firstName' || field === 'lastName') {
    if (!value.trim()) return 'Required';
  }
  if (field === 'email') {
    const v = value.trim();
    if (!v) return 'Email is required';
    if (!EMAIL_RE.test(v)) return 'Enter a valid email address';
  }
  if (field === 'password') {
    if (!value) return 'Password is required';
    if (pwScore(value) < 3) return 'Use at least 8 chars with letters & numbers';
  }
  return undefined;
}

export default function SignupPage() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState<Form>({ firstName: '', lastName: '', email: '', phone: '', password: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Update errors ONLY from events
  const onChange =
    (field: Field) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      setForm((f) => ({ ...f, [field]: v }));
      if (errors[field] !== undefined) {
        setErrors((prev) => ({ ...prev, [field]: validateField(field, v) }));
      }
    };

  const onBlur =
    (field: Field) =>
    (e: React.FocusEvent<HTMLInputElement>) => {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, e.target.value) }));
    };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validate all fields at submit time
    const next: Errors = {
      firstName: validateField('firstName', form.firstName),
      lastName: validateField('lastName', form.lastName),
      email: validateField('email', form.email),
      password: validateField('password', form.password),
      // phone is optional here; add if you want it required
    };
    setErrors(next);

    if (Object.values(next).some(Boolean)) return; // stop if any error

    try {
      setLoading(true);
      const payload = {
        username: `${form.firstName} ${form.lastName}`.trim().replace(/\s+/g, ' '),
        email: form.email.trim().toLowerCase(),
        password: form.password,
      };
      await AuthService.signup(payload);
      alert('Account created! Please verify your email, then log in.');
      router.replace('/auth/login');
    } catch (err: any) {
      alert(err?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  }

  const disabled =
    loading ||
    !form.firstName ||
    !form.lastName ||
    !form.email ||
    !form.password ||
    Object.values(errors).some(Boolean);

  return (
    <div className="min-h-screen bg-[#e9f0fa] flex flex-col items-center pt-20 px-4">
      <p className="mb-2 text-sm text-gray-700">
        Already have an account?{' '}
        <a href="/auth/login" className="underline text-blue-700 hover:text-blue-900">Log in</a>
      </p>

      <h1 className="text-4xl font-bold mb-1 text-[#0a1f4f]">Create Client Account</h1>

      <form onSubmit={onSubmit} noValidate className="w-full max-w-md mt-10 mb-10 space-y-5 bg-white p-8 rounded-md shadow">
        <div className="flex gap-4">
          <div className="w-1/2">
            <input
              id="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={onChange('firstName')}
              onBlur={onBlur('firstName')}
              className={`border px-3 py-2 rounded w-full ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
          </div>

          <div className="w-1/2">
            <input
              id="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={onChange('lastName')}
              onBlur={onBlur('lastName')}
              className={`border px-3 py-2 rounded w-full ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange('email')}
            onBlur={onBlur('email')}
            className={`border px-3 py-2 rounded w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <input
          id="phone"
          type="tel"
          placeholder="Phone number"
          value={form.phone}
          onChange={onChange('phone')}
          className="border px-3 py-2 rounded w-full border-gray-300"
        />

        <div className="relative">
          <input
            id="password"
            type={show ? 'text' : 'password'}
            placeholder="Password"
            value={form.password}
            onChange={onChange('password')}
            onBlur={onBlur('password')}
            className={`border px-3 py-2 rounded w-full pr-10 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-2 text-gray-500">
            {show ? 'Hide' : 'Show'}
          </button>

          <p className="mt-1 text-xs text-gray-500">Use at least 8 characters, mixing letters and numbers.</p>
          {form.password && (
            <div className="mt-1 h-1 w-full bg-gray-200 rounded">
              <div className="h-1 rounded bg-green-500 transition-all" style={{ width: `${(pwScore(form.password) / 5) * 100}%` }} />
            </div>
          )}
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
        </div>

        <button type="submit" disabled={disabled} className="w-full bg-[#0a1f4f] text-white py-2 rounded font-semibold disabled:opacity-60">
          {loading ? 'Creating…' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
