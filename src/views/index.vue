<template>
  <div class="home">
    <div class="first-section">
      <div class="container">
          <div class="row">
              <div class="col-md-8">
                  <div class="heading">
                      <h1 class="mb-3 mt-2">Mobie-UI</h1>
                      <h4 class="mb-3">Hi there, Mobie-UI is front-end html framework to create mobile apps using front-end framework like Vue, Angular and React, etc...</h4>

                  </div>
                  <div class="buttons d-flex justify-content-start">
                      <button class="btn btn-primary mr-4 shadow">Get Started</button>
                      <button class="btn btn-info shadow">Download</button>
                  </div>
                  <div class="links d-flex justify-content-start">
                      <a class="mr-2 text-dark" href="#">Docs</a>
                      <a class="mr-2 text-dark" href="#">Templates</a>
                      <a class="mr-2 text-dark" href="#">Forums</a>
                      <a class="mr-2 text-dark" href="#">Showcase</a>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="mobile-view">
                    <!-- <iframe class="mobile-view" src="../components/home.vue"> -->
                        <!-- <p>Your browser does not support iframes.</p> -->
                    <!-- </iframe>  -->
                      <Home/>
                  </div>
              </div>
          </div>  
      </div>
    </div>
    
    <!-- second section  -->
    <div class="second-section" style="margin-bottom: 4rem;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 text-center">
                    <div class="header">
                        <h3>Use Anything you want?</h3>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-5">
                        <img src="../assets/img/vue.png" style="width: 20%;"/>
                        <img src="../assets/img/angular.png" style="width: 20%;"/>
                        <img src="../assets/img/react.svg" style="width: 20%;"/>
                    </div>
                    <h4>Build anything you love with Mobie-Vue...</h4>
                </div>
            </div>
        </div>
    </div>

    <!-- third section -->

     <div class="third-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 text-center">
                    <div class="header">
                        <h3>Let’s Get Started</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- fourth section  -->

     <div class="fourth-section">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                   <div class="footer-links">
                        <a href="#">Project</a>
                        <a href="#">Download</a>
                        <a href="#">Blog</a>
                        <a href="#">License</a>
                   </div>
                </div>
                <div class="col-md-3">
                   <div class="footer-links">
                        <a href="#">Docs</a>
                        <a href="#">Mobie-Vue</a>
                        <a href="#">Mobie-Angular</a>
                        <a href="#">Mobie-React</a>
                   </div>
                </div>
                <div class="col-md-3">
                   <div class="footer-links">
                        <a href="#">Resources</a>
                        <a href="#">Forum </a>
                        <a href="#">Free Themes</a>
                        <a href="#">License</a>
                   </div>
                </div>
                <div class="col-md-3">
                   <div class="footer-links">
                        <a href="#">Connect</a>
                        <a href="#">Facebook</a>
                        <a href="#">Github</a>
                        <a href="#">Twitter</a>
                   </div>
                </div>
            </div>
        </div>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
// import  Nav  from "@/components/nav.vue";
import Home from "@/components/home.vue";

export default {
  name: "home",
  components: {
    Home
  },
  data:function(){
    return {
      title: "Home"
    }
  }
};
</script>
