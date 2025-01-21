import { Metadata } from 'next';
import MentionsLegalesContent from '@/components/pages/MentionsLegales';

export const metadata: Metadata = {
  title: 'Mentions Légales | Top Stockage',
  description: "Mentions légales de Top Stockage. Informations sur l'éditeur du site, l'hébergement et les conditions d'utilisation.",
  keywords: 'mentions légales, conditions d\'utilisation, droits d\'auteur, propriété intellectuelle, Top Stockage',
  openGraph: {
    title: 'Mentions Légales | Top Stockage',
    description: 'Mentions légales et informations juridiques de Top Stockage.',
    url: 'https://topstockage.fr/mentions-legales',
    siteName: 'Top Stockage',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesContent />;
}
