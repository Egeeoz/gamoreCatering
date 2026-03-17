import { areas } from '@/app/data/areas';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return areas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `${area.name} - Amore Catering`,
    description: area.meta,
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-20 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
          Catering i {area.name}
        </h1>
        <p className="text-lg text-foreground/80 mb-12">{area.description}</p>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-accent">
            Vad erbjuder vi i {area.name}?
          </h2>
          <p className="text-foreground/80">
            Vi levererar samma högkvalitativa hemlagad mat till {area.name} som
            till resten av Stockholm.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-accent">Priser</h2>
          <p className="text-foreground/80">
            Från 345 SEK/person för buffé, från 395 SEK/person för klassisk
            meny.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-accent">
            Boka din catering
          </h2>
          <p className="text-foreground/80">
            Kontakta oss på{' '}
            <a href="tel:08304270" className="text-accent hover:underline">
              08 30 42 70
            </a>{' '}
            eller{' '}
            <a
              href="mailto:info@gamorecatering.se"
              className="text-accent hover:underline"
            >
              info@gamorecatering.se
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
