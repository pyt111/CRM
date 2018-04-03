<template>
    <div class="inputList">
        <Form ref="putDataObj" :model="putDataObj" :label-width="80" inline>
            <Row>
                <Col v-for="(x,index) in tableArr" :key="x.id" :xs="x.colSize.xs" :sm="x.colSize.sm" :md="x.colSize.md" :lg="x.colSize.lg">
                <FormItem v-if="x.kind == 'textInput'&&showClientWidth >= 768" :prop="x.id" :label="x.name">
                    <Input  v-model="tableArr[index].val" :id="x.id" :placeholder="x.placeholder" size="small"></Input>
                    <!-- <Input v-if="inputSize < 768" v-model="tableArr[index].val" :id="x.id" :placeholder="x.placeholder" ></Input> -->
                </FormItem>
                <FormItem v-if="x.kind == 'textInput'&&showClientWidth < 768" :prop="x.id" :label="x.name">
                    <!-- <Input v-if="" v-model="tableArr[index].val" :id="x.id" :placeholder="x.placeholder"></Input> -->
                    <Input v-if="" v-model="tableArr[index].val" :id="x.id" :placeholder="x.placeholder" ></Input>
                </FormItem>
                <FormItem v-if="x.kind == 'date'&&showClientWidth >= 768" :prop="x.id" :label="x.name">
                    <DatePicker v-model="tableArr[index].val" :id="x.id" :placeholder="x.placeholder" size="small"></DatePicker>
                </FormItem>
                 <FormItem v-if="x.kind == 'date'&&showClientWidth < 768" :prop="x.id" :label="x.name">
                    <DatePicker v-model="tableArr[index].val" :id="x.id" :placeholder="x.placeholder"></DatePicker>
                </FormItem>
                </Col>
                <!-- <Button type="primary" @click="commit">Signin</Button> -->
                <FormItem class="buttons">
                    <Button v-if="showClientWidth < 768" type="info"  icon="ios-search" class="searchBtn" @click="handleSubmit('putDataObj')">搜索</Button>
                    <Button v-if="showClientWidth > 768" type="info"  icon="ios-search" class="searchBtn" @click="handleSubmit('putDataObj')" size="small">搜索</Button>
                    
                    
                </FormItem>
            </Row>

        </Form>
         <!-- <Input v-if="inputSize > 768"  placeholder="1" size="small"></Input>
        <Input v-if="inputSize < 768"  placeholder="2" ></Input> -->
        <!-- <Row> -->
        <!-- <Col v-for="(x,index) in tableArr" :xs="x.colSize.xs" :sm="x.colSize.sm" :md="x.colSize.md" :lg="x.colSize.lg" :key="x.id"> -->

        <!-- <DatePicker  v-if="x.kind == 'date'"  v-model="tableArr[index].val" class="timeinput":id="x.id" :type="x.type" :options="options1" :placeholder="x.placeholder" style="width: 100%;" format="yyyy-MM-dd" @on-change="asd(tableArr[index].val=$event)"></DatePicker>
            <Input v-model="tableArr[index].val" :size='tableArr[index].size' v-if="x.kind == 'textInput'" :id="x.id" :placeholder="x.placeholder" style="width: 100%" @on-change="met(x,index)">
            <span slot="prepend">{{x.name}}</span>
            </Input> -->

        <!-- </Col> -->

        <!-- </Row> -->
        <!-- <Button icon="ios-search" type="primary" class="searchBtn" @click="commit">搜索</Button> -->
    </div>
</template>

<script>
// import 'static/css/scss/media-queries.scss'
import { mapGetters } from "vuex";
export default {
    name: "formInput",
    props: {
        tableArr: Array
    },
    computed: {
         ...mapGetters([
            "showClientWidth"//窗口大小
        ])
    },
    data() {
        return {
            putDataObj: {},
            value: "",
            inputSize: document.documentElement.clientWidth,
            options1: {
                shortcuts: [
                    {
                        text: "Today",
                        value() {
                            return new Date();
                        },
                        onClick: picker => {
                            this.$Message.info("Click today");
                        }
                    },
                    {
                        text: "Yesterday",
                        value() {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            return date;
                        },
                        onClick: picker => {
                            this.$Message.info("Click yesterday");
                        }
                    },
                    {
                        text: "One week",
                        value() {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            return date;
                        },
                        onClick: picker => {
                            this.$Message.info("Click a week ago");
                        }
                    }
                ]
            }
        };
    },
    mounted() {
        // console.log(this.tableArr);
        // window.onresize = () => {
        //     this.inputSize = document.documentElement.clientWidth;
        // };
        // console.log(this.showSzie);
        // if(this.inputSize < 768) {
        //     // console.log('111111111111');
        //     console.log(document.getElementsByTagName('Input'));
        // }
    },
    methods: {
        commit() {
            //根据this.tableArr[y].id找到所有节点下的input并获取value
            let dataArr = [];
            let putDataObj = new Object();
            for (let y in this.tableArr) {
                putDataObj[this.tableArr[y].id] = document
                    .getElementById(this.tableArr[y].id)
                    .getElementsByTagName("input")[0].value;
            }
            this.putDataObj = putDataObj;
            console.log(putDataObj);
            // this.$store.commit("SET_SERCHDATA", '');//先清空
            this.$store.commit("SET_SERCHDATA", putDataObj); //提交到store下 mutations状态下的SET_SERCHDATA方法 并将putDataObj存储到state下;
        },
        met(x, index) {},
        asd($event) {},
        handleSubmit(name) {
            let dataArr = [];
            let putDataObj = new Object();
            for (let y in this.tableArr) {
                putDataObj[this.tableArr[y].id] = document
                    .getElementById(this.tableArr[y].id)
                    .getElementsByTagName("input")[0].value;
            }
            this.$refs[name].validate(valid => {
                // console.log('1111111111111');
                console.log(valid);
                if (valid) {
                    this.$Message.success("Success!");

                    this.$store.commit("SET_SERCHDATA", putDataObj);
                } else {
                    this.$Message.error("Fail!");
                }
            });
            // console.log(this.$refs[name]);
        }
    }
    
};
</script>

<style lang="scss" scoped>
@import "static/css/scss/media-queries";
.inputList {
    // position: relative;
    text-align: center;
    .ivu-input-group {
        margin: 0 auto;
    }
    .searchBtn {
        padding: 0.2rem;
        width: 5rem;
        margin-left: 0;
    }
    // @include inputList();
}
</style>

