<template>
  <div>
      <Form style="width:80%;margin-left:10%;margin-top:20px" ref="formValidate" :model="formValidate"  label-position="top">
            <Row >
                <Col span="12">
                    <FormItem label="姓名 :"  prop="category">
                        <Input v-model="formValidate.category"  placeholder="张先生"></Input>
                    </FormItem>
                </Col>
            </Row >
            <Row >
                <Col span="12" >
                    <FormItem label="身份证号 :" prop="one">
                        <Input v-model="formValidate.one" placeholder="请输入..." ></Input> 
                    </FormItem>
                </Col>
            </Row >
            <Row >
                <Col span="12" >
                    <FormItem label="密码 :" prop="two">
                        <Input v-model="formValidate.two" placeholder="请输入..." ></Input> 
                    </FormItem>
                </Col>
            </Row >
            <Row >
                <Col span="12" >
                    <FormItem label="确认密码 :" prop="three">
                        <Input v-model="formValidate.three" placeholder="请输入..." ></Input>元
                    </FormItem>
                </Col>
            </Row >
            <Row >
                <Col span="12">
                    <FormItem label="手机号 ：" prop="four">
                        <Input v-model="formValidate.four" placeholder="请输入..." ></Input>
                    </FormItem>               
                </Col>
            </Row >
            <Row >
                <Col span="8">
                    <FormItem label="手机号验证码 ：" prop="five" style="width:200px" >
                        <Input v-model="formValidate.five" placeholder="请输入..." ></Input>
                    </FormItem>
                </Col>
                <Col span="4" >    
                    <FormItem label=" ">
                             <Button type="info" v-show="Code" @click="authCode">发送验证码</Button>
                            <Button  v-show="!Code">{{count}}s后重新发送</Button>
                  </FormItem>
                </Col>
            </Row>
            <Row style="margin-top:20px">
                <Col span="8">
                     <FormItem>
                        <Button type="primary"  @click="handleSubmit('formValidate')">保存</Button>
                        <Button   @click="handleReset('formValidate')">重置</Button> 
                    </FormItem>
                </Col>
            </Row>            
        </Form>
        <!-- <Button type="info" @click="authCode">发送验证码</Button> -->
  </div>
</template>
<script>
export default {
       
        data () {
            return {
                Code: true,
                count: "",
                timer: null,
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
            handleSubmit (name) {
                // console.log(this.formValidate.category);
                // console.log(this.formValidate.seven);
                // console.log(this.formValidate.twelve);
                console.log(123)
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }, 
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            authCode() {
                const TIME_COUNT = 59;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.Code = false;
                    this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                        this.count--;
                    } else {
                        this.Code = true;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                    }, 1000);
                }
                },

		}
    }
</script>
