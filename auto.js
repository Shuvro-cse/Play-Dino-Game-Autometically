const game = Runner.getInstance();

window.noObstacles = setInterval(() => {
    if (game.horizon?.obstacles) {
        game.horizon.obstacles.length = 0;
    }
}, 10);
