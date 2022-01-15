import { Navigo } from "navigo";

const router = new Navigo("/", { linksSelector: "a" });

const changeText = (text) => {
  this.document.querySelector("js-link").innerText = text;
};

router.on({
  "/": () => {
    changeText("Trang chủ");
  },
  "/about": () => {
    changeText("About");
  },
  "/product": () => {
    changeText("Product");
  },
});

router.resolve();