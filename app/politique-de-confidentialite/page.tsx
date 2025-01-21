import { Metadata } from 'next';
import PolitiqueConfidentialiteContent from '@/components/pages/PolitiqueConfidentialite';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Top Stockage',
  description: "Découvrez comment Top Stockage protège vos données personnelles. Informations sur la collecte, l'utilisation et la protection de vos données.",
  keywords: 'politique de confidentialité, protection des données, RGPD, cookies, Top Stockage',
  openGraph: {
    title: 'Politique de Confidentialité | Top Stockage',
    description: 'Découvrez comment Top Stockage protège vos données personnelles.',
    url: 'https://topstockage.fr/politique-de-confidentialite',
    siteName: 'Top Stockage',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function PolitiqueConfidentialitePage() {
  return <PolitiqueConfidentialiteContent />;
}
