# SLIDES

### Introduction: Dino Game

- Présentation du dino game
- Méthodo: "on va pas faire un vrai jeu, enfin si mais non"
- Par contre, on va voir des concepts utilisés en général dans la prog de jeu

### Partie 1: La poupoule

- Présentation du spritesheet
- Mise en place de l'image
- Animation
- Saut

### Partie 2: Les méchants

- Mise en place caillou
- Animation pour traverser l'écran
- Génération des obstacles (setInterval)

- Problème : Y'a 50 cailloux dans le DOM, faut les supprimer
    - introduction main loop
    - Ne checker que l'état du 1er obstacle

### Partie 3: collisions

- Logique de collision dans la main loop
- Notion de 'body', 'corps physique', 'hitbox'
- tester avec console.log, une fois que c'est bon :

### Partie 4: gérer la fin du jeu

- On veut que l`écran s`arrête: suppression des intervalles & eventListeners
- On veut un truc visuel: joueur change de couleur par ex.
- On veut un texte à l'écran, "Game over"

### Partie 6: un peu de déco

- Background
- Déco ?

### Partie 5: (Optionnel) Aller plus loin

a. Temps aléatoire de génération d'obstacle
b. D'autres ennemis (fox, chauve-souris) & Génération aléatoire
d. Affichage du score
