<template>
  <div>
      <Form style="width:80%;margin-left:10%;margin-top:20px" ref="formValidate" label-position="top" :model="formValidate"   >
            <Row >
                <Col span="8">
                    <FormItem label="代理商姓名 :"  >
                        <Input v-model="formValidate.category"  placeholder="张先生" style="width:200px"></Input>
                    </FormItem>
                </Col>
                <Col span="8" >
                    <FormItem label="身份证号 :">
                        <Input v-model="formValidate.one" placeholder="请输入..." style="width:200px"></Input> 
                    </FormItem>
                </Col>
                <Col span="8" >
                    <FormItem label="手机号 :">
                        <Input v-model="formValidate.two" placeholder="请输入..." style="width:200px"></Input> 
                    </FormItem>
                </Col>
                <Col span="8" >
                    <FormItem label="保证金 :">
                        <Input v-model="formValidate.three" placeholder="请输入..." style="width:200px"></Input>元
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="代理区域 ：" >
                        <Select v-model="formValidate.four" style="width:200px">
                            <Option value="上海市" v-for="item in formValidate.cityList":value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </FormItem>               
                </Col>
                <Col span="8">
                    <FormItem label="代理范围 ：" >
                        <Select v-model="formValidate.five" style="width:200px">
                            <Option value="上海市" v-for="item in formValidate.scope":value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </FormItem>               
                </Col>
                <Col span="8" >
                    <FormItem label="代理子商户数量 :">
                        <Input v-model="formValidate.six" placeholder="请输入..." style="width:200px"></Input>个
                    </FormItem>
                </Col>
                <Col span="8" >
                    <FormItem label="代理码 :">
                        <Input v-model="formValidate.seven" placeholder="请输入..." style="width:200px"></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row style="margin-top:20px">
                <Col span="8">
                     <FormItem>
                        <Button type="primary"  @click="handleSubmit('formValidate')">保存</Button> 
                    </FormItem>
                </Col>
            </Row>            
        </Form>
  </div>
</template>
<script>
export default {
       
        data () {
            return {
                formValidate: {
                    cityList:[
                        {value: '上海市',label: '上海市'},
                        {value: '山东省',label: '山东省'}
                    ],
                    scope:[
                        {value: '上海市',label: '上海市'},
                        {value: '山东省',label: '山东省'}
                    ],
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
            }

		}
    }
</script>
