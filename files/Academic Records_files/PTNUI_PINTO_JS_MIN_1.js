var PT_ToastMsg = function(msg, evt) {
 var pinEvt = (evt != "undefined") ? evt : ""; if (typeof(bFMode) != "undefined" && bFMode) {
 psConfirmFluid("Message", "", "OKANDEVT", pinEvt, "", msg);  } else {
 try {
 var objFrame = top.frames['TargetContent']; if (objFrame && (typeof objFrame.psConfirm2 == "function")) {
 objFrame.psConfirm2("Message", msg, "OKANDEVT", pinEvt); } else {
 window.psConfirmClassic("Add To", msg, "OK"); }
 } catch(e) {
 
 if (/&/g.test(msg)) {
 
 var txtNode = document.createElement('textarea'); txtNode.innerHTML = msg; msg = txtNode.textContent; }
 alert(msg);  } 
 }
}

var PT_Toast = {
 ToastId: 0,
 Fluid: false,
 GetToastContainer: function() {
 var el = document.querySelector('.ps_header_confirmation .psc_confirmation-animate'); if (el) {
 t_el = el; PT_Toast.Fluid = true; } else {
 el = document.querySelector('#PT_CONTENT'); if (el == null)
 el = document.querySelector('#ptifrmcontent'); if (el == null)
 el = document.querySelector('#pthdr2container'); t_el = el.querySelector('#PT_TOAST'); PT_Toast.Fluid = false; }
 return t_el; },

 ShowMessage: function(msg, evt) {
 var toast = new PT_ToastMsg(msg, evt); }
}

var PTPinTo = {
 sAddTxt : "Add",
 sCloseTxt : "Close",
 favTitle : "Add To Favorites", 
 nbTitle : "Add To NavBar",
 hpTitle: "Add To Homepage",
 favLabelDesc : "Favorite Label",
 tileLabelDesc : "Tile Label", 
 sNewLPDesc: "Enter new homepage name to create",
 sAddToNewHP: "Add to new Homepage",
 dashbrdTitle : "Add To Dashboard",
 serrNoLabel: "Please enter a valid label.",
 sLPHPDesc : "Choose from available homepages",
 sLPDBRDDesc: "Choose from available dashboards",
 sLabelHeader: "Enter Label for Tile", 

 pinBaseURL : "s/WEBLIB_PTNUI.PT_BUTTON_PIN.FieldFormula.IScript_SavePin",

 GetBaseURI : function() {
 var baseURI; var portalCntx = "";  if (typeof(portalContextNodeURI) != 'undefined')
 portalCntx = portalContextNodeURI; else if (typeof(top.portalContextNodeURI) != 'undefined')
 portalCntx = top.portalContextNodeURI; if (portalCntx == "")
 baseURI = getptBaseURI(); else
 baseURI = portalCntx + "/"; return baseURI; },

 AddPinToMask : function() {
 return "<div id='PT_PINTO_MASK' onclick='PTPinTo.CloseLPWin(event)' onkeyup='PTPinTo.KbHandler(event)'>"; },

 EscapeToHTML: function (txt){
 if (txt == "") return "";  var escapeTXT = document.createElement('textarea'); escapeTXT.textContent = txt;  return escapeTXT.innerHTML;  },

 getCloseURL : function(){
 return (typeof(NUImodalCloseUrl) != "undefined" && NUImodalCloseUrl) ? NUImodalCloseUrl : ((typeof(modalCloseUrl) != "undefined" && modalCloseUrl) ? modalCloseUrl : ""); },

 ToggleMainContent : function(bShow) {
 
 if (document.querySelector(":root.psc_mode-access")){
 var piaMode = document.getElementById("pt_pageinfo"); if (piaMode && (piaMode.getAttribute("mode") == "FLUID")) {
 var objMain = document.getElementById("PT_WRAPPER"); if (objMain) {
 if (!bShow)
 ptUtil.addClass(objMain,"psc_hidden"); else
 ptUtil.removeClass(objMain,"psc_hidden"); }
 }
 }
 },

 processing: function(opt,waittime) { 
 var sScript = "processing_empty"; if (eval ("typeof " + sScript + " !== 'function'")) {
 if (document.forms.length > 0)
 sScript = "processing_" + document.forms[0].name; var tcFrame = "window.frames['TargetContent']"; try { 
 if (window.frames['TargetContent']) {
 if (window.frames['TargetContent'].document.forms.length > 0)
 sScript = tcFrame + ".processing_" + eval(tcFrame + ".document.forms[0].name");  } 
 } catch(e){} 
 }
 if (eval ("typeof " + sScript + " === 'function'")) 
 eval(sScript + "(" + opt + "," + waittime + ");"); },

 AddToLPModal : function(ajaxURL, lpHtml, sTitle, ulDesc, ulStyle, footerStyle){
 var pinLabel = ajaxURL.match('&crefLabel=([^&]*)'); pinLabel = (pinLabel && (pinLabel.length > 1)) ? PTPinTo.EscapeToHTML(decodeURIComponent(pinLabel[1])) : ""; var tileLabelDesc = PTPinTo.tileLabelDesc; if (!document.querySelector(":root.psc_mode-access"))
 tileLabelDesc = "*" + tileLabelDesc; var pinCloseURL = PTPinTo.getCloseURL(); var pinCloseAlt = PTPinTo.sCloseTxt; var lpPinClose = "<div class='ps_box-button psc_modal-close ps_pinto_close'><span class='ps-button-wrapper' title='" + pinCloseAlt + "'><a class='ps-button' id='ptpintoclose' tabindex='0' role='button' title='" + pinCloseAlt + "' ><img src='" + pinCloseURL + "'/ alt='" + pinCloseAlt + "'></a></span></div>"; var lpPinTitle = "<div class='ps_modal_header'><h1 class='ps_modal_title' id='ptpinLPTitle'><span class='ps-text'>" + sTitle + "</span></h1><div class='ps_modal_close'>" + lpPinClose + "</div></div>"; var lpPinLabelHdr = "<h2 class='ps_header-group psaccesshidden'><span class='ps-text'>"+ PTPinTo.sLabelHeader+"</span></h2>";  var lpPinNewLP3 = '<div class="ptpinlabel ptpinAddLabelTxt"><label class="ps-label" for="lpNewLabel">'+ tileLabelDesc + '</label><input id="lpNewLabel" onkeydown="event.stopPropagation()" type="text" maxlength="30" aria-required="true" value="' + pinLabel + '"></div>';  var lpPinList = "<div class='ps_modal_content addto'>" + lpPinLabelHdr + lpPinNewLP3 + "<h2 class='ps_header-group'><span class='ps-text' id='ptlplistDesc'>" + ulDesc + "</span></h2><div class='lplistgrid' id='ptlplist'><ul class='" + ulStyle + "'>" + lpHtml+ "</ul></div></div>";  var lpPinNewLP1 = "<h2 class='ps_header-group'><span class='ps-text'>Or create a new Homepage</span></h2><div class='pinnewlp'>"; var lpInpNewHP = "<input id='lpNewHP' onkeydown='if(event.keyCode==13)PTPinTo.SaveNewLPPin(event)' placeholder='" + PTPinTo.sAddToNewHP + "' aria-label='" + PTPinTo.sNewLPDesc + "' type='text'>"; var lpPinNewLP2 = "<div class='ps_box-button'><span class='ps-button-wrapper'><a id='ptaddlpbtn' class='ps-button' href='" + ajaxURL + "' role='button'>" + PTPinTo.sAddTxt +"</a></span></div>"
 var lpFooter = "<div class='addtofooter " + footerStyle + "'>" + lpPinNewLP1 + lpInpNewHP + lpPinNewLP2 + "</div></div>";  var lpPinFirstAnchor = "<a class='ps-anchor' id='PTPINLP_FirstAnchor' tabindex='0'></a>"; var lpPinLastAnchor = "<a class='ps-anchor' id='PTPINLP_LastAnchor' tabindex='0'></a>"; return "<div id='PT_PINLPSELECT' class='ps_modal_container' role='dialog' aria-modal='true' aria-labelledby='ptpinLPTitle' onclick='event.stopPropagation()'>" + lpPinFirstAnchor + lpPinTitle + lpPinList + lpFooter + lpPinLastAnchor + "</div>"; },

 UpdateAddToLPModal : function(ajaxURL, lpHtml, sTitle, ulDesc, ulStyle){
 
 var pinLabel = ajaxURL.match('&crefLabel=([^&]*)'); pinLabel = (pinLabel && (pinLabel.length > 1)) ? PTPinTo.EscapeToHTML(decodeURIComponent(pinLabel[1])) : ""; var inpPin = document.getElementById("lpNewLabel"); inpPin.value = pinLabel; var hpList = document.getElementById('ptlplist'); if (hpList) {
 hpList.innerHTML = "<ul class='" + ulStyle + "'>" + lpHtml + "</ul>";  var addNewBtn = document.getElementById('ptaddlpbtn'); addNewBtn.href = ajaxURL; }
 
 var elTitle = document.getElementById("ptpinLPTitle"); if (elTitle && elTitle.firstElementChild && (elTitle.firstElementChild.tagName.toUpperCase() === "SPAN")) {
 if (elTitle.firstElementChild.innerHTML !== sTitle) {
 
 elTitle.firstElementChild.innerHTML = sTitle; var elListSpan = document.getElementById("ptlplistDesc"); if (elListSpan)
 elListSpan.innerHTML = ulDesc;  var footer = document.querySelector("#PT_PINLPSELECT .addtofooter"); if (sTitle == PTPinTo.dashbrdTitle){
 
 ptUtil.addClass(footer,"ps-pin-hidden");  }else {
 ptUtil.removeClass(footer,"ps-pin-hidden"); }
 } 
 } 
 },

 
 AddToModal : function(defLabel, addReqParam, titleTxt, labelDesc){
 
 defLabel = PTPinTo.EscapeToHTML(defLabel); var pinCloseURL = PTPinTo.getCloseURL();  var pinCloseAlt = PTPinTo.sCloseTxt; var addPinClose = "<div class='ps_box-button psc_modal-close ps_pinto_close'><span class='ps-button-wrapper' title='" + pinCloseAlt + "'><a class='ps-button' id='ptpinaddclose' tabindex='0' role='button' alt='" + pinCloseAlt + "' title='" + pinCloseAlt + "' ><img src='" + pinCloseURL + "'/ alt='" + pinCloseAlt + "'></a></span></div>"; var addPinTitle = "<div class='ps_modal_header'><h1 class='ps_modal_title' id='ptpinAddTitle'><span class='ps-text'>" + titleTxt + "</span></h1><div class='ps_modal_close'>" + addPinClose + "</div></div>"; var inpAdd1 = '<input type="text" id="ptpinAddLabel" maxlength="30" aria-required="true" value="' + defLabel + '"'; var inpAdd2 = " onkeydown='if (event.keyCode == 13) PTPinTo.SaveAddPin(event)'/><input type='hidden' id='pinAddParam' value='" + addReqParam + "'/>";  var btnAdd = "<div class='ps_box-button'><span class='ps-button-wrapper'><a id='ptpinAddBtn' class='ps-button' href='javascript:void(0)' role='button'>Add</a></span></div>"; var addPinLabel = "<div class='ptpinAddLabelTxt'><label class='ps-label' for='ptpinAddLabel' id='ptpinAddDesc' >" + labelDesc + "</label></div>"; var addPinNew = "<div class='pinnewlp'><div class='ptpinAddContainer'>" + addPinLabel + "<div class='ptpinAddInputContainer'>" + inpAdd1 + inpAdd2 + btnAdd + "</div></div></div>"; var addPinFirstAnchor = "<a class='ps-anchor' id='PTPINADD_FirstAnchor' tabindex='0'></a>"; var addPinLastAnchor = "<a class='ps-anchor' id='PTPINADD_LastAnchor' tabindex='0'></a>"; return "<div id='PT_PINADD' class='ps_modal_container' role='dialog' aria-modal='true' aria-labelledby='ptpinAddTitle' onclick='event.stopPropagation()'>" + addPinFirstAnchor + addPinTitle + addPinNew + addPinLastAnchor + "</div>"; },

 updateAddModal : function(parentEl, defLabel, addReqParam, titleTxt, labelDesc){
 
 var addElem = parentEl.querySelector("#PT_PINADD #ptpinAddTitle"); if (addElem) 
 addElem.innerHTML = titleTxt; addElem = parentEl.querySelector("#PT_PINADD #ptpinAddLabel"); if (addElem)
 addElem.value = defLabel; addElem = parentEl.querySelector("#PT_PINADD #pinAddParam"); if (addElem)
 addElem.value = addReqParam; addElem =  parentEl.querySelector("#PT_PINADD #ptpinAddDesc"); if (addElem)
 addElem.innerHTML = labelDesc; },
 
 PinAddEvents : function (){
 var elPinAdd = document.querySelector('#PT_PINADD'); if (!elPinAdd) return; var el = elPinAdd.querySelector("#ptpinaddclose"); if (el) {
 ptEvent.add(el,"click",PTPinTo.CloseLPWin); ptEvent.add(el,"keydown",PTPinTo.CloseLPWin); }
 
 el = elPinAdd.querySelector("#PT_PINADD #ptpinAddBtn"); if (el) {
 ptEvent.add(el,"click",PTPinTo.SaveAddPin);  ptEvent.add(el,"keydown",PTPinTo.SaveAddPin);  }
 },

 PinLPEvents : function (){
 var elPinAdd = document.querySelector('#PT_PINLPSELECT'); if (!elPinAdd) return;  var el = elPinAdd.querySelector("#ptpintoclose"); if (el) {
 ptEvent.add(el,"click",PTPinTo.CloseLPWin); ptEvent.add(el,"keydown",PTPinTo.CloseLPWin); }
 el = elPinAdd.querySelector("#PT_PINLPSELECT #ptaddlpbtn"); if (el) {
 ptEvent.add(el,"click",function(event){PTPinTo.SaveNewLPPin(event, this.href);});  ptEvent.add(el,"keydown",function(event){PTPinTo.SaveNewLPPin(event, this.href);});  }
 },


 DeleteThis : function(targURL){
 if (targURL == null) return; var ajaxURL = PTPinTo.GetBaseURI() + "s/WEBLIB_PTNUI.PT_BUTTON_PIN.FieldFormula.IScript_DeleteLPPinned"; var pin_url = "url=" + encodeURIComponent(targURL); var loader = new net2.ContentLoader(ajaxURL,null,null,"POST",
 function () {},null,pin_url,"application/x-www-form-urlencoded"); },


 DeleteFromDBRD : function(targURL){
 if (targURL == null) return; var ajaxURL = PTPinTo.GetBaseURI() + "s/WEBLIB_PTNUI.PT_BUTTON_PIN.FieldFormula.IScript_DeleteDBRDPinned"; var pin_url = "url=" + encodeURIComponent(targURL); var loader = new net2.ContentLoader(ajaxURL,null,null,"POST",
 function () {},null,pin_url,"application/x-www-form-urlencoded"); },


 actionPinNBFAV : function (loc, label,pin_url) {
 var pinTitle = ""; var pinLabelDesc = ""; if (loc == "FAV"){
 pinTitle = PTPinTo.favTitle; pinLabelDesc = PTPinTo.favLabelDesc; } else if (loc == "NB") {
 pinTitle = PTPinTo.nbTitle; pinLabelDesc = PTPinTo.tileLabelDesc; }
 if (!document.querySelector(":root.psc_mode-access"))
 pinLabelDesc = "*" + pinLabelDesc;  var el = document.querySelector('#ptifrmcontent'); if (el == null)
 el = document.querySelector('#pthdr2container'); if (el == null) {
 el = document.getElementsByTagName("body"); el = el[0]; }
 var t_el = el.querySelector('#PT_PINTO_MASK'); if (t_el == null) {
 var addDialogHTML = PTPinTo.AddPinToMask() + PTPinTo.AddToModal(label, pin_url, pinTitle, pinLabelDesc);  ptUtil.appendHTML(el, addDialogHTML); PTPinTo.PinAddEvents();  }else {
 var addEl = t_el.querySelector('#PT_PINADD'); if (addEl == null){
 var addDialogHTML = PTPinTo.AddToModal(label, pin_url, pinTitle, pinLabelDesc); ptUtil.appendHTML(t_el, addDialogHTML); PTPinTo.PinAddEvents();  t_el.style.display = 'inherit'; }else {
 var addElem = t_el.querySelector("#PT_PINADD #ptpinAddTitle"); PTPinTo.updateAddModal(t_el, label, pin_url, pinTitle, pinLabelDesc); ptUtil.removeClass(addEl,"ps-pin-hidden");  t_el.style.display = 'inherit'; }
 } 
 },

 actionPinHP : function (loc, label, pin_url){
 PTPinTo.processing(1,3000); var ajaxURL = PTPinTo.GetBaseURI() + PTPinTo.pinBaseURL ; var loader = new net2.ContentLoader(ajaxURL,null,null,"POST",
 function () {
 var m = this.req.responseText; if ((loc == 'LP') || (loc == "DBRD")){
 try { 
 var rcd = eval(m); if ((rcd.length == 1) && (/LP|DBRD|SID/.test(rcd[0].ERROR))) {
 PTPinTo.processing(0,3000); PT_Toast.ShowMessage(rcd[0].ERRTEXT, "PTPinTo.focusTileLabelHP();"); return false; } 
 }catch (e) {} 
 var sTitle = (loc == 'DBRD') ? PTPinTo.dashbrdTitle : PTPinTo.hpTitle; var sulDesc = (loc == 'DBRD') ? PTPinTo.sLPDBRDDesc : PTPinTo.sLPHPDesc; var ulStyle = (loc == 'DBRD') ? "ptlpdbrdul" : "ptlphpul"; var footStyle = (loc == 'DBRD') ? "ps-pin-hidden" : "";  var lpHtml = ""; for (var i = 0; i < rcd.length; i++) {
 var curLP = ""; if (rcd[i].exists == 'y') {
 curLP = "<a class='disabled'>" + rcd[i].label + " (already added)</a>"; } else {
 curLP = "<a class='active' onclick='PTPinTo.SaveLPPin(event, this.href, this.innerHTML);return false;' href='" + ajaxURL + "?" + pin_url + "&lp=" + rcd[i].name + "'>" + rcd[i].label + "</a>"; }
 lpHtml = lpHtml + "<li><div class='lplistitem'>" + curLP + "</div></li>"; }
 var el = document.querySelector('#ptifrmcontent'); if (el == null)
 el = document.querySelector('#pthdr2container'); if (el == null) {
 el = document.getElementsByTagName("body"); el = el[0]; }
 var t_el = el.querySelector('#PT_PINTO_MASK'); if (t_el == null) {
 var addDialogHTML = PTPinTo.AddPinToMask() + PTPinTo.AddToLPModal(ajaxURL+"?"+pin_url, lpHtml, sTitle, sulDesc, ulStyle, footStyle); ptUtil.appendHTML(el, addDialogHTML); PTPinTo.PinLPEvents();  } else {
 var lpSelectEl = t_el.querySelector('#PT_PINLPSELECT'); if (lpSelectEl == null) {
 var addDialogHTML = PTPinTo.AddToLPModal(ajaxURL+"?"+pin_url, lpHtml, sTitle, sulDesc, ulStyle, footStyle); ptUtil.appendHTML(t_el, addDialogHTML); PTPinTo.PinLPEvents(); t_el.style.display = 'inherit'; }else {
 PTPinTo.UpdateAddToLPModal(ajaxURL+"?"+pin_url, lpHtml, sTitle, sulDesc, ulStyle); t_el.style.display = 'inherit'; ptUtil.removeClass(lpSelectEl, "ps-pin-hidden"); }
 }

 PTPinTo.processing(0,3000); PTPinTo.focusTileLabelHP();  } 
 },null,pin_url,"application/x-www-form-urlencoded"); },

 PinThis : function(loc, crefID, targURL, targURLParam, tileURLParam, label, apiCall) {
 
 if ((loc != "LP") && (loc != "NB") && (loc != "FAV") && (loc != "DBRD")){
 PT_Toast.ShowMessage("Unknown Pin Location: " + loc); return false; }

 crefID = (crefID == null) ? "": crefID; var pin_url = "loc=" + loc; if (crefID !== "")
 pin_url += "&crefName=" + encodeURIComponent(crefID).replace(/'/g, "%27"); if (label !== "")
 pin_url += "&crefLabel=" + encodeURIComponent(label).replace(/'/g, "%27");; if (targURL !== "")
 pin_url += "&url=" + encodeURIComponent(targURL).replace(/'/g, "%27");  if (targURLParam !== "")
 pin_url += "&targParam=" + encodeURIComponent(targURLParam).replace(/'/g, "%27");  if (tileURLParam !== "")
 pin_url += "&tileParam=" + encodeURIComponent(tileURLParam).replace(/'/g, "%27");   var icsid = document.getElementById("ICSCRIPTSID");  if (icsid && icsid.tagName.toUpperCase() === "SPAN") {
 if (!/ptnbsid/.test(icsid.textContent) && !/ptpinrand/.test(icsid.textContent) 
 && !/ptpinhash/.test(icsid.textContent))
 pin_url += "&ptnbsid=" + icsid.textContent ; else {
 pin_url += "&"; pin_url += icsid.textContent; }
 }

 
 
 if ((typeof apiCall == "undefined") || (apiCall == "1"))
 pin_url += "&apiCall=1";   if ((loc == "FAV") || (loc== "NB")){
 PTPinTo.actionPinNBFAV(loc, label, pin_url); } else {
 
 PTPinTo.actionPinHP(loc, label, pin_url); } 
 
 var actionlistContainer = findActionListContainer(); if( !actionlistContainer )
 PTPinTo.Toggle(); else if (typeof hideActionListMenu == "function")
 hideActionListMenu();   if ((document.getElementById('PT_CONTENT') != null) && (typeof apiCall !== "undefined") && (apiCall == "0")) {
 
 
 var ptMaskEl = document.getElementById('pt_modalMask'); if (ptMaskEl)
 ptMaskEl.click(); }

 PTPinTo.ToggleMainContent(false); if ((loc == "FAV") || (loc == "NB")) {
 PTPinTo.focusTileLabel();   PTNavBar.bDirty = true; }
 },

 Init : function(el) {
 var actionlistContainer = findActionListContainer(); var themeParams = "" ;  if (actionlistContainer)
 {
 themeParams = "setClassicFluidHeaderFlag="+"true"; }
 else
 {
 themeParams = "setClassicFluidHeaderFlag="+"false"; }
 
 var ajaxURL = PTPinTo.GetBaseURI() + "s/WEBLIB_PTNUI.PT_BUTTON_PIN.FieldFormula.IScript_ShowPinMenu"; var loader = new net2.ContentLoader(ajaxURL,null,null,"GET",
 function () {
 if (this.req.status == 302) {
 var redirURL = this.req.getResponseHeader("location"); if (redirURL == "")
 redirURL = ajaxURL; top.location.href = redirURL; }
 
 var popupHTML = this.req.responseText;  ptUtil.appendHTML(el,popupHTML); var pin_menu_el = el.querySelector('.ps-pin-menu'); if (pin_menu_el != null)
 PTPinTo.Toggle(); },null,themeParams,"application/x-www-form-urlencoded"); },

 Toggle : function() {
 var pin_el = document.querySelector('.ps_header-pin'); if (pin_el != null) {
 var pin_menu_el = pin_el.querySelector('.ps-pin-menu'); if (pin_menu_el == null) {
 this.Init(pin_el); } else {
 toggleClass(pin_el, 'active'); toggleClass(pin_menu_el, 'ps-pin-hidden'); }
 }
 },

 DecodeHTML: function(inStr) {
 var e = document.createElement('div'); e.innerHTML = inStr; return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue; },

 SavePin : function(loc) {
 var pCrefID = ""; var pin_url = top.location.href; var pLabel = "";  if ((typeof(bFMode) !== 'undefined') && (bFMode)) {
 
 if ((typeof strReqURL !== "undefined") && (strReqURL != ""))
 pin_url = strReqURL;  else
 pin_url = location.href; if ((typeof(szPinCrefID)!=='undefined') && (typeof(szPinCrefReg)!=='undefined') && (szPinCrefReg=='T')) { 
 pCrefID = szPinCrefID; }

 if ((typeof(szPinCrefLabel) !== 'undefined') && (typeof(szPinCrefReg)!=='undefined') && (szPinCrefReg=='T')) {
 pLabel = PTPinTo.DecodeHTML(szPinCrefLabel); } else {
 pLabel = document.title; }
 } else {
 
 pCrefID = ""; pLabel = document.title; if (typeof top.ptalPage == "object") {
 
 var ptalInfo = ptalPage.id.split("."); if (ptalInfo.length > 1) {
 pCrefID = ptalInfo[1]; pLabel = ptalPage.label; pin_url = top.location.href; }
 }else {
 try {
 this.TargetFrame = top.frames["TargetContent"]; if ((typeof(this.TargetFrame.szPinCrefReg)!=='undefined') && (this.TargetFrame.szPinCrefReg=='T')) {
 pCrefID = this.TargetFrame.szPinCrefID; pLabel = this.TargetFrame.szPinCrefLabel; }
 } catch(e) {}

 if (this.TargetFrame) {
 
 if (!isCrossDomain(this.TargetFrame) && (typeof this.TargetFrame.strReqURL !== 'undefined')) { 
 if (String(pin_url).indexOf("cmd=uninav") == -1)
 pin_url = this.TargetFrame.strReqURL;  } else {
 pin_url = top.location.href; }
 } else {
 
 pin_url = top.location.href;  var ptCrefInfo = null; var regMatch = new RegExp("[?&](pslnkid=([^&#]*)|&|#|$)"); var ptCrefInfo = regMatch.exec(top.location.href);  if (!ptCrefInfo) {
 
 regMatch = new RegExp("[?&](tab=([^&#]*)|&|#|$)"); ptCrefInfo = regMatch.exec(top.location.href); }
 if (ptCrefInfo && ptCrefInfo.length == 3) 
 pCrefID = decodeURIComponent(ptCrefInfo[2]);  }
 
 if ((pin_url.search(/abnds=/i)!= -1) && (pin_url.search(/abnnode=/i)!= -1)) {
 
 PT_Toast.ShowMessage("ABN type pages cannot be pinned. Not Supported."); return; } 
 } 
 } 
 PTPinTo.PinThis(loc, pCrefID, pin_url, "", "", pLabel, "0");  },

 SaveAddPin : function(e, favParam) {
 
 if ((e.type == "keydown") && (e.keyCode != 13) && (e.keyCode != 32))
 return; e.preventDefault(); var input_el = document.getElementById('ptpinAddLabel'); if (input_el && (/^([\s\t\r\n]*)$/.test(input_el.value))) {
 PT_Toast.ShowMessage(PTPinTo.serrNoLabel, "PTPinTo.focusTileLabel();PTPinTo.ToggleMainContent(0);"); return; }
 var newLabel = encodeURIComponent(input_el.value); input_el = document.getElementById('pinAddParam'); var inputParam = input_el.value; inputParam = inputParam.replace(/(crefLabel=)[^\&]+/, 'crefLabel=' + newLabel); if (inputParam.indexOf("crefLabel=") == -1) 
 inputParam = inputParam + "&crefLabel=" + newLabel;  PTPinTo.CloseLPWin(e); var ajaxURL = PTPinTo.GetBaseURI() + PTPinTo.pinBaseURL ; var loader = new net2.ContentLoader(ajaxURL,null,null,"POST",
 function () {
 try {
 var rcd = eval(this.req.responseText); if ((rcd.length == 1) && ((rcd[0].ERROR == "NB") || (rcd[0].ERROR == "SID"))) {
 PT_Toast.ShowMessage(rcd[0].ERRTEXT); return false; } 
 } catch (e) {}
 if (this.req.responseText != "") 
 PT_Toast.ShowMessage(this.req.responseText); },null,inputParam,"application/x-www-form-urlencoded"); },

 SaveLPPin : function(e, url, label) {
 e.preventDefault();  if (url.indexOf("?") > -1)
 url = url + "&"; else
 url = url + "?";  var lblPinObj = document.getElementById("lpNewLabel"); if (lblPinObj != null){
 if (!/^([\s\t\r\n]*)$/.test(lblPinObj.value)) {
 var lblPin = encodeURIComponent(lblPinObj.value).replace(/'/g, "%27"); url = url.replace(/(crefLabel=)[^\&]+/, 'crefLabel=' + lblPinObj.value); } else {
 PT_Toast.ShowMessage(PTPinTo.serrNoLabel, "PTPinTo.focusTileLabelHP();PTPinTo.ToggleMainContent(0);"); return; }
 }
 PTPinTo.CloseLPWin(e); url = url + "label=" + encodeURIComponent(label).replace(/'/g, "%27"); var loader = new net2.ContentLoader(url,null,null,"GET",
 function () {
 PT_Toast.ShowMessage(this.req.responseText); },null,null,"application/x-www-form-urlencoded"); },

 SaveNewLPPin : function(e, url) {
 if ((e.type == "keydown") && (e.keyCode != 13) && (e.keyCode != 32))
 return; e.preventDefault(); var input_el = document.getElementById('lpNewHP'); var newLabel = input_el.value; if (/^([\s\t\r\n]*)$/.test(newLabel)) {
 PT_Toast.ShowMessage("Please enter a valid name for the new homepage.","PTPinTo.focusNewLP();PTPinTo.ToggleMainContent(0);"); return; }

 var lplist = document.querySelectorAll('.lplistitem a'); if (lplist != null) {
 for (var i=0; i<lplist.length; i++) {
 var inp_el = input_el.value.trim(); if (inp_el == lplist[i].innerHTML || inp_el.concat(" (already added)") == lplist[i].innerHTML) {
 PT_Toast.ShowMessage("Homepage already exists. Enter another name or choose from available homepages.","PTPinTo.focusNewLP();PTPinTo.ToggleMainContent(0);"); return; } 
 }
 }

 if (typeof url == "undefined") {
 var addBtn = document.getElementById('ptaddlpbtn'); url = (addBtn != null) ? addBtn.href : ""; }

 
 var lblPinObj = document.getElementById("lpNewLabel"); if (lblPinObj != null){
 if (!/^([\s\t\r\n]*)$/.test(lblPinObj.value)) {
 var lblPin = encodeURIComponent(lblPinObj.value).replace(/'/g, "%27"); url = url.replace(/(crefLabel=)[^\&]+/, 'crefLabel=' + lblPinObj.value); }else {
 PT_Toast.ShowMessage(PTPinTo.serrNoLabel, "PTPinTo.focusTileLabelHP();PTPinTo.ToggleMainContent(0);"); return; }
 }

 input_el.value = ""; PTPinTo.CloseLPWin(e); url = url + "&newlp=" + encodeURIComponent(newLabel).replace(/'/g, "%27"); var loader = new net2.ContentLoader(url,null,null,"GET",
 function () {
 var m = this.req.responseText; PT_Toast.ShowMessage(m); },null,null,"application/x-www-form-urlencoded"); },


 isIOS : function () {
 return isClass(document.querySelector('html'), "ios"); },

 isAndroid : function() {
 return isClass(document.querySelector('html'), "android"); },

 focusNewLP : function(){
 var input_el = document.getElementById('lpNewHP'); if (input_el)
 input_el.focus(); },
 
 focusTileLabelHP : function(){
 if (PTPinTo.isIOS() || PTPinTo.isAndroid()) {
 var close_el = document.getElementById('ptpintoclose'); if (close_el)
 close_el.focus(); }else {
 var input_el = document.getElementById('lpNewLabel'); if (input_el)
 input_el.focus(); }
 },
 
 focusTileLabel : function(){
 if (PTPinTo.isIOS() || PTPinTo.isAndroid()) {
 var close_el = document.getElementById('ptpinaddclose'); if (close_el)
 close_el.focus(); }else {
 var input_el = document.getElementById('ptpinAddLabel'); if (input_el)
 input_el.focus(); }
 },

 CloseLPWin : function(e) {
 if ((e.type == "keydown") && (e.keyCode != 13) && (e.keyCode != 32))
 return; e.preventDefault(); var el = document.getElementById('PT_PINTO_MASK'); el.style.display = 'none'; var childEl = document.getElementById('PT_PINLPSELECT'); if (childEl)
 ptUtil.addClass(childEl, "ps-pin-hidden"); childEl = document.getElementById('PT_PINADD'); if (childEl)
 ptUtil.addClass(childEl,"ps-pin-hidden");  PTPinTo.ToggleMainContent(true); },
 
 KbHandler: function(e) {
 var kbSetFocus = function(el, e) {
 if (el) {
 el.focus(); e.preventDefault(); e.stopPropagation(); }
 }; var e = window.event || e;  var lpel = ""; var fEl = document.activeElement; if (typeof fEl == "undefined" || fEl == null) return; switch (e.keyCode) {
 case 9: 
 if (fEl.id == "PTPINLP_FirstAnchor") 
 lpel = document.getElementById('lpNewLabel');  else if (fEl.id == "PTPINLP_LastAnchor")
 lpel = document.getElementById('ptpintoclose');  else if (fEl.id == "PTPINADD_FirstAnchor") 
 lpel = document.getElementById('ptpinAddLabel');  else if (fEl.id == "PTPINADD_LastAnchor")
 lpel = document.getElementById('ptpinaddclose');   if (lpel != null)
 kbSetFocus(lpel,e); break; case 27: 
 PTPinTo.CloseLPWin(e); break; default:
 break; }
 }
};function DoPin() { PTPinTo.Toggle() };function findActionListContainer()
{
 var actionlistContainer = document.querySelector('#pthdr2actionListcontainerfluid');  return actionlistContainer;};(function(){
 var actionlistContainer = findActionListContainer(); if(actionlistContainer){ DoPin(); return false; }
}());