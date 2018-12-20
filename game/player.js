function player()
{
	this.x = 0;
	this.y = HEIGHT / 2;
	this.height = 40;
	this.width = 80;
	this.aceleracion = 3;
	this.battleTheme = new sound("./assests/music/battle.wav");
	this.battleTheme.play();
	
	this.processInput = function()
	{
		if(keystate[KEY_RIGHT_ARROW]) this.direction = RIGHT;
		if(keystate[KEY_UP_ARROW]) this.direction = UP;
		if(keystate[KEY_LEFT_ARROW]) this.direction = LEFT;
		if(keystate[KEY_DOWN_ARROW]) this.direction = DOWN;
		if(keystate[KEY_ESC]) {startMenu();this.battleTheme.stop();}
	}, 
	
	this.update = function()
	{
		if(this.direction === RIGHT)
			this.x+=1 + this.aceleracion;
		else if(this.direction === DOWN)
			this.y+=1 + this.aceleracion;
		else if(this.direction === LEFT)
			this.x-=1 + this.aceleracion;
		else if(this.direction === UP)
			this.y-=1 + this.aceleracion;
		if(this.x > WIDTH-this.width)
		{
			this.x = WIDTH-this.width;
		}
		if(this.x <= 0)
		{
			this.x = 0;
		}
		if(this.y <= 0)
		{
			this.y=0;
		} 
		if(this.y > HEIGHT-this.height)
		{
			this.y = HEIGHT-this.height;
		}  
		this.direction = null;
	}, 	
	this.render = function(){
		this.ctx = cont;
		this.ctx.fillStyle="#e60000";
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
function colission(ax, ay, aw, ah, bx, by, bw, bh){
	return ax < bx + bw && ay < by + bh && bx < ax + aw && by < ay + ah;
}

