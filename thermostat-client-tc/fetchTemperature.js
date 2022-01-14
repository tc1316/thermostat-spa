// const fetchTemperature = (callback) => {
//   fetch("http://localhost:3000")
//     .then((res) => res.json())
//     .then((res) => callback(res));
// };

const fetchTemperature = () => {
  return fetch("http://localhost:3000")
    .then((res) => {return res.json()})
    .then((data) => {
      // console.log(data)
      // console.log(data.temperature)
      return data.temperature;
    });
  
};

module.exports = fetchTemperature;
