// 注意：live2d_path 参数应使用自己的接口
const live2d_path = "https://cdn.jsdelivr.net/gh/uggmycar/live2d@latest/";
//waifu.min.css
const waifu_css=live2d_path + "assets/waifu.min.css";
//waifu-tips.min.js
const waifu_tips=live2d_path + "assets/waifu-tips.min.js";
//live2d.min.js
const live2d_js=live2d_path + "assets/live2d.js";
//waifu-json
const waifu_json=live2d_path + "assets/waifu-tips.json";

//waifu-tips.js 依赖 JQuery 库
const jq="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js";
//实现拖动效果，需引入 JQuery UI 
const jq_ui="https://cdn.jsdelivr.net/npm/jquery-ui-dist@1.12.1/jquery-ui.min.js";




try {
    $("<link>").attr({href: waifu_css, 	<!---->
	
	rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append(
	'<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span><span class="fui-chat"></span><span class="fui-eye"></span><span class="fui-user"></span><span class="fui-photo"></span><span class="fui-info-circle"></span><span class="fui-cross"></span></div></div>');
    $.ajax
	({url: waifu_css 
	,dataType:"script", cache: true, success: function() {
		 
        $.ajax({url: live2d_js, 		<!---->
		
		dataType:"script", cache: true, success: function() {
		 
        $.ajax({url: jq , 
		
		dataType:"script", cache: true, success:function() {
		 
        $.ajax({url: jq_ui , 
		
		dataType:"script", cache: true, success: function() {
            /* 可直接修改部分参数 */
            live2d_settings['hitokotoAPI'] = "hitokoto.cn";  // 一言 API
            live2d_settings['modelId'] = 5;                  // 默认模型 ID
            live2d_settings['modelTexturesId'] = 1;          // 默认材质 ID
            live2d_settings['modelStorage'] = false;         // 不储存模型 ID
			live2d_settings['aboutPageUrl']         = 'https://www.fghrsh.net/post/123.html';   // 关于首页地址, '{URL 网址}'
			live2d_settings['waifuDraggable']       = 'unlimited';    // 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽), 'unlimited'(自由拖拽)
			live2d_settings['waifuDraggableRevert'] = true;         // 松开鼠标还原拖拽位置，可选 true(真), false(假)
            /* 在 initModel 前添加 */
            initModel(waifu_json);		<!---->
			
			
        }});
    }});
	 }});
	  }});
} catch(err) { console.log(err+"[Error] JQuery is not defined.") }
