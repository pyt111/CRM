<template>
	<div class="zhan_mian" v-if="path == true">
		<div ref="mian" >
			<Row>
				<Col :span="4" >  
                    <span>区域：</span>
                    <Select v-model="addr" clearable size="small" style="width:100px">
                        <Option value="全部">全部</Option>
                        <Option value="山东">山东</Option>
                        <Option value="上海">上海</Option>
                    </Select>																					
				</Col>
				<Col :span="4">  
                    <span>部门：</span>
                    <Select v-model="branch" clearable size="small" style="width:100px">
                        <Option value="branchAll">全部</Option>
                        <Option value="branchOne">技术</Option>
                        <Option value="branchTwo">市场</Option>
                        <Option value="branchTree">运营</Option>
                        <Option value="branchFour">客服</Option>
                        <Option value="branchFive">风控</Option>
                    </Select>																					
				</Col>
				<Col :span="4">  
                    <span>分类：</span>
                    <Select v-model="branch" clearable size="small" style="width:100px">
                        <Option value="branchAll">全部</Option>
                        <Option value="branchOne">技术</Option>
                        <Option value="branchTwo">市场</Option>
                        <Option value="branchTree">运营</Option>
                        <Option value="branchFour">客服</Option>
                        <Option value="branchFive">风控</Option>
                    </Select>																					
				</Col>
        <Col :span="8">  
            <span>时间：</span>
            <DatePicker type="daterange" 
              :v-model="options1" 
              :options="options2" 
              size="small" 
              placement="bottom-start" 
              placeholder="请选择日期" 
              style="width: 200px"
              format="yyyy/MM/dd"
              @on-change="dataChange"></DatePicker>																					
				</Col>
        <Col :span="2"> 
					<Button type="info" size="small" icon="ios-search" @click="check('formInline')">搜索</Button>						
				</Col>
			</Row>
			
			<Row>
				<Col :span="24" style="margin-top:20px;">					
					<div class="search" style="width:60px">
						<!-- {name:'新增标的管理',params:{uuID:'0'}} -->
						<Button  @click="addlink">     
							<Icon type="plus-circled" color="#2db7f5"></Icon>
							<span>新增</span>
						</Button> 
					</div>																
				</Col>
			</Row>
			<Row class="table" >		
				<Col :span="24">
					<Table  :columns="columns1"  :data="data1" ref='table' @on-selection-change='selChange'></Table>
					<div style="position:absolute;top:0px;width:100%;height:100%;display: flex;
									align-items: center;
									justify-content: center;background: rgba(210, 216, 222, 0.5);" v-if="loading">
						<Spin size="large"></Spin>
						<h6 style="color:#2d8cf0;margin-top:10px;">正在获取数据...</h6>
					</div>
				</Col>
				<Col :span="8" style="margin-top: 10px;"  class="page">	
                    <p >共{{dataCount}}记录，每页显示{{pageSize}}条，共{{Math.ceil(dataCount/pageSize)}}页</p>		
                </Col>
                <Col :span="16" class="pageP" style="text-align: right;margin-top: 10px;" >		  
				<!-- @on-change="setInitPage" -->
					<Page :total="dataCount" 
					    :current="1" 
						show-sizer show-elevator 
						:page-size-opts="array"
						:page-size="pageSize"
						@on-change="changepage"
						@on-page-size-change="pageChange" >
					</Page>
                </Col>
			</Row>
		</div>
    <!-- 禁用 -->
    <Modal v-model="modal1" width="500" :styles="{top: '200px'}" :mask-closable="false">
				<p slot="header" style="color:#2db7f5">
					<span>{{header}}</span>
				</p>
				<Form  label-position="top" ref="formCustom1" :model="formCustom1" >
					<div>
						<Row :gutter="16">
							<Col span="24">
                <span v-if="header == '启用'">当前配置是唯一配置，如需禁用请启用/新增相同的配置</span>
                <span v-if="header == '禁用'">当前配置已禁用，是否启用</span>
								<FormItem >
										<Table :row-class-name="rowClassName" :columns="columns2" border :data="formCustom1.one" ref='table' @on-selection-change='selChange'></Table>
								</FormItem>
							</Col>
							<Col span="24">
								<FormItem label="备注：" prop="three">
									<Input size="small" type="textarea" :rows="3" v-model="formCustom1.three"></Input>
								</FormItem>
							</Col>
						</Row>
						<Row style="text-align:center;margin-bottom:-30px">
							<Col span="24" >
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
	</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      branch: "",
      addr: "",
      options1: "",
      Input: "",
      path: true,
      pageSize: 12,
      valueDate: "",
      selItem: [],
      ajaxHistoryData: [],
      array: [12, 14, 18],
      // 初始化信息总条数
      dataCount: 0,
      options2: {
        shortcuts: [
          {
            text: "周",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            }
          },
          {
            text: "月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            }
          },
          {
            text: "季",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            }
          },
          {
            text: "年",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 360);
              return [start, end];
            }
          }
        ]
      },
      columns1: [
        {
          title: "编号",
          key: "uuID",
          align: "center"
        },
        {
          title: "区域",
          key: "name",
          align: "center"
        },
        {
          title: "部门",
          key: "userID",
          align: "center",
          sortable: true
        },
        {
          title: "等级",
          key: "level",
          align: "center",
          sortable: true
        },
        {
          title: "分类",
          key: "branch",
          align: "center",
          sortable: true
        },
        {
          title: "提成比例",
          key: "level",
          align: "center",
          sortable: true
        },
        {
          title: "状态",
          key: "ladder",
          align: "center",
          sortable: true,
          render: (h, params) => {
            if (params.row.ladder == "启用") {
              return h("p", {
                          style: {
                          color: "#7ACA7D",
                          cursor:"pointer",
                          height:"32px",
                          lineHeight:"32px"
                        },
                        class:{
                            'rowClasss':true,
                        },
                        on:{
                          click:()=>{
                            this.first(params)
                          }
                    }
                },
                params.row.ladder
              );
            } else if (params.row.ladder == "禁用") {
                return h("p", {
                      style: {
                          color: "red",
                          cursor:"pointer",
                          height:"32px",
                          lineHeight:"32px"
                        },
                      class:{
                            'rowClasss':true,
                        },
                      on:{
                        click:()=>{
                          this.second(params)
                      }
                    }
                  },
                params.row.ladder
              );
            }
          }
        },
        {
          title: "操作时间",
          key: "number",
          align: "center",
          sortable: true
        },
        {
          title: "备注",
          key: "way",
          align: "center",
          sortable: true
        }
      ],
      columns2: [
        {
          title: "区域",
          key: "name",
          align: "center",
        },{
          title: "部门",
          key: "userID",
          align: "center",
        },{
          title: "等级",
          key: "addr",
          align: "center",
        }, {
          title: "分类",
          key: "branch",
          align: "center",
        },{
          title: "提成比例",
          key: "level",
          align: "center",
        },
      ],
      header:'',
      data1: [],
      page: 1,
      show: true,
      modal1:false,
      modal11:'',
      formCustom1: {
          one: [],
					two: '',
					three:''
				},
    };
  },
  mounted() {},
  methods: {
    selChange(sel) {
      this.selItem = sel;
    },
    check() {
      console.log(this.Input);
      console.log(this.addr);
      console.log(this.options1);
    },
    dataChange(event) {
      this.options1 = event;
    },
    Axios() {
      this.loading = true;
      axios
        .get("http://192.168.1.24:9009/static/json/systemSet.json")
        .then(reponse => {
          this.loading = false;
          var res = reponse.data.total;
          this.data1 = res;
          this.ajaxHistoryData = this.data1;
          this.dataCount = this.data1.length;
          // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
          if (this.data1 < this.pageSize) {
            this.data1 = this.ajaxHistoryData;
          } else {
            this.data1 = this.ajaxHistoryData.slice(0, this.pageSize);
          }
        })
        .catch(error => {
          alert("网络错误");
        });
    },
    changepage(index) {
      var _start = (index - 1) * this.pageSize;
      var _end = index * this.pageSize;
      this.data1 = this.ajaxHistoryData.slice(_start, _end);
    },
    pageChange(index) {
      this.Axios();
      this.pageSize = index;
      var _start = (index - 1) * this.pageSize;
      var _end = index * this.pageSize;
      this.historyData = this.ajaxHistoryData.slice(_start, _end);
    },
    addlink() {
      this.$emit("addSystem", false);
    },
    rowClassName(){
      return 'rowClass'
    },
    handleSubmit1(){
      console.log(this.formCustom1)
      setTimeout(()=>{
          this.modal1 = false
      },2000)
    },
    handleReset(){
      console.log(123)
        this.modal1 = false
    },
    first(params){
      let json = params.row
      	let list = []
	      list.push(json)
        this.formCustom1.one = list
        this.modal1 = true
        this.header = params.row.ladder
    },
    second(params){
        let json = params.row
      	let list = []
	      list.push(json) 
        this.formCustom1.one = list
        this.modal1 = true;
        this.header = params.row.ladder
    }
  },
  created() {
    this.Axios();
  }
};
</script>

<style scoped>
.page {
  height: 40px;
}
.page p {
  border-left: 3px solid #2db7f5;
  height: 20px;
  margin-top: 10px;
  padding-left: 10px;
}

/* 头部 */
.table {
  margin-top: 15px;
}
.search {
  float: left;
}
.cursor {
  cursor: pointer;
}
.check {
  float: left;
  margin-left: 20px;
}
.delete {
  margin-left: 20px;
}
.zhan_mian {
  border-top: 3px solid #48a2fe;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
}
</style>
<style>
body,
html {
  width: 100%;
  height: 100%;
  background-color: #edeef2;
}
.pageP .ivu-select-dropdown {
  width: inherit;
  max-height: 200px;
  overflow: auto;
  margin: 5px 0;
  padding: 5px 0;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 900;
  top: -110px !important;
}
/* .rowClasss:hover {
  color:#48a2fe;
} */
.rowClass{
  color:#48a2fe
}

</style>

