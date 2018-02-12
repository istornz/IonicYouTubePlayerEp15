<p align="center">
  <img src="http://dimitridessus.fr/img/logo_circle.png" width="140px" alt="TheiPhoneRetro-Subscribe">
</p>

# Ionic 3 - Episode 15

La serie te plait ?

Alors n'hésite pas à t'abonner ! Merci :blush:

**Pour m'aider, c'est ici (merci !) : [Ma Page Tipeee](https://www.tipeee.com/theiphoneretro)**

<a href="https://www.youtube.com/subscription_center?add_user=theiphoneretro">
  <img src="http://www.pngall.com/wp-content/uploads/2016/03/Subscribe-PNG-12.png" width="100px" alt="TheiPhoneRetro-Subscribe">
</a>


Dans cette épisode je vous présente comment créer de A à Z une application pour lire des vidéos directement depuis YouTube !

C'est au travers de cet épisode que je vous présente comment lire des vidéos depuis une application Ionic.

Pour mettre en place une telle fonctionnalité, je vous montre comment utiliser l'API de Youtube (YouTube Data API V3), effectuer des requêtes via un service et jouer des vidéos à l'aide d'un plugin Cordova. 

Bien entendu, il est parfaitement possible de suivre cet épisode sous Windows, Mac ou Linux =)

## Au programme 

- Création d'un projet depuis la console Google Developper
- Activation de YouTube Data API V3
- Création et implémentation d'un provider (service).
- Utilisation de Postman pour mettre en place nos requêtes HTTP.
- Création d'une interface.
- Exécution d'une requête GET HTTP via HTTPClient.
- Vérification de données lors de l'affichage (dans le bind).
- Utilisation du Loading controller.
- Lecture d'une vidéo via un Plugin natif iOS et Android. 

## Vidéo

<p align="center">
  <a href="https://www.youtube.com/watch?v=wkdHgDhKRhE"><img src="https://img.youtube.com/vi/wkdHgDhKRhE/0.jpg" alt="Ionic3-TheiPhoneRetro-Episode15"></a>
</p>

## Instructions

Pour utiliser ce projet il vous suffit de suivre les étapes ci dessous :

- Installer tout les modules requis.
```{r, engine='sh', count_lines}
npm install 
```

- Ajouter les plateformes de votre choix.
```{r, engine='sh', count_lines}
cordova platform add android
cordova platform add ios
```

- Compilez et lancez le projet.
```{r, engine='sh', count_lines}
ionic run <PLATFORM>
```

- Profitez :tada:
