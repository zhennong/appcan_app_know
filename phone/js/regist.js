var register = {
    
    //��ť����
    options:{ 
        mobile:'',
        password:'',
        rpassword:'',
        captcha:'',
        submitBtn:'',
    },
    //��ʼ�����¼�
    init:function(){
        //��mobile
        $(register.options.mobile).on('blur',function(){
            register.checkForm($(this),filters.mobile($(this).val()));  
        });
        //������
        $(register.options.password).on('blur',function(){
             register.checkForm($(this),filters.password($(this).val()));
        });
        //���ظ�����
        $(register.options.rpassword).on('blur',function(){
             register.checkForm($(this),filters.rpassword($(this).val()));
        });
        //��ע�ᰴť
        $(register.options.submitBtn).on('blur',function(){
             
        });
    },
    //���Ͷ�����֤��
    sendSms:function(){
        
    },
    //��������֤��
    checkSmsCaptcha:function(captcha){
        
    },
    //����Ԫ���Ƿ����Ҫ��,����������,dotype @get true,false
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
