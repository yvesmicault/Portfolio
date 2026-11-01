/* Page Agence : chronologie complète des références Hamonic + Masson, 2017 → 2026.
   Toutes les cartes sont dans le flux de la page. Données : data/globe/agence.json (partagé avec le globe).
   Rôle et phases = participation d'Yves (CV) ; « Opération » = état public lu sur la fiche de l'agence.
   Images : seules celles listées dans p.pub (publication autorisée) sont affichées. */
(function(){
  var $=function(id){return document.getElementById(id)};if(!$("agT"))return;
  var HM="https://hamonic-masson.com/projet/",AG=[];
  function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
  function yr(p){return p.y.slice(0,4)}
  /* fiches développées : uniquement des faits relevés sur les fiches publiques (consultées le 28/10/2026) ou dans les CV */
  /* fiches développées : ma participation (CV, réponses d'Yves) séparée de l'opération (fiches publiques de l'agence) */
  var FEAT={
    "metamorphose":{per:"D’octobre 2017 à l’été 2019",
      ct:[["Concours", "Concours mené en chef de projet, de l’esquisse au rendu ; projet lauréat"], ["Conception", "Conception architecturale du projet et présentation à la maîtrise d’ouvrage en workshop"], ["Production", "Maquette numérique et études graphiques"], ["Suite des études", "Contribution aux études de développement"]],
      op:[["Maîtrise d’ouvrage","Groupe Giboire"],
          ["Maîtrise d’œuvre","Hamonic+Masson & Associés (mandataire)"],
          ["Programme","Bureaux, coworking, 76 logements en coliving, salle d’escalade, restaurant, serre événementielle"],
          ["Surface","24 500 m²"],
          ["Jalons","Lauréat du concours international Imagine Angers en 2018"],
          ["État","Livré en 2025"]],
      img:[["img/agx/2017-metamorphose","Perspective du projet"],["img/agx/2017-metamorphose-2","Vue du rez-de-chaussée"],["img/agx/2017-metamorphose-3","Vue intérieure des bureaux"]]},
    "high-garden":{per:"",
      ct:[["Concours", "Projet lauréat, conçu en assistant chef de projet au sein de l’équipe de concours"], ["Conception", "Conception architecturale du projet, dont les façades en variantes bois et métal"], ["Production", "Conception et production des perspectives du concours"], ["Suite des études", "Poursuite des études et travail en continu en maquette numérique BIM"]],
      op:[["Maîtrise d’ouvrage","Woodeum x Pitch Immo + Immobilière 3F"],
          ["Maîtrise d’œuvre","Hamonic+Masson & Associés (mandataire et coordinateur)"],
          ["Programme","240 logements dont 60 sociaux, commerces, espace public"],
          ["Surface","15 000 m² de logements + 3 000 m² de commerces + 400 m² de restaurant panoramique"],
          ["Jalons","Lauréat du concours international Inventons la Métropole du Grand Paris 2 en 2019"],
          ["État","Livré en 2024"]],
      img:[["img/agx/2017-high-garden","Perspective du projet"],["img/agx/2019-high-garden-photo-1","Le bâtiment livré","photo © Florian Bouziges"],["img/agx/2019-high-garden-photo-2","Façade et balcons","photo © Florian Bouziges"],["img/agx/2019-high-garden-photo-3","Vue depuis le jardin","photo © Élise Robaglia"],["img/agx/2019-high-garden-photo-4","Les balcons filants","photo © Élise Robaglia"],["img/agx/2019-high-garden-planche-1","Planche du concours 1 : parti urbain"],["img/agx/2019-high-garden-planche-2","Planche du concours 2 : un espace public augmenté"],["img/agx/2019-high-garden-planche-3","Planche du concours 3 : un événement"]]},
    "le-cabanon-ideal":{per:"Trois ans",
      ct:[["Concours", "Projet porté en chef de projet et remporté au concours"], ["Conception", "Conception architecturale, de l’esquisse au PRO / DCE"], ["Production", "Plans, images et détails ; dossiers de concours, d’APS, de permis de construire et de PRO / DCE"], ["Suite des études", "Coordination des bureaux d’études : CEC WRD (fluides et thermique), Inddigo (environnement), Magelan (étude technique)"]],
      op:[["Maîtrise d’ouvrage","BNP Paribas Real Estate Expertise"],
          ["Maîtrise d’œuvre","Hamonic+Masson & Associés (mandataire) + Boris Bouchet Architectes"],
          ["Programme","117 logements, commerces et activités"],
          ["Surface","8 551 m²"],
          ["État","Arrêté faute de financement"]],
      img:[["img/agx/2020-le-cabanon-ideal","Perspective du projet"],["img/agx/2022-cabanon-vue-3","Façade et loggias"],["img/agx/2022-cabanon-vue-4","Intérieur d’un logement"]]}
  };
  /* concours remportés par l'agence, établis par les fiches hamonic-masson.com */
  var WIN={"metamorphose":"2018","high-garden":"2019","siege-du-groupe-angevin":"2023","le-cabanon-ideal":"2022","cite-administrative":"2026"};
  var LAU='<svg class="agt-lau" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 17.5c-3.6-1-6-4.2-6-8M10 17.5c3.6-1 6-4.2 6-8M5.2 13.2l-2 .6M4.3 10.6l-2-.3M4.2 7.9l-1.6-1M14.8 13.2l2 .6M15.7 10.6l2-.3M15.8 7.9l1.6-1"/><circle cx="10" cy="7" r="2.6"/></svg>';
  var FORDER=["metamorphose","high-garden","le-cabanon-ideal"];   // ordre chronologique (Yves, 01/11)

  function role(p){return p.rq?"Participation au concours":p.r}
  function phases(p){return p.rq?"":p.ph}
  function surf(p){if(p.hs||!p.s)return "";return p.s+(p.sq?" "+p.sq:"")}
  function status(p){var s=p.st||"";return /^Concours/.test(s)?"":s}   // pas de « Concours / Concours »
  function media(p,big){var m=(p.pub||[])[0];if(!m)return "";
    return '<figure class="agt-m"><img src="'+esc(m.f)+'" alt="'+esc(m.alt||p.t)+'" loading="lazy" decoding="async"'+(big?'':' width="600" height="400"')+'></figure>'}
  function links(p){var a=[];
    if(p.u)a.push('<a class="agt-lk" href="'+HM+esc(p.u)+'" target="_blank" rel="noopener">Fiche de l’agence ↗</a>');
    return a.length?'<p class="agt-ft">'+a.join("")+'</p>':""}
  function byId(id){return AG.filter(function(q){return q.id===id})[0]}
  function card(p){
    var ph=phases(p),su=surf(p),st=status(p),M=p.m&&byId(p.m),S=AG.filter(function(q){return q.m===p.id})[0];
    if(M)return '<li><article class="agt-c agt-sx" id="ag-'+esc(p.id)+'" tabindex="-1"><p class="agt-eb">'+yr(p)+' · '+esc(p.c)+'</p><h4>'+esc(M.t)+' (suite)</h4>'+
      '<p class="agt-ro"><b>'+esc(role(p))+'</b>'+(ph?'<span>'+esc(ph)+'</span>':'')+'</p><p class="agt-pr">'+esc(p.n)+'</p>'+
      '<p class="agt-ft"><a class="agt-lk" href="#agence/'+esc(M.id)+'">Voir la référence de '+yr(M)+'</a></p></article></li>';
    return '<li><article class="agt-c" id="ag-'+esc(p.id)+'" tabindex="-1">'+
      '<p class="agt-eb">'+yr(p)+' · '+esc(p.c)+'</p>'+
      '<h4>'+esc(p.t)+'</h4>'+
      '<p class="agt-ro"><b>'+esc(role(p))+'</b>'+(ph?'<span>'+esc(ph)+'</span>':'')+'</p>'+
      '<p class="agt-pr">'+esc(p.n)+(su?'<span class="agt-s">'+esc(su)+'</span>':'')+'</p>'+
      (p.co?'<p class="agt-mt">Avec '+esc(p.co)+'</p>':'')+
      (WIN[p.id]?'<p class="agt-w">'+LAU+'Concours remporté en '+WIN[p.id]+'</p>':'')+
      (st?'<p class="agt-mt">Opération : '+esc(st)+'</p>':'')+
      (S?'<p class="agt-mt">Suite en '+yr(S)+'</p>':'')+
      links(p)+'</article></li>'}
  function feat(p){var F=FEAT[p.id];if(!F)return "";var ph=phases(p).split(/\s*→\s*/).filter(Boolean),I=F.img||[],n=I.length;
    var fig=n?'<figure class="agt-m"><button type="button" class="agt-zb" data-ag="'+esc(p.id)+'" aria-label="'+esc(p.t)+' : '+(n>1?'voir les '+n+' images':'agrandir l’image')+'"><img src="'+esc(I[0][0])+'.jpg" alt="'+esc(p.t+', '+p.c+' : '+I[0][1].toLowerCase())+'" loading="lazy" decoding="async"><span class="agt-zl">'+(n>1?'Voir les '+n+' images':'Agrandir l’image')+'</span></button><figcaption>Image : Hamonic+Masson & Associés</figcaption></figure>':"";
    function dl(rows){return '<dl>'+rows.map(function(r){return '<div><dt>'+esc(r[0])+'</dt><dd>'+esc(r[1])+'</dd></div>'}).join("")+'</dl>'}
    return '<article class="agt-f" id="agf-'+esc(p.id)+'" tabindex="-1">'+fig+
      '<p class="agt-eb">'+yr(p)+' · '+esc(p.c)+'</p><h4>'+esc(p.t)+'</h4>'+
      '<section class="agt-me"><h5>Ma participation</h5>'+
        '<p class="agt-ro"><b>'+esc(role(p))+'</b>'+(F.per?'<span>'+esc(F.per)+'</span>':'')+'</p>'+
        (ph.length?'<ol class="agt-ph" aria-label="Phases suivies">'+ph.map(function(x){return '<li>'+esc(x)+'</li>'}).join("")+'</ol>':'')+
        '<h5>Mes contributions</h5><ul class="agt-ct">'+F.ct.map(function(c){return '<li><b>'+esc(c[0])+'</b>'+esc(c[1])+'</li>'}).join("")+'</ul></section>'+
      '<section class="agt-op"><h5>L’opération</h5>'+dl(F.op)+'</section>'+
      links(p)+'</article>'}
  function zoom(id,el){var p=byId(id),F=FEAT[id];if(!p||!F)return;
    var L=F.img.map(function(m){return {src:m[0]+".jpg",th:m[0]+"_t.jpg",cap:p.t+" · "+p.c+" · "+m[1]+" · "+(m[2]||"image © Hamonic+Masson & Associés")}});
    if(window.agOpenV)window.agOpenV(p.t,L,0,{},el);else window.open(L[0].src,"_blank")}
  document.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest("#v-agence .agt-zb");if(b)zoom(b.dataset.ag,b)});
  (function(){var st=document.createElement("style");st.textContent=
    "#v-agence .agt-zb{all:unset;box-sizing:border-box;display:block;position:relative;width:100%;cursor:zoom-in}"+
    "#v-agence .agt-zb:focus-visible{outline:2px solid var(--brick);outline-offset:2px}"+
    "#v-agence .agt-zl{position:absolute;right:8px;bottom:8px;padding:6px 10px;font:400 11px/1 var(--m);color:#fff;background:rgba(20,20,20,.62);letter-spacing:.04em}"+
    "#v-agence .agt-zb:hover .agt-zl{background:var(--brick)}"+
    "#v-agence .agt-f h5{margin:16px 0 6px;font:500 9.5px/1.3 var(--f);letter-spacing:.22em;text-transform:uppercase;color:var(--mute)}"+
    "#v-agence .agt-me{margin-top:4px}#v-agence .agt-me>h5:first-child{color:var(--brick)}"+
    "#v-agence .agt-ph{list-style:none;margin:8px 0 0;padding:0;display:flex;flex-wrap:wrap;gap:6px}"+
    "#v-agence .agt-ph li{font:400 11px/1 var(--m);padding:5px 8px;border:1px solid var(--line)}"+
    "#v-agence .agt-ph li::first-letter{text-transform:uppercase}"+
    "#v-agence .agt-ct{list-style:none;margin:0;padding:0;display:grid;gap:8px}"+
    "#v-agence .agt-ct li{font:400 13.5px/1.5 var(--f)}#v-agence .agt-ct b{display:block;font:500 11px/1.4 var(--m);color:var(--ink)}"+
    "#v-agence .agt-lau{width:16px;height:16px;flex:none;fill:none;stroke:var(--brick);stroke-width:1.3;stroke-linecap:round}"+
    "#v-agence .agt-w{margin:6px 0 0;display:inline-flex;align-items:center;gap:6px;font:400 11.5px/1.3 var(--m);color:var(--brick)}"+
    "#v-agence .agt-wl{list-style:none;margin:0 0 56px;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));column-gap:24px;border-top:1px solid var(--ink)}"+
    "#v-agence .agt-wl a{display:flex;align-items:center;gap:10px;min-height:48px;padding:10px 0;border-bottom:1px solid var(--line);color:var(--ink);text-decoration:none}"+
    "#v-agence .agt-wl a:hover b{color:var(--brick)}#v-agence .agt-wl b{font:400 15px/1.3 var(--f)}"+
    "#v-agence .agt-wy{font:400 12px/1 var(--m);color:var(--brick);font-variant-numeric:tabular-nums}#v-agence .agt-wc{margin-left:auto;font:400 11px/1.3 var(--m);color:var(--mute)}"+
    "#v-agence .agt-op{margin-top:18px;padding-top:4px;border-top:1px solid var(--line)}#v-agence .agt-op dd{color:var(--mute)}";
    document.head.appendChild(st)})();

  function build(){
    var L=AG.slice().sort(function(a,b){return yr(a)-yr(b)}),ys=[];   // tri stable : l'ordre du fichier est gardé dans l'année
    L.forEach(function(p){var y=yr(p),e=ys[ys.length-1];if(!e||e.y!==y)ys.push(e={y:y,p:[]});e.p.push(p)});
    var n=AG.filter(function(p){return !p.m}).length,H=document.querySelector("#v-agence .wrap > h3.agt-h");if(H)H.textContent="Chronologie 2017 — 2026 · "+n+" projets";
    var F=FORDER.map(function(id){return AG.filter(function(p){return p.id===id})[0]}).filter(Boolean);
    $("agF").innerHTML=F.length?'<h3 class="agt-h">Trois références développées</h3><div class="agt-fg">'+F.map(feat).join("")+'</div>'+'<h3 class="agt-h">Concours remportés</h3><ul class="agt-wl">'+Object.keys(WIN).map(function(id){var p=byId(id);return p?'<li><a href="#agence/'+esc(id)+'">'+LAU+'<span class="agt-wy">'+WIN[id]+'</span><b>'+esc(p.t)+'</b><span class="agt-wc">'+esc(p.c)+'</span></a></li>':''}).join("")+'</ul>':"";
    $("agI").innerHTML=ys.map(function(e){return '<button type="button" data-y="'+e.y+'">'+e.y+'<small>'+e.p.length+'</small></button>'}).join("");
    $("agT").innerHTML=ys.map(function(e){return '<section class="agt-y" aria-labelledby="agy-'+e.y+'"><h3 id="agy-'+e.y+'" tabindex="-1">'+e.y+'</h3><ul class="agt-g">'+e.p.map(card).join("")+'</ul></section>'}).join("");
    [].forEach.call($("agI").children,function(b){b.onclick=function(){var h=$("agy-"+b.dataset.y);h.scrollIntoView({block:"start"});h.focus({preventScroll:true})}});
    deep()}
  /* lien direct vers une référence : #agence/<id> */
  function deep(){var m=/^#agence\/(.+)$/.exec(location.hash);if(!m||!AG.length)return;var el=$("ag-"+decodeURIComponent(m[1]));
    if(el)requestAnimationFrame(function(){el.scrollIntoView({block:"start"});el.focus({preventScroll:true})})}
  addEventListener("hashchange",deep);
  fetch("data/globe/agence.json?v=13").then(function(r){return r.json()}).then(function(j){AG=j.p;build()});
})();
