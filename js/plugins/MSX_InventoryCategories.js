//#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
// MSX Inventory Categories
// Version: 2.0
// Author: Melosx
// Last Update: May 20th, 2017
//#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#

var Imported = Imported || {};
Imported.MSX_InventoryCategories = true;

var MSX = MSX || {};
MSX.InventoryCategories = MSX.InventoryCategories || {};

 /*:
  * @plugindesc v2.0 Add new categories to inventory
  * @author Melosx
  *
  * @param Two-Level Menu
  * @desc Enable(true) or Disable(false) the new Item category menu.
  * true -> ENABLE      false -> DISABLE
  * @default true
  *
  * @param TL Item IDs
  * @desc IDs of categories under the Items
  * menu.
  * @default 2,3,50
  *
  * @param TL Weapon IDs
  * @desc IDs of categories under the Weapons
  * menu.
  * @default 9,11,12
  *
  * @param TL Armor IDs
  * @desc IDs of categories under the Armors
  * menu.
  * @default 20,21,24
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 1 Name
  * @desc Name of the category.
  * @default Items
  *
  * @param Category 1 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 2 Name
  * @desc Name of the category.
  * @default Potions & Cures
  *
  * @param Category 2 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 3 Name
  * @desc Name of the category.
  * @default PowerUps
  *
  * @param Category 3 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 4 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 4 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 5 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 5 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 6 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 6 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 7 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 7 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 8 Name
  * @desc Name of the category.
  * @default Weapons
  *
  * @param Category 8 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 9 Name
  * @desc Name of the category.
  * @default Swords
  *
  * @param Category 9 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 10 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 10 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 11 Name
  * @desc Name of the category.
  * @default Maces
  *
  * @param Category 11 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 12 Name
  * @desc Name of the category.
  * @default Wand
  *
  * @param Category 12 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 13 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 13 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 14 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 14 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 15 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 15 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 16 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 16 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 17 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 17 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 18 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 18 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 19 Name
  * @desc Name of the category.
  * @default Armors
  *
  * @param Category 19 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 20 Name
  * @desc Name of the category.
  * @default Shields
  *
  * @param Category 20 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 21 Name
  * @desc Name of the category.
  * @default Heads
  *
  * @param Category 21 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 22 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 22 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 23 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 23 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 24 Name
  * @desc Name of the category.
  * @default Body
  *
  * @param Category 24 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 25 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 25 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 26 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 26 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 27 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 27 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 28 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 28 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 29 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 29 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 30 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 30 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 31 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 31 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 32 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 32 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 33 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 33 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 34 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 34 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 35 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 35 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 36 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 36 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 37 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 37 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 38 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 38 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 39 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 39 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 40 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 40 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 41 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 41 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 42 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 42 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 43 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 43 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 44 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 44 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 45 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 45 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 46 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 46 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 47 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 47 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 48 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 48 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 49 Name
  * @desc Name of the category.
  * @default
  *
  * @param Category 49 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default false
  *
  * @param ----------------
  * @desc ----------------
  * @default ----------------
  *
  * @param Category 50 Name
  * @desc Name of the category.
  * @default Key Item
  *
  * @param Category 50 Hide if Empty
  * @desc Hide the category if there aren't items in
  * the list.
  * @default true
  *
  * @help
  * #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
  * Introduction
  * #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
  * This plugin allow you to add new categories in your inventory.
  * Also provide a notetag to set the correct category for the item.
  *
  * #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
  * Parameters
  * #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
  *
  * Two-Level Menu
  *
  * Add a new layer in the Item Menu.
  *     - Default Items command now contain the list of all categories
  *       related to Items.
  *     - Default Weapons command now contain the list of all categories
  *       related to Weapons.
  *     - Default Armors command now contain the list of all categories
  *       related to Armors.
  *
  * TL Item/Weapon/Armor IDs
  *
  *     The ID (1 to 50) of each category you want in the relative
  *     sub menu.
  *
  * Category X Name
  *
  *     The name of the category.
  *     Use the following name to add default categories in list
  *     - Items -> for default items list
  *     - Weapons -> for default weapons list
  *     - Armors -> for default armors list
  *     - Key Item -> for default key item list
  *
  * Category X Hide If Empty
  *
  *     Hide the category X if no items inside.
  *
  *  * X is the ID (1 to 50) of the category *
  *
  * #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
  * !!IMPORTANT NOTES!!
  * #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
  * If default command are hidden or Two Level Menu is enabled all
  * uncategorized item aren't shown in the list.
  *
  * #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
  * Notetag
  * #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
  *
  * Item/Weapon/Armor Notetag:
  *
  * 	 <Category: X>
  * 	 Where X is the name of the category you want the item.
  *   Example:
  * 	 <Category: Cooking>
  *
  * #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
  * Changelog
  * #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
  *
  * v2.0   New -> Improved control of each category.
  *               Can hide category if is empty.
  *
  * v1.2   New -> Change the way the categories are read by the plugin.
  *               Can now have category names with more than one word.
  *
  * v1.1.2 Fix -> Game freeze caused by onSellCancel function.
  *
  * v1.1.1 Fix -> Game freeze caused by onItemCancel function.
  *               Actor window now appear correctly over other windows.
  *
  * v1.1   New -> Weapon and Armor categorization.
  *               Enable/Disable two-level menu.
  *               Show/Hide default categories.
  *
  * v1.0 Initial release.
 */


var params = PluginManager.parameters(/([^\/]+)\.js$/.exec(document.currentScript.src)[1]);

MSX.InventoryCategories.TwoLevelMenu        = String(params["Two-Level Menu"]);
MSX.InventoryCategories.TLItemIDs           = String(params["TL Item IDs"]);
MSX.InventoryCategories.TLWeaponIDs         = String(params["TL Weapon IDs"]);
MSX.InventoryCategories.TLArmorIDs          = String(params["TL Armor IDs"]);

MSX.InventoryCategories.Categories = [];
for(var i = 1; i < 51; i++) {
    var name = String(params["Category " + i + " Name"]);
    var hide = String(params["Category " + i + " Hide if Empty"]);
    MSX.InventoryCategories.Categories.push(
        {
            name: name,
            hide: hide
        }
    );
}

MSX.InventoryCategories.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if (!MSX.InventoryCategories.DataManager_isDatabaseLoaded.call(this)) return false;
	this.setItemCategory($dataItems);
	this.setItemCategory($dataWeapons);
	this.setItemCategory($dataArmors);
	return true;
};

DataManager.setItemCategory = function(items) {
	for(var n = 1; n < items.length; n++){
		var itm = items[n];
		var notedata = itm.note.split(/[\r\n]+/);
		itm.customCategory = '';
		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(/<(?:Category):[ ](.*)>/i)) {
				itm.customCategory = String(RegExp.$1).toLowerCase();
			}
		}
	}
};

Window_ItemCategory.prototype.makeCommandList = function() {
	if(eval(MSX.InventoryCategories.TwoLevelMenu)){
		this.addCommand(TextManager.item,    'tlm_item');
		this.addCommand(TextManager.weapon,  'tlm_weapon');
		this.addCommand(TextManager.armor,   'tlm_armor');
	}
	if(!eval(MSX.InventoryCategories.TwoLevelMenu)){
        this._categoryCounter = [];
        this._data = $gameParty.allItems().filter(function(itm) {
            for(var i = 0; i < MSX.InventoryCategories.Categories.length; i++){
                if(itm.customCategory.toLowerCase() === MSX.InventoryCategories.Categories[i]["name"].toLowerCase()){
                    this._categoryCounter[i] = true;
                }
            }
        }, this);
        for(var i = 0; i < MSX.InventoryCategories.Categories.length; i++){
            if(MSX.InventoryCategories.Categories[i]["name"].length > 0){
                switch(MSX.InventoryCategories.Categories[i]["name"].toLowerCase()){
                    case "items":
                        this.addCommand(TextManager.item,    'item');
                        break;
                    case "weapons":
                        this.addCommand(TextManager.weapon,  'weapon');
                        break;
                    case "armors":
                        this.addCommand(TextManager.armor,   'armor');
                        break;
                    case "key items":
                        this.addCommand(TextManager.keyItem, 'keyItem');
                        break;
                    default:
                        if(eval(MSX.InventoryCategories.Categories[i]["hide"])){
                            if(this._categoryCounter[i]){
                                this.addCommand(MSX.InventoryCategories.Categories[i]["name"], MSX.InventoryCategories.Categories[i]["name"].toLowerCase());
                            }
                        } else {
                            this.addCommand(MSX.InventoryCategories.Categories[i]["name"], MSX.InventoryCategories.Categories[i]["name"].toLowerCase());
                        }
                        break;
                }
            }
        }
	}
};

MSX.InventoryCategories.Window_itemList_includes = Window_ItemList.prototype.includes;
Window_ItemList.prototype.includes = function(item) {
	if (item === null) {
		return false;
	}
	if(!item.customCategory){
		return MSX.InventoryCategories.Window_itemList_includes.call(this, item);
	}else{
		if(DataManager.isItem(item))
			return DataManager.isItem(item) && item.itypeId === 1 && item.customCategory === this._category;
		if(DataManager.isWeapon(item))
			return DataManager.isWeapon(item) && item.customCategory === this._category;
		if(DataManager.isArmor(item))
			return DataManager.isArmor(item) && item.customCategory === this._category;
	}
	return false;
};


if(eval(MSX.InventoryCategories.TwoLevelMenu)){

//#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
// CustomItemCategory Window
//#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
function Window_CustomItemCategory() {
    this.initialize.apply(this, arguments);
}
    
    Window_CustomItemCategory.prototype = Object.create(Window_ItemCategory.prototype);
    Window_CustomItemCategory.prototype.constructor = Window_CustomItemCategory;

    Window_CustomItemCategory.prototype.makeCommandList = function() {

        this._itemCategories = [];
        this._itemCategoriesIDs = MSX.InventoryCategories.TLItemIDs.split(",");
        for (var i = 0; i < this._itemCategoriesIDs.length; ++i) {
            var category = MSX.InventoryCategories.Categories[this._itemCategoriesIDs[i] - 1];
            this._itemCategories.push(category);
        }

        this._itemCategoryCounter = [];

        this._data = $gameParty.allItems().filter(function(itm) {
            for(var i = 0; i < this._itemCategories.length; i++){
                if(itm.customCategory.toLowerCase() === this._itemCategories[i]["name"].toLowerCase()){
                    this._itemCategoryCounter[i] = true;
                }
            }
        }, this);

        for(var i = 0; i < this._itemCategories.length; ++i) {
            if(eval(this._itemCategories[i]["hide"])){
                if(this._itemCategoryCounter[i]){
                    this.addCommand(this._itemCategories[i]["name"], this._itemCategories[i]["name"].toLowerCase());
                }
            } else {
                this.addCommand(this._itemCategories[i]["name"], this._itemCategories[i]["name"].toLowerCase());
            }
        }/*
        if(eval(MSX.InventoryCategories.KeyItem)){
            this.addCommand(TextManager.keyItem, 'keyItem');
        }*/
    };

//#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
// CustomWeaponCategory Window
//#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    function Window_CustomWeaponCategory() {
        this.initialize.apply(this, arguments);
    }

    Window_CustomWeaponCategory.prototype = Object.create(Window_ItemCategory.prototype);
    Window_CustomWeaponCategory.prototype.constructor = Window_CustomWeaponCategory;

    Window_CustomWeaponCategory.prototype.makeCommandList = function() {
        this._weaponCategories = [];
        this._weaponCategoriesIDs = MSX.InventoryCategories.TLWeaponIDs.split(",");
        for (var i = 0; i < this._weaponCategoriesIDs.length; ++i) {
            var category = MSX.InventoryCategories.Categories[this._weaponCategoriesIDs[i] - 1];
            this._weaponCategories.push(category);
        }
        this._weaponCategoryCounter = [];
        this._data = $gameParty.allItems().filter(function(itm) {
            for(var i = 0; i < this._weaponCategories.length; i++){
                if(itm.customCategory.toLowerCase() === this._weaponCategories[i]["name"].toLowerCase()){
                    this._weaponCategoryCounter[i] = true;
                }
            }
        }, this);
        for(var i = 0; i < this._weaponCategories.length; ++i) {
            if(eval(this._weaponCategories[i]["hide"])){
                if(this._weaponCategoryCounter[i]){
                    this.addCommand(this._weaponCategories[i]["name"], this._weaponCategories[i]["name"].toLowerCase());
                }
            } else {
                this.addCommand(this._weaponCategories[i]["name"], this._weaponCategories[i]["name"].toLowerCase());
            }
        }
    };


//#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
// CustomArmorCategory Window
//#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    function Window_CustomArmorCategory() {
        this.initialize.apply(this, arguments);
    }

    Window_CustomArmorCategory.prototype = Object.create(Window_ItemCategory.prototype);
    Window_CustomArmorCategory.prototype.constructor = Window_CustomArmorCategory;

    Window_CustomArmorCategory.prototype.makeCommandList = function() {
        this._armorCategories = [];
        this._armorCategoriesIDs = MSX.InventoryCategories.TLArmorIDs.split(",");
        for (var i = 0; i < this._armorCategoriesIDs.length; ++i) {
            var category = MSX.InventoryCategories.Categories[this._armorCategoriesIDs[i] - 1];
            this._armorCategories.push(category);
        }
        this._armorCategoryCounter = [];
        this._data = $gameParty.allItems().filter(function(itm) {
            for(var i = 0; i < this._armorCategories.length; i++){
                if(itm.customCategory.toLowerCase() === this._armorCategories[i]["name"].toLowerCase()){
                    this._armorCategoryCounter[i] = true;
                }
            }
        }, this);
        for(var i = 0; i < this._armorCategories.length; ++i) {
            if(eval(this._armorCategories[i]["hide"])){
                if(this._armorCategoryCounter[i]){
                    this.addCommand(this._armorCategories[i]["name"], this._armorCategories[i]["name"].toLowerCase());
                }
            } else {
                this.addCommand(this._armorCategories[i]["name"], this._armorCategories[i]["name"].toLowerCase());
            }
        }
    };
    
//#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
// Menu Mod
//#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
MSX.InventoryCategories.Scene_Item_create = Scene_Item.prototype.create;
 Scene_Item.prototype.create = function() {
	MSX.InventoryCategories.Scene_Item_create.call(this);
    this.createCustomCategoriesWindow();
    this.createActorWindow();
};

Scene_Item.prototype.createCustomCategoriesWindow = function() {
	this.createCustomItemCategoryWindow();
	this.createCustomWeaponCategoryWindow();
	this.createCustomArmorCategoryWindow();
};

Scene_Item.prototype.createCustomItemCategoryWindow = function() {
    this._customItemCategoryWindow = new Window_CustomItemCategory();
    this._customItemCategoryWindow.setHelpWindow(this._helpWindow);
    this._customItemCategoryWindow.y = this._helpWindow.height;
	this._customItemCategoryWindow.hide();
	this._customItemCategoryWindow.deactivate();
    this._customItemCategoryWindow.setHandler('ok',     this.onCustomCategoryOk.bind(this));
    this._customItemCategoryWindow.setHandler('cancel', this.onCustomCategoryCancel.bind(this));
    this.addWindow(this._customItemCategoryWindow);
};

Scene_Item.prototype.createCustomWeaponCategoryWindow = function() {
    this._customWeaponCategoryWindow = new Window_CustomWeaponCategory();
    this._customWeaponCategoryWindow.setHelpWindow(this._helpWindow);
    this._customWeaponCategoryWindow.y = this._helpWindow.height;
	this._customWeaponCategoryWindow.hide();
	this._customWeaponCategoryWindow.deactivate();
    this._customWeaponCategoryWindow.setHandler('ok',     this.onCustomCategoryOk.bind(this));
    this._customWeaponCategoryWindow.setHandler('cancel', this.onCustomCategoryCancel.bind(this));
    this.addWindow(this._customWeaponCategoryWindow);
};

Scene_Item.prototype.createCustomArmorCategoryWindow = function() {
    this._customArmorCategoryWindow = new Window_CustomArmorCategory();
    this._customArmorCategoryWindow.setHelpWindow(this._helpWindow);
    this._customArmorCategoryWindow.y = this._helpWindow.height;
	this._customArmorCategoryWindow.hide();
	this._customArmorCategoryWindow.deactivate();
    this._customArmorCategoryWindow.setHandler('ok',     this.onCustomCategoryOk.bind(this));
    this._customArmorCategoryWindow.setHandler('cancel', this.onCustomCategoryCancel.bind(this));
    this.addWindow(this._customArmorCategoryWindow);
};

MSX.InventoryCategories.Scene_Item_createItemWindow = Scene_Item.prototype.createItemWindow;
Scene_Item.prototype.createItemWindow = function() {
	MSX.InventoryCategories.Scene_Item_createItemWindow.call(this);
    this._categoryWindow.setItemWindow();
};

Scene_Item.prototype.onCategoryOk = function() {
	this._categoryWindow.hide();
	this._categoryWindow.deactivate();
	switch(this._categoryWindow.currentSymbol()){
		case 'tlm_item':
			this._customItemCategoryWindow.setItemWindow(this._itemWindow);
			this._customItemCategoryWindow.activate();
			this._customItemCategoryWindow.show();
			break;
		case 'tlm_weapon':
			this._customWeaponCategoryWindow.setItemWindow(this._itemWindow);
			this._customWeaponCategoryWindow.activate();
			this._customWeaponCategoryWindow.show();
			break;
		case 'tlm_armor':
			this._customArmorCategoryWindow.setItemWindow(this._itemWindow);
			this._customArmorCategoryWindow.activate();
			this._customArmorCategoryWindow.show();
			break;
	}
	this._itemWindow.refresh();
};

Scene_Item.prototype.onCustomCategoryOk = function() {
    this._itemWindow.activate();
    this._itemWindow.selectLast();
};

Scene_Item.prototype.onCustomCategoryCancel = function() {
    this._customItemCategoryWindow.hide();
    this._customItemCategoryWindow.deactivate();
	this._customItemCategoryWindow.setItemWindow();
    this._customWeaponCategoryWindow.hide();
    this._customWeaponCategoryWindow.deactivate();
	this._customWeaponCategoryWindow.setItemWindow();
    this._customArmorCategoryWindow.hide();
    this._customArmorCategoryWindow.deactivate();
	this._customArmorCategoryWindow.setItemWindow();
	this._itemWindow.contents.clear();
    this._categoryWindow.activate();
    this._categoryWindow.show();
};

Scene_Item.prototype.onItemCancel = function() {
    this._itemWindow.deselect();
	switch(this._categoryWindow.currentSymbol()){
		case 'tlm_item':
			this._customItemCategoryWindow.activate();
			break;
		case 'tlm_weapon':
			this._customWeaponCategoryWindow.activate();
			break;
		case 'tlm_armor':
			this._customArmorCategoryWindow.activate();
			break;
	};
};

//#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
// Shop Mod
//#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
MSX.InventoryCategories.Scene_Shop_create = Scene_Shop.prototype.create;
 Scene_Shop.prototype.create = function() {
	MSX.InventoryCategories.Scene_Shop_create.call(this);
    this.createCustomCategoriesWindow();
};

Scene_Shop.prototype.createCustomCategoriesWindow = function() {
	this.createCustomItemCategoryWindow();
	this.createCustomWeaponCategoryWindow();
	this.createCustomArmorCategoryWindow();
};

Scene_Shop.prototype.createCustomItemCategoryWindow = function() {
    this._customItemCategoryWindow = new Window_CustomItemCategory();
    this._customItemCategoryWindow.setHelpWindow(this._helpWindow);
    this._customItemCategoryWindow.y = this._dummyWindow.y;

	this._customItemCategoryWindow.hide();
	this._customItemCategoryWindow.deactivate();
    this._customItemCategoryWindow.setHandler('ok',     this.onCustomCategoryOk.bind(this));
    this._customItemCategoryWindow.setHandler('cancel', this.onCustomCategoryCancel.bind(this));
    this.addWindow(this._customItemCategoryWindow);
};

Scene_Shop.prototype.createCustomWeaponCategoryWindow = function() {
    this._customWeaponCategoryWindow = new Window_CustomWeaponCategory();
    this._customWeaponCategoryWindow.setHelpWindow(this._helpWindow);
    this._customWeaponCategoryWindow.y = this._dummyWindow.y;
	this._customWeaponCategoryWindow.hide();
	this._customWeaponCategoryWindow.deactivate();
    this._customWeaponCategoryWindow.setHandler('ok',     this.onCustomCategoryOk.bind(this));
    this._customWeaponCategoryWindow.setHandler('cancel', this.onCustomCategoryCancel.bind(this));
    this.addWindow(this._customWeaponCategoryWindow);
};

Scene_Shop.prototype.createCustomArmorCategoryWindow = function() {
    this._customArmorCategoryWindow = new Window_CustomArmorCategory();
    this._customArmorCategoryWindow.setHelpWindow(this._helpWindow);
    this._customArmorCategoryWindow.y = this._dummyWindow.y;
	this._customArmorCategoryWindow.hide();
	this._customArmorCategoryWindow.deactivate();
    this._customArmorCategoryWindow.setHandler('ok',     this.onCustomCategoryOk.bind(this));
    this._customArmorCategoryWindow.setHandler('cancel', this.onCustomCategoryCancel.bind(this));
    this.addWindow(this._customArmorCategoryWindow);
};

Scene_Shop.prototype.onCategoryOk = function() {
   this._categoryWindow.hide();
	this._categoryWindow.deactivate();
	switch(this._categoryWindow.currentSymbol()){
		case 'tlm_item':
			this._customItemCategoryWindow.setItemWindow(this._sellWindow);
			this._customItemCategoryWindow.activate();
			this._customItemCategoryWindow.show();
			break;
		case 'tlm_weapon':
			this._customWeaponCategoryWindow.setItemWindow(this._sellWindow);
			this._customWeaponCategoryWindow.activate();
			this._customWeaponCategoryWindow.show();
			break;
		case 'tlm_armor':
			this._customArmorCategoryWindow.setItemWindow(this._sellWindow);
			this._customArmorCategoryWindow.activate();
			this._customArmorCategoryWindow.show();
			break;
	}
	this._sellWindow.refresh();
};

Scene_Shop.prototype.onCustomCategoryOk = function() {
    this.activateSellWindow();
    this._sellWindow.select(0);
};

Scene_Shop.prototype.onSellCancel = function() {
    this._sellWindow.deselect();
	switch(this._categoryWindow.currentSymbol()){
		case 'tlm_item':
			this._customItemCategoryWindow.activate();
			break;
		case 'tlm_weapon':
			this._customWeaponCategoryWindow.activate();
			break;
		case 'tlm_armor':
			this._customArmorCategoryWindow.activate();
			break;
	}
    this._statusWindow.setItem(null);
    this._helpWindow.clear();
};

Scene_Shop.prototype.onCustomCategoryCancel = function() {
    this._customItemCategoryWindow.hide();
    this._customItemCategoryWindow.deactivate();
	this._customItemCategoryWindow.setItemWindow();
    this._customWeaponCategoryWindow.hide();
    this._customWeaponCategoryWindow.deactivate();
	this._customWeaponCategoryWindow.setItemWindow();
    this._customArmorCategoryWindow.hide();
    this._customArmorCategoryWindow.deactivate();
	this._customArmorCategoryWindow.setItemWindow();
	this._sellWindow.contents.clear();
    this._categoryWindow.activate();
    this._categoryWindow.show();
};

MSX.InventoryCategories.Scene_Shop_createSellWindow = Scene_Shop.prototype.createSellWindow;
Scene_Shop.prototype.createSellWindow = function() {
    MSX.InventoryCategories.Scene_Shop_createSellWindow.call(this);
    this._categoryWindow.setItemWindow();
};

}



