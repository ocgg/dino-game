const gameContainer = document.querySelector('#game');
const player = document.querySelector('#player');
let lastObstacleTime = new Date;
const obstacles = [];

// CONTROLS ###########################

const jump = () => {
	if (player.getAnimations()[0]?.animationName == 'jump') return;

	player.classList = 'jump';
	setTimeout(() => player.classList = 'run', 600);
}

document.addEventListener('keydown', (event) => {
	if (['ArrowUp', ' '].includes(event.key)) jump();
});

// OBSTACLES ##########################

const addObstacle = () => {
	const obstacle = document.createElement('div');
	obstacle.classList.add('fox');
	obstacles.unshift(obstacle)
	gameContainer.prepend(obstacle);
	lastObstacleTime = new Date;
	setTimeout(() => {
		obstacle.remove();
		obstacles.pop();
	}, 2000);;
}

// COLLISIONS #########################

const checkCollision = () => {
	const playerBody = player.getBoundingClientRect();
	if (obstacles.length === 0) return;

	obstacleBody = obstacles[obstacles.length - 1].getBoundingClientRect();
	return !(playerBody.right < obstacleBody.left || 
				 playerBody.left > obstacleBody.right || 
				 playerBody.bottom < obstacleBody.top);
}

// MAIN LOOP ##########################

let obstacleWaiting = false

const mainLoop = () => {
	const collides = checkCollision();
	if (collides) {
		clearInterval(mainLoopInterval);
		animations = obstacles.map(obstacle => obstacle.getAnimations()).flat()
		animations.push(...player.getAnimations());
		console.log(animations)
		animations.forEach(animation => animation.cancel());
	}

	const now = new Date;
	if (obstacleWaiting || now - lastObstacleTime < 500) return;

	obstacleWaiting = true;
	const randTime = Math.random() * 2000 + 1;

	setTimeout(() => {
		addObstacle();
		obstacleWaiting = false;
	}, randTime);
}

const mainLoopInterval = setInterval(() => mainLoop(), 100);
