
  

var objCloseP="";var chM=String.fromCharCode(127);oJsChart.chM=chM;var ch7=String.fromCharCode(7);var ch8=String.fromCharCode(8);var chL=String.fromCharCode(0x25B6);var chEllipsis=String.fromCharCode(0x2026);var MyDiv='$';var bMozila=false; var bIE=false;var bSafari=false;var bIE7=false;var bIE9=false;var bIEm9=false;var bIEm8=0;var bIE11=false;var bChrome = false;var bSafari4=false;var biPad=false;var biPhone=false;var bWinTbl=false;var objMoveid="";var _objShadowid="";var _strControl1;var _oDDB=null;var strCont;var _aRadCntr=new Array();var DDButtons=new Array();var nDDBHeight=0;var _bPhotoUp=false;var _aStylesOrg=new Array();var GTMR="";var bPerfom=0;var StartT0,EndT0,StartProcT,EndProcT;var bPerfTest=false;var AD_test;var xS=0,yS=0,bDrag=false,scL=0,scT=0;var _nAnimId =null;var nTabCount = 0;var jetChartKo=0;var bTouchDvc=('ontouchstart' in window ? 1 : 0);var bChartRender=1;var bFluid= 0;var sActToolt="onmouseover";var _nBRCRM_T=0;if(isEmpty(gObChartDVT))
 var gObChartDVT = "";if(isEmpty(gObChartG))
 var gObChartG = "";if(isEmpty(gObChartOrg))
 var gObChartOrg = "";if(isEmpty(gObChartRB))
 var gObChartRB = "";if(isEmpty(gObChartJet))
 var gObChartJet="";var oGlblChrt= new oJsChart("");var DetectBrs =
{
 init: function ()
 {
 this.browser = this.searchString(this.dataBrowser) || "An unknown browser"; this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version"; this.OS = this.searchString(this.dataOS) || "an unknown OS"; },
 searchString: function (data)
 {
 for (var i = 0; i < data.length; i++)
 {
 var dataString = data[i].string; this.versionSearchString = data[i].versionSearch || data[i].identity; if (dataString)
 {
 if (dataString.indexOf(data[i].subString) != -1) return data[i].identity; }
 }
 },
 searchVersion: function (dataString)
 {
 var index = dataString.indexOf(this.versionSearchString); if (index == -1)
 {
 return; }
 return parseFloat(dataString.substring(index + this.versionSearchString.length + 1)); },
 dataBrowser: [
 {
 string: navigator.userAgent,
 subString: "Chrome",
 identity: "Chrome"
 }, {
 string: navigator.vendor,
 subString: "Apple",
 identity: "Safari",
 versionSearch: "Version"
 }, {
 string: navigator.userAgent,
 subString: "Firefox",
 identity: "Firefox"
 }, {
 string: navigator.userAgent,
 subString: "MSIE",
 identity: "Explorer",
 versionSearch: "MSIE"
 }, {
 string: navigator.userAgent,
 subString: "Gecko",
 identity: "Mozilla",
 versionSearch: "rv"
 }, ],
 dataOS: [
 {
 string: navigator.platform,
 subString: "Win",
 identity: "Windows"
 }, {
 string: navigator.platform,
 subString: "Mac",
 identity: "Mac"
 }, {
 string: navigator.platform,
 subString: "Linux",
 identity: "Linux"
 }, {
 string: navigator.platform,
 subString: "iPad",
 identity: "iPad"
 },
 {
 string: navigator.userAgent,
 subString: "iPhone",
 identity: "iPhone"
 }]
};DetectBrs.init();if(DetectBrs.browser=="Firefox")
 bMozila=true;else if(DetectBrs.browser=="Safari")
 {
 bSafari=true; if(DetectBrs.version>3.1)
 {
 bSafari4=true; }
}
else if(DetectBrs.browser=="Explorer") 
 {
 bIE=true; bIEm8=(window.document.documentMode>7)?1:0; bIE9=(window.document.documentMode==9)?1:0; if(DetectBrs.version<8)
 {
 bIE7=true; }
 if(window.document.documentMode > 8)
 {
 bIEm9=true; }
 }
else if(DetectBrs.browser=="Chrome")
 {
 bChrome=true;  }

else if(!!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv/)))
 { 
 

 bIE11=(window.document.documentMode==11)?1:0; bIE=true;  bIEm9=true; }

if(DetectBrs.OS=="iPad")
{
 biPad=true; oJsChart.biPad=biPad; sActToolt="onclick";}
else if(DetectBrs.OS=="iPhone")
{
 biPhone=true;  biPad=true; oJsChart.biPad=biPad;  sActToolt="onclick";}
else if(!!navigator.userAgent.match(/Tablet/))
{
 bWinTbl=true;  sActToolt="onclick";}
var bAndroid=navigator.userAgent.match(/(android)/i);var nBrowser=-1; function PT_CHART_LOAD()
{
 return;}
function LoadDVTPSFT(strControl, nOcc) {
 var sXMLStr="",nGtype=-1,ServStr="",sGoUrl=""; var d=(new Date()).getTime(); if (isEmpty(glObjTr.oDVT[strControl + "$$" + nOcc]))
 {
 glObjTr.oDVT[strControl + "$$" + nOcc] = new oJsChart(strControl + "$$" + nOcc); glObjTr.oDVT[strControl + "$$" + nOcc].dT=d; }
 else
 {
 objMyChart = glObjTr.oDVT[strControl + "$$" + nOcc]; if(!isEmpty(objMyChart.dT)&&(d-objMyChart.dT<1000))
 {
 objMyChart.dT=d; return; }
 
 objMyChart.dT=d; }
 var oMy = getObj(strControl + "$CHRTDVT$$" + nOcc); if(isEmpty(oMy))
 return;  var nWW=oMy.offsetWidth; if(nWW<5)
 {
 setTimeout("LoadDVTPSFT(\'"+strControl+"\',"+ nOcc+")",2000); return; }
 
 glObjTr.oDVT[strControl + "$$" + nOcc].ch_dt = oMy.getAttribute("data-ch_dt"); gObChartDVT = glObjTr.oDVT[strControl + "$$" + nOcc]; objMyChart = glObjTr.oDVT[strControl + "$$" + nOcc]; sXMLStr = objMyChart.adfDvtGetXml(strControl,nOcc); if(isEmpty(sXMLStr))
 return;  objMyChart.xml= sXMLStr; nGtype=sXMLStr.indexOf( "gaugeType" ); ServStr=strControl+MyDiv+"MN0"+MyDiv+"COL0"; if((nGtype>1)&&!isEmpty(oMy.getAttribute("DR")))
 { 
 
 objMyChart.AddCss(oMy,"cursor:pointer"); sGoUrl=oMy.getAttribute("DPH");  if(!isEmpty(sGoUrl))
 {
 
 oMy.addEventListener('click',function(event){gObChartDVT.goToDvtURLevent(sGoUrl,event)},0);  if(biPad)
 oMy.addEventListener('touchstart',function(event){gObChartDVT.goToDvtURLevent(sGoUrl,event)},0);   } 
 else
 {
 
 oMy.addEventListener('click',function(){MainLink("GG0","GGG"+nOcc, strControl, glObjTr.oDVT[strControl + "$$" + nOcc].ch_dt)},1);  if(biPad)
 oMy.addEventListener('touchstart',function(){MainLink("GG0","GGG"+nOcc, strControl, glObjTr.oDVT[strControl + "$$" + nOcc].ch_dt)},1); }
 }
 else if (!isEmpty(oMy.getAttribute("DR")))
 {
  oMy.addEventListener('click',function(event){preventEventPropagation(event);},0);  }
 bChartRender=0; objMyChart.loadDVT(nOcc);}
var ChartStyle="width:10px; background-color:rgb(234,239,245);z-index:0;"; function myTest()
{
var a=1;a++;}








function closeTooltip()
{
var oDivT=getObj("Mt");if(oDivT)
 {
 oDivT.parentNode.removeChild(oDivT); oDivT=null; }

}



function ChartLoad(strControl,bWSRP)
{
var bIsWSRP = parseInt(bWSRP);var t0= (new Date()).getTime();var d=new Date();var t1=d.getTime();_bPhotoUp=false;var objMyChart=new Object();GTMR='Global tree menu object glObjTr is undefined.';if (isEmpty(GTMR))
{
 GTMR="Global tree menu object glObjTr is undefined.";}
if(typeof(glObjTr)=="undefined") 
{
 ChartErr(GTMR,"",strControl,2,0); return 0;}

var bRefresh=1;if((glObjTr.bCrtCtxMn)||(!(glObjTr.isEmpty(glObjTr.sOpen))))
{
 glObjTr.bCrtCtxMn=0;  bRefresh=0;}


 
var MainObj=document.getElementById(strControl+"$OR1C$$0");AD_test=document.createElement("textarea");AD_test.style.position="absolute";AD_test.style.zIndex=1000;AD_test.cols=32;AD_test.rows=6;AD_test.id="AD";var objMyJetChart;if(isEmpty(MainObj))
{
 if(!isEmpty(getObj(strControl+"$GNT01$$0")))
 {
 if(isEmpty(glObjTr.oGntt[strControl]))
 glObjTr.oGntt[strControl]=new oJsChart(strControl); glObjTr.oGntt[strControl].ch_dt = getObj(strControl + "$GNT01$$0").getAttribute("data-ch_dt"); gObChartG=glObjTr.oGntt[strControl]; glObjTr.oGntt[strControl].GANTT.sDrag=""; glObjTr.oGntt[strControl].GANTT.sSesStrD1="SesStrD1"; glObjTr.oGntt[strControl].GANTT.sSlider=""; objMyChart=glObjTr.oGntt[strControl]; if(!bRefresh) 
 {
 return; } 
 var nDifMin = (new Date()).getTimezoneOffset();  gObChartG.nDiffMSec = nDifMin * 60 * 1000 ; objMyChart.loadGantt();  } 
 else if (!isEmpty(getObj(strControl+"$RB1C$$0")))
 {
 if(isEmpty(glObjTr.oRBChr[strControl]))
 {
 glObjTr.oRBChr[strControl]=new oJsChart(strControl);  }
 bFluid=(isFModeLayout())?1:0; glObjTr.oRBChr[strControl].ch_dt = getObj(strControl + "$RB1C$$0").getAttribute("data-ch_dt"); gObChartRB=glObjTr.oRBChr[strControl]; objMyChart=glObjTr.oRBChr[strControl]; objMyChart.loadRB(); }
 else if ((document.querySelectorAll("div[id*=\"" +strControl+"$CHRTJET\"]")).length)
 {
var sJetCNTR=strControl+"$CHRTJET";var ojJets=document.querySelectorAll("div[id*=\"" +sJetCNTR+"\"]");var nLength=ojJets.length; if (nLength)
 {
 var sOcc="";  for (var i=0;i<nLength;i++)
 {
 ojJets[i].innerHTML=""; sOcc=findChrtOccr(ojJets[i].id); if(!isEmpty(sOcc))
 {
 if (isEmpty(getObj(strControl+"$JetChart$$" + sOcc)))
 {
 glObjTr.oJet[strControl + "$CHRTJET$$" + sOcc] = new oJsChart(strControl + "$CHRTJET$$" + sOcc); gObChartJet=glObjTr.oJet[strControl + "$CHRTJET$$"+sOcc]; objMyJetChart=glObjTr.oJet[strControl + "$CHRTJET$$"+sOcc]; } 
 }
 }
 objMyJetChart.loadDVTJet(strControl + "$CHRTJET$$"+sOcc); }
 }
 else
{ 
 var sDTVCNTR=strControl+"$CHRTDVT"; var ojDVTs=document.querySelectorAll("div[id*=\"" +sDTVCNTR+"\"]");  if (ojDVTs.length)
 {
 var sOcc="";  for (var i in ojDVTs)
 {
 
 sOcc=findChrtOccr(ojDVTs[i].id); if(!isEmpty(sOcc))
 {
 if(bChartRender)
 {
 LoadDVTPSFT(strControl,sOcc); }
 else
 {
 setTimeout("LoadDVTPSFT(\'"+strControl+"\',"+ sOcc+")",500); }
 }

 }
 }
 return; }
 return;}

if(!bRefresh)
 {
 return; }

if(0)
 MainObj.appendChild(AD_test);if(biPad)
{
 var oImgCnt=getObj(strControl+"$ImgMp$$0"); if(!isEmpty(oImgCnt))
{

 oImgCnt.style.visibility="hidden"; }
}

if(isEmpty(glObjTr.oOrgChr[strControl]))
 glObjTr.oOrgChr[strControl]=new oJsChart(strControl); glObjTr.oOrgChr[strControl].ch_dt = getObj(strControl + "$OR1C$$0").getAttribute("data-ch_dt"); oGlOrg=glObjTr.oOrgChr[strControl]; gObChartOrg=oGlOrg; gObChartOrg.t1=t1; gObChartOrg.loadOrg();};var StX=0,StY=0;function AddToObj(MainO,ChildO)
{
 var oDiv=getObj(ChildO.id); if(oDiv&&oDiv.parentNode)
 {
 oDiv.parentNode.removeChild(oDiv);  }

 MainO.appendChild(ChildO);}

function createAsArray(DivPar,MyArr,sName)
{
if(isEmpty(DivPar))
 return 0;var Source=DivPar.getAttribute(sName);var AsAr= new Array; if(Source==null)
 return AsAr;var Ar=Source.split(",");if(Ar.length!= MyArr.length)
 return AsAr;for(var z=0;z<MyArr.length;z++)
 {
 AsAr[MyArr[z]]=replaceChar(Ar[z]); }
 return AsAr;}


function AddToAsArray(AsArray,DivPar,MyArr,sName)
{

var Source=DivPar.getAttribute(sName); if(Source==null)
 return ;var Ar=Source.split(",");if(Ar.length!= MyArr.length)
 return ;var sM="";for(var z=0;z<MyArr.length;z++)
 {
 
 AsArray[MyArr[z]]=Ar[z]; }
 
}





Array.prototype.IndexFirst=function(Mystr){
for(var s=0;s<this.length;s++)
 {
 if(this[s]==Mystr)
 {
 return s; }
 }
 return -1;};Array.prototype.FindIndexes=function(Mystr)
{
var s;var ArRes= new Array;for(s in this)
 {
 if(this[s]==Mystr)
 {
 ArRes.push(s); }
 } 
return ArRes;};Array.prototype.IndexLast=function(Mystr){
 var s=this.length;while(s--)
 {if(this[s]==Mystr)
 {
 return s; }
 }
 return -1; };Array.prototype.IsUnique=function()
{
 var UnArr=[]; var bRet;var MyTestAr=this.slice(); MyTestAr.sort(); for(var s=0;s<MyTestAr.length;s++)
 {
 if(MyTestAr[s]!=MyTestAr[s+1])
 {
 UnArr[UnArr.length]=MyTestAr[s]; }
 }
 if(this.length==(UnArr.length))
 return 1; else
 return 0;  };function byOrdDisp(a,b)
{
 return a.nOrder-b.nOrder;}



var jg_0, jg1, jg2, jg3, jg4;function ChHTML(x, i)
{
 x = document.body || null; jg1 = x && typeof x.insertAdjacentHTML != "undefined" && document.createElement; jg3 = (x && !jg1 &&
 typeof x.appendChild != "undefined" &&
 typeof document.createRange != "undefined" &&
 typeof (i = document.createRange()).setStartBefore != "undefined" &&
 typeof i.createContextualFragment != "undefined"); jg2 = jg1 && document.all && !window.opera; jg4 = jg3&& typeof x.style.MozOpacity != "undefined"; jg_0 = !!(jg1 || jg3);}

function creatMyCnv()
{
 var x = this.wnd.document.createRange(); x.setStartBefore(this.cnv); x = x.createContextualFragment(jg2? this.replHTML() : this.htm); if(this.cnv) this.cnv.appendChild(x); this.htm = "";}

function pCnE()
{
 if(this.cnv) this.cnv.insertAdjacentHTML("BeforeEnd", jg2? this.replHTML() : this.htm); this.htm = "";}

function pDc()
{
 this.wnd.document.write(jg2? this.replHTML() : this.htm); this.htm = '';}

function pntNo()
{
 var Test="";}

function createDv(x, y, w, h)
{
 this.htm += '<div style="position:absolute;z-index:200;'+
 'left:' + x + 'px;'+
 'top:' + y + 'px;'+
 'width:' + w + 'px;'+
 'height:' + h + 'px;'+
 'clip:rect(0,'+w+'px,'+h+'px,0);'+
 'background-color:' + this.color +
 (!jg4? ';overflow:hidden' : '')+
 ';"><\/div>';}

function createDvIe(x, y, w, h)
{
 this.htm += '%%'+this.color+';'+x+';'+y+';'+w+';'+h+';';}

function createDvPrt(x, y, w, h)
{
 this.htm += '<div style="position:absolute;z-index:1;'+
 'border-left:' + w + 'px solid ' + this.color + ';'+
 'left:' + x + 'px;'+
 'top:' + y + 'px;'+
 'width:0px;'+
 'height:' + h + 'px;'+
 'clip:rect(0,'+w+'px,'+h+'px,0);'+
 'background-color:' + this.color +
 (!jg4? ';overflow:hidden' : '')+
 ';"><\/div>';}

var _regex = /%%([^;]+);([^;]+);([^;]+);([^;]+);([^;]+);/g;function replHTML()
{
 return this.htm.replace(
 _regex,
 '<div style="overflow:hidden;position:absolute;z-index:1;background-color:'+
 '$1;left:$2;top:$3;width:$4;height:$5"></div>\n');}

function _htmPrtRpc()
{
 return this.htm.replace(
 _regex,
 '<div style="overflow:hidden;position:absolute;z-index:1;background-color:'+
 '$1;left:$2;top:$3;width:$4;height:$5;border-left:$4px solid $1"></div>\n');}

function createLn(x1, y1, x2, y2)
{
 if(x1 > x2)
 {
 var _x2 = x2; var _y2 = y2; x2 = x1; y2 = y1; x1 = _x2; y1 = _y2; }
 var dx = x2-x1, dy = Math.abs(y2-y1),
 x = x1, y = y1,
 yIncr = (y1 > y2)? -1 : 1; if(dx >= dy)
 {
 var pr = dy<<1,
 pru = pr - (dx<<1),
 p = pr-dx,
 ox = x; while(dx > 0)
 {--dx; ++x; if(p > 0)
 {
 this.createDv(ox, y, x-ox, 1); y += yIncr; p += pru; ox = x; }
 else p += pr; }
 this.createDv(ox, y, x2-ox+1, 1); }

 else
 {
 var pr = dx<<1,
 pru = pr - (dy<<1),
 p = pr-dy,
 oy = y; if(y2 <= y1)
 {
 while(dy > 0)
 {--dy; if(p > 0)
 {
 this.createDv(x++, y, 1, oy-y+1); y += yIncr; p += pru; oy = y; }
 else
 {
 y += yIncr; p += pr; }
 }
 this.createDv(x2, y2, 1, oy-y2+1); }
 else
 {
 while(dy > 0)
 {--dy; y += yIncr; if(p > 0)
 {
 this.createDv(x++, oy, 1, y-oy); p += pru; oy = y; }
 else p += pr; }
 this.createDv(x2, oy, 1, y2-oy+1); }
 }
}





function create0(left, top, width, height)
{
 var a = (++width)>>1, b = (++height)>>1,
 wod = width&1, hod = height&1,
 cx = left+a, cy = top+b,
 x = 0, y = b,
 ox = 0, oy = b,
 aa2 = (a*a)<<1, aa4 = aa2<<1, bb2 = (b*b)<<1, bb4 = bb2<<1,
 st = (aa2>>1)*(1-(b<<1)) + bb2,
 tt = (bb2>>1) - aa2*((b<<1)-1),
 w, h; while(y > 0)
 {
 if(st < 0)
 {
 st += bb2*((x<<1)+3); tt += bb4*(++x); }
 else if(tt < 0)
 {
 st += bb2*((x<<1)+3) - aa4*(y-1); tt += bb4*(++x) - aa2*(((y--)<<1)-3); w = x-ox; h = oy-y; if((w&2) && (h&2))
 {
 this.create0Qds(cx, cy, x-2, y+2, 1, 1, wod, hod); this.create0Qds(cx, cy, x-1, y+1, 1, 1, wod, hod); }
 else this.create0Qds(cx, cy, x-1, oy, w, h, wod, hod); ox = x; oy = y; }
 else
 {
 tt -= aa2*((y<<1)-3); st -= aa4*(--y); }
 }
 w = a-ox+1; h = (oy<<1)+hod; y = cy-oy; this.createDv(cx-a, y, w, h); this.createDv(cx+ox+wod-1, y, w, h);}






function jsDraw(cnv, wnd)
{
 this.setColor = function(x)
 {
 this.color = x.toLowerCase(); }; this.setStroke = function(x)
 {
 this.stroke = x; if(!(x+1))
 {
 this.getLine = createLnDott; this.create0 = create0Dott; }
 else if(x-1 > 0)
 {
 this.getLine = createLn2D; this.create0 = create02D; }
 else
 {
 this.getLine = createLn; this.create0 = create0; }
 }; this.setPrintable = function(arg)
 {
 this.printable = arg;jg2=0; if(jg2)
 {
 this.createDv = createDvIe; this._replHTML = arg? _htmPrtRpc : replHTML; }
 else this.createDv = arg? createDvPrt : createDv; }; this.clear = function()
 {
 this.htm = ""; if(this.cnv) this.cnv.innerHTML = ""; }; this.setStroke(1); this.color = "#000000"; this.htm = ""; this.wnd = wnd || window; if(!jg_0) ChHTML(); if(jg_0)
 {
 if(cnv)
 {
 if(typeof(cnv) == "string")
 this.cont = document.all? (this.wnd.document.all[cnv] || null)
 : document.getElementById? (this.wnd.document.getElementById(cnv) || null)
 : null; else if(cnv == window.document)
 this.cont = document.getElementsByTagName("body")[0]; else this.cont = cnv; this.cnv = this.wnd.document.createElement("div"); this.cnv.style.fontSize='0px'; this.cont.appendChild(this.cnv); this.paint = jg3? creatMyCnv : pCnE; }
 else
 this.paint = pDc; }
 else
 this.paint = pntNo; this.setPrintable(false);}

function _CompInt111(x, y)
{
 return(x - y);}







function _chkDHTM222(x, i)
{
 x = document.body || null; jg1 = x && typeof x.insertAdjacentHTML != "undefined" && document.createElement; jg3 = (x && !jg1 &&
 typeof x.appendChild != "undefined" &&
 typeof document.createRange != "undefined" &&
 typeof (i = document.createRange()).setStartBefore != "undefined" &&
 typeof i.createContextualFragment != "undefined"); jg2 = jg1 && document.all && !window.opera; jg4 = jg3 && typeof x.style.MozOpacity != "undefined"; jg_0 = !!(jg1 || jg3);}

function _pntCnvDom()
{
 var x = this.wnd.document.createRange(); x.setStartBefore(this.cnv); x = x.createContextualFragment(jg2? this._htmRpc() : this.htm); if(this.cnv) this.cnv.appendChild(x); this.htm = "";}

function _pntCnvIe()
{
 if(this.cnv) this.cnv.insertAdjacentHTML("BeforeEnd", jg2? this._htmRpc() : this.htm); this.htm = "";}

function _pntDoc()
{
 this.wnd.document.write(jg2? this._htmRpc() : this.htm); this.htm = '';}

function _pntN()
{
 ;}

function _mkDiv(x, y, w, h)
{
 this.htm += '<div style="position:absolute;'+
 'left:' + x + 'px;'+
 'top:' + y + 'px;'+
 'width:' + w + 'px;'+
 'height:' + h + 'px;'+
 'clip:rect(0,'+w+'px,'+h+'px,0);'+
 'background-color:' + this.color +
 (!jg4 ? ';overflow:hidden' : '')+
 ';"><\/div>';}


function _mkDivIe(x, y, w, h)
{
 this.htm += '%%'+this.color+';'+x+';'+y+';'+w+';'+h+';';}

function _mkDivPrt(x, y, w, h)
{
 this.htm += '<div style="position:absolute;'+
 'border-left:' + w + 'px solid ' + this.color + ';'+
 'left:' + x + 'px;'+
 'top:' + y + 'px;'+
 'width:0px;'+
 'height:' + h + 'px;'+
 'clip:rect(0,'+w+'px,'+h+'px,0);'+
 'background-color:' + this.color +
 (!jg4? ';overflow:hidden' : '')+
 ';"><\/div>';}

var _regex = /%%([^;]+);([^;]+);([^;]+);([^;]+);([^;]+);/g;function _htmRpc()
{
 return this.htm.replace(
 _regex,
 '<div style="overflow:hidden;position:absolute;background-color:'+
 '$1;left:$2px;top:$3px;width:$4px;height:$5px"></div>\n');}

function _htmPrtRpc()
{
 return this.htm.replace(
 _regex,
 '<div style="overflow:hidden;position:absolute;background-color:'+
 '$1;left:$2;top:$3;width:$4;height:$5;border-left:$4px solid $1"></div>\n');}





function _mkOv(left, top, width, height,prmt)
{
 
 var a = (++width)>>1, b = (++height)>>1,
 wod = width&1, hod = height&1,
 cx = left+a, cy = top+b,
 x = 0, y = b,
 ox = 0, oy = b,
 aa2 = (a*a)<<1, aa4 = aa2<<1, bb2 = (b*b)<<1, bb4 = bb2<<1,
 st = (aa2>>1)*(1-(b<<1)) + bb2,
 tt = (bb2>>1) - aa2*((b<<1)-1),
 w, h; while(y > 0)
 {
 if(st < 0)
 {
 st += bb2*((x<<1)+3); tt += bb4*(++x); }
 else if(tt < 0)
 {
 st += bb2*((x<<1)+3) - aa4*(y-1); tt += bb4*(++x) - aa2*(((y--)<<1)-3); w = x-ox; h = oy-y; if((w&2) && (h&2))
 {
 
 
 }
 else
 
 this._mkOvQds(cx, cy, x-1, oy, w, h, wod, hod,prmt); ox = x; oy = y; }
 else
 {
 tt -= aa2*((y<<1)-3); st -= aa4*(--y); }
 }
 w = a-ox+1; h = (oy<<1)+hod; y = cy-oy; if((prmt==1)||(prmt==2))
 this._mkDiv(cx-a, y, w, h); else
 this._mkDiv(cx+ox+wod-1, y, w, h);}



function createCanv(cnv, prmt)
{
 this.setColor = function(x)
 {
 this.color = x.toLowerCase(); }; this.setStroke = function(x)
 {
 this.stroke = x; this._mkOv = _mkOv; }; this.setPrintable = function(arg)
 {
 this.printable = arg; if(jg2) 
 {
 this._mkDiv = _mkDivIe; this._htmRpc = arg? _htmPrtRpc : _htmRpc; }
 else this._mkDiv = arg? _mkDivPrt : _mkDiv; }; this.MyArc = function(x, y, w, h,prmt)
 {
 this._mkOv(x, y, w, h,prmt); }; this.clear = function()
 {
 this.htm = ""; if(this.cnv) this.cnv.innerHTML = ""; }; this._mkOvQds = function(cx, cy, x, y, w, h, wod, hod,prmt)
 {
 
 var xl = cx - x, xr = cx + x + wod - w, yt = cy - y, yb = cy + y + hod - h; if(xr > xl+w)
 {
 if(prmt==0)
 this._mkDiv(xr, yt, w, h);  if(prmt==3) 
 this._mkDiv(xr, yb, w, h);  }
 else
 w = xr - xl + w; if(prmt==1)
 this._mkDiv(xl, yt, w, h);  if(prmt==2)
 this._mkDiv(xl, yb, w, h);  }; this.setStroke(1); this.color = "#000000"; this.htm = ""; this.wnd = window; if(!jg_0) ChHTML(); if(jg_0)
 {
 if(cnv)
 {
 if(typeof(cnv) == "string")
 this.cont = document.all? (this.wnd.document.all[cnv] || null)
 : document.getElementById? (this.wnd.document.getElementById(cnv) || null)
 : null; else if(cnv == window.document)
 this.cont = document.getElementsByTagName("body")[0]; else this.cont = cnv; this.cnv = this.wnd.document.createElement("div"); this.cnv.style.fontSize='0px'; this.cont.appendChild(this.cnv); this.paint = jg3? _pntCnvDom : _pntCnvIe; }

 }
 this.setPrintable(false);}








































































































































































































































































































































function CreateRoundCorner(sCntr,oP,prmt,clr)
{

var MdlPar= oP.clientWidth/2;var BtPar=0;var Xstart,Ystart,nRad;var myChart=glObjTr.oOrgChr[sCntr];nRad=7;if((prmt==3)||(prmt==2))
{
if(bIEm8 && !bIEm9)
{
 BtPar=oP.clientHeight - 7;}
else if(bIEm9)
{
 BtPar=oP.clientHeight + 4;}
else
{
 BtPar=oP.clientHeight;}
}
else
 {
 BtPar-=myChart.nVertSpace/2; if(bSafari)
 BtPar-=3; else if(bIE)
 BtPar+=1; else 
  BtPar-=3;  }
if((prmt==3)||(prmt==0))
 {
 MdlPar-=(nRad*2);}


var A=new createCanv(oP.id,prmt); A.setColor(clr);  A.setStroke(1);A.MyArc( MdlPar, BtPar+1,nRad*2, nRad*2,prmt);A.paint();}

function CreateRoundCornerHor(sCntr,oP,prmt,clr)
{

var MdlPar= oP.clientHeight/2;var BtPar=0;var nRad=7;var myChart=glObjTr.oOrgChr[sCntr];if((prmt==3)||(prmt==0))
{
if(bIEm8 && !bIEm9)
{
 BtPar=oP.clientWidth -2;}
else if(bIEm9)
{
 BtPar=oP.clientWidth +4;}
else
{
 BtPar=oP.clientWidth;}
}
else
 {
 if(bIE)
 {
 if(bIEm8)
 BtPar-=myChart.nVertSpace/2; else
 BtPar-=myChart.nVertSpace/2 -2; }
 else if(bMozila || bSafari)
 BtPar-=myChart.nVertSpace/2; else
 BtPar-=myChart.nVertSpace/2 + 2; if(bSafari)
 BtPar-=3; else if(bIE)
 BtPar+=1; else 
  BtPar-=1; }
 
if((prmt==2)||(prmt==3))
 {
  MdlPar-=(nRad*2); }
var WdPar=nRad*2;if (bMozila)
{
 BtPar-=1; MdlPar+=1; WdPar+=1;}

if (bSafari||bChrome)
 MdlPar+=1; var A=new createCanv(oP.id,prmt); A.setColor(clr);  A.setStroke(1); A.MyArc(BtPar+1,MdlPar, WdPar, nRad*2,prmt); A.paint();}





function GetElementleft(object)
{
var nLeft=object.offsetLeft;var MyParent;  MyParent=object.parentNode;while(MyParent!=null)
{ 
if(MyParent.parentNode!=null)
 nLeft+=MyParent.offsetLeft; if(bFluid&&(MyParent.tagName=="TABLE"))
 break; MyParent=MyParent.parentNode;}



return nLeft;}
var m_undef;function isEmpty(strIn)
{
if((strIn==m_undef)||(strIn.length==0))
 return 1;return 0;}
function GetElementTop(object)
{
var nTop=object.offsetTop;var MyParent=object.offsetParent;while(MyParent!=null)
{ 
 if(MyParent.parentNode!=null)
 nTop+=MyParent.offsetTop; if(bFluid&&(MyParent.tagName=="TABLE"))
 break; MyParent=MyParent.offsetParent;}
return nTop;}

var aJg=new Array();function FindCntrOC(Allid)
{
var temp;if(!isEmpty(Allid))
 temp=Allid.substring(0,Allid.indexOf('$'));return temp;}

function MainLink(nr, gg, sCntr, sChDt) {
 var sFormName, ServStr; if (biPad && (_nBRCRM_T < 0)) {
 return; }
 glObjTr.sOpen = ""; glObjTr.bCrtCtxMn = 0; glObjTr.occNmb = "";  _nBRCRM_T = -1;  var myChart; if(isEmpty(sChDt))
 {
 myChart=glObjTr.oOrgChr[sCntr]; if(isEmpty(myChart)) 
 {
 myChart=glObjTr.oRBChr[sCntr]; }
 if(!isEmpty(myChart))
 sChDt=myChart.ch_dt;  else
 return;  }
 if(nr=="jet")
 {
 sFormName=sChDt; ServStr=sCntr; }
 else if(nr.substring(0,3)=="RGG")
 {
 sFormName=sCntr.substring(0,sCntr.lastIndexOf(sChDt)); ServStr=sChDt+ MyDiv + nr + MyDiv + gg+"A"; }
 else
 {
 sFormName=sCntr.substring(0,sCntr.lastIndexOf(sChDt)); ServStr = sChDt + MyDiv + nr + MyDiv + gg; }
 var DDObj = getObj(sCntr + "$DDBox" + chM + "$$0"); if (DDObj) {
 DDObj.parentNode.removeChild(DDObj); }
 _bPhotoUp = false;  var oTShadow = getObj(sCntr + "$DDBShadow" + chM + "$$1"); if (!isEmpty(oTShadow))
 {
 oTShadow.parentNode.removeChild(oTShadow); oTShadow = null; }
eval("goToServer_Ch_"+eval("sFormName")+"(ServStr)"); _bPhotoUp = false;}
function MyNdOrd ( NdId, nOrder ) 
 { 
 this.Ndid = NdId;  this.nOrder = nOrder;  }







































function EndMoveErr()
{
 oError=null; document.body.onmousemove=null; document.body.onmouseup=null; }


function MoveErr(e)
{
 if(isEmpty(oError))
 return false; var ev=!bIE?e:event; var Mysource=!bIE?ev.target:ev.srcElement;  var MainObj=document.body; var mainLeft=GetElementleft(MainObj)-MainObj.scrollLeft; var mainTop=GetElementTop(MainObj)-MainObj.scrollTop; var nMyX,nMyY; if(biPad)
 {
 nMyX=ev.targetTouches[0].pageX; nMyY=ev.targetTouches[0].pageY; }
 else
 {
 nMyX=ev.clientX; nMyY=ev.clientY; }

 var xPP=nMyX + document.body.scrollLeft-mainLeft-3; var yPP=nMyY+document.body.scrollTop-mainTop-3; if(!bIE)
 {
 oError.style.left=xPP-StX + "px"; oError.style.top=yPP-StY + "px";  }
 else
 {
 oError.style.left=xPP-StX + "px"; oError.style.top=yPP-StY + "px"; }

 return false;}

var oError=null;var nErr=0;function StMoveEr(sCntr)
{
 oError=getObj(sCntr+"$ChMsgCl$$0"); if(isEmpty(oError))
 return 0; else
 {
 if(!bIE)
 {
 StX=100; StY=5; }
 else
 {
 StX=event.offsetX; StY=event.offsetY; }
 if(!biPad)
 {
 document.body.onmousemove=MoveErr; document.body.onmouseup=EndMoveErr; }
 else
 {
 document.body.ontouchmove=MoveErr; document.body.onouchend=EndMoveErr; }
 return 1; }
}

function ChartErr(sMsg, sTitle, strCntr, nModal, bAlert)
{
 var sM_M = ""; var sM_D = ""; var sM_C = ""; var sM_I = ""; var sM_O = ""; if (isEmpty(sMsg))
 {
 sMsg = "Empty!"; }
 sMsg = replaceChar(sMsg); if (isEmpty(sTitle))
 {
 sTitle = sM_M; }
 if (bAlert)
 {
 alert(sMsg); return; }
 var oPopMask = null; if (nModal)
 {
 oPopMask = getObj("popupMask"); }
 if ((oPopMask) && (oPopMask.style.display != "block"))
 {
 oPopMask.style.display = "block"; oPopMask.style.height = window.screen.height + "px"; oPopMask.style.width = window.screen.width + "px"; }
 var objPar = getObj(strCntr + "$ChMsg$$0"); if (!isEmpty(objPar))
 {
 sM_M = objPar.getAttribute("M_M"); if (isEmpty(sM_M))
 {
 sM_M = "Message"; }
 sM_D = objPar.getAttribute("M_D"); if (isEmpty(sM_D))
 {
 sM_D = "Drag to move"; }
 sM_C = objPar.getAttribute("M_C"); if (isEmpty(sM_C))
 {
 sM_C = "Close"; }
 sM_I = objPar.getAttribute("M_I"); if (isEmpty(sM_I))
 {
 sM_I = "/cs/ps/cache/PT_PORTAL_IC_CLOSE_1.gif"; }
 sM_O = objPar.getAttribute("M_O"); if (isEmpty(sM_O))
 {
 sM_O = "OK"; }
 }
 var stpopupContainer = "PADDING-RIGHT: 0px;PADDING-LEFT: 0px; Z-INDEX: 375; LEFT: 0px; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; opacity: 1; width:453px; display: block; height:120px; ";  var stButton = " PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 10px; PADDING-TOP: 10px; "; var MyCont = document.createElement("DIV"); MyCont.style.position = "absolute"; MyCont.id = strCntr + "$ChMsgCl$$0"; MyCont.style.height = "130px"; MyCont.style.top = "50%"; MyCont.style.left = "50%"; var sInnerHTML = "<div style=\"" + stpopupContainer + "\" class='PTPOPUP_INNER'>";  if(!biPad)
 {
 sInnerHTML += "<div style=\'FLOAT: left; HEIGHT: 19px; width:100%; \' class='PTPOPUP_HEADER' onmousedown=StMoveEr(\'" + strCntr + "\'); >";  }
 else
 {
 sInnerHTML += "<div style=\'FLOAT: left; HEIGHT: 19px; width:100%; \' class='PTPOPUP_HEADER' ontouchstart=StMoveEr(\'" + strCntr + "\'); >"; }
 sInnerHTML += "<div onmousedown=StMoveEr(\'" + strCntr + "\'); style=\'FLOAT: left; FONT-WEIGHT: bold;FONT-SIZE:10pt;CURSOR: move;FONT-FAMILY:Arial;font-color:#ffffff;WIDTH: 406px;\' title=\"" + sM_D + "\" alt=\"" + sM_D + "\" >";  sInnerHTML += "<span class=\'PTPOPUP_TITLE\'>" + sTitle + "</span>"; sInnerHTML += "</div>";  sInnerHTML += "<div style=\'FLOAT: right; CURSOR: hand\'>";  sInnerHTML += "<div class=\'titleButton\' >";  sInnerHTML += "<img title=\'" + sM_C + "\' alt=\'" + sM_C + "\' onclick=CloseChMsg(\'" + strCntr + "\'); src=\'" + sM_I + "\' />";  sInnerHTML += "</div>";  sInnerHTML += "</div>";  sInnerHTML += "</div>";  sInnerHTML += "<div style=\"display:block;BACKGROUND-COLOR: #ffffff;HEIGHT:100px;\" >";  sInnerHTML += "<div style=\"PADDING-RIGHT: 10px; PADDING-LEFT: 10px; PADDING-BOTTOM: 10px; PADDING-TOP: 10px;HEIGHT: 60px;\">";  sInnerHTML += "<span class=\"popupText\"><br>" + sMsg + " </span>"; sInnerHTML += "</div>";  sInnerHTML += "<div align=\"center\" style=\"margin: 0pt;" + stButton + "\">";  sInnerHTML += "<a class=\"PSPUSHBUTTON\" style=\"background-color: transparent;\">"; sInnerHTML += "<span style=\"background-color: transparent;\">"; sInnerHTML += "<input class=\"PSPUSHBUTTONTBOK\" type=\"button\" title=\"" + sM_O + "\" alt=\"" + sM_O + "\" tabindex=\"1\" value=\"OK\" onclick=\"CloseChMsg(\'" + strCntr + "\');\" />"; sInnerHTML += "</span>"; sInnerHTML += "</a>"; sInnerHTML += "</div>";  sInnerHTML += "</div>";  sInnerHTML += "</div>";  var nH = "100px"; var nW = "453px"; var nWB = "433px"; if (!bIE)
 {
 nH = "105px"; nW = "455px"; nWB = "435px"; }
 sInnerHTML += "<div style='height:130px;width:" + nW + ";border:1px;left:7px;top:5px;position:absolute;z-index:-1;opacity:0.7 5;' >";  sInnerHTML += "<div class='popupShadowTopRightCorner' style='height:10px;background-repeat:no-repeat;'>&nbsp;</div>";  sInnerHTML += "<div class='popupShadowTop' style='height:" + nH + ";'>&nbsp;</div>"; sInnerHTML += "<div class='popupShadowBottom' style='height:10px;'>";  sInnerHTML += "<div class='popupShadowBottomLeftCorner' style='height:10px;width:10px;'>&nbsp;</div>"; sInnerHTML += "<div class='popupShadowBottomMiddle' style='height:10px;width:" + nWB + ";'>&nbsp;</div>"; sInnerHTML += "<div class='popupShadowBottomRightCorner' style='height:10px;width:10px;'>&nbsp;</div>"; sInnerHTML += "</div>";  sInnerHTML += "</div>";  MyCont.innerHTML = sInnerHTML; document.body.appendChild(MyCont); MyCont.setAttribute("nM",nModal);  MyCont.style.top = MyCont.offsetTop - (60 - nErr * 25) + "px";  MyCont.style.left = MyCont.offsetLeft - (226 - nErr * 50) + "px";  MyCont.style.zIndex = 20000; nErr++;}


function CloseChMsg(sCntr)
{

 var oPopMask=null;  oPopMask=getObj("popupMask"); if((oPopMask)&&(nErr==1))
 {
 oPopMask.style.display="none"; }
 var oChMsg=getObj(sCntr+"$ChMsgCl$$0"); if(isEmpty(oChMsg))
 return; var nM=oChMsg.getAttribute("nM"); document.body.removeChild(oChMsg); nErr--; if(nErr<0)
 nErr=0; if(nM=="2")
 {
 var ControlObj=document.getElementById(sCntr+"$OR1CT$$0"); if(ControlObj)
 {
 ControlObj.style.display="none"; }
 var oChartPage=getObj(sCntr+"$ORtb$$0"); if (!isEmpty(oChartPage))
 {
 oChartPage.style.display="none"; }
 }
}




function replaceChar(sOrig)
{
var sRes="";var ExregBR=new RegExp('&lt;BR/>',"ig");var Exreg=new RegExp('<',"g");sRes=sOrig.replace(Exreg,"&lt;");sRes=sRes.replace(ExregBR,'<BR/>');return sRes;}





function outItem(o)
{
o.style.background="transparent";}
function overItem(o)
{
o.style.background="#f9ffbd";}



























































function TakeCurrentStyle_CSS3(elem, prop)
{
 if( document.defaultView.getComputedStyle )
 { 
 var ms= document.defaultView.getComputedStyle(elem, null); return ms.getPropertyValue(prop);  }
else
 return 0;}

function ChartAdjust(sContr,view)
{
if(!isEmpty(view))
 var MyObj=getObj(sContr+"$OR1C_"+view+"$$0");else
 var MyObj=getObj(sContr+"$OR1C$$0"); if(MyObj)
 { 
 if((glObjTr.bCrtCtxMn)||(!(glObjTr.isEmpty(glObjTr.sOpen))))
 {
 return; }
 var nLeft= MyObj.getAttribute("LftCh"); var nTop=MyObj.getAttribute("TpCh"); if(nLeft)
 {
 MyObj.scrollLeft=nLeft; }
 if(nTop)
 {
 MyObj.scrollTop=nTop; }
 

 if(bIE && (_aRadCntr[sContr]>0) && (nLeft||nTop))
 {
 var nBl=DDButtons.length; for(var x=0;x<nBl;x++) 
 {
 var VMLButtonobj=getObj(sContr+"$"+DDButtons[x]+"$$0"); var VMLButtonobjClone=getObj(sContr+"$"+DDButtons[x]+"$$1"); if((!isEmpty(VMLButtonobj))&&(!isEmpty(VMLButtonobjClone)))
 {
 var oStr=DDButtons[x];  var sNdID=oStr.substr(0,(oStr.length-1)); var oNd=getObj(sContr+"$"+sNdID+"$$0");  var TopParent=oNd.offsetTop; var LeftParent=oNd.offsetLeft; var nTop=GetElementTop(VMLButtonobj)-MyObj.offsetTop; var nL=VMLButtonobj.offsetParent.offsetLeft+VMLButtonobj.offsetLeft + LeftParent;  VMLButtonobjClone.style.left= nL + "px"; VMLButtonobjClone.style.top=nTop + "px";  }
 }
 }
 }
}

function checkController(strCont)
{
var myChart=glObjTr.oOrgChr[strCont];if(myChart && !isEmpty(myChart.InitialView) && myChart.currentView!=myChart.InitialView)
{
 var mainString=strCont+"$OR1C_"+ myChart.currentView+ "$$0"; var MainObj=getObj(mainString);}
else
 var MainObj=getObj(strCont+"$OR1C$$0");var ControlObj=document.getElementById(strCont+"$OR1CT$$0");if(!bIE && (!isEmpty(ControlObj))&&(ControlObj.childNodes.length>=2)&&(ControlObj.childNodes[1].childNodes.length))
{
 ControlObj.childNodes[1].childNodes[0].onfocus=""; ControlObj.childNodes[1].childNodes[1].onfocus=""; ControlObj.childNodes[1].childNodes[2].onfocus=""; ControlObj.childNodes[1].childNodes[3].onfocus=""; ControlObj.childNodes[1].childNodes[4].onfocus="";}

if(isEmpty(MainObj)||isEmpty(ControlObj))
 return 0;if(!biPad && bSafari && (!isEmpty(ControlObj))&&(ControlObj.childNodes.length>=2)&&(ControlObj.childNodes[1].childNodes.length))
 {
 ControlObj.childNodes[1].id=ControlObj.childNodes[1].id; ControlObj.childNodes[1].name=ControlObj.childNodes[1].name; ControlObj.childNodes[0].setAttribute("usemap","#"+ControlObj.childNodes[1].name); }

var OrgCrs=MainObj.getAttribute("PCurs");ControlObj.style.top=MainObj.offsetTop + "px"; var minCH=0;var actHt=0;var oSchemaObj=document.getElementById(strCont+"$SCTL$$0");if(!isEmpty(oSchemaObj))
 oSchemaObj.style.zIndex=1500;var oSchemaShadowObj=document.getElementById(strCont+"$SCTL$$1");var nSize=68;if(MainObj.scrollWidth>MainObj.clientWidth || MainObj.scrollHeight>MainObj.clientHeight)
 {

 if ((biPad||bSafari)&&(!isEmpty(oSchemaObj))) 
 oSchemaObj.style.left=MainObj.offsetLeft+5 + "px"; if (parseInt(getObj(strCont+"$OR1C$$0").getAttribute("ScrlTyp"))==1)
 {
 ControlObj.style.visibility="visible"; if(!biPad)
 ControlObj.style.left=MainObj.offsetLeft + 5 + "px"; MainObj.style.cursor="url("+OrgCrs+"),default"; }
 if(!isEmpty(oSchemaObj))
 {
 
 var tpC=ControlObj.offsetHeight;  if(tpC<30)
 {
 
 tpC=nSize; }
 oSchemaObj.style.top=tpC + "px"; var nW=ControlObj.offsetWidth; if(nW<30)
 nW=nSize; var lfC= (nW-oSchemaObj.offsetWidth)/2.0-2; if(!biPad&&lfC>2)
 oSchemaObj.style.left=lfC +"px"; if(bIE)
 {
 if(!isEmpty(oSchemaShadowObj))
 {
 oSchemaShadowObj.style.top=tpC + "px"; oSchemaShadowObj.style.left=lfC + "px"; }
 }
 minCH+=GetElementTop(oSchemaObj); minCH+=oSchemaObj.scrollHeight;  }
 else
 {
 if (parseInt(myChart.MainObj.getAttribute("ScrlTyp"))==1)
 {
 minCH+=GetElementTop(ControlObj); minCH+=ControlObj.scrollHeight; }
 }
 }
else
 {
 ControlObj.style.visibility="hidden"; MainObj.style.cursor="default"; if(!isEmpty(oSchemaObj))
 {
 oSchemaObj.style.top="10px"; if ((bMozila)||(biPad)) 
 oSchemaObj.style.left=MainObj.offsetLeft+5 + "px"; if(bIE)
 {
 if(!isEmpty(oSchemaShadowObj))
 {
 oSchemaShadowObj.style.top="10px"; }
 }
 minCH+=oSchemaObj.offsetTop; minCH+=oSchemaObj.scrollHeight; }
 }
actHt=GetElementTop(MainObj)+parseInt(MainObj.getAttribute("Height"));if ((actHt < (minCH+1)) && myChart.nOptimizeVerticalSpace==0)
 {
 ChartErr('Chart height is too small. Please increase the chart height.',"",strCont,2,0); return -1; }
return 0;}

function preventEventPropagation(ev)
{
 if (ev.preventDefault)
 {
 ev.preventDefault(); }
 if (ev.stopPropagation)
 {
 ev.stopPropagation(); }
 ev.returnValue = false; ev.cancelBubble = true; ev.cancel = true;}




function checkEnterKey(e)
{
 var ev=!bIE?e:event; var key=ev.keyCode; var Val1 = false; if(key==13)
 { 
 Val1=true; }
return Val1;}

function oJsChart(sCntr)
 {
 this.sCntr=sCntr; this.niPadDelay=500; this.SMvPxTop=0; this.yCoord=0; this.nPglt=-1; this.nModal=-1; this.nTop=0; this.nLeft=0; this.nDiffMSec=0; this.bIE; this.bIE9; this.biPad; this.PEmptyImg; this.chM; this.strControl; this._aStylesOrg; this.GANTT=new Array(); this.graphInstanceMap = new Object(); this.iPadSubmit=function(nr, gg, sCntr)
 { 
 setTimeout(function(){MainLink(nr, gg, sCntr,this.ch_dt);},this.niPadDelay);  }; this.bShMn=false; this.iPadShowM=function(sIdEsc, sCntr, sNId, nDescr, YLink, sIdI, sIdCh,nDisp,o)
 { 
 setTimeout(function(){gObChartOrg.showNewMenuList(sIdEsc, sCntr, sNId, nDescr, YLink, sIdI, sIdCh,nDisp,o );},this.niPadDelay);  }; this.disableSelection= function(oTarget)
 {
 if (typeof oTarget.onselectstart!="undefined") 
 oTarget.onselectstart=function(){return false;}; else if (typeof oTarget.style.MozUserSelect!="undefined") 
 oTarget.style.MozUserSelect="none"; else 
 oTarget.onmousedown=function(){return false;}; oTarget.style.cursor = "default"; };}

oJsChart.prototype.AddCss=function(ob, style)
{
 if(!isEmpty(ob))
 ob.style.cssText += ';' + style;}


oJsChart.prototype.PgltLeft=function(obj,nFg)
{
var nLeft=obj.offsetLeft;var oParent; var sPgBd="ptpgltli";if(!nFg)
 sPgBd="ptpglt"; oParent=obj.parentNode;while(oParent!=null)
{ 
 if(oParent.parentNode!=null)
 nLeft+=oParent.offsetLeft; if((oParent.id)&&(!(oParent.id).indexOf(sPgBd)))
 break;  oParent=oParent.parentNode;} 
return nLeft;}
oJsChart.prototype.PgltTop=function(obj,nFg)
{
 var nTop=0; if(nFg)
 {
 var sPgBd="ptpgltli";  var oParent=obj.offsetParent; while(oParent!=null)
 { 
 
 if(!(oParent.id).indexOf(sPgBd))
 {
 nTop=oParent.offsetTop; break; }
 oParent=oParent.offsetParent; }
 return nTop; }
 else
 {
 var nTop=obj.offsetTop;  var sPgBd="ptpglt"; var oParent=obj.offsetParent; while(oParent!=null)
 { 
 if(oParent.parentNode!=null)
 nTop+=oParent.offsetTop; if(!(oParent.id).indexOf(sPgBd))
 { 
 break; }
 oParent=oParent.offsetParent; }
 return nTop; }
}





oJsChart.prototype.displJSND=function(strControl)
{
 var myChart=new Object(); var sCntr = strControl; var oT = getObj(sCntr + "$GNT01_VS$$0"); var jsDT = oT.getAttribute("JsDt"); myChart=glObjTr.oGntt[strControl]; var sClnJsDT = myChart.getCleanJson(jsDT); try
 { 
 var ojDT =ptjq2x.parseJSON(sClnJsDT); }
 catch(err)
 {
 var sErrorMsg="GANTT "; if(bIE)
 {
 sErrorMsg+=err; }
 else
 {
 sErrorMsg+=err.message; }
 
 ChartErr(sErrorMsg, " GANTT ", sCntr, 2, 0); return 0; }
 ojDT.GR11=22;  if (isEmpty(ojDT))
 {
 alert("NO JSON"); return; }
 glObjTr.oGntt[strControl].jd = ojDT; var sId = sCntr + "$GNT01_VS$$0"; var sIch = sCntr + "$GNT01_CH01$$0"; var ojC = ptjq2x("[id=\"" + sIch + "\"]"); if (isEmpty(oT))
 {
 window.alert("GNT01_VS does not exist"); return; }
 oT.innerHTML = "";  oT.style.width = myChart.jd.GW05 + "px"; oT.style.height = myChart.jd.GH06 + "px"; oT.className = ""; var nType = myChart.jd.G004; if (!nType)
 {
 myChart.generateGANTT(); }
 else if (nType == 1)
 { 
 myChart.generateGANTT(); }
 else
 { 
 myChart.generateGANTT(); }
 return;};oJsChart.prototype.loadCSS=function(s)
{
 if(isEmpty(s))
 return; var sCntr=this.sCntr; var oHead= document.getElementsByTagName('head')[0]; if(isEmpty(oHead))
 return; var oStyle= document.createElement('link'); oStyle.id="DVTcss"; oStyle.type= 'text/css'; oStyle.rel="stylesheet"; oStyle.href=s; oHead.appendChild(oStyle);};oJsChart.prototype.loadScript=function(s,callback)
{
if(isEmpty(s))
 return;var sCntr=this.sCntr; var aAllScript=document.querySelectorAll("script[src*=\""+s+"\"]"); if(!isEmpty(aAllScript)&&(typeof(DvtSvgUtils)!='undefined')&&(typeof(ApplicationEventHandler)!='undefined'))
 {
 callback(sCntr); return; }

var oHead= document.getElementsByTagName('head')[0];var oScript= document.createElement('script');var nFileName=s.lastIndexOf("/");var sFileName="PTCH_"; if(nFileName)
 {
 sFileName+=s.substr(nFileName+1); }








 oScript.id=sFileName;oScript.type= 'text/javascript';if(oScript.readyState)
{
 oScript.onreadystatechange=function() 
 {
 if(oScript.readyState=="loaded"||oScript.readyState=="complete")
 {
 oScript.onreadystatechange=null; if(typeof(DvtSvgUtils)!='undefined')
 callback(sCntr); else
 {

 this.loadScript(s,callback); }
 }
 }
}
else
{
 oScript.onload=function()
 {
 if (typeof(callback) === 'function')
 {
 callback(sCntr); }
 };}
 oScript.src= s; oHead.appendChild(oScript);};oJsChart.prototype.inArray = function(elem,array)
{ var len = array.length; for(var i = 0 ; i < len;i++) { if(array[i] == elem){return i;} } return -1; };oJsChart.prototype.loadDVTJet = function (sCntr)
{

var oMyChart = glObjTr.oJet[sCntr];  var oChartDiv=getObj(sCntr);var nWJet=oChartDiv.offsetWidth;if(nWJet<5)
{
setTimeout("gObChartJet.loadDVTJet(\'"+sCntr+"\')",2000);return;}

var sPathCSS = oChartDiv.getAttribute("PSS");var sPath = "";sPath =oChartDiv.getAttribute("PH");var nJetPath=sPath.indexOf("http");if(nJetPath==0)
{
 nJetPath = sPath.indexOf("/"); nJetPath=sPath.indexOf("/",nJetPath+1); nJetPath=sPath.indexOf("/",nJetPath+1);}
else
 nJetPath = sPath.indexOf("/");nJetPath=sPath.indexOf("/",nJetPath+1);nJetPath=sPath.indexOf("/",nJetPath+1);var sWsPath=sPath.substring(0,nJetPath);gObChartJet.sWsPath=sWsPath;var sJetPath=sWsPath+"/oraclejet/js/libs/require/require.js";if(!jetChartKo || !oMyChart.ko)
{
 
 var nFileName=sJetPath.lastIndexOf("/"); var sFileName="PTCH_"; if(nFileName)
 {
 sFileName+=sJetPath.substr(nFileName+1); } 
 var oMyScript=getObj(sFileName); if(oMyScript)
 {
 this.dispJet(sCntr); }
 else
 this.loadScript(sJetPath,this.dispJet,"sCntr"); }
else
{

 this.loadJet(0);}
};oJsChart.prototype.loadGantt = function ()
{
 var sCntr = this.sCntr;  var sPath = ptjq2x(getObj(sCntr + "$GNT01_VS$$0")).attr("PH"); var nFileName=sPath.lastIndexOf("/"); var sFileName="PTCH_"; if(nFileName)
 {
 sFileName+=sPath.substr(nFileName+1); }
 var oMyScript=getObj(sFileName); if(typeof bJsGantt==='undefined')
 {
 this.PH=sPath; if(isEmpty(oMyScript))
 {
 this.loadScript(sPath,this.displJSND); }
 else
 {
 if(isEmpty(glObjTr.oGntt[sCntr].generateGANTT))
 {
 this.loadScript(sPath,this.displJSND); }
 else
 this.displJSND(sCntr); }
 
 }
 else
 { 
 
 if(isEmpty(glObjTr.oGntt[sCntr].generateGANTT))
 {
 this.loadScript(sPath,this.displJSND); }
 else
 this.displJSND(sCntr);  }

};oJsChart.prototype.loadDVT = function (sOcc)
{
 var sCntr = this.sCntr;  var sPath = "",sPathCSS=""; sPath = getObj(FindCntr(sCntr) + "$CHRTDVT$$"+sOcc).getAttribute("PH"); sPathCSS = getObj(FindCntr(sCntr) + "$CHRTDVT$$"+sOcc).getAttribute("PSS"); if(isEmpty(getObj("DVTcss")))
 {
 this.loadCSS(sPathCSS); }
 this.sOcc=sOcc;try
 {
 this.loadScript(sPath,this.adfDvtInitGraph);  }
 catch (err) 
 {
 sErrorMsg = "DVT Charts Load "; if (bIE) {
 sErrorMsg += err; } 
 else {
 sErrorMsg += err.message; }
 ChartErr(sErrorMsg, " DVT Charts Load", sCntr, 2, 0); return 0; }
};oJsChart.prototype.getCleanJson= function (sJSONSrting)
{
 var sNewJSON=sJSONSrting; var ajsDT=sNewJSON.split("\\"); if(ajsDT.length)
 {
 sNewJSON=ajsDT.join("\\\\"); }
 return sNewJSON;};function MyCancel() 
{
return false;}

function LeapYear(intYear) {
if (intYear % 100 == 0) {
if (intYear % 400 == 0) { return true; }
}
else {
if ((intYear % 4) == 0) { return true; }
}
return false;}



function isEmpty(strIn)
{
if((strIn==m_undef)||(strIn.length==0))
 return 1;return 0;}

function getObj(sId)
{
 try
 {
 if (isEmpty(document))
 return; }
 catch(err)
 {
 return; }
 
 var MyEl=document.getElementById(sId); return MyEl;}



function formatDate(date,frm)
{
var str = new String(frm);var m = date.getMonth();var d = date.getDate();var y = date.getFullYear();var w = date.getDay();var s = new Array();s["d"] = d;s["dd"] = (d < 10) ? ("0" + d) : d;s["M"] = 1+m;s["MM"] = (m < 9) ? ("0" + (1+m)) : (1+m);s["y"] = y;s["yy"] = new String(y).substr(2, 2);s["yyyy"] = y;var re = /(.*)(\W|^)(d|dd|ddd|dddd|M|MM|MMM|MMMM|y|yy|yyyy)( \W|$)(.*)/;while (re.exec(str) != null) {
str = RegExp.$1 + RegExp.$2 + s[RegExp.$3] + RegExp.$4 +RegExp.$5;}
return str;}

Array.find = function(ary, element)
 { 
 for(var i=0; i<ary.length; i++)
 { 
 if(ary[i] == element)
 return i;  } 
 return -1; };function findChrtOccr(sCntr) {
 var sRes=""; if(isEmpty(sCntr))
 return sRes; var nOcc=parseInt(sCntr.substr(sCntr.lastIndexOf('$')+1)); if(isNaN(nOcc))
 return sRes; sRes=String(nOcc); return sRes
};function FindCntr(Allid)
{
var temp;if(!isEmpty(Allid))
 temp=Allid.substring(0,Allid.indexOf('$'));return temp;}

function RemoveCntr(Allid)
{
var temp=Allid;if(!isEmpty(temp))
 temp=temp.substring(temp.indexOf("$")+1,temp.length);return temp;}




oJsChart.prototype.adfDvtInitGraph = function(sCntr) {

 var oMyChart = glObjTr.oDVT[sCntr];  var sOcc=oMyChart.sOcc;  sCntr=FindCntr(sCntr); var sDivId = sCntr + "$CHRTDVT$$"+sOcc; var sTmptId = sCntr + "$CHRTTMPT$$" + sOcc; var oChartDiv = getObj(sDivId);if((typeof(DvtSvgUtils)==='undefined')||DvtSvgUtils&&(DvtSvgUtils=='undefined')|| isEmpty(DvtSvgUtils))
{

 return;}
if((typeof(ApplicationEventHandler)==='undefined')||ApplicationEventHandler&&(ApplicationEventHandler=='undefined')|| isEmpty(ApplicationEventHandler))
{

 return;}

 if (oChartDiv.getAttribute("FT")=="0")
 {
 return; }
 try 
 {
 var oSvgDoc = DvtSvgUtils.createSvgDocument(sCntr + "$CHRTSVG$$"+sOcc); oChartDiv.appendChild(oSvgDoc); var oAH = new ApplicationEventHandler(sCntr); var oContext = new DvtSvgContext(oSvgDoc); var oGraph = new DvtStandaloneGraph(oContext, sCntr, oAH.handleEvent, oAH); oContext.getStage().addChild(oGraph); var sXMLStr = oMyChart.adfDvtGetXml(sCntr,sOcc); oGraph.setXML(sXMLStr); oMyChart.graphInstanceMap[sCntr] = oGraph; oChartDiv.setAttribute("FT",0); var oTemplate = getObj(sTmptId); if(!isEmpty(oTemplate))
 {
 oMyChart.AccessibleDvt(oTemplate);  }

 if (oChartDiv.getAttribute("opt")&&bIE)
 {
 var oURLs = oChartDiv.getAttribute("dataurls"); var nChrtType = oChartDiv.getAttribute("chrttype"); if (typeof oMyChart.getPTF !== "undefined")
 {
 oMyChart.getPTF(oGraph, oURLs, nChrtType); }
 }
 bChartRender=1; oGlblChrt.clearJetStorage(sCntr,sOcc,0);  }
 catch (err) 
 {
  sErrorMsg = "DVT Get Error";  if (bIE) {
  sErrorMsg += err;  } 
 else {
 sErrorMsg += err.message;  }
 if(bMozila)
 {
 console.log(sErrorMsg);  }
 else
 {

 ChartErr(sErrorMsg, "DVT Get Error", sCntr, 2, 0); }
  return 0; }
};oJsChart.prototype.adfDvtGetXml = function(sCntr,sOcc) {
 var oGraphXML = getObj(sCntr + '$ChX$$'+sOcc); var sXMLText =""; if(isEmpty(oGraphXML))
 return sXMLText; sXMLText = oGraphXML.innerHTML; var nIndexSt = sXMLText.indexOf('<!--'); var nIndexEn = sXMLText.lastIndexOf('-->'); sXMLText = sXMLText.substring(nIndexSt + 4, nIndexEn); var nIndex3 = sXMLText.lastIndexOf('>'); sXMLText = sXMLText.substring(0, nIndex3+1); return sXMLText;};oJsChart.prototype.loadRB = function ()
{
 var sCntr = this.sCntr;  var oRB= getObj(sCntr + "$RB1C$$0"); var sPath=oRB.getAttribute("PH"); if(isEmpty(sPath))
 return;  var nFileName=sPath.lastIndexOf("/"); var sFileName="PTCH_"; if(nFileName)
 {
 sFileName+=sPath.substr(nFileName+1); }
 var oMyScript=getObj(sFileName); if(typeof bChRatBx==='undefined')
 {
 if(isEmpty(oMyScript))
 {
 this.loadScript(sPath,this.displRB); }
 else
 {
 this.displRB(sCntr); }
 }
 else
 {
 
 this.displRB(sCntr); }
 
};oJsChart.prototype.displRB=function(strControl)
{
 var oRBChart=new Object(); oRBChart=glObjTr.oRBChr[strControl]; if (isEmpty(oRBChart))
 {
 return 0; }
 oRBChart.LoadRatingBox(); return;};oJsChart.prototype.loadOrg = function ()
{
 
 var sCntr = this.sCntr;  var oOrg= getObj(sCntr + "$OR1C$$0"); var sPath=oOrg.getAttribute("PH"); if(isEmpty(sPath))
 return; var nFileName=sPath.lastIndexOf("/"); var sFileName="PTCH_"; if(nFileName)
 {
 sFileName+=sPath.substr(nFileName+1); }
 var oMyScript=getObj(sFileName); if(typeof bChartOrg==='undefined')
 {
 
 if(isEmpty(oMyScript))
 {
 this.loadScript(sPath,this.dispOrg); }
 else
 this.dispOrg(sCntr); }
 else
 {
 
 this.dispOrg(sCntr); }
 
};oJsChart.prototype.dispOrg=function(strControl)
{
 var oOrgChart=new Object(); oOrgChart=glObjTr.oOrgChr[strControl]; if(typeof oOrgChart.GenerateOrgChart==="function")
 {
 oOrgChart.GenerateOrgChart(strControl); }
 else
{
 var oOrg= getObj(strControl + "$OR1C$$0"); var sPath=oOrg.getAttribute("PH"); if(isEmpty(sPath))
 return; this.loadScript(sPath,this.dispOrg);}
 
 return;};oJsChart.prototype.dispJet=function(sCntr)
{
 var oChart=getObj(sCntr); var sPath =oChart.getAttribute("PH"); var nFileName=sPath.lastIndexOf("/"); var sFileName="PTCH_"; if(nFileName)
 {
 sFileName+=sPath.substr(nFileName+1); } 

 var oMyScript=getObj(sFileName); if(oMyScript)
 oMyScript.parentNode.removeChild(oMyScript);  var oJetChart=glObjTr.oJet[sCntr]; oJetChart.loadScript(sPath,null); };oJsChart.prototype.isURL=function (sURL) 
{
 var oPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; if (oPattern.test(sURL)) 
 {
 return true; }
};oJsChart.prototype.EnterKeyCheck=function(ev)
{
 if(checkEnterKey(ev))
 { 
 window.location.href = ev.currentTarget.href; }
};oJsChart.prototype.clearJetStorage=function(sCntr,nOcc,nN)
{
"use strict";try{
 var sPage = (window.location.pathname).split("/").pop(); var oChSession=""; var oInfo= document.querySelectorAll("div[id*=\"pt_pageinfo\"]"); if(!isEmpty(oInfo))
 sPage=oInfo[0].getAttribute('Component')+"_"+oInfo[0].getAttribute('Page'); var sSesId=sPage+"$"+sCntr+"$$"+nOcc;if(!nN)
 window.sessionStorage.removeItem(sSesId);else
{
 var sFromStorage=window.sessionStorage.getItem(sSesId); if (!isEmpty(sFromStorage)) {
 
 var oSession = JSON.parse(sFromStorage);  if(isEmpty(oSession))
 return; if(nN==1)
 { 
 oSession.steps= new Array(); oSession.orign=new Array(); }
 if(nN==2)
 {
 oSession.selected=new Array(); }
 var sSesJson=JSON.stringify(oSession); window.sessionStorage.setItem(sSesId, sSesJson); }
}
  var oICChartT=getObj("ICChart"); if(!isEmpty(oICChartT))
 {
 var sTypeValue=oICChartT.value; var sTypeCntr=sCntr+"$$"+nOcc; var ojICCh=JSON.parse(sTypeValue); if(nN<2)
 {
 var aChTp=ojICCh.aChTp; var nL= aChTp.length; if ( nL>0 )
 for(var a=0;a<aChTp.length;a++)
 {
 if (aChTp[a].id==sTypeCntr)
 aChTp.splice(a,1); }
 }
 if(nN!=1)
 {
 var aChHDP=ojICCh.aChHDP; nL= aChHDP.length;  if ( nL>0 )
 for(var a=0;a<aChHDP.length;a++)
 {
 if (aChHDP[a].id==sTypeCntr)
 aChHDP.splice(a,1); }
 }
 sTypeValue=JSON.stringify( ojICCh)
 oICChartT.value=sTypeValue; }
 
}
catch(er)
{
 ChartErr(er.message, " clearJetStorage ", this.sCntr, 2, 0);}

};oJsChart.prototype.RemoveTypeFromStorage=function(sForm,sRecord,sField,nOcc)
{
"use strict";try{
 if(isEmpty(sForm))
 sForm="win0";if(isEmpty(nOcc))
 nOcc=0;if(isEmpty(sRecord)||(isEmpty(sField)))
 throw new Error("input in RemoveTypeFromStorage");var sCntr=sForm+sRecord+"_"+sField;}
catch(er)
{
 ChartErr(er.message, " Chart ", sCntr, 2, 0);}
this.clearJetStorage(sCntr,nOcc,1);};oJsChart.prototype.RemoveSelectionFromStorage=function(sForm,sRecord,sField,nOcc)
{
"use strict";try{
 if(isEmpty(sForm))
 sForm="win0";if(isEmpty(nOcc))
 nOcc=0;if(isEmpty(sRecord)||(isEmpty(sField)))
 throw new Error("input in RemoveSelectionFromStorage");var sCntr=sForm+sRecord+"_"+sField;}
catch(er)
{
 ChartErr(er.message, " Chart ", sCntr, 2, 0);}
this.clearJetStorage(sCntr,nOcc,2);};function goToServer_Ch_win5(strCntr)
{
var nFnd=strCntr.indexOf("GG0$GGG");var sOcc="";if(nFnd>1)
 {
 sOcc=strCntr.substr(nFnd+7); }
var nRGG=strCntr.indexOf("$RGG");if(nRGG<1)
 {
 strCntr+="A"; }
if(!isEmpty(sOcc))
 {
 strCntr+="$"+sOcc; }

submitAction_win5(document.win5,strCntr);};function isPSFTJet()
{
 var oAllJet=document.querySelectorAll("div[id*=\"$CHRTJET$\"]"); return isEmpty(oAllJet)? false:true;  };function removeICChart_PSFT()
{
 var aHidden=document.getElementsByName("ICChart"); if(!isEmpty(aHidden))
 {
 var nLnHd=aHidden.length-1; var oHdn=""; for(var h=nLnHd;h>0;h--)
 {
 oHdn=aHidden[h]; oHdn.parentNode.removeChild(oHdn);  }
 }

};window.addEventListener('load', removeICChart_PSFT, false);