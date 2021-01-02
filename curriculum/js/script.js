"use strict";

// 获取 DIV
const divDom = $('table-data-wrap');
console.log(divDom)


// 封装自己的工具库
function $(id){
   const dom =  document.getElementById(id);
   return dom
}






const tableDom = document.createElement('table'); 

tableDom.setAttribute('width','100%');
tableDom.setAttribute('border','0%');
tableDom.setAttribute('cellpadding','0');
tableDom.setAttribute('cellspacing','0');
tableDom.setAttribute('id','table-data-wrap');

console.log(tableDom)

tableDom.innerHTML = `
    <thead>
        <tr>
            <th>头像</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
            <th>手机号</th>
            <th>国籍</th>
            <th width="200">爱好</th>
            <th>头衔</th>
            <th>操作</th>
        </tr>
    </thead>
`

divDom.appendChild(tableDom)