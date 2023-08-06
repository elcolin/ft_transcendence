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
## HTML
### Règles de synthaxe
Une ouverture de section se présente sous la forme de:

    <balise> //Ouverture de la section
    Contenu de la section
    </balise> // Fermeture de la section

Certains tags n'ont pas besoin d'un tag de fermeture:

    <balise>
Un fichier HTML débute toujours par:

      <!DOCTYPE html>  <!-- Declaration du type de document -->
      <html lang="fr"> <!-- le tag d'ouverture du document avec precision de la langue ("en" si anglais par exemple)-->
### head
La section head contient toutes les meta-informations du document (donc des informations à propos du document lui-même et non du contenu affiché à l'utilisateur).
Elle se déclare comme ceci:

    <head>
    <!-- meta-données -->
    </head> <!-- Fermeture de la section -->
Et contiendra le titre/l'icône du document affiché sur l'onglet, le codage de caractères, les paramètres d'affichage, description et mot-clés (pour les moteurs de recherche), informations sur l'auteur/copyright ainsi que toutes les ressources externes: C'est ici que l'on va répertorier nos fiches CSS et les fichiers JS.
#### metatags
    <meta>
    <meta name="-name-" content="-content-">

Le tag meta ne nécessite pas de tag de fermeture. Sa variable name n'est pas arbitraire, à voir les valeurs ci-dessous.
Il fournit les meta-données du document tel que:

**Codage des caractères:**
    
    <meta charset="UTF-8">
**Paramètres de la fenêtre d'affichage**

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

**Description du document**

    <meta name="description" content="This is a sample web page about XYZ.">
**Auteur et Copyright**

    <meta name="author" content="Prenom nom">
**Tags de recherche**

    <meta name="keywords" content="web development, HTML, CSS, JavaScript">
**Compatibilité navigateur**

Utile uniquement pour des navigateurs moins récents.

    <meta http-equiv="X-UA-Compatible" content="ie=edge">
#### Feuille de style CSS
##### link
    <link rel="stylesheet" type="text/css" href="path/to/your-css-file.css">
L'attribut rel désigne la relation entre le document et la ressource. Ici il s'agit de "stylesheet", la feuille de style.

type sert à spécifier le MIME type (Multipurpose Internet Mail Extensions), il permet d'indiquer la nature et le format d'un document. On lui donne donc un identifiant de format de données tel que:

    Text files may have the MIME type text/plain.
    HTML files have the MIME type text/html.
    CSS files have the MIME type text/css.
    JavaScript files have the MIME type application/javascript.
    Images in JPEG format have the MIME type image/jpeg.
    Images in PNG format have the MIME type image/png.

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
        
