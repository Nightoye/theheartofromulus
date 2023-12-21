/*:
 * @plugindesc 在战斗中显示状态的脚本
 * @author Nighto
 */

// 说明：因为非常简单就不额外在plugin.js里面增加属性了，需要yep的一系列plugin……

function Window_BattlerState() {
    this.initialize.apply(this, arguments);
}

Window_BattlerState.prototype = Object.create(Window_Base.prototype);
Window_BattlerState.prototype.constructor = Window_BattlerState;

Window_BattlerState.prototype.initialize = function(numLines) {
    var width = 724;//窗口的宽度
	var wx = 0;//窗口 X
	var wy = 0;//窗口 Y
    var height = this.fittingHeight(numLines || 1);
    Window_Base.prototype.initialize.call(this, wx, wy, width, height);
	this.windowskin = ImageManager.loadSystem('Window2');
};

Window_BattlerState.prototype.refresh = function() {
    this.contents.clear();
};

Window_BattlerState.prototype.setBattler = function(battler) {
    this.contents.clear();
    this.resetFontSettings();
	var action = BattleManager.inputtingAction();
    if (action.isForAll()){
		BattleManager.startAllSelection();
      //需要yep battle core
    }
	this.drawBattler(battler);
	this.show();
};

Window_BattlerState.prototype.setEnemy = function(index) {
    this.contents.clear();
    this.resetFontSettings();
	var battler = $gameTroop.members()[index];
	this.drawBattler(battler);
	this.show();
};

Window_BattlerState.prototype.setActor = function(index) {
    this.contents.clear();
    this.resetFontSettings();
	var battler = $gameParty.members()[index];
	this.drawBattler(battler);
	this.show();
    
};

Window_BattlerState.prototype.specialSelectionText = function(action) {
    BattleManager.resetSelection();
    if (!action) return false;
    return !action.needsSelection();
};

Window_BattlerState.prototype.drawBattler = function(battler) {
	var wy = this.textPadding();
	var wx = 0;
	if (battler.buffLength() > 0) this.height = this.fittingHeight(3 + battler.states().length);
	else  this.height = this.fittingHeight(2 + battler.states().length);
	this.createContents();
    this.contents.clear();

	this.drawText(battler.name(), wx,wy,this.contents.width);
	this.drawActorIcons(battler, wx + 320, wy, 320);
	wy += this.lineHeight();

	this.drawActorHp(battler,wx,wy,192);
	this.drawActorMp(battler,wx+200,wy,192);
	wy += this.lineHeight();
	
	this.contents.fontSize = 20;	
	if (battler.buffLength() > 0){
		//draw buff
		var text = '';
		var buff_name = ['HP','MP','攻击','防御','法攻','法防','速度','幸运'];
		
		for (var i=0; i<= 7; i++) {	//buff
			//if battler.isBuffAffected(i){
				var value = battler.paramBuffRate(i);//需要yep state core
				if (value != undefined && value != 1){	
					value = Math.floor(value * 100) + '%';
					text += buff_name[i];
					text += value + "  ";
				}
			//}
		}
		this.drawText(text, wx, wy, this.contents.width);
		wy += this.lineHeight();
	}

	for (i=0; i < battler.states().length; i++)
	{
		var state = $dataStates[battler.states()[i].id];
		this.drawIcon(state.iconIndex, wx,wy);
		this.drawText(state.name + ': ' + state.message1,wx+Window_Base._iconWidth,wy,this.contents.width);
		wy += this.lineHeight();
	}
    return;
};

New_Scene_Battle_createHelpWindow = Scene_Battle.prototype.createHelpWindow;
Scene_Battle.prototype.createHelpWindow = function() {
	New_Scene_Battle_createHelpWindow.call(this);
    this._stateWindow = new Window_BattlerState();
    this._stateWindow.visible = false;
	this.addWindow(this._stateWindow);
};

New_Scene_Battle_selectActorSelection = Scene_Battle.prototype.selectActorSelection;
Scene_Battle.prototype.selectActorSelection = function() {
	New_Scene_Battle_selectActorSelection.call(this);
	//以下新增
	this._helpWindow.hide();
	this._actorWindow.setHelpWindow(this._stateWindow);
	this._stateWindow.setActor(this._actorWindow.index());
};

New_Scene_Battle_selectEnemySelection = Scene_Battle.prototype.selectEnemySelection;
Scene_Battle.prototype.selectEnemySelection = function() {
	New_Scene_Battle_selectEnemySelection.call(this);
	//以下新增
	this._helpWindow.hide();
	this._enemyWindow.setHelpWindow(this._stateWindow);
	this._stateWindow.setEnemy(this._enemyWindow.index());
};

New_Scene_Battle_onActorOk = Scene_Battle.prototype.onActorOk;
Scene_Battle.prototype.onActorOk = function() {
	New_Scene_Battle_onActorOk.call(this);
	//	以下新增
	this._stateWindow.hide();
};

New_Scene_Battle_onActorCancel = Scene_Battle.prototype.onActorCancel;
Scene_Battle.prototype.onActorCancel = function() {
	New_Scene_Battle_onActorCancel.call(this);
	// 以下新增
	this._stateWindow.hide();
};

New_Scene_Battle_onEnemyOk = Scene_Battle.prototype.onEnemyOk;
Scene_Battle.prototype.onEnemyOk = function() {
	New_Scene_Battle_onEnemyOk.call(this);
	//	以下新增
	this._stateWindow.hide();
};

New_Scene_Battle_onEnemyCancel = Scene_Battle.prototype.onEnemyCancel;
Scene_Battle.prototype.onEnemyCancel = function() {
	New_Scene_Battle_onEnemyCancel.call(this);
	// 以下新增
	this._stateWindow.hide();
};


