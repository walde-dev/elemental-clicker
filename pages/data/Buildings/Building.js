

export default class Building {

    constructor(name, icon, initialCost, amount, isUnlocked, baseProduction, productionMultiplier) {
        this.name = name;
        this.icon = icon;
        this.initialCost = initialCost;
        this.amount = amount;
        this.isUnlocked = isUnlocked;
        this.baseProduction = baseProduction;
        this.productionMultiplier = productionMultiplier;
    }

    get production() {
        return (this.baseProduction*this.productionMultiplier*this.amount);
    }

    get cost(){
        return this.initialCost * Math.pow(1.15, this.amount);
    }


}