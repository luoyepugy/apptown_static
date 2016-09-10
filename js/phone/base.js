/**
 * Created by Administrator on 2016/6/14 0014.
 */
$(function(){
    $(".add_oiyu").on("click",function(){
        $(".ad_form").append('  <p class="cen">  <span class="fz12 zd">上传图</span>  <input type="text" placeholder="请上传图片" class="shngf_wegg ml10">  <a class="mui-btn uo_doiuy_a">上传</a><label class="f_i clos_opo"></label>  </p>')
    })
    
    $("body").on("click",".shngf_wegg",function(){
        $("#file_a").click()
    })
    
    $("body").on("click",".clos_opo",function(){
        $(this).parent().remove()
    })
})