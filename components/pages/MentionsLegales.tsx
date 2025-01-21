'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ClientLayout from '@/components/ClientLayout';

export default function MentionsLegalesContent() {
  return (
    <ClientLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: '1 0 auto' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Mentions Légales
          </Typography>

          <Typography variant="body1" gutterBottom>
            Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs du site <strong>topstockage.fr</strong> les présentes mentions légales.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Editeur du site
          </Typography>
          <Typography variant="body1" gutterBottom>
            Le site <strong>topstockage.fr</strong> est édité par : 
          </Typography>
          <List>
            <ListItem><strong>Nom ou Raison sociale : &nbsp;</strong><a href="https://www.digital-advantage.com" className="text-blue-600 underline">Digital-Advantage.com</a></ListItem>
            <ListItem><strong>Adresse : &nbsp;</strong>26 RUE DAGORNO 75 012 PARIS</ListItem>
            <ListItem><strong>Email : &nbsp;</strong> <a href="mailto:digital-advantage@outlook.com" className="text-blue-600 underline">digital-advantage@outlook.com</a></ListItem>
            <ListItem><strong>Téléphone : &nbsp;</strong>(+33) 6 72 06 45 19</ListItem>
            <ListItem><strong>Numéro SIRET : &nbsp;</strong>898 150 438 00023</ListItem>
            <ListItem><strong>Directeur de la publication : &nbsp;</strong>Arnaud</ListItem>
          </List>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Hébergement
          </Typography>
          <Typography variant="body1" gutterBottom>
            Le site <strong>topstockage.fr</strong> est hébergé par :
          </Typography>
          <List>
            <ListItem><strong>Nom de l’hébergeur : &nbsp;</strong>Alwaysdata</ListItem>
            <ListItem><strong>Adresse : &nbsp;</strong>91 Rue du Faubourg Saint-Honoré, 75008 Paris</ListItem>
            <ListItem><strong>Téléphone : &nbsp;</strong>(+33) 1 84 16 23 40</ListItem>
            <ListItem><strong>Site web : &nbsp;</strong> <a href="https://www.alwaysdata.com/fr/" className="text-blue-600 underline">Alwaysdata</a></ListItem>
          </List>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Propriété intellectuelle
          </Typography>
          <Typography variant="body1" gutterBottom>
            Tous les contenus présents sur le site <strong>topstockage.fr</strong>, incluant, de forme non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme, sont la propriété exclusive de Digital-Advantage.com, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Digital-Advantage.com. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Liens hypertextes
          </Typography>
          <Typography variant="body1" gutterBottom>
          Le site <strong>topstockage.fr</strong> peut contenir des liens hypertextes vers d'autres sites. Cependant, Digital-Advantage.com n'assume aucune responsabilité quant au contenu de ces sites externes qui restent sous la seule responsabilité de leurs propriétaires respectifs.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Responsabilité
          </Typography>
          <Typography variant="body1" gutterBottom>
            La responsabilité de Digital-Advantage.com ne peut être engagée pour les contenus publiés sur le site <strong>topstockage.fr</strong>, qu'ils soient produits par ses employés, partenaires ou autres, et notamment pour les contenus publiés par ses sous-traitants. En outre, Digital-Advantage.com ne peut être tenu responsable des contenus publiés par ses sous-traitants.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Données personnelles
          </Typography>
          <Typography variant="body1" gutterBottom>
            Les informations recueillies sur le site <strong>topstockage.fr</strong> sont utilisées exclusivement dans le cadre légal prévu en France pour le respect de la vie privée. Conformément à la loi "Informatique et Libertés", vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, vous pouvez contacter Digital-Advantage.com à l’adresse suivante : <a href="mailto:digital-advantage@outlook.com" className="text-blue-600 underline">digital-advantage@outlook.com</a>.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Cookies
          </Typography>
          <Typography variant="body1" gutterBottom>
            Le site <strong>topstockage.fr</strong> peut être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d’affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez. Les cookies sont utilisés principalement pour améliorer l'experience utilisateur enregistrant des informations relatives à votre visite.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Contact
          </Typography>
          <Typography variant="body1" gutterBottom>
            Pour toute question ou information concernant le site <strong>topstockage.fr</strong>, vous pouvez nous contacter par email à l’adresse suivante : <a href="mailto:digital-advantage@outlook.com" className="text-blue-600 underline">digital-advantage@outlook.com</a>..
          </Typography>
         
        </Container>
      </Box>
    </ClientLayout>
  );
}
