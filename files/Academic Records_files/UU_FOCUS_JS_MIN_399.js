
$(document).ready(function(){
 $(window).bind("load", function(){
 if ($('#PT_HOME').length > 0) { $("#PT_HOME").focus(); }


 var url = window.location.href; if (!url.includes("PTNUI_NAVBAR.GBL")){ 
 var formName = document.forms[0].getAttribute('name');  var headerText = "Campus Solutions"; if(url.indexOf('/hesand') > -1){ headerText = 'HESAND (Campus Solutions)'; }
 if(url.indexOf('/hedev') > -1){ headerText = 'HEDEV (Campus Solutions)'; }
 if(url.indexOf('/hetest') > -1){ headerText = 'HETEST (Campus Solutions)'; }
 if(url.indexOf('/heqa') > -1){ headerText = 'HEQA (Campus Solutions)'; }
 if(url.indexOf('/hewild') > -1){ headerText = 'HEWILD (Campus Solutions)'; }

 var base = "<div id=\"UU_HEADER_TITLE\" class=\"secondary-header\"><span id=\"UU_PROVIDER_TITLE\" class=\"secondary-header\">" + headerText + "</span></div>"; var theID = "" + formName + "hdrdivPTLAYOUT_HEADER_GROUPBOX1"; var el = document.getElementById(theID); if(el){ el.insertAdjacentHTML("beforeend", base); }
 }

 
 

 function clickNavigator() {
 if (document.getElementById("PTNB$PTNUI_NB_MENU")) {
 document.getElementById("PTNB$PTNUI_NB_MENU").click(); } else {
 setTimeout(clickNavigator, 10); }
 }

 clickNavigator(); });});