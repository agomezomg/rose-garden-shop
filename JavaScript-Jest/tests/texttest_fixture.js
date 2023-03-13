
const { Shop, Item } = require("../src/rose_garden");

;(() => {
  console.log(`Welcome to the Rose Garden Shop! 🌹\n`);
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
  
  const days = Number(process.argv[2]) || 2;
  const roseGarden = new Shop(items);
  
  for (let day = 0; day < days; day++) {
    console.log(`\n-------- day ${day} --------`);
    console.log("name, sellIn, quality");
    items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
    roseGarden.updateQuality();
  }
  process.exit(0)
})();
