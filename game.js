function createGameState(socket, player) {
	return {
		roomCode: socket.id,
		player: {
			playerId: socket.id,
			playerName: player.playerName,
			teamName: player.teamName,
			gold: 1000000,
			inventory: [],
			playerCoordinates: {
				longitude: 0,
				latitude: 0,
			},
		},
	};
}

function joinGameState(socket, player) {
	return {
		roomCode: player.hostCode,
		player: {
			playerId: socket.id,
			playerName: player.playerName,
			teamName: player.teamName,
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
	joinGameState,
};
