import ChockItemSheet from "./module/sheets/item-sheet.js"

Hooks.once("init",function () {
    console.log("Chock | Initializing Chock System");
    Items.unregsiterSheet("core", ItemSheet);
    Items.registerSheet("chock", ChockItemSheet, { makeDefault: true });
});