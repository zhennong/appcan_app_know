var register = {
    
    //��ť����
    options:{ 
        mobile:'',
        password:'',
        rpassword:'',
        captcha:'',
        regBtn:'',
    },
    //��ʼ�����¼�
    init:function(){
        //��mobile
        $(register.options.mobile).on('blur',function(){
            register.highLight($(this),filters.mobile($(this).val()));  
        });
        //������
        $(register.options.password).on('blur',function(){
             register.highLight($(this),filters.password($(this).val()));
        });
        //���ظ�����
        $(register.options.rpassword).on('blur',function(){
             register.highLight($(this),filters.rpassword($(this).val()));
        });
    },
    //����Ԫ���Ƿ����Ҫ��
    checkForm:function(mobile,password,rpassword,yzm){
        
    },
    //���Ͷ�����֤��
    sendSms:function(){
        
    },
    //��������֤��
    checkSmsCaptcha:function(captcha){
        
    },
    //��������,dotype @get true,false
    highLight:function(o,dotype){
        if(dotype){
            o.removeClass('highlight');
        }else{
            o.addClass('highlight');
        }
    },
};

//���˾�
var filters = {
    //�����ֻ���
    mobile:function(o){
        var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/
        o = parseInt(o);
        if(o=='' || !reg.test(o)){
            return false;
        }else{
            return true;
        }
    },
    //������ʵ����
    truename:function(o){
        
    },
    //��������λ��
    password:function(o,min,max){
        
    },
    //�����ظ������Ƿ�һ��
    rpassword:function(o){
        
    },
}
