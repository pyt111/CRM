<template>
  <div>
      <Form style="width:80%;margin-left:10%;margin-top:20px" ref="formValidate" label-position="top" :model="formValidate"   >
            <Row >
                <Col span="8">
                    <FormItem label="省/市 :"  >
                        <Cascader :data="formValidate.data" v-model="formValidate.values"  style="width:200px"></Cascader>
                    </FormItem>
                </Col>
                <Col span="16" >
                    <FormItem label="详细地址 :">
                        <Input v-model="formValidate.one" placeholder="请输入..." ></Input> 
                    </FormItem>
                </Col>
                <Col span="8" >
                    <FormItem label="收货人 :">
                        <Input v-model="formValidate.two" placeholder="请输入..." style="width:200px"></Input> 
                    </FormItem>
                </Col>
                <Col span="8" >
                    <FormItem label="手机号 :">
                        <Input v-model="formValidate.three" placeholder="请输入..." style="width:200px"></Input> 
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
                    data: [{
                        value: 'beijing',
                        label: '北京',
                        children: [
                            {
                                value: 'gugong',
                                label: '故宫'
                            },
                            {
                                value: 'tiantan',
                                label: '天坛'
                            },
                            {
                                value: 'wangfujing',
                                label: '王府井'
                            }
                        ]
                    }, {
                        value: 'jiangsu',
                        label: '江苏',
                        children: [
                            {
                                value: 'nanjing',
                                label: '南京',
                                children: [
                                    {
                                        value: 'fuzimiao',
                                        label: '夫子庙',
                                    }
                                ]
                            },
                            {
                                value: 'suzhou',
                                label: '苏州',
                                children: [
                                    {
                                        value: 'zhuozhengyuan',
                                        label: '拙政园',
                                    },
                                    {
                                        value: 'shizilin',
                                        label: '狮子林',
                                    }
                                ]
                            }
                        ],
                    }],
                    values: [],
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
            },
            back(){
                 this.$router.push({path:'/'})
            }
		}
    }
</script>
