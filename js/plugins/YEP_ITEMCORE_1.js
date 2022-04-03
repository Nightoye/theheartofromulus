/*:
 * @plugindesc 调整ITEM INFO和物品栏
 * @author N
 */
//Window_ItemInfo

function Window_ItemInfo() {
	this.initialize.apply(this, arguments);
}

Window_ItemInfo.prototype = Object.create(Window_Base.prototype);
Window_ItemInfo.prototype.constructor = Window_ItemInfo;

Window_ItemInfo.prototype.initialize = function(x, y, width, height) {
	Window_Base.prototype.initialize.call(this, x, y, width, height);
	this._item = null;
	this.deactivate();
	this.refresh();
};

Window_ItemInfo.prototype.setItem = function(item) {
	if (this._item === item) return;
	this._item = item;
	this.refresh();
};

Window_ItemInfo.prototype.refresh = function() {
	this.contents.clear();
	var dy = 0;
	if (!this._item) return dy;
	this.preInfoEval();
	dy = this.drawPreItemInfo(dy);
	dy = this.drawItemInfo(dy);
	dy = this.drawItemInfoA(dy);
	dy = this.drawItemInfoB(dy);
	dy = this.drawItemInfoC(dy);
	dy = this.drawItemInfoD(dy);
	dy = this.drawItemInfoE(dy);
	return this.drawItemInfoF(dy);
};

Window_ItemInfo.prototype.preInfoEval = function() {
	var item = this._item;
	if (item.infoEval === undefined) {
	  item.infoEval = DataManager.getBaseItem(item).infoEval;
	}
	if (item.infoEval === '') return;
	var weapon = this._item;
	var armor = this._item;
	var s = $gameSwitches._data;
	var v = $gameVariables._data;
	var code = item.infoEval;
	try {
	  eval(code);
	} catch (e) {
	  Yanfly.Util.displayError(e, code, 'ITEM WINDOW PRE INFO EVAL ERROR');
	}
};

Window_ItemInfo.prototype.drawPreItemInfo = function(dy) {
	return dy;
};

Window_ItemInfo.prototype.drawItemInfo = function(dy) {
	var dx = this.textPadding();
	var dw = this.contents.width - this.textPadding() * 2;
	this.resetFontSettings();
	this.drawItemName(this._item, dx, dy, dw);
	return dy + this.lineHeight();
};

Window_ItemInfo.prototype.drawItemInfoA = function(dy) {
	dy = this.drawInfoTextTop(dy);
	return dy;
};

Window_ItemInfo.prototype.drawItemInfoB = function(dy) {
	dy = this.drawItemStatus(dy);
	return dy;
};

Window_ItemInfo.prototype.drawItemInfoC = function(dy) {
	return dy;
};

Window_ItemInfo.prototype.drawItemInfoD = function(dy) {
	return dy;
};

Window_ItemInfo.prototype.drawItemInfoE = function(dy) {
	return dy;
};

Window_ItemInfo.prototype.drawItemInfoF = function(dy) {
	dy = this.drawInfoTextBottom(dy);
	return dy;
};

Window_ItemInfo.prototype.drawDarkRect = function(dx, dy, dw, dh) {
	var color = this.gaugeBackColor();
	this.changePaintOpacity(false);
	this.contents.fillRect(dx + 1, dy + 1, dw - 2, dh - 2, color);
	this.changePaintOpacity(true);
};

Window_ItemInfo.prototype.drawInfoTextTop = function(dy) {
	var item = this._item;
	if (item.infoTextTop === undefined) {
	  item.infoTextTop = DataManager.getBaseItem(item).infoTextTop;
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

Window_ItemInfo.prototype.drawInfoTextBottom = function(dy) {
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

//下面为新增
Window_ItemInfo.prototype.resetFontSettings = function() {
    this.contents.fontFace = this.standardFontFace();
    //this.contents.fontSize = this.standardFontSize();
    this.resetTextColor();
};

Window_ItemInfo.prototype.drawItemStatus = function(dy) {
	if (!this._item) return dy;
	var item = this._item;
	var dw = this.contents.width-36;
	var dx = this.textPadding(); 
	this.contents.fontSize = 22;
	this.changeTextColor(this.systemColor());
	if (item.price > 0){
	this.drawText('价格',dx,dy,dw);
	this.changeTextColor(this.normalColor());
	this.drawText(item.price,dx,dy,dw,'right');	}
	else{
		this.drawText('不可交易',dx,dy,dw);
	}
	dy += this.lineHeight();
	var text = '';
	if(DataManager.isItem(item)){
		this.changeTextColor(this.systemColor());
		this.drawText('使用对象',dx,dy,dw);
		this.changeTextColor(this.normalColor());
		text = '无';
		switch (item.scope){
		case 1: text = '单个敌人';
		break;
		case 2: text = '全体敌人';
		break;
		case 3: text = '1×随机敌人';
		break;
		case 4: text = '2×随机敌人';
		break;
		case 5: text = '3×随机敌人';
		break;
		case 6: text = '4×随机敌人';
		break;
		case 7: text = '单个队友';
		break;
		case 8: text = '全体队友';
		break;
		case 9: text = '单个队友（战斗不能）';
		break;
		case 10: text = '全体队友（战斗不能）';
		break;
		case 11: text = '使用者';
		break;
		}
		this.drawText(text,dx,dy,dw,'right');
		dy += this.lineHeight();
	}
	if(DataManager.isWeapon(item)){
		this.changeTextColor(this.systemColor());
		this.drawText('类型',dx,dy,dw);
		this.changeTextColor(this.normalColor());
		text = String($dataSystem.weaponTypes[item.wtypeId]);
		this.drawText(text,dx,dy,dw,'right');
		dy += this.lineHeight();
		for (var i = 0; i < 8; ++i) {
			if (item.params[i] > 0){
				this.changeTextColor(this.powerUpColor());
				this.drawText(TextManager.param(i), dx, dy, dw);
				text = Yanfly.Util.toGroup(item.params[i]);
				text = '+' + text;
				this.drawText(text, dx, dy, dw, 'right');
				dy += this.lineHeight();
			}
			if (item.params[i] < 0){
				this.changeTextColor(this.powerDownColor());
				this.drawText(TextManager.param(i), dx, dy, dw);
				text = Yanfly.Util.toGroup(item.params[i]);
				this.drawText(text, dx, dy, dw, 'right');
				dy += this.lineHeight();
			}
		}
	}
	if(DataManager.isArmor(item)){
		this.changeTextColor(this.systemColor());
		this.drawText('类型',dx,dy,dw);
		this.changeTextColor(this.normalColor());
		text = String($dataSystem.equipTypes[item.etypeId]);
		this.drawText(text,dx,dy,dw,'right');
		dy += this.lineHeight();
		for (var i = 0; i < 8; ++i) {
			if (item.params[i] > 0){
				this.changeTextColor(this.powerUpColor());
				this.drawText(TextManager.param(i), dx, dy, dw);
				text = Yanfly.Util.toGroup(item.params[i]);
				text = '+' + text;
				this.drawText(text, dx, dy, dw, 'right');
				dy += this.lineHeight();
			}
			if (item.params[i] < 0){
				this.changeTextColor(this.powerDownColor());
				this.drawText(TextManager.param(i), dx, dy, dw);
				text = Yanfly.Util.toGroup(item.params[i]);
				this.drawText(text, dx, dy, dw, 'right');
				dy += this.lineHeight();
			}
		}
	}
   return dy;
};

//=============================================================================
// Scene_Item
//=============================================================================

Yanfly.Item.Scene_Item_createItemWindow = Scene_Item.prototype.createItemWindow;
Scene_Item.prototype.createItemWindow = function() {
	Yanfly.Item.Scene_Item_createItemWindow.call(this);
	this.createInfoWindow();
};

Scene_Item.prototype.createInfoWindow = function() {
	var wx = this._itemWindow.width+this._itemWindow.x-4;
	var wy = this._itemWindow.y;
	var ww = this._itemWindow.width+4;
	var wh = this._itemWindow.height;
	this._infoWindow = new Window_ItemInfo(wx, wy, ww, wh);
	this._infoWindow.opacity = 0;
	this._itemWindow.setInfoWindow(this._infoWindow);
	this.addWindow(this._infoWindow);
};

Yanfly.Item.Scene_Item_onItemCancel = Scene_Item.prototype.onItemCancel;
Scene_Item.prototype.onItemCancel = function() {
	Yanfly.Item.Scene_Item_onItemCancel.call(this);
	this._infoWindow.setItem(null);
};

//=============================================================================
// Window_ItemListM
//=============================================================================

Window_ItemListM.prototype.setInfoWindow = function(infoWindow) {
	this._infoWindow = infoWindow;
	this.update();
};

Yanfly.Item.Window_ItemList_updateHelp = Window_ItemListM.prototype.updateHelp;
Window_ItemListM.prototype.updateHelp = function() {
	Yanfly.Item.Window_ItemList_updateHelp.call(this);
	this._infoWindow.setItem(this.item());
};