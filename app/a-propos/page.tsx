import { Metadata } from 'next';
import AProposContent from '@/components/pages/APropos';

export const metadata: Metadata = {
  title: 'À Propos | Top Stockage',
  description: "Découvrez Top Stockage, votre guide expert en solutions de stockage numérique. Notre mission, notre expertise et nos valeurs.",
  keywords: 'à propos, Top Stockage, expertise stockage, guide stockage numérique, solutions stockage',
  openGraph: {
    title: 'À Propos | Top Stockage',
    description: 'Votre guide expert en solutions de stockage numérique.',
    url: 'https://topstockage.fr/a-propos',
    siteName: 'Top Stockage',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function AProposPage() {
  return <AProposContent />;
}
