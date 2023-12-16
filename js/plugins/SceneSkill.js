/*:
 * @plugindesc 自己重写的Scene skill&任务系统，需要YEP skill core插件
 * @author Nighto
 */
 
//修正技能页面
ImageManager.loadMenusskill = function(filename) {
    return this.loadBitmap('img/menus/skill/', filename, 0, true);
};

Scene_Skill.prototype.create = function() {
    Scene_ItemBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createSkillTypeWindow();
    this.createStatusWindow();
    this.createItemWindow();
    this.createActorWindow();
    this.refreshActor();
	this._skillTypeWindow.deactivate();
	this._skillTypeWindow.visible = false;
	this._helpWindow.visible = false;
    this._itemWindow.activate();
	this._itemWindow.selectLast();
};

Scene_Skill.prototype.createStatusWindow = function() {
    var wx = 128;
    var wy = this._helpWindow.height;
    var ww = Graphics.boxWidth - wx;
    var wh = this._skillTypeWindow.height;
    this._statusWindow = new Window_SkillStatus(wx/2, wy, ww, wh);
    this.addWindow(this._statusWindow);
};


var _mog_scSkill_createBackground = Scene_Skill.prototype.createBackground;
Scene_Skill.prototype.createBackground = function() {
	_mog_scSkill_createBackground.call(this);
	this._layImg = (ImageManager.loadMenusskill("Layout"));
	this._layout = new Sprite(this._layImg);
	this.addChild(this._layout);	
};

Scene_Skill.prototype.onActorChange = function() {
    this.refreshActor();
	this._skillTypeWindow.deactivate();
    this._itemWindow.activate();
	//this._itemWindow.selectLast();
};

Scene_Skill.prototype.createItemWindow = function() {
    var wx = 64;
    var wy = this._statusWindow.y + this._statusWindow.height;
    var ww = Graphics.boxWidth / 2 - 64;
    var wh = Graphics.boxHeight - wy;
    this._itemWindow = new Window_SkillList(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.popScene.bind(this));
	this._itemWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._itemWindow.setHandler('pageup',   this.previousActor.bind(this));
    this._skillTypeWindow.setSkillWindow(this._itemWindow);
    this.addWindow(this._itemWindow);
	
	var wx = this._itemWindow.width + 64;
    var wy = this._itemWindow.y;
    var ww = Graphics.boxWidth - wx;
    var wh = this._itemWindow.height;
    this._infoWindow = new Window_SkillInfo(wx, wy, ww, wh);
    this._itemWindow.setInfoWindow(this._infoWindow);
    this.addWindow(this._infoWindow);
};

Window_SkillList.prototype.setInfoWindow = function(infoWindow) {
    this._infoWindow = infoWindow;
    this.update();
};

//==============================
// * update Help
//==============================
Window_SkillList.prototype.updateHelp = function() {
	if ($gameParty.inBattle()) {
        this.setHelpWindowItem(this.item());
    } else {
        this._infoWindow.setItem(this.item());
    }
};

//==============================
// * Refresh
//==============================
Window_SkillList.prototype.refresh = function() {
    this.makeItemList();
    this.createContents();
    this.drawAllItems();
};

//==============================
// * update
//==============================
var _mog_WindowSkillList_update = Window_SkillList.prototype.update;
Window_SkillList.prototype.update = function() {
	if (this.contentsOpacity != 255) {return};
    _mog_WindowSkillList_update.call(this);
	this.opacity = 0;
};

//===


function Window_SkillInfo() {
    this.initialize.apply(this, arguments);
}

Window_SkillInfo.prototype = Object.create(Window_Base.prototype);
Window_SkillInfo.prototype.constructor = Window_SkillInfo;

Window_SkillInfo.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._item = null;
    this.deactivate();
    this.refresh();
};

Window_SkillInfo.prototype.setItem = function(item) {
    if (this._item === item) return;
    this._item = item;
    this.refresh();
};

Window_SkillInfo.prototype.refresh = function() {
    this.contents.clear();
    var dy = 0;
    if (!this._item) return dy;
    this.preInfoEval();
    this.drawSkillInfo(dy);
};


Window_SkillInfo.prototype.drawPreSkillInfo = function(dy) {
    return dy;
};

Window_SkillInfo.prototype.drawSkillInfo = function(dy) {
    var dx = this.textPadding();
    var dw = this.contents.width - this.textPadding() * 2;
	var dh = this.contents.fontSize + 8;
	this.drawDarkRect(dx,dy,dw-64,dh);
    this.resetFontSettings();
    this.drawItemName(this._item, dx, dy, dw);
	dy += this.contents.fontSize + 8;
	dy += this.contents.fontSize + 8;
	//var item = this._item;
	this.drawInfoTextTop(dy);

    return;
};


Window_SkillInfo.prototype.drawDarkRect = function(dx, dy, dw, dh) {
    var color = this.gaugeBackColor();
    this.changePaintOpacity(false);
    this.contents.fillRect(dx + 1, dy + 1, dw - 2, dh - 2, color);
    this.changePaintOpacity(true);
};

Window_SkillInfo.prototype.drawInfoTextTop = function(dy) {
    var item = this._item;
    if (item.infoTextTop === undefined) {
      return dy; //item.infoTextTop = '';//item.infoTextTop = DataManager.getBaseItem(item).infoTextTop;
    }
    if (item.infoTextTop === '') return dy;
    var info = item.infoTextTop.split(/[\r\n]+/);
    for (var i = 0; i < info.length; ++i) {
      var line = info[i];
      this.resetFontSettings();
      this.drawTextEx(line, this.textPadding(), dy);
      dy += this.contents.fontSize + 8;
    }
    return dy;
};

Window_SkillInfo.prototype.drawInfoTextBottom = function(dy) {
    var item = this._item;
    if (item.infoTextBottom === undefined) {
      item.infoTextBottom = DataManager.getBaseItem(item).infoTextBottom;
    }
    if (item.infoTextBottom === '') return dy;
    var info = item.infoTextBottom.split(/[\r\n]+/);
    for (var i = 0; i < info.length; ++i) {
      var line = info[i];
      this.resetFontSettings();
      this.drawTextEx(line, this.textPadding(), dy);
      dy += this.contents.fontSize + 8;
    }
    return dy;
};

Window_SkillInfo.prototype.preInfoEval = function() {
    var item = this._item;
    if (item.infoEval === undefined) {
      item.infoEval = DataManager.getBaseItem(item).infoEval;
    }
    if (item.infoEval === '') return;
    var item = this._item;
    var code = item.infoEval;
    try {
      eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'ITEM WINDOW PRE INFO EVAL ERROR');
    }
};


//任务写在这里了。
