(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchTemperature.js
  var require_fetchTemperature = __commonJS({
    "fetchTemperature.js"(exports, module) {
      var fetchTemperature2 = () => {
        return fetch("http://localhost:3000").then((res) => {
          return res.json();
        }).then((data) => {
          return data.temperature;
        });
      };
      module.exports = fetchTemperature2;
    }
  });

  // renderTemperature.js
  var require_renderTemperature = __commonJS({
    "renderTemperature.js"(exports, module) {
      var renderTemperature2 = (temperature) => {
        const temp = document.querySelector("#temperature");
        temp.innerHTML = temperature;
      };
      module.exports = renderTemperature2;
    }
  });

  // increaseTemperature.js
  var require_increaseTemperature = __commonJS({
    "increaseTemperature.js"(exports, module) {
      increaseTemperature = () => {
        return fetch("http://localhost:3000/up", { method: "POST" });
      };
      module.exports = increaseTemperature;
    }
  });

  // decreaseTemperature.js
  var require_decreaseTemperature = __commonJS({
    "decreaseTemperature.js"(exports, module) {
      decreaseTemperature = () => {
        return fetch("http://localhost:3000/down", { method: "POST" });
      };
      module.exports = decreaseTemperature;
    }
  });

  // resetTemperature.js
  var require_resetTemperature = __commonJS({
    "resetTemperature.js"(exports, module) {
      resetTemperature = () => {
        return fetch("http://localhost:3000/", { method: "DELETE" });
      };
      module.exports = resetTemperature;
    }
  });

  // index.js
  var fetchTemperature = require_fetchTemperature();
  var renderTemperature = require_renderTemperature();
  var increaseTemperature2 = require_increaseTemperature();
  var decreaseTemperature2 = require_decreaseTemperature();
  var resetTemperature2 = require_resetTemperature();
  var displayTemp = () => {
    fetchTemperature().then((temperature) => renderTemperature(temperature));
  };
  displayTemp();
  document.querySelector("#up").addEventListener("click", () => {
    increaseTemperature2().then(() => {
      return displayTemp();
    });
  });
  document.querySelector("#down").addEventListener("click", () => {
    decreaseTemperature2().then(() => {
      return displayTemp();
    });
  });
  document.querySelector("#reset").addEventListener("click", () => {
    resetTemperature2().then(() => {
      return displayTemp();
    });
  });
})();
