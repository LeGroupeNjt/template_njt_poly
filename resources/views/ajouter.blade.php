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
<style>  
input.pickerDate{
	background-image: url("/../images/icons/calendar.png") !important;
    background-position: 5px 7px !important;
    background-repeat: no-repeat !important;
    padding-left: 27px !important;
    width: 100px !important;
}
.select7 {
    height: 31px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 12px;
    margin: 0;
    background: #fcfcfc none repeat scroll 0 0;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-shadow: 1px 1px 2px #ddd inset;
    color: #666;
    min-width: 10%;
    padding: 5px 2px;
}
.width100, form input.width100 {
    width: 100px !important;
    height: 18px;
}
</style>
  	<script type="text/javascript" src="{{ asset('ckeditor4/ckeditor.js')}}"></script>
<link rel="stylesheet" href="{{ asset('css/jquery.datetimepicker.css')}}" type="text/css" />
  <div class="centercontent tables">
    
        <div class="pageheader notab">
            <h1 class="pagetitle">Ajouter Excursions</h1>
            
        </div><!--pageheader-->
        
        <div id="contentwrapper" class="contentwrapper">
                
               <form class="stdform" action="" method="post">
                        <p>
                        	<label>Type</label>
							<select name="excursion_type" id="excursion_type" class="select7">
								<option value="">--Choisir--</option>
								<option value="4">Excursions</option>
								<option value="29">Combiné</option>
								<option value="28">Circuits</option>
								<option value="30">Visites Guidées</option>
							</select>
                        </p>               
                        <p>
                        	<label>Nombre de Jours*</label>
                            <input type="text" name="nbrjours" id="nbrjours" value="" class="smallinput" style="width:50px;" autocomplete="off">
                        </p>
                        <p>
                        	<label>Prix</label>
                            <input type="text" name="prix" id="prix" value="" class="smallinput" style="width:50px;" placeholder="" autocomplete="off">
                        </p>               
                        <p>
                        	<label>Titre (fr) : *</label>
                            <span class="field">
								<input type="text" name="fr[title]" id="fr-title" value="" class="smallinput" autocomplete="off">
                            </span>
                        </p>
                        <p>
                        	<label>Description (fr) :</label>
                            <span class="field">
								<textarea id="descriptionfr"></textarea>
                            <script>
								CKEDITOR.replace( 'descriptionfr' );
                             </script>
                            </span>
                        </p>                    
                        <p>
                        	<label>Position</label>
							<input type="text" name="position" id="position" value="" class="smallinput" style="width:50px;" autocomplete="off">
                        </p>

                        <p class="stdformbutton">
                        	<input type="submit" name="Enregistrer" id="greenbtn" value="Enregistrer" class="ui-button ui-widget ui-state-default ui-corner-all" style="height: 30px; width:100px;">
                        </p>
                    </form>
		</div>
	</div>
@endsection