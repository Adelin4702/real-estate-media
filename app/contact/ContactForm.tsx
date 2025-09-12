'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Mesajul a fost trimis cu succes!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                const error = await response.json();
                setStatus(`Eroare: ${error.message || 'Ceva nu a funcționat. Încearcă din nou.'}`);
            }
        } catch (error) {
            setStatus('Eroare: Nu s-a putut trimite mesajul. Încearcă din nou.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-lg px-4 sm:px-6 py-8 sm:py-10">
            <form className="space-y-6 bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg" onSubmit={handleSubmit}>
                <p className="text-center text-xl pb-2">Lasa-ne un mesaj</p>

                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="name">
                        Nume
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                        placeholder="Numele tău"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                        placeholder="exemplu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="message">
                        Mesaj
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                        placeholder="Scrie-ne un mesaj..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-2.5 rounded-lg font-medium text-sm sm:text-base hover:bg-teal-700 transition-colors duration-300 disabled:bg-teal-400"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Se trimite...' : 'Trimite Mesajul'}
                </button>

                {status && (
                    <p className={`text-sm text-center ${status.includes('Eroare') ? 'text-red-600' : 'text-green-600'}`}>
                        {status}
                    </p>
                )}
            </form>
        </div>
    );
}