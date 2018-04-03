<template>
    <div class="zhan_mian">
    <Button type="info" @click="back">
			<Icon type="ios-undo"></Icon>
			返回列表
		</Button>
		<div class="zhandian">
           <p>维护员新增</p>
        </div>
        <Form style="width:80%;margin-left:10%;margin-top:20px" ref="formValidate" label-position="top" :model="formValidate" :rules="ruleValidate"  >
            <Row >
                <Col span="8">
                    <FormItem label="维护员姓名 :" prop="category" >
                        <Input v-model="formValidate.category"  placeholder="请输入维护员姓名..." style="width:200px"></Input>
                    </FormItem>
                </Col>
                <Col span="8" >
                    <FormItem label="维护员手机号 :" prop="one">
                        <Input v-model="formValidate.one" placeholder="请输入维护员手机号..." style="width:200px"></Input> 
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="职能区域 ：" prop="two">
                        <Select v-model="formValidate.two" style="width:200px">
                            <Option value="上海">上海</Option>
                            <Option value="山东">山东</Option>
                        </Select>
                    </FormItem>               
                </Col>
            </Row>
            <Row >
                <Col span="8">
                    <FormItem label="职能部门 :" prop="three" >
                        <Select v-model="formValidate.three" style="width:200px">
                            <Option value="市场">市场</Option>
                            <Option value="运营">运营</Option>
                            <Option value="客服">客服</Option>
                            <Option value="风控">风控</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="等级 :" prop="four" >
                       <Select v-model="formValidate.four" style="width:200px">
                            <Option value="A">A</Option>
                            <Option value="B">B</Option>
                            <Option value="C">C</Option>
                            <Option value="D">D</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="上级姓名 :" prop="five" >
                        <Input v-model="formValidate.five"  placeholder="" style="width:200px"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row >
                <Col span="8">
                    <FormItem label="入职时间 :" prop="six" >
                         <DatePicker v-model="formValidate.six" type="date" placeholder="2018/01/02" style="width: 200px"></DatePicker>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="登录密码 :" prop="seven" >
                        <Input v-model="formValidate.seven"  placeholder="" style="width:200px"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row style="margin-top:20px">
                <Col span="8">
                     <FormItem>
                        <Button type="primary"  @click="handleSubmit('formValidate')">新增</Button>
                        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                        
                    </FormItem>
                </Col>
            </Row>            
        </Form>
        <div style="height:60px"></div>
    </div>
</template>
<script>
export default {
       
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
                },
                ruleValidate: {
                    category: [
                        {  required: true, message: '输入框不能为空', trigger: 'blur'}
                    ],
                    one: [
                        {  required: true, message: '输入框不能为空', trigger: 'blur'}
                    ],
                    two: [
                        {  required: true, message: '输入框不能为空', trigger: 'blur'}
                    ],
                    three:[
                       {  required: true, message: '输入框不能为空', trigger: 'blur'}
                    ],
                    four:[
                       {  required: true, message: '输入框不能为空', trigger: 'blur'}
                    ],
                    five:[
                        {  required: true, message: '输入框不能为空', trigger: 'blur'}
                    ],
                    six:[
                        {  required: true, message: '输入框不能为空', trigger: 'blur'}
                    ],
                    seven:[
                        {  required: true, message: '输入框不能为空', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                // console.log(this.formValidate.category);
                // console.log(this.formValidate.seven);
                // console.log(this.formValidate.twelve);
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                        setTimeout(() => {
                            this.$emit('addCrewsManage1',true)
                        }, 1000);
                        
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }, 
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            success(){
                   console.log(this.newId)
            },
            error(){
                console.log('审核失败')
			},
            back(){
                 this.$emit('addCrewsManage1',-2)
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
   .zhandian{
	   height: 60px;
	   width: 100%;
	   border-bottom: 1px solid #ccc
   }
   .zhandian p{
       border-bottom:2px solid #40A9FF;
       font-weight: 700;
	   font-size: 18px;
       padding:10px;
       line-height: 70px;
       width:110px;
       height: 60px;
   }
</style>

