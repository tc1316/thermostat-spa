// increaseTemperature = (callback) => {
//   // executes after response is received
//   fetch("http://localhost:3000/up", { method: "POST" }).then((res) => {
//     callback(res);
//   });
// };

increaseTemperature = () => {
  // executes after response is received
  return fetch("http://localhost:3000/up", { method: "POST" });
};

module.exports = increaseTemperature;
