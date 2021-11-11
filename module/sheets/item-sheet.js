export default class ChockItemSheet extends ItemSheet {
    get template(){
        return `systems/foundry-vtt-chock/templates/sheets/${this.time.data.type}-sheet.html`;
    }
}