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






try {
	
    $("<link>").attr({href: waifu_css,rel: "stylesheet", type: "text/css"}).appendTo('head');
	
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span><span class="fui-chat"></span><span class="fui-eye"></span><span class="fui-user"></span><span class="fui-photo"></span><span class="fui-cross"></span></div></div>');
    
	$.ajax({url: waifu_tips,dataType:"script", cache: true,async: false });
		 
        $.ajax({url: live2d_js,dataType:"script", cache: true,success: function() {
		
            /* 可直接修改部分参数 */
            live2d_settings['hitokotoAPI'] = "hitokoto.cn";  // 一言 API
            live2d_settings['modelId'] = 5;                  // 默认模型 ID
            live2d_settings['modelTexturesId'] = 1;          // 默认材质 ID
            live2d_settings['modelStorage'] = false;         // 不储存模型 ID
			live2d_settings['aboutPageUrl'] = 'https://www.fghrsh.net/post/123.html';   // 关于首页地址, '{URL 网址}'
			live2d_settings['canCloseLive2d'] = true;       // 隐藏 关闭看板娘 按钮
			live2d_settings['canTurnToHomePage'] = false;    // false隐藏 返回首页 按钮
			live2d_settings['waifuDraggable']='unlimited';// 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽),'unlimited'(自由拖拽)	
			live2d_settings['waifuToolTop'] = '0px';       // 工具栏顶部边距
			live2d_settings['waifuDraggableRevert'] = true; // 松开鼠标还原拖拽位置，可选 true(真), false(假)
            /* 在 initModel 前添加 */
            initModel(waifu_json);		<!---->
		
        }});
   
	
} catch(err) { console.log(err+"[Error] JQuery is not defined.") }
