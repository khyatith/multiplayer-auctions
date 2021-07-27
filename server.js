const express = require("express");
const { createGameState, gameLoop } = require("./game");
const frameRate = 30;
const io = require("socket.io")(5000, {
	cors: {
		origin: "http://localhost:3000",
	},
});

io.on("connection", socket => {
	const state = createGameState();
	socket.on("createRoom", state => {
		state = JSON.parse(state);
		console.log(state);
	});
	//startGameInterval(socket, state);
});

function startGameInterval(socket, state) {
	const intervalId = setInterval(() => {
		const winner = gameLoop(state);

		if (!winner) {
			socket.emit("gameState", JSON.stringify(state));
		} else {
			socket.emit("gameOver");
		}
		clearInterval(intervalId);
	}, 1000 / frameRate);
}
