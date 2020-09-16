
$(document).ready(function(){

   
    function clear(){
        setInterval(function(){

            // 左侧广告栏
            $('#content_right').fadeOut("slow");
            // console.log("***********   清除左侧广告栏");
            // 首页清广告
            $('#s_main').fadeOut("slow");
            // console.log("***********   清除首页清广告");

            // 头几条广告隐藏 属性选择器
            $('[cmatchid]').fadeOut("slow");//hide();
            // console.log("***********   清除搜索");

            // 找到广告 
             $('.ec_tuiguang_pplink').parent().parent().fadeOut("slow");

            // $('[tpl="se_com_default"]').fadeOut("slow");
            //重新设定宽度
            const width=$(document.body).width() * 0.8;

             $('#content_left').width(width);
             $('.c-abstract').width(width);

              
        }, 1000);
       
    }
    // 清空
    clear();
   

        
    }
);
