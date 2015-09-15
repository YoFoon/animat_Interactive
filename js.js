function get$(e){
	return document.getElementById(e);
}
/*var oo = {
	 conW:1600
	,conH:815
	,minH:500
	,minW:1000
}
oo.bl = oo.conW/oo.conH;
oo.day = get$('daySingle');*/

//oo.fns = [{e:get$('em1'),xS:0,yS:188,x:2,y:3},{e:get$('em4'),xS:886,yS:669,x:-14,y:-10},{e:get$('em5'),xS:16,yS:283,x:-5,y:-3},{e:get$('em7'),xS:555,yS:-42,x:-2,y:4}   ];
/*oo.sizeCtr = function(){
	var cliWidth = document.documentElement.clientWidth || document.body.clientWidth;
	var cliHeight = document.documentElement.clientHeight || document.body.clientHeight;
	if(cliWidth<oo.minW){
		cliWidth = oo.minW;
	}
	if(cliHeight<oo.minH){
		cliHeight = oo.minH;
	}
	var cliBl = cliWidth/ cliHeight;
	if(cliBl>00.bl){
		oo.zoom = cliHeight/oo.conH;
	}else{
		oo.zoom = cliWidth/oo.conW;
	}
	var day=oo.day;
	day.style.zoom = oo.zoom;
}

oo.run = function(){
	document.onmouseover = function(evt){
		evt = evt || window.event;
		oo.move(evt.clientX,evt.clientY);
	}
}

oo.move = function(x,y){
	oo.px=(x-oo.ox)/oo.ox;
	oo.py=(y-oo.oy)/oo.oy;
	for( var i = 0; i<oo.fns; i++ ){
		var els = oo.fns[i];
		els.e.style.left = (els.xS+els.x*oo.px)+'px';
		els.e.style.top = (els.yS+els.y*oo.py)+'px';
	}
}
oo.start = function(){
	oo.run();
	oo.sizeCtr();
}
oo.start();*/
window.onload = function(){
	var conW=1600
	,conH=815
	,minH=500
	,minW=1000
	,bl = conW/conH
	,day = get$('daySingle')
	,fns = [{e:get$('em1'),xS:0,yS:188,x:2,y:3},{e:get$('em4'),xS:886,yS:669,x:-14,y:-10},{e:get$('em5'),xS:16,yS:283,x:-5,y:-3},{e:get$('em7'),xS:555,yS:-42,x:-2,y:4}   ];

	var zoom;
	function sizeCtr(){
		var cliWidth = document.documentElement.clientWidth || document.body.clientWidth;
		var cliHeight = document.documentElement.clientHeight || document.body.clientHeight;
		if(cliWidth<minW){
			cliWidth = minW;
		}
		if(cliHeight<minH){
			cliHeight = minH;
		}
		ox = cliWidth/2;
		oy = cliHeight/2;
		var cliBl = cliWidth/ cliHeight;
		if(cliBl>bl){
			zoom = cliHeight/conH;
		}else{
			zoom = cliWidth/conW;
		}
		day.style.zoom = zoom;
	}
	function run(){
		document.onmousemove = function(evt){
			evt = evt || window.event;
			move(evt.clientX,evt.clientY);
		}
	}

	function move(x,y){
		px=(x-ox)/ox;
		py=(y-oy)/oy;
		for( var i = 0; i<fns.length; i++ ){
			var els = fns[i];
			els.e.style.left = (els.xS+els.x*px)+'px';
			els.e.style.top = (els.yS+els.y*py)+'px';
		}
	}
	function start(){
		run();
		sizeCtr();
	}
	start();
};

