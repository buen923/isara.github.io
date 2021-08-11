'use strict';

{
	$(document).ready(function(){
		$('.flow-title').on('click',function(){
			$(this).next().slideToggle(300);
		});
	});

	$(document).ready(function(){
		$('.questions-box .txtm').on('click',function(){
			$(this).next().slideToggle(300);
		});
	});

	const header=$('.page-header');

	$('a[href^="#"]').on('click',function(){		
		const gap=header.outerHeight();
		const speed=500;
		const href=$(this).attr("href");
		const target=$(href=="#"||href==""?"html":href);
		const position=target.offset().top-gap;

		$("html,body").animate({scrollTop:position},speed,"swing");
		return false;
	})
}