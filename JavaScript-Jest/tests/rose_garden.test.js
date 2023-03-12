const {Shop, Item} = require("../src/rose_garden");

describe("Rose Garden", function() {
  it("should foo", function() {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    ];
    const roseGarden = new Shop([new Item("foo", 0, 0)]);
    console.log(roseGarden);

    let days = 15;

    do {
      roseGarden.updateQuality();
      roseGarden.items.forEach((item) => {
        
      })
      days--;
    } while (days > 0);
    expect(items[0].name).toBe("foo");
  });
});
