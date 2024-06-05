const player = document.querySelector('#player');

const jump = () => {
	if (player.getAnimations()[0]?.animationName == 'jump') return;

	player.classList = 'jump';
	setTimeout(() => player.classList = 'run', 600);
}

// CONTROLS (only jump)
document.addEventListener('keydown', (event) => {
	if (['ArrowUp', ' '].includes(event.key)) jump();
});
