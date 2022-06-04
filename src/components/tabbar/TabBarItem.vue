<template>
    <div class="TabbarItem" @click="itemClick">
        <slot >

                <div v-if="!isActive"> <slot name="itemimg">图片 </slot> </div>
                <div v-else> <slot name="itemimgactive">激活图片 </slot></div>
                <div :style="activeStyle" > <slot name="itemtxt"> 444</slot></div>

        </slot>


    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        data(){
            return {
                //isActive: true,
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            },

            activeStyle(){
                return this.isActive ? {color:this.activeColor} :{}
            },
        },

        methods:{

            itemClick(){
                console.log('itemClick');
                console.log();
                this.$router.push(this.path);
            }
        }
    }
</script>

<style>

    .TabbarItem img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;

    }
    @media screen and (max-width: 960px){
        .TabbarItem  {
            height: 55px;
            flex: 1;
            text-align: center;
            /*direction: ltr;*/
            /*flex-direction: row;*/
            /*justify-content: space-around;*/

        }
    }
    @media screen and (min-width: 960px){
        .TabbarItem  {
            width: 10%;
            height: 55px;
            text-align: center;
        }


    }


</style>