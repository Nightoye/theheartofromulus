/*:
 * @plugindesc 一些公式调整，注意放在顶端
 * @author Nighto
 */

//Game_Party.prototype.maxBattleMembers = function() {
//   return 3;
//};
//可以调整队伍人数，虽然现在弄已经来不及了，但以后可以设置。三人组其实比较符合最初的构思……

//战斗中增加人数的时候刷新状态框，需要YEP_BattleStatus
Game_Party.prototype.addActor = function(actorId) {
    if (!this._actors.contains(actorId)) {
        this._actors.push(actorId);
        $gamePlayer.refresh();
        $gameMap.requestRefresh();
		if ($gameParty.inBattle()){
			BattleManager._statusWindow.width += 200;
			BattleManager._statusWindow._faceContents.bitmap.clear();
			BattleManager._statusWindow.createContents();
		}
    }
};

 //更改window_help的skin
 Window_Help.prototype.loadWindowskin = function() {
    this.windowskin = ImageManager.loadSystem('Window2');
};
 //更改装备栏物品的颜色
Window_ItemList.prototype.drawItem = function(index) {
    var item = this._data[index];
    if (item) {
        var numberWidth = this.numberWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.changePaintOpacity(this.isEnabled(item));
		this.setItemTextColor(item);
        this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
        this.drawItemNumber(item, rect.x, rect.y, rect.width);
        this.changePaintOpacity(1);
    }
};

 //更改物品指令以免与MOG menu插件冲突
Window_ActorCommand.prototype.addItemCommand = function() {
    this.addCommand("物品", 'item');
};
/*
//调整掉率，与幸运值有关
Game_Enemy.prototype.dropItemRate = function() {
	return $gameParty.gainItemRate();
};

//队伍掉率
Game_Party.prototype.gainItemRate = function() {
	var rate = 1;
	if (this.hasDropItemDouble()){rate +=1;}
	rate+=this.leader().luk * 0.01;
	return rate;
};
*/
Game_Action.prototype.itemHit = function(target) {
	if (this.isPhysical() || this.isMagical()) {
		return this.item().successRate * 0.01 * this.subject().hit;
	} else {
		return this.item().successRate * 0.01;
	}
};
//改造命中率，魔法命中=物理命中
//MEV魔法回避率固定

Game_Action.prototype.itemCri = function(target) {
	return this.item().damage.critical ? Math.max(this.subject().cri - target.cev, 0) : 0;
};
//暴击率直接改为减法计算，原本的乘法计算太蛋疼了……


Game_Action.prototype.apply = function(target) {
	var result = target.result();
	this.subject().clearResult();
	result.clear();
	result.used = this.testApply(target);
	result.evaded = (result.used && Math.random() >= this.itemHit(target)-this.itemEva(target));
	//result.evaded = (!result.missed && Math.random() < this.itemEva(target));
	result.physical = this.isPhysical();
	result.drain = this.isDrain();
	if (result.isHit()) {
		if (this.item().damage.type > 0) {
			result.critical = (Math.random() < this.itemCri(target));
			var value = this.makeDamageValue(target, result.critical);
			this.executeDamage(target, value);
		}
		this.item().effects.forEach(function(effect) {
			this.applyItemEffect(target, effect);
		}, this);
		this.applyItemUserEffect(target);
	}
};
//修改：命中+回避的计算同样改为减法

//修改反击的技能
COUNTER_SKILL_ID=3;
COUNTER_MAGIC_ID=4;
//余下见YEP_BATTLEENGINECORE.js

//临时


Window_Base.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawTextEx(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
    }
};

//修改地图选项中显示的物品类型
Window_EventItem.prototype.includes = function(item) {
    var itypeId = $gameMessage.itemChoiceItypeId();
	if (DataManager.isItem(item) && itypeId === 3 && item.customCategory === 'material'){
		return true;
	}
    return DataManager.isItem(item) && item.itypeId === itypeId && item.customCategory === '';
};

//显示物品
Window_ItemCategory.prototype.makeCommandList = function() {
    this.addCommand("物品",    'item');
    this.addCommand("武器",  'weapon');
    this.addCommand("防具",   'armor');
    this.addCommand("关键物品", 'keyItem');
};

//贩卖时不显示无法卖的东西
Window_ShopSell.prototype.includes = function(item) {
    switch (this._category) {
    case 'item':
        return DataManager.isItem(item) && item.itypeId === 1 && this.isEnabled(item);
    case 'weapon':
        return DataManager.isWeapon(item) && this.isEnabled(item);
    case 'armor':
        return DataManager.isArmor(item) && this.isEnabled(item);
    case 'keyItem':
        return DataManager.isItem(item) && item.itypeId === 2 && this.isEnabled(item);
    default:
        return false;
    }
};


//修改选项位置，同时修改了YEP Message Core

Window_ChoiceList.prototype.updatePlacement = function() {
    var positionType = $gameMessage.choicePositionType();
    var messageY = this._messageWindow.y;
    this.width = this.windowWidth();
    this.height = this.windowHeight();
    switch (positionType) {
    case 0:
		this.x = this._messageWindow.x + this._messageWindow.width/2 - this.width/2;
        //this.x = this._messageWindow.x;
        break;
    case 1:
        this.x = this._messageWindow.x + this._messageWindow.width/2 - this.width/2;
        break;
    case 2:
		this.x = this._messageWindow.x + this._messageWindow.width/2 - this.width/2;
        //this.x = this._messageWindow.x + this._messageWindow.width - this.width; //不想设置右边了随意吧
        break;
    }
        this.y = messageY + this._messageWindow.height;
		//this.y = Graphics.boxHeight - this._messageWindow.height - this.height;
};

//修改命令增加待机和逃跑选项
Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addAttackCommand();
        this.addSkillCommands();
        this.addGuardCommand();
        this.addItemCommand();
		this.addWaitCommand();
		this.addEscapeCommand();
    }
};

Window_ActorCommand.prototype.addWaitCommand = function() {
	if ($gameSwitches.value(18)==true){
    this.addCommand("对话", 'wait');
	}
};

Window_ActorCommand.prototype.addEscapeCommand = function() {
	if (BattleManager.canEscape()){
    this.addCommand("逃跑", 'escape', BattleManager.canEscape());
	}
};

Scene_Battle.prototype.createActorCommandWindow = function() {
    this._actorCommandWindow = new Window_ActorCommand();
    this._actorCommandWindow.setHandler('attack', this.commandAttack.bind(this));
    this._actorCommandWindow.setHandler('skill',  this.commandSkill.bind(this));
    this._actorCommandWindow.setHandler('guard',  this.commandGuard.bind(this));
    this._actorCommandWindow.setHandler('item',   this.commandItem.bind(this));
 //   this._actorCommandWindow.setHandler('cancel', this.selectPreviousCommand.bind(this));
    this._actorCommandWindow.setHandler('wait',   this.commandWait.bind(this));
	this._actorCommandWindow.setHandler('escape', this.commandEscape.bind(this));
    this.addWindow(this._actorCommandWindow);
};

Scene_Battle.prototype.commandWait = function() {
	var skill = $dataSkills[29];
	var action = BattleManager.inputtingAction();
    action.setSkill(skill.id);//设定等待技能
    BattleManager.actor().setLastBattleSkill(skill);
    this.onSelectAction();
    //this.selectNextCommand();
};