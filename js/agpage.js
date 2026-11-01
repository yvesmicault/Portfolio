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
  var FEAT={
    "le-cabanon-ideal":[
      ["Maîtrise d’ouvrage","BNP Paribas Real Estate Expertise"],
      ["Maîtrise d’œuvre","Hamonic+Masson & Associés (mandataire) + Boris Bouchet Architectes"],
      ["Programme","117 logements, commerces et activités"],
      ["Surface","8 551 m²"],
      ["Ma participation","Environ trois ans, du concours au PRO / DCE"],
      ["Mes contributions",["Production des plans, images et détails, de l’esquisse au PRO / DCE","Coordination des bureaux d’études : CEC WRD (fluides et thermique), Inddigo (environnement), Magelan (étude technique)","Dossiers remis : concours, APS, permis de construire, PRO / DCE"]],
      ["État du projet","Arrêté faute de financement"]],
    "metamorphose":[
      ["Maîtrise d’ouvrage","Groupe Giboire"],
      ["Maîtrise d’œuvre","Hamonic+Masson & Associés (mandataire)"],
      ["Programme","Bureaux, coworking, 76 logements en coliving, salle d’escalade, restaurant, serre événementielle"],
      ["Surface","24 500 m²"],
      ["Jalons","Lauréat du concours international Imagine Angers en 2018"],
      ["Ma participation","D’octobre 2017 à l’été 2019 : concours, puis études"],
      ["Mes contributions",["Conduite du concours en tant que chef de projet, de la conception au rendu (projet lauréat)","Échanges avec la maîtrise d’ouvrage et présentation du projet en workshop","Maquette numérique, études graphiques et contribution aux études de développement"]],
      ["État du projet","Livré en 2025"]],
    "cite-administrative":[
      ["Maîtrise d’ouvrage","SNC Duval développement Hauts-de-France"],
      ["Maîtrise d’œuvre","Hamonic+Masson & Associés (mandataire)"],
      ["Programme","Restructuration d’un bâtiment administratif classé : résidence étudiante, résidence sociale, logements familiaux, commerce, espace culturel, restaurant en toiture"],
      ["Surface","20 410 m² SDP · 17 000 m² SHAB"],
      ["État du projet","Démarrage des études"]]
  };
  FEAT["high-garden"]=[
      ["Maîtrise d’ouvrage","Woodeum x Pitch Immo + Immobilière 3F"],
      ["Maîtrise d’œuvre","Hamonic+Masson & Associés (mandataire et coordinateur)"],
      ["Programme","240 logements dont 60 sociaux, commerces, espace public"],
      ["Surface","15 000 m² de logements + 3 000 m² de commerces + 400 m² de restaurant panoramique"],
      ["Jalons","Lauréat du concours international Inventons la Métropole du Grand Paris 2 en 2019"],
      ["Ma participation","De janvier à octobre 2019 : concours, puis avant-projet sommaire"],
      ["Mes contributions",["Conception et production des perspectives du concours, dont les études de façade en variantes bois et métal","Construction et mise à jour de la maquette numérique, support de la conception et des rendus","Avant-projet sommaire : préparation du modèle 3D ayant servi à fabriquer la maquette physique"]],
      ["État du projet","Livré en 2024"]];
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
      (st?'<p class="agt-mt">Opération : '+esc(st)+'</p>':'')+
      (S?'<p class="agt-mt">Suite en '+yr(S)+'</p>':'')+
      links(p)+'</article></li>'}
  function feat(p){var rows=FEAT[p.id]||[],ph=phases(p);
    return '<article class="agt-f" id="agf-'+esc(p.id)+'" tabindex="-1">'+media(p,1)+
      '<p class="agt-eb">'+yr(p)+' · '+esc(p.c)+'</p><h4>'+esc(p.t)+'</h4>'+
      '<p class="agt-ro"><b>'+esc(role(p))+'</b>'+(ph?'<span>'+esc(ph)+'</span>':'')+'</p>'+
      '<dl>'+rows.map(function(r){return '<div><dt>'+esc(r[0])+'</dt><dd>'+(Array.isArray(r[1])?'<ul>'+r[1].map(function(x){return '<li>'+esc(x)+'</li>'}).join("")+'</ul>':esc(r[1]))+'</dd></div>'}).join("")+'</dl>'+
      links(p)+'</article>'}

  function build(){
    var L=AG.slice().sort(function(a,b){return yr(a)-yr(b)}),ys=[];   // tri stable : l'ordre du fichier est gardé dans l'année
    L.forEach(function(p){var y=yr(p),e=ys[ys.length-1];if(!e||e.y!==y)ys.push(e={y:y,p:[]});e.p.push(p)});
    var n=AG.filter(function(p){return !p.m}).length,H=document.querySelector("#v-agence .wrap > h3.agt-h");if(H)H.textContent="Chronologie 2017 — 2026 · "+n+" projets";
    var F=FORDER.map(function(id){return AG.filter(function(p){return p.id===id})[0]}).filter(Boolean);
    $("agF").innerHTML=F.length?'<h3 class="agt-h">Trois références développées</h3><div class="agt-fg">'+F.map(feat).join("")+'</div>':"";
    $("agI").innerHTML=ys.map(function(e){return '<button type="button" data-y="'+e.y+'">'+e.y+'<small>'+e.p.length+'</small></button>'}).join("");
    $("agT").innerHTML=ys.map(function(e){return '<section class="agt-y" aria-labelledby="agy-'+e.y+'"><h3 id="agy-'+e.y+'" tabindex="-1">'+e.y+'</h3><ul class="agt-g">'+e.p.map(card).join("")+'</ul></section>'}).join("");
    [].forEach.call($("agI").children,function(b){b.onclick=function(){var h=$("agy-"+b.dataset.y);h.scrollIntoView({block:"start"});h.focus({preventScroll:true})}});
    deep()}
  /* lien direct vers une référence : #agence/<id> */
  function deep(){var m=/^#agence\/(.+)$/.exec(location.hash);if(!m||!AG.length)return;var el=$("ag-"+decodeURIComponent(m[1]));
    if(el)requestAnimationFrame(function(){el.scrollIntoView({block:"start"});el.focus({preventScroll:true})})}
  addEventListener("hashchange",deep);
  fetch("data/globe/agence.json?v=5").then(function(r){return r.json()}).then(function(j){AG=j.p;build()});
})();
