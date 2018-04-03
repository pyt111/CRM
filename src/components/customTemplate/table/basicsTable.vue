<!--
 * 作者: yantao.peng 
 * 
 * 说明：列表渲染模板,只需父组件配置baseC、apiConfig即可
 * 
 * 最后修改时间: Friday, 12th January 2018 8:19:18 pm
 * 
-->

<template>
    <div class="basicsTable">
        <!-- {{table_serchData}} -->
        <Table :loading="loading" :columns="baseC.columns" :data="data1"></Table>
        <div v-if="ifShowPage" class="text_align margin_top">
            <!-- 根据屏幕大小渲染page相应组件 -->
            <Page v-if="showClientWidth < 768" show-total :total="baseC.tots" @on-change='onChangePage' @on-page-size-change='pageSizeChange' simple show-sizer show-elevator></Page>
            <Page v-if="showClientWidth >= 768&&showClientWidth < 1200" size="small" show-total :total="baseC.tots" @on-change='onChangePage' @on-page-size-change='pageSizeChange' :pageSizeOpts="pageSizeOpts" placement="top" show-sizer show-elevator></Page>
            <Page v-if="showClientWidth > 1200" show-total :total="baseC.tots" @on-change='onChangePage' @on-page-size-change='pageSizeChange' :pageSizeOpts="pageSizeOpts" placement="top" show-sizer show-elevator></Page>
        </div>
        <!-- <Form ref="putDataObj" :label-width="80" inline>
            <Row>
                <FormItem>
                    <Input v-if="showSize > 768" size="small"></Input>
                    <Input v-if="showSize < 768"></Input>
                </FormItem>

            </Row>

        </Form> -->
    </div>
</template>

<script>
import api from "api/user/tableList.js";
import { tableList } from "static/bil/formatting";
import { mapGetters } from "vuex";
export default {
    name: "basicsTable",
    props: {
        baseC: Object,
        apiNameConfig: Object,
        apiPortConfig: Object
    },
    computed: {
        ...mapGetters([
            //获取getters的table_serchData方法返回的值
            "table_serchData",//搜索框value
            "listDatas",//列表数据
            "showClientWidth"//窗口大小
        ])
    },
    watch: {
        table_serchData: "bignFunce", //监听table_serchData发生变化执行bignFunce方法
        listDatas: "drawing"
    },
    data() {
        return {
            loading: false,
            data1: [],
            ifShowPage: false,
            pageSizeOpts: [10, 20, 30, 40],
            showSize: document.documentElement.clientWidth,
            serchData: ""
        };
    },
    mounted() {
        // console.log(this.showClientWidth);
        this.bignFunce(); //挂载后立即执行bignFunce()

    },
    methods: {
        bignFunce() {
            // console.log(this.table_serchData);
            let count = this.apiNameConfig.count; //父组件参数，用来查询api对应接口,count：名为count的接口;
            let list = this.apiNameConfig.list; //父组件参数，用来查询api对应接口,list：名为list的接口;
            this.backFunce(count).then(port => {
                //执行backFunce方法,根据传参返回对应接口方法;
                // console.log(port);
                this.getCount(port).then(count => {
                    //执行getCount()方法,根据方法参数请求后台接口并返回页数,port:返回的接口方法;
                    if (count > 0) {
                        this.backFunce(list).then(port => {
                            //判断页数是否大于0，true则执行backFunce()方法来获取列表数据,port:返回的接口方法;
                            this.getList(port);
                        });
                    }
                });
            });
        },
        backFunce(needPort) {
            //needPort:需要匹配名称与之想同的方法并返回;
            return new Promise((resove, reject) => {
                for (let x in api) {
                    if (x == needPort) {
                        resove(api[x]);
                    }
                }
            }).catch(error => {
                reject(error);
            });
        },
        getCount(port) {
            // console.log(this.apiPortConfig);
            let countPort = this.apiPortConfig;
            let CountData = {
                pageSize: this.baseC.putData.pageSize,
                jsons: countPort.jsons
            };
            // console.log(CountData);
            return new Promise((resove, reject) => {
                port(countPort, CountData)
                    .then(response => {
                        if (response.data.count > 0) {
                            //当后台返回页数大于0时开始执行获取列表函数
                            // console.log(response);
                            this.baseC.tots = response.data.num;
                            resove(response.data.count);
                        } else {
                            this.ifShowPage = false;
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        getList(port) {
            this.loading = true;
            let datas;
            let fm = this.baseC.columns; //需要格式化样式可以从这里配置
            // console.log(fm);
            let listPort = this.apiPortConfig;
            let ListData = {
                //向后台请求的参数
                page: this.baseC.page, //向后台请求第几页
                pageSize: this.baseC.putData.pageSize, //每页几条
                jsons: listPort.jsons
            };

            for (let f in fm) {
                //
                if (this.showSize < 768) {
                    //当窗口小于768时使列表右方fixed失效
                    if (fm[f].fixed == "right") {
                        delete fm[f].fixed;
                        document.getElementsByClassName(
                            "ivu-table-fixed-right"
                        )[0].style.boxShadow =
                            "0 0 0 0 rgba(0,0,0,0)";
                    }
                }
            }
            port(listPort, ListData).then(response => {
                if (response.data) {
                    //关闭loading
                    // console.log(response.data);
                    this.loading = false;
                    this.ifShowPage = true; //判断是否显示分页
                }

                datas = response.data;
                // this.drawing(datas,fm);
                let listState = {
                    datas: datas,
                    fm: fm
                };
                // console.log(listState);
                this.$store.commit("TABLE_LIST", listState); //将后台返回的数据和this.baseC.columns配置(父组件配置)存储到store,用来观察数据是否发生变化;
                // console.log( this.data1);
            });
        },
        drawing() {
            //渲染出列表
            // console.log(this.listDatas);
            // console.log();
            let datas = this.listDatas.datas; //需要渲染成列表的数据
            let fm = this.listDatas.fm; //渲染列表需要的参数
            this.data1 = tableList(datas, fm); //将store里的数据提交到tableList中格式化
        },
        onChangePage(page) {
            this.baseC.page = page; //选择当前页
            let list = this.apiNameConfig.list; //父组件参数，用来查询api对应接口,list：名为list的接口;
            this.backFunce(list).then(port => {
                this.getList(port);
            }); 

        },
        pageSizeChange(pagesize) {
            this.baseC.putData.pageSize = pagesize;
            this.bignFunce(); //每页显示条数
        }
    }
};
</script>

<style scoped>
.text_align {
    text-align: center;
}
.margin_top {
    margin-top: 10px;
}
</style>