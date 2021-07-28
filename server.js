const { createGameState, joinGameState, gameLoop } = require("./game");
const frameRate = 30;
const io = require("socket.io")(5000, {
	cors: {
		origin: "http://localhost:3000",
	},
});

io.on("connection", socket => {
	socket.on("createRoom", player => {
		player = JSON.parse(player);
		state = createGameState(socket, player);
	});

	socket.on("joinRoom", player => {
		player = JSON.parse(player);
		state = joinGameState(socket, player);
	});

	socket.on("startGame", msg => {
		startGameInterval(socket, state);
	});

	socket.on("payAirfare", fare => {
		payAirfare(fare, state);
	});
});

function startGameInterval(socket, state) {
	const intervalId = setInterval(() => {
		const winner = gameLoop(state);

		if (!winner) {
			socket.emit("gameState", JSON.stringify(state));
		} else {
			socket.emit("gameOver");
			clearInterval(intervalId);
		}
	}, 1000 / frameRate);
}

function payAirfare(fare, state) {
	try {
		fare = parseInt(fare);
	} catch (error) {
		console.log(error);
		return;
	}
	state.player.gold = state.player.gold - fare;
}
