const D={"venta": {"1": [["Plaza de la Revolución", 12000], ["Miramar", 25000], ["Miramar", 11000], ["Plaza de la Revolución", 25000], ["Miramar", 25000], ["Plaza de la Revolución", 19000], ["Centro Habana", 15000], ["Centro Habana", 8000], ["Centro Habana", 12000], ["Centro Habana", 12000], ["Centro Habana", 10000], ["Centro Habana", 6500], ["Marianao", 7500], ["Playa", 5500], ["Casa Blanca", 1500], ["Reparto Palatino", 9000], ["Regla", 3500], ["Bajos", 3000], ["Plaza de la Revolución", 8000], ["Centro Habana", 7000], ["Centro Habana", 5500], ["Centro Habana", 15000], ["Diez de Octubre", 3500], ["La Víbora", 3000], ["Centro Habana", 4000], ["Centro Habana", 4000], ["Centro Habana", 10000], ["Diez de Octubre", 6500], ["Habana Vieja", 4500], ["Diez de Octubre", 4200]], "2": [["Playa", 58000], ["Nuevo Vedado", 27000], ["Plaza de la Revolución", 35000], ["Playa", 24000], ["Plaza de la Revolución", 80000], ["Plaza de la Revolución", 30000], ["Plaza de la Revolución", 30000], ["Centro Habana", 12000], ["Plaza de la Revolución", 45000], ["Plaza de la Revolución", 20000], ["Centro Habana", 20000], ["Habana Vieja", 25000], ["Plaza de la Revolución", 45000], ["Plaza de la Revolución", 35000], ["Centro Habana", 35000], ["Habana Vieja", 22000], ["Diez de Octubre", 25000], ["Centro Habana", 18000], ["Guanabacoa", 8500], ["Centro Habana", 16000], ["Centro Habana", 15000], ["Plaza de la Revolución", 35000], ["La Lisa", 15000], ["Boyeros", 10000], ["San Miguel del Pedrón", 11500], ["Cerro", 20000], ["Cerro", 14000], ["Boyeros", 10000], ["Plaza de la Revolución", 25000], ["Centro Habana", 16000]], "3": [["Miramar", 90000], ["Centro Habana", 21500], ["Centro Habana", 30000], ["Plaza de la Revolución", 200000], ["Plaza de la Revolución", 22000], ["Plaza de la Revolución", 70000], ["Plaza de la Revolución", 90000], ["Habana Vieja", 20000], ["Playa", 34000], ["Marianao", 55000], ["Playa", 45000], ["Playa", 70000], ["Playa", 21000], ["San Miguel del Pedrón", 30000], ["Centro Habana", 27000], ["Centro Habana", 18500], ["Centro Habana", 23000], ["Diez de Octubre", 15000], ["Bahía", 76000], ["Boyeros", 25000], ["San Miguel del Pedrón", 50000], ["Playa", 70000], ["Centro Habana", 45000], ["Centro Habana", 14000], ["Centro Habana", 25000], ["Diez de Octubre", 37000], ["Playa", 18000], ["Cerro", 75000], ["Plaza de la Revolución", 25000], ["Boyeros", 30000]]}, "rent": {"Plaza de la Revolución": [[270, 1], [250, 1], [550, 2], [500, 1], [450, 2], [600, 1], [300, 1], [450, 3], [600, 1], [300, 1], [500, 1], [450, 4], [150, 2], [350, 2], [250, 1], [350, 1], [700, 2], [400, 1], [500, 3], [350, 1], [280, 2], [500, 1], [550, 2], [600, 2], [200, 1], [400, 2], [400, 1], [200, 1], [200, 1], [250, 1]], "Centro Habana": [[300, 1], [300, 1], [250, 1], [250, 1], [150, 1], [300, 3], [350, 1], [230, 1], [300, 1], [300, 1], [250, 2], [300, 1], [400, 2], [350, 1], [250, 1], [100, 1], [150, 1], [450, 3], [450, 3], [300, 1], [250, 1], [250, 1], [350, 1], [250, 1], [200, 1], [300, 1], [400, 2], [250, 1], [200, 1], [150, 1]], "Playa": [[350, 1], [200, 1], [230, 1], [200, 1], [400, 2], [150, 1], [500, 2], [250, 1], [350, 1], [200, 1], [300, 1], [750, 2], [250, 1], [230, 1], [300, 1], [650, 1], [300, 1], [350, 1], [250, 1], [200, 1], [350, 1], [100, 1], [200, 1], [300, 1], [250, 1], [200, 1], [300, 2], [350, 2], [200, 1], [200, 1]]}, "serv": [50, 93, 53, 33, 100, 97, 93, 83], "labs": ["Respaldo energético", "Tanque de agua", "Teléfono fijo", "Wifi (Nauta)", "Climatización", "Gas de la calle", "Calentador", "Lavadora"], "pa": [350, 270, 250, 550, 300, 200, 120, 500, 450, 600, 300, 450, 250, 300, 600, 300, 500, 450, 150, 350, 250, 350, 230, 200, 700, 300, 250, 250, 450, 400], "ns": [6, 3, 5, 8, 7, 5, 4, 8, 7, 8, 6, 6, 5, 7, 8, 5, 8, 5, 5, 6, 5, 7, 5, 5, 8, 5, 5, 6, 5, 8]};const $=id=>document.getElementById(id);
const avg=a=>Math.round(a.reduce((x,y)=>x+y,0)/a.length),med=a=>{const s=[...a].sort((x,y)=>x-y),m=s.length>>1;return s.length%2?s[m]:(s[m-1]+s[m])/2},fm=n=>'$'+n.toLocaleString('en-US');
const kp=a=>'<div class="kp">'+a.map(x=>`<div><span>${x[0]}</span><small>${x[1]}</small></div>`).join('')+'</div>';
const bars=(a,max,u='',s='')=>a.map(x=>`<div class="row"><span class="l">${x[0]}</span><div class="tr"><div class="bar" style="width:${Math.max(x[1]/max*100,1)}%"></div></div><span class="v">${u}${x[1].toLocaleString('en-US')}${s}</span></div>`).join('');
function tabs(t,items,fn){items.forEach((x,i)=>{const b=document.createElement('button');b.textContent=x[1];b.onclick=()=>{[...t.children].forEach(c=>c.classList.remove('on'));b.classList.add('on');fn(x[0])};t.appendChild(b);if(!i)b.click()})}
// sprites
const PL={f:{h:'#6b2d12',c:'#e8742c',p:'#d1417a'},m:{h:'#3b2a1a',c:'#1757c6',p:'#2d3748'},n:{h:'#e0c068',c:'#f5f5f5',p:'#6b5b3a'}},BS={s:'#f1c27d',e:'#111',b:'#111'};
const MA=["..hhhh..",".hhhhhh.",".ssssss.",".sesses.",".ssssss.","...ss...",".cccccc.","sccccccs","sccccccs",".cccccc.",".pppppp.",".pp..pp.",".pp..pp.",".bb..bb."];
const FA=["..hhhh..",".hhhhhh.","hssssssh","hsessesh","hssssssh","h.ssss.h",".cccccc.","sccccccs","sccccccs",".cccccc.",".pppppp.","pppppppp","..s..s..","..b..b.."];
const SP={m:[MA,MA.slice(0,11).concat(["..pppp..","..pp.pp.","..bb.bb."])],f:[FA,FA.slice(0,12).concat([".s...s..",".b...b.."])]};SP.n=SP.m;
const S={};for(const k in SP)S[k]=SP[k].map(rows=>{const c=document.createElement('canvas');c.width=8;c.height=14;const x=c.getContext('2d');rows.forEach((r,j)=>[...r].forEach((h,i)=>{if(h!='.'){x.fillStyle=PL[k][h]||BS[h];x.fillRect(i,j,1,1)}}));return c.toDataURL()});
document.querySelectorAll('#pick .ch').forEach(b=>{b.querySelector('img').src=S[b.dataset.k][0];b.onclick=()=>start(b.dataset.k)});
// casa en pixel art (120x96)
const W=120,H=96,X0=6,YT=18,CW=36,FY=[86,50];
(function(){const g=$('hc').getContext('2d'),r=(x,y,w,h,c)=>{g.fillStyle=c;g.fillRect(x,y,w,h)},K='#2a1d14',BR='#8a5a2b';
r(84,3,6,12,BR);r(83,2,8,2,'#5b3a1a');
for(let y=2;y<18;y++){const h=Math.round((y-2)*3.5+2);r(60-h,y,h*2,1,y%4<2?'#c0392b':'#a93226');r(60-h,y,2,1,'#5b1a12');r(60+h-2,y,2,1,'#5b1a12')}
r(0,90,W,6,'#4caf50');r(0,90,W,1,'#2e7d32');[[10,93],[34,94],[62,93],[90,94],[110,93]].forEach(([x,y])=>r(x,y,3,1,'#2e7d32'));
[[0,0,'#ffd0e0'],[1,0,'#c9ecff'],[2,0,'#d9d4ff'],[0,1,'#ffd9a8'],[1,1,'#d6f5c9'],[2,1,'#e8d5b0']].forEach(([c,w,k])=>{const x=X0+c*CW,y=YT+w*CW;r(x,y,CW,CW,k);r(x,y+32,CW,4,BR);r(x,y+32,CW,1,'#b57a3c')});
r(106,50,8,4,'#d9d4ff');
r(41,18,2,72,K);r(77,18,2,72,K);r(6,53,100,2,K);r(5,17,110,1,K);r(5,18,2,72,K);r(113,18,2,72,K);r(5,89,110,2,K);
for(let i=0;i<10;i++){const h=Math.round((i+1)*3.6);r(80+i*3,86-h,3,h,i%2?'#a0713d':BR);r(80+i*3,86-h,3,1,'#d9a76a')}
[[10,80,18,6,'#c0392b'],[10,73,18,7,'#a93226'],[8,76,3,10,'#7b241c'],[27,76,3,10,'#7b241c'],[32,82,8,4,BR],[32,76,8,6,'#222'],[33,77,6,4,'#5dade2'],
[46,78,18,8,'#b0b7c3'],[46,76,18,2,'#7f8c8d'],[50,73,6,3,'#7f8c8d'],[55,78,1,8,'#7f8c8d'],[66,66,9,20,'#ecf0f1'],[73,72,1,6,'#7f8c8d'],
[8,34,3,16,BR],[9,42,26,8,BR],[10,38,24,6,'#fff'],[18,38,16,6,'#e84393'],[11,38,6,4,'#fde3a7'],[37,44,4,6,BR],[37,40,4,4,'#f1c40f'],
[44,42,32,2,'#fff'],[44,42,2,8,'#fff'],[74,42,2,8,'#fff'],[48,44,6,6,'#b5651d'],[47,36,8,8,'#2ecc71'],[56,30,16,3,'#e74c3c'],[63,33,2,17,BR],[68,44,6,6,'#f39c12'],
[82,42,18,3,BR],[82,45,2,5,BR],[98,45,2,5,BR],[86,36,8,6,'#222'],[87,37,6,4,'#5dade2'],[100,30,6,8,'#fff']].forEach(a=>r(...a))})();
// habitaciones (análisis)
const room={
venta(b){b.innerHTML='<div class="tabs"></div><div class="kp"></div><div class="scroll"></div><p class="note"></p>';const[t,,,n]=[...b.children];
 const a=c=>avg(D.venta[c].map(x=>x[1]));n.textContent=`Dato curioso: una casa de 3 cuartos cuesta unas ${(a(3)/a(1)).toFixed(1)} veces lo que una de 1 cuarto.`;
 tabs(t,[['1','1 cuarto'],['2','2 cuartos'],['3','3 cuartos']],c=>{const v=D.venta[c],p=v.map(x=>x[1]);b.querySelector('.kp').outerHTML=kp([[fm(avg(p)),'promedio'],[fm(med(p)),'mediana'],[fm(Math.min(...p)),'más barata'],[fm(Math.max(...p)),'más cara']]);
  b.querySelector('.kp').nextElementSibling.innerHTML=bars([...v].sort((x,y)=>x[1]-y[1]),Math.max(...p),'$')})},
serv(b){b.innerHTML=bars(D.labs.map((l,i)=>[l,D.serv[i]]),100,'','%')+'<p class="note">Porcentaje de las 30 casas en alquiler que incluyen cada servicio. El wifi es lo menos común.</p>'},
sal(b){b.innerHTML=[['Brasil',7710,91698],['El Salvador',5249,90000],['México',4792,96982],['Cuba',204,16500]].map(a=>bars([[a[0],+(a[2]/a[1]).toFixed(1)]],81,'',' años')).join('')+'<p class="note">Años de salario íntegro para comprar una vivienda promedio (2025), según salario anual y precio medio de la casa en cada país.</p>'},
guess(b){const ans=avg(D.venta['2'].map(x=>x[1]));b.innerHTML=`<p>¿Cuánto crees que cuesta, en promedio, una casa de 2 cuartos en venta?</p><div class="big">$30000</div><input type="range" min="5000" max="100000" step="1000" value="30000"><p><button class="btn">Comprobar</button></p><p class="note"></p>`;
 const g=b.querySelector('input'),v=b.querySelector('.big');g.oninput=()=>v.textContent=fm(+g.value);
 b.querySelector('button').onclick=()=>{const x=+g.value,d=Math.abs(x-ans)/ans;b.querySelector('.note').innerHTML=`El promedio real es <b>${fm(ans)}</b>. Tu respuesta: ${fm(x)} (${d<.15?'¡casi exacto! 🎉':x>ans?'te pasaste':'te quedaste corto'}).`}},
zona(b){b.innerHTML='<div class="tabs"></div><div class="kp"></div><div class="strip"></div><div style="display:flex;justify-content:space-between;font-size:12px"><span>$0</span><span>$400</span><span>$800</span></div><p class="note">Cada punto es una casa en alquiler (USD al mes). Pasa el cursor o toca un punto para ver el detalle.</p>';const[t,,s]=[...b.children];
 tabs(t,Object.keys(D.rent).map(z=>[z,z]),z=>{const p=D.rent[z].map(x=>x[0]);b.querySelector('.kp').outerHTML=kp([[fm(avg(p)),'promedio'],[fm(med(p)),'mediana'],[fm(Math.min(...p)),'mínimo'],[fm(Math.max(...p)),'máximo']]);
  s.innerHTML=D.rent[z].map((x,i)=>`<span class="dot" title="${x[1]} cuarto(s) · ${fm(x[0])}" style="left:${Math.min(x[0]/800*100,98)}%;top:${12+(i*37%76)}%"></span>`).join('')})}};
const R=[{n:'SALA',s:'Comprar: precios',e:'🛋️',c:0,w:1,f:0,x:24,t:'¿Cuánto cuesta comprar?',j:'¡Aquí se habla de precios!',r:'venta'},
{n:'COCINA',s:'Servicios',e:'🍳',c:1,w:1,f:0,x:60,t:'¿Qué servicios trae un alquiler?',j:'¿Hay gas en la calle?',r:'serv'},
{n:'OFICINA',s:'Salario vs casa',e:'💼',c:2,w:0,f:1,x:92,t:'¿Cuántos años de salario cuesta una casa?',j:'Saquemos las cuentas…',r:'sal'},
{n:'DORMITORIO',s:'Adivina el precio',e:'🛏️',c:0,w:0,f:1,x:24,t:'Adivina el precio',j:'¡A jugar!',r:'guess'},
{n:'TERRAZA',s:'Alquiler por zona',e:'🌴',c:1,w:0,f:1,x:60,t:'Alquilar según la zona',j:'¡Qué vista!',r:'zona'}];
const map=$('map'),ch=$('ch'),im=ch.querySelector('img'),bub=$('bub');
const cell=(c,w)=>`left:${(X0+c*CW)/W*100}%;top:${(YT+w*CW)/H*100}%`;
R.forEach((r,i)=>{const d=document.createElement('div');d.className='hs';d.style.cssText=cell(r.c,r.w);d.innerHTML=`<div class="sg">${r.n}<small>${r.s}</small></div><span class="mk">!</span>`;d.onclick=()=>go(i);r.el=d;map.insertBefore(d,ch)});
{const d=document.createElement('div');d.className='hs st';d.style.cssText=cell(2,1);d.innerHTML='<div class="sg">ESCALERA<small>Sube y baja</small></div>';map.insertBefore(d,ch)}
const npi=$('npc').querySelector('img');npi.src=S.n[0];new ResizeObserver(()=>{im.style.height=npi.style.height=map.clientWidth/W*14+'px'}).observe(map);
// movimiento
const PX=x=>x/W*100,PY=y=>FY[y]/H*100,SB=81,ST=108.5;
let who,pos={x:14,f:0},busy=0,pend=null,tm;const vis=new Set(),sleep=ms=>new Promise(r=>setTimeout(r,ms));
function say(t,ms){bub.textContent=t;bub.style.display='block';clearTimeout(say.t);say.t=setTimeout(()=>bub.style.display='none',ms)}
function wa(on){clearInterval(tm);if(on){let f=0;tm=setInterval(()=>{im.src=S[who][f^=1];sfx.step()},160)}else im.src=S[who][0]}
function start(k){who=k;im.src=S[k][0];$('pick').hidden=true;$('game').hidden=false;ch.style.display='block';ch.style.transition='none';pos={x:14,f:0};ch.style.left=PX(14)+'%';ch.style.top=PY(0)+'%';audio();hud();say('¡Toca una habitación!',3500);setTimeout(()=>nsay('¡Psst! Ven, tengo consejos'),4200)}
function hud(){const e=$('hud');e.innerHTML=`🪙 ${coins}/5 · Habitaciones: ${'⭐'.repeat(vis.size)}${'☆'.repeat(5-vis.size)}`+(vis.size==5?' <button class="btn" id="vc" style="padding:3px 10px;font-size:13px">Ver mi tarjeta 🏆</button>':'');const b=$('vc');if(b)b.onclick=finish}
async function mv(x,f,fy=f){const dx=Math.abs(x-pos.x),dy=Math.abs(FY[fy]-FY[pos.f])*1.3,t=Math.max((dx+dy)*30,200);if(dx>0.5)im.style.scale=x<pos.x?'-1 1':'1 1';
 ch.style.transition=`left ${t}ms linear,top ${t}ms linear`;ch.style.left=PX(x)+'%';ch.style.top=PY(fy)+'%';pos.x=x;pos.y=fy;await sleep(t)}
async function go(i){if(!who){$('pick').scrollIntoView({block:'center'});$('pick').animate([{transform:'translateX(-8px)'},{transform:'translateX(8px)'},{transform:'none'}],{duration:250,iterations:2});return}
 if(busy==2){pend=i;return}if(busy)return;busy=1;bub.style.display='none';const r=R[i];wa(1);
 if(r.f!=pos.f){const up=r.f==1;await mv(up?SB:ST,pos.f);await mv(up?ST:SB,r.f);pos.f=r.f}
 await mv(r.x,r.f);wa(0);im.style.scale='1 1';say(r.j,900);sfx.door();await sleep(900);busy=0;open(i)}
function open(i){const r=R[i];$('ot').textContent=`${r.e} ${r.n} · ${r.t}`;const b=$('ob');b.innerHTML='';room[r.r](b);quiz(b,r);$('ov').style.display='flex';vis.add(i);r.el.querySelector('.mk').className='mk ok';r.el.querySelector('.mk').textContent='✓';hud()}
const closeOv=()=>{$('ov').style.display='none';if(vis.size==5&&!fin){fin=1;finish()}};$('cl').onclick=closeOv;$('ov').onclick=e=>{if(e.target.id=='ov')closeOv()};
// vida propia: el personaje pasea y mira alrededor cuando no hay nada que hacer
setInterval(async()=>{if(!who||busy||document.hidden||$('ov').style.display=='flex')return;busy=2;
 const lo=pos.f?12:12,hi=pos.f?100:76,x=Math.max(lo,Math.min(hi,pos.x+(Math.random()*2-1)*14));
 if(Math.random()<.3){im.style.scale=Math.random()<.5?'-1 1':'1 1'}else{wa(1);await mv(x,pos.f);wa(0)}
 busy=0;if(pend!=null){const p=pend;pend=null;go(p)}},2600);

// ---- monedas y preguntas ----
let coins=0,fin=0;const avgz=z=>avg(D.rent[z].map(x=>x[0])),av=c=>avg(D.venta[c].map(x=>x[1]));
R[0].q=['Una casa de 3 cuartos cuesta más de 4 veces lo que una de 1 cuarto.',()=>av(3)/av(1)>4];
R[1].q=['El wifi está en más de la mitad de las casas en alquiler.',()=>D.serv[3]>50];
R[2].q=['En Cuba harían falta más de 50 años de salario para comprar una casa.',()=>16500/204>50];
R[3].q=['El precio promedio de una casa de 2 cuartos en venta es menor a $20000.',()=>av(2)<20000];
R[4].q=['Plaza de la Revolución tiene el alquiler promedio más alto de las tres zonas.',()=>Object.keys(D.rent).sort((a,b)=>avgz(b)-avgz(a))[0]=='Plaza de la Revolución'];
function quiz(b,r){const q=document.createElement('div');q.className='qz';
 if(r.done!=null){q.innerHTML=`<b>🪙 Pregunta rápida</b><p>${r.q[0]}</p><p class="note">${r.done?'¡Ya ganaste esta moneda!':'Ya respondiste esta pregunta.'}</p>`}
 else{q.innerHTML=`<b>🪙 Pregunta rápida: ¿verdadero o falso?</b><p>${r.q[0]}</p><button class="btn" data-a="1">Verdadero</button><button class="btn" data-a="0">Falso</button><p class="note"></p>`;
  q.querySelectorAll('button').forEach(k=>k.onclick=()=>{const ok=(k.dataset.a=='1')==r.q[1]();r.done=ok;if(ok)coins++;sfx[ok?'coin':'bad']();
   q.innerHTML=`<b>🪙 Pregunta rápida</b><p>${r.q[0]}</p><p class="note">${ok?'¡Correcto! Ganaste una moneda 🪙':'Esta vez no. Revisa los datos de arriba.'}</p>`;hud();if(ok)say('+1 🪙',1200)})}
 b.appendChild(q)}
// ---- sonido retro ----
let ac,mute=0,mi=0,mt;const N=[262,330,392,330,294,349,440,349,262,330,392,523,392,330,294,196];
function beep(f,d=.12,t='square',v=.05){if(!ac||mute)return;try{const o=ac.createOscillator(),g=ac.createGain();o.type=t;o.frequency.value=f;g.gain.setValueAtTime(v,ac.currentTime);g.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+d);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+d)}catch(e){}}
function audio(){try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();ac.resume()}catch(e){}clearInterval(mt);mt=setInterval(()=>{if(!document.hidden)beep(N[mi++%N.length],.2,'square',.02)},240)}
const sfx={step:()=>beep(110,.05,'triangle',.06),door:()=>[523,659,784].forEach((f,i)=>setTimeout(()=>beep(f,.1),i*90)),coin:()=>{beep(988,.08);setTimeout(()=>beep(1319,.25),90)},bad:()=>beep(150,.3,'sawtooth',.05),win:()=>[523,659,784,1047].forEach((f,i)=>setTimeout(()=>beep(f,.15),i*120))};
$('mu').onclick=()=>{mute=!mute;$('mu').textContent=mute?'🔇 Sonido':'🔊 Sonido'};
// ---- cielo: día/noche, nubes y pajaritos (detrás de la casa) ----
let night=0,tk=0,B=[],dt=0;const sg=$('sk').getContext('2d'),bs=[["x...x",".x.x.","..x.."],[".xxx.","x...x","....."]];
function sky(){tk++;const r=(x,y,w,h,c)=>{sg.fillStyle=c;sg.fillRect(Math.round(x),Math.round(y),w,h)};
 r(0,0,W,H,night?'#16213e':'#8fd3ff');
 if(night){[[10,8],[28,4],[100,22],[112,8],[3,30],[117,40],[94,5]].forEach(([x,y],i)=>{if((tk+i*3)%14)r(x,y,1,1,'#fff')});r(106,3,8,8,'#f4f1c9');r(110,5,3,3,'#d3d0a0')}else r(106,3,8,8,'#ffd93b');
 const cc=night?'#34456f':'#fff';[[(tk*.12)%150-20,6],[(tk*.08+75)%150-20,12]].forEach(([x,y])=>{r(x,y,14,4,cc);r(x+4,y-2,8,2,cc)});
 if(Math.random()<.007)B.push({x:-6,y:3+Math.random()*9,v:.5+Math.random()*.4});
 B=B.filter(b=>b.x<126);B.forEach(b=>{b.x+=b.v;bs[(tk/3|0)%2].forEach((row,j)=>[...row].forEach((c,i)=>{if(c=='x')r(b.x+i,b.y+j,1,1,night?'#c9d2f5':'#2a1d14')}))})}
setInterval(sky,90);sky();
function setNight(n){night=n;$('map').classList.toggle('night',!!n);$('dn').textContent=n?'☀️ Día':'🌙 Noche'}
$('dn').onclick=()=>{setNight(!night);dt=0};
setInterval(()=>{if(!$('game').hidden&&++dt>=40){setNight(!night);dt=0}},1000);
// ---- vecino ----
const TIPS=['Asere, nunca pagues por adelantado sin ver la casa.','Pide los papeles: que el vendedor sea de verdad el dueño.','Si el precio es demasiado bueno, ojo: puede ser trampa.','Visita la casa de día y revisa agua, gas y corriente.','Si te piden datos de tu cuenta, ¡sal corriendo!','Compara varios anuncios antes de decidir.','Cierra el trato con un notario o abogado de confianza.'];
let ti=0,nt;function nsay(t,ms=4200){const n=$('nb');n.textContent=t;n.style.display='block';clearTimeout(nt);nt=setTimeout(()=>n.style.display='none',ms)}
$('npc').onclick=()=>{nsay('🗣️ '+TIPS[ti++%TIPS.length]);beep(660,.1)};
// ---- volver al selector ----
$('bk').onclick=()=>{if(busy==1)return;clearInterval(mt);$('ov').style.display='none';$('game').hidden=true;$('pick').hidden=false;ch.style.display='none';who=null};
// ---- tarjeta final para compartir ----
function finish(){if(!who)return;const t=coins==5?'Experto inmobiliario 🏆':coins>=3?'Agente en práctica 🏠':'Novato curioso 🔍';sfx.win();
 const c=document.createElement('canvas');c.width=c.height=540;const x=c.getContext('2d');x.imageSmoothingEnabled=false;const sp=new Image();
 sp.onload=()=>{x.fillStyle=night?'#16213e':'#8fd3ff';x.fillRect(0,0,540,540);x.fillStyle='#4caf50';x.fillRect(0,440,540,100);x.drawImage(sp,190,160,160,280);
  x.textAlign='center';x.fillStyle=night?'#fff':'#2a1d14';x.font='bold 34px "Courier New",monospace';x.fillText('LA CASA DEL MERCADO',270,56);x.font='bold 26px "Courier New",monospace';x.fillText('INMOBILIARIO · LA HABANA',270,92);
  x.fillStyle='#1757c6';x.font='bold 22px "Courier New",monospace';x.fillText('5 días, 5 puertas abiertas',270,128);
  x.fillStyle='#fff';x.font='bold 30px "Courier New",monospace';x.fillText(t,270,486);x.fillText('Puntaje: '+coins+'/5 🪙',270,522);
  $('ot').textContent='🏆 ¡Recorrido completo!';$('ob').innerHTML=`<img id="card" alt="Tu tarjeta" src="${c.toDataURL()}"><p>Puntaje <b>${coins}/5</b> · ${t}</p><button class="btn" id="sh">Compartir mi tarjeta</button><p class="note">Si no se abre el menú de compartir, mantén presionada la imagen para guardarla y envíala por WhatsApp.</p>`;
  $('sh').onclick=()=>c.toBlob(bl=>{const f=new File([bl],'mi-casa.png',{type:'image/png'});if(navigator.canShare&&navigator.canShare({files:[f]}))navigator.share({files:[f],title:'Mi casa del mercado inmobiliario'}).catch(()=>{})});
  $('ov').style.display='flex'};sp.src=S[who][0]}
