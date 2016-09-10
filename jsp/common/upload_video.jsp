<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<link rel="stylesheet" href="/css/common/upload_video.css">
 <!-- 设置封面弹出层 -->
<div class="modal fade" id="upload_video" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content"
			style="height: 500px; width: 652px; ">
			<div class="modal-header">
				<button type="button" id="setting-close" class="close" data-dismiss="modal"
					aria-hidden="true">&times;</button>
				<h4 class="modal-title" style="text-align: center;">
					<b>上传视频</b>
				</h4>
			</div>
			<div style="clear: both"></div>
			
			<div class="upload-video">
			    <p class="upload-video-label">复制视频通用代码：
			      <a class="color-9" href="/help/menu?tab=11">什么是视频通用代码？</a>
			    </p>
			    
			    <p class="upload-video-label">
			       <input type="url" class="copy-video-code" placeholder="请复制视频通用代码">
			    </p>
			    
			    <p class="upload-video-label">支持的视频：
			        <a class="color-9" href="http://www.youku.com/">优酷</a>、
			        <a class="color-9" href="http://www.tudou.com/">土豆</a>、
			        <a class="color-9" href="http://v.qq.com/?ptag=duba.kuzhan">腾讯</a>
			    </p>
			    
			    <div class="mt-20">
			        <div class="video-img">
				        <img src="/img/Video_loading_p.jpg">
				    </div>
				    
				    <div class="video-right">
				       <p class="text-left">视频尺寸</p>
				       <p class="mt-10">宽度
					       <span class="video-span">
					         <input type="text" class="" maxlength="4" value="640">
					            <a>(宽度默认为640px)</a>
					       </span>px
				       </p>
				       <p class="mt-40">高度
					       <span class="video-span">
					           <input type="text" class="" maxlength="4" value="360">
					           <a>(高度默认为360px)</a>
					       </span>px
				       </p>
				    </div>
			    </div>
			    
				<!-- <p class="pup_button_a mt-20">
				      <button class="submit_pup_a">确认</button>
				      <button class="reset_pup_a">取消</button>
				</p> -->
			</div>
		</div>
	</div>
</div>   
    