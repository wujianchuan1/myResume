 (function(){
   var datas=[
   {
    "icon1":"./images/hanbao.png",
    "icon2":"./images/gongshang.png",
    "icon3":"./images/pingguoshu.png",
    "title":"Retro Diner/工商银行/苹果树",
    "skill":{"title":"技术实现","txt":["HTML、CSS"]},
    "projectDesc":{"title":"项目描述","txt":["使用HTML及CSS对页面进行搭建"]},
    "comeTrue":{"title":"实现技术","txt":["根据产品需求分析并给出最优的网页前端结构解决方案并完成效果实现","利用css+html等将页面实现，高度还原设计图"]},
    "projectGet":{"title":"项目收获","txt":["熟练WebStorm、ps工具的使用","使用html css特性对页面进行制作，效果显著","对项目的前端流程有了一定的认识，为以后的项目积累了经验"]},
    "projectAddr":{"title":"项目地址","txt":["跳转至Retro Diner——http://wangch0315.cn/kuaican/html/home1.html","跳转至工商银行——http://wangch0315.cn/gongshang/index.html","跳转至苹果树——http://wangch0315.cn/apple-tree/index.html"]}
  },
  {
    "icon1":"./images/mi1.jpg",
    "icon2":"./images/mi2.jpg",
    "icon3":"./images/mi3.jpg",
    "title":"小米官方网站",
    "skill":{"title":"技术实现","txt":["HTML5、CSS3\jQuery、Bootstrap"]},
    "projectDesc":{"title":"项目描述","txt":["仿照小米商城、实现小米商城首页"]},
    "comeTrue":{"title":"实现技术","txt":["通过采用div+css样式布局排版","使用jQuery完成页面动态效果部分","使用html5、css3新特性进行样式，动态效果的实现"]},
    "projectGet":{"title":"项目收获","txt":["熟悉了js dom,event,ajax，能够编写js原生代码","更加熟练掌握了css3的特性","更加熟练用chrome等调试工具调试代码"]},
    "projectAddr":{"title":"项目地址","txt":["跳转至小米商城——http://wangch0315.cn/xiaomishangcheng/index.html"]}
  },
  {
    "icon1":"./images/boya1.png",
    "icon2":"./images/boya2.png",
    "icon3":"./images/boya3.png",
    "title":"博雅诚信",
    "skill":{"title":"技术实现","txt":["HTML、CSS\bootstrap\jQuery、javascript"]},
    "projectDesc":{"title":"项目描述","txt":["实现标题跟随、app下载等功能"]},
    "comeTrue":{"title":"实现技术","txt":["根据产品需求分析并给出最优的网页前端结构解决方案并完成效果实现","利用css+html等将页面实现，高度还原设计图","使用javascript、jQuery完成页面动态交互"]},
    "projectGet":{"title":"项目收获","txt":["深刻理解了javascript性能优化","熟练原生javascript、jQuery的使用","熟悉了bootstrap的页面布局"]},
    "projectAddr":{"title":"项目地址","txt":["跳转至博雅诚信——http://wangch0315.cn/hireGo-portal/index.html"]}
  },
  {
    "icon1":"./images/game1.png",
    "icon2":"./images/game2.png",
    "icon3":"./images/game3.png",
    "title":"翻牌消除游戏",
    "skill":{"title":"技术实现","txt":["HTML、CSS\jQuery"]},
    "projectDesc":{"title":"项目描述","txt":["使用原生javascript达到翻牌消除的效果"]},
    "comeTrue":{"title":"实现技术","txt":["利用原生javascript达到翻牌消除的效果的制作"]},
    "projectGet":{"title":"项目收获","txt":["巩固了原生js基础知识及使用方法"]},
    "projectAddr":{"title":"项目地址","txt":["跳转至翻牌消除游戏——http://wangch0315.cn/fanpaixiaochuGame/index.html"]}
  },
  ] ;

  var left=$(".section-5 .swiper-container-h .left");
  var right=$(".section-5 .swiper-container-h .right");
  var page5=$(".section-5 .swiper-container-h .page5");
  
 var str='';
 for (var j = 0; j < datas.length; j++) {
   str+=item(j);

   
 };
 page5.html(str);
 
 var sec5Imgs=$(".section-5 .swiper-container-h .left img");
  $(sec5Imgs).hover(function() {
    console.log($(this).index())
    $(sec5Imgs).eq($(this).index()).addClass('on');
  }, function() {
    $(sec5Imgs).eq($(this).index()).removeClass('on');
  }); 

  function item(j){
  var str='';
  str+='<div class="swiper-slide production1">';
  str+='<div class="left">';
  str+='<img src="'+datas[j].icon1+'" alt="" class="icon1">';
  str+='<img src="'+datas[j].icon2+'" alt="" class="icon2">';
  str+='<img src="'+datas[j].icon3+'" alt="" class="icon3">';
  str+='</div>';
  str+='<div class="right">';
  str+='<h1>'+datas[j].title+'</h1>';
  str+='<div class="tex">';
  str+='<h2>'+datas[j].skill.title+'</h2>';
  for (var i = 0; i < datas[j].skill.txt.length; i++) {
    str+='<p>'+datas[j].skill.txt[i]+'</p>'
  };
  str+='</div>';
  str+='<div class="tex">';
  str+='<h2>'+datas[j].projectDesc.title+'</h2>';
  for (var i = 0; i < datas[j].projectDesc.txt.length; i++) {
    str+='<p>'+datas[j].projectDesc.txt[i]+'</p>'
  };
  str+='</div>';
  str+='<div class="tex">';
  str+='<h2>'+datas[j].comeTrue.title+'</h2>';
  for (var i = 0; i < datas[j].comeTrue.txt.length; i++) {
    str+='<p>'+datas[j].comeTrue.txt[i]+'</p>'
  };
  str+='</div>';
   str+='<div class="tex">';
  str+='<h2>'+datas[j].projectGet.title+'</h2>';
  for (var i = 0; i < datas[j].projectGet.txt.length; i++) {
    str+='<p>'+datas[j].projectGet.txt[i]+'</p>'
  };
  str+='</div>';
    str+='<div class="tex projectAddr">';
  str+='<h2>'+datas[j].projectAddr.title+'</h2>';
  for (var i = 0; i < datas[j].projectAddr.txt.length; i++) {
    str+='<a href="http://wangch0315.cn/hireGo-portal/index.html"><p>'+datas[j].projectAddr.txt[i]+'</p></a>'
  };
  str+='</div>';
  str+='</div>';
  str+='</div>';
  return str;
  
};



 

 })();
 (function(){
 	 var swiperV = new Swiper('.swiper-container-v', {
 	 	   direction: 'vertical',
     	 mousewheel: true,
       
        pagination: {
        el: '.swiper-pagination-v',
        clickable: true,
        dynamicBullets: true,
      },
      on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
      }
    });
   
    var swiperH= new Swiper('.swiper-container-h', {
      
   
      pagination: {
        el: '.swiper-pagination-h',
        clickable: true,
         dynamicBullets: true,

      },
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

 })();
 (function(){
    var datas=[['您好，我是王闯','爱编程，爱前端，爱新技术，','爱运动，爱健身，爱旅行，','生活中活泼开朗、喜欢沟通交流，','工作上认真负责、热爱学习创新，','目前，自身技术还差很远，','但，路程虽远，仍要负重前行！！'
],
['可能就像这一句情话','You are the css to my html.','“我的生活索然无味，','直到遇见了你。”','为爱好而学，为看好这个行业而学','为一种“技术人员”的自尊而学'
],
['工作，本应该是一件使人快乐的事','但，好像...只有编程才能使我感到真正的快乐！！！','那么..','放下从前，着眼未来','为心中所爱，直奔前端'
],
['我的不足是：非计算机专业','导致很多非前端范畴的专业名词理解不深，改进ing!','我的优势是：非计算机专业','建筑工作的经历，铸就了我工作认真，不怕吃苦的作风！','如果您看好我，','那就选我吧！'
],
['有人说【IT是个青春饭】' ,'但我 (ฅ´ω`ฅ)','会一直走下去','成为一名优秀的前端工程师','。','。','当然，得先有一个您给我发的offer！'
]];
var leftitems=$('.left .item');
var rightitem=$('.right .item');
for (var i = 0; i < leftitems.length; i++) {
    var item=leftitems[i];
    item.index=i;
    item.addEventListener('mouseover', function(){
     setContent(this.index)
    })
};
setContent(0);
function setContent(index){
  var data=datas[index];
      var str='';

      for (var j= 0; j < data.length; j++) {
        str+='<p>'+data[j]+'</p>'
      };
      rightitem.html(str)
}


 })();
 (function(){
  var datas=[{'title':'HTML5','txt1':'熟练HTML标记语言','txt2':'深刻理解web标准和w3c规范','txt3':'熟练HTML熟悉盒模型和各类布局方式、 能够根据设计图实现页面布局和交互效果'},
  {'title':'CSS3','txt1':'熟练运用css及css新特性','txt2':'熟悉css3标准，能够解决常见兼容性问题','txt3':'熟练Bootstrap来实现各种布局特效'},
  {'title':'JavaScript','txt1':'对js有深入的了解，熟练使用js','txt2':'熟悉Ajax，有ajax交互经验，熟练使用JSON','txt3':'熟练掌握jQuery'},
  {'title':'React','txt1':'熟悉React、React脚手架、react-router、fetch','txt2':'熟练npm、webpack相关技术','txt3':'正在深入学习ES6'}
  ];
  var items=$('.section-4 .bd');
  var str='';
  for (var i = 0; i < datas.length; i++) {
    var data=datas[i];
  
        str+='<div class="ani item" swiper-animate-effect="bounceInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">'
        str+='<div class="ani title" swiper-animate-effect="bounceInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.6s">'+data.title+'</div>'
        str+='<div class="ani content" swiper-animate-effect="bounceInUp" swiper-animate-duration="0.5s" swiper-animate-delay="1s">'
        str+='<p>'+data.txt1+'</p>'
        str+='<p>'+data.txt2+'</p>'
        str+='<p>'+data.txt3+'</p>'
        str+='</div>'
        str+='</div>'

  };
  items.html(str)

 })();


(function(){
 
})();