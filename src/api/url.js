
export const BASE_API = '//crm.v2.yhb118.com';
// export const BASE_API= process.env.BASE_API;

/*
 * 作者: yantao.peng 
 * 
 * 说明：登录接口、拉取用户信息接口
 * 
 * 最后修改时间: Tuesday, 3rd April 2018 1:59:31 pm
 */
// export const loginUrl = BASE_API + "/agent/login";//点击登录获取token
// export const getInfoUrl = BASE_API + "/agent/getInfo";//发送token拉取用户信息
//本地登录测试
export const loginUrl = BASE_API + '/login/loginbyemail';//点击登录获取token
export const getInfoUrl = BASE_API + '/user/info';//发送token拉取用户信息




/*
 * 作者: yantao.peng 
 * 
 * 说明：代理商
 * 
 * 最后修改时间: Tuesday, 3rd April 2018 1:31:52 pm
 */

/** 快速报备*/
export const getAgentSms = BASE_API + "/agent/getAgentSms";//报备短信验证码接口
export const agentReport = BASE_API + "/agent/agentReport";//代理商为子商户注册账号(与APP、H5注册相同) 发送填写信息接口

/** 快速提现接口 */
export const commWithdrawalConditions = BASE_API + "/agent/commWithdrawalConditions";//代理商提现获取银行卡信息 type = 1 ---提成提现获取信息 type = 2 --- 推广提现获取信息 点击提现按钮调用

export const commWithdrawal = BASE_API + "/agent/commWithdrawal";//代理商提成提现  提交接口
export const promoteWithdrawal = BASE_API + "/agent/promoteWithdrawal";//代理商推广提现  提交接口



/** 看板 */
//月度业绩 月度提成 月度新增用户 可提现金额 agentFou
export const panel = BASE_API + "/agent/panel";
//投资动态 agentThree   投资统计 InvestmentTracking
export const userFrequencyInvestmentList = BASE_API + "/agent/UserManage/v1/userFrequencyInvestmentList";//代理商子商户投资统计

//操作日志 agentOne  子商户日志 operationLog
export const appLogin = BASE_API + "/agent/appLogin";//代理商登录操作记录

//冻结金额排名 agentTwo 
export const freeze = BASE_API + "/agent/panel/freeze";//主要是显示看板里面子商户的冻结金额排名

/** 子商户管理 */
//子商户信息 customer
export const userMessageList = BASE_API + "/agent/UserManage/v1/userMessageList";//代理商子商户信息


//投资统计 InvestmentTracking 与看板中 投资动态 agentThree 相同接口


//子商户日志 operationLog  与看板中 操作日志 agentOne 相同接口

/** 推广管理  */
//推广设置 popularizeSet
export const popularizeSetting = BASE_API + "/agent/PopularizeManage/v1/popularizeSetting";//代理商推广设置
export const sendSmsPopularize = BASE_API + "/agent/PopularizeManage/v1/sendSmsPopularize";//代理商推广设置-发送短信邀请子商户

//推广收益明细 popularizeEarnings
export const detailCount = BASE_API + "/agent/spread/detailCount";//代理商推广收益细页面
export const spreaddetail = BASE_API + "/agent/spread/detail";//代理商推广收益明细


//推广提现明细 popularizeTi
export const achievedetail = BASE_API + "/agent/achieve/detail";//代理商推广提现明细


//提现明细 TiLog
export const withdrawMoneyDetail = BASE_API + "/agent/UserManage/v1/withdrawMoneyDetail";//代理商提现明细





