<template>
    <div>

        <essential-information  v-on:myevent="receive"></essential-information>
        <!-- <apply-for-expenditure :cm="receivemsg"></apply-for-expenditure> -->
    </div>
</template>

<script>
    import EssentialInformation from "./EssentialInformation";
    // import ApplyForExpenditure from "./ApplyForExpenditure";
    export default {
        name: "ProjectSectionContentTable",
        data(){
                return {
                    receivemsg:"",
                }
               
            },
            
        components:{
            EssentialInformation,
        },
        methods:{
            receive(data){
                 this.receivemsg = data;
            }
        },
       
    }
</script>

<style scoped lang="scss">

</style>