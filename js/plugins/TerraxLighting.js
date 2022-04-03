// 个人改造：增加了self的用法，取事件自身的ID，简化设定
//=============================================================================
// Terrax Plugins - Lighting system
// TerraxLighting.js
// Version: 1.1.1
//=============================================================================
//
// This script should be compatible with most other scripts, it overwrites one
// core script (Spriteset_Map.prototype.createLowerLayer) in rpg_sprites.js to
// add a new layer. 

//=============================================================================
 /*:
 * @plugindesc v1.1.1 Creates an extra layer that darkens a map and adds lightsources!
 * @author Terrax
 *
 * @param Player radius
 * @desc Adjust the light radius around the player
 * Default: 300
 * @default 300
 *
 * @param Reset Lights
 * @desc Resets the light switches each map
 * Default: No
 * @default No
 *
 * @param Save DaynightCycle
 * @desc Game variable the time of day (0-23) can be stored in
 * Default: 0
 * @default 0
 *
 * @help
 * To activate the script in an area, do the following:
 * 1. Put an event switch into the map.
 * 2. In the 'Note' field (Next to the name) put the following text :
 * Light 250 #FFFFFF
 * - Light activates the script
 * - 250 is the lightradius of the object
 * - #FFFFFF is the lightcolor (white in this case)
 * 3. You're done, its that simple.
 *
 * To alter the player radius in game use the following plugin command : 
 * Light radius 200 #FFFFFF  (to change the radius and the color)
 * If you want to change the player radius slowly over time (like a dying torch)
 * use the command 'Light radiusgrow 200 #FFFFFF'
 *
 * To turn on and off lightsources in the game, do the following:
 * Give the lightsource the normal def :  Light 250 #FFFFFF and an extra number 
 * so it becomes 'Light 250 #FFFFFF 1'
 * To turn on this light use plugin command : 'Light on 1'.
 * The plugin command will also trigger SelfSwitch 'D' on the targeted light(s).
 * To turn off the light use plugin command : 'Light off 1'.
 * You can reset the switches each map with the option or manualy by
 * the plugin command 'Light switch reset' 
 *
 * Replacing the 'Light' keyworld with 'Fire' will give the lights a subtle flicker
 * 
 * To completly turn off the script use : 'Light deactivate'
 * To turn it on again use the command: 'Light activate'
 *
 * To activate a day-night cycle on a map, put in a trigger with 'DayNight' in the note.
 * Plugin command 'Daynight speed 10' changes the speed.
 * Speed 10 means it takes 10 seconds to to pass one hour in game (probably to fast)
 * Plugin command 'Daynight hour 16' sets the hour to 16:00 hours
 * Each hour has its own color value, you can define hours 0 to 23
 * Plugin command 'Daynight color 0 #222222' changes 0:00 hours to color value '#222222' 
 *
 * To use a flashlight effect use 'Flashlight on' and 'Flashlight off'
 *
 * If you want to use the time of day to trigger effects (like turning on lights when it gets dark)
 * you can use the parameter 'Save DaynightCycle'. The default is 0, which means its off.
 * If you set it to a value,5 for example, it will store the daynight value (0-23) inside game variable 5.
 * You can then use that variable to trigger lights.
 *
 * Released under the MIT license,
 * if used for commercial projects feel free to make a donation or 
 * better yet, give me a free version of what you have created.
 * e-mail : fox(AT)caiw.nl / terraxz2 on steam.
 * 
 * Special thanks to everyone in the rpgmakerweb community for idea's, support and interest.
*/
//=============================================================================
//  ps.. if my code looks funky, i'm an old guy..
// object orientated programming bugs the hell out of me.
var testcounter = 0;

(function() {
	var lightarray_id = [];
	var lightarray_state = [];
	var lightgrow_value;
	var lightgrow_target;
	var lightgrow_speed;
	var oldmap = 0;
	var oldseconds = 0;
    var playercolor = '#FFFFFF';  
    var playerflicker = false; 
    var playerflashlight = false; 
    var scriptactive = true;
    var daynightspeed = 10;
    var daynightcycle = 17;
    var daynighttimer = 0;
    var daynightstop = false;
    var daynightcolors = [  '#000000', '#000000', '#000000', '#000000',
      						'#000000', '#000000', '#666666', '#AAAAAA',
      						'#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
      						'#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
      						'#FFFFFF', '#FFFFFF', '#AAAAAA', '#666666',
      						'#000000', '#000000', '#000000', '#000000' ];       						

	var parameters = PluginManager.parameters('TerraxLighting');
    var player_radius = Number(parameters['Player radius'] || 300);	
	var reset_each_map = parameters['Reset Lights'] || No;  
	var daynightsave = Number(parameters['Save DaynightCycle'] || 10);	

	var move_event_x = [];
	var move_event_y = [];
	var move_event_id = [];
    
    var lightCache = [];    
	
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        command = command.toLowerCase();
        if (command === 'light' || command === 'fire' || command === 'flashlight' || command === 'daynight') {
            
	        // ************* DAYNIGHT *******************
	        if (command === 'daynight') {
   			
		   		if (args[0] == 'speed') {   
			   		daynightspeed = Number(args[1]);  
		        	if (daynightspeed == 0) {
			       		daynightspeed = 1000;
			       		daynightstop = true;
		        	} else {
		        		daynightstop = false;
			        }	
		   		}
		   		
		   		if (args[0] == 'hour') {   
			   		daynightcycle = Number(args[1]);  
		        	if (daynightcycle < 0) {
			       		daynightcycle = 0;
					}
		        	if (daynightcycle > 23) {
			       		daynightcycle = 23;
					}
					if (daynightsave > 0) {
						$gameVariables.setValue(daynightsave, daynightcycle);
					}
					$gameVariables.setDayNightSave(daynightcycle);
				}
		   			   		
		   		if (args[0] == 'color') {   
			   		var hour = Number(args[1]);  
		        	if (hour < 0) {
			       		hour = 0;
					}
		        	if (hour > 23) {
			       		hour = 23;
					}
					hourcolor = args[2];
					var isValidColor  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hourcolor); 	    
					if (isValidColor) {
						daynightcolors[hour] = hourcolor;
	   				}
				}
		   		
		        
			}
	       
	        // ************* FLASHLIGHT *******************
	        if (command === 'flashlight') {
		        if (args[0] == 'on') {
	    			playerflashlight = true;
    			}
		        if (args[0] == 'off') {
	    			playerflashlight = false;
    			}
			} 
	        
			// ******************* FIRE *******************
	        if (command === 'fire') {
	    		playerflicker = true;
		    } else {
				playerflicker = false;   
			}			
			
	        //var evid = this._eventId;
	        if (command === 'light' || command === 'fire') {
		        
		        //******************* Light radius 100 #FFFFFF ************************  	    
		        if (args[0] == 'radius') {
	    			var newradius = Number(args[1]);
	    			if (newradius >= 0) {
	    				player_radius = newradius;
	    				lightgrow_value = newradius;
	    				lightgrow_target = newradius;
	    				
						$gameVariables.setRadiusSave(player_radius);
	    				
					}
				
					if (args.length > 2) {
						playercolor = args[2];
						var isValidPlayerColor  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(playercolor); 	    
						if (!isValidPlayerColor) {
							playercolor = '#FFFFFF'    
						}
					}
				} 
				
				//******************* Light radiusgrow 100 #FFFFFF ************************  	    
		        if (args[0] == 'radiusgrow') {
			        var evid = this._eventId;
			        //Graphics.printError('test',evid);
	    			var newradius = Number(args[1]);
	    			if (newradius >= 0) {
	    				//player_radius = newradius;
		 				lightgrow_value = player_radius;
						lightgrow_target = newradius;
						lightgrow_speed = (Math.abs(newradius-player_radius))/500;
	
					}
				
					if (args.length > 2) {
						playercolor = args[2];
						var isValidPlayerColor  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(playercolor); 	    
						if (!isValidPlayerColor) {
							playercolor = '#FFFFFF'    
						}
					}
				} 
				
				// *********************** TURN SPECIFIC LIGHT ON *********************
	 			if (args[0] == 'on') {
					if (args[1] == "self"){
						var lightid = this.eventId();//修改数字
					}
					else {
						var lightid = Number(args[1]);
					}
	    			var idfound = false;
					for (var i = 0; i < lightarray_id.length; i++) {
						if (lightarray_id[i] == lightid) {
							idfound = true;
							lightarray_state[i] = true;
						}
					}
					if (idfound == false) {
						lightarray_id.push(lightid);
						lightarray_state.push(true);
						
					}
				}	
				
				// *********************** TURN SPECIFIC LIGHT OFF *********************
	 			if (args[0] == 'off') {
					if (args[1] == "self"){
						var lightid = this.eventId();//修改数字
					}
					else {
						var lightid = Number(args[1]);
					}
	    			var idfound = false;
					for (var i = 0; i < lightarray_id.length; i++) {
						if (lightarray_id[i] == lightid) {
							idfound = true;
							lightarray_state[i] = false;
						}
					}
					if (idfound == false) {
						lightarray_id.push(lightid);
						lightarray_state.push(false);
					}
				}
				
				// **************************** RESET ALL SWITCHES ***********************
				if (args[0] == 'switch' && args[1] == 'reset') {
					// reset switches to false
									
					for (var i = 0; i < $dataMap.events.length; i++) {
		        		if ($dataMap.events[i]) {
							for (var j = 0; j < lightarray_id.length; j++) {
								if (lightarray_id[j] == lightid) {
									var mapid = $gameMap.mapId();
									var eventid = $dataMap.events[i].id;
									var key = [mapid,eventid,'D'];
									$gameSelfSwitches.setValue(key, false);
								}
							}
						}
					}
	    			lightarray_id = [];
					lightarray_state = [];
				}
			}
			// *********************** TURN SCRIPT ON/OFF *********************
 			if (args[0] == 'deactivate') {
    			scriptactive = false;	
    			lightCache = [];
			}
 			if (args[0] == 'activate') {
    			scriptactive = true;
    			
			}	
							
		}  
	}
    
	Spriteset_Map.prototype.createLightmask = function() {
	    this._lightmask = new Lightmask();
	    this.addChild(this._lightmask);
	};
	
	
	function Lightmask() {
	    this.initialize.apply(this, arguments);
	}
	
	Lightmask.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
	Lightmask.prototype.constructor = Lightmask;
	
	Lightmask.prototype.initialize = function() {
	    PIXI.DisplayObjectContainer.call(this);
	    this._width = Graphics.width;
	    this._height = Graphics.height;
	    this._sprites = [];
	    this._createBitmap();
	};
	
	//Updates the Lightmask for each frame.
	var frameCount = 0;
	Lightmask.prototype.update = function() {
        if(Graphics.frameCount != frameCount){
            frameCount = Graphics.frameCount;
            this._updateMask();
        }
	};
	
	//@method _createBitmaps
	
	Lightmask.prototype._createBitmap = function() {
	    this._maskBitmap = new Bitmap(2500,1500);   // one big bitmap to fill the intire screen with black
	    var canvas = this._maskBitmap.canvas;
	};
	
	/**
	 * @method _updateAllSprites
	 * @private
	 */
	Lightmask.prototype._updateMask = function() {
	
	
		// ****** DETECT MAP CHANGES ********
		var map_id = $gameMap.mapId();
		if (map_id != oldmap) {
			oldmap = map_id;
				
			
			if (reset_each_map == 'Yes' || reset_each_map == 'yes') {
				// reset switches to false
				for (var i = 0; i < $dataMap.events.length; i++) {
	        		if ($dataMap.events[i]) {
						for (var j = 0; j < lightarray_id.length; j++) {
							if (lightarray_id[j] == lightid) {
								var mapid = $gameMap.mapId();
								var eventid = $dataMap.events[i].id;
								var key = [mapid,eventid,'D'];
								$gameSelfSwitches.setValue(key, false);
							}
						}
					}
				}
    			Lightarray_id = [];
				lightarray_state = [];
			} 
		}
	
				
		// remove old sprites
		for (var i = 0; i < this._sprites.length; i++) {	  // remove all old sprites
			this._removeSprite();
		}
		
		
		if (scriptactive == true) {	
			// are there lightsources on this map?
			for (var i = 0; i < $dataMap.events.length; i++) {
		        if ($dataMap.events[i]) {
		            var note = $dataMap.events[i].note
		            var note_args = note.split(" ");
		    		var note_command = note_args.shift().toLowerCase();
		            if (note_command == "light" || note_command == "fire" || note_command == "daynight") {			
						this._addSprite(0,0,this._maskBitmap); // yes.. then turn off the lights		
						break;
					}
				}
			}
		
			// ******** GROW OR SHRINK GLOBE *********
			
			if (lightgrow_value < lightgrow_target) {			
				lightgrow_value = lightgrow_value + lightgrow_speed;
				player_radius = Math.floor(lightgrow_value)
				$gameVariables.setRadiusSave(player_radius);
			}
			if (lightgrow_value > lightgrow_target) {				
				lightgrow_value = lightgrow_value - lightgrow_speed;
				player_radius = Math.floor(lightgrow_value)
				$gameVariables.setRadiusSave(player_radius);
			}
			
			
		    // ****** PLAYER LIGHTGLOBE ********
		
		    var canvas = this._maskBitmap.canvas;
            canvas.width = canvas.width;
		   	var ctx = canvas.getContext("2d");
		    this._maskBitmap.fillRect(0, 0, 2500, 1500, 'black');

			//ctx.globalCompositeOperation = 'lighten';
			ctx.globalCompositeOperation = 'lighter';
			
			var pw = $gameMap.tileWidth()
		    var ph = $gameMap.tileHeight();
			var dx = $gameMap.displayX();
			var dy = $gameMap.displayY();
			var px = $gamePlayer._realX;
			var py = $gamePlayer._realY;
			var pd = $gamePlayer._direction;	
			
			var x1 = (pw/2)+( (px-dx)*pw);
			var y1 = (ph/2)+( (py-dy)*ph);
		    var paralax = false;
			// paralax does something weird with coordinates.. recalc needed
			if (dx>$gamePlayer.x) {
				var xjump = $gameMap.width() - Math.floor(dx-px);  
				x1 = (pw/2)+(xjump*pw);
			} 
			if (dy>$gamePlayer.y) {
				var yjump = $gameMap.height() - Math.floor(dy-py);
				y1 = (ph/2)+(yjump*ph);
			}
					
			if (player_radius > 0) {
				if (playerflashlight == true) {
					this._maskBitmap.radialgradientFillRect2(x1,y1, 20, player_radius, playercolor, 'black', pd);
				}
				if (player_radius < 100){
					this._maskBitmap.radialgradientFillRect(x1,y1, 0, player_radius, '#999999', 'black', playerflicker); 
				} else { 	
					this._maskBitmap.radialgradientFillRect(x1,y1, 20, player_radius, playercolor, 'black', playerflicker); 
				}
				
			}
			

			// *********************************** DAY NIGHT CYCLE TIMER **************************
		            
		    if (daynightspeed > 0) {
				if (daynightstop == false) {
					var seconds;
					var datenow = new Date();
					var seconds = Math.floor(datenow.getTime()/10); 
					if (seconds > oldseconds) {
						oldseconds = seconds;
						daynighttimer = daynighttimer + 1;
						if (daynighttimer >= (daynightspeed * 60)) {

							daynightcycle = daynightcycle + 1;
							if (daynightcycle >= 24) {
								daynightcycle = 0;
							}	
							if (daynightsave > 0) {
								$gameVariables.setValue(daynightsave, daynightcycle);
		 					}
		 					$gameVariables.setDayNightSave(daynightcycle);
							daynighttimer = 0;
						}
					}
			    }
	        }
			
			// ********** OTHER LIGHTSOURCES **************
			
			for (var i = 0; i < $dataMap.events.length; i++) {
		        if ($dataMap.events[i]) {
		            var note = $dataMap.events[i].note;
		            var evid = $dataMap.events[i].id;
		            var note_args = note.split(" ");
		    		var note_command = note_args.shift().toLowerCase();
		            if (note_command == "light" || note_command == "fire" ) {
			            
			            var objectflicker = false;
			            if (note_command == "fire") {
			        		objectflicker = true;
				        }
			            
			        	var light_radius = note_args.shift();
			        			        	
			        	// light radius
			        	if (light_radius >= 0) {
				        	
				        	// light color
				        	var colorvalue = note_args.shift();
				        	var isValidColor  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(colorvalue) 	    
				            if (!isValidColor) {
					        	colorvalue = '#FFFFFF'    
				            }     
					  		
				            // conditional lighting
						    var lightid = note_args.shift();
						    var state = true;
							//增加单独每个事件的判断= =
						    if (lightid == "self"){
								var mapid = $gameMap.mapId();
								var eventid = $dataMap.events[i].id;
								//key = [mapid,eventid,'D'];
								//state = $gameSelfSwitches.value(key);
								//window.alert(state);
								lightid = eventid;
							}

				        	if (lightid > 0) {
								var state = false;//				
						    	for (var j = 0; j < lightarray_id.length; j++) {
									if (lightarray_id[j] == lightid) {
										idfound = true;
										state = lightarray_state[j]; 
										var mapid = $gameMap.mapId();
										var eventid = $dataMap.events[i].id;
										
										//Graphics.printError('test',mapid+' '+eventid);
										key = [mapid,eventid,'D'];
										if (state == true) {
											$gameSelfSwitches.setValue(key, true);
										} else {
											$gameSelfSwitches.setValue(key, false);
										}
									}
								}
							}  
						    			        	
				        	// show light
				            if (state == true) {
				        				        	
					            var lpx = $dataMap.events[i].x;
					            var lpy = $dataMap.events[i].y;
					            
					            // moving lightsources
								for (var j = 0; j < move_event_id.length; j++) {
									if (move_event_id[j] == evid) {
										lpx = move_event_x[j];
										lpy = move_event_y[j];
									}
								}
					            
					            var lx1 = (pw/2)+( (lpx-dx)*pw);
								var ly1 = (ph/2)+( (lpy-dy)*ph);
								// paralax does something weird with coordinates.. recalc needed
								if (dx-10>lpx) {
									var lxjump = $gameMap.width() - (dx-lpx);
									lx1 = (pw/2)+(lxjump*pw);
								} 
								if (dy-10>lpy) {
									var lyjump = $gameMap.height() -(dy-lpy);
									ly1 = (ph/2)+(lyjump*ph);
								}
	
					            this._maskBitmap.radialgradientFillRect(lx1,ly1, 0, light_radius , colorvalue, 'black', objectflicker); 
			            	}
		            	}
		            }
		            
		            
					// *********************************** DAY NIGHT CYCLE FILTER **************************
		            
		            
		            if (note_command == "daynight") {
		            
    					var color1 = daynightcolors[daynightcycle];
    					
    					if (daynightspeed > 0) {
	    					var nextcolor = daynightcycle+1;
	    					if (nextcolor == 24) {
		    					nextcolor = 0;	
	    					}
	    					var color2 = daynightcolors[nextcolor];
	
	    					var r = hexToRgb(color1).r;
			    			var g = hexToRgb(color1).g;
			    			var b = hexToRgb(color1).b;
			    			
			    			var r2 = hexToRgb(color2).r;
			    			var g2 = hexToRgb(color2).g;
			    			var b2 = hexToRgb(color2).b;		    			
			    			
			    			var stepR = (r2-r)/(60*daynightspeed);
			    			var stepG = (g2-g)/(60*daynightspeed);
			    			var stepB = (b2-b)/(60*daynightspeed);
			    						    					    			
			    			r = Math.floor(r + (stepR * daynighttimer));
			    			g = Math.floor(g + (stepG * daynighttimer));
			    			b = Math.floor(b + (stepB * daynighttimer));
			    						    			
	    				}		    					    			
		  				color1 = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    					
						this._maskBitmap.FillRect(0,0,2500,1500,color1);
	            	}
		        }
		       
		        
		        
		        
		    }
			
			// reset drawmode to normal
		    ctx.globalCompositeOperation =  'source-over';	    
		}
	};
	
	
	/**
	 * @method _addSprite
	 * @private
	 */
	Lightmask.prototype._addSprite = function(x1,y1,selectedbitmap) {
		
	    var sprite = new Sprite(this.viewport);
	    sprite.bitmap = selectedbitmap;
	    sprite.opacity = 255;
	    sprite.blendMode = 2;
	    sprite.x = x1;
	 	sprite.y = y1;
	    this._sprites.push(sprite);
	    this.addChild(sprite);
	    sprite.rotation = 0;
	    sprite.ax = 0
	    sprite.ay = 0
	 	sprite.opacity = 255;
	};
	
	/**
	 * @method _removeSprite
	 * @private
	 */
	Lightmask.prototype._removeSprite = function() {
	    this.removeChild(this._sprites.pop());
	};
	
	
		
	// *******************  NORMAL BOX SHAPE ***********************************
	// Fill gradient circle
	
	Bitmap.prototype.FillRect = function(x1, y1, x2, y2, color1) {
	    var context = this._context;
	    context.save();
	    context.fillStyle = color1;
	    context.fillRect(x1, y1, x2, y2);
	    context.restore();
	    this._setDirty();
	};
	
	// *******************  NORMAL LIGHT SHAPE ***********************************
	// Fill gradient circle
        
    function getLight(r1, r2, color1, color2){
        for(var n = 0; n < lightCache.length; ++n){
            var key = lightCache[n][0];
            if(key.r2 === r2 && key.color1 === color1){
                return lightCache[n][1];
            }
        }
        
        var canvas = document.createElement('canvas');
        canvas.width = r2*2 + 2;
        canvas.height = r2*2 + 2;
        var context = canvas.getContext('2d');

	  	var grad = context.createRadialGradient(r2, r2, r1, r2, r2, r2);
	    grad.addColorStop(0, color1);
	    grad.addColorStop(1, color2);
	    context.fillStyle = grad;
	    context.fillRect(0, 0, r2*2, r2*2);
        
        // context.fillStyle = color1;
        // context.arc(r2,r2,r2,0, Math.PI*2);
        // context.fill();
        
        if(r2 >0 && r2 < 500)context.putImageData(context.getImageData(0,0,r2,r2),0,0);
        
        lightCache.push([
            {r2: r2, color1: color1},
            canvas
        ]);
        if(lightCache.length > 20) lightCache.shift();
        
        return canvas;
    }
	
	Bitmap.prototype.radialgradientFillRect = function(x1, y1, r1, r2, color1, color2, flicker) {
	    // var context = this._context;
	    // var grad;	  
	    // var wait = Math.floor((Math.random()*8)+1); 
	   	// if (flicker == true && wait == 1) {
		//     var gradrnd = Math.floor((Math.random()*7)+1); 
		//   	var colorrnd = Math.floor((Math.random()*10)-5); 
		  	
		//     var r = hexToRgb(color1).r;
		//     var g = hexToRgb(color1).g;
		//     var b = hexToRgb(color1).b;
		//     g = g + colorrnd;
		//     if (g<0) { g = 0; }
		// 	if (g>255) { g = 255; }
		//   	color1 = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
		//     r2 = r2 - gradrnd;  
  		// }
	  	// grad = context.createRadialGradient(x1, y1, r1, x1, y1, r2);
	    // grad.addColorStop(0, color1);
	    // grad.addColorStop(1, color2);
	    // context.save();
	    // context.fillStyle = grad;
	    // context.fillRect(x1-r2, y1-r2, r2*2, r2*2);
	    // context.restore();
        
        var light = getLight(r1, r2, color1, color2);
        this._context.drawImage(light, x1-r2, y1-r2);
        // this._context.fillStyle=color1;
        // this._context.beginPath();
        // this._context.arc(x1, y1, r2, 0, Math.PI*2);
        // this._context.fill();
        
	    this._setDirty();
	};
	
	// ********************************** FLASHLIGHT *************************************
	// Fill gradient Cone
	
	Bitmap.prototype.radialgradientFillRect2 = function(x1, y1, r1, r2, color1, color2, direction) {
	    var context = this._context;
	    var grad;	
	    
	    // smal dim glove around player
	   	context.save();
	    	    
	    // r1 = 0;
	  	// r2 = 40;
		// grad = context.createRadialGradient(x1, y1, r1, x1, y1, r2);
		// grad.addColorStop(0, '#999999');
		// grad.addColorStop(1, color2);
	
		// context.fillStyle = grad;
		// context.fillRect(x1-r2, y1-r2, r2*2, r2*2);
        
        var dimLight = getLight(0, 40, '#999999', color2);
        context.drawImage(dimLight, x1-r2, y1-r2);
        // this._context.fillStyle=color1;
        // this._context.beginPath();
        // this._context.arc(x1, y1, r2, 0, Math.PI*2);
        // this._context.fill();

	    
	    // flashlight
	    
	    //direction = 4;

		for (var cone = 0; cone < 8; cone++) {
		   	r1 = cone * 2;
	  		r2 = cone * 12;
	  		
	  		switch(direction) {
	    		case 6:
	    			x1 = x1 + cone*6;
	       	    	break;
	   			case 4:
	   				x1 = x1 - cone*6;
	       	    	break;
	   			case 2:
	   				y1 = y1 + cone*6;
	       	    	break;
	            case 8:
	            	y1 = y1 - cone*6;
	       	    	break;
			} 
	  		  		

		  	// grad = context.createRadialGradient(x1, y1, r1, x1, y1, r2);
		    // grad.addColorStop(0, color1);
		    // grad.addColorStop(1, color2);
	
		    // context.fillStyle = grad;
		    // context.fillRect(x1-r2, y1-r2, r2*2, r2*2);
            
            var coneLight = getLight(r1, r2, color1, color2);
            context.drawImage(coneLight, x1-r2, y1-r2);
            // this._context.fillStyle=color1;
            // this._context.beginPath();
            // this._context.arc(x1, y1, r2, 0, Math.PI*2);
            // this._context.fill();
    	}
	    
	    context.restore();	    
	    
	    
	    this._setDirty();
	};
	
	
	function hexToRgb(hex) {
    	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    	return result ? {
        	r: parseInt(result[1], 16),
        	g: parseInt(result[2], 16),
        	b: parseInt(result[3], 16)
    	} : null;
	}
	
	// Saving Variables in Game_Variables 
	// Big thanks to Schlangan for the code.
	
	Game_Variables.prototype.valueRadiusSave = function() {
		return this._Terrax_Lighting_Radius || 0;
	};
	Game_Variables.prototype.valueDayNightSave = function() {
		return this._Terrax_Lighting_DayNight || 0;
	};

	Game_Variables.prototype.setDayNightSave = function(value) {
		this._Terrax_Lighting_DayNight = value;
	};
	Game_Variables.prototype.setRadiusSave = function(value) {
		this._Terrax_Lighting_Radius = value;
	};

	
	//****
	// This function is overwritten from rpg_sprites.js
	//****

	Spriteset_Map.prototype.createLowerLayer = function() {
	    Spriteset_Base.prototype.createLowerLayer.call(this);
	    this.createParallax();
	    this.createTilemap();
	    this.createCharacters();
	    this.createShadow();
	    this.createDestination();
	    this.createLightmask();
	    this.createWeather();
	
	}
	
	//****
	// These functions are overwritten from objects/sprites/scenes.
	//****
	

	Game_CharacterBase.prototype.updateMove = function() {
		
		var evid = this._eventId;    // Capture the realX and realY of moving events.
		if (evid) {
			var note = $dataMap.events[evid].note;  
			var note_args = note.split(" ");
			var note_command = note_args.shift().toLowerCase();
			if (note_command == "light" || note_command == "fire" ) {
				//Graphics.printError('test',evid + ' ' + this._realX + ' '+ this._realY);
				var idfound = false;
				for (var i = 0; i < move_event_id.length; i++) {
					if (move_event_id[i] == evid) {
						idfound = true;
						move_event_x[i] = this._realX;
						move_event_y[i] = this._realY;
					}
				}
				if (idfound == false) {
					move_event_id.push(evid);
					move_event_x.push(this._realX);
					move_event_y.push(this._realY);	
				}
			}
		}
		//Graphics.printError('test',evid + ' ' + this._realX + ' '+ this._realY);
		
	    if (this._x < this._realX) {
	        this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
	    }
	    if (this._x > this._realX) {
	        this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
	    }
	    if (this._y < this._realY) {
	        this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
	    }
	    if (this._y > this._realY) {
	        this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
	    }
	    if (!this.isMoving()) {
	        this.refreshBushDepth();
	    }
	}
	
	Scene_Load.prototype.onSavefileOk = function() {
	    Scene_File.prototype.onSavefileOk.call(this);
	    if (DataManager.loadGame(this.savefileId())) {
	        this.onLoadSuccess();
	        
	        // new code.. restore radius and time of day from game variables


			var storeddata = $gameVariables.valueRadiusSave();
			if (storeddata > 0) {
				player_radius = storeddata;
			}

			var storeddata = $gameVariables.valueDayNightSave();
			if (storeddata > 0) {
				daynightcycle = storeddata;
				if (daynightsave > 0) {
					$gameVariables.setValue(daynightsave, daynightcycle);
				}
			}

			playerflashlight = false; 
			lightarray_id = [];
			lightarray_state = [];
			// end of new code        
	        
	        
	    } else {
	        this.onLoadFailure();
	    }
	}

	
	
	

})();