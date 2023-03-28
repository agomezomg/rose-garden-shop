class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Sulfuras extends Item{
  constructor(name, sellIn) {
    super(name, sellIn);
    this.quality = 80;
  }

  getQuality() {
    return this.quality;
  }

  updateQuality() {}
}

class BackstagePass extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.quality < 50 && this.sellIn >= 0) {
      if (this.sellIn > 11) this.quality += 1;
      else if (this.sellIn <= 10 && this.sellIn >= 6) this.quality += 2;
      else if (this.sellIn <= 5 && this.sellIn >= 0) this.quality += 3;

      if(this.quality > 50) this.quality = 50;
    } else if (this.sellIn < 0) this.quality = 0;
  }
}

class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.quality < 50) this.quality += 1;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  addItem(item) {
    this.items.push(item);
  }

  getItemTypeOfByIndex(index) {
    return Object(this.items[index]).constructor.name;
  }
  
  updateQuality() {
    this.items.map((item) => {
      switch (Object(item).constructor.name) {
        case 'Item':
          if (item.quality === 0) break;
          if (item.sellIn <= 0) item.quality -= 2;
          else item.quality -= 1;
          if (item.quality < 0) item.quality = 0;
          break;
        default:
          item.updateQuality();
      }
      item.sellIn--;
    });
  };
}

module.exports = {
  Item,
  Sulfuras,
  BackstagePass,
  AgedBrie,
  Shop
}
