<template>
  <div>
    <!-- QQ回调 -->

    <!-- 1.先在index.html里面引入js脚手包
   <script type="text/javascript"  charset="utf-8" src="http://connect.qq.com/qc_jssdk.js" data-appid="QQ登录时获取的AppId" data-redirecturi="申请接入qq登录时输入的回调地址"></script>
 -->
 <!-- 2.在页面内插入QQ登录按钮的位置
 <span id="qqLoginBtn"></span>
 在created里面写入
    //调用QC.Login方法，指定btnId参数将按钮绑定在容器节点中
   QC.Login({
       //btnId：插入按钮的节点id，必选
       btnId:"qqLoginBtn",
       //用户需要确认的scope授权项，可选，默认all
       scope:"all",
       //按钮尺寸，可用值[A_XL| A_L| A_M| A_S|  B_M| B_S| C_S]，可选，默认B_S
       size: "A_XL"
   }, function(reqData, opts){//登录成功
       //根据返回数据，更换按钮显示状态方法
       var dom = document.getElementById(opts['btnId']),
       _logoutTemplate=[
            //头像
            '<span><img src="{figureurl}" class="{size_key}"/></span>',
            //昵称
            '<span>{nickname}</span>',
            //退出
            '<span><a href="javascript:QC.Login.signOut();">退出</a></span>'
       ].join("");
       dom && (dom.innerHTML = QC.String.format(_logoutTemplate, {
           nickname : QC.String.escHTML(reqData.nickname), //做xss过滤
           figureurl : reqData.figureurl
       }));
   }, function(opts){//注销成功
         alert('QQ登录 注销成功');
   }
);
 -->
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  methoods: {},
};
</script>
<style>
</style>