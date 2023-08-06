# ft_transcendence
Ce project consiste à créer un site web pour participer à une compétition du célèbre jeu Pong

## Prérequis
  Node Package Manager
  
    brew install npm
ou

    brew install node
  
  NestJS CLI (framework backend)
  
    npm install -g @nestjs/cli

  Angular CLI (framework frontend)
  
    npm install -g @angular/cli

### Créer un nouveau projet Angular
  
    ng new <my-angular-app>
    cd <my-angular-app>
    ng serve

Une fois fait, on peut accéder à notre page via localhost:4200

## Librairies Javascript
### Comment installer une librairie?

    cd <my-angular-app>
    npm install <library-name>
    
### Bootstrap
  Bootstrap fournit une collection de fiche CSS pré-écrites et des composants graphiques adaptables plus digeste pour les développeurs.

      npm install bootstrap
  Pour ajouter les styles CSS et les règles implémenter par Bootstrap, il suffit d'aller dans le fichier **angular.json** dans la section "styles":
  
      "styles": [
        "src/styles.css",
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
        ],
# HTML
## Règles de synthaxe
Une ouverture de section se présente sous la forme de:

    <balise> //Ouverture de la section
    Contenu de la section
    </balise> // Fermeture de la section

Certains tags n'ont pas besoin d'un tag de fermeture:

    <balise>
Un fichier HTML débute toujours par:

    <!DOCTYPE html>  <!-- Declaration du type de document -->
    <html lang="fr"> <!-- le tag d'ouverture du document avec precision de la langue ("en" si anglais par exemple)-->
et se termine avec

    </html>
## head
La section head contient toutes les meta-informations du document (donc des informations à propos du document lui-même et non du contenu affiché à l'utilisateur).
Elle se déclare comme ceci:

    <head>
    <!-- meta-données -->
    </head> <!-- Fermeture de la section -->
Et contiendra le titre/l'icône du document affiché sur l'onglet, le codage de caractères, les paramètres d'affichage, description et mot-clés (pour les moteurs de recherche), informations sur l'auteur/copyright ainsi que toutes les ressources externes: C'est ici que l'on va répertorier nos fiches CSS et les fichiers JS.
### metatags
    <meta>
    <meta name="-name-" content="-content-">

Le tag meta ne nécessite pas de tag de fermeture. Il fournit les meta-données du document. Sa variable name n'est pas arbitraire, à voir les valeurs ci-dessous:

Attribut ne nécessitant pas de synthaxe spéciale dans content:

    <meta name="description" content="This is a sample web page about XYZ."> Description du document
    <meta name="author" content="Prenom nom"> Auteur et Copyright
    <meta name="keywords" content="web development, HTML, CSS, JavaScript"> Tags de recherche

Attribut nécessitant un synthaxe spécifique dans content:

    <meta name="viewport" content="width=device-width, initial-scale=1.0"> Paramètres de la fenêtre d'affichage
    <meta http-equiv="X-UA-Compatible" content="ie=edge"> Compatibilité navigateur, utile uniquement pour des navigateurs moins récents.

Codage des caractères:
    
    <meta charset="UTF-8">
    
### link
L'élément link est utile pour établir une relation entre la page et des ressources externes, il ne nécessite pas de tag de fermeture.
#### Attributs obligatoires de link

    <link rel="relationship" href="path/to/your-ressource">
**href** est l'URL de la ressource.

L'attribut **rel** désigne la relation entre le document et la ressource pouvant être désigné par:

    <link rel="stylesheet" type="text/css" href="styles.css"> pour la feuille de style CSS
    <link rel="icon" type="image/png" href="favicon.png"> pour le favicon (l'icône de la page web)
    <link rel="preload" href="image.jpg" as="image"> sert à charger une ressource avant son utilisation
    <link rel="canonical" href="https://www.example.com/page"> permet de désigner l'exemplaire original d'une page web (pour éviter la duplication de contenu)
    <link rel="alternate" href="https://www.example.com/es/" hreflang="es" /> désigne une page alternative, une version espagnol ici
    <link rel="dns-prefetch" href="https://www.example.com"> permet au navigateur de faire une requête DNS à l'avance, lui permettant d'accéder plus rapidement à cette page web et fluidifier l'expérience utilisateur

#### Attributs optionnels de link

##### type
**type** sert à spécifier le MIME type (Multipurpose Internet Mail Extensions), il permet d'indiquer la nature et le format d'un document. On lui donne donc un identifiant de format de données tel que:

    Text files may have the MIME type text/plain.
    HTML files have the MIME type text/html.
    CSS files have the MIME type text/css.
    JavaScript files have the MIME type application/javascript.
    Images in JPEG format have the MIME type image/jpeg.
    Images in PNG format have the MIME type image/png.

##### as
Utiliser avec *rel="preload"*, **as** sert à spécifier le type de la ressource allant être pré-chargée au navigateur. Permettant une meilleure allocation et optimisation.
Quelques valeurs communes et reconnues par les navigateurs:

    "image": For image files (e.g., JPEG, PNG, GIF, etc.).
    "script": For JavaScript files.
    "style": For stylesheets (CSS files).
    "font": For font files (e.g., WOFF, WOFF2, TTF, etc.).
    "audio": For audio files (e.g., MP3, WAV, etc.).
    "video": For video files (e.g., MP4, WebM, etc.).
    "fetch": For data-fetching resources (e.g., JSON, XML, etc.).
    "document": For HTML documents.
    "worker": For web worker scripts.
    "manifest": For web app manifest files.

##### crossorigin

##### integrity

##### media

##### disabled

### Exemple et description
      <!DOCTYPE html>  <!-- Declaration du type de document -->
      <html lang="fr"> <!-- le tag d'ouverture du document avec precision de la langue -->
      <head> <!-- Contient les metadonnees et le titre -->
        <title> Titre affiché sur l'onglet </title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> <!-- Fiche CSS pour la page -->
      </head>
      </html>
        
