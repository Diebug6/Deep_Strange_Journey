var gameObjects = [], keystate = [];
var cont = false;
var started = false;
var gameArea = 
{
	canvas: document.createElement("canvas"),
	start: function()
	{
		this.canvas.width = WIDTH;
		this.canvas.height = HEIGHT;		
		document.getElementById("game").appendChild(this.canvas);
		cont = this.canvas.getContext("2d");
		cont.fillStyle = "#fff";
		this.interval = setInterval(loop, 10);
		document.addEventListener("keydown", function(evt) 
		{
			keystate[evt.keyCode] = true;
		});
		document.addEventListener("keyup", function(evt)
		{
			keystate[evt.keyCode] = false; 
		});
	}, 
	clear: function()
	{
		cont.clearRect(0, 0, WIDTH, HEIGHT);
	},
}
function clearObject(){
	gameObjects = [];
}
function startMenu(){
	if (!started) {
		started = true;
		gameArea.start();
	}
	clearObject();
	gameObjects.push(new menu(cont));
}

function startGame(){
	clearObject();	
	gameObjects.push(new player());
	gameObjects.push(new points(cont));
	gameObjects.push(new enemy());
}
function startInstructions(){
	clearObject();
	gameObjects.push(new instructions(cont));
}
function startControls(){
	clearObject();
	gameObjects.push(new controls(cont));
}
function gameOver(points){
	clearObject();
	gameObjects.push(new gameOverScreen(cont, points));
}
function loop() 
{
	processInput();
	update();
	gameArea.clear();
	render();
	
}
function processInput()
{
	gameObjects.forEach(function(object)
	{
		object.processInput();
	});
}

function update()
{
	gameObjects.forEach(function(object)
	{
		object.update();
	});
}

function render()
{
	gameObjects.forEach(function(object)
	{
		object.render();
	});
}
