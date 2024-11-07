# Le jeu du Poulet

Le jeu du poulet est une sorte de "clone" du [dino-game](https://dino-chrome.com/).

❗Ce n'est pas un "vrai" jeu optimisé et robuste !

C'est un support pour ateliers avec le Wagon, pour apprendre les concepts basiques du développement de jeux vidéo à des débutants, avec le moins de moyens et de connaissances préalables possibles.

Pas de framework, pas de `<canvas>` : juste des `<div>`, des animations CSS et de la logique en javascript, à la difficulté croissante.

Résultat : un jeu simple, pédagogique et facilement modifiable... mais avec des défauts notoires:

- Performance: la charge CPU est démesurée par rapport au résultat ! Faire bouger des `<div>` avec JS & CSS est simple à écrire, mais n'est certainement pas une technique viable pour développer un jeu vidéo. Se pencher alors sur l'élément `<canvas>` et les frameworks comme Phaser, qui nécessitent plus d'expérience en programmation.
- Stabilité: pour gérer les évènements dépendants du temps, on utillise les fonctions JS setInterval et setTimeOut. Les navigateurs ont différentes manières de gérer ces processus lorsque la fenêtre perd le focus, ce qui donne des bugs assez imprévisibles... Des librairies JS externes permettraient de corriger ce comportement.
