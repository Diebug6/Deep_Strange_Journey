function enemy()
{
	this.x = WIDTH;
	this.y = Math.floor(Math.random()*(HEIGHT-0+1)+0);
	this.height = 30;
	this.width = 30;
	this.cooldown = 0;
	this.time = 0;
	this.player = gameObjects[0];
	this.soundDeath = new sound("./assests/sounds/explosion.wav");
	this.color = [];
	this.color.push("#e67300");
	this.color.push("#a3a375");
	this.color.push("#ffff4d");

	this.processInput = function()
	{
	}, 
	
	this.update = function()
	{
		this.cooldown++;
		if (this.cooldown === 20) {
			gameObjects.push(new enemy());
		}
		this.time++;
		if (this.time%1500 === 0) {
			ACELERATION+=0.05;
		}
		this.x = (this.x-5)-ACELERATION;
		if(colission(this.player.x, this.player.y, this.player.width, this.player.height,this.x, this.y, this.width, this.height)){
			this.soundDeath.play();
			this.player = gameObjects[1];
			this.points = this.player.points;
			ACELERATION = 0;
			gameObjects[0].battleTheme.stop();
			gameOver(this.points);
		}
	}, 
	
	this.render = function()
	{
		this.ctx = cont;
		this.ctx.fillStyle=this.color[Math.floor(Math.random()*(2-0+1)+0)];
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}