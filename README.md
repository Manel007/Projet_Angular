Ce projet Angular pour la gestion des blocs dans une résidence inclut une configuration Docker pour automatiser le processus de construction et de déploiement :

Dockerfile : Le Dockerfile utilise une approche en deux étapes pour construire et servir l'application Angular :

Étape de construction : Basée sur une image Node.js, cette étape installe Angular CLI, les dépendances du projet et exécute la commande ng build pour créer les fichiers de l'application. Cela optimise l’image finale en ne conservant que les fichiers nécessaires pour la distribution.
Étape de service : L’application construite est servie via une image Nginx alpine, légère et performante, avec les fichiers de build copiés dans le répertoire par défaut de Nginx. Le conteneur expose le port 80 pour l’accès au front-end.
docker-compose.yml : Ce fichier définit la configuration multi-conteneurs pour faciliter le déploiement de l'application Angular.

Le service angular est configuré pour redémarrer automatiquement si nécessaire et mappe le port 8889 de l'hôte au port 4200 du conteneur, permettant ainsi un accès local via http://localhost:8889.
