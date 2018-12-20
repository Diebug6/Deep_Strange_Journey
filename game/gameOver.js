function gameOverScreen(context,punt){   
    this.ctx = context;
    this.processInput = function(){
        if (keystate[KEY_ESC]){
            startMenu();
        }
		if (keystate[KEY_ENTER]){
            startGame();
        }
    },
    this.update = function(){
    },
    this.render = function(){
        this.ctx.fillStyle = "#ffffff";
        this.ctx.font = "30px Arial";
        this.ctx.fillText("Game Over", 20, 100);
        this.ctx.font = "24px Arial";
        this.ctx.fillText("Puntaje: "+punt,130,200);
        this.ctx.fillText("Pulsa esc para volver al menu",(WIDTH/2)-10, HEIGHT-20);
		this.ctx.fillText("Pulsa ENTER para volver a jugar",(WIDTH/2)-10, HEIGHT-40);
    }
}