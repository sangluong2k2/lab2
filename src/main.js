import Navigo from "navigo";
import HomePage from "./pages/home";
const router = new Navigo("/", {linksSelector: "a"});
const print = (content) => {
  document.getElementById("article").innerHTML = content;
};

router.on({
  "/": () => {
    print(HomePage.render());
  },
});
router.resolve();