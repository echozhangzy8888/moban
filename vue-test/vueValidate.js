/**
 * @Author: chexingyou
 * @Date:   2016-04-22 03:19:08
* @Last modified by:   chexingyou
* @Last modified time: 2016-05-06 15:01:08
 */
; (function(Vue, EM) {

     Vue.validator('email', {
         message: '邮箱格式不正确', // error message with plain string
         check: function(val) { // define validator
             return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
         }
     });

	 Vue.validator('mobile', {
         message: '手机号格式不正确',
         check: function(val) {
             return /^1[3|4|5|7|8][0-9]\d{8}$/.test(val);
         }
     });

	 Vue.validator('password', {
         message: '密码必须是6位以上',
         check: function(val) {
             return /^\S{6,}$/.test(val);
         }
     });

     Vue.validator('idcard', {
         message: '身份证格式不正确',
         check: function(val){
             return /^(\d{15}|\d{18}$|\d{17}[xX])$/.test(val);
         }
     });

     Vue.validator('chinese', {
         message: '请输入中文姓名',
         check: function(val){
             return  /^[\u4e00-\u9fa5]+$/.test(val);
         }
     })

     Vue.validator('bankcard', {
         message: '银行卡号不正确',
         check: function(val){
             //return  /^(\d{16}|\d{19})$/.test(val.replace(/\s/g, ''));
             return  /^(\d{16,19})$/.test(val.replace(/\s/g, ''));
         }
     })

     /**
      * 表单验证
      * @param  {[type]}   vue            vue实例
      * @param  {Function} fn             回调方法
      * @param  {[type]}   validationName validationName默认为validation
      * @return {[type]}                  [description]
      */

     EM.validate = function(vue, fn, validationName){
         validationName = validationName || 'validation';
         var v = vue['$' + validationName];
          setTimeout(function(){
         if(v.invalid){
			 var error = v.errors[v.errors.length-1];
            //  EM.alert(error.message, function(){
            //      $('[name=' + error.field + ']').focus();
            //  })
            alert(error.message)
         }else{
             fn.apply(vue);
         }
          },500)
     }

 })(window.Vue, window.EM);
