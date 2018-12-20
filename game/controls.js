function controls(context){   
    this.ctx = context;
    this.processInput = function(){
        if (keystate[KEY_ESC]){
            startMenu();
        }
    },
    this.update = function(){
    },
    this.render = function(){
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillText("Controles", 20, 100);
        this.ctx.font = "24px Arial";
        this.ctx.fillText("Utilize las flechas del teclado para mover su personaje",130,200);
        this.ctx.fillText("Pulsa esc para salir",(WIDTH/2)-10, HEIGHT-20);
    }
}