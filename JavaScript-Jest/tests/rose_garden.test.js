const {Shop, Item, Sulfuras, BackstagePass} = require("../src/rose_garden");
const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Sulfuras("Elixir of the Mongoose", 5, 7),
  new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
  new Sulfuras("Sulfuras, Hand of Ragnaros", -1, 80),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 49),
];

const roseGarden = new Shop(items);
let days = 1;

describe("Rose Garden", function() {
  do {
    roseGarden.updateQuality();
    days--;
  } while (days > 0);

  it("should validate that quality is greater than 0", function() {
    roseGarden.items.forEach((item) => {
      expect(item.quality).toBeGreaterThan(-1)
    })
  });

  it("should validate that quality is 80 or no greater than 50", function() {
    roseGarden.items.forEach((item) => {
      if (item.name !== 'Sulfuras, Hand of Ragnaros')
        expect(item.quality).toBeLessThan(51);
      else expect(item.quality).toBe(80);
    })
  })

  it("regular items should decrement per day", function() {
    roseGarden.items.forEach((item) => {
      switch (item.name) {
        case 'Backstage passes to a TAFKAL80ETC concert':
        case 'Aged Brie':
        case 'Sulfuras, Hand of Ragnaros':
          break;
        default:
          if (item.quality - days >= 0)
            expect(item.quality).toBe(item.quality - days)
      }
    })
  })

  it("validate accurate quality for backstage passes", function() {
    roseGarden.items.forEach((item) => {
      if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn < 0)
          expect(item.quality).toBe(0);
        else if (item.sellIn > 10)
          expect(item.quality).toBe(item.quality + days)
        }
    })
  })
});
