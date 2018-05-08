<template>
	<div class="mian">

		<div class="age">
			<span class="age_one">投资动态</span>
			<router-link :to="{name:'投资统计'}">
				<Button style="margin-top: -10px;" type="primary" shape="circle">MORE>></Button>
			</router-link>
		</div>
		<hr style="height:1px;border:none;border-top:1px solid #ccc;" />
		<Row>
			<Row class="table" id="table">
				<Col :span="24">
				<Table size='small' :row-class-name="rowClassName" :columns="columns1" :data="data1" ref='table' @on-selection-change='selChange'></Table>
				<div style="position:absolute;top:0px;width:100%;height:100%;display: flex;
									align-items: center;
									justify-content: center;background: rgba(210, 216, 222, 0.5);" v-if="loading">
					<Spin size="large"></Spin>
					<h6 style="color:#2d8cf0;margin-top:10px;">正在获取数据...</h6>
				</div>
				</Col>
			</Row>
		</Row>
	</div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
            selItem: [],
            columns1: [
                {
                    title: "用户名",
                    key: "userName",
                    align: "center",
                    color: "red"
                },
                {
                    title: "手机号",
                    key: "userPhone",
                    align: "center",
                    width: "120px"
                },
                {
                    title: "投资产品",
                    key: "productName",
                    align: "center"
                },
                {
                    title: "操作金额",
                    key: "investmentMoney",
                    align: "center"
                },
                {
                    title: "投资提成",
                    key: "moneyContribution",
                    align: "center"
                },
                {
                    title: "订单时间",
                    key: "createTime",
                    align: "center",
                    width: "150px"
                }
            ],
            page_data1: [],
            data1: [],
            page: 1
        };
    },
    mounted() {
		
        this.baseData();
    },
    methods: {
        baseData() {
            let data = {
                agentId: this.$store.getters.uid,
                pageSize: 10,
                phone: "",
                pageNum: 1
            };
            this.$store
                .dispatch('p_TZDT', data)
                .then(res => { //   /agent/UserManage/v1/userFrequencyInvestmentList
                    this.loading = false;
                    this.data1 = res.result.list;
                    //this.$Message.success(res.message)
                })
                .catch(error => {
                    this.$Message.error(error.message);
                    // //alert('网络错误')
                });
        },
        rowClassName(row, index) {
            if (index % 2 == 0) {
                return "demo-table-info-row";
            }
            return "";
        },
        selChange(sel) {
            this.selItem = sel;
            // console.log(sel)
        }
    },
};
</script>

<style scoped>
.mian {
    background-color: #ffffff;
    padding: 10px;
}
.table {
    margin-top: 10px;
}
.age {
    height: 40px;
    padding: 10px;
    font-weight: bold;
    border-bottom: 2px;
    display: flex;
}
.age_one {
    flex: 1;
}
.age_tow {
    font-size: 12px;
    color: #7d7d7d;
}
.col {
    text-align: center;
    margin-top: 70px;
}
.col img {
    margin-top: -5px;
}
.name {
    height: 40px !important;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
}
.touzi_p1 {
    float: left;
    width: 40%;
    text-align: right;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
}
.touzi_p2 {
    float: left;
    height: 40px;
    line-height: 40px;
    color: #6d9ece;
    font-size: 20px;
    width: 40%;
    text-align: right;
}
.touzi_p3 {
    float: left;
    text-align: right;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    margin-left: 3px;
}
</style>
<style>
.mian .ivu-table .demo-table-info-row td {
    background-color: #f1f6fe;
}
#table .ivu-table-small th {
    background-color: #40bcf8;
    color: #ffffff;
}
</style>

