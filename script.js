const player = document.getElementById('player');

// CONTROLS ###########################

const jump = () => {
	if (player.getAnimations()[0]?.animationName == 'jump') return;

	player.classList.add('jump');
	setTimeout(() => player.classList.remove('jump'), 750);
}

document.addEventListener('keydown', (event) => {
	if (['ArrowUp', ' '].includes(event.key)) jump();
});
