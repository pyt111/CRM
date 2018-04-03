<template>
  <div>
      <Form :model="formTop"  ref="formTop" style="width:80%;margin-left:10%;margin-top:20px"  label-position="top">
          <Row>
              <Col span="12" >
                  <FormItem label="选择银行卡："  prop="input1">
                    <Input v-model="formTop.input1" placeholder="请输入..."  size="large"></Input>
                </FormItem>
              </Col>
          </Row>
          <Row>
              <Col span="12" >
                <FormItem label="开户分行："  prop="input2">
                    <Input v-model="formTop.input2" placeholder="请输入..."  size="large"></Input> 
                </FormItem>
              </Col>
          </Row>
          <Row>
              <Col span="12" >
                <FormItem label="开户支行："  prop="input3">
                    <Input v-model="formTop.input3" placeholder="请输入..."  size="large"></Input> 
                </FormItem>
              </Col>
          </Row>
          <Row>
              <Col span="12" >
                <FormItem label="银行省份："  prop="input4">
                    <Input v-model="formTop.input4" placeholder="请输入..."  size="large"></Input> 
                </FormItem>
              </Col>
          </Row>
          <Row>
              <Col span="12" >
                <FormItem label="所在城市："  prop="input5">
                    <Input v-model="formTop.input5" placeholder="请输入..."  size="large"></Input> 
                </FormItem>
              </Col>
          </Row>
          <Row>
              <Col span="12" >
                <FormItem label="银行卡号："  prop="input6">
                    <Input v-model="formTop.input6" placeholder="请输入..."  size="large"></Input> 
                </FormItem>
              </Col>
          </Row>
          <Row>
              <Col span="12" >
                <FormItem label="预留手机号："  prop="input7">
                    <Input v-model="formTop.input7" placeholder="请输入..."  size="large"></Input> 
                </FormItem>
              </Col>
          </Row>
           <FormItem style="margin-top:20px">
                <Button type="primary" @click="handleSubmit('formTop')" size="large">保存</Button>
                <Button type="ghost" @click="handleReset('formTop')" style="margin-left: 8px" size="large">重置</Button>
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
                formTop: {
                    input1: '',
                    input2: '',
                    input3: '',
                    input4: '',
                    input5: '',
                    input6: '',
                    input7: '',
                },
            }
        },
        methods: {
            handleSubmit (name) {
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
