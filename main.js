import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Navigo from "navigo"; // When using ES modules.
const router = new Navigo("/");
import homepage from "./views/home.html?raw";
import aboutpage from "./views/about.html?raw";
import userTemplate from "./views/user_template.html?raw";
import adminTemplate from "./views/admin_template.html?raw";
router
  .on("/", function () {
    document.getElementById("template").innerHTML = userTemplate;
    document.getElementById("app").innerHTML = homepage;
  })
  .on("/about", function () {
    document.getElementById("template").innerHTML = userTemplate;
    document.getElementById("app").innerHTML = aboutpage;
  })
  .on("/contact", function () {
    document.getElementById("template").innerHTML = adminTemplate;
    document.getElementById("app").innerHTML = "<h1>Contact Page</h1>";
  })
  .on("/admin", function () {
    document.getElementById("template").innerHTML = adminTemplate;
    document.getElementById("app").innerHTML = "<h1>Dashboard</h1>";
  })
  .on("/admin/users", function () {
    document.getElementById("template").innerHTML = adminTemplate;
    document.getElementById("app").innerHTML = "<h1>User management</h1>";
  });

router.resolve();
