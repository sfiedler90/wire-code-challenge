const items = [];
const addItem = (name, owner, rating) =>
  items.push({
    name: name,
    owner: owner,
    rating: rating,
  });

const snf = "Sunflower";
const fog = "Mr. Fog";
const cloudy = "Cloud.Master";
const rain = "Rainy";

addItem("Shiny Package", snf, 4);
addItem("Sunrise IO", snf, 4);
addItem("sunnyfer", snf, 5);
addItem("fogwave", fog, 3);
addItem("Hazyer", fog, 2);
addItem("Low Vision", fog, 1);
addItem("Air Pollution", fog, 1);
addItem("Busy Sky", cloudy, 3);
addItem("Sky_changer", cloudy, 3);
addItem("CloudMaker", cloudy, 2);
addItem("Wet wet", rain, 2);
addItem("RainDropper", rain, 1);
addItem("Umbrella", rain, 4);
addItem("WaterMonsum", rain, 1);
addItem("NoSun", cloudy, 2);
addItem("Sunsetter", snf, 4);
addItem("CloudEliminator", snf, 4);
addItem("CloudEliminator V2", snf, 5);

module.exports = items;
