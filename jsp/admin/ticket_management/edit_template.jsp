<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<div id="edit_template">
	<form id="edit_template_form">
	    <!-- <input type="hidden" id="templateId"> -->
		<ul class="show_ul">
			 <li>
				<p style="color: red;">模板参数</p> 
				<span>
				  wxid:<input id="edit_wxid" type="text" name="edit_wxid">
				</span> 
				<span>
				  name:<input id="edit_template_name" type="text" name="edit_template_name">
				</span>
				<span>
				  templateId:<input id="templateId" type="text" name="templateId" disabled="disabled">
				</span>
				
			 </li>
			 
			 <li>
				<p style="color: red;">模板config参数</p> 
				
				 <!-- 设置 repeat -->
				 <span>
				     repeat: <input id="edit_repeat" type="text" style="width:50px">
				 </span>
				  
				 <!-- 设置head -->
				 <span>
				  <font color="blue">head</font> 
				    w:<input id="edit_head_w" type="text" name="edit_head_w" style="width: 40px"> 
					h:<input id="edit_head_h" type="text" name="edit_head_h" style="width: 40px">
					x:<input id="edit_head_x" type="text" name="edit_head_x" style="width: 40px">
					y:<input id="edit_head_y" type="text" name="edit_head_y" style="width: 40px">
				 </span>
				 
				 <!-- 设置QRcode -->
				 <span>
				   <font color="blue">QRcode</font> 
				    type:<input id="edit_QRcode_type" type="text" name="edit_QRcode_type" style="width: 40px">
					w:<input id="edit_QRcode_w" type="text" name="edit_QRcode_w" style="width: 40px"> 
					h:<input id="edit_QRcode_h" type="text" name="edit_QRcode_h" style="width: 40px"> 
					x:<input id="edit_QRcode_x" type="text" name="edit_QRcode_x" style="width: 40px"> 
					y:<input id="edit_QRcode_y" type="text" name="edit_QRcode_y" style="width: 40px">
			     </span>
				
				
				<!--设置title -->
				<span>
				  <font color="blue">title</font>
				</span> 
				    
			    <span>
			      title:<input id="edit_title_value" type="text" name="edit_title_value">
			    </span> 
				<span>
					show:<input type="text" style="width: 50px;" id="edit_title_show">
				    font:<input style="width: 50px;" id="edit_title_font" type="text">
					size:<input id="edit_title_size" type="text" name="edit_title_size" style="width: 40px"> 
					x:<input id="edit_title_x" type="text" name="edit_title_x" style="width: 40px">
					y:<input id="edit_title_y" type="text" name="edit_title_y" style="width: 40px">
		       </span> 
		       <span>
	            color r:<input id="edit_title_r" type="text" name="edit_title_r" style="width: 40px"> 
	                  g:<input id="edit_title_g" type="text" name="edit_title_g" style="width: 40px"> 
	                  b:<input id="edit_title_b" type="text" name="edit_title_b" style="width: 40px">
		        </span> 
				
				<!-- 设置subtitle -->	
				<span>
				  	<font color="blue">subtitle</font>
				</span> 
				<span>
				   subtitle:<input id="edit_subtitle_value" type="text" name="edit_subtitle_value">
				</span> 
				<span>
					show:<input style="width: 50px;" id="edit_subtitle_show" type="text">
					font:<input style="width: 50px;" id="edit_subtitle_font" type="text">
				    size:<input id="edit_subtitle_size" type="text" name="edit_subtitle_size" style="width: 40px"> 
					x:<input id="edit_subtitle_x" type="text" name="edit_subtitle_x" style="width: 40px"> 
					y:<input id="edit_subtitle_y" type="text" name="edit_subtitle_y" style="width: 40px">
		        </span> 
			
			    <span>
			        color r:<input id="edit_subtitle_r" type="text" name="edit_subtitle_r" style="width: 40px"> 
					g:<input id="edit_subtitle_g" type="text" name="edit_subtitle_g" style="width: 40px">
					b:<input id="edit_subtitle_b" type="text" name="edit_subtitle_b" style="width: 40px">
			    </span>
				
				<!-- 设置nickname -->	 
				<span>
				   <font color="blue">nickname</font>
				</span>
				
				<span>
					show:<input style="width: 50px;" id="edit_nickname_show" type="text">
					font:<input style="width: 50px;" id="edit_nickname_font" type="text">
					size:<input id="edit_nickname_size" type="text" name="edit_nickname_size" style="width: 40px"> 
						x:<input id="edit_nickname_x" type="text" name="edit_nickname_x" style="width: 40px">
						y:<input id="edit_nickname_y" type="text" name="edit_nickname_y" style="width: 40px">
				</span>
				
				<span>
				    color r:<input id="edit_nickname_r" type="text" name="edit_nickname_r" style="width: 40px"> 
					g:<input id="edit_nickname_g" type="text" name="edit_nickname_g" style="width: 40px">
					b:<input id="edit_nickname_b" type="text" name="edit_nickname_b" style="width: 40px">
				</span>
					
					
				<!-- 设置duty -->
				<span>
				    <font color="blue">duty</font>
				</span>
			    <span>
			      show: <input style="width: 50px;" id="edit_duty_show" type="text">
				  font:<input style="width: 50px;" id="edit_duty_font" type="text">
			      size:<input id="edit_duty_size" type="text" name="edit_duty_size" style="width: 40px"> 
				  x:<input id="edit_duty_x" type="text" name="edit_duty_x" style="width: 40px"> 
				  y:<input id="edit_duty_y" type="text" name="edit_duty_y" style="width: 40px">
				</span> 
				
				<span>
				color r:<input id="edit_duty_r" type="text" name="edit_duty_r" style="width: 40px">
					  g:<input id="edit_duty_g" type="text" name="edit_duty_g" style="width: 40px">
				      b:<input id="edit_duty_b" type="text" name="edit_duty_b" style="width: 40px">
		        </span> 
		
		         
		         <!-- 设置company -->
		         <span>
		             <font color="blue">company</font>
		         </span> 
		         <span>
		         show:<input style="width: 50px;" id="edit_company_show" type="text">
				 font:<input style="width: 50px;" id="edit_company_font" type="text">
				 size:<input id="edit_company_size" type="text" name="edit_company_size" style="width: 40px"> 
					x:<input id="edit_company_x" type="text" name="edit_company_x" style="width: 40px">
					y:<input id="edit_company_y" type="text" name="edit_company_y" style="width: 40px">
				</span>
				
			    <span>
			      color r:<input id="edit_company_r" type="text" name="edit_company_r" style="width: 40px">
			            g:<input id="edit_company_g" type="text" name="edit_company_g" style="width: 40px">
				        b:<input id="edit_company_b" type="text" name="edit_company_b" style="width: 40px">
				</span> 
				
				<!-- 设置seat -->
				<span>
				  <font color="blue">seat</font>
				 </span>
			    <span>
			       seat:<input id="edit_seat_value" type="text" name="edit_title_value">
			    </span> 
				
				<span>
				  show: <input style="width: 50px;" id="edit_seat_show" type="text">
				  font: <input style="width: 50px;" id="edit_seat_font" type="text">
				  size: <input id="edit_seat_size" type="text" name="edit_seat_size" style="width: 40px">
				     x: <input id="edit_seat_x" type="text" name="edit_seat_x" style="width: 40px"> 
				     y: <input id="edit_seat_y" type="text" name="edit_seat_y" style="width: 40px">
				</span> 
				
				<span>
				  color r:<input id="edit_seat_r" type="text" name="edit_seat_r" style="width: 40px">
						g:<input id="edit_seat_g" type="text" name="edit_seat_g" style="width: 40px">
						b:<input id="edit_seat_b" type="text" name="edit_seat_b" style="width: 40px">
		        </span> 
		
		
		        <!-- 设置ticketId -->
		        <span><font color="blue">ticketId</font></span> 
		        <span>
		           ticketId:<input id="edit_ticketId_value" type="text" name="edit_title_value">
				</span> 
				
				<span>
				    show:<input style="width: 50px;" id="edit_ticketId_show" type="text">
					font: <input style="width: 50px;" id="edit_ticketId_font" type="text">
				    size:<input id="edit_ticketId_size" type="text" name="edit_ticketId_size" style="width: 40px">
				     x:<input id="edit_ticketId_x" type="text" name="edit_ticketId_x" style="width: 40px"> 
				     y:<input id="edit_ticketId_y" type="text" name="edit_ticketId_y" style="width: 40px">
			    </span>
			     
			    <span>
			         color r:<input id="edit_ticketId_r" type="text" name="edit_ticketId_r" style="width: 40px">
			               g:<input id="edit_ticketId_g" type="text" name="edit_ticketId_g" style="width: 40px">
				           b:<input id="edit_ticketId_b" type="text" name="edit_ticketId_b" style="width: 40px">
			    </span>
			</li>
			<li style="text-align: center;">
			   <a id="edit_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="edit_submit()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp; 
			   <a id="edit_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onclick="edit_cancel()">取消</a>
			</li>
		</ul>
	</form>
</div>
