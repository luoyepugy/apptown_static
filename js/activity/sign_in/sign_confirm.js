/**
 * 打印编码
 */ $(function(){
            $(".bg_conf_a,.oup_rpouye_a").css({"width": screen.width,"height":screen.height})
    
        
      /*  确认打印按钮触发事件*/
    $(".confirmation_a").on("click",function(){
        $(".oup_rpouye_a").show()
    })
        
        
        time_djs()
        
            $(".sunb_pou button").on("click",function(){
                $(".oup_rpouye_a").hide()
            })
        
        })
             var time_p=40,time_po;
   		 function time_djs(){
            time_po=setTimeout(function(){
                 time_p--;
                 time_djs()
                $(".time_sey").text(time_p)
            },1000)
            if(time_p==0){
                clearTimeout(time_po)
                $(".time_dj").hide()
                $(".sunb_pou").show()
            }
              
        }