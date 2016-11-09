$(function(){
	var w=$("body").width();
	if(w<=720){
		$(".dhs").mouseover(function(){
			$(".dhss").css({display:"block"})
		})
		$(".dhs").mouseout(function(){
			$(".dhss").css({display:"none"})
		})
		$(".xkk1").mouseover(function(){
			var index=$(this).index();
			$(".xkk1 ul").eq(index).css({display:"block"})
			
		})
		$(".xkk1").mouseout(function(){
			var index=$(this).index();
			$(".xkk1 ul").eq(index).css({display:"none"})
		})
		$(".xkk2").mouseover(function(){
			var index=$(this).index();
			$(".xkk2 ul").eq(index).css({display:"block"})
			
		})
		$(".xkk2").mouseout(function(){
			var index=$(this).index();
			$(".xkk2 ul").eq(index).css({display:"none"})
		})
		$(".xkk3").mouseover(function(){
			var index=$(this).index();
			$(".xkk3 ul").eq(index).css({display:"block"})
			
		})
		$(".xkk3").mouseout(function(){
			var index=$(this).index();
			$(".xkk3 ul").eq(index).css({display:"none"})
		})
		$(".xkk4").mouseover(function(){
			var index=$(this).index();
			$(".xkk4 ul").eq(index).css({display:"block"})
			
		})
		$(".xkk4").mouseout(function(){
			var index=$(this).index();
			$(".xkk4 ul").eq(index).css({display:"none"})
		})
		$(".xkk5").mouseover(function(){
			var index=$(this).index();
			$(".xkk5 ul").eq(index).css({display:"block"})
			
		})
		$(".xkk5").mouseout(function(){
			var index=$(this).index();
			$(".xkk5 ul").eq(index).css({display:"none"})
		})
		$(".xkk6").mouseover(function(){
			var index=$(this).index();
			$(".xkk6 ul").eq(index).css({display:"block"})
			
		})
		$(".xkk6").mouseout(function(){
			var index=$(this).index();
			$(".xkk6 ul").eq(index).css({display:"none"})
		})
		$(".xkk7").mouseover(function(){
			var index=$(this).index();
			$(".xkk7 ul").eq(index).css({display:"block"})
			
		})
		$(".xkk7").mouseout(function(){
			var index=$(this).index();
			$(".xkk7 ul").eq(index).css({display:"none"})
		})
//$(".xkk").mouseover(function(){
//	var index=$(this).index();
//	$(".xkk ul").each(function(index,obj){obj.style.display="none"}).eq(index).css({display:"block"})
//})
//$(".xkk").mouseout(function(){
//	var index=$(this).index();
//	$(".xkk ul").each(function(index,obj){obj.style.display="none"}).eq(index).css({display:"none"})
//})
	}
})
