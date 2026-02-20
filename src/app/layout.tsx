import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://intrepide.ai'),
  title: 'Intrepide — AI Consulting & Development | Build Intelligent Software',
  description:
    'AI consulting and software development that ships real products. Custom AI solutions, agent workflows, and intelligent systems for healthcare, real estate, construction, and SaaS.',
  keywords: [
    'AI consulting',
    'AI development',
    'software consulting',
    'AI agents',
    'custom AI solutions',
    'AI strategy',
    'machine learning consulting',
    'AI engineering',
    'healthcare AI',
    'SaaS development',
    'intelligent automation',
  ],
  openGraph: {
    title: 'Intrepide — AI Consulting & Development',
    description:
      'Software + AI consulting that ships real products. Strategy, engineering, and deployment for visionary organizations.',
    url: 'https://intrepide.ai',
    siteName: 'Intrepide',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Intrepide — AI That Amplifies Human Ingenuity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intrepide — AI Consulting & Development',
    description:
      'AI consulting and software development that ships real products. Custom AI solutions for healthcare, real estate, construction, and SaaS.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://intrepide.ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Intrepide',
  url: 'https://intrepide.ai',
  logo: 'https://intrepide.ai/logo.png',
  description:
    'AI consulting and software development company. Custom AI solutions, agent workflows, and intelligent systems for healthcare, real estate, construction, and SaaS.',
  email: 'clyde@intrepide.ai',
  sameAs: ['https://linkedin.com/company/intrepide'],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Software Engineering',
    'AI Consulting',
    'AI Agents',
    'Healthcare Technology',
    'SaaS Development',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
