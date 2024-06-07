const gameContainer = document.getElementById('game');
const player = document.getElementById('player');
const obstacles = [];
const scoreElt = document.getElementById('score');
let score = 0;

// GAME ###############################

const endGame = () => {
	// Stop game loops & event listener
	clearInterval(mainLoopInterval);
	clearTimeout(obstacleGeneration);
  clearInterval(scoreInterval);
	document.removeEventListener('keydown', checkKeys);
	// Stop animations
	allAnimations = [
		...obstacles.flatMap(obstacle => obstacle.getAnimations()),
		...player.getAnimations(),
    ...gameContainer.getAnimations()
	];
	allAnimations.forEach(animation => animation.pause());
	player.classList.add('dead');
	document.addEventListener('keydown', location.reload.bind(window.location));
	document.getElementById('gameover').style.display = 'block';
}

// CONTROLS ###########################

const jump = () => {
	if (player.getAnimations()[0]?.animationName == 'jump') return;

	player.classList.add('jump');
	setTimeout(() => {
		if (!player.classList.contains("dead")) {
      player.classList.remove('jump')
    }
	}, 750);
}

const checkKeys = (event) => {
	if (['ArrowUp', ' '].includes(event.key)) jump();
}

document.addEventListener('keydown', checkKeys);

// OBSTACLES ##########################

const generateObstacle = () => {
  const names = ['rock', 'fox', 'bat'];
  const name = names[Math.floor(Math.random() * names.length)];
	const obstacle = document.createElement('div');
  obstacle.style.backgroundImage = `url(assets/${name}.png)`;
	obstacle.classList.add('sprite', name);
  return obstacle;
}

const addObstacle = () => {
	const obstacle = generateObstacle();
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
	if (checkCollision(firstObstacle, obstacleBody)) endGame();
	// remove obstacle if out of gameContainer
	else if (obstacleBody.right < gameContainer.getBoundingClientRect().left) {
		firstObstacle.remove();
		obstacles.shift();
	}
}

const mainLoopInterval = setInterval(() => mainLoop(), 100);
// const obstacleGenerationInterval = setInterval(() => addObstacle(), 1500);

const obstacleGenerationCallaback = () => {
  nextTime = Math.random() * 1200 + 800;
  addObstacle();
  obstacleGeneration = setTimeout(obstacleGenerationCallaback, nextTime);
}

let nextTime = 2000;
let obstacleGeneration = setTimeout(obstacleGenerationCallaback, nextTime);

// SCORE ##############################

const updateScore = () => {
  score += 10;
  scoreElt.innerText = score;
}

const scoreInterval = setInterval(updateScore, 250);
