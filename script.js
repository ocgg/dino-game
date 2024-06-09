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

// MAIN LOOP ##########################

const mainLoop = () => {
	const firstObstacle = obstacles[0];
	if (!firstObstacle) return;

	const obstacleBody = firstObstacle.getBoundingClientRect();

	// remove obstacle if out of gameContainer
	else if (obstacleBody.right < gameContainer.getBoundingClientRect().left) {
		firstObstacle.remove();
		obstacles.shift();
	}
}

const mainLoopInterval = setInterval(() => mainLoop(), 100);
const obstacleGenerationInterval = setInterval(() => addObstacle(), 1500);
