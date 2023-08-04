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
    
### Librairies utiles
    #### JQuery // Angular apporte déjà les fonctionnalité ci-dessous, risque de conflit si JQuery est installé
    JQuery simplifie la manipulation de fichier HTML (DOM): Recherche des éléments à l'aide d'un ID, des classes, tags... Gestion des évènements comme des clics, mouvements de souris ou une entrée clavier.

      npm install jquery

#### Bootstrap
  Bootstrap fournit une collection de fiche CSS pré-écrites et des composants graphiques adaptables plus digeste pour les développeurs.

      npm install bootstrap
  Pour utiliser les fiches CSS, il suffit d'aller dans le fichier **angular.json** et aller trouver "styles":
  
      "styles": [
        "src/styles.css",
        "node_modules/bootstrap/dist/css/bootstrap.min.css" <!-- N'importe quelle fiche CSS de la librairie -->
        ],
## HTML
### Règles de synthaxe
Une ouverture de section se présente sous la forme de:

    <balise> //Ouverture de la section
    Contenu de la section
    </balise> // Fermeture de la section

Certains tags n'ont pas besoin d'un tag de fermeture:

    <balise>
    
#### meta

Le tag meta ne nécessite pas de tag de fermeture. Sa variable name n'est pas arbitraire, à voir les valeurs ci-dessous.
Il fournit les metadonnées du document tel que:

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

### Exemple et description
      <!DOCTYPE html>  <!-- Declaration du type de document -->
      <html lang="fr"> <!-- le tag d'ouverture du document avec precision de la langue -->
      <head> <!-- L'element head contient les informations tel que le codage de caractère,
                  la taille de la fenêtre d'affichage et le titre -->
        <title> Titre affiché sur l'onglet </title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      </head>
      </html>
        
