<template>
<div>
    <Row class="succss" :gutter="16">
        <Col span="6">
            <div class="suc">
                <div class="succss1" >
                    <span class="succss1_p">月度业绩</span>
                </div>
                <hr class="hr"/>
                <div class="succss2">
                <div class="succss2_div">
                        <p class="succss2_div1">￥123,222,000<span style="font-size:12px;color:#ccc"> 元</span></p>
                        <p >上月业绩：35.225元</p>
                    </div>
                    <div>
                    <img src="../../../static/img/shouye/money.png"/>
                    </div>
                </div>
            </div>
        </Col>
        <Col span="6">
            <div class="suc">
                <div class="succss1">
                    <span class="succss1_p">月度总提成</span>
                </div>
                <hr class="hr"/>
                <div class="succss2">
                <div class="succss2_div">
                        <p class="succss2_div1">￥123,222,000</p>
                        <p >上月提成:555,555元</p>
                    </div>
                    <div>
                    <img src="../../../static/img/shouye/up.png"/>
                    </div>
                </div>
            </div>
        </Col>
        <Col span="6">
            <div class="suc">
                <div class="succss1">
                    <span class="succss1_p">平台注册用户</span>
                </div>
                <hr class="hr"/>
                <div class="succss2">
                <div class="succss2_div">
                        <p class="succss2_div1">￥123,222,000</p>
                        <p >总用户:555,555,555人</p>
                    </div>
                    <div>
                    <img src="../../../static/img/shouye/user.png"/>
                    </div>
                </div>
            </div>
        </Col>
        <Col span="6">
            <div class="suc">
                <div class="succss1">
                    <span class="succss1_p">可提现金额</span>
                    <p class="succss1_p1">提现</p>
                </div>
                <hr class="hr"/>
                <div class="succss2">
                <div class="succss2_div">
                        <p class="succss2_div1">￥123,222,000</p>
                        <p >投资用户：30,100人</p>
                    </div>
                    <div>
                    <img src="../../../static/img/shouye/jin.png"/>
                    </div>
                </div>
            </div>
        </Col>
        <!-- <Col span="6">
            <div class="suc">
                <div class="succss1">
                    <span class="succss1_p">总冻结金额</span>
                </div>
                <hr class="hr"/>
                <div class="succss2">
                <div class="succss2_div">
                        <p class="succss2_div1">￥123,222,000</p>
                        <p >投资用户：30,100人</p>
                    </div>
                    <div>
                    <img src="../../../static/img/shouye/jin.png"/>
                    </div>
                </div>
            </div>
        </Col> -->
        <!-- <div>{{msg}}</div> -->
    </Row>
    </div>
</template>
<script>
   export default{
       data(){
           return {
               msg:'123'
           }
       }
   }
</script>
<style scoped>
.succss{
    
    width:100%;
}
.suc{
    background-color: #ffffff;
    height: 120px;
}
.succss1{
    display: flex;
    padding:10px;
}
.succss1_p{
    flex:1;
    text-align:40px;
    color:#ccc
}
.succss1_p1{
    height: 20px;
    color: #ffffff;
    width: 50px;
    background-color: #40A7FD;
    border-radius: 5px;
    text-align:center;
    cursor: pointer;
}
.succss1_p1:hover{
    background-color: #3DB1F3;
}
.succss2{
    display: flex;
    padding:10px;
}
.succss2_div{
    flex:1
}
.succss2_div1{
    font-size:18px;
    font-weight:700;
}
img{
    height:45px
}
.hr{
    height:1px;
    width:96%;
    border:none;
    margin-left: 2%;
    border-top:2px solid #EDEEF2;
}
</style>