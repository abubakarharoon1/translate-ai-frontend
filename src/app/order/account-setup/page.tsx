// src/app/order/account-setup/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Stepper } from '../components/Stepper';
import { useOrderFlow } from '@/hooks/useOrderFlow';
import { AuthService } from '@/services/auth.service';
import { decodeToken, setToken } from '@/lib/auth/token';
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

// ----- small helpers for signup password strength -----
function pwScore(pw: string) {
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[a-z]/.test(pw)) s++;
  if (/\d/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return s;
}


export default function AccountSetupPage() {
  const { setStep } = useOrderFlow();
  const router = useRouter();
  const { loggedIn } = useIsLoggedIn();
  useEffect(() => setStep(3), [setStep]);
  // ---------- LOGIN STATE ----------
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginErrors, setLoginErrors] = useState<{ email?: string; password?: string }>({});
  const [loginShowPw, setLoginShowPw] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  useEffect(() => {
    if (loggedIn) {
      router.replace('/'); // or '/client/orders' if you have it
    }
  }, [loggedIn, router]);
  // ---------- SIGNUP STATE ----------
  type SignupFormState = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
  };

  const [signupForm, setSignupForm] = useState<SignupFormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });
  const [signupErrors, setSignupErrors] = useState<Partial<SignupFormState>>({});
  const [signupShowPw, setSignupShowPw] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);

  // ---------------------- LOGIN LOGIC ----------------------
  function validateLoginField(field: 'email' | 'password', value: string) {
    let msg = '';
    if (field === 'email') {
      const v = value.trim();
      if (!v) msg = 'Email is required';
      else if (!EMAIL_RE.test(v)) msg = 'Enter a valid email address';
    } else if (field === 'password') {
      if (!value) msg = 'Password is required';
    }
    setLoginErrors((e) => ({ ...e, [field]: msg || undefined }));
    return !msg;
  }

  const isLoginValid = () =>
    validateLoginField('email', loginForm.email) &&
    validateLoginField('password', loginForm.password);

  async function onLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isLoginValid()) return;

    try {
      setLoginLoading(true);
      const payloadToSend = {
        email: loginForm.email.trim().toLowerCase(),
        password: loginForm.password,
      };

      const { token } = await AuthService.login(payloadToSend);
      setToken(token);

      const payload = decodeToken<{ userId: number; role?: string }>(token);

      // after login from account setup: send them to their dashboard / home
      if (payload?.role === 'superadmin') {
        router.replace('/admin');
      } else {
        router.replace('/'); // or '/client/orders' if you have that page
      }
    } catch (err: any) {
      alert(err?.message || 'Login failed');
    } finally {
      setLoginLoading(false);
    }
  }

  // ---------------------- SIGNUP LOGIC ----------------------
  function validateSignupField(field: keyof SignupFormState, value: string): string | undefined {
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
    // phone optional here
    return undefined;
  }

  async function onSignupSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const next: Partial<SignupFormState> = {
      firstName: validateSignupField('firstName', signupForm.firstName),
      lastName: validateSignupField('lastName', signupForm.lastName),
      email: validateSignupField('email', signupForm.email),
      password: validateSignupField('password', signupForm.password),
    };
    setSignupErrors(next);

    if (Object.values(next).some(Boolean)) return;

    try {
      setSignupLoading(true);
      const payload = {
        username: `${signupForm.firstName} ${signupForm.lastName}`
          .trim()
          .replace(/\s+/g, ' '),
        email: signupForm.email.trim().toLowerCase(),
        password: signupForm.password,
      };

      await AuthService.signup(payload);

      alert('Account created! Please verify your email, then log in.');

      // after signup on account page, you can either:
      // - keep them here so they can use the login form
      // - or redirect to /auth/login
      // router.replace('/auth/login');
    } catch (err: any) {
      alert(err?.message || 'Signup failed');
    } finally {
      setSignupLoading(false);
    }
  }

  const signupDisabled =
    signupLoading ||
    !signupForm.firstName ||
    !signupForm.lastName ||
    !signupForm.email ||
    !signupForm.password ||
    Object.values(signupErrors).some(Boolean);

  return (
    <main className="min-h-screen bg-slate-50">
      <Stepper current={4} />
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow p-6 max-w-5xl mx-auto">
          <h1 className="text-xl font-semibold mb-3">Account setup</h1>
          <p className="text-slate-600 mb-6">
            Create or log in to your account to manage orders, track progress, and receive your
            translated files.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* -------- LEFT: LOGIN -------- */}
            <section>
              <h2 className="font-semibold mb-2 text-[#0a1f4f]">Log in</h2>
              <p className="text-sm text-slate-600 mb-4">
                If you already have an account, log in with your email and password.
              </p>

              <form onSubmit={onLoginSubmit} noValidate className="space-y-4">
                <div>
                  <label className="block mb-1 text-gray-600 text-sm font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => {
                      setLoginForm((f) => ({ ...f, email: e.target.value }));
                      if (loginErrors.email) validateLoginField('email', e.target.value);
                    }}
                    onBlur={(e) => validateLoginField('email', e.target.value)}
                    placeholder="Your email"
                    className={`border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 ${
                      loginErrors.email
                        ? 'border-red-500 focus:ring-red-300'
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    required
                  />
                  {loginErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{loginErrors.email}</p>
                  )}
                </div>

                <div className="relative">
                  <label className="block mb-1 text-gray-600 text-sm font-semibold">
                    Password
                  </label>
                  <input
                    type={loginShowPw ? 'text' : 'password'}
                    value={loginForm.password}
                    onChange={(e) => {
                      setLoginForm((f) => ({ ...f, password: e.target.value }));
                      if (loginErrors.password)
                        validateLoginField('password', e.target.value);
                    }}
                    onBlur={(e) => validateLoginField('password', e.target.value)}
                    placeholder="Your password"
                    className={`border rounded-md px-3 py-2 pr-12 w-full focus:outline-none focus:ring-2 ${
                      loginErrors.password
                        ? 'border-red-500 focus:ring-red-300'
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-8 text-gray-500 text-sm"
                    onClick={() => setLoginShowPw((s) => !s)}
                  >
                    {loginShowPw ? 'Hide' : 'Show'}
                  </button>
                  {loginErrors.password && (
                    <p className="mt-1 text-sm text-red-600">{loginErrors.password}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={
                    loginLoading ||
                    !!loginErrors.email ||
                    !!loginErrors.password ||
                    !loginForm.email ||
                    !loginForm.password
                  }
                  className="w-full bg-[#0a1f4f] text-white py-2 rounded-md font-semibold hover:bg-[#172b70] transition disabled:opacity-60"
                >
                  {loginLoading ? 'Logging in…' : 'Log In'}
                </button>

                <div className="text-right">
                  <a
                    href="/auth/forgot-password"
                    className="text-sm text-blue-700 hover:text-blue-900 underline"
                  >
                    Forgot password?
                  </a>
                </div>
              </form>
            </section>

            {/* -------- RIGHT: SIGNUP -------- */}
            <section>
              <h2 className="font-semibold mb-2 text-[#0a1f4f]">Create a new account</h2>
              <p className="text-sm text-slate-600 mb-4">
                New here? Create a client account to keep all your translation orders in one place.
              </p>

              <form onSubmit={onSignupSubmit} noValidate className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <input
                      placeholder="First Name"
                      value={signupForm.firstName}
                      onChange={(e) => {
                        const v = e.target.value;
                        setSignupForm((f) => ({ ...f, firstName: v }));
                        if (signupErrors.firstName !== undefined) {
                          setSignupErrors((prev) => ({
                            ...prev,
                            firstName: validateSignupField('firstName', v),
                          }));
                        }
                      }}
                      onBlur={(e) =>
                        setSignupErrors((prev) => ({
                          ...prev,
                          firstName: validateSignupField('firstName', e.target.value),
                        }))
                      }
                      className={`border px-3 py-2 rounded w-full ${
                        signupErrors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {signupErrors.firstName && (
                      <p className="mt-1 text-sm text-red-600">
                        {signupErrors.firstName}
                      </p>
                    )}
                  </div>

                  <div className="w-1/2">
                    <input
                      placeholder="Last Name"
                      value={signupForm.lastName}
                      onChange={(e) => {
                        const v = e.target.value;
                        setSignupForm((f) => ({ ...f, lastName: v }));
                        if (signupErrors.lastName !== undefined) {
                          setSignupErrors((prev) => ({
                            ...prev,
                            lastName: validateSignupField('lastName', v),
                          }));
                        }
                      }}
                      onBlur={(e) =>
                        setSignupErrors((prev) => ({
                          ...prev,
                          lastName: validateSignupField('lastName', e.target.value),
                        }))
                      }
                      className={`border px-3 py-2 rounded w-full ${
                        signupErrors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {signupErrors.lastName && (
                      <p className="mt-1 text-sm text-red-600">
                        {signupErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={signupForm.email}
                    onChange={(e) => {
                      const v = e.target.value;
                      setSignupForm((f) => ({ ...f, email: v }));
                      if (signupErrors.email !== undefined) {
                        setSignupErrors((prev) => ({
                          ...prev,
                          email: validateSignupField('email', v),
                        }));
                      }
                    }}
                    onBlur={(e) =>
                      setSignupErrors((prev) => ({
                        ...prev,
                        email: validateSignupField('email', e.target.value),
                      }))
                    }
                    className={`border px-3 py-2 rounded w-full ${
                      signupErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {signupErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{signupErrors.email}</p>
                  )}
                </div>

                <input
                  type="tel"
                  placeholder="Phone number (optional)"
                  value={signupForm.phone}
                  onChange={(e) =>
                    setSignupForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  className="border px-3 py-2 rounded w-full border-gray-300"
                />

                <div className="relative">
                  <input
                    type={signupShowPw ? 'text' : 'password'}
                    placeholder="Password"
                    value={signupForm.password}
                    onChange={(e) => {
                      const v = e.target.value;
                      setSignupForm((f) => ({ ...f, password: v }));
                      if (signupErrors.password !== undefined) {
                        setSignupErrors((prev) => ({
                          ...prev,
                          password: validateSignupField('password', v),
                        }));
                      }
                    }}
                    onBlur={(e) =>
                      setSignupErrors((prev) => ({
                        ...prev,
                        password: validateSignupField('password', e.target.value),
                      }))
                    }
                    className={`border px-3 py-2 rounded w-full pr-10 ${
                      signupErrors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setSignupShowPw((s) => !s)}
                    className="absolute right-3 top-2 text-gray-500 text-sm"
                  >
                    {signupShowPw ? 'Hide' : 'Show'}
                  </button>

                  <p className="mt-1 text-xs text-gray-500">
                    Use at least 8 characters, mixing letters and numbers.
                  </p>
                  {signupForm.password && (
                    <div className="mt-1 h-1 w-full bg-gray-200 rounded">
                      <div
                        className="h-1 rounded bg-green-500 transition-all"
                        style={{ width: `${(pwScore(signupForm.password) / 5) * 100}%` }}
                      />
                    </div>
                  )}
                  {signupErrors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {signupErrors.password}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={signupDisabled}
                  className="w-full bg-[#0a1f4f] text-white py-2 rounded font-semibold disabled:opacity-60"
                >
                  {signupLoading ? 'Creating…' : 'Sign Up'}
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
