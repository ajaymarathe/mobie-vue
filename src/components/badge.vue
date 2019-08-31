<template>
    <div>
        <div class="mobie-badge container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <p>badges as list</p>
                    <ul class="list-group list-group-flush mb-3">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>Cras justo odio</span>
                        <span class="badge badge-pill badge-primary">Primary</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>Cras justo odio</span>
                        <span class="badge badge-pill badge-success">Primary</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>Cras justo odio</span>
                        <span class="badge badge-pill badge-danger">56</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>Cras justo odio</span>
                        <span class="badge badge-pill badge-warning">
                        <i class="material-icons">
                        call
                        </i>
                        </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>Cras justo odio</span>
                        <span class="badge badge-pill badge-light">100</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>Cras justo odio</span>
                        <span class="badge badge-pill badge-dark">Delete</span>
                    </li>
                    </ul>


                    <p>Example</p>
                    <h1>Example heading <span class="badge badge-secondary">New</span></h1>
                    <h2>Example heading <span class="badge badge-secondary">New</span></h2>
                    <h3>Example heading <span class="badge badge-secondary">New</span></h3>
                    <h4>Example heading <span class="badge badge-secondary">New</span></h4>
                    <h5>Example heading <span class="badge badge-secondary">New</span></h5>
                    <h6>Example heading <span class="badge badge-secondary">New</span></h6>

                    <hr>
                    <p>Badge in Button</p>
                    <button type="button" class="btn btn-primary">
                        Notifications <span class="badge badge-light">4</span>
                    </button>

                    <hr>
                    <p>Contextual variations</p>
                    <span class="badge badge-primary">Primary</span>
                    <span class="badge badge-secondary">Secondary</span>
                    <span class="badge badge-success">Success</span>
                    <span class="badge badge-danger">Danger</span>
                    <span class="badge badge-warning">Warning</span>
                    <span class="badge badge-info">Info</span>
                    <span class="badge badge-light">Light</span>
                    <span class="badge badge-dark">Dark</span>
            


                    <hr>
                    <!-- #pill badges -->

                    <p>Pill badges</p>
                    <span class="badge badge-pill badge-primary">Primary</span>
                    <span class="badge badge-pill badge-secondary">Secondary</span>
                    <span class="badge badge-pill badge-success">Success</span>
                    <span class="badge badge-pill badge-danger">Danger</span>
                    <span class="badge badge-pill badge-warning">Warning</span>
                    <span class="badge badge-pill badge-info">Info</span>
                    <span class="badge badge-pill badge-light">Light</span>
                    <span class="badge badge-pill badge-dark">Dark</span>

                    <hr>
                    <!-- #links -->
                    <p>Links</p>
                    <a href="#" class="badge badge-primary">Primary</a>
                    <a href="#" class="badge badge-secondary">Secondary</a>
                    <a href="#" class="badge badge-success">Success</a>
                    <a href="#" class="badge badge-danger">Danger</a>
                    <a href="#" class="badge badge-warning">Warning</a>
                    <a href="#" class="badge badge-info">Info</a>
                    <a href="#" class="badge badge-light">Light</a>
                    <a href="#" class="badge badge-dark">Dark</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "badge",
        components:{
            
        },
        data:function(){
            return {
                title: "Badge",
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>