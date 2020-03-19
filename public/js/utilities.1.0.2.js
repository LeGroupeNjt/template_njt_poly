var $=jQuery.noConflict();

//function selectTemoigne(room_id)
//{
//	$('#roomId').val(room_id);
//	if($("#check"+room_id).attr('checked'))
//	{
//		if (confirm('Voulez-vous vraiment marquer cette chambre comme chambre témoin ?'))
//		{
//			$('#type').val("add");
//			$('#temoinForm').submit();
//		}
//		else
//			$("#check"+room_id).attr('checked', false);
//	}
//	else
//	{
//		if (confirm('Voulez-vous vraiment supprimer cette chambre des chambres témoin ?'))
//		{
//			$('#type').val("remove");
//			$('#temoinForm').submit();
//		}	
//		else
//			$("#check"+room_id).attr('checked', true);
//	}
//}

function selectTemoigne(room_id)
{
	$.ajax({
		type: 'GET',
		url: '/setup/liste-chambres/roomId/'+room_id,
		success: function(msg)
		{
			swal({
				  title: "",
				  text: '<span style="font-size:14px;">C\'est '+msg['type']+' avec succès !</span>',
				  html: true,
				  confirmButtonColor: "#fb9337",
				  cancelButtonText: 'Ok',
				  closeOnConfirm: true
				});
		}
	});
}


function get_rooms_by_type(type_id, customer_id)
{
	if($('#datepicker').val() != '' && $('#datepicker1').val() != ''){
		$.ajax({
			type: 'GET',
			url: '/client/get-rooms-by-type-1/type/' + type_id + '/date_arrivee/' + $('#datepicker').val() + '/date_depart/' + $('#datepicker1').val() + '/customer_id/' + customer_id,
			success: function(msg)
			{
				$('#room_id').html(msg);
			}
		});		
	}
	else{
		$('#room_type_id option[value=0]').attr('selected','selected');
		swal({
			  title: "",
			  text: '<span style="font-size:14px;">Veuillez choisir la date de check-in et Check-out !</span>',
			  html: true,
			  confirmButtonColor: "#fb9337",
			  cancelButtonText: 'Ok',
			  closeOnConfirm: true
		});
	}
}

function get_rooms_conjoint_by_type(type_id)
{
	$.ajax({
		type: 'GET',
		url: '/client/get-rooms-by-type/type/' + type_id,
		success: function(msg)
		{
			$('#conjoint_room').show();
			$('#conjoint_room').html(msg);
		}
	});	
}

function ajout_reponse(request_id){
	$.ajax({
		type: 'POST',
		data: 'message='+$("#message").val()+'&request_id='+request_id,
		url: '/demandes/ajout-reponse/',
		success: function(msg)
		{
			$('#ligne_id').show();
			$('#message').val('');
			$('#table_reponse').show();
			$('#table_reponse').html(msg);
		}
	});	
}

function update_status(request_id, element, n, backTo, element_id)
{
	$.ajax({
		type: 'get',
		data: 'status='+element.val()+'&request_id='+request_id+'&element_id='+element_id,
		url: '/demandes/index/',
		success: function(msg)
		{
			if(msg['status'] == 0)
				element.parent().parent().addClass("trBold");
			else
				element.parent().parent().removeClass("trBold");			
			
			swal({
				  title: "",
				  text: '<span style="font-size:14px;">Statut changé avec succès !</span>',
				  html: true,
				  confirmButtonColor: "#fb9337",
				  cancelButtonText: 'Ok',
				  closeOnConfirm: true
				});		
			element.attr('ancienvaleur', element.val());
			if ( n )
				getRequestHistory(request_id, element_id);
		}
	});		
	/*swal({
		  title: "",
		  text: '<span style="font-size:14px;">Voulez-vous vraiment changer le statut de cette requête ?</span>',
		  html: true,
		  showCancelButton: true,
		  confirmButtonColor: "#fb9337",
		  confirmButtonText: "Oui",
		  cancelButtonText: 'Non',
		  closeOnConfirm: true
		},
		function(isConfirm){
			if (isConfirm) {
			$.ajax({
				type: 'get',
				data: 'status='+element.val()+'&request_id='+request_id,
				url: '/demandes/index/',
				success: function(msg)
				{
					element.attr('ancienvaleur', element.val());
					if ( n )
						getRequestHistory(request_id);
				}
			});	
		}else element.val(element.attr('ancienvaleur'));
		});*/
}

function update_msg_status(id, element)
{
	$.ajax({
		type: 'get',
		data: 'msg_status='+element.val()+'&id='+id,
		url: '/messages/messages-recus/',
		success: function(msg)
		{
			if (msg['succes']){
				if(msg['status'] == 0){
					element.addClass("trBold");
					element.parent().parent().addClass("trBold");
				}
				else{
					element.removeClass("trBold");
					element.parent().parent().removeClass("trBold");				
				}
				element.attr('ancienvaleur', element.val());
			}else {
				element.val(element.attr('ancienvaleur'));
			}
		}
	});	
		
}

function showGraph()
{
	$('#list_id').hide();
	$('#graph_id').show();
	$('#graph_button').attr('disabled','disabled');
	$('#list_button').removeAttr('disabled');
	$('.firstDiv').css('min-height', $( window ).height()-60);
}

function showList()
{
	$('#list_id').show();
	$('#graph_id').hide();
	$('#list_button').attr('disabled','disabled');
	$('#graph_button').removeAttr('disabled');
	$('.firstDiv').css('min-height', $( window ).height()-60);
}

function deleteItem(id, elm)
{
	$('#removeId').val(id);
	
	swal({
		  title: "",
		  text: '<span style="font-size:14px;">Voulez-vous vraiment supprimer '+ elm +' ?</span>',
		  html: true,
//		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#fb9337",
		  confirmButtonText: "Oui",
		  cancelButtonText: 'Non',
		  closeOnConfirm: true
		},
		function(){
			$('#removeForm').submit();
		});
}

function annulerItem(id, elm)
{
	$('#removeId').val(id);
	
	swal({
		  title: "",
		  text: '<span style="font-size:14px;">Voulez-vous vraiment annuler '+ elm +' ?</span>',
		  html: true,
//		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#fb9337",
		  confirmButtonText: "Oui",
		  cancelButtonText: 'Non',
		  closeOnConfirm: true
		},
		function(){
			$('#removeForm').submit();
		});
}

function diffuser_notif(id){
	swal({
		  title: "",
		  text: '<span style="font-size:14px;">Voulez-vous vraiment diffuser cette annonce ?</span>',
		  html: true,
//		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#fb9337",
		  confirmButtonText: "Oui",
		  cancelButtonText: 'Non',
		  closeOnConfirm: true
		},
		function(){
			$('#DiffuserForm').submit();
		});
}
function enableItem(element, action, element_id){
	$.ajax({
		type: 'get',
		url: '/setup/enable-item/item/' + action + '/id/' + element_id, 
	    dataType: 'json',
		success: function(msg)
		{
			swal({
				  title: "",
				  text: '<span style="font-size:14px;">C\'est '+msg['type']+' avec succès !</span>',
				  html: true,
				  confirmButtonColor: "#fb9337",
				  cancelButtonText: 'Ok',
				  closeOnConfirm: true
				});
		}
	});	
}

function submitOption(element){
	for ( instance in CKEDITOR.instances )
	    CKEDITOR.instances[instance].updateElement();
	var option = element;
	var data = '';
	$('#'+element+'_button').hide();
	$('#'+element+'_loading').show();
	switch(option){
		case 'welcome_message':
            var i;
            var dataDescription = {};
            for (i = 0; i < ar_lang.length; ++i) {
                dataDescription[ar_lang[i]] = $("#msg"+ar_lang[i]).val();
            }
            data = {msg: dataDescription, option: element};
            break;
		case 'sms_message':
            var i;
            var dataDescription = {};
            for (i = 0; i < ar_lang.length; ++i) {
                dataDescription[ar_lang[i]] = $("#sms_"+ar_lang[i]).val();
            }
            data = {msg: dataDescription, option: element};
            break;
		case 'email_message':
            var i;
            var dataDescription = {};
            for (i = 0; i < ar_lang.length; ++i) {
                dataDescription[ar_lang[i]] = $("#email_"+ar_lang[i]).val();
            }
            data = {msg: dataDescription, option: element};
            break;
		case 'evaluation_arrivee':
            var i;
            var dataDescription = {};
            var dataTitle = {};
            var AllData = {};
            for (i = 0; i < ar_lang.length; ++i) {
                dataDescription[ar_lang[i]] = $("#description"+ar_lang[i]).val();
                dataTitle[ar_lang[i]] = $("#title"+ar_lang[i]).val();
            }
            AllData['title'] = dataTitle;
            AllData['description'] = dataDescription;
            data = {data:AllData, title: dataTitle,option: element};
            break;
		case 'evaluation_depart':
            var i;
            var dataDescription = {};
            var dataTitle = {};
            var AllData = {};
            for (i = 0; i < ar_lang.length; ++i) {
                dataDescription[ar_lang[i]] = $("#description"+ar_lang[i]+"Depart").val();
                dataTitle[ar_lang[i]] = $("#evaluation_depart #title"+ar_lang[i]).val();
            }
            AllData['title'] = dataTitle;
            AllData['description'] = dataDescription;
            data = {data:AllData, title: dataTitle,option: element};
 			break;
		case 'location_text':
            var i;
            var dataDescription = {};
            for (i = 0; i < ar_lang.length; ++i) {
                dataDescription[ar_lang[i]] = $("#location"+ar_lang[i]).val();
            }
            data = {msg: dataDescription, option: element};
            break;	
		case 'taxi_text':
            var i;
            var dataDescription = {};
            for (i = 0; i < ar_lang.length; ++i) {
                dataDescription[ar_lang[i]] = $("#taxi"+ar_lang[i]).val();
            }
            data = {msg: dataDescription, option: element};
            break;            
		case 'massage_text':
            var i;
            var dataDescription = {};
            for (i = 0; i < ar_lang.length; ++i) {
                dataDescription[ar_lang[i]] = $("#massage"+ar_lang[i]).val();
            }
            data = {msg: dataDescription, option: element};
            break;			
		case 'spa_text':
            var i;
            var dataDescription = {};
            for (i = 0; i < ar_lang.length; ++i) {
                dataDescription[ar_lang[i]] = $("#spa"+ar_lang[i]).val();
            }
            data = {msg: dataDescription, option: element};
            break;
		case 'coiffure_text':
            var i;
            var dataDescription = {};
            for (i = 0; i < ar_lang.length; ++i) {
                dataDescription[ar_lang[i]] = $("#coiffure"+ar_lang[i]).val();
            }
            data = {msg: dataDescription, option: element};
            break;			
		case 'excursion_text':
            var i;
            var dataDescription = {};
            for (i = 0; i < ar_lang.length; ++i) {
                dataDescription[ar_lang[i]] = $("#excursion"+ar_lang[i]).val();
            }
            data = {msg: dataDescription, option: element};
            break;			
		case 'resto_interne_text':
            var i;
            var dataDescription = {};
            for (i = 0; i < ar_lang.length; ++i) {
                dataDescription[ar_lang[i]] = $("#resto"+ar_lang[i]).val();
            }
            data = {msg: dataDescription, option: element};
            break;			
		case 'visite_guidee_text':
            var i;
            var dataDescription = {};
            for (i = 0; i < ar_lang.length; ++i) {
                dataDescription[ar_lang[i]] = $("#visite"+ar_lang[i]).val();
            }
            data = {msg: dataDescription, option: element};
            break;				
		case 'reclamation_text':
            var i;
            var dataDescription = {};
            for (i = 0; i < ar_lang.length; ++i) {
                dataDescription[ar_lang[i]] = $("#reclamation"+ar_lang[i]).val();
            }
            data = {msg: dataDescription, option: element};
            break;			
		default:
			break;
	}
	$.ajax({
		type: 'POST',
		dataType: 'json',
		data: data,
		url: '/setup/textes/',
		success: function(msg)
		{
			setTimeout(function(){ $('#'+element+'_button').show();$('#'+element+'_loading').hide(); }, 700);
		}
	});	
}

function close_request(element, txt, request_id, element_id)
{	
	swal({
		  title: "",
		  text: '<span style="font-size:14px;">Voulez-vous vraiment '+txt+' cette requête?</span>',
		  html: true,
//		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#fb9337",
		  confirmButtonText: "Oui",
		  cancelButtonText: 'Non',
		  closeOnConfirm: true
		},
		function(){
			$.ajax({
				type: 'GET',
				data: 'request_id='+request_id+'&cloturer=1&element_id='+element_id,
				url: '/demandes/index/',
				dataType: 'json',
				success: function(msg)
				{
					if (msg['succes']){
						//element.parent().parent().parent().css("background","#fb9337");
						if(msg['type_cloture'] == 0)
							element.parent().parent().parent().addClass("trColor");
						else
							element.parent().parent().parent().removeClass("trColor");
						element.parent().html(msg['html']);
						getRequestHistory(request_id, element_id);
					}
				}
			});
		});
}

function getRequestHistory(request_id, element_id){
	$.ajax({
		type: 'GET',
		url: '/demandes/get-request-history/request_id/'+request_id+'/element_id/'+element_id,
		success: function(msg)
		{
			$('#history').html(msg);
		}
	});
}

function getMessageHistory(request_id, customer_id, message_id, element_id){
	$.ajax({
		type: 'GET',
		url: '/messages/get-message-history/customer_id/'+customer_id+'/request_id/'+request_id+'/message_id/'+message_id+'/element_id/'+element_id,
		success: function(msg)
		{
			$('#history_message').html(msg);
		}
	});
}

function envoyer_message(request_id, customer_id, message_id, element_id){
	
	for ( instance in CKEDITOR.instances )
	    CKEDITOR.instances[instance].updateElement();
	
	$('#envoyerbttn').hide();
	$('#loadingbttn').show();
	
	if($('#msgtype').val() == 0)
		var data = {request_id: request_id ,client_msg: $("#msg").val(), customer_id : customer_id, msgtype : 0, element_id : element_id};
	else
		var data = {request_id: request_id ,client_msg: $("input[name='msg_id']:checked").val(), customer_id : customer_id, msgtype : 1, msg_id : $("input[name='msg_id']:checked").val(), element_id : element_id};
	
	//alert($("#msg").val().replace(/(<([^>]+)>)/ig,""));
	msgCkeditor = $("#msg").val().replace(/(<([^>]+)>)/ig,"");
	msgCkeditor = msgCkeditor.replace(/&nbsp;/g,"");
	
	if($('#msgtype').val() == 1 && $("input[name='msg_id']:checked").val() == undefined){
		swal({
			  title: "",
			  text: '<span style="font-size:14px;">Veuillez choisir un message !</span>',
			  html: true,
			  confirmButtonColor: "#fb9337",
			  cancelButtonText: 'Ok',
			  closeOnConfirm: true
			});			
		$('#envoyerbttn').show();
		$('#loadingbttn').hide();		
	}
	else if($('#msgtype').val() == 0 && $.trim(msgCkeditor) == ''){
		swal({
			  title: "",
			  text: '<span style="font-size:14px;">Veuillez écrire un message !</span>',
			  html: true,
			  confirmButtonColor: "#fb9337",
			  cancelButtonText: 'Ok',
			  closeOnConfirm: true
			});			
		$('#envoyerbttn').show();
		$('#loadingbttn').hide();		
	}
	else{	
		$.ajax({
			type: 'POST',
			data: data,
			url: '/demandes/envoyer-message/',
			dataType: 'json',
			success: function(msg)
			{
				$('#envoyerbttn').show();
				$('#loadingbttn').hide();
				$('.distroy').click();
				if(message_id != 0){
					getMessageHistory(request_id,customer_id,message_id, element_id);
				}
				else
					getRequestHistory(request_id, element_id);
			}
		});
	}
}

function close_alert(element, txt, alert_id)
{	
	swal({
		  title: "",
		  text: '<span style="font-size:14px;">Voulez-vous vraiment '+txt+' cette alerte?</span>',
		  html: true,
//		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#fb9337",
		  confirmButtonText: "Oui",
		  cancelButtonText: 'Non',
		  closeOnConfirm: true
		},
		function(){
			$.ajax({
				type: 'GET',
				data: 'alert_id='+alert_id,
				url: '/alerts/index/',
				dataType: 'json',
				success: function(msg)
				{
					if (msg['succes']){
						if(msg['type_cloture'] == 0)
							element.parent().parent().parent().addClass("trColor");
						else
							element.parent().parent().parent().removeClass("trColor");						
						element.parent().html(msg['html']);
					}
				}
			});
		});
}

function show_messages_predefinis(){
	$('#msg_simple').hide();
	$('#msg_predefinis').show();
	$('#buttonMsgPre').hide();
	$('#buttonMsgSimple').show();
	$('#buttonTranslate').hide();
	$('#msgtype').val(1);
}

function show_messages_simple(){
	$('#msg_simple').show();
	$('#msg_predefinis').hide();
	$('#buttonMsgPre').show();
	$('#buttonMsgSimple').hide();
	$('#buttonTranslate').show();
	$('#msgtype').val(0);
}

function show_bloc_text(element_id){
	$('.blocHideShow').hide();
	//$('#'+element_id).show();
	if($('#'+element_id).hasClass('blocHideShow')){
		$('#'+element_id).removeClass('blocHideShow');
		$('#'+element_id).addClass('opened');
		$('.opened').show();
	}else{
		$('#'+element_id).removeClass('opened');
		$('#'+element_id).addClass('blocHideShow');		
	}
}

function valider_checkout()
{
	var atLeastOneIsChecked = $('input[name=customer_check[]]:checked').length > 0;
	if(atLeastOneIsChecked){
		swal({
			  title: "",
			  text: '<span style="font-size:14px;">Voulez-vous vraiment valider le Check-Out ?</span>',
			  html: true,
	//		  type: "warning",
			  showCancelButton: true,
			  confirmButtonColor: "#fb9337",
			  confirmButtonText: "Oui",
			  cancelButtonText: 'Non',
			  closeOnConfirm: true
			},
			function(){
				$('#custmerForm').submit();
			});	
	}
	else{
		swal({
			  title: "",
			  text: '<span style="font-size:14px;">Veuillez sélectionner un Check-out !</span>',
			  html: true,
			  confirmButtonColor: "#fb9337",
			  cancelButtonText: 'Ok',
			  closeOnConfirm: true
			});
	}
}

function valider_checkin()
{
	var atLeastOneIsChecked = $('input[name=customer_check[]]:checked').length > 0;
	if(atLeastOneIsChecked){	
		swal({
			  title: "",
			  text: '<span style="font-size:14px;">Voulez-vous vraiment valider le Check-In ?</span>',
			  html: true,
		//		  type: "warning",
			  showCancelButton: true,
			  confirmButtonColor: "#fb9337",
			  confirmButtonText: "Oui",
			  cancelButtonText: 'Non',
			  closeOnConfirm: true
			},
			function(){
				$('#custmerForm').submit();
			});	
	}
	else{
		swal({
			  title: "",
			  text: '<span style="font-size:14px;">Veuillez sélectionner un Check-in !</span>',
			  html: true,
			  confirmButtonColor: "#fb9337",
			  cancelButtonText: 'Ok',
			  closeOnConfirm: true
			});
	}		
}

function affecter_num()
{
	
	$('#phoneForm').submit();
}

function phone_number_format_js(phone){
	var phone_format = '';
    for (i = 0; i < phone.length; ++i) {
    	if(i % 2 == 0) phone_format = phone_format+' ';
    	phone_format = phone_format + phone[i];
    }	
	return phone_format;    
}


function activeUser(user_id)
{
	$.ajax({
		type: 'GET',
		url: '/setup/index/user_id/'+user_id,
		success: function(msg)
		{
			swal({
				  title: "",
				  text: '<span style="font-size:14px;">Statut changé avec succès !</span>',
				  html: true,
				  confirmButtonColor: "#fb9337",
				  cancelButtonText: 'Ok',
				  closeOnConfirm: true
				});				
		}
	});
}

function show_accueil(val)
{
	$('#accueil_page').hide();
	if(val == 3){
		$('#accueil_page').show();
	}
}

function show_setup_section(val){
	$('#setup_section').hide();
	if(val == 1 || val == 2){
		$('#setup_section').show();
	}	
}

function get_total_requests(){
	$.ajax({
		type: 'GET',
		url: '/demandes/get-total-request',
		success: function(data)
		{
			$('#blocNotif').html(data);
		}
	});	
}

function add_same_email()
{
	$('.email_service').val($('#firstService').val());
}
/***********************/
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

function show_notification()
{
	var t = jQuery(this);
	var url = t.attr('href');
	if(!jQuery('.noticontent').is(':visible')) {
		jQuery.post(url,function(data){
			t.parent().append('<div class="noticontent">'+data+'</div>');
		});
		//this will hide user info drop down when visible
		jQuery('.userinfo').removeClass('active');
		jQuery('.userinfodrop').hide();
	} else {
		t.parent().removeClass('active');
		jQuery('.noticontent').hide();
	}
	return false;		
}

function selectCircuit(circuit_id)
{
	$.ajax({
		type: 'GET',
		url: '/setup/liste-circuits/circuit_id/'+circuit_id,
		success: function(msg)
		{
			swal({
				  title: "",
				  text: '<span style="font-size:14px;">Circuit '+msg['type']+' avec succès !</span>',
				  html: true,
				  confirmButtonColor: "#fb9337",
				  cancelButtonText: 'Ok',
				  closeOnConfirm: true
				});				
		}
	});
}

function selectRestaurantExterne(restaurant_id)
{
	$.ajax({
		type: 'GET',
		url: '/setup/liste-resto-externe/restaurant_id/'+restaurant_id,
		success: function(msg)
		{
			swal({
				  title: "",
				  text: '<span style="font-size:14px;">C\'est '+msg['type']+' avec succès !</span>',
				  html: true,
				  confirmButtonColor: "#fb9337",
				  cancelButtonText: 'Ok',
				  closeOnConfirm: true
				});				
		}
	});
}

function translateMessages(lang, bloc_id){
	$.ajax({
		type: 'POST',
		data: {source:'', target:lang, q:$('#'+bloc_id).html()},
		url: '/utilities/translate/',
		dataType:'json',
		success: function(msg)
		{
			if (msg['succes'])
			{
				$('#'+bloc_id).show()
				$('#'+bloc_id).html(msg['data']);
			}
			else 
			{
				swal({
					  title: "",
					  text: '<span style="font-size:14px;">Erreur de traduction !</span>',
					  html: true,
					  confirmButtonColor: "#fb9337",
					  cancelButtonText: 'Ok',
					  closeOnConfirm: true
					});	
			}			
		}
	});	
}