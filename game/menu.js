function menu(context)
{   
   this.ctx = context;
   this.options = [new option("Iniciar Juego", 200, 240),
   new option("Controles", 200, 280),
   new option("Instrucciones", 200, 320)];
   this.past = 1;
   this.precionado=false;
   this.cooldown = 0;
   this.current = 0;
   this.soundNav = new sound("./assests/sounds/navigate.wav");
   this.soundSelect = new sound("./assests/sounds/select.wav");
   this.menuTheme = new sound("./assests/music/theme.wav");
   this.menuTheme.stop();
   this.menuTheme.play();
   this.processInput = function(){
    this.cooldown ++;
    if (this.cooldown === 25) {
        this.precionado = false;
        this.cooldown = 0;
    }
    if(keystate[KEY_UP_ARROW] && !this.precionado){
        this.soundNav.play();
        this.past = this.current;
        this.precionado = true;
        this.current=this.current-1;   
    }
    if(keystate[KEY_DOWN_ARROW] && !this.precionado){
        this.soundNav.play();
        this.precionado = true;
        this.past = this.current;
        this.current=this.current+1;
    }
    if (keystate[KEY_ENTER] && this.current === 0){
        this.soundSelect.play();
        this.menuTheme.stop();
        startGame();
    }
    if (keystate[KEY_ENTER] && this.current === 1) {
        this.soundSelect.play();
        this.menuTheme.stop();
        startControls();
    }
    if (keystate[KEY_ENTER] && this.current === 2){
        this.soundSelect.play();
        this.menuTheme.stop();
        startInstructions();
    }
},
this.update = function(){
    if (this.current < 0) {
        this.current = 0;
    }else if (this.current > 2) {
        this.current = 2;
    }
    this.options[this.past].selected = false;
    this.options[this.current].selected = true;
},
this.render = function(){
    this.ctx.fillStyle = "#ffffff";
    this.ctx.font = "30px strike";
    this.ctx.fillText("Demo juego", 10, 50);
    this.options.forEach((opt) => {
        this.ctx.fillText(opt.text, opt.x, opt.y);
        if (opt.selected){
            this.ctx.fillText("-", opt.sx, opt.y);
        }
    }); }
    
}
function option(text, x, y)
{
    this.text = text;
    this.x=x;
    this.y=y;
    this.selected = false;
    this.sx = this.x-12;
}  