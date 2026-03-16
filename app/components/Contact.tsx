'use client';

import { sendFormEmail } from '@/app/actions/email';
import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  console.log(status);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      event: formData.get('event'),
      amountGuests: formData.get('amountGuests'),
      message: formData.get('message') || '',
    };

    try {
      const result = await sendFormEmail(data);
      console.log('Result from server:', result);
      console.log('Type of result:', typeof result);
      console.log('result.success:', result?.success);
      if (result.success) {
        setMessage('Förfrågan skickad! Vi kontaktar dig snart.');
        setStatus('success');
        form.reset();
      } else {
        setMessage('Ett fel uppstod. Försök igen senare.');
        setStatus('error');
      }
    } catch (error) {
      setMessage('Ett fel uppstod. Försök igen senare.');
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="kontakt"
      className="bg-background max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-accent">
        Boka Din Catering
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <p className="mb-6 leading-relaxed text-foreground-secondary text-sm md:text-base">
            Kontakta oss idag för att diskutera din event. Vi svarar snabbt och
            hjälper dig planera en perfekt meny som passa era behov och budget.
          </p>
          <div className="space-y-4 text-accent text-sm md:text-base">
            <div>
              <p className="font-semibold mb-1">Telefon</p>
              <p>
                <a
                  href="tel:+08 30 42 70"
                  className="hover:text-accent-hover transition"
                >
                  08 30 42 70
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">E-post</p>
              <p>
                <a
                  href="mailto:info@gamorecatering.se"
                  className="hover:text-accent-hover transition"
                >
                  info@gamorecatering.se
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">Plats</p>
              <p>Stockholm, Sverige</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Öppettider</p>
              <p>Måndag - Stängt</p>
              <p>Tisdag - Torsdag: 13:00 - 20:00</p>
              <p>Fredag - Söndag: 13:00 - 21:00</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="border border-border-color rounded-lg p-4 md:p-8 bg-background-secondary"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block font-medium mb-2 text-accent text-sm md:text-base"
              >
                Namn
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded px-4 py-2 bg-background text-foreground border border-border-color focus:outline-none focus:border-accent text-sm"
                placeholder="Ditt namn"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-medium mb-2 text-accent text-sm md:text-base"
              >
                E-post
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded px-4 py-2 bg-background text-foreground border border-border-color focus:outline-none focus:border-accent text-sm"
                placeholder="din@email.se"
              />
            </div>
            <div>
              <label
                htmlFor="event"
                className="block font-medium mb-2 text-accent text-sm md:text-base"
              >
                Typ av Event
              </label>
              <select
                id="event"
                name="event"
                required
                className="w-full rounded px-4 py-2 bg-background text-foreground border border-border-color focus:outline-none focus:border-accent text-sm"
              >
                <option>Välj typ av event</option>
                <option>Företagsevenemang</option>
                <option>Bröllop</option>
                <option>Privat fest</option>
                <option>Konferens</option>
                <option>Annat</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="amountGuests"
                className="block font-medium mb-2 text-accent text-sm md:text-base"
              >
                Antal gäster
              </label>
              <input
                id="amountGuests"
                name="amountGuests"
                type="number"
                required
                className="w-full rounded px-4 py-2 bg-background text-foreground border border-border-color focus:outline-none focus:border-accent text-sm"
                placeholder="Cirka antal"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-medium mb-2 text-accent text-sm md:text-base"
              >
                Meddelande
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded px-4 py-2 bg-background text-foreground border border-border-color focus:outline-none focus:border-accent text-sm"
                placeholder="Berätta om din event..."
              />
            </div>
            {message && (
              <div
                className={`p-3 rounded text-sm text-center ${
                  status === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {message}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 md:py-3 rounded font-medium bg-accent text-background hover:bg-accent-hover transition text-sm md:text-base disabled:opacity-50"
            >
              {loading ? 'Skickar...' : 'Skicka Förfrågan'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
