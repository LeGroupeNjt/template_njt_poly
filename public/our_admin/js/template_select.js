
if(typeof($) == 'undefined'){
var $ = function() {
	if (arguments.length == 1) return get$(arguments[0]);
	var elements = [];
	$c(arguments).each(function(el){
		elements.push(get$(el));
	});
	return elements;

	function get$(el){
		if (typeof el == 'string') el = document.getElementById(el);
		return el;
	}
}
}

function getElementsByClassName(className) {
   var testClass = new RegExp("(^|\\\\s)" + className + "(\\\\s|$)");
   var tag = "*";
   var elements = (document.all)? document.all : document.getElementsByTagName(tag);
   var returnElements = [];
   var current;
   for(var i=0; i < elements.length; i++){
      current = elements[i];
      if(testClass.test(current.className)){
         returnElements.push(current);
      }
   }
   return returnElements;
}

var currentID = -1;

function chooseSeveralElements(tab_id) // fonction commune
{
   //if (id === '') return;
   if (tab_id === '') return;
   
   tab_id = tab_id.split('|');
   
   for(var i=0; i<tab_id.length; i++)
   {
	   id = tab_id[i];
	   
	   currentID = id;
	   
	   var el = $('element_' + id);
	   var currentEl = $('element_' + currentID);
	
	   /*if(currentEl.className == "tmpl_on") {
		  currentEl.className = "blank";
		  //parent.setStyleID('blank');
		  document.getElementById('template').value = '';
		  return false;
	  }
	  else document.getElementById('element').value = id;*/
	  
	   /*returnOn = getElementsByClassName('element_on');
	
	   for(i = 0; i < returnOn.length; i++) {
		  returnOn[i].className = "element_blank";
	   }*/
	
	   if (el.className == "element_on") el.className = "element_blank";
	   else
	   {	el.className = "element_on";
			el.elementID = id;
	   }
	   //parent.setStyleID(id);
   }
   
   str = '';
   
   returnOn = getElementsByClassName('element_on');
   for(i = 0; i < returnOn.length; i++) {
      str += returnOn[i].elementID + "|";
   }
   
   document.getElementById('element').value = str.substring(0, str.length-1);
   
   //alert(document.getElementById('element').value);
}

function chooseTemplate(id)
{
   if (id == '') return;
   
   currentID = id;
   
   var el = $('tmpl_' + id);
   var currentEl = $('tmpl_' + currentID);

   /*if(currentEl.className == "tmpl_on") {
	  currentEl.className = "blank";
      //parent.setStyleID('blank');
	  document.getElementById('template').value = '';
      return false;
  }
  else*/ document.getElementById('template').value = id;
  
   returnOn = getElementsByClassName('tmpl_on');

   for(i = 0; i < returnOn.length; i++) {
      returnOn[i].className = "blank";
   }

   el.className = "tmpl_on";
   //parent.setStyleID(id);
}

function chooseHeader(id)
{
   if (id == '') return;
   
   currentID = id;
   
   var el = $('header_' + id);
   var currentEl = $('header_' + currentID);

   /*if(currentEl.className == "head_on") {
	  currentEl.className = "blank";
      //parent.setStyleID('blank');
	  document.getElementById('template').value = '';
      return false;
  }
  else*/ document.getElementById('header_id').value = id;
  
   returnOn = getElementsByClassName('header_on');

   for(i = 0; i < returnOn.length; i++) {
      returnOn[i].className = "header_blank";
   }

   el.className = "header_on";
   //parent.setStyleID(id);
}

function chooseInventoryDisplay(id)
{
   if (id == '') return;
   
   currentID = id;
   
   var el = $('inventoryDisplay_' + id);
   var currentEl = $('inventoryDisplay_' + currentID);

   /*if(currentEl.className == "head_on") {
	  currentEl.className = "blank";
      //parent.setStyleID('blank');
	  document.getElementById('template').value = '';
      return false;
  }
  else*/ document.getElementById('inventoryDisplay_id').value = id;
  
   returnOn = getElementsByClassName('inventoryDisplay_on');

   for(i = 0; i < returnOn.length; i++) {
      returnOn[i].className = "inventoryDisplay_blank";
   }

   el.className = "inventoryDisplay_on";
   //parent.setStyleID(id);
}

function chooseAboutPic(id)
{
   if (id == '') return;
   
   currentID = id;
   
   var el = $('aboutpic_' + id);
   var currentEl = $('aboutpic_' + currentID);

   /*if(currentEl.className == "head_on") {
	  currentEl.className = "blank";
      //parent.setStyleID('blank');
	  document.getElementById('template').value = '';
      return false;
  }
  else*/ document.getElementById('aboutpic_id').value = id;
  
   returnOn = getElementsByClassName('aboutpic_on');

   for(i = 0; i < returnOn.length; i++) {
      returnOn[i].className = "aboutpic_blank";
   }

   el.className = "aboutpic_on";
   //parent.setStyleID(id);
}

function chooseEbayTemplate(id)
{
   if (id == '' || id == 0) return;
   
   currentID = id;
   
   var el = $('ebay_tmpl_' + id);
   var currentEl = $('ebay_tmpl_' + currentID);

   /*if(currentEl.className == "tmpl_on") {
	  currentEl.className = "blank";
      //parent.setStyleID('blank');
	  document.getElementById('template').value = '';
      return false;
  }
  else*/ document.getElementById('template').value = id;
  
   returnOn = getElementsByClassName('ebay_tmpl_on');

   for(i = 0; i < returnOn.length; i++) {
      returnOn[i].className = "ebay_blank";
   }

   el.className = "ebay_tmpl_on";
   //parent.setStyleID(id);
}

/*function chooseCraigslistTemplate(id)
{
   if (id == '' || id == 0) return;
   
   currentID = id;
   
   var el = $('craigslist_tmpl_' + id);
   var currentEl = $('craigslist_tmpl_' + currentID);

   document.getElementById('template').value = id;
  
   returnOn = getElementsByClassName('craigslist_tmpl_on');

   for(i = 0; i < returnOn.length; i++) {
      returnOn[i].className = "craigslist_blank";
   }

   el.className = "craigslist_tmpl_on";
}*/

function choose_WS_Template(id)
{ 
	if (id == '') return;
	//document.getElementById('layout').value='layout'+id; 
	document.getElementById('layout').value = id; 
	currentID = id;
	
	var el = $('WS_tmpl_' + id);
	var currentEl = $('WS_tmpl_' + currentID);
	
	returnOn = getElementsByClassName('WS_tmpl_on');
	
	for(i = 0; i < returnOn.length; i++) {
	  returnOn[i].className = "WS_blank";
	}
	
	el.className = "WS_tmpl_on";
}