<template>
        <div>
        <div class="pr-3 pl-3 d-flex justify-content-between">
            <button class="btn btn-primary"  data-toggle="modal" data-target="#exampleModal">End #1</button>
            <button class="btn btn-primary" data-toggle="modal" data-target="#actionTwo" >Start #2</button>
            <button class="btn btn-primary" data-toggle="modal" data-target="#middleModal" >Middle #2</button>
        </div>

        <!-- Start #1 -->
      
        <div class="modal fade bd-example-modal-sm" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm modal-end" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="d-block">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>

        <!-- Start 2# -->
        <div class="modal fade bd-example-modal-sm" id="actionTwo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="d-block">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"actionsheet",
        components:{

        },
        data:function(){
            return {
                title: 'Action Sheet'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>