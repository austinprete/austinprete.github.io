

var PushMsg =
 {
 Count:0,
 Category_Count:0,
 Category:new Object(0),
 };function NewNotification(event) 
{
 try
 {
 var bcContainer =document.getElementById('psNotifyWinIFrame'); if(bcContainer!=null && bcContainer.style.display!='none')
 {
 if(event.Map["CATEGORYTYPE"]=="ACK" || event.Map["MSG_STATE"]=="Update")
 {
 doAutoUpdateMsg(event); }
 else
 {
 if(event.Map["MSG_STATE"]=="New")
 {
 top.PushMsg.Count++; drawBadge(top.PushMsg.Count); }
 }

 if(event.Map["MSG_STATE"]=="Update")
 top.doLoadNewNotification(); }
 else
 {

 if(event.Map["MSG_STATE"]=="New")
 {
 PushMsg.Count++; drawBadge(PushMsg.Count); }
 if(event.Map["MSG_STATE"]=="Update")
 doLoadNewNotification(); }
 }
 catch (event) 
 {
 }
}




function drawBadge(cnt)
{

 if (isNaN(cnt))
 {
 console.log("Badge Error : " +cnt); cnt=0; }
 try
 {
 var obj=document.querySelector(".ps_header-notify.ps_header_button"); if(obj==null)
 obj=top.document.querySelector(".ps_header-notify.ps_header_button"); if(cnt==0)
 {
 obj.classList.add("psc_badge-hide"); }
 else
 {
 obj.classList.remove("psc_badge-hide"); }
 if(document.querySelector(":root.psc_mode-access"))
 {
 obj.querySelector(".ps_header-notify .ps-text").innerHTML='Notification'+' '+'New Notification'+' '+cnt; }
 else
 {
 obj.querySelector(".ps_header-notify .ps-text").innerHTML= cnt; }
 var asBadgeObj=document.querySelector(".ps_header-notify > .ps_box-link"); if(asBadgeObj==null)
 asBadgeObj=top.document.querySelector(".ps_header-notify > .ps_box-link"); if(asBadgeObj!=null)
 {
 if(cnt==0)
 {
 asBadgeObj.classList.add("psc_badge-hide"); asBadgeObj.title='You Have No New Notification'; var badgeText = document.querySelector(".ps_notify-badge .ps-text"); if( badgeText!=null)
 badgeText.innerHTML=cnt; }
 else
 {
 asBadgeObj.classList.remove("psc_badge-hide"); asBadgeObj.title=cnt+' '+'New Notification'; var badgeText = document.querySelector(".ps_notify-badge .ps-text"); if( badgeText!=null)
 badgeText.innerHTML=cnt; }
 }

 doUpdateCount(cnt); }
 catch(event)
 {
 }
}

function doUpdateCount(cnt)
{

 try
 {
 var parentNode=document.getElementById('PT_NOTIFY'); var parentNode1=document.getElementById('pthdr2notify_div'); if(parentNode==null && parentNode1==null )
 {
 parentNode=top.document.getElementById('PT_NOTIFY'); parentNode1=top.document.getElementById('pthdr2notify_div'); if(parentNode!=null || parentNode1!=null )
 {
 if(cnt=="0")
 top.PushMsg.Count=0; }
 }
 else
 {
 if(cnt=="0")
 PushMsg.Count=0; }

 var windowopened =document.getElementById('psNotifyWinIFrame'); if (windowopened!=null && windowopened.style.display!='none')
 {

 var bcContainer =document.getElementById('psNotifyWinIFrame').contentDocument.getElementById("PTPN_HDR_DV_PTPN_REFRESH_BTN"); if(bcContainer!=null)
 {
 var bcContainer_parent=document.getElementById('psNotifyWinIFrame').contentDocument.getElementById(bcContainer.parentNode.parentNode.id); if (bcContainer_parent!=null)
 {
 var submitaction="PTPN_HDR_DV_PTPN_REFRESH_BTN"; if(cnt=="0")
 {
 document.getElementById('psNotifyWinIFrame').contentWindow.DisableRefreshButton(); }
 else
 {
 document.getElementById('psNotifyWinIFrame').contentWindow.EnableRefreshButton(); }
 }
 }
 }
 else
 {

 if(cnt=="0")
 {
 DisableRefreshButton(); }
 else
 {
 EnableRefreshButton(); }

 }
 }
 catch(event)
 {
 }




}

function EnableRefreshButton()
{
 var submitaction="PTPN_HDR_DV_PTPN_REFRESH_BTN"; var bcContainer=document.getElementById("PTPN_HDR_DV_PTPN_REFRESH_BTN"); if(bcContainer!=null)
 {
 var bcContainer_parent = document.getElementById(bcContainer.parentNode.parentNode.id); bcContainer.setAttribute("href",'javascript:submitAction_win5(document.win5,'+'\''+submitaction+'\''+')'); bcContainer_parent.classList.remove("ptpn_refresh_btn"); }
}

function DisableRefreshButton()
{
 var bcContainer=document.getElementById("PTPN_HDR_DV_PTPN_REFRESH_BTN"); if(bcContainer!=null)
 bcContainer.removeAttribute("href");}



function SendPortalRequest(url)
{
 try
 {
 var loader = new net2.ContentLoader(url+"/s/WEBLIB_PTPN.PTPN_ISCRIPT.FieldFormula.IScript_Get_Portal_Count?name=",null, null, "GET",function(){drawBadge(loader.req.responseText);PushMsg.Count=Number(loader.req.responseText); }, null,null, "application/x-www-form-urlencoded"); }
 catch(event)
 {
 }
}


function doLoadNewNotification()
{


 try
 {
 var loader = new net2.ContentLoader(getptBaseURI()+"s/WEBLIB_PTPN.PTPN_ISCRIPT.FieldFormula.IScript_Notification_Count?name=",null, null, "GET",function(){CheckPortalUrl(loader.req.responseText);}, null,null, "application/x-www-form-urlencoded"); }
 catch(event)
 {
 }

}
function CheckPortalUrl(response)
{

var n = response.search("Portal_URL;;"); if (n >-1)
 {
 var url=response.split(";;"); SendPortalRequest(url[1]); }
 else
 {
 drawBadge(response); PushMsg.Count=Number(response); }


}



function doAutoUpdateMsg(event)
{
 try
 {
 var bcContainer =document.getElementById('psNotifyWinIFrame').contentDocument.getElementById("PTPN_HDR_DV_PTPN_AUTO_BTN"); bcContainer.style.display="none"; bcContainer.click(); }
 catch(event)
 {
 }

}



function msgStateChange(msgtype)
{
 try
 {
 var loader = new net2.ContentLoader(getptBaseURI()+"s/WEBLIB_PTPN.PTPN_ISCRIPT.FieldFormula.IScript_StateChange?name="+msgtype,null, null, "GET",function(){}, null,null, "application/x-www-form-urlencoded"); }
 catch(event)
 {
 }
}





var PTNotifyWin = {
 Url: "",
 CurTileEl: null,
 OpenState: "",
 StartPersState: "",
 IsOpen: false,
 IframeDoc: null,
 IsAccessible: false,
 Load: function() {
 
 var navBarCont = '<div id="psNotifyWin" class="psNotifyWin PTPNWinModal "><div id="tailarrow" class="ptpnarrow" style="position:relative"><div id="ptpnArrow1_1" class=" ps_arrow_top" style=" display:none;"></div><iframe id="psNotifyWinIFrame" name="psNotifyWinIFrame" width="400" height="400" frameborder="0" title ="Notification List"></iframe></div></div>'; var psNBMask = document.createElement("div"); psNBMask.id = "psNotifyWinMask"; psNBMask.innerHTML = navBarCont; var el = document.querySelector('body'); el.appendChild(psNBMask); var elIF = el.querySelector('#psNotifyWinIFrame'); elIF.src = encodeURI(PTNotifyWin.Url); },
 Toggle: function() 
 {

  var el = document.querySelector('.PTPNWinModal'); if(el!=null && this.IsOpen==false )
 {
 el.parentNode.removeChild(el); this.Load();  el = document.querySelector('.PTPNWinModal'); }
 if (el == null) {
 this.Load(); el = document.querySelector('.PTPNWinModal'); }
 this.IsOpen = !this.IsOpen; this.IsAccessible = (getCookieValue('ps_theme').indexOf('accessibility:A') != -1);  var pel = el.parentNode; pel.style.visibility = 'visible'; pel.style.position = 'absolute'; pel.style.right = 0; pel.style.display = 'block'; pel.style.zIndex = this.IsOpen?'210':'1'; pel.style.width = this.IsOpen?'100%':'0%'; pel.setAttribute('onclick', 'javascript:DoNotify();'); addClass(pel, 'PTNotifyWinLocation'); var ell=document.getElementById("pthdr2notify"); var ell1=document.getElementById("psNotifyWinIFrame"); if(ell!=null && ell1!=null)
 {
 addClass(ell1, 'PTPNWinModalClassic'); }
 
 var isSFF = (document.querySelector('html').getAttribute('class').indexOf('phone') >= 0); if (this.OpenState == '') {
 if (this.CurTileEl == null && !isSFF)
 this.OpenState = 'slidein'; else {
 this.OpenState = 'slidein_full'; }
 }
 var elBody = document.querySelector('body'); if (this.IsAccessible)
 {
 if (this.IsOpen)
 {
 elBody.style.cssText = elBody.style.cssText + " visibility: hidden;"; if (typeof hidePtWrapper == "function") hidePtWrapper(); addClass(el, 'acs_mode');  }
 else
 {
 elBody.style.cssText = ""; if (typeof unhidePtWrapper == "function") unhidePtWrapper(); removeClass(el, 'acs_mode'); }
 }
 if(document.getElementById('PT_NOTIFY')!=null || window.parent.document.getElementById('PT_NOTIFY')!=null )
 {
 var ptMask = document.querySelector('#pt_modalMask'); if (ptMask)
 {
 if (this.IsOpen)
 ptMask.style.cssText = "height: 100%; width: 100%; display: block;"; else
 {
 ptMask.style.cssText = "height: 100%; width: 100%; display: none;"; closeProcessing(); }
 }
 }
 toggleClass(el, this.OpenState); if( this.IsOpen === false)
 {
 var psNBMask = document.getElementById('psNotifyWinMask'); if( psNBMask != null )
 {
 
 document.body.removeChild(psNBMask); }
 }

 
 }
 
};function closeProcessing()
{
 if(document.getElementById('PT_NOTIFY')!=null || window.parent.document.getElementById('PT_NOTIFY')!=null )
 {
 if(window.parent.document.getElementById('processing')!=null )
 {
 if(window.parent.document.getElementById('processing').parentElement!=null)
 window.parent.document.getElementById('processing').parentElement.style.display="none"; }
 
 }
}

function DoNotify()
{ 
 if(document.getElementById('PT_NOTIFY')!=null || window.parent.document.getElementById('PT_NOTIFY')!=null )
 {
 eval('processing_win5(1,3000)'); }
 doCloseLocalModals(); PTNotifyWin.Toggle();}


function DisplayArrow()
{

 if(document.getElementById('PT_NOTIFY')!=null || window.parent.document.getElementById('PT_NOTIFY')!=null )
 {
 var tail=top.document.getElementById("ptpnArrow1_1"); if(tail!=null)
 tail.style.display="block"; }
 else
 {
 var tail=top.document.getElementById("ptpnArrow1_1"); if(tail!=null)
 {
 tail.style.border="none"; tail.style.top="3.1em"; tail.style.display="block"; tail.style.border.color="#FFFFFF"; }
 }
}



function SetEscape()
{
 var elem = document.getElementById("PTPN_POPUP_WINDOW"); if(elem != null)
 {
 elem.setAttribute('onkeypress', 'EscapeKeyAction(event)'); }
}

function EscapeKeyAction(e)
{
 if(e.keyCode == 27 )
 {
 var elem = document.getElementById("PTPN_POPUP_WINDOW"); if(elem != null)
 {
 elem.style.display = "none"; }
 parent.DoNotify(); if(document.getElementById('PT_NOTIFY')!=null)
 {
 document.getElementById('PT_NOTIFY').focus(); }
 if(window.parent.document.getElementById('PT_NOTIFY')!=null )
 {
 window.parent.document.getElementById('PT_NOTIFY').focus(); }
 if(window.parent.document.getElementById('pthdr2notify')!=null )
 {
  window.parent.document.getElementById('pthdr2notify').focus(); }
 }
}



function SetListRoles()
{
 if(document.getElementsByClassName("ptpn_scroll_area"))
 {
 var list = document.getElementsByClassName("ptpn_scroll_area"); }  
 for (var i = 0; i < list.length; i++)
 {
 list[i].setAttribute("role", "list"); }
}

function CloseNotification()
{
 var input=window.parent.document.getElementById('psNotifyWinIFrame'); if(input!=null)
 {
 var test=document.getElementById("PTPN_ACC_MODE_PTPN_CLOSE"); if(test!=null)
 {
 test.addEventListener("keypress", function(event) {
 if (event.keyCode == 32||event.which == 32) {
 window.parent.document.getElementById("psNotifyWinIFrame").style.display = 'none'; parent.DoNotify(); }
 }); }
 }
}
