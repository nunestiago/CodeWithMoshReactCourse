// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log('object');
//   },
// };

//Factory Function
function createCircle(radius) {
  return {
    radius, //em JS moderno não precisa ser radius:radius
    draw() {
      //short version de draw: function() ...
      console.log('object');
    },
  };
}
const circle1 = createCircle(1);
console.log(circle1);

//Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('object2');
  };
}

const circle2 = new Circle(1);
