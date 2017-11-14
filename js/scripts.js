// Objects Practice.. Richard is dictating a Camera
var wifi = false;

var camera = {
  color: "black",
  weight: 6,// in pounds
  brand: "Nikon",
  condition: "used",
  latestVersion: false,
  specs: ["20x Zoom", "Video Recording",wifi],

  addons: {
    lenses: 3,
    tripod: 1,
    cameWithPurchase: false
  },

  sayCheese: function(name, count){
      console.log(name + ", please say cheese at the count of " + count + ".");
  }

}

console.log(camera.addons.tripod);
camera.sayCheese("Richard", 3);
camera.sayCheese("Sosa", 320000);
