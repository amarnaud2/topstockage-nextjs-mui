'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ClientLayout from '@/components/ClientLayout';

export default function PolitiqueConfidentialiteContent() {
  return (
    <ClientLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: '1 0 auto' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Politique de Confidentialité
          </Typography>
          
          <Typography variant="body1" gutterBottom>
            La protection de vos données personnelles est une priorité pour <strong>Top Stockage</strong>. Cette politique de confidentialité explique quelles données nous collectons, comment nous les utilisons et quels sont vos droits en matière de confidentialité.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Responsable du traitement des données
          </Typography>
          <Typography variant="body1" gutterBottom>
            Le site <strong>topstockage.fr</strong> est édité par :
          </Typography>
          <List>
            <ListItem><strong>Nom ou Raison sociale : &nbsp;</strong>Digital-Advantage.com</ListItem>
            <ListItem><strong>Adresse : &nbsp;</strong>26 RUE DAGORNO 75012 PARIS</ListItem>
            <ListItem><strong>Email : &nbsp;</strong><a href="mailto:digital-advantage@outlook.com" className="text-blue-600 underline">digital-advantage@outlook.com</a></ListItem>
          </List>
          <Typography variant="body1" ></Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Liens d'affiliation Amazon
          </Typography>
          <Typography variant="body1" gutterBottom>
            Certains liens présents sur le site <strong>topstockage.fr</strong> sont des liens affiliés vers le programme <strong>Amazon Affiliates</strong>. Cela signifie que lorsque vous cliquez sur ces liens et effectuez un achat sur Amazon, <strong>Top Stockage</strong> peut recevoir une commission sur la vente, sans aucun coût supplémentaire pour vous.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Ces liens permettent de soutenir le fonctionnement du site et de financer les contenus proposés. Les informations de navigation sur ces liens sont transmises à Amazon pour assurer le suivi des commissions et des performances des affiliés.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Pour en savoir plus sur la manière dont Amazon collecte et utilise vos données, veuillez consulter la <a href="https://www.amazon.fr/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">politique de confidentialité d’Amazon</a>.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Données collectées
          </Typography>
          <Typography variant="body1" gutterBottom>
            Nous collectons les données suivantes dans le cadre de l’utilisation de notre site :
          </Typography>
          <List>
            <ListItem><strong>Données de navigation : &nbsp;</strong> Adresse IP, type de navigateur, pages visitées et durée des sessions. Ces données sont collectées via Google Analytics.</ListItem>
            <ListItem><strong>Données de la newsletter : &nbsp;</strong> Adresse e-mail lors de votre inscription volontaire.</ListItem>
            <ListItem><strong>Données liées aux liens d’affiliation : &nbsp;</strong> Lorsque vous cliquez sur un lien Amazon Affiliates, des informations sur votre navigation sont partagées avec Amazon pour le suivi des ventes.</ListItem>
          </List>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Les données collectées sont utilisées pour les finalités suivantes :
          </Typography>
          <List>
            <ListItem>Améliorer l’expérience utilisateur sur notre site grâce à l’analyse des comportements via Google Analytics.</ListItem>
            <ListItem>Envoyer des newsletters contenant des conseils, des articles, ou des offres spéciales.</ListItem>
            <ListItem>Suivre l’efficacité des liens d’affiliation et calculer les commissions générées par Amazon Affiliates.</ListItem>
          </List>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Base légale du traitement
          </Typography>
          <List>
            <ListItem><strong>Consentement :</strong> Pour l’inscription à la newsletter et l’analyse des données via Google Analytics.</ListItem>
            <ListItem><strong>Intérêt légitime : &nbsp;</strong> Pour l’utilisation des liens d’affiliation Amazon.</ListItem>
          </List>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Durée de conservation des données
          </Typography>
          <List>
            <ListItem><strong>Données de navigation : &nbsp;</strong> Jusqu’a 14 mois (durée configurée dans Google Analytics).</ListItem>
            <ListItem><strong>Données de la newsletter : &nbsp;</strong> Jusqu’a ce que vous décidiez de vous désabonner.</ListItem>
          </List>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Partage des données
          </Typography>
          <Typography variant="body1" gutterBottom>
            Vos données peuvent être partagées avec les tiers suivants :
          </Typography>
          <List>
            <ListItem><strong>Google Analytics : &nbsp;</strong> Pour analyser les données de navigatLin.</ListItem>
            <ListItem><strong>Amazon Affiliates : &nbsp;</strong> Pour suivre les achats effectués via les liens affiliés.</ListItem>
          </List>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Vos droits
          </Typography>
          <Typography variant="body1" gutterBottom>
            Conformément au RGPD, vous disposez des droits suivants : 
          </Typography>
          <List>
            <ListItem><strong>Droit d'accès : &nbsp;</strong> Vous pouvez demander une copie des données personnelles que nous détenons à votre suLit.</ListItem>
            <ListItem><strong>Droit de rectification : &nbsp;</strong> Vous pouvez corriger les données inexactes ou incomplètes.</ListItem>
            <ListItem><strong>Droit à l'effacement : &nbsp;</strong> Vous pouvez demander la suppression de vos données personnelles.</ListItem>
            <ListItem><strong>Droit à la limitation du traitement : &nbsp;</strong> Vous pouvez demander à limiter l’utilisation de vos données.</ListItem>
            <ListItem><strong>Droit d'opposition : &nbsp;</strong> Vous pouvez vous opposer au traitement de vos données personnelles.</ListItem>
          </List>

          <Typography variant="body1" gutterBottom>
            Pour exercer vos droits, contactez-nous à <a href="mailto:digital-advantage@outlook.com" className="text-blue-600 underline">contact@topstockage.fr</a>.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Cookies
          </Typography>
          <Typography variant="body1" gutterBottom>
            Le site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences via les paramètres de votre navigateur.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Modifications
          </Typography>
          <Typography variant="body1" gutterBottom>
            Cette politique de confidentialité peut être mise à jour à tout moment. La date de la dernière mise à jour est indiquée ci-dessous.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Dernière mise à jour : Lundi 20 janvier 2025
          </Typography>
        </Container>
      </Box>
    </ClientLayout>
  );
}
