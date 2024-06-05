const player = document.querySelector('#player');

const jump = () => {
	const currentAnim = player.getAnimations()[0]?.animationName;
	if (currentAnim !== 'jump') {
		player.classList = 'jump';
		setTimeout(() => player.classList = 'run', 600);
	}
}

// CONTROLS (only jump)
document.addEventListener('keydown', (event) => {
	if (['ArrowUp', ' '].includes(event.key)) jump();
});
