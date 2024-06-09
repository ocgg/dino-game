const gameContainer = document.getElementById('game');
const player = document.getElementById('player');
const obstacles = [];

// CONTROLS ###########################

const jump = () => {
	if (player.getAnimations()[0]?.animationName == 'jump') return;

	player.classList.add('jump');
	setTimeout(() => player.classList.remove('jump'), 750);
}

document.addEventListener('keydown', (event) => {
	if (['ArrowUp', ' '].includes(event.key)) jump();
});

// OBSTACLES ##########################

const addObstacle = () => {
	const obstacle = document.createElement('div');
	obstacle.classList.add('sprite', 'rock');
	obstacles.push(obstacle)
	gameContainer.prepend(obstacle);
}

// COLLISIONS #########################

const checkCollision = (obstacle, obstacleBody) => {
	const playerBody = player.getBoundingClientRect();

	// "+ 35" est un offset pour empecher la collision au niveau de l'espace vide
	// derrière les pattes
	return !(
    playerBody.right < obstacleBody.left || 
		playerBody.left + 35 > obstacleBody.right || 
		playerBody.bottom - 8 < obstacleBody.top ||
    playerBody.top > obstacleBody.bottom
  );
}

// MAIN LOOP ##########################

const mainLoop = () => {
	const firstObstacle = obstacles[0];
	if (!firstObstacle) return;

	const obstacleBody = firstObstacle.getBoundingClientRect();

	// Check if collides (player loses)
	if (checkCollision(firstObstacle, obstacleBody)) console.log('collides!');
	// remove obstacle if out of gameContainer
	else if (obstacleBody.right < gameContainer.getBoundingClientRect().left) {
		firstObstacle.remove();
		obstacles.shift();
	}
}

const mainLoopInterval = setInterval(() => mainLoop(), 100);
const obstacleGenerationInterval = setInterval(() => addObstacle(), 1500);
