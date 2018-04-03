
<template>
	<div >
		<Row>
          <Col v-if="show == -2">
             <crews-manage @addCrewsManage="addCrewsForm" @addCrewsManageS="addCrewsFormS"></crews-manage>
          </Col>
          <Col v-if="show == -1" >
             <add-crews @addCrewsManage1="addCrewsForm1"></add-crews>
          </Col>
		  <Col v-if="show != -1&&show != -2 " >
             <alter-crews @addCrewsManage2="addCrewsForm2"></alter-crews>
          </Col>
      </Row>
	</div>
</template>


<script>
	import axios from 'axios';
	import crewsManage from './crewsManage/crewsManage'
	import addCrews from './crewsManage/addCrews'
	import alterCrews from './crewsManage/alterCrews'
	export default {
		components:{
			crewsManage,
			addCrews,
			alterCrews
		},
		 data(){
             return {
                 show:-2
             }
        },
		mounted() {
			
		},
		methods: {
			addCrewsForm(data){
                this.show = data
			},
			addCrewsFormS(data){
                this.show = data
			},
			addCrewsForm1(data){
				this.show = data 
			},
			addCrewsForm2(data){
				this.show = data
			}
		},
		created(){			
			
		}

	}
</script>




