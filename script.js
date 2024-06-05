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
	obstacles.push(obstacle)
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
	obstacleBody = obstacles[-1].getBoundingClientRect();
	console.log(playerBody.right < obstacleBody.left || 
						 playerBody.left > obstacleBody.right || 
						 playerBody.bottom < obstacleBody.top || 
						 playerBody.top > obstacleBody.bottom);

	// obstacles.forEach(obstacle => {
	// 	obstacleBody = obstacle.getBoundingClientRect();
	// 	console.log(playerBody.right < obstacleBody.left || 
 //           playerBody.left > obstacleBody.right || 
 //           playerBody.bottom < obstacleBody.top || 
 //           playerBody.top > obstacleBody.bottom);
	// });
}

// MAIN LOOP ##########################

let obstacleWaiting = false

const mainLoop = () => {
	const collides = checkCollision();

	const now = new Date;
	if (obstacleWaiting || now - lastObstacleTime < 500) return;

	obstacleWaiting = true;
	const randTime = Math.random() * 2000 + 1;

	setTimeout(() => {
		addObstacle();
		obstacleWaiting = false;
	}, randTime);
}

setInterval(() => mainLoop(), 100);
