import { abbreviateNumber } from "../../components/Logic/logic";

export default class Player {

    constructor( coins, coinsPerSecond, coinsPerClick, mana, manaPerSecond, buildings) {
      
        this.coins = coins;
        this.coinsPerSecond = coinsPerSecond;
        this.coinsPerClick = coinsPerClick;
        this.mana = mana;
        this.manaPerSecond = manaPerSecond;
        this.buildings = buildings;
    }


    click(){
        this.coins += this.coinsPerClick;
    }

    tick(){
        this.coins += this.coinsPerSecond;
    }

}