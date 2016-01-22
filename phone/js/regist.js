var register = {
    
    //按钮对象
    options:{ 
        mobile:'',
        password:'',
        rpassword:'',
        captcha:'',
        regBtn:'',
    },
    //初始化绑定事件
    init:function(){
        //绑定mobile
        $(register.options.mobile).on('blur',function(){
            register.highLight($(this),filters.mobile($(this).val()));  
        });
        //绑定密码
        $(register.options.password).on('blur',function(){
             register.highLight($(this),filters.password($(this).val()));
        });
        //绑定重复密码
        $(register.options.rpassword).on('blur',function(){
             register.highLight($(this),filters.rpassword($(this).val()));
        });
    },
    //检查表单元素是否符合要求
    checkForm:function(mobile,password,rpassword,yzm){
        
    },
    //发送短信验证码
    sendSms:function(){
        
    },
    //检查短信验证码
    checkSmsCaptcha:function(captcha){
        
    },
    //高亮提醒,dotype @get true,false
    highLight:function(o,dotype){
        if(dotype){
            o.removeClass('highlight');
        }else{
            o.addClass('highlight');
        }
    },
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
