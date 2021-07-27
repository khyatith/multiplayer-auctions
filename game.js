function createGameState() {
	return {
		code: "",
		player: {
			team: "",
			gold: 1000000,
			inventory: [],
			playerCoordinates: {
				longitude: 0,
				latitude: 0,
			},
		},
	};
}

function gameLoop(state) {
	if (!state) {
		return;
	}
}

module.exports = {
	createGameState,
	gameLoop,
};
