!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):t.VueNestedMenu=r()}(this,function(){var t=["validator_list"];return{created:function(){var r=this;t.forEach(function(t){if(void 0===r[t])throw new Error("Validator.mixin Error: Required property '"+t+"' is undefined")}),this._initValidatorState()},data:function(){return{validator_state:[],validator_rules:[]}},methods:{validateAll:function(){var t=this;this.$nextTick(function(){return t.validator_list.reduce(function(r,i,e,a){var o=t.validator_rules.reduce(function(r,e){e.validationFn(i,a)?t._markFieldAsPass(i,e.propertyName):t._markFieldAsError(i,e.propertyName,e.errorMsg)},!0);return r&&o},!0)})},_markFieldAsError:function(t,r,i){var e=this.validator_state[t.id][r];e.error=!0,e.errorMsg="function"==typeof i?i(t):i},_markFieldAsPass:function(t,r){this.validator_state[t.id][r].error=!1},_initValidatorState:function(t){var r=[];return this.list.map(function(t){r[t.id]={},Object.keys(t).forEach(function(i){r[t.id][i]={error:!1,errorMsg:""}})}),r}},watch:{validator_list:{immediate:!0,handler:function(t){var r=this._initValidatorState(t),i=this.validator_state,e=r.map(function(t,r){return i[r]?i[r]:t});this.validator_state=e}}}}});
