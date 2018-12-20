function instructions(context){   
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
        this.ctx.fillText("Instrucciones", 20, 100);
        this.ctx.font = "24px Arial";
        this.ctx.fillText("Debes sobrevivir y encontrar una salida",130,200);
        this.ctx.fillText("Pulsa esc para salir",(WIDTH/2)-10, HEIGHT-20);
    }
}