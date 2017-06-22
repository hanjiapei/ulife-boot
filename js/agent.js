/**
 * Created by bjwsl-001 on 2017/5/11.
 */
(function(){
  $(function(){
      //头尾生成
     $(".header").load("header.html",function(){
        $(".header .nav a").removeClass("active").eq(5).addClass("active")
     })
     $(".footer").load("footer.html")
     //加载中间区域// html location.search ?id=45645

      var p=0;//屏幕
      $.ajax({
          url:"ajax/selectAgent.php",
          data:{pagenum:0},
          success:chuli
      })//初始化ajax



    function chuli(d){
        console.dir(d)

    }


  })//网页加载完成
})()