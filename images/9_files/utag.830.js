//tealium universal tag - utag.830 ut4.0.201705111648, Copyright 2017 Tealium.com Inc. All Rights Reserved.
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','//connect.facebook.net/en_US/fbevents.js');try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1,'link':1};u.initialized=false;u.map={"fb_event_name_new":"event","user_uuid":"uuid","cp.drv_em":"email","cp.utag_main_existing":"existing","flow_type":"flowType","cityId":"content_name"};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"event":"","value":"","currency":"","uuid":"","email":"","existing":"","fb_load":""}
for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
var eventNameVar="";if(window.utag_data.eventName=='web.eats.restaurant.signup'&&window.utag_data.eventType=='landing'){eventNameVar='RestaurantSignupLP';}
if(window.utag_data.eventName=='web.eats.restaurant.signup'&&window.utag_data.eventType=='success'){eventNameVar='RestaurantSignup';}
if(window.utag_data.eventName=='web.eats.restaurant.signupComplete'&&window.utag_data.eventType=='confirmation'){eventNameVar='RestaurantSignupComplete';}
if(eventNameVar!='')
{fbq('init','920222691346894');fbq('trackCustom',eventNameVar);}
}};utag.o[loader].loader.LOAD(id);})("830","uber.main");}catch(error){utag.DB(error);}
