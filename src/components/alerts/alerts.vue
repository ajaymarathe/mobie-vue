<template>
  <div class="mt-3">
    <h1>Alerts</h1>
    <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
    <p>
      Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight required contextual classes (e.g.,
      <code>.alert-success</code>).
    </p>

    <!-- alerts component  -->
    <Mobie-Alert :class="color.primary" :content="data.primary"></Mobie-Alert>
    <Mobie-Alert :class="color.secondary" :content="data.secondary"></Mobie-Alert>
    <Mobie-Alert :class="color.danger" :content="data.danger"></Mobie-Alert>
    <Mobie-Alert :class="color.warning" :content="data.warning"></Mobie-Alert>
    <Mobie-Alert :class="color.info" :content="data.info"></Mobie-Alert>
    <Mobie-Alert :class="color.light" :content="data.light"></Mobie-Alert>
    <Mobie-Alert :class="color.dark" :content="data.dark"></Mobie-Alert>

    <prism class="p-0" language="javascript">{{ code }}</prism>

    <div style="padding-bottom: 5rem;"></div>
  </div>
</template>

<script>
import MobieAlert from "./m-alert.vue";
import Prism from "vue-prism-component";
export default {
  name: "alerts",
  components: {
    MobieAlert,
    Prism
  },
  data() {
    return {
      data: {
        primary: "A simple primary alert—check it out!",
        secondary: "A simple secondary alert—check it out!",
        success: "A simple success alert—check it out!",
        danger: "A simple danger alert—check it out!",
        warning: "A simple warning alert—check it out!",
        info: "A simple info alert—check it out!",
        light: "A simple light alert—check it out!",
        dark: "A simple dark alert—check it out!"
      },
      color: {
        primary: "alert-primary",
        secondary: "alert-secondary",
        success: "alert-success",
        danger: "alert-danger",
        warning: "alert-warning",
        info: "alert-info",
        light: "alert-light",
        dark: "alert-dark"
      },
      code: `
        <template>
            <div>
                <Mobie-Alert :class="color.primary" :content="data.primary"></Mobie-Alert>

                <Mobie-Alert :class="color.secondary" :content="data.secondary"></Mobie-Alert>

                <Mobie-Alert :class="color.danger" :content="data.danger"></Mobie-Alert>
                
                <Mobie-Alert :class="color.warning" :content="data.warning"></Mobie-Alert>

                <Mobie-Alert :class="color.info" :content="data.info"></Mobie-Alert>

                <Mobie-Alert :class="color.light" :content="data.light"></Mobie-Alert>

                <Mobie-Alert :class="color.dark" :content="data.dark"></Mobie-Alert>
            </div>
        </template>

    
        `
    };
  }
};
</script>
