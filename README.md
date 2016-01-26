#appcan_app_know(Agricultural medicine) 编码规范

##默认编码

    utf-8编码

##ajax接口数据提交格式

    url:config.apiUrl
    data:{action:yourAction,other:other}
    dataType:'jsonp'
    jsonp:'jsoncallback'

##获取接口数据格式

    {status:id,msg:msg,data:data}