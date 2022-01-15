import Navigo from "navigo";
import Home from "./pages/Home";
import News from "./pages/News";

const router = new Navigo("/", { linksSelector: "a" });

const printHTML = (content) => {
  document.getElementById("app").innerHTML = content;
};

router.on({
  "/": () => {
    printHTML(Home.render());
  },
  "/news": () => {
    printHTML(News.render());
  },
});

router.resolve();