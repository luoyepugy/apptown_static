<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<div id="add_template">
	<form id="add_template_form">
		<ul class="show_ul">
			<li>
				<p style="color: red;">模板参数</p> 
				<span>
				  wxid:<input id="wxid" type="text" name="wxid">
				</span> 
				<span>
				  name:<input id="template_name" type="text" name="template_name">
				</span>
				<span>
				  url:<input id="template_image_url" type="text" name="template_image_url">
				</span>
			</li>
			<li>
				<p style="color: red;">模板config参数</p> 
				
				 <!-- 设置 repeat -->
				 <span>
				     repeat: <input id="repeat" type="text" style="width:50px">
				 </span>
				  
				 <!-- 设置head -->
				 <span>
				  <font color="blue">head</font> 
				    w:<input id="head_w" type="text" name="head_w" style="width: 40px"> 
					h:<input id="head_h" type="text" name="head_h" style="width: 40px">
					x:<input id="head_x" type="text" name="head_x" style="width: 40px">
					y:<input id="head_y" type="text" name="head_y" style="width: 40px">
				 </span>
				 
				 <!-- 设置QRcode -->
				 <span>
				   <font color="blue">QRcode</font> 
				    type:<input id="QRcode_type" type="text" name="QRcode_type" style="width: 40px">
					w:<input id="QRcode_w" type="text" name="QRcode_w" style="width: 40px"> 
					h:<input id="QRcode_h" type="text" name="QRcode_h" style="width: 40px"> 
					x:<input id="QRcode_x" type="text" name="QRcode_x" style="width: 40px"> 
					y:<input id="QRcode_y" type="text" name="QRcode_y" style="width: 40px">
			     </span>
				
				
				<!--设置title -->
				<span>
				  <font color="blue">title</font>
				</span> 
				    
			    <span>
			      title:<input id="title_value" type="text" name="title_value">
			    </span> 
				<span>
					show:<input type="text" style="width: 50px;" id="title_show">
				    font:<input style="width: 50px;" id="title_font" type="text">
					size:<input id="title_size" type="text" name="title_size" style="width: 40px"> 
					x:<input id="title_x" type="text" name="title_x" style="width: 40px">
					y:<input id="title_y" type="text" name="title_y" style="width: 40px">
		       </span> 
		       <span>
	            color r:<input id="title_r" type="text" name="title_r" style="width: 40px"> 
	                  g:<input id="title_g" type="text" name="title_g" style="width: 40px"> 
	                  b:<input id="title_b" type="text" name="title_b" style="width: 40px">
		        </span> 
				
				<!-- 设置subtitle -->	
				<span>
				  	<font color="blue">subtitle</font>
				</span> 
				<span>
				   subtitle:<input id="subtitle_value" type="text" name="subtitle_value">
				</span> 
				<span>
					show:<input style="width: 50px;" id="subtitle_show" type="text">
					font:<input style="width: 50px;" id="subtitle_font" type="text">
				    size:<input id="subtitle_size" type="text" name="subtitle_size" style="width: 40px"> 
					x:<input id="subtitle_x" type="text" name="subtitle_x" style="width: 40px"> 
					y:<input id="subtitle_y" type="text" name="subtitle_y" style="width: 40px">
		        </span> 
			
			    <span>
			        color r:<input id="subtitle_r" type="text" name="subtitle_r" style="width: 40px"> 
					g:<input id="subtitle_g" type="text" name="subtitle_g" style="width: 40px">
					b:<input id="subtitle_b" type="text" name="subtitle_b" style="width: 40px">
			    </span>
				
				<!-- 设置nickname -->	 
				<span>
				   <font color="blue">nickname</font>
				</span>
				
				<span>
					show:<input style="width: 50px;" id="nickname_show" type="text">
					font:<input style="width: 50px;" id="nickname_font" type="text">
					size:<input id="nickname_size" type="text" name="nickname_size" style="width: 40px"> 
						x:<input id="nickname_x" type="text" name="nickname_x" style="width: 40px">
						y:<input id="nickname_y" type="text" name="nickname_y" style="width: 40px">
				</span>
				
				<span>
				    color r:<input id="nickname_r" type="text" name="nickname_r" style="width: 40px"> 
					g:<input id="nickname_g" type="text" name="nickname_g" style="width: 40px">
					b:<input id="nickname_b" type="text" name="nickname_b" style="width: 40px">
				</span>
					
					
				<!-- 设置duty -->
				<span>
				    <font color="blue">duty</font>
				</span>
			    <span>
			      show: <input style="width: 50px;" id="duty_show" type="text">
				  font:<input style="width: 50px;" id="duty_font" type="text">
			      size:<input id="duty_size" type="text" name="duty_size" style="width: 40px"> 
				  x:<input id="duty_x" type="text" name="duty_x" style="width: 40px"> 
				  y:<input id="duty_y" type="text" name="duty_y" style="width: 40px">
				</span> 
				
				<span>
				color r:<input id="duty_r" type="text" name="duty_r" style="width: 40px">
					  g:<input id="duty_g" type="text" name="duty_g" style="width: 40px">
				      b:<input id="duty_b" type="text" name="duty_b" style="width: 40px">
		        </span> 
		
		         
		         <!-- 设置company -->
		         <span>
		             <font color="blue">company</font>
		         </span> 
		         <span>
		         show:<input style="width: 50px;" id="company_show" type="text">
				 font:<input style="width: 50px;" id="company_font" type="text">
				 size:<input id="company_size" type="text" name="company_size" style="width: 40px"> 
					x:<input id="company_x" type="text" name="company_x" style="width: 40px">
					y:<input id="company_y" type="text" name="company_y" style="width: 40px">
				</span>
				
			    <span>
			      color r:<input id="company_r" type="text" name="company_r" style="width: 40px">
			            g:<input id="company_g" type="text" name="company_g" style="width: 40px">
				        b:<input id="company_b" type="text" name="company_b" style="width: 40px">
				</span> 
				
				<!-- 设置seat -->
				<span>
				  <font color="blue">seat</font>
				 </span>
			    <span>
			       seat:<input id="seat_value" type="text" name="title_value">
			    </span> 
				
				<span>
				  show: <input style="width: 50px;" id="seat_show" type="text">
				  font: <input style="width: 50px;" id="seat_font" type="text">
				  size: <input id="seat_size" type="text" name="seat_size" style="width: 40px">
				     x: <input id="seat_x" type="text" name="seat_x" style="width: 40px"> 
				     y: <input id="seat_y" type="text" name="seat_y" style="width: 40px">
				</span> 
				
				<span>
				  color r:<input id="seat_r" type="text" name="seat_r" style="width: 40px">
						g:<input id="seat_g" type="text" name="seat_g" style="width: 40px">
						b:<input id="seat_b" type="text" name="seat_b" style="width: 40px">
		        </span> 
		
		
		        <!-- 设置ticketId -->
		        <span><font color="blue">ticketId</font></span> 
		        <span>
		           ticketId:<input id="ticketId_value" type="text" name="title_value">
				</span> 
				
				<span>
				    show:<input style="width: 50px;" id="ticketId_show" type="text">
					font: <input style="width: 50px;" id="ticketId_font" type="text">
				    size:<input id="ticketId_size" type="text" name="ticketId_size" style="width: 40px">
				     x:<input id="ticketId_x" type="text" name="ticketId_x" style="width: 40px"> 
				     y:<input id="ticketId_y" type="text" name="ticketId_y" style="width: 40px">
			    </span>
			     
			    <span>
			         color r:<input id="ticketId_r" type="text" name="ticketId_r" style="width: 40px">
			               g:<input id="ticketId_g" type="text" name="ticketId_g" style="width: 40px">
				           b:<input id="ticketId_b" type="text" name="ticketId_b" style="width: 40px">
			    </span>
			</li>
			<li style="text-align: center;">
			 <a id="edit_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="add_submit()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp; 
			 <a id="edit_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onclick="add_cancel()">取消</a>
			</li>
		</ul>
	</form>
</div>
