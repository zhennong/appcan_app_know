var register = {
    
    //按钮对象
    options:{ 
        mobile:'',
        password:'',
        rpassword:'',
        captcha:'',
        submitBtn:'',
    },
    //初始化绑定事件
    init:function(){
        //绑定mobile
        $(register.options.mobile).on('blur',function(){
            register.checkForm($(this),filters.mobile($(this).val()));  
        });
        //绑定密码
        $(register.options.password).on('blur',function(){
             register.checkForm($(this),filters.password($(this).val()));
        });
        //绑定重复密码
        $(register.options.rpassword).on('blur',function(){
             register.checkForm($(this),filters.rpassword($(this).val()));
        });
        //绑定注册按钮
        $(register.options.submitBtn).on('blur',function(){
             
        });
    },
    //发送短信验证码
    sendSms:function(){
        
    },
    //检查短信验证码
    checkSmsCaptcha:function(captcha){
        
    },
    //检查表单元素是否符合要求,并高亮提醒,dotype @get true,false
    checkForm:function(o,dotype){
        if(dotype){
            o.removeClass('highlight');
            return true;
        }else{
            o.addClass('highlight');
            return false;
        }
    },
    submitForm:function(){
        
    }
};

//表单滤镜
var filters = {
    //过滤手机号
    mobile:function(o){
        var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/
        o = parseInt(o);
        if(o=='' || !reg.test(o)){
            return false;
        }else{
            return true;
        }
    },
    //过滤真实姓名
    truename:function(o){
        
    },
    //过滤密码位数
    password:function(o,min,max){
        
    },
    //过滤重复密码是否一致
    rpassword:function(o){
        
    },
}
