@extends('layouts.admin')

@section('menuleft')
	<style>
		form select{min-width: initial;}
		form input[type=text]{width: initial;}
	</style>
	<div class="vernav2 iconmenu">
	<ul>
	  <li class=""><a href="#formsub7" class="pub">Promo-Pub</a> <span class="arrow"></span>
		<ul id="formsub7">
		  <li class=""><a href="/liste">Liste Excursions</a></li>
		  <li class=""><a href="/ajouter">Ajouter Excursion</a></li>
		</ul>
	  </li>
	 </ul>
	<a class="togglemenu"></a> <br />
	<br />
	</div>
@endsection

@section('content')
  <!--leftmenu-->
    <link type="text/css" media="screen" rel="stylesheet" href="{{ asset('css/colorbox.css')}}" />
	<script type="text/javascript" src="{{ asset('js/jquery.tooltips.js')}}"></script>
	<script type="text/javascript" src="{{ asset('js/jquery.colorbox.js')}}"></script>
	<script type="text/javascript"> 
		$(document).ready(function(){
			$(".dialog_box3").colorbox({
				onClosed:function()
				{ 
				}

			});
			$(".dialog_box3").colorbox({ width:700, height:450, iframe:true, overlayClose:true, initialWidth:225, initialHeight:100, opacity:0.3}) ;
		});
		$(document).ready(function(){
			$(".dialog_box2").colorbox({ width:640, height:400, iframe:true, overlayClose:true, initialWidth:225, initialHeight:100, opacity:0.3}) ;
			});
	</script>	
  <div class="centercontent tables">
    
        <div class="pageheader notab">
            <h1 class="pagetitle">Liste Excursions</h1>
            
        </div><!--pageheader-->
        <form method="POST" id="notifForm23">
        <div id="contentwrapper" class="contentwrapper">
                
                <div class="">
<!--                 	<h3>Demandes : Toutes</h3> -->
                </div><!--contenttitle-->
                <table cellpadding="0" cellspacing="0" border="0" class="stdtable" id="dyntable3">
                    <colgroup>
                    	<col class="con1" width="8%" />
                        <col class="con0" width="52%"/>
                        <col class="con1" width="9%"/>
                        <col class="con0" width="13%"/>
                        <col class="con1" width="7%"/>
						<col class="con1" width="7%"/>
                    </colgroup>
                    <thead>
                        <tr>
                        	<th class="head1">Photo</th>
                            <th class="head0">Titre</th>
                            <th class="head1"  style="text-align: right;background-position: left center;">Prix</th>
                            <th class="head0"><center>Nombre de Jours</center></th>
                            <th class="head1"><center>Activer</center></th>
                            <th class="head0"><center>Action</center></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="gradeA">
							<td><img style="width: 50px; height: 50px;" src="" alt="photo" /></td>
							<td>120</td>
							<td>Prix</td>
							<td align="right">2</td>
							<td align="center">
								<div class="checker" id="uniform-undefined">
									<span class="">
										<div class="checker" id="uniform-undefined">
											<span class="">
												<input id="check" style="opacity: 0;" type="checkbox">
											</span>
										</div>
									</span>
								</div>
							</td>
							<td align="center" style="position: relative;">
								<a class="zoom-fab zoom-btn-large" onclick="showAction(1)"><img src="/images/icons/icons8-Menu-48.png" ></a>
								<ul class="zoom-menu zoom-menu-1">
									<li><a class="zoom-fab zoom-btn-sm1 scale-transition scale-out" href=""><img src="/images/icons/consulter.png" alt="Consulter" title="Consulter Excursion" /></a></li>
									<li><a class="zoom-fab zoom-btn-sm1 scale-transition scale-out" href="/modifier"><img src="/images/icons/modifier.png" alt="Modifier" title="Modifier Excursion" /></a></li> 
									<li><a class="zoom-fab zoom-btn-sm1 scale-transition scale-out" href="javascript:void(0)" onclick="showAction(1);deleteItem('1','cette excursion')"><img src="/images/icons/supprimer.png" alt="Supprimer" title="Supprimer Excursion" /> </a></li>  
								</ul>   
							</td>
                        </tr>
                    </tbody>
                </table>
                <br>
                <input type="submit" name="Enregistrer" id="greenbtn" value="Enregistrer" class="ui-button ui-widget ui-state-default ui-corner-all" style="height: 30px; width:100px; float:left;">
                <br><br><br>
                
        </div><!--contentwrapper-->
        </form>
	</div>
  <!-- centercontent --> 
  </div>
<form action="#" method="post" id="removeForm">
	<input type="hidden" name="removeId" id="removeId">
</form>

<form action="#" method="post" id="enableForm">
	<input type="hidden" name="itemId" id="itemId">
</form>
@endsection