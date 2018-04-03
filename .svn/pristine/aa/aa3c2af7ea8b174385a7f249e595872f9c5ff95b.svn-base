<template>
    <div class="system_mian">
		<Button type="info" @click="back">
                <Icon type="ios-undo"></Icon>
                返回列表
        </Button>
		<div class="system"><p>提成配置</p></div>
		<div v-if="add == true" style="width:80%;margin-left:10%;margin-top:20px;" >
			<Row type="flex" justify="space-around" class="code-row-bg">
				<Col span="6">
				   <div class="systemImg systemImg1" 
				   @mouseenter="showActive(1)" 
				   @mouseleave="showActive(0)"
				   @click="addShow(1)">
						<img v-if="active === 1" style="height:92px;width:100px" src="../../../../../static/img/systemSet/zzkf2.png" alt="自主开发">
					    <img v-else style="height:92px;width:100px" src="../../../../../static/img/systemSet/zzkf.png" alt="自主开发2">
					</div>
				</Col>
				<Col span="6">
				   <div class="systemImg systemImg2" 
				   @mouseenter="showActive(2)" 
				   @mouseleave="showActive(0)"
				   @click="addShow(2)">
						<img v-if="active === 2" style="height:92px;width:100px" src="../../../../../static/img/systemSet/ptfp2.png" alt="自主开发">
					    <img v-else style="height:92px;width:100px" src="../../../../../static/img/systemSet/ptfp.png" alt="自主开发2">
					</div>
				</Col>
				<Col span="6">
				   <div class="systemImg systemImg3" 
				   @mouseenter="showActive(3)" 
				   @mouseleave="showActive(0)"
				   @click="addShow(3)">
						<img v-if="active === 3" style="height:92px;width:100px" src="../../../../../static/img/systemSet/lcs2.png" alt="自主开发">
					    <img v-else style="height:92px;width:100px" src="../../../../../static/img/systemSet/lcs.png" alt="自主开发2">
					</div>
				</Col>
			</Row>
		</div>
        <Form  style="width:80%;margin-left:10%;margin-top:20px;" ref="formValidate" label-position="top" :model="formValidate" :rules="ruleValidate"  >
            <div class="develop" v-if="add1 == false">
				<p style="display:flex">
					<span style="flex:1;font-weight: 700;font-size:16px">自主开发</span>
				</p>
				<div class="develop_one">
					<Row  class="develop_row code-row-bg" >
						<Col  span="8">
							<FormItem label="区域 :" prop='one'>
								<Select :disabled="disableds" v-model="formValidate.one" style="width:200px">
									<Option value="上海">上海</Option>
									<Option value="山东">山东</Option>
								</Select>
							</FormItem>
						</Col>
						<Col span="8" >
							<FormItem label="部门 :" >           
								<Select :disabled="disableds" v-model="formValidate.two" style="width:200px">
									<Option value="市场">市场</Option>
									<Option value="运营">运营</Option>
									<Option value="客服">客服</Option>
									<Option value="风控">风控</Option>
								</Select>
							</FormItem>
						</Col>
						<Col span="8" >
							<FormItem label="员工等级 :" >           
								<Select :disabled="disableds" v-model="formValidate.three" style="width:200px">
									<Option value="A">A</Option>
									<Option value="B">B</Option>
									<Option value="C">C</Option>
									<Option value="D">D</Option>
								</Select>
							</FormItem>
						</Col>
						<Col  span="8">
							<FormItem label="当前提成 :" >
								<Input :disabled="disableds" v-model="formValidate.four" style="width:200px" placeholder="请输入当前提成比例" ></Input>%
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
				<p style="display:flex">
					<span style="flex:1;font-weight: 700;font-size:16px">平台分配</span>				
				</p>
				<div class="develop_one">
					<Row  class="develop_row code-row-bg">
						<Col  span="8">
							<FormItem label="区域 :" >
								<Select :disabled="disableds" v-model="formValidate.category" style="width:200px">
									<Option value="上海">上海</Option>
									<Option value="山东">山东</Option>
								</Select>
							</FormItem>
						</Col>
						<Col span="8" >
							<FormItem label="部门 :" >           
								<Select :disabled="disableds" v-model="formValidate.one" style="width:200px">
									<Option value="市场">市场</Option>
									<Option value="运营">运营</Option>
									<Option value="客服">客服</Option>
									<Option value="风控">风控</Option>
								</Select>
							</FormItem>
						</Col>
						<Col span="8" >
							<FormItem label="员工等级 :" >           
								<Select :disabled="disableds" v-model="formValidate.two" style="width:200px">
									<Option value="A">A</Option>
									<Option value="B">B</Option>
									<Option value="C">C</Option>
									<Option value="D">D</Option>
								</Select>
							</FormItem>
						</Col>
						<Col  span="8">
							<FormItem label="当前提成 :" prop="three" >
								<Input :disabled="disableds" v-model="formValidate.three" style="width:200px" placeholder="请输入当前提成比例" ></Input>%
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
				<p style="display:flex">
					<span style="flex:1;font-weight: 700;font-size:16px">理财师</span>
				</p>
				<div class="develop_one">
					<Row  class="develop_row code-row-bg" >
						<Col  span="8">
							<FormItem label="区域 :" >
								<Select :disabled="disableds" v-model="formValidate.category" style="width:200px">
									<Option value="上海">上海</Option>
									<Option value="山东">山东</Option>
								</Select>
							</FormItem>
						</Col>
						<Col  span="8">
							<FormItem label="理财师等级 :" >
								<Select :disabled="disableds" v-model="formValidate.category" style="width:200px">
									<Option value="一级理财师">一级理财师</Option>
									<Option value="二级理财师">二级理财师</Option>
									<Option value="三级理财师">三级理财师</Option>
								</Select>
							</FormItem>
						</Col>
						<Col span="8" >
							<FormItem label="分润比例 :" prop="three" >
								<Input :disabled="disableds" v-model="formValidate.three" style="width:200px" placeholder="请输入当前提成比例" ></Input>%
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
                formValidate: {
                    one: '',
                    two: '',
                    three:'',
                    four:'', 
                },
                ruleValidate: {
                    // one: [
                    //     {  required: true, message: '输入框不能为空', trigger: 'blur'}
                    // ],
                    two: [
                        {  required: true, message: '输入框不能为空', trigger: 'blur'}
                    ],
                    three:[
                       {  required: true, message: '输入框不能为空', trigger: 'blur'}
                    ],
                    four:[
                       {  required: true, message: '输入框不能为空', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                console.log(this.formValidate.category);
                console.log(this.formValidate.seven);
                console.log(this.formValidate.twelve);
				setTimeout(() => {
					this.$emit('addSystem1',true);
				}, 1000);
				
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset () {
                // this.$refs[name].resetFields();
				this.add=true;
				this.add1 = true;
				this.add2 = true;
				this.add3 = true;
			},
			showActive(index) {
				this.active = index;
				// console.log(index)
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
				console.log(index)
			},
			back(){
				this.$emit('addSystem1',true)
			}
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
	   /* padding-left: 40px; */
	   background-color: #F6F6F6;
	   border: 1px solid #F6F6F6
   }
   .develop_row{
	   margin-top: 10px;
	   margin-left: 20px;
   }
</style>

