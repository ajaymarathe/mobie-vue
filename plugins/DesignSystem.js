// ui dependency
import "../assets/css/bootstrap.min.css";

import "../assets/js/jquery.min.js";
import "../assets/js/popper.min.js";
import "../assets/js/bootstrap.min.js";

import GlobalComponents from './globalComponent';

export default {
    install(Vue) {
        Vue.use(GlobalComponents);
    }
};
