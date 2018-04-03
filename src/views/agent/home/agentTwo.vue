<template>
	<div class="mian">

		<div class="age">
			冻结金额排名
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
import axios from "axios";
export default {
    data() {
        return {
            loading: false,
            selItem: [],
            columns1: [
                {
                    title: "排名",
                    type: "index",
                    align: "center"
                },
                {
                    title: "客户姓名",
                    key: "trueName",
                    align: "center"
                },
                {
                    title: "客户身份",
                    key: "distributorLvl",
                    align: "center"
                },
                {
                    title: "冻结金额（元）",
                    key: "freeze",
                    align: "center"
                }
            ],
            data1: []
        };
    },

    methods: {
        freezeList() {
            this.loading = true;
            let params = {
                userId: this.$store.getters.uid
            };
            this.get(process.env.BASE_API + "/agent/panel/freeze", params)
                .then(reponse => {
					// console.log(reponse);
                    this.loading = false;

                    var res = reponse.result.list;
                    
                    this.data1 = res;
                    //this.$Message.success(reponse.message);
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
            console.log(sel);
        }
    },
    mounted() {
		this.freezeList();
	}
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
    font-weight: 700;
    border-bottom: 2px;
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

