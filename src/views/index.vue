<template>
  <div class="mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-10">
          <div class="card mb-3">
            <div class="card-body">
              <h2>Mobie Alert</h2>
              <m-alert
                content="This is a primary alert—check it out!"
                color="primary"
                dismissible="show"
              ></m-alert>
              <m-alert content="This is a success alert—check it out!" color="success"></m-alert>
              <m-alert show color="success" dismissible="show">
                <h4 class="alert-heading">Well done!</h4>
                <p>
                  Aww yeah, you successfully read this important alert message. This example text is going to
                  run a bit longer so that you can see how spacing within an alert works with this kind of
                  content.
                </p>
                <hr />
                <p
                  class="mb-0"
                >Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
              </m-alert>
            </div>
          </div>

          <!-- mobie cards start -->
          <div class="card">
            <div class="card-body">
              <h3>Mobie Cards</h3>
              <m-card>
                <template v-slot:header>
                  <h6 class="mb-0">Header Slot</h6>
                </template>
                <template
                  v-slot:body
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur, enim officiis adipisci, at alias magni nihil corrupti nostrum rerum ipsum possimus corporis eum expedita blanditiis! Illum eius sed nostrum.</template>
                <template v-slot:footer>
                  <h6 class="mb-0">Footer Slot</h6>
                </template>
              </m-card>
            </div>
          </div>

          <!-- mobie buttons start -->
          <div class="card">
            <div class="card-header">Mobie Buttons</div>
            <div class="card-body d-flex justify-content-around">
              <M-Button color="primary">click me</M-Button>
              <M-Button color="warning" size="lg">click me</M-Button>
              <M-Button color="info" size="lg">click me</M-Button>
              <M-Button color="outline-dark">click me</M-Button>
            </div>
            <M-Button color="danger" size="block">click me</M-Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MAlert from "../components/alerts/m-alert";
import MCard from "../components/cards/m-card";

export default {
  name: "home",
  components: {
    MAlert,
    MCard
    // MCardHeader
  },
  data: function() {
    return {
      title: "Home"
    };
  }
};
</script>
