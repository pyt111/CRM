<template>
    <navbar>
        <div class="yeji">业绩管理系统</div>
        <ul class="nav navbar-nav ml-auto">
            <!-- 四个 -->
            <modal-one></modal-one>

            <li class="nav-item d-md-down-none" v-if="show!='admins'">
                <Button @click="tixian" size="small" type="info">
                    <Icon type="card"></Icon>
                    <span>快速提现</span>
                </Button>
            </li>
            <li class="nav-item d-md-down-none" v-if="show!='admins'">
                <Button @click="baobei" size="small" type="info">
                    <Icon type="document-text"></Icon>
                    <span>快速报备</span>
                </Button>
            </li>
            <li class="nav-item d-md-down-none">
                <p @click="oneSelf" style="cursor:pointer;color:#fff">
                    <span slot="button">
                        <img src="../../static/img/shouye/agent.png" class="img-avatar" alt="o">
                        <span class="d-md-down-none">{{show}}余惠宝</span>
                    </span>
                </p>
            </li>
            <li class="nav-item d-md-down-none">
                <a href="javascript:void(0)">
                    <span>{{nowTime}}</span>
                    <span>{{nowWeek}} </span>
                </a>
            </li>
            <li class="nav-item d-md-down-none">
                <a href="" @click="Logout">
                    <p class="dropdown-itemp">
                        <Icon type="power" color="red"></Icon>
                    </p>
                </a>
            </li>

        </ul>
        <!-- 模块框 -->
        <div>
            <!-- 1报备模块框 -->
            <Modal v-model="modal1" width="360" :styles="{top: '300px'}" :mask-closable="false">
                <p slot="header" style="color:#2db7f5">
                    <span>报备</span>
                </p>
                <div style="text-align:center;height:50px">
                    <Row :gutter="16" v-show="show !='financial'" style="margin-top:15px">
                        <Col span="12">
                        <div class="modal1_zhu" @click="modal1_ok">已注册用户报备</div>
                        </Col>
                        <Col span="12">
                        <div class="modal1_zhu" @click="modal1_no">未注册用户报备</div>
                        </Col>
                    </Row>
                </div>
                <div slot="footer" style="display:none">
                    <Button type="error">Delete</Button>
                </div>
            </Modal>
            <!-- 2未注册用户报备 -->
            <Modal v-model="modal2" width="360" :styles="{top: '200px'}" :mask-closable="false">
                <Spin size="large" fix v-if="spinShow"></Spin>
                <p slot="header" style="color:#2db7f5">
                    <span>未注册用户报备</span>
                </p>
                <Form label-position="top" ref="formCustom" :model="formCustom" :rules="ruleCustom3">
                    <div>
                        <Row :gutter="16">
                            <Col span="12">
                            <FormItem label="手机号码：" prop="userName">
                                <Input size="small" v-model="formCustom.userName"></Input>
                            </FormItem>
                            </Col>
                            <Col span="12">
                            <FormItem label="登录密码：" prop="passWord">
                                <Input size="small" v-model="formCustom.passWord"></Input>
                            </FormItem>
                            </Col>
                            <Col span="12">
                            <FormItem label="验证码" prop="userNameCode">
                                <Input size="small" v-model="formCustom.userNameCode"></Input>
                            </FormItem>
                            </Col>
                            <Col span="12">
                            <FormItem label=" ">
                                <Button type="info" v-show="Code" @click="authCode">发送验证码</Button>
                                <Button v-show="!Code">{{count}}s后重新发送</Button>
                            </FormItem>
                            </Col>
                            <Col span="24">
                            <FormItem label="真实姓名" prop="trueName">
                                <Input size="small" v-model="formCustom.trueName"></Input>
                            </FormItem>
                            </Col>
                            <Col span="24">
                            <FormItem label="身份证" prop="IDCard" class="idNum">
                                <Input size="small" v-model="formCustom.IDCard"></Input>
                                <span class="idnumChild">*只可报备未注册用户</span>
                            </FormItem>
                            </Col>
                        </Row>
                        <Row style="text-align:center;margin-bottom:-30px">
                            <Col span="24">
                            <FormItem>
                                <Button type="primary" @click="quickBaobei('formCustom')">确定</Button>
                                <Button type="ghost" @click="quickReset('formCustom')" style="margin-left: 8px">取消</Button>
                            </FormItem>
                            </Col>
                        </Row>
                    </div>
                </Form>
                <div slot="footer" style="display:none">
                </div>
            </Modal>
            <!-- 3已注册用户报备 -->
            <Modal v-model="modal3" width="360" :styles="{top: '200px'}" :mask-closable="false">
                <p slot="header" style="color:#2db7f5">
                    <span>已注册用户报备</span>
                </p>
                <Form label-position="top" ref="formCustom1" :model="formCustom1" :rules="ruleCustom1">
                    <div>
                        <Row :gutter="16">
                            <Col span="12">
                            <FormItem label="手机号码：" prop="one">
                                <Input size="small" v-model="formCustom1.one"></Input>
                            </FormItem>
                            </Col>
                            <Col span="12">
                            <FormItem label="用户注册时间：" prop="two">
                                <DatePicker placement="bottom" type="date" size="small" v-model="formCustom1.two"></DatePicker>

                            </FormItem>
                            </Col>
                            <Col span="24">
                            <FormItem label="备注：" prop="three">
                                <Input size="small" type="textarea" :rows="3" v-model="formCustom1.three"></Input>
                                <Icon type="ios-medical" color="red"></Icon>
                                <span style="color:red">只可报备已注册用户</span>
                            </FormItem>
                            </Col>
                        </Row>
                        <Row style="text-align:center;margin-bottom:-30px">
                            <Col span="24">
                            <FormItem>
                                <Button type="primary" @click="handleSubmit1('formCustom1')">确定</Button>
                                <Button type="ghost" @click="handleReset('formCustom1')" style="margin-left: 8px">取消</Button>
                            </FormItem>
                            </Col>
                        </Row>
                    </div>
                </Form>
                <div slot="footer" style="display:none">
                </div>
            </Modal>
            <!-- 提成提现 -->
            <Modal v-model="modal" width="500" :styles="{top: '200px'}" :mask-closable="false">
                <p slot="header" style="color:#2db7f5">
                    <span>提成提现</span>
                </p>
                <Form label-position="top" ref="modals" :model="modals">
                    <div>
                        <Row :gutter="16">
                            <Col span="24">
                            <div class="tiBank">
                                <div class="tiBank_one">
                                    <img style="width:30px;height:30px;margin-top:5px" :src="modals.img" alt="">
                                    <p style="margin-left:15px">{{modals.bankName}}</p>
                                    <p style="margin-left:15px">尾号：{{modals.bankNumber}}</p>
                                </div>
                                <div style="margin-right:15px">单笔最大金额：{{modals.everyPrice}}w元</div>
                            </div>
                            </Col>
                            <Col span="24" style="margin-top:20px">
                            <div style="display:flex;">
                                <p style="flex:1">可提现金额：
                                    <span style="color:red">{{modals.userBalance}}</span> 元</p>
                                <Button type="primary" size="small" style="margin-left: 8px" @click="modalsAll">全部提现</Button>
                            </div>
                            </Col>
                            <Col span="24" style="margin-top:20px">
                            <FormItem label="提现金额：">
                                <Input v-model="allUserBalance"></Input>
                                <p>手续费：本次提现收取
                                    <span style="color:red">{{modals.poundage}}</span>元
                                    <span :class="[showText ? 'hide' : 'show']" style="color:red;float:right;">*提现金额需要大于{{modals.poundage}}元小于{{modals.everyPrice}}w</span>
                                    <span :class="[showText2 ? 'hide' : 'show']" style="color:red;float:right;">*提现金额不足</span>
                                </p>
                            </FormItem>
                            </Col>
                        </Row>
                        <Row style="text-align:center;margin-bottom:-30px">
                            <Col span="24">
                            <FormItem>
                                <Button type="primary" @click="modalsOk('modals')">确定</Button>
                                <Button type="ghost" @click="modalsNo('modals')" style="margin-left: 8px">取消</Button>
                            </FormItem>
                            </Col>
                        </Row>
                    </div>
                </Form>
                <div slot="footer" style="display:none">
                </div>
            </Modal>

        </div>
    </navbar>
</template>
<script>
import navbar from "./Navbar";
import { mapGetters } from "vuex";
import { siblings, trim } from "static/bil/publicMethod";
import modalOne from "./modal/modalOne";
import { decrypt } from "utils/allFuns";
export default {
    name: "homeHeader",
    components: {
        navbar,
        modalOne
    },
    data() {
        return {
            spinShow: false,
            phone: "",
            theme1: "light",
            show: "",
            nowTime: "",
            nowWeek: "",
            showText: true,
            showText2: true,
            // 头部划入划出
            value1: "002222",
            value2: "好友注册，详情点击http://www.yhb118.com",
            value3: "好友手机号",
            // 模块部分
            modal1: false,
            modal3: false,
            // 未注册报备
            modal2: false,
            userId: "",
            IsAgentId: "ererewe",
            formCustom: {
                userName: "",
                passWord: "",
                userNameCode: "",
                trueName: "",
                IDCard: ""
            },
            // 已注册用户报备
            formCustom1: {
                one: "",
                two: "",
                three: ""
            },

            // 提成提现
            allUserBalance: "",
            modal: false,
            modals: {
                one: "",
                bankName: "10,000",
                bankNumber: "",
                everyPrice: "",
                img: "",
                poundage: "",
                userBalance: ""
            },
            Code: true,
            count: "",
            timer: null,
            ruleCustom: {
                one: [
                    {
                        required: true,
                        message: "输入框不能为空",
                        trigger: "blur"
                    },
                    {
                        type: "string",
                        pattern: /^0?1[3|4|5|8][0-9]\d{8}$/,
                        message: "请输入正确的手机号",
                        trigger: "blur"
                    }
                ],
                two: [
                    {
                        required: true,
                        message: "输入框不能为空",
                        trigger: "blur"
                    },
                    {
                        type: "string",
                        pattern: /^[a-zA-Z0-9]{6,10}$/,
                        message: "只能输入6-10位数字或字母",
                        trigger: "blur"
                    }
                ],
                three: [
                    {
                        required: true,
                        message: "输入框不能为空",
                        trigger: "blur"
                    }
                ],
                five: [
                    {
                        required: true,
                        message: "输入框不能为空",
                        trigger: "blur"
                    }
                ],
                six: [
                    {
                        required: true,
                        message: "输入框不能为空",
                        trigger: "blur"
                    },
                    {
                        type: "string",
                        pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                        message: "请输入正确的身份证号",
                        trigger: "blur"
                    }
                ]
            },
            ruleCustom1: {
                one: [
                    {
                        required: true,
                        message: "输入框不能为空",
                        trigger: "blur"
                    },
                    {
                        type: "string",
                        pattern: /^0?1[3|4|5|8][0-9]\d{8}$/,
                        message: "请输入正确的手机号",
                        trigger: "blur"
                    }
                ],
                three: [
                    {
                        required: true,
                        message: "输入框不能为空",
                        trigger: "blur"
                    }
                ]
            },
            // 快速报备验证
            ruleCustom3: {
                userName: [
                    {
                        required: true,
                        message: "输入框不能为空",
                        trigger: "blur"
                    },
                    {
                        type: "string",
                        pattern: /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/,
                        message: "请输入正确的手机号",
                        trigger: "blur"
                    }
                ],
                passWord: [
                    {
                        required: true,
                        message: "输入框不能为空",
                        trigger: "blur"
                    },
                    {
                        type: "string",
                        pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
                        message: "请输入6-20位数字和字母组合",
                        trigger: "blur"
                    }
                ],
                userNameCode: [
                    {
                        required: true,
                        message: "输入框不能为空",
                        trigger: "blur"
                    }
                ],
                trueName: [
                    {
                        required: true,
                        message: "输入框不能为空",
                        trigger: "blur"
                    }
                ],
                IDCard: [
                    {
                        required: true,
                        message: "输入框不能为空",
                        trigger: "blur"
                    },
                    {
                        type: "string",
                        pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                        message: "请输入正确的身份证号",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    computed: {
        ...mapGetters(["header_Routers", "siderbar_routers"])
    },
    watch: {
        siderbar_routers: "asd"
    },
    methods: {
        // 快速报备接口
        BaobeiAxios() {
            //  console.log(this.IsAgentId)
            let data = {
                // agentId:this.$store.getters.uid,
                phone: this.phone,
                userName: this.formCustom.userName,
                passWord: this.formCustom.passWord,
                userNameCode: this.formCustom.userNameCode,
                trueName: this.formCustom.trueName,
                IDCard: this.formCustom.IDCard,
                userId: this.$store.getters.uid,
                IsAgentId: this.IsAgentId
            };
            // console.log(data.IsAgentId)
            this.loading = true;
            this.$store
                .dispatch("p_BBTJ", data)
                .then(reponse => {
                    // console.log(decrypt(reponse.data));
                    this.loading = false;
                    // let res = reponse.data;
                    // console.log(res.code);
                    if (reponse.code == 0) {
                        this.spinShow = false;
                        this.Code = true;
                        this.modal2 = false;
                    }
                    this.$Message.info(reponse.message);
                })
                .catch(err => {
                    console.log(err);
                    this.spinShow = false;
                    this.$Message.error(err.message);
                });
        },
        // 快速报备发送短信接口
        BaobeiAxiosMsg() {
            //  console.log(this.formCustom.userName)
            let data = {
                userAccount: this.formCustom.userName
            };
            // this.loading = true;
            // process.env.BASE_API
            this.$store
                .dispatch("p_BBDX", data)
                .then(reponse => {
                    this.loading = false;
                    console.log(reponse.code);
                    if (reponse.code != 0) {
                        this.$Message.info("您已注册");
                    } else {
                        this.spinShow = false;
                        const TIME_COUNT = 59;
                        this.$Message.success(reponse.message);
                        if (!this.timer) {
                            this.count = TIME_COUNT;
                            this.Code = false;
                            this.timer = setInterval(() => {
                                if (
                                    this.count > 0 &&
                                    this.count <= TIME_COUNT
                                ) {
                                    this.count--;
                                } else {
                                    this.Code = true;
                                    clearInterval(this.timer);
                                    this.timer = null;
                                }
                            }, 1000);
                        }
                    }
                })
                .catch(err => {
                    this.$Message.error(err.message);
                    this.spinShow = false;
                });
        },

        // 报备
        baobei() {
            if (this.show == "financial" || this.show == "agent") {
                this.modal2 = true;
            } else {
                this.modal1 = true;
            }
        },
        // 确定快速请求
        quickBaobei(name) {
            console.log(name);
            if (
                this.formCustom.userName == "" ||
                this.formCustom.passWord == "" ||
                this.formCustom.userNameCode == "" ||
                this.formCustom.IDCard == "" ||
                this.formCustom.trueName == ""
            ) {
                this.$Message.info("输入框不能为空");
            } else {
                this.BaobeiAxios();
                this.$refs[name].resetFields();
                this.spinShow = true;
            }
        },
        quickReset(name) {
            this.modal2 = false;
            this.$refs[name].resetFields();
        },
        // 发送验证码
        authCode() {
            // console.log(this.formCustom.userName)
            if (this.formCustom.userName == "") {
                this.$Message.info("请输入电话号码");
            } else {
                this.BaobeiAxiosMsg();
                this.spinShow = true;
            }
        },
        Logout(e) {
            e.preventDefault();
            this.$store
                .dispatch("LogOut")
                .then(response => {
                    console.log(response);
                    location.reload(); //刷新页面  防止更改登录账户后路由加载不正确导致列表显示不正常
                    setTimeout(() => {
                        this.$router.push({ path: "/login" });
                    }, 1000);
                    this.$Message.success(response.message);
                })
                .catch(err => {
                    this.$message.error(err);
                });
        },
        oneSelf(e) {
            // this.$router.push({ name: "个人中心" });
        },
        asd() {
            console.log(this.siderbar_routers);
        },
        // 模块部分
        modal1_ok() {
            this.modal3 = true;
            this.modal1 = false;
        },
        modal1_no() {
            this.modal1 = false;
            this.modal2 = true;
        },
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$Message.success("Success!");
                    this.modal2 = false;
                } else {
                    this.$Message.error("Fail!");
                }
            });
        },
        handleSubmit1(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$Message.success("Success!");
                    this.modal3 = false;
                } else {
                    this.$Message.error("Fail!");
                }
            });
        },
        handleReset(name) {
            this.modal2 = false;
            this.modal3 = false;
            // this.$refs[name].resetFields();
        },

        // 提成部分
        tichengAxios() {
            // console.log(this.$store.getters.uid)
            let data = {
                userId: this.$store.getters.uid,
                type: 2
            };
            this.loading = true;
            this.$store
                .dispatch("p_YHKXX", data)
                .then(reponse => {
                    this.loading = false;
                    let res = reponse.result.dataList;
                    this.modals = res;
                    this.modals.bankNumber = res.bankNumber.slice(-4);
                    console.log(reponse.result.dataList);

                    // this.$message.info(reponse.data.message)
                })
                .catch(err => {
                    console.log(err);
                    this.$Message.error(err.message);
                });
        },
        // 提成提现确认接口
        tichengAxiosOk() {
            // console.log(this.$store.getters.uid)
            let data = {
                money: this.allUserBalance,
                userId: this.$store.getters.uid,
                isAgentId: this.$store.getters.uid
            };
            // this.loading = true;
            if (
                this.allUserBalance * 1 <= this.modals.poundage * 1 ||
                this.allUserBalance * 1 > this.modals.everyPrice * 10000
            ) {
                this.showText = false;
                this.showText2 = true;
            } else if (this.allUserBalance * 1 > this.modals.userBalance) {
                this.showText2 = false;
                this.showText = true;
            } else if (
                this.allUserBalance * 1 > this.modals.poundage * 1 &&
                this.allUserBalance * 1 <= this.modals.everyPrice * 10000
            ) {
                this.showText2 = true;
                this.showText = true;
                this.$store
                    .dispatch("p_KSTX", data)
                    .then(reponse => {
                        this.loading = false;
                        console.log(reponse.code);
                        if (reponse.code == 0) {
                            this.$Message.success("提现成功");

                            setTimeout(() => {
                                this.modal = false;
                                this.allUserBalance = "";
                            }, 1000);
                        } else {
                            this.$message.info(reponse.data.message);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        this.$Message.error(err.message);
                    });
            }
        },
        tixian() {
            this.modal = true;
            this.tichengAxios();
        },
        modalsAll() {
            if (this.modals.userBalance <= this.modals.everyPrice * 10000) {
                this.allUserBalance = this.modals.userBalance;
            } else if (
                this.modals.userBalance >
                this.modals.everyPrice * 10000
            ) {
                this.allUserBalance = this.modals.everyPrice * 10000;
            }

            //  console.log(this.modals.one)
        },
        modalsOk() {
            this.tichengAxiosOk();
        },
        modalsNo() {
            this.showText = true;
            this.showText2 = true;
            this.modal = false;
            this.allUserBalance = "";
        },
        onCopy(e) {
            console.log(e.text);
        },
        onError(e) {
            console.log(e);
        },
        send() {
            console.log(this.value3);
        }
    },
    mounted() {
        let headerTextArr = document.getElementsByClassName("header-item");
        let showBottom = document.getElementsByClassName("showBottom");
        let needText;
        for (let x in headerTextArr) {
            //头部导航 初始显示底部border
            needText = showBottom[x].innerText;
            if (needText == this.siderbar_routers.name) {
                headerTextArr[x].classList.add("topActive");
            }
        }
    },
    created() {
        console.log(this.$store);
        this.phone = this.$store.getters.userName;
        // console.log(this.$store.getters.uid);
        // console.log(this.phone)
        // this.userId = this.$store.getters.uid;
        this.IsAgentId = this.$store.getters.uid;
        var store = this.$store.getters.roles[0];
        this.show = store;
        var timestamp = Date.parse(new Date());
        this.nowTime = this.Ftime1(timestamp);
        this.nowWeek = "星期" + "日一二三四五六".charAt(new Date().getDay());
        //  console.log(week)
        // console.log(this.show)
    }
};
</script>

<style lang="scss" scoped>
.show {
    display: inline-block;
}
.hide {
    display: none;
}
.modal1_zhu {
    border-radius: 5px;
    height: 30px;
    line-height: 30px;
    background-color: #40a9ff;
    color: #ffffff;
    cursor: pointer;
}
.yeji {
    margin-left: 20px;
    font-size: 20px;
    color: #fff;
}
.dropdown-itemp {
    text-align: left;
}

.header-item .ivu-dropdown-item {
    padding: 15px;
}
.topRouters {
    position: absolute;
    right: 11.0625rem;
}
.header-item {
    width: 6.25rem;
    .nav-link {
        line-height: 3.4375rem;
    }

    height: 52px;
}
a {
    color: rgb(218, 212, 212) !important;
}

.topActive {
    border-bottom: 3px solid #3279d1 !important;
}
.img-avatar {
    height: 30px;
    width: 30px;
}
.navbar-nav {
    padding-left: 20px;
}
.app-header.navbar .nav-item {
    padding-right: 20px;
}
.nav {
    padding: 0 !important;
}
.system_phone {
    text-align: center;
    padding: 10px;
    margin: auto;
}
.phone:hover {
    color: red;
}
.tiBank {
    display: flex;
    line-height: 40px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
}
.tiBank_one {
    flex: 1;
    display: flex;
    padding-left: 10px;
}
.idNum {
    position: relative;
    margin-bottom: 40px;
}
.idnumChild {
    position: absolute;
    right: 0;
    top: 27px;
    color: red;
    // width:100%;
    // display:inline-block;
}
</style>
<style>
.bao .ivu-tooltip .ivu-tooltip-popper .ivu-tooltip-content .ivu-tooltip-inner {
    max-width: 250px;
    min-height: 34px;
    padding: 8px 12px;
    color: #000;
    text-align: left;
    text-decoration: none;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    white-space: nowrap;
}
.bao:hover .ivu-tooltip > .ivu-tooltip-rel > .icons {
    color: #4aa4f2;
}
.icons {
    color: #fff;
    cursor: pointer;
}
</style>