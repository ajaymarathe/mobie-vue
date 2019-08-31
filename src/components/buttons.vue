<template>
    <div>
         <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <p>Normal buttons</p>
                    <div class="d-flex justify-content-between mb-4">
                        <button class="btn shadow-sm">Buttons</button>
                        <button class="btn shadow-sm">Buttons</button>
                        <button class="btn shadow-sm">Buttons</button>
                    </div>
                    <p>Fill buttons</p>
                    <div class="d-flex justify-content-between  mb-4">
                        <button class="btn btn-primary">Buttons</button>
                        <button class="btn btn-danger">Buttons</button>
                        <button class="btn btn-warning">Buttons</button>
                    </div>
                    <div class="d-flex justify-content-between mb-4">
                        <button class="btn btn-success">Buttons</button>
                        <button class="btn btn-light">Buttons</button>
                        <button class="btn btn-dark">Buttons</button>
                    </div>
                    <div class="d-flex justify-content-start mb-4">
                        <button class="btn btn-secondary">Buttons</button>
                    </div>

                        <p>Outline buttons</p>

                    <div class="d-flex justify-content-between mb-4">
                        <button class="btn btn-outline-primary">Buttons</button>
                        <button class="btn btn-outline-info">Buttons</button>
                        <button class="btn btn-outline-success">Buttons</button>
                    </div>

                        <p>Gradient buttons</p>

                    <div class="d-flex justify-content-between mb-4">
                        <button class="btn btn-malinka">Buttons</button>
                        <button class="btn btn-morpheus">Buttons</button>
                        <button class="btn btn-strong">Buttons</button>
                    </div>

                        <p>Color Fill Buttons</p>

                    <div class="d-flex justify-content-between mb-4">
                        <button class="btn btn-mayablue">Buttons</button>
                        <button class="btn btn-ng">Buttons</button>
                        <button class="btn btn-red">Buttons</button>
                    </div>
                    <div class="d-flex justify-content-between mb-4">
                        <button class="btn btn-chocolate">Buttons</button>
                        <button class="btn btn-yellow">Buttons</button>
                        <button class="btn btn-orange">Buttons</button>
                    </div>

                        <p>Small Buttons</p>

                    <div class="d-flex justify-content-between mb-4">
                        <button class="btn btn-mayablue btn-sm">Buttons</button>
                        <button class="btn btn-ng btn-sm">Buttons</button>
                        <button class="btn btn-red btn-sm">Buttons</button>
                    </div>

                        <p>Rounded buttons</p>
                    <div class="d-flex justify-content-between mb-4">
                        <button class="btn btn-outline-primary btn-rounded">Buttons</button>
                        <button class="btn btn-outline-info btn-rounded">Buttons</button>
                        <button class="btn btn-outline-success btn-rounded">Buttons</button>
                    </div>

                            <p>Square buttons</p>

                        <div class="d-flex justify-content-between mb-4">
                            <button class="btn btn-outline-primary rounded-0">Buttons</button>
                            <button class="btn btn-outline-info rounded-0">Buttons</button>
                            <button class="btn btn-outline-success rounded-0">Buttons</button>
                        </div>
                    <div class="pl-3 pr-3">
                        <p>Block Level Buttons</p>
                    </div>
                    <div class="pl-3 pr-3 mb-4">
                        <button class="btn btn-primary btn-block">Buttons</button>
                        <button class="btn btn-primary btn-block btn-rounded">Buttons</button>
                        <button class="btn btn-primary btn-block rounded-0">Buttons</button>
                    </div>
                    <div style="margin-bottom: 100px;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"buttons",
        data:function(){
            return {
                title: "Buttons"
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>