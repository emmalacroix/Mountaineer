// For loading all assets and displaying loading info 

Mountaineer.Preloader = function (game) {
	this.loadingScreen = null;
	this.loadingBar = null;

	this.loadingBarWidth = 0;
};

Mountaineer.Preloader.prototype = {
	preload: function () {
		var images = ["bomb"];
		var i;
		for(i=0;i<images.length;i++) {
			this.load.image(images[i],"assets/images/"+images[i]+".png");
		}
			
		var spritesheets = [
			{name:"play-btn",w:422,h:134,f:2},
			{name:"back-btn",w:215,h:95,f:2}
			]
		for(i=0;i<spritesheets.length;i++){
			var sheetName = spritesheets[i].name;
			var sheetWidth = spritesheets[i].w;
			var sheetHeight = spritesheets[i].h;
			var frames = spritesheets[i].f;
			this.load.spritesheet(sheetName,"assets/sheets/"+sheetName+".png",sheetWidth,sheetHeight,frames);
		}

		this.load.onFileComplete.add(this.fileComplete, this);
		this.load.onLoadComplete.add(this.loadComplete, this);

		this.loadingScreen = this.add.sprite(0,0,"loading-screen");
		this.loadingBar = this.add.sprite(295,403,"loading-bar");
		this.loadingBarWidth = this.loadingBar.width;

		// Climber's body
		this.load.image("torso", "assets/images/character/Torso.png");
		this.load.image("arm_upperfront", "assets/images/character/Arm_UpperFront.png");
		this.load.image("arm_lowerfront", "assets/images/character/Arm_LowerFront.png");
		this.load.image("arm_upperback", "assets/images/character/Arm_UpperBack.png");
		this.load.image("arm_lowerback", "assets/images/character/Arm_LowerBack.png");
		this.load.image("leg_lowerback", "assets/images/character/Leg_LowerBack.png");
		this.load.image("leg_lowerfront", "assets/images/character/Leg_LowerFront.png");
		this.load.image("leg_upperback", "assets/images/character/Leg_UpperBack.png");
		this.load.image("leg_upperfront", "assets/images/character/Leg_UpperFront.png");
		this.load.image("head", "assets/images/character/Head.png")

		// The ground

	},
	create: function () {
		this.state.start("MainMenu");
	},
	fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        var fullBarWidth = 705;
        var fullScale  = fullBarWidth / this.loadingBarWidth;
        this.loadingBar.scale.x = fullScale * (progress/100);
	},
	loadComplete: function(){
		
	},
	destroy: function(){
		this.loadingBar.destroy();
		this.loadingScreen.destroy();
	}
};
