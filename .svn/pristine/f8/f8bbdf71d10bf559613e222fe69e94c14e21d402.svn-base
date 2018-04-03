//遍历查找节点
export const siblings = (elem) => { //获取所有兄弟节点 
    return sibling((elem.parentNode || {}).firstChild, elem)
}


function sibling(n, elem) {
    let r = [];
    for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n != elem) {
            r.push(n)
        }
    }
    return r
}


export const parentIndexOf = (node,parent) =>{ //递归向上查找某父节点 node起始节点 parent父节点
    if(node==parent){return node;} 
    for (var i=0,n=node; n=n.parentNode; i++){ 
        if(n==parent){return n;} 
        if(n==document.documentElement){return -1;} //找不到目标父节点，防止死循环 
    } 
} 

//清楚字符串空格
export const trim = (str) => {
    // console.log(str);
    return str.replace(/(^\s*)|(\s*$)/g, "");//清除两端空格
}
export const ltrim = (str) => {
    return str.replace(/(^\s*)/g,"");//清除左侧空格
}
export const rtrim = (str) => {
    return str.replace(/(\s*$)/g,"");//清除右侧空格
}