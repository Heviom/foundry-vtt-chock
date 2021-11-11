export default class ChockItemSheet extends ItemSheet {
    get template(){
        return `systems/foundry-vtt-chock/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}