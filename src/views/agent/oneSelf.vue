<template>
    <div class="zhan_mian">
        <Button type="info" @click="back">
			<Icon type="ios-undo"></Icon>
			返回首页
		</Button>
		
        <Tabs value="name1" @on-click="tabChange" style="margin-top:20px"> 
            <TabPane label="个人中心" name="name1">
                <self-one></self-one>
            </TabPane>
            <TabPane label="收货地址" name="name2">
                <self-two></self-two>
            </TabPane>
            <TabPane label="银行卡管理" name="name3">
                <self-three></self-three>
            </TabPane>
            <TabPane label="安全中心" name="name4">
                <self-four></self-four>
            </TabPane>
        </Tabs>
        
         
    </div>
</template>
<script>
import selfOne from './home/selfOne'
import selfTwo from './home/selfTwo'
import selfThree from './home/selfThree'
import selfFour from './home/selfFour'
export default {
       name: 'dashboard',
       components:{
           selfOne,
           selfTwo,
           selfThree,
           selfFour
       },
        data () {
            return {
                formValidate: {
                    category: '',
                    one:'',
                    two: '',
                    three:'',
                    four:'',
                    five:'',
                    six: '', 
                    seven:''
                }
            }
        },
        methods: {
            back(){
                 this.$router.push({path:'/'})
            },
            tabChange(e){
                 console.log(e)
            },
            ayub(){
                console.log('ssssss')
            }
		}
    }
</script>
<style>
	.zhan_mian{
		border-top: 3px solid #48A2FE; 
		background-color: #ffffff;
		padding: 20px;
		border-radius: 5px;
	}
   
</style>

