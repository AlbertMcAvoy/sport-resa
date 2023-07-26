# SportResa

## Lancement

Pour lancer le serveur en mode dev, utilisez la commande `npm run start`.

## Documentation
### Architecture modulaire et hexagonale

L'application suit une architecture en module typique d'Angular. Chaque module implémente une architecture hexagonale, on a donc un module pour chaque `domain`.

Ce choix d'architecture permet de mieux manipuler ce que l'on souhaite afficher à l'utilisateur, notamment grace aux routes. Il permet aussi de plus facilement changer une technologie sans impacter toute la logique métier de notre application.

Un module `shared` (appelé `interactor` dans le TP, le nom shared est plus facile à assimiler) existe et comporte les services et vues communes à plusieurs modules (comme les guards ou le service du localStorage).

### Pattern smart/dumb

Dans les dossiers `views`, on retrouve un dossier `smart` et un dossier `dumb`.

Les 'smart components' sont les composants "métiers" qui se chargeront d'afficher les 'dumb components'. C'est à l'intérieur que l'on retrouvera l'intelligence, c'est-à-dire que le composant 'dumb' ne fera rien d'autres que ce qu'on lui dit de faire ; afficher des données ou remonter des évènements (clique de l'utilisateur).
De ce fait, ce sont les 'smart components' qui se chargeront d'afficher et gérer les 'dumb components'.

