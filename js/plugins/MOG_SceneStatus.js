//=============================================================================
// MOG_SceneStatus.js
//=============================================================================

/*:
 * @plugindesc (v1.0) Modifica a cena de status.
 * @author Moghunter
 *
 * @param Bust X-Axis
 * @desc Definição X-Axis da imagem do personagem.
 * @default 600
 *
 * @param Bust Y-Axis
 * @desc Definição Y-Axis da imagem do personagem.
 * @default 0
 *
 * @param States X-Axis
 * @desc Definição X-Axis das condições.
 * @default 59
 *
 * @param States Y-Axis
 * @desc Definição Y-Axis das condições.
 * @default 120
 *
 * @param Name X-Axis
 * @desc Definição X-Axis do nome.
 * @default 190
 *
 * @param Name Y-Axis
 * @desc Definição Y-Axis do nome.
 * @default 103
 *
 * @param Level X-Axis
 * @desc Definição X-Axis do level.
 * @default 290
 *
 * @param Level Y-Axis
 * @desc Definição Y-Axis do level.
 * @default 6
 *
 * @param Exp X-Axis
 * @desc Definição X-Axis da experiência.
 * @default 440
 *
 * @param Exp Y-Axis
 * @desc Definição Y-Axis da experiência.
 * @default 6
 *
 * @param Next Exp X-Axis
 * @desc Definição X-Axis da experiência necessária.
 * @default 660
 *
 * @param Next Exp Y-Axis
 * @desc Definição Y-Axis da experiência necessária.
 * @default 6
 *
 * @param HP Number X-Axis
 * @desc Definição X-Axis do número de HP.
 * @default 50
 *
 * @param HP Number Y-Axis
 * @desc Definição Y-Axis do número de HP.
 * @default 155
 *
 * @param HP Meter X-Axis
 * @desc Definição X-Axis do medidor de HP.
 * @default 45
 *
 * @param HP Meter Y-Axis
 * @desc Definição Y-Axis do medidor de HP.
 * @default 210
 * 
 * @param MP Number X-Axis
 * @desc Definição X-Axis do número de MP.
 * @default 208
 *
 * @param MP Number Y-Axis
 * @desc Definição Y-Axis do número de HP.
 * @default 155
 *
 * @param MP Meter X-Axis
 * @desc Definição X-Axis do medidor de MP.
 * @default 203
 *
 * @param MP Meter Y-Axis
 * @desc Definição Y-Axis do medidor de MP.
 * @default 210
 * 
 * @param TP Number X-Axis
 * @desc Definição X-Axis do número de TP.
 * @default 366
 *
 * @param TP Number Y-Axis
 * @desc Definição Y-Axis do número de TP.
 * @default 155
 *
 * @param TP Meter X-Axis
 * @desc Definição X-Axis do medidor de TP.
 * @default 361
 *
 * @param TP Meter Y-Axis
 * @desc Definição Y-Axis do medidor de TP.
 * @default 210
 * 	
 * @param ATK Number X-Axis
 * @desc Definição X-Axis do número de ATK.
 * @default 50
 *
 * @param ATK Number Y-Axis
 * @desc Definição Y-Axis do número de ATK.
 * @default 211
 *
 * @param ATK Meter X-Axis
 * @desc Definição X-Axis do medidor de ATK.
 * @default 45
 *
 * @param ATK Meter Y-Axis
 * @desc Definição Y-Axis do medidor de ATK.
 * @default 266
 * 	
 * @param MAT Number X-Axis
 * @desc Definição X-Axis do número de MAT.
 * @default 208
 *
 * @param MAT Number Y-Axis
 * @desc Definição Y-Axis do número de MAT.
 * @default 211
 *
 * @param MAT Meter X-Axis
 * @desc Definição X-Axis do medidor de MAT.
 * @default 203
 *
 * @param MAT Meter Y-Axis
 * @desc Definição Y-Axis do medidor de MAT.
 * @default 266
 * 	
 * @param AGI Number X-Axis
 * @desc Definição X-Axis do número de AGI.
 * @default 366
 *
 * @param AGI Number Y-Axis
 * @desc Definição Y-Axis do número de AGI.
 * @default 211
 *
 * @param AGI Meter X-Axis
 * @desc Definição X-Axis do medidor de AGI.
 * @default 361
 *
 * @param AGI Meter Y-Axis
 * @desc Definição Y-Axis do medidor de AGI.
 * @default 266
 * 	
 * @param DEF Number X-Axis
 * @desc Definição X-Axis do número de DEF.
 * @default 50
 *
 * @param DEF Number Y-Axis
 * @desc Definição Y-Axis do número de DEF.
 * @default 267
 *
 * @param DEF Meter X-Axis
 * @desc Definição X-Axis do medidor de DEF.
 * @default 45
 *
 * @param DEF Meter Y-Axis
 * @desc Definição Y-Axis do medidor de AGI.
 * @default 322
 * 				
 * @param MDF Number X-Axis
 * @desc Definição X-Axis do número de MDF.
 * @default 208
 *
 * @param MDF Number Y-Axis
 * @desc Definição Y-Axis do número de MDF.
 * @default 267
 *
 * @param MDF Meter X-Axis
 * @desc Definição X-Axis do medidor de MDF.
 * @default 203
 *
 * @param MDF Meter Y-Axis
 * @desc Definição Y-Axis do medidor de MDF.
 * @default 322
 * 		
 * @param LUK Number X-Axis
 * @desc Definição X-Axis do número de LUK.
 * @default 368
 *
 * @param LUK Number Y-Axis
 * @desc Definição Y-Axis do número de LUK.
 * @default 267
 *
 * @param LUK Meter X-Axis
 * @desc Definição X-Axis do medidor de LUK.
 * @default 361
 *
 * @param LUK Meter Y-Axis
 * @desc Definição Y-Axis do medidor de LUK.
 * @default 322
 * 
 * @param Weapon X-Axis
 * @desc Definição X-Axis da arma.
 * @default 7
 *
 * @param Weapon Y-Axis
 * @desc Definição Y-Axis do arma.
 * @default 347
 *		
 * @param Shield X-Axis
 * @desc Definição X-Axis do escudo.
 * @default 7
 *
 * @param Shield Y-Axis
 * @desc Definição Y-Axis do escudo.
 * @default 398
 *		
 * @param Helmet X-Axis
 * @desc Definição X-Axis do capacete.
 * @default 7
 *
 * @param Helmet Y-Axis
 * @desc Definição Y-Axis do capacete.
 * @default 449
 *	
 * @param Armor X-Axis
 * @desc Definição X-Axis da armadura.
 * @default 261
 *
 * @param Armor Y-Axis
 * @desc Definição Y-Axis da armadura.
 * @default 376
 *	
 * @param Accessory X-Axis
 * @desc Definição X-Axis do acessório.
 * @default 261
 *
 * @param Accessory Y-Axis
 * @desc Definição Y-Axis do acessório.
 * @default 427
 *	
 * @param Class X-Axis
 * @desc Definição X-Axis da classe.
 * @default 260
 *
 * @param Class Y-Axis
 * @desc Definição Y-Axis da classe.
 * @default 320
 *	
 * @param Profile X-Axis
 * @desc Definição X-Axis do Profile.
 * @default 0
 *
 * @param Profile Y-Axis
 * @desc Definição Y-Axis do Profile.
 * @default 505
 *	
 * @help  
 * =============================================================================
 * +++ MOG - Scene Status (v1.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Modifica a cena de status.
 *
 * =============================================================================
 * UTILIZAÇÃO
 * =============================================================================
 * As imagens do sistema deverão ser gravados na pasta.
 *
 * /img/menus/status/
 *
 * =============================================================================
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_SceneStatus = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_SceneStatus');  
	Moghunter.scStatus_BustX = Number(Moghunter.parameters['Bust X-Axis'] || 600);
	Moghunter.scStatus_BustY = Number(Moghunter.parameters['Bust Y-Axis'] || 0);
	Moghunter.scStatus_StatesX = Number(Moghunter.parameters['States X-Axis'] || 59);
	Moghunter.scStatus_StatesY = Number(Moghunter.parameters['States Y-Axis'] || 120);
	Moghunter.scStatus_ActorNameX = Number(Moghunter.parameters['Name X-Axis'] || 190);
	Moghunter.scStatus_ActorNameY = Number(Moghunter.parameters['Name Y-Axis'] || 103);
	Moghunter.scStatus_LevelX = Number(Moghunter.parameters['Level X-Axis'] || 290);
	Moghunter.scStatus_LevelY = Number(Moghunter.parameters['Level Y-Axis'] || 6);
	Moghunter.scStatus_ExpX = Number(Moghunter.parameters['Exp X-Axis'] || 440);
	Moghunter.scStatus_ExpY = Number(Moghunter.parameters['Exp Y-Axis'] || 6);
	Moghunter.scStatus_NExpX = Number(Moghunter.parameters['Next Exp X-Axis'] || 680);
	Moghunter.scStatus_NExpY = Number(Moghunter.parameters['Next Exp Y-Axis'] || 6);
	Moghunter.scStatus_HPNumberX = Number(Moghunter.parameters['HP Number X-Axis'] || 50);
	Moghunter.scStatus_HPNumberY = Number(Moghunter.parameters['HP Number Y-Axis'] || 155);
	Moghunter.scStatus_MeterHPX = Number(Moghunter.parameters['HP Meter X-Axis'] || 45);
	Moghunter.scStatus_MeterHPY = Number(Moghunter.parameters['HP Meter Y-Axis'] || 210);	
	Moghunter.scStatus_MPNumberX = Number(Moghunter.parameters['MP Number X-Axis'] || 208);
	Moghunter.scStatus_MPNumberY = Number(Moghunter.parameters['MP Number Y-Axis'] || 155);
	Moghunter.scStatus_MeterMPX = Number(Moghunter.parameters['MP Meter X-Axis'] || 203);
	Moghunter.scStatus_MeterMPY = Number(Moghunter.parameters['MP Meter Y-Axis'] || 210);	
	Moghunter.scStatus_TPNumberX = Number(Moghunter.parameters['TP Number X-Axis'] || 366);
	Moghunter.scStatus_TPNumberY = Number(Moghunter.parameters['TP Number Y-Axis'] || 155);
	Moghunter.scStatus_MeterTPX = Number(Moghunter.parameters['TP Meter X-Axis'] || 361);
	Moghunter.scStatus_MeterTPY = Number(Moghunter.parameters['TP Meter Y-Axis'] || 210);	
	Moghunter.scStatus_ATKNumberX = Number(Moghunter.parameters['ATK Number X-Axis'] || 50);
	Moghunter.scStatus_ATKNumberY = Number(Moghunter.parameters['ATK Number Y-Axis'] || 211);
	Moghunter.scStatus_MeterATKX = Number(Moghunter.parameters['ATK Meter X-Axis'] || 45);
	Moghunter.scStatus_MeterATKY = Number(Moghunter.parameters['ATK Meter Y-Axis'] || 266);	
	Moghunter.scStatus_MATNumberX = Number(Moghunter.parameters['MAT Number X-Axis'] || 208);
	Moghunter.scStatus_MATNumberY = Number(Moghunter.parameters['MAT Number Y-Axis'] || 211);
	Moghunter.scStatus_MeterMATX = Number(Moghunter.parameters['MAT Meter X-Axis'] || 203);
	Moghunter.scStatus_MeterMATY = Number(Moghunter.parameters['MAT Meter Y-Axis'] || 266);	
	Moghunter.scStatus_AGINumberX = Number(Moghunter.parameters['AGI Number X-Axis'] || 366);
	Moghunter.scStatus_AGINumberY = Number(Moghunter.parameters['AGI Number Y-Axis'] || 211);
	Moghunter.scStatus_MeterAGIX = Number(Moghunter.parameters['AGI Meter X-Axis'] || 361);
	Moghunter.scStatus_MeterAGIY = Number(Moghunter.parameters['AGI Meter Y-Axis'] || 266);				
	Moghunter.scStatus_DEFNumberX = Number(Moghunter.parameters['DEF Number X-Axis'] || 50);
	Moghunter.scStatus_DEFNumberY = Number(Moghunter.parameters['DEF Number Y-Axis'] || 267);
	Moghunter.scStatus_MeterDEFX = Number(Moghunter.parameters['DEF Meter X-Axis'] || 45);
	Moghunter.scStatus_MeterDEFY = Number(Moghunter.parameters['DEF Meter Y-Axis'] || 322);		
	Moghunter.scStatus_MDFNumberX = Number(Moghunter.parameters['MDF Number X-Axis'] || 208);
	Moghunter.scStatus_MDFNumberY = Number(Moghunter.parameters['MDF Number Y-Axis'] || 267);
	Moghunter.scStatus_MeterMDFX = Number(Moghunter.parameters['MDF Meter X-Axis'] || 203);
	Moghunter.scStatus_MeterMDFY = Number(Moghunter.parameters['MDF Meter Y-Axis'] || 322);		
	Moghunter.scStatus_LUKNumberX = Number(Moghunter.parameters['LUK Number X-Axis'] || 366);
	Moghunter.scStatus_LUKNumberY = Number(Moghunter.parameters['LUK Number Y-Axis'] || 267);
	Moghunter.scStatus_MeterLUKX = Number(Moghunter.parameters['LUK Meter X-Axis'] || 361);
	Moghunter.scStatus_MeterLUKY = Number(Moghunter.parameters['LUK Meter Y-Axis'] || 322);		
	Moghunter.scStatus_WeaponX = Number(Moghunter.parameters['Weapon X-Axis'] || 7);
	Moghunter.scStatus_WeaponY = Number(Moghunter.parameters['Weapon Y-Axis'] || 347);
	Moghunter.scStatus_ShieldX = Number(Moghunter.parameters['Shield X-Axis'] || 7);
	Moghunter.scStatus_ShieldY = Number(Moghunter.parameters['Shield Y-Axis'] || 398);	
	Moghunter.scStatus_HelmetX = Number(Moghunter.parameters['Helmet X-Axis'] || 7);
	Moghunter.scStatus_HelmetY = Number(Moghunter.parameters['Helmet Y-Axis'] || 449);	
	Moghunter.scStatus_ArmorX = Number(Moghunter.parameters['Armor X-Axis'] || 261);
	Moghunter.scStatus_ArmorY = Number(Moghunter.parameters['Armor Y-Axis'] || 376);	
	Moghunter.scStatus_AccX = Number(Moghunter.parameters['Accessory X-Axis'] || 261);
	Moghunter.scStatus_AccY = Number(Moghunter.parameters['Accessory Y-Axis'] || 427);
	Moghunter.scStatus_ClassX = Number(Moghunter.parameters['Class X-Axis'] || 260);
	Moghunter.scStatus_ClassY = Number(Moghunter.parameters['Class Y-Axis'] || 320);
	Moghunter.scStatus_ProfileX = Number(Moghunter.parameters['Profile X-Axis'] || 0);
	Moghunter.scStatus_ProfileY = Number(Moghunter.parameters['Profile Y-Axis'] || 505);
	
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Status
//==============================
ImageManager.loadMenusstatus = function(filename) {
    return this.loadBitmap('img/menus/status/', filename, 0, true);
};

//=============================================================================
// ** Scene Status
//=============================================================================

//==============================
// * create Background
//==============================
var _mog_scStatus_createBackground = Scene_Status.prototype.createBackground;
Scene_Status.prototype.createBackground = function() {
	_mog_scEquip_createBackground.call(this);
	this._field = new Sprite();
	this.addChild(this._field);	
};

//==============================
// * Create
//==============================
var _mog_scStatusM_create = Scene_Status.prototype.create;
Scene_Status.prototype.create = function() {
	_mog_scStatusM_create.call(this);
	//this.createBust();
	this.createLayout();
	this.createStates();
	//this.createMeters();
	this.resetPosition();
};

//==============================
// * Create Meters
//==============================
Scene_Status.prototype.createMeters = function() {
    this._meters = new MetersStatusM(this._actor);
	this._meters2 = new MetersStatusM(this._actor);
	this._field.addChild(this._meters);
	this._field.addChild(this._meters2);
};

//==============================
// * Create States
//==============================
Scene_Status.prototype.createStates = function() {
	this._states_data = [0,0,0];
	this._state_icon = new Sprite(ImageManager.loadSystem("IconSet"));
	this._state_icon.x = Moghunter.scStatus_StatesX;
	this._state_icon.y = Moghunter.scStatus_StatesY;
	this._state_iconOrg = [this._state_icon.x,this._state_icon.y];
	this._state_icon.visible = false;
	this.addChild(this._state_icon);
	this.refresh_states();	
};

//==============================
// * Create States
//==============================
Scene_Status.prototype.refresh_states = function() {
	this._states_data[0] = 0;
	this._states_data[2] = 0;
	this._state_icon.visible = false;
	if (this._actor.allIcons().length == 0) {this._states_data[1] = 0;return};
       if (this._actor.allIcons()[this._states_data[1]]) {	
		this._states_data[0] = this._actor.allIcons()[this._states_data[1]];
		this._state_icon.visible = true;
		var sx = this._states_data[0] % 16 * 32;
		var sy = Math.floor(this._states_data[0] / 16) * 32;
		this._state_icon.setFrame(sx, sy, 32, 32);
	   };
	this._states_data[1] += 1;
	if (this._states_data[1] >= this._actor.allIcons().length) {
		this._states_data[1] = 0
	};
};

//==============================
// * Update States
//==============================
Scene_Status.prototype.update_states = function() {
	this._states_data[2] += 1;
	if (this.need_refresh_states()) {this.refresh_states();};
	this._state_icon.x = this._state_iconOrg[0] + this._statusWindow.x;
	this._state_icon.y = this._state_iconOrg[1] + this._statusWindow.y;
	this._state_icon.opacity = this._statusWindow.contentsOpacity;
};	

//==============================
// * Update Meters
//==============================
Scene_Status.prototype.updateMeters = function() {	
	this._meters.x = this._statusWindow.x;
	this._meters.y =  this._statusWindow.y;
	this._meters.opacity = this._statusWindow.contentsOpacity;	
	this._meters2.x = this._statusWindow.x;
	this._meters2.y =  this._statusWindow.y;
	this._meters2.opacity = this._statusWindow.contentsOpacity;	
};

//==============================
// * Need Refresh States
//==============================
Scene_Status.prototype.need_refresh_states = function() {
	if (this._states_data[2] > 60) {return true};
	return false;
};	

//==============================
// * On Actor Change
//==============================
var _mog_scsStatusM_onActorChange = Scene_Status.prototype.onActorChange;
Scene_Status.prototype.onActorChange = function() {
	_mog_scsStatusM_onActorChange.call(this);
    this.resetPosition();
};

//==============================
// * reset Position
//==============================
Scene_Status.prototype.resetPosition = function() {
    //this.refreshBust();
	this._statusWindow.contentsOpacity = 0;
	this._statusWindow.x = 100;
	this._statusWindow.y = 32;
	this._statusWindow.width = Graphics.boxWidth - 128;
	this._layout.opacity = 0;
	this._layout.x = -100;
	//this._meters.setActor(this._actor);
	//this._meters2.setActor(this._actor);
	this.refresh_states();
};

//==============================
// * Create Layout
//==============================
Scene_Status.prototype.createLayout = function() {
	this._layout = new Sprite(ImageManager.loadMenusstatus("Layout"));
	this._field.addChild(this._layout);
};

//==============================
// * Create Bust
//==============================
Scene_Status.prototype.createBust = function() {
	this._bust = new Sprite();
	this._bust.anchor.x = 0.5;
	this._bust.x = Moghunter.scStatus_BustX;
	this._bust.y = Moghunter.scStatus_BustY;
	this._bust.org = [this._bust.x,this._bust.y]
	this._field.addChild(this._bust);
};

//==============================
// * refresh Bust
//==============================
Scene_Status.prototype.refreshBust = function() {
     this._bust.bitmap = ImageManager.loadMenusFaces4("Actor_" + this._actor._actorId);
	 this._bust.y = Graphics.boxHeight-200;
	 this._bust.opacity = 0;
};

//==============================
// * update Slide
//==============================
Scene_Status.prototype.updateSlide = function() {
	this._statusWindow.opacity = 0;
	this._statusWindow.contentsOpacity += 5;
	if (this._statusWindow.x > 64) {
		this._statusWindow.x -= 5;
		if (this._statusWindow.x <= 0) {this._statusWindow.x = 0};
	};
	this._layout.opacity += 5;
	if (this._layout.x < 0) {
		this._layout.x += 5;
		if (this._layout.x > 0) {this._layout.x = 0};
	};
	//this._bust.x = this._bust.org[0]
	//this._bust.opacity += 5;
	//var by = (Graphics.boxHeight - this._bust.height) + this._bust.org[1];
	//if (this._bust.y > by) {
	//	this._bust.y -= 20;
	//	if (this._bust.y < by) {this._bust.y = by};
	//};
};

//==============================
// * Update
//==============================

var _mog_scStatatusM_update = Scene_Status.prototype.update;
Scene_Status.prototype.update = function() {
	_mog_scStatatusM_update.call(this);
    this.updateSlide();
	if (this._state_icon) {this.update_states()};
	//if (this._meters) {this.updateMeters()};
};

//=============================================================================
// ** Window Status
//=============================================================================
  Window_Status.prototype.drawXparams = function(y) {
	var xparamText = ['命中','回避','暴击',,,,'反击'];
    var x = 600;
    var w = 120;
    var x2 = 720;
    var w2 = 60;
    var lineHeight = this.lineHeight();
    for (var i = 0; i < 7; i++) {
      if (xparamText[i]) {
        this.drawParamBackGround(x, y, x2 + w2 - x);
        this.changeTextColor(this.systemColor());
        this.drawText(xparamText[i], x, y, w);
        this.resetTextColor();
        var value = this._actor.xparam(i) * 100;
        this.drawText(value.toFixed(0)+'%', x2, y, w2, 'right');
        y += lineHeight;
      }
    }
  };
  
  Window_Status.prototype.drawElementResists = function(x,y,w) {
    var lineHeight = this.lineHeight();
	const elementResistIds = [0,1];
	const elementResistIconIds = [76,78];
	const elementName=['物理','魔法'];
	const resistFixed = 0;
	this.changeTextColor(this.systemColor());
	this.drawText('抗性', x,y, w, 'left');
	y+=lineHeight;
	this.resetTextColor();
    for (var i = 0; i < elementResistIds.length; i++) {
      this.drawParamBackGround(x, y, w);
      var elementId = +elementResistIds[i];
      this.drawIcon(elementResistIconIds[i], x, y);
	  this.drawText(elementName[i],x+ Window_Base._iconWidth,y);
      var n = this._actor.elementRate(elementId) * 100;
      this.drawText(n.toFixed(0) + '%', x+120,
                    y, 60, 'right');
      y += lineHeight;
    }
  };
  
  Window_Status.prototype.drawStateResists = function(x,y,w) {
    var lineHeight = this.lineHeight();
	var i1=0;
	var x1=x;
	var y2=y+lineHeight;
	const stateResistIds = [1,4,5,6,7,9,10,13,14,26,27,28,29,30,31];
	const resistFixed = 0;
	this.changeTextColor(this.systemColor());
	this.drawText('状态抵抗', x,y, w, 'left');
	this.resetTextColor();
	y += lineHeight;
    for (var i = 0; i < stateResistIds.length; i++) {
      //this.drawParamBackGround(x, y, w);
      var stateId = +stateResistIds[i];
      var n = this._actor.stateRate(stateId) * 100;
      if (this._actor.isStateResist(stateId)) n = 0;
	  if (n == 0){
		  i1++;
		  this.drawIcon($dataStates[stateId].iconIndex, x, y);
		  x += Window_Base._iconWidth;
		  if (i1>=10){y+=lineHeight;x=x1;i1=0;}
	  }
	  //else{this.drawIcon($dataStates[stateId].iconIndex, x, y);};
    }
	if (x==x1 && y ==y2){this.drawText('无',x,y,w,'left');}
  };
  
  Window_Status.prototype.drawParamBackGround = function(x, y, width) {
    this.contents.paintOpacity = 160;
    this.contents.fillRect(x, y + this.lineHeight() / 2, width,
                           this.lineHeight() / 2, this.gaugeBackColor());
    this.contents.paintOpacity = 255;
  };
//==============================
// * refresh
//==============================
/*
Window_Status.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
		this.contents.fontSize = 24;
		this.drawXparams(155);
		//this.drawElementResists(554,155+this.lineHeight()*7, 120);
		this.drawStateResists(554,155+this.lineHeight()*10,120);
        //this.drawText(this._actor.name(), Moghunter.scStatus_ActorNameX, Moghunter.scStatus_ActorNameY,120,"center");
		this.drawText("LV	"+this._actor.level, Moghunter.scStatus_LevelX, Moghunter.scStatus_LevelY,100,"center");	
		this.drawText("Exp	"+this._actor.currentExp(), Moghunter.scStatus_ExpX, Moghunter.scStatus_ExpY,100,"center");
	    var nexp = this._actor.nextRequiredExp();
        if (this._actor.isMaxLevel()) {nexp = '-------'};	
		this.drawText("To Next	"+nexp, Moghunter.scStatus_NExpX, Moghunter.scStatus_NExpY,100,"center");	
		this.contents.fontSize = 24;
		this.drawParameters(Moghunter.scStatus_HPNumberX, Moghunter.scStatus_HPNumberY);
		//this.drawText(this._actor.hp + " / " + this._actor.mhp, Moghunter.scStatus_HPNumberX, Moghunter.scStatus_HPNumberY,100,"right");
		//this.drawText(this._actor.mp + " / " + this._actor.mmp, Moghunter.scStatus_MPNumberX , Moghunter.scStatus_MPNumberY,100,"right");
		//this.drawText(this._actor.tp, Moghunter.scStatus_TPNumberX, Moghunter.scStatus_TPNumberY,100,"right");
		//this.drawText(this._actor.atk, Moghunter.scStatus_ATKNumberX, Moghunter.scStatus_ATKNumberY,100,"right");
		//this.drawText(this._actor.mat, Moghunter.scStatus_MATNumberX, Moghunter.scStatus_MATNumberY,100,"right");
		//this.drawText(this._actor.agi, Moghunter.scStatus_AGINumberX, Moghunter.scStatus_AGINumberY,100,"right");
		//this.drawText(this._actor.def, Moghunter.scStatus_DEFNumberX, Moghunter.scStatus_DEFNumberY,100,"right");
		//this.drawText(this._actor.mdf, Moghunter.scStatus_MDFNumberX, Moghunter.scStatus_MDFNumberY,100,"right");
		//this.drawText(this._actor.luk, Moghunter.scStatus_LUKNumberX, Moghunter.scStatus_LUKNumberY,100,"right");		
		this.drawItemName(this._actor.equips()[0], Moghunter.scStatus_WeaponX , Moghunter.scStatus_WeaponY);
		this.drawItemName(this._actor.equips()[1], Moghunter.scStatus_ShieldX, Moghunter.scStatus_ShieldY);
		this.drawItemName(this._actor.equips()[2], Moghunter.scStatus_HelmetX, Moghunter.scStatus_HelmetY);
		this.drawItemName(this._actor.equips()[3], Moghunter.scStatus_ArmorX, Moghunter.scStatus_ArmorY);
		this.drawItemName(this._actor.equips()[4], Moghunter.scStatus_AccX, Moghunter.scStatus_AccY);
		//this.drawActorClass(this._actor, Moghunter.scStatus_ClassX, Moghunter.scStatus_ClassY);
		this.drawTextEx(this._actor.profile(), Moghunter.scStatus_ProfileX, Moghunter.scStatus_ProfileY);	
		
    };
};
*/

Window_Status.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
		var y = 64 ;
        var lineHeight = this.lineHeight();
        this.drawBlock1(lineHeight * 0 + y);
        this.drawHorzLine(lineHeight * 1 + y);
        this.drawBlock2(lineHeight * 2 + y);
        //this.drawHorzLine(lineHeight * 6 + y);
        this.drawBlock3(lineHeight * 7 + y);
        //this.drawHorzLine(lineHeight * 13 + y);
        this.drawBlock4(lineHeight * 14 + y);
		this.drawXparams(155);
		//this.drawElementResists(640,155+this.lineHeight()*7, 120);
		this.drawStateResists(600,155+this.lineHeight()*7,120);
    }
};
Window_Status.prototype.drawBlock3 = function(y) {
    this.drawParameters(48, y);
    this.drawEquipments(320, y);
};
Window_Status.prototype.drawBlock2 = function(y) {
    this.drawActorFace(this._actor, 12, y);
    this.drawBasicInfo(204, y);
    this.drawExpInfo(204, y);
};

Window_Status.prototype.drawExpInfo = function(x, y) {
    var lineHeight = this.lineHeight();
    var expTotal = TextManager.expTotal.format(TextManager.exp);
    var expNext = TextManager.expNext.format(TextManager.level);
    var value1 = this._actor.currentExp();
    var value2 = value1 + this._actor.nextRequiredExp();
    var rate = value1 / value2;
    if (this._actor.isMaxLevel()) {
        value1 = 'MAX';
        value2 = 'MAX';
		rate = 1;
    }
	y+=lineHeight;
	var color1 = this.textColor(28);
    var color2 = this.textColor(29);
    this.drawGauge(x, y, 270, rate, color1, color2);
	//this.drawIcon(548,x,y+ lineHeight * 3);
	//this.drawIcon(549,x+32,y+ lineHeight * 3);
    this.changeTextColor(this.systemColor());
    this.drawText('EXP', x, y, 270);
    this.changeTextColor(this.normalColor());
    //this.drawText(expNext, x, y + lineHeight * 3, 270);
    //this.resetTextColor();
    //this.drawText(value1, x, y + lineHeight * 2, 270, 'right');
    this.drawText(Math.round(rate*100)+'%', x, y, 270, 'right');
};
//=============================================================================
// * Meters Status M
//=============================================================================
function MetersStatusM() {
    this.initialize.apply(this, arguments);
};

MetersStatusM.prototype = Object.create(Sprite.prototype);
MetersStatusM.prototype.constructor = MetersStatusM;

//==============================
// * Initialize
//==============================
MetersStatusM.prototype.initialize = function(actor) {
    Sprite.prototype.initialize.call(this);	
	this.loadBitmaps();
    this._actor = actor;	
};

//==============================
// * Set Actor
//==============================
MetersStatusM.prototype.setActor = function(actor) {
    this._actor = actor;
	this.update();
};


//==============================
// * Load Bitmaps
//==============================
MetersStatusM.prototype.loadBitmaps = function() {
    this._meterImg1 = ImageManager.loadMenusstatus("Meter1");
	this._meterImg2 = ImageManager.loadMenusstatus("Meter2");
	this._meterImg3 = ImageManager.loadMenusstatus("Meter3");
};

//==============================
// * create Meters
//==============================
MetersStatusM.prototype.createMeters = function() {
    this._meters = [];
	this._meters2 = [];
	this._metersAni = [];
	for (var i = 0; i < 9; i++) {
		 if (i < 3) {
		    this._meters[i] = new Sprite(this._meterImg3);
			this._meters2[i] = new Sprite(this._meterImg1);
	     } else {
		    this._meters[i] = new Sprite(this._meterImg3);
			this._meters2[i] = new Sprite(this._meterImg2);
	     };
		 this._metersAni[i] = 0;
		 this.addChild(this._meters[i]);
		 this.addChild(this._meters2[i]);
	};
};

//==============================
// * update Meters
//==============================
MetersStatusM.prototype.updateMeters = function() {
	for (var i = 0; i < this._meters.length; i++) {
		 var par1 = this._actor.hp;
		 var par2 = this._actor.mhp;
		 if (i === 0) {
		    var x = Moghunter.scStatus_MeterHPX;
			var y = Moghunter.scStatus_MeterHPY;
		    par1 = this._actor.hp;
		    par2 = this._actor.mhp;			
		 } else if (i === 1) {
		    var x = Moghunter.scStatus_MeterMPX;
			var y = Moghunter.scStatus_MeterMPY;
		    par1 = this._actor.mp;
		    par2 = this._actor.mmp;					
		 } else if (i === 2) {
		    var x = Moghunter.scStatus_MeterTPX;
			var y = Moghunter.scStatus_MeterTPY;
		    par1 = this._actor.tp;
		    par2 = 100;					
		 } else if (i === 3) {
		    var x = Moghunter.scStatus_MeterATKX;
			var y = Moghunter.scStatus_MeterATKY;
		    par1 = this._actor.atk;
		    par2 = this._actor.level*5+100;//paramMax();//修改了显示的最大值，不过可能出BUG……				
		 } else if (i === 4) {
		    var x = Moghunter.scStatus_MeterMATX;
			var y = Moghunter.scStatus_MeterMATY;
		    par1 = this._actor.mat;
		    par2 = this._actor.level*5+100;//paramMax();					
		 } else if (i === 5) {
		    var x = Moghunter.scStatus_MeterAGIX;
			var y = Moghunter.scStatus_MeterAGIY;
		    par1 = this._actor.agi;
		    par2 = this._actor.level*5+100;//paramMax();						
		 } else if (i === 6) {
		    var x = Moghunter.scStatus_MeterDEFX;
			var y = Moghunter.scStatus_MeterDEFY;
		    par1 = this._actor.def;
		    par2 = this._actor.level*5+100;//paramMax();						
		 } else if (i === 7) {
		    var x = Moghunter.scStatus_MeterMDFX;
			var y = Moghunter.scStatus_MeterMDFY;	
		    par1 = this._actor.mdf;
		    par2 = this._actor.level*5+100;//paramMax();						
		 } else  {
		    var x = Moghunter.scStatus_MeterLUKX;
			var y = Moghunter.scStatus_MeterLUKY;
		    par1 = this._actor.luk;
		    par2 = this._actor.level*5+100;//paramMax();					
		 };			 
		 this._meters[i].x = this._meters2[i].bitmap.width*par1/par2+x;//宽度
		 this._meters[i].y = y;	
		 this._meters2[i].x = x;//宽度
		 this._meters2[i].y = y;			 
		 this.updateFlow(this._meters[i],par1,par2,i);
		 this.updateStable(this._meters2[i],par1,par2,i);
	};
};

//==============================
// * update Flow
//==============================
MetersStatusM.prototype.updateFlow = function(sprite,par1,par2,i) {
    var cw = sprite.bitmap.width// / 3;
	var ch = sprite.bitmap.height;
	//var cw2 = cw * 2;
	var wd = 4//cw * par1 / par2;
	sprite.setFrame(this._metersAni[i],0,wd,ch);
	this._metersAni[i] += 4;
	if (this._metersAni[i] > cw) {this._metersAni[i] = 0};
};
MetersStatusM.prototype.updateStable = function(sprite,par1,par2,i) {
    var cw = sprite.bitmap.width// / 3;
	var ch = sprite.bitmap.height;
	var cw2 = cw * 2;
	var wd = cw * par1 / par2;
	sprite.setFrame(0,0,wd,ch);
	//this._metersAni[i] += 4;
	//if (this._metersAni[i] > cw2) {this._metersAni[i] = 0};
};
//==============================
// * Update
//==============================
MetersStatusM.prototype.update = function() {
    Sprite.prototype.update.call(this);	
    if (!this._meters && this._meterImg1.isReady()) {this.createMeters()};
    if (this._meters && this._actor) {this.updateMeters()};
};