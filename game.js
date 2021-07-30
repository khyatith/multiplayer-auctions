var mod = require("./constants");
var rooms = mod.rooms;

function createGameState(socket, player) {
	try {
		let playerObj = {
			playerId: socket.id,
			playerName: player.playerName,
			teamName: player.teamName,
			gold: 1000000,
			inventory: [],
			playerCoordinates: {
				longitude: 0,
				latitude: 0,
			},
		};
		rooms.push({
			roomCode: socket.id,
			players: [playerObj],
		});
	} catch (err) {
		console.log(err);
	}
}

function joinGameState(socket, player) {
	try {
		let playerObj = {
			playerId: socket.id,
			playerName: player.playerName,
			teamName: player.teamName,
			gold: 1000000,
			inventory: [],
			playerCoordinates: {
				longitude: 0,
				latitude: 0,
			},
		};

		rooms.forEach(room => {
			if (room.roomCode === player.hostCode) {
				room.players.push(playerObj);
			} else {
				console.log("not found");
			}
		});
	} catch (err) {
		console.log(err);
	}
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
