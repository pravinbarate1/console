$wnd.hal.runAsyncCallback38("function ngi(){mgi()}\nfunction oii(){nii()}\nfunction rii(){qii()}\nfunction uii(){tii()}\nfunction nii(){nii=vdd}\nfunction qii(){qii=vdd}\nfunction tii(){tii=vdd}\nfunction mgi(){mgi=vdd}\nfunction Bgi(){Bgi=vdd}\nfunction Egi(){Egi=vdd}\nfunction Hgi(){Hgi=vdd}\nfunction Kgi(){Kgi=vdd}\nfunction Ngi(){Ngi=vdd}\nfunction Qgi(){Qgi=vdd}\nfunction Tgi(){Tgi=vdd}\nfunction cgi(){cgi=vdd;hpf()}\nfunction hii(){hii=vdd;zmf()}\nfunction qgi(){qgi=vdd;xb();Phn()}\nfunction Lgi(a){Kgi();this.a=a}\nfunction Ogi(a){Ngi();this.a=a}\nfunction Cgi(a,b){Bgi();this.b=a;this.a=b}\nfunction Igi(a,b,c){Hgi();this.a=a;this.b=b;this.c=c}\nfunction Ugi(a,b,c,d){Tgi();this.b=a;this.d=b;this.c=c;this.a=d}\nfunction Fgi(a,b,c,d,e){Egi();this.c=a;this.d=b;this.e=c;this.a=d;this.b=e}\nfunction Rgi(a,b,c,d,e){Qgi();this.e=a;this.b=b;this.c=c;this.d=d;this.a=e}\nfunction sgi(a,b,c,d){qgi();this.a=a;this.c=b;this.b=c;this.d=d;Eb.call(this);this.KOb()}\nfunction $fi(a){Xfi();NHf.call(this,a);this.EOb()}\nfunction igi(a,b){cgi();return new jii(b,a)}\nfunction kii(a){hii();return new _in(_Ud('smtp')+' '+'Socket Binding',a.FOb('smtp'))}\nfunction lii(a){hii();return new _in(_Ud('imap')+' '+'Socket Binding',a.FOb('imap'))}\nfunction mii(a){hii();return new _in(_Ud('pop3')+' '+'Socket Binding',a.FOb('pop3'))}\nfunction lgi(a,b,c,d,e){cgi();{e6o(a,F5o(b.YLd().Tyd('Mail Session',c)));d.Q5(vMo(c))}}\nfunction jgi(a,b){cgi();var c;{c=lcb(b.get('mail-session').qab().Cd().WP(new ngi).PP(coe()),21);a.El(c)}}\nfunction fgi(a,b,c,d){cgi();var e,f;{e=(Wfi(),Sfi).resolve(a);f=(new h9n(e,'read-resource')).Did('recursive',true).build();b.ajd(f,new Ogi(d))}}\nfunction kgi(a,b,c,d,e,f,g){cgi();var h,i;{if(Pcb(g)){h=(Wfi(),Rfi).resolve(a,f);i=(new h9n(h,'add')).Bid('mail-session',f).payload(g).build();b.ajd(i,new Ugi(c,d,f,e))}}}\nfunction ggi(a,b,c,d,e,f){cgi();var g,h;{h=a.$ld((Wfi(),Rfi));g=new Won('mail-session-form',b.YLd().Uyd('Mail Session'),h,c1d(Mab(yab(Bpb,1),{3:1,1:1,4:1,6:1},2,6,['jndi-name','from','debug'])),new Rgi(c,d,e,b,f));g.fB()}}\nfunction jii(a,b){hii();var c;Emf.call(this,a.name,a.GOb().isEmpty()?b.WLd().Gud():b.YLd().Kzd(hh(', ').pd(a.GOb())).Yv());this.bPb();c=new win(a);c.E5c('jndi-name');if(a.HOb('smtp')){c.G5c(new oii)}if(a.HOb('imap')){c.G5c(new rii)}if(a.HOb('pop3')){c.G5c(new uii)}this.B4().jR(c)}\nfunction egi(a,b,c,d,e,f,g,h,i){cgi();jpf.call(this,(new Jcn(a,'mail-session','Mail Session')).Q3c().G3c(i.YLd().cDd()).P3c());this.IOb();this.a6(new Cgi(f,e));this.i5(b.z2c('mail-session-add','Mail Session',(Wfi(),Rfi),new Fgi(g,i,f,e,d)));this.i5(b.C2c('mail-session-refresh'));this.Z5(new Igi(this,c,h));this.c6(new Lgi(i))}\ntdd(1088,13,{1:1,14:1,13:1},$fi);_.FOb=function _fi(a){var b;b=B7n(this,'server'+'/'+a+'/'+'outbound-socket-binding-ref');return b.defined?b.asString():'n/a'};_.GOb=function agi(){var a;a=new v0d;if(this.HOb('smtp')){a.add(_Ud('smtp'))}if(this.HOb('imap')){a.add(_Ud('imap'))}if(this.HOb('pop3')){a.add(_Ud('pop3'))}return a};_.HOb=function bgi(a){return this.hasDefined('server')&&this.get('server').hasDefined(a)};tdd(5095,34,{1:1,7:1,9:1,34:1},egi);_.IOb=function dgi(){};_.JOb=function hgi(a,b,c){cgi();return new sgi(this,c,a,b)};var G3b=hQd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn',5095,EVc);tdd(5096,1,{1:1},ngi);_.th=function ogi(a){return wke(this,a)};_.kd=function pgi(a){return new $fi(lcb(a,46))};var x3b=hQd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/0methodref$ctor$Type',5096,tpb);tdd(5102,1,{1:1,7:1},sgi);_.KOb=function rgi(){};_.v6=function wgi(){return Thn(this)};_.w6=function zgi(){return Vhn(this)};_.A6=function Agi(){return Whn(this)};_.m0=function tgi(){var a;a=new v0d;a.add(this.b.v5c(this.d.$bd('mail-session').bI('name',this.c.name).ZH()));a.add(this.b.r5c('Mail Session',this.c.name,(Wfi(),Rfi),this.a));return a};_.OQ=function ugi(){if(!this.c.GOb().isEmpty()){return Xhn(this.c.name,hh(', ').pd(this.c.GOb()))}return null};_.u6=function vgi(){var a;a=new v0d;a.add(this.c.name);a.addAll(this.c.GOb());return BUd(' ',a)};_.Kn=function xgi(){return vMo(this.c.name)};_.Ln=function ygi(){return this.c.name};var y3b=hQd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/1',5102,tpb);tdd(5098,1,{1:1},Cgi);_.N6=function Dgi(a,b){fgi(this.b,this.a,a,b)};var z3b=hQd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$0$Type',5098,tpb);tdd(5101,1,{1:1},Fgi);_.P6=function Ggi(a){ggi(this.c,this.d,this.e,this.a,this.b,a)};var A3b=hQd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$1$Type',5101,tpb);tdd(5103,1,{1:1},Igi);_.O6=function Jgi(a){return this.a.JOb(this.b,this.c,a)};var B3b=hQd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$2$Type',5103,tpb);tdd(5104,1,{1:1},Lgi);_.M6=function Mgi(a){return igi(this.a,a)};var C3b=hQd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$3$Type',5104,tpb);tdd(5097,1,{1:1,10:1},Ogi);_.Zh=function Pgi(a){jgi(this.a,a)};var D3b=hQd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$4$Type',5097,tpb);tdd(5100,1,{1:1},Rgi);_.W7=function Sgi(a,b){kgi(this.e,this.b,this.c,this.d,this.a,a,b)};var E3b=hQd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$5$Type',5100,tpb);tdd(5099,1,{1:1,10:1},Ugi);_.Zh=function Vgi(a){lgi(this.b,this.d,this.c,this.a,a)};var F3b=hQd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$6$Type',5099,tpb);tdd(6134,31,{1:1,9:1,31:1},jii);_.bPb=function iii(){};var Z3b=hQd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview',6134,xWc);tdd(6135,1,{1:1,88:1},oii);_.$db=function pii(a){return kii(a)};var W3b=hQd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview/lambda$0$Type',6135,tpb);tdd(6136,1,{1:1,88:1},rii);_.$db=function sii(a){return lii(a)};var X3b=hQd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview/lambda$1$Type',6136,tpb);tdd(6137,1,{1:1,88:1},uii);_.$db=function vii(a){return mii(a)};var Y3b=hQd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview/lambda$2$Type',6137,tpb);tdd(1933,1,{1:1});_.sPb=function Gji(){var a;a=this.BPb(this.a.sD().f6c(),this.a.sD().d6c(),this.a.sD().h6c(),this.a._B().Ny(),this.a.CD().$jd(),this.a.FD().umd(),this.a.FD().tmd(),this.a.wD().ccd(),this.a.LD().jMd());this.xPb(a);return a};_.xPb=function Mji(a){};_.BPb=function Qji(a,b,c,d,e,f,g,h,i){return new egi(a,b,c,d,e,f,g,h,i)};tdd(1937,1,{40:1,1:1});_.cm=function iki(){this.b.El(this.a.a.sPb())};tdd(146,1,{1:1,152:1});_.Gud=function wHo(){return 'No configured mail servers found.'};tdd(203,1,{1:1,221:1});_.Kzd=function GOo(a){return (new $gd).dw('Configured mail servers: ').cw(a).ew()};_.cDd=function _Ro(){return 'Filter by: session name or session type'};Mxp(bQ)(38);\n//# sourceURL=hal-38.js\n")
