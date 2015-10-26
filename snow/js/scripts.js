/* Old IE (<= 8) HTML5 tags */
document.createElement('HEADER');
document.createElement('FOOTER');
document.createElement('ASIDE');
document.createElement('ARTICLE');
document.createElement('MARK');
Function.prototype.clone = function() {
	var that = this;
	var temp = function temporary() { return that.apply(this, arguments); };
	for( key in this ) {
		temp[key] = this[key];
	}
	return temp;
};

$(document).ready(function() {
	$('a[rel*=leanModal]').leanModal({ top : 120, closeButton: ".modal_close" });	

	$('.complete a').click(function () {
		$('.complete').fadeOut('slow', function () {

		});
	});

	$('.modal-popup').magnificPopup({type:'inline'});
	
	$('.error a').click(function () {
		$('.error').fadeOut('slow', function () {

		});
	});
	
	$("#ajaxform, #ajaxform1, #ajaxform2, #ajaxform3").submit(function(){
		var form = $(this);
			var data = form.serialize();
			$.ajax({
			   type: 'POST',
			   url: '../send.php',
			   data: data,
		       success: function(data){ 
		       			$("#result").html(data);
						$('#result').fadeIn('slow').delay(5000).fadeOut('slow');
						$(form)[0].reset();
						$("#lean_overlay").fadeOut(200);
						$("#callback, #question").css({
							"display" : "none"
						});
		         },
		       error: function(data){ 
		       			alert("Ошибка при отправке.");				 				 
				 }
		       
			     });
		return false;
	});	
	
  	var set_slide = function(selector, slide) {
	  	$(selector).each(function() {
	  		var position = slide*400+300;
	  		var block = $(this);
	  		var shift = function() {
	  			block.css('background-position', '0 '+position+'px');
	  			position -= 100;
	  		}
	  		setTimeout(shift, 60);
	  		setTimeout(shift, 120);
	  		setTimeout(shift, 180);
	  		setTimeout(shift, 240);
	  	});
  	}
  	
timer();
	
function timer()
{
	var now = new Date();
	var newDate = new Date((now.getMonth()+1)+"/"+(now.getDate())+"/"+now.getFullYear()+" 23:59:59");
	/* var newDate = new Date("May,31,2015,23:59:59"); */
	var totalRemains = (newDate.getTime()-now.getTime());
    function intSpl (i) {
      i = Math.floor(i);
      return [~~(i/10), i%10]; 
    }
	if (totalRemains>1)
	{
		var Days = (parseInt(parseInt(totalRemains/1000)/(24*3600)));
		var Hours = (parseInt((parseInt(totalRemains/1000) - Days*24*3600)/3600));
		var Min = (parseInt(parseInt((parseInt(totalRemains/1000) - Days*24*3600) - Hours*3600)/60));
		var Sec = parseInt((parseInt(totalRemains/1000) - Days*24*3600) - Hours*3600) - Min*60;
		if (Days<10) { Days= "0" + Days; }
		Days = intSpl(Days);
		if (Hours<10) { Hours= "0" + Hours; }
		Hours = intSpl(Hours);
		if (Min<10) { Min= "0" + Min; }
		Min = intSpl(Min);
		if (Sec<10) { Sec= "0" + Sec; }
		Sec = intSpl(Sec);
		$(".day").each(function() { $('.d0').text(Days[0]); $('.d1').text(Days[1]); });
		$(".hour").each(function() { $('.h0').text(Hours[0]); $('.h1').text(Hours[1]); });
		$(".min").each(function() { $('.m0').text(Min[0]); $('.m1').text(Min[1]); });
		$(".sec").each(function() { $('.s0').text(Sec[0]); $('.sec1').text(Sec[1]); });
		setTimeout(timer, 1000);
	}
}


	$('.face em').each(function() {
		$(this).attr('data-number', parseInt($(this).text()));
	});
	
	$('.face').on('animateIn', function() {
		$(this).find('em').each(function() {
			var count =  parseInt($(this).attr('data-number'));
			var block = $(this);
			var timeout = null;
			var step = 1;
			timeout = setInterval(function() {
				if (step == 25) {
					block.text(count.toString());
					clearInterval(timeout);
				} else {
					block.text((Math.floor(count*step/25)).toString());
					step++;
				}
			}, 60);
		});
	});	

            $(document).ready(function(){
                $('.area').each(function(){
                   $(this).addClass('hidden_area'); 
                });
                var i;
                var gap = 300;
                var animateDuration = 500;
                var areasElements = $('.area');
                var areas = {};
                for(i = 0; i < areasElements.length; ++i){
                    area = $(areasElements[i]); 
                    areas[i] = {};
                    areas[i]['area'] = area;
                    areas[i]['done'] = false;
                }
                var action = function(){ 
                    for(i in areas){
                        if ( $(document).scrollTop() >= areas[i]['area'].offset().top - $(window).height() + gap){
                            if(false === areas[i]['done']){
                                areas[i]['done'] = true;
                                areas[i]['area'].animate({
                                    'opacity': 1
                                }, animateDuration, 'linear');
                            }
                        }
                    }
                };
                $(document).scroll(function(){ 
                    action(); 
                });
                action();
            });
});
  