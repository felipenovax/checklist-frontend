(function(e){function t(t){for(var s,n,i=t[0],c=t[1],l=t[2],d=0,m=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,n=1;n<a.length;n++){var c=a[n];0!==o[c]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},o={app:0},r=[];function n(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d133da5b"}[e]+".js"}function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=o[e]=[t,s]}));t.push(a[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=n(e);var l=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,a[1](l)}o[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("8a23"),o=a.n(s);o.a},"0918":function(e,t,a){},2774:function(e,t,a){},3953:function(e,t,a){"use strict";var s=a("0918"),o=a.n(s);o.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticClass:"container",attrs:{id:"inspire"}},[a("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[a("v-toolbar-title",{staticClass:"text-center"},[e._v("Checklist Cairo")])],1),a("v-content",[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center"},[a("Content")],1)],1)],1)],1),a("v-footer",{attrs:{color:"indigo",app:""}},[a("span",{staticClass:"white--text"},[e._v("© 2019")])])],1)},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("v-toolbar",{attrs:{color:"green",dark:""}},[a("v-toolbar-title",[e._v("Cadastro de História")])],1)],a("Form"),[a("v-toolbar",{attrs:{color:"orange",dark:""}},[a("v-toolbar-title",[e._v("Histórias Cadastradas")])],1)],a("CheckListTable")],2)},i=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:this.$store.state.stories,"sort-by":"calories"},scopedSlots:e._u([{key:"item.backend",fn:function(t){var s=t.item;return[a("v-chip",{attrs:{small:"",label:"",color:s.backend?"green":"red",dark:""},on:{click:function(t){return e.changeChip(s,"backend")}}},[e._v(e._s(s.backend?"Sim":"Não"))])]}},{key:"item.frontend",fn:function(t){var s=t.item;return[a("v-chip",{attrs:{small:"",label:"",color:s.frontend?"green":"red",dark:""},on:{click:function(t){return e.changeChip(s,"frontend")}}},[e._v(e._s(s.frontend?"Sim":"Não"))])]}},{key:"item.database",fn:function(t){var s=t.item;return[a("v-chip",{attrs:{small:"",label:"",color:s.database?"green":"red",dark:""},on:{click:function(t){return e.changeChip(s,"database")}}},[e._v(e._s(s.database?"Sim":"Não"))])]}},{key:"item.valueFinished",fn:function(t){var s=t.item;return[a("v-progress-linear",{attrs:{color:s.valueFinished<=45?"red":s.valueFinished<75?"orange":"green",height:"20",value:s.valueFinished,striped:""}},[a("strong",{staticStyle:{color:"black"}},[e._v(e._s(s.valueFinished.toFixed(2))+"%")])])]}},{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-dialog",{attrs:{"max-width":"1200px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("v-text-field",{attrs:{label:"N. Task"},model:{value:e.editedItem.taskNumber,callback:function(t){e.$set(e.editedItem,"taskNumber",t)},expression:"editedItem.taskNumber"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"9"}},[a("v-text-field",{attrs:{label:"Descrição"},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1)],1),a("div",[a("v-tabs",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab",[e._v("Padrão")]),a("v-tab",[e._v("Específico")])],1),a("v-container",[a("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab-item",[a("v-card",{staticClass:"container",attrs:{flat:""}},[a("div",{staticClass:"d-block pa-2 deep-purple accent-4 white--text"},[e._v("Lista padrão")]),a("v-row",{staticClass:"mt-4",attrs:{dense:"","no-gutters":""}},[a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-checkbox",{staticClass:"pt-0 ma-0",attrs:{label:"A PO aprovou a atividade na review ?"},model:{value:e.editedItem.defaultList.poApproves,callback:function(t){e.$set(e.editedItem.defaultList,"poApproves",t)},expression:"editedItem.defaultList.poApproves"}})],1),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-checkbox",{staticClass:"pt-0 ma-0",attrs:{label:"Há TimeBox para deploy?"},model:{value:e.editedItem.defaultList.hasTimebox,callback:function(t){e.$set(e.editedItem.defaultList,"hasTimebox",t)},expression:"editedItem.defaultList.hasTimebox"}})],1),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-checkbox",{staticClass:"pt-0 ma-0",attrs:{label:"Consegue validar em prod a historia?"},model:{value:e.editedItem.defaultList.storieValid,callback:function(t){e.$set(e.editedItem.defaultList,"storieValid",t)},expression:"editedItem.defaultList.storieValid"}})],1),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-checkbox",{staticClass:"pt-0 ma-0",attrs:{label:"A historia foi validada pelo QA?"},model:{value:e.editedItem.defaultList.storieQAValid,callback:function(t){e.$set(e.editedItem.defaultList,"storieQAValid",t)},expression:"editedItem.defaultList.storieQAValid"}})],1),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-checkbox",{staticClass:"pt-0 ma-0",attrs:{label:"A atividade atende o escopo solicitado?"},model:{value:e.editedItem.defaultList.scopeApproves,callback:function(t){e.$set(e.editedItem.defaultList,"scopeApproves",t)},expression:"editedItem.defaultList.scopeApproves"}})],1),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-checkbox",{staticClass:"pt-0 ma-0",attrs:{label:"Todas as alterações foram validadas com a PO?"},model:{value:e.editedItem.defaultList.updatePoApproves,callback:function(t){e.$set(e.editedItem.defaultList,"updatePoApproves",t)},expression:"editedItem.defaultList.updatePoApproves"}})],1),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-checkbox",{staticClass:"pt-0 ma-0",attrs:{label:"Foi considerado os requisitos de segurança?"},model:{value:e.editedItem.defaultList.securityCheck,callback:function(t){e.$set(e.editedItem.defaultList,"securityCheck",t)},expression:"editedItem.defaultList.securityCheck"}})],1),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-checkbox",{staticClass:"pt-0 ma-0",attrs:{label:"É necessário alguém externo a equipe acompanhar o deploy?"},model:{value:e.editedItem.defaultList.externalApproves,callback:function(t){e.$set(e.editedItem.defaultList,"externalApproves",t)},expression:"editedItem.defaultList.externalApproves"}})],1),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-checkbox",{staticClass:"pt-0 ma-0",attrs:{label:"O processo de rollback foi verificado?"},model:{value:e.editedItem.defaultList.rollbackVerify,callback:function(t){e.$set(e.editedItem.defaultList,"rollbackVerify",t)},expression:"editedItem.defaultList.rollbackVerify"}})],1),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-checkbox",{staticClass:"pt-0 ma-0",attrs:{label:"Existe dependência pra deploy?"},model:{value:e.editedItem.defaultList.hasDeploy,callback:function(t){e.$set(e.editedItem.defaultList,"hasDeploy",t)},expression:"editedItem.defaultList.hasDeploy"}})],1),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-checkbox",{staticClass:"pt-0 ma-0",attrs:{label:"Documentou a historia/feature no confluence ?"},model:{value:e.editedItem.defaultList.storieDoc,callback:function(t){e.$set(e.editedItem.defaultList,"storieDoc",t)},expression:"editedItem.defaultList.storieDoc"}})],1)],1)],1)],1),a("v-tab-item",[a("v-card",{staticClass:"container",attrs:{flat:""}},[a("v-row",{attrs:{dense:"","no-gutters":""}},[a("v-col",{staticClass:"pt-0 ma-0",staticStyle:{"background-color":"#f0f0f0"},attrs:{cols:"12",sm:"4"}},[a("div",{staticClass:"d-block pa-2 deep-purple accent-4 white--text"},[e._v("Backend")]),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"12"}},[a("v-checkbox",{attrs:{label:"O build foi realizado com sucesso?",disabled:!e.editedItem.backend},model:{value:e.editedItem.backendList.buildCreated,callback:function(t){e.$set(e.editedItem.backendList,"buildCreated",t)},expression:"editedItem.backendList.buildCreated"}})],1),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"12"}},[a("v-checkbox",{attrs:{label:"Fez testes de Stress nas Apis?",disabled:!e.editedItem.backend},model:{value:e.editedItem.backendList.stressTest,callback:function(t){e.$set(e.editedItem.backendList,"stressTest",t)},expression:"editedItem.backendList.stressTest"}})],1),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"12"}},[a("v-checkbox",{attrs:{label:"A base QA e Prod está igual?",disabled:!e.editedItem.backend},model:{value:e.editedItem.backendList.sameBase,callback:function(t){e.$set(e.editedItem.backendList,"sameBase",t)},expression:"editedItem.backendList.sameBase"}})],1)],1),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"4"}},[a("div",{staticClass:"d-block pa-2 deep-purple accent-4 white--text"},[e._v("Frontend")]),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"12"}},[a("v-checkbox",{attrs:{label:"Atualizou snapshot do teste unitarios?",disabled:!e.editedItem.frontend},model:{value:e.editedItem.frontendList.snapshotUpdated,callback:function(t){e.$set(e.editedItem.frontendList,"snapshotUpdated",t)},expression:"editedItem.frontendList.snapshotUpdated"}})],1),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"12"}},[a("v-checkbox",{attrs:{label:"O teste de lint foi executado?",disabled:!e.editedItem.frontend},model:{value:e.editedItem.frontendList.lintValid,callback:function(t){e.$set(e.editedItem.frontendList,"lintValid",t)},expression:"editedItem.frontendList.lintValid"}})],1),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"12"}},[a("v-checkbox",{attrs:{label:"Validou se as telas estão de acordo com Invision?",disabled:!e.editedItem.frontend},model:{value:e.editedItem.frontendList.invision,callback:function(t){e.$set(e.editedItem.frontendList,"invision",t)},expression:"editedItem.frontendList.invision"}})],1)],1),a("v-col",{staticClass:"pt-0 ma-0",staticStyle:{"background-color":"#f0f0f0"},attrs:{cols:"12",sm:"4"}},[a("div",{staticClass:"d-block pa-2 deep-purple accent-4 white--text"},[e._v("Database")]),a("v-col",{staticClass:"pt-0 ma-0",attrs:{cols:"12",sm:"12"}},[a("v-checkbox",{attrs:{label:"Já validou com AD?",disabled:!e.editedItem.database},model:{value:e.editedItem.databaseList.adValid,callback:function(t){e.$set(e.editedItem.databaseList,"adValid",t)},expression:"editedItem.databaseList.adValid"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Salvar")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(t){var s=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(s)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(s)}}},[e._v(" mdi-delete ")])]}}])})],a("v-snackbar",{attrs:{timeout:e.timeout,top:"",right:"",color:e.snackbarColor},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" "),a("v-btn",{attrs:{color:"white",text:""},on:{click:function(t){e.snackbar=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1)],2)},l=[],d=(a("99af"),a("4de4"),a("4160"),a("c975"),a("07ac"),a("159b"),a("96cf"),a("1da1")),u=a("bc3a"),m=a.n(u),b={data:function(){return{dialog:!1,tab:null,snackbar:!1,text:"",snackbarColor:"success",timeout:4e3,numero:0,numero2:"",headers:[{text:"Número Task",align:"left",sortable:!1,value:"taskNumber"},{text:"Descrição",value:"description"},{text:"Backend",value:"backend",align:"center"},{text:"Frontend",value:"frontend",align:"center"},{text:"Database",value:"database",align:"center"},{text:"%Conclusão",value:"valueFinished",align:"center"},{text:"Ações",value:"action",sortable:!1}],defaultList:[{text:"A PO aprovou a atividade na review ?",value:"poApproves"},{text:"Há TimeBox para deploy?",value:"hasTimebox"},{text:"Consegue validar em prod a historia?",value:"storieValid"},{text:"A historia foi validada pelo QA?",value:"storieQAValid"},{text:"A atividade atende o escopo solicitado?",value:"scopeApproves"},{text:"Todas as alterações foram validadas com a PO?",value:"updatePoApproves"},{text:"Foi considerado os requisitos de segurança?",value:"securityCheck"},{text:"É necessário alguém externo a equipe acompanhar o deploy?",value:"externalApproves"},{text:"O processo de rollback foi verificado?",value:"rollbackVerify"},{text:"Existe dependência pra deploy?",value:"hasDeploy"},{text:"Documentou a historia/feature no confluence ?",value:"storieDoc"}],stories:[],editedIndex:-1,baseApiUrl:"https://checklist-cairo.herokuapp.com",editedItem:{taskNumber:"",description:"",backend:!1,frontend:!1,database:!1,valueFinished:0,backendList:{sameBase:!1,stressTest:!1,buildCreated:!1},databaseList:{adValid:!1},frontendList:{snapshotUpdated:!1,lintValid:!1,invision:!1},defaultList:{poApproves:!1,hasTimebox:!1,storieValid:!1,storieQAValid:!1,scopeApproves:!1,updatePoApproves:!1,securityCheck:!1,externalApproves:!1,rollbackVerify:!1,hasDeploy:!1,storieDoc:!1}}}},computed:{formTitle:function(){return-1===this.editedIndex?"Novo Item":"Editar História"}},watch:{dialog:function(e){e||this.close()}},methods:{changeChip:function(e,t){var a=this;return Object(d["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:s.t0=t,s.next="backend"===s.t0?3:"frontend"===s.t0?5:"database"===s.t0?7:9;break;case 3:return e.backend=!e.backend,s.abrupt("break",9);case 5:return e.frontend=!e.frontend,s.abrupt("break",9);case 7:return e.database=!e.database,s.abrupt("break",9);case 9:return s.next=11,m.a.put("".concat(a.baseApiUrl,"/api/checklists/").concat(e._id),e).then((function(){a.text="Atualizado banco de dados",a.snackbar=!0,a.getItems()})).catch((function(e){a.text="Houve um erro ao atualizar banco de dados",a.snackbarColor="error",a.snackbar=!0,console.log(e)}));case 11:case"end":return s.stop()}}),s)})))()},getItems:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("".concat(e.baseApiUrl,"/api/checklists/")).then((function(t){e.$store.state.stories=t.data,e.$store.state.stories.forEach((function(e){var t=11,a={};e.backend&&(t+=3),e.frontend&&(t+=3),e.database&&(t+=1);var s=100/t,o=function(e,t){var a=Object.assign(e,t);return a=Object.values(a).filter((function(e){return!0===e})),a};e.backend&&(e.valueFinished=s*o(a,e.backendList).length),e.frontend&&(e.valueFinished=s*o(a,e.frontendList).length),e.database&&(e.valueFinished=s*o(a,e.databaseList).length),e.valueFinished=s*o(a,e.defaultList).length}))})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.$store.state.stories.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(s="id:"+t.$store.state.stories.indexOf(e),a.t0=confirm("Tem certeza que deseja deletar este item?"),!a.t0){a.next=5;break}return a.next=5,m.a.delete("".concat(t.baseApiUrl,"/api/checklists/"),s).then((function(e){t.text="História deletada com sucesso",t.snackbar=!0,e&&t.getItems()})).catch((function(e){t.text="Houve um erro ao atualizar banco de dados",t.snackbarColor="error",t.snackbar=!0,console.log(e)}));case 5:case"end":return a.stop()}}),a)})))()},close:function(){this.dialog=!1},save:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.put("".concat(e.baseApiUrl,"/api/checklists/").concat(e.editedItem._id),e.editedItem).then((function(){e.text="Atualizado banco de dados",e.snackbar=!0,e.getItems()})).catch((function(e){console.log(e)}));case 2:e.close();case 3:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getItems()}},p=b,v=(a("ebd0"),a("2877")),f=a("6544"),k=a.n(f),h=a("8336"),x=a("b0af"),g=a("99d9"),C=a("ac7c"),I=a("cc20"),L=a("62ad"),V=a("a523"),O=a("8fea"),_=a("169a"),y=a("132d"),j=a("8e36"),A=a("0fd9"),w=a("2db4"),T=a("2fa4"),$=a("71a3"),F=a("c671"),S=a("fe57"),D=a("aac8"),N=a("8654"),P=a("71d9"),R=Object(v["a"])(p,c,l,!1,null,null,null),E=R.exports;k()(R,{VBtn:h["a"],VCard:x["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VCheckbox:C["a"],VChip:I["a"],VCol:L["a"],VContainer:V["a"],VDataTable:O["a"],VDialog:_["a"],VIcon:y["a"],VProgressLinear:j["a"],VRow:A["a"],VSnackbar:w["a"],VSpacer:T["a"],VTab:$["a"],VTabItem:F["a"],VTabs:S["a"],VTabsItems:D["a"],VTextField:N["a"],VToolbar:P["a"]});var B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",{attrs:{id:"form"},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"1"}},[a("v-text-field",{attrs:{counter:10,prefix:"PSCAI-",required:"",number:""},model:{value:e.formObject.taskNumber,callback:function(t){e.$set(e.formObject,"taskNumber",t)},expression:"formObject.taskNumber"}})],1),a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-text-field",{attrs:{counter:999,label:"Descrição",required:""},model:{value:e.formObject.description,callback:function(t){e.$set(e.formObject,"description",t)},expression:"formObject.description"}})],1),a("v-col",{attrs:{cols:"12",md:"1"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-checkbox",e._g({attrs:{label:"BE"},model:{value:e.formObject.backend,callback:function(t){e.$set(e.formObject,"backend",t)},expression:"formObject.backend"}},s))]}}])},[a("span",[e._v("Backend")])])],1),a("v-col",{attrs:{cols:"12",md:"1"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-checkbox",e._g({attrs:{label:"FE"},model:{value:e.formObject.frontend,callback:function(t){e.$set(e.formObject,"frontend",t)},expression:"formObject.frontend"}},s))]}}])},[a("span",[e._v("Frontend")])])],1),a("v-col",{attrs:{cols:"12",md:"1"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-checkbox",e._g({attrs:{label:"DB"},model:{value:e.formObject.database,callback:function(t){e.$set(e.formObject,"database",t)},expression:"formObject.database"}},s))]}}])},[a("span",[e._v("Database")])])],1)],1),a("v-row",[a("div",[a("v-col",[a("v-btn",{attrs:{color:"red",small:"",dark:""},on:{click:e.clearForm}},[e._v("Reset")])],1)],1),a("div",[a("v-col",[a("v-btn",{attrs:{color:"green",small:"",dark:""},on:{click:e.saveForm}},[e._v("Salvar")])],1)],1),e._v(" "+e._s(e.ola)+" ")])],1),a("v-snackbar",{attrs:{timeout:e.timeout,color:e.snackbarColor,top:"",right:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" "),a("v-btn",{attrs:{color:"white",text:""},on:{click:function(t){e.snackbar=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1)],1)},H=[],U=(a("a4d3"),a("e01a"),{name:"Form",data:function(){return{valid:!1,baseApiUrl:"https://checklist-cairo.herokuapp.com",snackbar:!1,snackbarColor:"success",text:"",ola:"",timeout:4e3,formObject:{backend:!1,frontend:!1,database:!1,taskNumber:"",description:""},initialValues:{backend:!1,frontend:!1,database:!1,taskNumber:"",description:""}}},methods:{saveForm:function(){var e=this;this.formObject.taskNumber?this.formObject.description?(this.formObject.taskNumber="PSCAI-".concat(this.formObject.taskNumber),m.a.post("".concat(this.baseApiUrl,"/api/checklists/"),this.formObject).then(function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a;case 2:if(!t.sent){t.next=6;break}e.clearForm(),t.next=7;break;case 6:case 7:e.clearForm(),e.text="Tarefa Cadastrada com sucesso!",e.snackbar=!0,console.log(e.$emit),e.getItems();case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){11e3===t.response.data.code&&(e.text="ERRO: História já havia sido cadastrada",e.snackbarColor="error",e.snackbar=!0),e.formObject.taskNumber=e.formObject.taskNumber.substring(6,e.formObject.taskNumber.length)}))):(this.snackbar=!0,this.text="Descrição é obrigatório"):(this.snackbar=!0,this.text="Numero da Task é obrigatório")},clearForm:function(){this.formObject=this.initialValues},getItems:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("".concat(e.baseApiUrl,"/api/checklists/")).then((function(t){e.$store.state.stories=t.data,e.$store.state.stories.forEach((function(e){var t=11,a={};e.backend&&(t+=3),e.frontend&&(t+=3),e.database&&(t+=1);var s=100/t,o=function(e,t){var a=Object.assign(e,t);return a=Object.values(a).filter((function(e){return!0===e})),a};e.backend&&(e.valueFinished=s*o(a,e.backendList).length),e.frontend&&(e.valueFinished=s*o(a,e.frontendList).length),e.database&&(e.valueFinished=s*o(a,e.databaseList).length),e.valueFinished=s*o(a,e.defaultList).length}))})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.$nextTick((function(){}))}}),q=U,z=(a("3953"),a("4bd4")),Q=a("3a2f"),M=Object(v["a"])(q,B,H,!1,null,null,null),J=M.exports;k()(M,{VBtn:h["a"],VCheckbox:C["a"],VCol:L["a"],VContainer:V["a"],VForm:z["a"],VIcon:y["a"],VRow:A["a"],VSnackbar:w["a"],VTextField:N["a"],VTooltip:Q["a"]});var W={name:"Content",components:{CheckListTable:E,Form:J}},Y=W,G=a("2a7f"),K=Object(v["a"])(Y,n,i,!1,null,null,null),X=K.exports;k()(K,{VToolbar:P["a"],VToolbarTitle:G["a"]});var Z={props:{source:String},components:{Content:X},data:function(){return{}}},ee=Z,te=(a("034f"),a("7496")),ae=a("40dc"),se=a("a75b"),oe=a("553a"),re=Object(v["a"])(ee,o,r,!1,null,null,null),ne=re.exports;k()(re,{VApp:te["a"],VAppBar:ae["a"],VCol:L["a"],VContainer:V["a"],VContent:se["a"],VFooter:oe["a"],VRow:A["a"],VToolbarTitle:G["a"]});a("d3b7");var ie,ce,le=a("8c4f"),de=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),s("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},ue=[],me={},be=Object(v["a"])(me,ie,ce,!1,null,null,null),pe=be.exports,ve={name:"Home",components:{HelloWorld:pe}},fe=ve,ke=Object(v["a"])(fe,de,ue,!1,null,null,null),he=ke.exports;s["a"].use(le["a"]);var xe=[{path:"/",name:"Home",component:he},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],ge=new le["a"]({mode:"history",base:"/",routes:xe}),Ce=ge,Ie=a("f309");s["a"].use(Ie["a"],{iconfont:"md"});var Le=new Ie["a"]({}),Ve=a("2f62");s["a"].use(Ve["a"]);var Oe=new Ve["a"].Store({state:{stories:[]}});s["a"].config.productionTip=!1,new s["a"]({router:Ce,store:Oe,vuetify:Le,render:function(e){return e(ne)}}).$mount("#app")},"8a23":function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},ebd0:function(e,t,a){"use strict";var s=a("2774"),o=a.n(s);o.a}});
//# sourceMappingURL=app.84fb441d.js.map