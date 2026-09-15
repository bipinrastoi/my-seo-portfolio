'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-black">Get in Touch</h1>
      <p className="mt-2 mb-8 text-gray-600">
        Have a project in mind? Fill out the form below.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <div>
          <label className="block text-sm font-bold mb-1">Name</label>
          <input
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:outline-indigo-600"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:outline-indigo-600"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:outline-indigo-600"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-extrabold text-white hover:bg-indigo-700 disabled:opacity-50 transition-all"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-sm font-medium text-green-600">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-sm font-medium text-red-600">Failed to send message. Please try again.</p>
        )}
      </form>
    </main>
  );
}