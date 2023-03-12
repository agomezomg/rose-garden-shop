class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  addItem(item) {
    this.items.push(item);
  }
  
  updateQuality() {
    this.items.map((item) => {
      switch (item.name) {
        case 'Backstage passes to a TAFKAL80ETC concert':
          if (item.sellIn === 0) {
            item.quality = 0;
            break;
          }
          if (item.sellIn < 11) item.quality += 1;
          if (item.sellIn < 6) item.quality += 1;
          if (item.quality > 50) item.quality = 50;
        case 'Aged Brie':
          if (item.quality < 50) item.quality += 1;
          break;
        case 'Sulfuras, Hand of Ragnaros':
          if (item.quality !== 80) item.quality = 80;
          break;
        default:
          if (item.quality === 0) break;
          if (item.sellIn === 0) item.quality -= 2;
          else item.quality -= 1;
          if (item.quality < 0) item.quality = 0;
      }
      item.sellIn--;
    });
  };
}

module.exports = {
  Item,
  Shop
}
