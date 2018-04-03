<template>
    <div class="system_mian">
		<div class="system">
		    <p>属性配置</p>
		</div>
		<div v-if="add == true" style="width:80%;margin-left:10%;margin-top:20px;" >
			<Row type="flex" justify="space-around" class="code-row-bg">
				<Col span="6">
				   <div class="systemImg systemImg1" 
				   @mouseenter="showActive(1)" 
				   @mouseleave="showActive(0)"
				   @click="addShow(1)">
						<img v-if="active === 1" style="height:75px;width:48px" src="../../../../../static/img/systemSet/qy2.png" alt="自主开发">
					    <img v-else style="height:75px;width:48px" src="../../../../../static/img/systemSet/qy.png" alt="自主开发2">
					</div>
				</Col>
				<Col span="6">
				   <div class="systemImg systemImg2" 
				   @mouseenter="showActive(2)" 
				   @mouseleave="showActive(0)"
				   @click="addShow(2)">
						<img v-if="active === 2" style="height:75px;width:48px" src="../../../../../static/img/systemSet/bm2.png" alt="自主开发">
					    <img v-else style="height:75px;width:48px" src="../../../../../static/img/systemSet/bm.png" alt="自主开发2">
					</div>
				</Col>
				<Col span="6">
				   <div class="systemImg systemImg3" 
				   @mouseenter="showActive(3)" 
				   @mouseleave="showActive(0)"
				   @click="addShow(3)">
						<img v-if="active === 3" style="height:75px;width:48px" src="../../../../../static/img/systemSet/dj2.png" alt="自主开发">
					    <img v-else style="height:75px;width:48px" src="../../../../../static/img/systemSet/dj.png" alt="自主开发2">
					</div>
				</Col>
			</Row>
		</div>
        <Form  style="width:80%;margin-left:10%;margin-top:20px;" ref="formValidate" label-position="right" :model="formValidate"   >
            <div class="develop" v-if="add1 == false">
				<div style="display:flex">
				    <div style="flex:1;">
					   <Row>
					      <Col span='5'>
						        区域：
								<Input :disabled="disableds" v-model="city" size="small" style="width:100px" placeholder="请输入当前提成比例" ></Input>	
						  </Col>
						  <Col span='4'>
								<Button type="primary" size="small" @click="check">搜索</Button>
						  </Col>
					   </Row>
					</div>
					<div>
						<!-- 区域增加删除 -->
					    <span @click="addCity">
							<Icon type="plus-circled" color="#40A9FF"></Icon>
						</span> |
						<span @click="removeCity">
							<Icon type="trash-a" color="red"></Icon>
						</span>
					</div>
					
				</div>
				<div class="develop_one">
					<Row  class="develop_row " :gutter="16">
					
						<Col v-for="(item,index) in formValidate.citys" :key="item.id" span="8" >
							<FormItem :class="isOK==index?'addr1':'addr'" >
							    <p @click="checkBox(index)" label="item" >{{item}}</p>
							</FormItem>
						</Col>
						
						<Col  span="8" v-if="cityShow">
							<FormItem  >
								<Input  v-model="formValidate.two" style="width:200px" placeholder="请输入地址" ></Input>
							</FormItem>
						</Col>
					</Row>
				</div>
				<Row style="margin-top:20px">
					<Col span="8">
						<FormItem>
							<Button type="primary"  @click="handleSubmit('formValidate')">保存</Button>
							<Button type="ghost" @click="handleReset()" style="margin-left: 8px">取消</Button>
							
						</FormItem>
					</Col>
				</Row> 
			</div> 
			<div class="develop" v-if="add2 == false">
				<div style="display:flex">
				    <div style="flex:1;">
					   <Row>
					      <Col span='5'>
						        部门：
								<Input :disabled="disableds" v-model="branch" size="small" style="width:100px" placeholder="请输入当前提成比例" ></Input>	
						  </Col>
						  <Col span='4'>
								<Button type="primary" size="small" @click="check">搜索</Button>
						  </Col>
					   </Row>
					</div>
					<div>
						<!-- 部门增加删除 -->
					    <span @click="addCity">
							<Icon type="plus-circled" color="#40A9FF"></Icon>
						</span> |
						<span @click="removeCity1">
							<Icon type="trash-a" color="red"></Icon>
						</span>
					</div>
					
				</div>
				<div class="develop_one">
					<Row  class="develop_row " :gutter="16">
					
						<Col v-for="(item,index) in formValidate.branchs" :key="item.id" span="8" >
							<FormItem :class="isOK==index?'addr1':'addr'" >
							    <p @click="checkBox(index)" label="item" >{{item}}</p>
							</FormItem>
						</Col>
						
						<Col  span="8" v-if="cityShow">
							<FormItem  >
								<Input  v-model="formValidate.two" style="width:200px" placeholder="请输入地址" ></Input>
							</FormItem>
						</Col>
					</Row>
				</div>
				<Row style="margin-top:20px">
					<Col span="8">
						<FormItem>
							<Button type="primary"  @click="handleSubmit('formValidate')">保存</Button>
							<Button type="ghost" @click="handleReset()" style="margin-left: 8px">取消</Button>
							
						</FormItem>
					</Col>
				</Row> 
			</div> 
			<div class="develop" v-if="add3 == false">
				<div style="display:flex">
				    <div style="flex:1;">
					   <Row>
					      <Col span='5'>
						        等级：
								<Input :disabled="disableds" v-model="grade" size="small" style="width:100px" placeholder="请输入当前提成比例" ></Input>	
						  </Col>
						  <Col span='4'>
								<Button type="primary" size="small" @click="check">搜索</Button>
						  </Col>
					   </Row>
					</div>
					<div>
						<!-- 等级增加删除 -->
					    <span @click="addCity">
							<Icon type="plus-circled" color="#40A9FF"></Icon>
						</span> |
						<span @click="removeCity2">
							<Icon type="trash-a" color="red"></Icon>
						</span>
					</div>
					
				</div>
				<div class="develop_one">
					<Row  class="develop_row " :gutter="16">
					
						<Col v-for="(item,index) in formValidate.grades" :key="item.id" span="8" >
							<FormItem :class="isOK==index?'addr1':'addr'" >
							    <p @click="checkBox(index)" label="item" >{{item}}</p>
							</FormItem>
						</Col>
						
						<Col  span="8" v-if="cityShow">
							<FormItem  >
								<Input  v-model="formValidate.two" style="width:200px" placeholder="请输入地址" ></Input>
							</FormItem>
						</Col>
					</Row>
				</div>
				<Row style="margin-top:20px">
					<Col span="8">
						<FormItem>
							<Button type="primary"  @click="handleSubmit('formValidate')">保存</Button>
							<Button type="ghost" @click="handleReset()" style="margin-left: 8px">取消</Button>
							
						</FormItem>
					</Col>
				</Row> 
			</div>      
        </Form>
    </div>
</template>
<script>
export default {
       
        data () {
            return {
				disableds:false,
				active:0,
				add:true,
				add1:true,
				add2:true,
				add3:true,
				cityShow:false,
				isOK:'-1',
				city:'',
				branch:'',
				grade:'',
                formValidate: {
					citys:['山东','上海','北京'],
					branchs:['技术','运营','市场'],
					grades:['A','B','C'],
                    two:'',
                    four:'', 
                }
            }
        },
        methods: {
            handleSubmit (name) {
				// console.log(this.formValidate);
				// console.log(this.formValidate.two);
                // console.log(this.formValidate.category);
                // console.log(this.formValidate.seven);
                // console.log(this.formValidate.twelve);
				if(this.cityShow == false){
                      this.$Message.error('没有选择添加城市');
				}else{
					this.formValidate.citys.push(this.formValidate.two);
					setTimeout(() => {
							this.add=true;
							this.add1 = true;
							this.add2 = true;
							this.add3 = true;
							this.cityShow = false
					}, 1000);
					var array = this.formValidate.citys
					  for(var i=0;i<array.length;i++){
						  if(array[i] == ''||typeof(array[i])=='undefined'){
							  array.splice(i,1);
							  i=i-1
						  }
					  }
					   return array;
					   
					  console.log(array)
                      
                     
				}
				
				
            },
            handleReset () {
                // this.$refs[name].resetFields();
				this.add=true;
				this.add1 = true;
				this.add2 = true;
				this.add3 = true;
			},
			check(){
                console.log(this.city)
			},
			addCity(){
				this.cityShow = true
			},
			removeCity(){
				console.log(this.isOK)
				if(this.isOK != '-1'){
					this.formValidate.citys.splice(this.isOK,1)
				}
			},
			removeCity1(){
				if(this.isOK != '-1'){
					this.formValidate.branchs.splice(this.isOK,1)
					
				}
			},
			removeCity2(){
				if(this.isOK != '-1'){
					this.formValidate.grades.splice(this.isOK,1)
					
				}
			},
			showActive(index) {
				this.active = index;
			},
			addShow(index){
				this.add = false;
				if(index == 1){
					this.add1 = false;
					this.add2 = true;
					this.add3 = true;
				}else if(index ==2){
					this.add1 = true;
					this.add2 = false;
					this.add3 = true;
				}else{
					this.add1 = true;
					this.add2 = true;
					this.add3 = false;
				}
				// console.log(index)
			},
			checkBox(index){
                this.isOK = index;
			},
			
		}
    }
</script>
<style>
	.system_mian{
		border-top: 3px solid #48A2FE; 
		background-color: #ffffff;
		padding: 20px;
		border-radius: 5px;
		
	}
   .system{
	   height: 60px;
	   width: 100%;
	   border-bottom: 1px solid #ccc
   }
   .system p{
       border-bottom:2px solid #40A9FF;
       font-weight: 700;
	   font-size: 18px;
       padding:10px;
       line-height: 70px;
       width:96px;
       height: 60px;
   }
   .systemImg{
	   border: 2px solid #cccccc;
	   border-radius: 5px;
	   text-align: center;
	   height: 160px;
	   width: 200px;
	   line-height: 160px;
	   background-color: #F4F8F9;
   }
   .systemImg1:hover,.systemImg2:hover,.systemImg3:hover{
	   background-color: #ffffff;
   }
   .develop_one{
	   margin-top:5px;
	   padding: 10px;
	   background-color: #F6F6F6;
	   border: 1px solid #F6F6F6
   }
   .addr{
	   border:1px solid #ccc;
	   text-align:center;
	   border-radius:5px;
	   background-color:#ffffff
   }
   .addr:hover{
	   border:1px solid #3884ED;
   }
   .addr1{
	   border:1px solid #3884ED;
	   text-align:center;
	   border-radius:5px;
	   background-color:#ffffff
   }
   .develop_row{
	   margin-top: 10px
   }
</style>
<style>
   /* .develop_one .ivu-checkbox-wrapper{
        width:100%
   }
   .develop_one .ivu-checkbox-inner{
	    display:none      
   } */
</style>

