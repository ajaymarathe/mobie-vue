<template>
    <div>
        <!-- navbar -->
        <Nav :title="title" />
        <!-- end navbar -->
         <ul class="list-group list-group-flush">
            <router-link to="hello">
                <li class="list-group-item d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <i class="material-icons mr-4">favorite </i>
                        <span>Accordion</span>
                    </div>
                    <i class="material-icons mr-1">keyboard_arrow_right</i>
                </li>
            </router-link>
            <router-link to="buttons">
                <li class="list-group-item d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <i class="material-icons mr-4">favorite </i>
                        <span>Buttons</span>
                    </div>
                    <i class="material-icons mr-1">keyboard_arrow_right</i>
                </li>
            </router-link>
            <router-link to="actionsheet">
                <li class="list-group-item d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <i class="material-icons mr-4">favorite </i>
                        <span>Action Sheet</span>
                    </div>
                    <i class="material-icons mr-1">keyboard_arrow_right</i>
                </li>
            </router-link>
            <router-link to="badge">
                <li class="list-group-item d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <i class="material-icons mr-4">favorite </i>
                        <span>Badge</span>
                    </div>
                    <i class="material-icons mr-1">keyboard_arrow_right</i>
                </li>
            </router-link>
            <router-link to="spinners">
                <li class="list-group-item d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <i class="material-icons mr-4">favorite </i>
                        <span>Spinners</span>
                    </div>
                    <i class="material-icons mr-1">keyboard_arrow_right</i>
                </li>
            </router-link>
            <router-link to="cards">
                <li class="list-group-item d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <i class="material-icons mr-4">favorite </i>
                        <span>Cards</span>
                    </div>
                    <i class="material-icons mr-1">keyboard_arrow_right</i>
                </li>
            </router-link>

            <router-link to="forms">
                <li class="list-group-item d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <i class="material-icons mr-4">favorite </i>
                        <span>Forms</span>
                    </div>
                    <i class="material-icons mr-1">keyboard_arrow_right</i>
                </li>
            </router-link>
            <router-link to="contact_list">
                <li class="list-group-item d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <i class="material-icons mr-4">favorite </i>
                        <span>Contacts List</span>
                    </div>
                    <i class="material-icons mr-1">keyboard_arrow_right</i>
                </li>
            </router-link>
            <router-link to="contect_block">
                <li class="list-group-item d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <i class="material-icons mr-4">favorite </i>
                        <span>Content Block</span>
                    </div>
                    <i class="material-icons mr-1">keyboard_arrow_right</i>
                </li>
            </router-link>
            <router-link to="modal">
                <li class="list-group-item d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <i class="material-icons mr-4">favorite </i>
                        <span>Modal</span>
                    </div>
                    <i class="material-icons mr-1">keyboard_arrow_right</i>
                </li>
            </router-link>

            <router-link to="grid">
                <li class="list-group-item d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <i class="material-icons mr-4">favorite </i>
                        <span>Grid / Layout Grid</span>
                    </div>
                    <i class="material-icons mr-1">keyboard_arrow_right</i>
                </li>
            </router-link>
            <div style="margin-bottom: 150px;"></div>
        </ul>
    </div>
</template>

<script>
import  Nav  from "@/components/nav.vue";
    export default {
        name:"home",
        components:{
            Nav,
        },
        data:function(){
            return {
                title: "Home",
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>