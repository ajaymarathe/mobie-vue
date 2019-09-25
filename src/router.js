import Vue from "vue";
import Router from "vue-router";
import Index from "./views/index.vue";
import Accordion from "./components/accordion.vue";
import ActionSheet from "./components/actionsheet.vue";
import Badge from "./components/badge.vue";
import Buttons from "./components/buttons.vue";
import Cards from "./components/cards.vue";
import Carousel from "./components/carousel.vue";
import Forms from "./components/forms.vue";
import Home from "./components/home.vue";
import Progress from "./components/progress.vue";
import Spinners from "./components/spinners.vue";

// alerts
import Alerts from "./components/alerts/alerts.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/accordion",
      name: "Accordion",
      component: Accordion
    },
    {
      path: "/action_sheet",
      name: "Action Sheet",
      component: ActionSheet
    },
    {
      path: "/badge",
      name: "Badge",
      component: Badge
    },
    {
      path: "/buttons",
      name: "Buttons",
      component: Buttons
    },
    {
      path: "/cards",
      name: "Cards",
      component: Cards
    },
    {
      path: "/carosel",
      name: "Carousel",
      component: Carousel
    },
    {
      path: "/forms",
      name: "Forms",
      component: Forms
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/progress",
      name: "Progress",
      component: Progress
    },
    {
      path: "/spinners",
      name: "Spinners",
      component: Spinners
    },
    {
      path: "/alerts",
      name: "Alerts",
      component: Alerts
    }
  ]
});