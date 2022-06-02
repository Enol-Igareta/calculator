import {selectInputs} from "./index.js";

// Create new link
function loadCss(file) {
  let link = document.getElementById(`link`);
  link.href = file;
}

const whichSelected = () => {
  let theme = document.querySelector("input[name='btn']:checked").value;
  return theme;
};

selectInputs.forEach((el) =>
  el.addEventListener("click", () => {
    if (whichSelected() == "theme1") {
      loadCss("./theme1.css");
    } else if (whichSelected() == "theme2") {
      loadCss("./theme2.css");
    } else if (whichSelected() == "theme3") {
      loadCss("./theme3.css");
    }
  })
);
