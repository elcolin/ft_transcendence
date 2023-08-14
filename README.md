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

Attribut nécessitant une synthaxe spécifique dans content:

    <meta name="viewport" content="width=device-width, initial-scale=1.0"> Paramètres de la fenêtre d'affichage
    <meta http-equiv="X-UA-Compatible" content="ie=edge"> Compatibilité navigateur, utile uniquement pour des navigateurs moins récents.

Codage des caractères:
    
    <meta charset="UTF-8">
### title
Le titre qui sera affiché sur l'onglet, il s'écrit sous la forme de:

    <title> Ceci est un titre </title>
    
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
    <link rel="alternate" href="https://www.example.com/es/" hreflang="es" /> désigne une page alternative, hreflang designant la langue de cette page, espagnol ici
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

## Éléments de blocs
Les éléments de blocs ne peuvent apparaître qu'au sein de **body**. Ils occupent tout l'espace horizontal de l'élément parent et un espace vertical égal à la hauteur du contenu.

### body
La section **body** contient le contenu visible de la page:

    <body> 
      <!--Contenu visible -->
    </body>
Il peut lui-même contenir les différentes sections ci-dessous.
### header
Contenu dans body, **header** contient l'en-tête de la page. Typiquement le logo du site, une barre de navigation et d'autres éléments introductifs.

    <header>
      <!-- L'en-tête -->
    </header>
### main
Le contenu principal de la page, la plupart du temps **main** contient plusieurs sections.

    <main> </main>

### footer
**footer** est le pied de page, il contient la plupart du temps les informations de copyright et autre.

    <footer></footer>

C'est ici après footer qu'on place le tag de fermeture de body.

    <div>, <p>, <h1>, <ul>, <li>, <section>, <article>, <footer>.

## Éléments de lignes
Les éléments de lignes contrairement aux éléments de blocs n'occupe que la largeur qui leur est nécessaire. Ils s'insèrent dans le flux du contenu.

    <span>, <a>, <em>, <strong>, <br>, <img>, <input>

## Scripts Javascript
Pour permettre l'utilisation de scripts JS (ou le superset Typescript), on utilise la balise suivante:

    <script>
    </script>
On le situe dans **head**, si l'on souhaite l'exécution du script avant le chargement de la page. Sinon il est placé dans **body**, le script sera alors lancé après le chargement de la page, surtout utilisé pour gérer les interactions utilisateurs.

Plusieurs utilisations existent:
#### Inline
On peut directement écrire le code dans le html:

    <script>
      alert("Hello, World!");
    </script>
#### External
En utilisant un fichier extérieur au html (le plus utilisé):

    <script src="path/to/script.js"></script>

Se faisant il faut aussi modifier dans angular.json la section **"architect" > "build" > "scripts"**:

    "scripts": [
              "path/to/script.js"
            ]

#### Javascript manquant
Si l'utilisateur n'a pas activé Javascript il est possible d'utiliser **noscript** pour afficher du contenu alternatif:

    <noscript>
      <p>Please enable JavaScript to view this website.</p>
    </noscript>

### Interpolation
Pour user de l'interpolation, c'est à dire, lier une valeur de notre composant Typescript à notre HTML, on utilise la synthaxe suivante:

    {{  value }}

  elle devra être présente dans un fichier Typescript, déclarée sous la forme de:

    export class AppComponent {
      title = 'testranscendence';
      result = 'test'
    }

# Librairies Javascript
## Comment installer une librairie?

    cd <my-angular-app>
    npm install <library-name>
    
## Bootstrap
  Bootstrap fournit une collection de fiche CSS pré-écrites et des composants graphiques adaptables plus digeste pour les développeurs.

      npm install bootstrap
  Pour ajouter les styles CSS et les règles implémenter par Bootstrap, il suffit d'aller dans le fichier **angular.json** dans la section "styles":
  
      "styles": [
        "src/styles.css",
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
        ],
### Les différentes classes de Bootstrap

    <div class="options Bootstrap">
    </div>
Divers points intéressants:
  *Le système de grille de Bootstrap sur un écran de taille medium se fait sur 12 colomnes.*

#### Système de grille
    container: Creates a fixed-width container for content.
    container-fluid: Creates a full-width container that spans the entire viewport.
    row: Used to create horizontal rows for organizing content into columns.
    col-*: Defines the width of columns within a row.
#### Typographie
    text-*: Aligns text content (left, right, center, justify).
    text-nowrap: Empêche le texte de passer à la ligne suivante.
    text-truncate: Truncates text with an ellipsis when it overflows.
#### Arrière plan et couleur
    bg-*: Adds background color to elements (primary, secondary, success, danger, warning, info, light, dark, etc.).
    text-*: Sets text color (primary, secondary, success, danger, warning, info, light, dark, etc.).
#### Marge et remplissage
    p-*: Adds padding (p-0, p-1, p-2, p-3, etc.).
    m-*: Adds margin (m-0, m-1, m-2, m-3, etc.).
#### Bordure et rayon de bordure
    border: Adds a border to an element.
    rounded: Adds rounded corners to an element.
    rounded-*: Adds specific border radius (rounded-top, rounded-bottom, etc.).
#### Réactivité
    d-*: Controls element display for different screen sizes (d-none, d-block, d-md-none, etc.).
    visible-* / invisible-*: Shows or hides elements based on screen sizes.
#### Bar de navigation
    navbar: Creates a navigation bar.
    navbar-expand-*: Controls navbar expansion for different screen sizes.
#### Bouton
    btn: Styles a button.
    btn-*: Adds styles for different button types (primary, secondary, success, danger, etc.).
#### Formulaire
    form-control: Styles form input fields.
    form-check: Styles form checkbox and radio elements.
    form-group: Groups form elements together.

# Typescript
