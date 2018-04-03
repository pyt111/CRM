<template>
  <div>
      <Row>
          <Col v-if="show==true">
             <system-set @addSystem="addSestemForm"></system-set>
          </Col>
          <Col v-if="show==false" >
             <add-system-set @addSystem1="addSestemForm1"></add-system-set>
          </Col>
      </Row>
  </div>
</template>
<script>
    import systemSet from './system/systemSet';
    import AddSystemSet from './system/AddSystemSet'
    export default{
        name:'dashboard',
        components: {
			systemSet,
			AddSystemSet
		},
        data(){
             return {
                 show:true
             }
        },
        methods:{
            addSestemForm(data){
               this.show = data
               console.log(data)
            },
            addSestemForm1(data){
                this.show = data;
                console.log(data)
            }
        }
    }
</script>