function points(context){   
    this.ctx = context;
    this.cooldown = 0;
    this.points = 0;
    this.processInput = function(){
        if (keystate[KEY_ESC]){
            startMenu();
        }
    },
    this.update = function(){
	this.cooldown++;
	if(this.cooldown === 10){
		this.cooldown = 0;
		this.points++;	
	}
    },
    this.render = function(){
        this.ctx.font = "30px Arial";
        this.ctx.fillText(this.points, (WIDTH/2)-10, 50);
    }
}
