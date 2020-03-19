<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" ng-app="myapp" >
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- for bootstrap modal in consulter-request  -->
<link rel="stylesheet" href="/css/bootstrap/bootstrap.css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<!-- / bootstrap modal -->
<title>Template</title>
<link rel="stylesheet" href="{{asset('css/default-old.css')}}" type="text/css" />

<script type="text/javascript" src="{{asset('js/plugins/jquery-1.7.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/plugins/jquery-ui-1.8.16.custom.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/jquery.tooltips.js')}}"></script>
<script type="text/javascript" src="{{asset('js/plugins/jquery.cookie.js')}}"></script>
<script type="text/javascript" src="{{asset('js/plugins/tinymce/jquery.tinymce.js')}}"></script>
<script type="text/javascript" src="{{asset('js/plugins/colorpicker.js')}}"></script>
<script type="text/javascript" src="{{asset('js/custom/editor.js')}}"></script>
<script type="text/javascript" src="{{asset('js/plugins/jquery.dataTables.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/plugins/jquery.uniform.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/plugins/jquery.flot.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/plugins/jquery.flot.resize.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/plugins/jquery.slimscroll.js')}}"></script>
<script type="text/javascript" src="{{asset('js/custom/general.js')}}"></script>
<script type="text/javascript" src="{{asset('js/custom/elements.js')}}"></script>
<script type="text/javascript" src="{{asset('js/custom/tables.js')}}"></script>
<script type="text/javascript" src="{{asset('js/clipboard.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/plugins/jquery.maskedinput.min.js')}}"></script>

<!-- CKeditor version 4.6.2 full -->
<script type="text/javascript" src="{{asset('ckeditor4/ckeditor.js')}}"></script>

<script src="{{asset('sweetalert-master/dist/sweetalert.min.js')}}"></script>
<link rel="stylesheet" type="text/css" href="{{asset('sweetalert-master/dist/sweetalert.css')}}" />

<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js')}}"></script>
<?php /*?><script type="text/javascript" src="/js/custom/dashboard.js"></script><?php */?>
<script>
var $=jQuery.noConflict();
function enableItem(element, action, element_id){
	$.ajax({
		type: 'get',
		url: '', 
	    dataType: 'json',
		success: function(msg)
		{
			swal({
				  title: "",
				  text: '<span style="font-size:14px;">Test</span>',
				  html: true,
				  confirmButtonColor: "#fb9337",
				  cancelButtonText: "Ok",
				  closeOnConfirm: true
				});
		}
	});	
}

var last_id = '';
function showAction(id){
	$('.zoom-fab').addClass('scale-out');
	if(last_id == id)
	{
		$('.zoom-btn-sm'+id).addClass('scale-out');
		$('.zoom-menu-'+id).css('z-index','-1');
		
		last_id = '';
	}
	else
	{
		$('.zoom-btn-sm'+id).toggleClass('scale-out');
		$('.zoom-menu-'+id).css('z-index','100');
		last_id = id;
	}
}
</script>
<script type="">
	var ar_lang = ['fr','en','es'];
</script>
<script type="text/javascript">
	<?//=$this->render('utilities.js.php')?>
</script>
<script type="text/javascript" src="{{asset('js/custom/forms.js')}}"></script>

<!--[if lte IE 8]><script language="javascript" type="text/javascript" src="/js/plugins/excanvas.min.js"></script><![endif]-->
<!--[if IE 9]>
    <link rel="stylesheet" media="screen" href="/css/style.ie9.css"/>
<![endif]-->
<!--[if IE 8]>
    <link rel="stylesheet" media="screen" href="/css/style.ie8.css"/>
<![endif]-->
<!--[if lt IE 9]>
	<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
<![endif]-->
</head>
<body class="withvernav">
<div class="bodywrapper firstDiv">
    <div class="topheader">
        <div class="left">
            <img src="{{asset('images/icons/logo/logo.png')}}" alt="" /> <!--style="height:60px;" -->
        </div><!--left-->
        <div class="right">
        	<div style="height: 40px">
	            <div class="userinfo">
	            	<img src="{{asset('images/thumbs/avatar.png')}}" alt="" />
	                <span>USER</span>
	            </div><!--userinfo--> 
	            <div class="userinfodrop">
	                <div class="userdata">
	                	<h4>USER</h4>
	                    <!-- span class="email">youremail@yourdomain.com</span -->
	                    <ul>
	                    	<!-- li><a href="editprofile.html">Edit Profile</a></li-->
	                        <li><a href="">Mon Compte</a></li>
	                        <!-- li><a href="help.html">Help</a></li-->
	                        <li><a href="">Se Déconnecter</a></li>
	                    </ul>
	                </div><!--userdata-->
	            </div><!--userinfodrop-->
        	</div><!--right-->
        </div>
       
    </div><!--topheader-->
    
    
    <div class="header">
    	<ul class="headermenu">
            <li class="current"><a href=""><span class="icon icon-pub"></span><span class="span_hidden">Excursions</span></a></li>
        </ul>        
        
    </div><!--header-->
@yield('menuleft')
@yield('content')
</div><!--bodywrapper-->

  <!-- Modal -->
<div style="bottom: 0px;width: 100%;clear: both;margin-top: 20px;">
<footer style="width: 100%;">
        <div class="pageheader" style="height: 42px;border-top: 1px solid #ddd;padding-top: 20px;">
            <h5 style="float: left;margin-left: 10px;width: 40%"><?=date('Y')?> © Tous Droits Réservés</h5>
            <h5 style="float: right;margin-right: 10px;width: 40%;text-align: right;">By <a href="http://njt-group.com" target="_blank">NJT</a></h5>
        </div>
</footer>
</div>
<script type="text/javascript">
var clipboard = new Clipboard('.copy_btn');
clipboard.on('success', function(e) {
    $('.copy_btn').tooltip( "open" );
});

jQuery(function($){
   $(".tel").mask("99 99 99 99 99");
});

$(document).ready(function() {
	$('.firstDiv').css('min-height', $( window ).height()-60);
	$('.vernav2').css('min-height', $( window ).height()-250);
	<?php if (isset($_SESSION['collapse']) && $_SESSION['collapse']) {?>
		jQuery('.togglemenu').trigger('click');
	<?php }?>

	setTimeout(function(){
		checkWindowSize();
	}, 400);

	var wHeight = document.getElementById('contentwrapper').scrollHeight;
	setInterval(function(){
		if (wHeight != document.getElementById('contentwrapper').scrollHeight)
		{
			setTimeout(function(){
				wHeight = checkWindowSize();
			}, 100);
		}
	}, 400);
});
function checkWindowSize() {
	var vh = document.getElementById('contentwrapper').scrollHeight;

	if (vh < 580)
		var vh2 = 580;
	else  vh2 = vh;
	
	$('.vernav2').css('min-height', (vh2+60) + 'px');
	return vh;  
}

</script>
</body>
</html>