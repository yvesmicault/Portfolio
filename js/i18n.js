/* FR / EN : le site est écrit en français ; l'anglais est appliqué à l'affichage. */
(function () {
  var R = document.documentElement;

  /* phrases entières */
  var FULL = {
    /* globes 30/10 — NOUVELLES TRADUCTIONS (01/11/2026), à relire par Yves */
    "Ce globe situe mes projets d’études et mes concours. Survolez un repère pour le situer, sélectionnez-le pour lire sa fiche.": "This globe locates my study projects and my competitions. Hover over a marker to locate it, select it to read its details.",
    "Découvrir les projets": "Discover the projects",
    "Découverte guidée": "Guided tour",
    "Études puis concours, par date": "Studies then competitions, by date",
    "Projet précédent": "Previous project",
    "Projet suivant": "Next project",
    "Lecture": "Play",
    "Pause": "Pause",
    "Quitter": "Exit",
    "Résumé": "Summary",
    "Retour au globe": "Back to the globe",
    "Projet d’études": "Study project",
    "Chronologie": "Timeline",
    "Tout afficher": "Show all",
    "trait plein : ordre chronologique · pointillé : même période": "solid line: chronological order · dotted: same period",
    "Retour au Noyau": "Back to the Core",
    "Varèse, Italie · Master 1, S7 · 2013–2014": "Varese, Italy · Master 1, S7 · 2013–2014",
    "Clermont-Ferrand · Master 1, S8 · 2013–2014": "Clermont-Ferrand · Master 1, S8 · 2013–2014",
    "Ishøj, Copenhague · PFE en équipe à trois · 2015–2016": "Ishøj, Copenhagen · Diploma project, team of three · 2015–2016",
    "Glostrup, Copenhague · PFE en équipe à trois · 2015–2016": "Glostrup, Copenhagen · Diploma project, team of three · 2015–2016",
    "Limoges · Europan 16 · mentionné · collectif ITERA · mars 2021": "Limoges · Europan 16 · special mention · ITERA collective · March 2021",
    "YAC · Tree House Module · juin 2020 · sites de châteaux, dont Mothe-Chandeniers": "YAC · Tree House Module · June 2020 · château sites, including Mothe-Chandeniers",
    "Bee Breeders · Transiberian Pit Stops · mention honorable · novembre 2016": "Bee Breeders · Transiberian Pit Stops · honourable mention · November 2016",
    "Sagres, Portugal · ArkxSite · Site Landmark · 2016": "Sagres, Portugal · ArkxSite · Site Landmark · 2016",
    "À Varèse, deux gares proches restent séparées par les voies et la topographie. Sospesa les réunit par une structure de béton dont les plateaux et les rampes deviennent une traversée publique entre les quartiers. Une forêt urbaine remplace l’emprise asphaltée, tandis que le stationnement est regroupé dans un silo. La gare associe ainsi mobilités, paysage et espaces ouverts à des usages évolutifs.": "In Varese, two nearby stations remain separated by the tracks and the topography. Sospesa joins them with a concrete structure whose platforms and ramps become a public crossing between neighbourhoods. An urban forest replaces the asphalted site, while parking is grouped in a multi-storey car park. The station thus brings together mobility, landscape and open spaces for evolving uses.",
    "Sur les 33 hectares d’une ancienne emprise Michelin, Champ libre transforme une enclave industrielle en territoire habité et productif. Le projet associe 1 500 logements, patrimoine reconverti, parc et agriculture urbaine. Des fermes-ponts franchissent le paysage et rapprochent culture, élevage, transformation et distribution. À travers l’eau de la Tiretaine, la valorisation des déchets et la culture hydroponique, il explore une ville capable de produire une part de ses ressources.": "On the 33 hectares of a former Michelin site, Champ libre turns an industrial enclave into an inhabited and productive territory. The project combines 1,500 homes, converted heritage, a park and urban agriculture. Bridge-farms span the landscape and bring together growing, livestock farming, processing and distribution. Through the water of the Tiretaine, waste recovery and hydroponic growing, it explores a city able to produce part of its own resources.",
    "À Ishøj, au débouché du Lightrail sur le littoral, Terminus associe une usine expérimentale de macroalgues à une médiathèque et une auberge de jeunesse. Un pipeline guide le parcours vers un quai sur pilotis, entre marais et bassin. L’architecture de métal et de polycarbonate anticipe une seconde vie : après le déplacement de l’usine, les espaces productifs accueillent une base nautique et des bains.": "In Ishøj, where the Lightrail reaches the coast, Terminus combines an experimental macroalgae factory with a media library and a youth hostel. A pipeline guides the route towards a quay on stilts, between marsh and basin. The metal and polycarbonate architecture anticipates a second life: once the factory has moved, the production spaces house a water sports centre and baths.",
    "À Glostrup, Elle transforme le parcours vers la gare en jardin botanique et installe une usine de microalgues à l’articulation des quartiers résidentiels et industriels. Le projet associe production, équipements ouverts au public, bureaux et logements. Une barre traversée par le parc se redresse en tour ; l’ensemble met en relation les ressources du voisinage, la découverte des procédés de culture et de nouvelles manières d’habiter la frange industrielle.": "In Glostrup, Elle turns the route to the station into a botanical garden and sets a microalgae factory at the junction of the residential and industrial districts. The project combines production, facilities open to the public, offices and housing. A slab crossed by the park rises into a tower; the whole links the resources of the neighbourhood, the discovery of growing processes and new ways of inhabiting the industrial fringe.",
    "À Limoges, Les petits ventres-villes prend appui sur les vides, les mémoires et les édifices existants pour renouer les liens entre le centre historique et la Vienne. Places, jardins et passages composent une traversée publique, tandis que le manège, les friches GRDF et le site ENEDIS accueillent de nouveaux usages. Réhabilitation, réemploi et désimperméabilisation soutiennent une transformation progressive, attentive aux ressources du quartier.": "In Limoges, Les petits ventres-villes builds on the voids, memories and existing buildings to reconnect the historic centre with the Vienne. Squares, gardens and passages form a public crossing, while the riding hall, the GRDF brownfields and the ENEDIS site host new uses. Rehabilitation, reuse and de-sealing of soils support a gradual transformation, attentive to the resources of the district.",
    "The Crank House réinterprète la cabane comme une architecture nomade, modulaire et manipulable. Derrière une enveloppe de bois brûlé, manivelles, poulies et panneaux mobiles permettent à l’habitant de régler son ouverture au paysage. Des modules de vie, de repos et de service s’assemblent autour d’un noyau technique, sur une ossature légère en acier. Le dispositif s’adapte à différentes implantations, suspendu au contact des arbres ou porté par une structure autonome.": "The Crank House reinterprets the cabin as a nomadic, modular and hand-operated architecture. Behind a charred-timber envelope, cranks, pulleys and moving panels let the occupant adjust its opening to the landscape. Living, resting and service modules are assembled around a technical core, on a light steel frame. The system adapts to different settings, suspended among the trees or carried by a free-standing structure.",
    "Pensé pour les abords des grandes gares du Transsibérien, Siberian Spotlight propose une halte d’accueil et d’information touristique. Son enveloppe translucide devient un repère lumineux la nuit, tandis qu’un intérieur en mélèze de Sibérie évoque la chaleur des isbas. Une trame métallique régulière organise structure et mobilier ; la collecte des pluies et de la fonte des neiges complète un dispositif léger, préfabriqué et reproductible le long du voyage.": "Designed for the surroundings of the main Trans-Siberian stations, Siberian Spotlight proposes a stop for welcome and tourist information. Its translucent envelope becomes a beacon at night, while an interior in Siberian larch recalls the warmth of the isbas. A regular steel grid organises structure and furniture; collecting rain and snowmelt completes a light, prefabricated system that can be repeated along the journey.",
    "Sur les falaises de Sagres, Equilibrium transforme la découverte du paysage en parcours architectural. Sa géométrie triangulaire met en relation le cap Saint-Vincent et les forteresses de Beliche et de Sagres. Un cheminement en acier Corten alterne ancrage dans la roche et avancées vers le vide, tandis que des espaces d’exposition s’inscrivent dans le relief. Le projet explore l’équilibre entre terre, mer et ciel à travers le déplacement du visiteur.": "On the cliffs of Sagres, Equilibrium turns the discovery of the landscape into an architectural route. Its triangular geometry relates Cape St. Vincent to the fortresses of Beliche and Sagres. A Corten steel path alternates between anchoring in the rock and reaching out over the void, while exhibition spaces are set into the terrain. The project explores the balance between land, sea and sky through the visitor's movement.",
    "Les petits ventres-villes": "Les petits ventres-villes",
    /* page Agence chronologique (28/10) */
    "L’expérience en agence est celle d’une confrontation permanente entre les idées et leur réalité. Depuis 2017, chez Hamonic+Masson & Associés, j’ai exploré cette relation à travers des projets très différents, apprenant autant de leur conception que des contraintes, des échanges et des arbitrages qui accompagnent leur développement.": "Practice is a constant confrontation between ideas and their reality. Since 2017, at Hamonic+Masson & Associés, I have explored this relationship through very different projects, learning as much from their design as from the constraints, discussions and trade-offs that come with their development.",
    "Une décennie de projets, de recherches et d’expériences architecturales, du concours à la mise au point technique.": "A decade of projects, research and architectural experience, from competition to technical development.",
    "État du projet": "Project status", "Arrêté faute de financement": "Halted for lack of funding",
    "Woodeum x Pitch Immo + Immobilière 3F": "Woodeum x Pitch Immo + Immobilière 3F", "Hamonic+Masson & Associés (mandataire et coordinateur)": "Hamonic+Masson & Associés (lead architect and coordinator)",
    "240 logements dont 60 sociaux, commerces, espace public": "240 homes including 60 social units, shops, public space",
    "15 000 m² de logements + 3 000 m² de commerces + 400 m² de restaurant panoramique": "15,000 m² of housing + 3,000 m² of shops + 400 m² panoramic restaurant",
    "Lauréat du concours international Inventons la Métropole du Grand Paris 2 en 2019": "Winner of the Inventons la Métropole du Grand Paris 2 international competition in 2019",
    "Image : Hamonic+Masson & Associés": "Image: Hamonic+Masson & Associés", "Le Cabanon idéal, Marseille : perspective du projet": "Le Cabanon idéal, Marseille: project view", "Métamorphose, Angers : perspective du projet": "Métamorphose, Angers: project view", "High Garden, Rueil-Malmaison : perspective du projet": "High Garden, Rueil-Malmaison: project view",
    "Depuis mars 2017, je travaille au sein d’Hamonic + Masson & Associés, à Paris puis à Marseille. Cette chronologie présente mes contributions à des projets de logements, d’équipements et d’opérations urbaines, du concours aux études de projet et aux dossiers d’appel d’offres.": "Since March 2017, I have worked at Hamonic + Masson & Associés, first in Paris, then in Marseille. This timeline presents my contributions to housing, public facility and urban projects, from competition stage to design development and tender documents.",
    "Ma participation": "My involvement", "Mes contributions": "My contributions", "Environ trois ans, du concours au PRO / DCE": "About three years, from competition to technical design / tender",
    "Production des plans, images et détails, de l’esquisse au PRO / DCE": "Drawings, images and details, from sketch design to technical design / tender",
    "Coordination des bureaux d’études : CEC WRD (fluides et thermique), Inddigo (environnement), Magelan (étude technique)": "Coordination of the engineering consultants: CEC WRD (building services and thermal), Inddigo (environment), Magelan (technical studies)",
    "Dossiers remis : concours, APS, permis de construire, PRO / DCE": "Submissions: competition, outline design, building permit, technical design / tender",
    "Panora'Marne (suite)": "Panora'Marne (continued)", "Voir la référence de 2017": "See the 2017 reference", "Suite en 2022": "Continued in 2022", "Concours → APS → permis → PRO/DCE": "Competition → outline design → permit → technical design / tender",
    "Réhabilitation de la cité administrative": "Refurbishment of the administrative centre", "Parcours en agence": "Practice portfolio", "Trois références développées": "Three detailed references", "Chronologie 2017 — 2026": "Timeline 2017 — 2026",
    "Aller à l’année": "Go to year", "Fiche de l’agence ↗": "Practice project page ↗", "Nommé dans l’équipe de la fiche": "Named in the project team",
    "Participation au concours": "Competition entry", "Parcours et CV →": "Career and CV →", "Voir mes projets en agence →": "See my practice projects →",
    "Maîtrise d’ouvrage": "Client", "Maîtrise d’œuvre": "Design team", "Phases suivies": "Phases worked on", "Jalons": "Milestones", "Calendrier public": "Public schedule", "Opération": "Project status",
    "Chef de projet": "Project leader", "Assistant chef de projet": "Assistant project leader", "Esquisse": "Sketch design", "Avant-projet sommaire": "Outline design (APS)", "Avant-projet définitif": "Detailed design (APD)",
    "Permis de construire": "Building permit", "permis de construire": "building permit", "permis": "permit", "Concours international": "International competition", "Concours international (2019)": "International competition (2019)",
    "Concours (2018)": "Competition (2018)", "Concours (2020)": "Competition (2020)", "Livré en 2024": "Completed in 2024", "Livré en 2025": "Completed in 2025", "Livré en décembre 2023": "Completed in December 2023",
    "Livraison 2025": "Completion 2025", "En cours": "In progress", "En cours d’études": "In design development", "En cours, livraison 2026": "In progress, completion 2026", "En cours, livraison 2027": "In progress, completion 2027",
    "En cours, démarrage des études": "In progress, design studies starting", "Campus": "Campus", "Projet urbain mixte (Inventons la Métropole)": "Mixed-use urban project (Inventons la Métropole)",
    "Station-service": "Service station", "Avec Boris Bouchet Architectes": "With Boris Bouchet Architectes", "Avec Comte & Vollenweider": "With Comte & Vollenweider", "Avec RED CAT": "With RED CAT",
    "Projets conçus au sein d’Hamonic + Masson & Associés. Les rôles et phases indiqués décrivent ma participation personnelle.": "Projects designed at Hamonic + Masson & Associés. The roles and phases shown describe my personal involvement.",
    "Depuis mars 2017, je travaille au sein d’Hamonic + Masson & Associés, à Paris et Marseille. Cette chronologie présente mes contributions à des projets de logements, d’équipements et d’opérations urbaines, du concours aux études de projet et aux dossiers d’appel d’offres.": "Since March 2017, I have worked at Hamonic + Masson & Associés, in Paris and Marseille. This timeline presents my contributions to housing, public facility and urban projects, from competition stage to design development and tender documents.",
    "Opérations : fiches de hamonic-masson.com consultées le 28 octobre 2026, sinon CV. Rôles et phases : CV 2024 et 2026. « Opération » indique l’état public du projet, distinct de ma participation.": "Projects: hamonic-masson.com pages consulted on 28 October 2026, otherwise CV. Roles and phases: 2024 and 2026 CVs. “Project status” is the public state of the project, separate from my involvement.",
    "Page profil sur hamonic-masson.com ↗": "Profile page on hamonic-masson.com ↗",
    "BNP Paribas Real Estate Expertise": "BNP Paribas Real Estate Expertise", "Groupe Giboire": "Groupe Giboire", "SNC Duval développement Hauts-de-France": "SNC Duval développement Hauts-de-France",
    "Hamonic+Masson & Associés (mandataire) + Boris Bouchet Architectes": "Hamonic+Masson & Associés (lead architect) + Boris Bouchet Architectes", "Hamonic+Masson & Associés (mandataire)": "Hamonic+Masson & Associés (lead architect)",
    "117 logements, commerces et activités": "117 homes, shops and business units",
    "8 551 m² (fiche de l’agence) · 116 logements et 9 090 m² au dossier cité dans le CV": "8,551 m² (practice page) · 116 homes and 9,090 m² in the scheme cited in the CV",
    "Concours, APD / permis de construire, PRO / DCE (CV 2024)": "Competition, detailed design / building permit, technical design / tender (2024 CV)",
    "Livraison annoncée : 2025": "Announced completion: 2025", "Démarrage des études": "Design studies starting",
    "Bureaux, coworking, 76 logements en coliving, salle d’escalade, restaurant, serre événementielle": "Offices, coworking, 76 co-living units, climbing hall, restaurant, events greenhouse",
    "Lauréat du concours international Imagine Angers en 2018 · études en 2018 (CV 2024)": "Winner of the Imagine Angers international competition in 2018 · design studies in 2018 (2024 CV)",
    "Restructuration d’un bâtiment administratif classé : résidence étudiante, résidence sociale, logements familiaux, commerce, espace culturel, restaurant en toiture": "Conversion of a listed administrative building: student residence, social residence, family housing, shop, cultural space, rooftop restaurant",
    "20 410 m² SDP · 17 000 m² SHAB": "20,410 m² gross floor area (SDP) · 17,000 m² net living area (SHAB)",
    "Courriel": "Email", "Téléphone": "Phone", "Ville": "City", "En agence": "At the practice", "Télécharger le CV ↓": "Download the CV ↓",
    "Pour une candidature, un projet ou simplement échanger.": "For an application, a project, or simply to talk.",
    "Archive Yves Micault": "Yves Micault Archive",
    "Publications": "Publications", "Études": "Studies", "Concours": "Competitions", "Agence": "Practice", "Parcours": "Career",
    "PUBLICATIONS": "PUBLICATIONS", "CONCOURS": "COMPETITIONS", "ÉTUDES": "STUDIES", "AGENCE": "PRACTICE",
    "A r c h i t e c t e": "A r c h i t e c t",
    "Architecte HMONP · Marseille, France": "Licensed architect (HMONP) · Marseille, France",
    "Architecte HMONP avec près de dix ans d'expérience en agence, spécialisé dans la conception et le développement de projets de logements, d'équipements et d'opérations urbaines.":
      "Licensed architect (HMONP) with nearly ten years of practice, specialising in the design and development of housing, public buildings and urban schemes.",
    "L'architecture comme trait d'union : entre deux gares, entre la ville et ses champs, entre une usine et ce qu'elle peut devenir.":
      "Architecture as a link: between two stations, between the city and its fields, between a factory and what it could become.",
    "Près de dix ans d'expérience en agence, spécialisé dans la conception et le développement de projets de logements, d'équipements et d'opérations urbaines.":
      "Nearly ten years of practice, specialising in the design and development of housing, public buildings and urban schemes.",
    "Profil": "Profile",
    "L'architecture comme trait d'union.": "Architecture as a link.",
    "← Accueil": "← Home",
    "Disponible": "Available",
    "À partir de janvier 2027": "From January 2027",
    "Architecte HMONP chez Hamonic + Masson depuis 2017, entre Paris et Marseille. Logements, équipements, bureaux, opérations urbaines : du concours aux dossiers d'appel d'offres.": "Licensed architect (HMONP) at Hamonic + Masson since 2017, between Paris and Marseille. Housing, public buildings, offices, urban schemes: from competition to tender documents.",
    "Relier": "Connecting",
    "Une gare-passerelle entre deux gares, à 250 m et 6 m de dénivelé l'une de l'autre, à Varèse. Des fermes-ponts sur le site des usines Michelin, à Clermont-Ferrand. Une usine de macroalgues qui devient bains et base nautique, à Copenhague.": "A bridge-station between two stations, 250 m apart with a 6 m drop, in Varese. Bridge-farms on the Michelin factory site, in Clermont-Ferrand. A macroalgae factory that becomes baths and a water-sports base, in Copenhagen.",
    "Entre ville, architecture et nature": "Between city, architecture and nature",
    "BTCA à Reims, licence à Clermont-Ferrand, une année à l'Institut d'architecture de Moscou, puis le master EVAN, « Entre Ville, Architecture et Nature ». Une attention aux relations entre bâtiment, territoire et usages, prolongée en concours : Europan 16 à Limoges, mentionné par le jury.": "BTCA in Reims, a bachelor's in Clermont-Ferrand, a year at the Moscow Architectural Institute, then the EVAN master's, “Between City, Architecture and Nature”. An attention to the relations between building, territory and use, carried on in competitions: Europan 16 in Limoges, mentioned by the jury.",
    "La pratique": "Practice",
    "Conception et mise au point architecturale, pilotage des études, coordination des bureaux d'études et des équipes. ArchiCAD au quotidien, en BIM. Tenir ensemble programme, contraintes réglementaires et techniques, délais et intentions architecturales.": "Design and design development, managing studies, coordinating consultants and teams. ArchiCAD every day, in BIM. Holding together brief, regulatory and technical constraints, deadlines and architectural intent.",
    "Références": "References",
    "Luigi Snozzi à Monte Carasso. Aurelio Galfetti, le Bagno pubblico de Bellinzona et le Castelgrande. Mario Botta. L'Abitazione verticale de Jachen Könz. Des architectures suisses qui m'accompagnent depuis l'école.": "Luigi Snozzi in Monte Carasso. Aurelio Galfetti, the Bagno pubblico in Bellinzona and Castelgrande. Mario Botta. Jachen Könz's Abitazione verticale. Swiss architecture that has stayed with me since school.",
    "BTCA, Reims": "BTCA, Reims",
    "Licence, Clermont-Ferrand": "Bachelor, Clermont-Ferrand",
    "Institut d'architecture de Moscou": "Moscow Architectural Institute",
    "Diplôme, master EVAN": "Diploma, EVAN master",
    "Europan 16, mentionné": "Europan 16, mention",
    "Advienne que pourra": "Come what may",
    "Depuis 2017, je travaille chez Hamonic + Masson, entre Paris et Marseille, sur des logements, des équipements, des bureaux et des opérations urbaines, du concours jusqu'aux dossiers d'appel d'offres. J'y mène la conception et la mise au point des projets, je pilote les études et coordonne les bureaux d'études et les équipes, sur ArchiCAD et en BIM. Faire avancer un projet, c'est tenir ensemble un programme, des contraintes réglementaires et techniques, des délais et une intention.": "Since 2017 I have worked at Hamonic + Masson, between Paris and Marseille, on housing, public buildings, offices and urban schemes, from competition stage to tender documents. I lead the design and design development, manage studies and coordinate consultants and teams, in ArchiCAD and BIM. Moving a project forward means holding together a brief, regulatory and technical constraints, deadlines and an intention.",
    "J'y suis arrivé par étapes : un BTCA à Reims, l'école d'architecture de Clermont-Ferrand, une année à l'Institut d'architecture de Moscou, puis le master EVAN, « Entre Ville, Architecture et Nature ». Mes projets d'études relient ce qui est séparé : deux gares à Varèse, la ville et ses champs à Clermont-Ferrand, une usine et ce qu'elle peut devenir à Copenhague. Je prolonge ce travail en concours, comme pour Europan 16 à Limoges, mentionné par le jury. Et l'architecture suisse, de Luigi Snozzi à Aurelio Galfetti, de Mario Botta à Jachen Könz, m'accompagne depuis l'école.": "I got there step by step: a BTCA diploma in Reims, the Clermont-Ferrand school of architecture, a year at the Moscow Architectural Institute, then the EVAN master's, “Between City, Architecture and Nature”. My student projects connect what is apart: two stations in Varese, the city and its fields in Clermont-Ferrand, a factory and what it could become in Copenhagen. I carry this on in competitions, such as Europan 16 in Limoges, mentioned by the jury. And Swiss architecture, from Luigi Snozzi to Aurelio Galfetti, from Mario Botta to Jachen Könz, has stayed with me since school.",
    "Fiche": "Details", "6 400 m²": "6,400 m²", "Nature": "Type", "Programme": "Programme", "Surface": "Area", "Emplacement": "Location",
    "Passerelle de liaison, espace paysager, espace public": "Connecting footbridge, landscaped space, public space",
    "Gares de Varese FS et Varese Nord, Varèse, Italie": "Varese FS and Varese Nord stations, Varese, Italy",
    "1 500 logements, centre de recherche, centre de formation, fermes-ponts, parc-pâturage": "1,500 homes, research centre, training centre, bridge farms, pasture park",
    "Usines Michelin, Clermont-Ferrand": "Michelin factories, Clermont-Ferrand",
    "Équipement, projet de fin d’études": "Public facility, diploma project", "Tour mixte, projet de fin d’études": "Mixed-use tower, diploma project",
    "Usine de macroalgues, médiathèque, auberge de jeunesse pour 70 personnes ; en temps 2, base nautique et bains": "Macroalgae factory, media library, youth hostel for 70 guests; in phase 2, water sports base and baths",
    "Usine de microalgues, restaurant, musée, jardinerie, serre tropicale, bureaux, logements": "Microalgae factory, restaurant, museum, garden centre, tropical greenhouse, offices, housing",
    "Ishøj, Copenhague, Danemark": "Ishøj, Copenhagen, Denmark", "Glostrup, Copenhague, Danemark": "Glostrup, Copenhagen, Denmark",
    "Concours Europan 16, mentionné": "Europan 16 competition, mention", "Concours d’idées": "Ideas competition", "Concours d’idées · 2020": "Ideas competition · 2020",
    "Cabane nomade": "Nomadic cabin", "Châteaux de Mothe-Chandeniers, Ébaupinay, Vibrac": "Châteaux of Mothe-Chandeniers, Ébaupinay, Vibrac",
    "Concours Bee Breeders, mention honorable": "Bee Breeders competition, honourable mention",
    "Halte le long du Transsibérien (Transiberian Pit Stops)": "Stop along the Trans-Siberian (Transiberian Pit Stops)",
    "Le long du Transsibérien, Russie": "Along the Trans-Siberian, Russia", "Limoges, France": "Limoges, France", "Concours": "Competition",
    "ENSA Clermont-Ferrand": "ENSA Clermont-Ferrand",
    "Concours et appels à idées, faits en dehors de l'école et de l'agence.": "Competitions and ideas calls, done outside school and the office.",
    "Concours d'idées": "Ideas competition",
    "Ouvrir le projet": "Open the project", "Retour au globe": "Back to the globe",
    "Globe": "Globe",
    "Architecte HMONP": "Architect, HMONP",
    "Galerie": "Gallery",
    "Image précédente": "Previous image",
    "Image suivante": "Next image",
    "Projets étudiants": "Student projects", "Projets d’études": "Study projects", "Projets d'études": "Study projects",
    "Noyau · parcours": "Core · career", "Survoler un nœud": "Hover a node",
    "Archive en vrac": "Loose archive", "Mélanger ↻": "Shuffle ↻",
    "Aperçu privé v4": "Private preview v4",
    "Passer en mode sombre": "Switch to dark mode", "Passer en mode clair": "Switch to light mode", "Jour / nuit": "Day / night",
    "Sommaire": "Contents", "Images de tous les projets, cliquables": "Images from every project, clickable",
    "Précédent": "Previous", "Suivant": "Next", "Fermer": "Close",
    "Les trois documents tels qu'ils ont été mis en page. La couverture s'ouvre seule, puis la lecture se fait en double page.":
      "The three documents as they were laid out. The cover opens by itself, then reading continues in double-page spreads.",
    "Feuilleter →": "Browse →",
    "Master EVAN, ENSA Clermont-Ferrand : trois projets, chacun sera raconté par une maquette 3D, avec ses planches originales en dessous. Les projets de licence restent à feuilleter dans le book portfolio.":
      "EVAN master's track, ENSA Clermont-Ferrand: three projects, each told through a 3D model with its original boards below. Bachelor projects can still be browsed in the portfolio book.",
    "Concours et appels à idées faits en dehors de l'école et de l'agence. Panneaux consultables en entier.":
      "Competitions and ideas calls entered outside school and practice. Every board can be viewed in full.",
    "Hamonic + Masson & Associés, Paris · Marseille, depuis mars 2017. Architecte, chef de projet, conception et études.":
      "Hamonic + Masson & Associés, Paris · Marseille, since March 2017. Architect and project leader, design and technical studies.",
    "Images et intitulés repris du CV 2026. Rien de cette partie ne sera mis en ligne sans l'accord de l'agence.":
      "Images and titles taken from the 2026 CV. Nothing in this section will go online without the practice's consent.",
    "Maquette tirée du modèle SketchUp du projet (2013–2014), allégée pour le web. Environnement redessiné simplement ; trains et bus ajoutés. Images rendues à partir de la maquette.":
      "Model taken from the project's SketchUp file (2013–2014), lightened for the web. Surroundings redrawn in a simplified way; trains and buses added. Images rendered from the model.",
    "La maquette 3D n'a pas pu se charger ici.": "The 3D model could not be loaded here.",
    "Chargement de la maquette…": "Loading the model…", "Maquette indisponible": "Model unavailable",
    "glisser pour tourner · molette pour zoomer": "drag to rotate · scroll to zoom",
    "Aller au contenu": "Skip to content", "Voir les planches ↓": "See the boards ↓",
    "La maquette 3D ne peut pas s’afficher sur cet appareil.": "The 3D model cannot be shown on this device.",
    "pincer pour zoomer · glisser ou ← → pour changer de page": "pinch to zoom · swipe or ← → to turn pages",
    "pincer pour zoomer · glisser pour se déplacer": "pinch to zoom · drag to move",
    "molette ou double-clic pour zoomer · glisser pour se déplacer · ← → pour changer de page": "scroll or double-click to zoom · drag to move · ← → to turn pages",
    "molette ou double-clic pour zoomer · glisser pour se déplacer": "scroll or double-click to zoom · drag to move",
    "les quartiers, par le jardin": "the neighbourhoods, through the garden",
    "Projet de fin d'études en équipe à trois": "Diploma project, team of three",
    "Également publiés par l'agence": "Also published by the practice",
    "Source :": "Source:", "page profil sur hamonic-masson.com": "profile page on hamonic-masson.com",
    "Hamonic + Masson Architectes, Paris · Marseille": "Hamonic + Masson Architectes, Paris · Marseille",
    "Architecte / chef de projet, conception et études": "Architect / project leader, design and technical studies",
    "Monitorat en projet architectural et morphologie urbaine": "Teaching assistant in architectural design and urban morphology",
    "Conférence sur l'agriculture urbaine": "Talk on urban agriculture",
    "Télécharger le PDF ↓": "Download the PDF (French) ↓",
    "Young Architects Competitions (à confirmer)": "Young Architects Competitions (to be confirmed)",
    "6 A3 et images": "6 A3 sheets and images",
    "rouleau A0": "A0 roll", "356,7 × 84,1 cm chacun": "356.7 × 84.1 cm each",
    "assemblage des planches A1 verticales (59,4 × 84,1 cm)": "assembly of portrait A1 boards (59.4 × 84.1 cm)",
    "416 × 168 cm d'après le fichier": "416 × 168 cm according to the file", "à confirmer": "to be confirmed",
    "planche originale": "original board",
    "assemblage de 14 planches A1 verticales (59,4 × 84,1 cm)": "assembly of 14 portrait A1 boards (59.4 × 84.1 cm)", "7 de large sur 2 de haut": "7 across by 2 high"
  };

  /* morceaux, après découpe sur · , : / → + */
  var SEG = {
    "Concours": "Competition", "Agence": "Practice", "agence": "practice", "Publication": "Publication",
    "Projet de fin d'études": "Diploma project", "projet de fin d'études": "diploma project", "Semestres 1 et 2": "Semesters 1 and 2", "S9 et S10": "S9 and S10", "PFE": "Diploma project",
    "Agriculture urbaine": "Urban agriculture", "Gare de Varèse": "Varese Station", "Book portfolio": "Portfolio book",
    "CV illustré": "Illustrated CV", "Book PFE": "Diploma book", "Couverture": "Cover", "Couverture du CV 2026": "Cover of the 2026 CV",
    "voir l'image": "view image", "Moscou": "Moscow", "Copenhague": "Copenhagen", "Varèse": "Varese", "Italie": "Italy", "Maroc": "Morocco",
    "Domaine EVAN": "EVAN track", "maquette 3D": "3D model", "Projet de gare": "Railway station project", "Usines Michelin": "Michelin factories",
    "Mentionné": "Mention", "Mention honorable": "Honourable mention", "résultat à compléter": "result to be added",
    "Organisateur à compléter": "Organiser to be added", "Nom à vérifier": "Name to be checked", "Panneaux à venir": "Boards to come",
    "Cabane nomade": "Nomadic cabin", "sites de châteaux": "château sites", "1 planche": "1 board",
    "Îlot urbain": "Urban block", "Réhabilitation des thermes": "Refurbishment of the thermal baths", "commerces": "shops", "crèche": "nursery",
    "Archives départementales": "Departmental archives", "Tours jumelles": "Twin towers", "usages mixtes": "mixed uses", "Projet urbain": "Urban project",
    "Logements": "Housing", "logements": "housing", "Bureaux": "Offices", "bureaux": "offices", "activités": "business units",
    "résidence étudiante": "student residence", "équipement": "public facility", "groupe scolaire": "school complex",
    "Réhabilitation cité administrative": "Refurbishment of the administrative centre",
    "assistant chef de projet": "assistant project leader", "chef de projet": "project leader", "fiche agence ↗": "practice page ↗",
    "études": "design studies", "autorisation": "planning permission", "Autorisation": "Planning permission", "appel d'offres": "tender",
    "livré": "completed", "en cours": "in progress", "aperçu privé": "private preview",
    "Expérience": "Experience", "Formation": "Education",
 "Premières expériences professionnelles": "Early professional experience",
 "Profil": "Profile",
 "Architecte HMONP avec près de dix ans d’expérience en agence, spécialisé dans la conception et le développement de projets de logements, d’équipements et d’opérations urbaines.": "HMONP-licensed architect with nearly ten years of practice experience, specialised in the design and development of housing, public facilities and urban projects.",
 "Expérience de l’esquisse aux études de projet et aux dossiers d’appel d’offres.": "Experience from sketch design through design development to tender documents.",
 "Concours et distinctions": "Competitions and awards",
 "Mars 2021 · Limoges": "March 2021 · Limoges",
 "Nov. 2016 · Transiberian Pit Stops": "Nov. 2016 · Transiberian Pit Stops",
 "Mentionné": "Mention",
 "Mention honorable": "Honourable mention",
 "Compétences": "Skills",
 "Analyse de site": "Site analysis",
 "Études de faisabilité": "Feasibility studies",
 "Programme et surfaces": "Brief and areas",
 "Implantation / volumétrie": "Siting / massing",
 "Conception des plans": "Plan design",
 "Modélisation 3D": "3D modelling",
 "Pièces graphiques": "Drawings",
 "Supports de présentation": "Presentation documents",
 "Pilotage des études": "Design management",
 "Coordination d’équipe": "Team coordination",
 "Coordination BET": "Engineering consultants coordination",
 "Synthèse technique": "Technical coordination",
 "Analyse réglementaire": "Regulatory analysis",
 "Suivi des délais et livrables": "Schedule and deliverables tracking",
 "Outils": "Tools",
 "Langues": "Languages",
 "Français · natif": "French · native",
 "Anglais · bilingue": "English · fluent",
 "Mobilité": "Mobility",
 "Permis B · voiture & moto": "Driving licence · car & motorbike", "Depuis mars 2017": "Since March 2017", "Avr.–juil. 2015": "Apr.–Jul. 2015",
    "Fév.–mars 2013": "Feb.–Mar. 2013", "Mai–juin 2012": "May–Jun. 2012", "Fév. 2011": "Feb. 2011", "Fév. 2008": "Feb. 2008",
    "Diplôme d'architecte DE": "State-certified architect's degree (DE)", "master 2 EVAN": "Master 2, EVAN track",
    "Institut d'architecture de Moscou": "Moscow Architectural Institute", "Licence en architecture": "Bachelor of architecture",
    "CV & références": "CV & references", "parcours et références en agence": "career and practice references", "A3 plié": "folded A3", "perspective Sud puis planches 1 à 5": "south perspective, then boards 1 to 5", "perspective Nord puis planches 1 à 7": "north perspective, then boards 1 to 7", "assemblage de 6 panneaux verticaux (84,1 × 180 cm)": "assembly of 6 portrait panels (84.1 × 180 cm)", "assemblage de 8 panneaux verticaux (84,1 × 180 cm)": "assembly of 8 portrait panels (84.1 × 180 cm)", "Lire": "Read",
    "Pages du book portfolio": "Pages from the portfolio book", "cliquer pour agrandir": "click to enlarge",
    "Vue d'ensemble": "Overview", "Vue de nuit": "Night view", "Vue de jour": "Day view", "« L’architecture ne se résume pas à ce que l’on construit, mais à ce que l’on rend possible. »": "“Architecture is not summed up by what we build, but by what we make possible.”", "Mon parcours s’est construit entre Reims, Clermont-Ferrand et Moscou, au fil d’une formation qui m’a progressivement amené à considérer l’architecture au-delà du seul acte de bâtir. Le master EVAN, consacré aux relations entre ville, architecture et nature, a notamment nourri une réflexion sur les territoires, leurs transformations et les liens parfois fragiles qui unissent le paysage, le bâti et les usages.": "My path was built between Reims, Clermont-Ferrand and Moscow, through an education that gradually led me to consider architecture beyond the mere act of building. The EVAN master’s, devoted to the relationships between city, architecture and nature, fed in particular a reflection on territories, their transformations and the sometimes fragile bonds between landscape, built form and use.", "Depuis 2017, cette approche s’est enrichie d’une pratique professionnelle au sein de l’agence Hamonic + Masson, à Paris puis à Marseille. De la conception aux phases de développement technique, à travers des projets de logements, d’équipements et d’opérations urbaines, j’ai appris à confronter l’intention architecturale à la complexité du réel. Cette expérience, aujourd’hui portée par des responsabilités de chef de projet, m’a convaincu que la rigueur constructive et la sensibilité architecturale ne s’opposent pas, mais se nourrissent mutuellement.": "Since 2017, this approach has been enriched by professional practice at the Hamonic + Masson practice, in Paris and then Marseille. From design to technical development, through housing, public facilities and urban projects, I have learned to confront architectural intent with the complexity of the real. This experience, now carried by project-manager responsibilities, has convinced me that constructive rigour and architectural sensitivity are not opposed but feed one another.", "Je considère l’architecture moins comme la production d’un objet que comme une manière de révéler les qualités d’un lieu et d’en imaginer les possibles. Chaque territoire porte une histoire, des usages, des contraintes et des ressources qui méritent d’être observés avant d’être transformés. Le projet devient alors un travail de lecture et d’interprétation, une recherche d’équilibre entre ce qui préexiste et ce qui peut advenir.": "I see architecture less as the production of an object than as a way of revealing the qualities of a place and imagining its possibilities. Every territory carries a history, uses, constraints and resources that deserve to be observed before being transformed. The project then becomes a work of reading and interpretation, a search for balance between what already exists and what may come.", "Cette conviction nourrit une attention particulière aux relations que l’architecture établit : entre le bâti et le paysage, entre l’intime et le collectif, entre la permanence des lieux et l’évolution des modes de vie. J’aspire à une architecture à la fois sensible et rationnelle, capable de répondre aux réalités de son époque sans renoncer à la simplicité de ses intentions.": "This conviction fosters a particular attention to the relationships architecture establishes: between built form and landscape, between the intimate and the collective, between the permanence of places and changing ways of life. I aspire to an architecture both sensitive and rational, able to answer the realities of its time without giving up the simplicity of its intentions.", "Car la justesse d’un projet ne tient pas seulement à ce qu’il apporte, mais aussi à la manière dont il trouve sa place, dialogue avec ce qui l’entoure et laisse ouvertes les possibilités de demain.": "For the rightness of a project lies not only in what it brings, but also in the way it finds its place, dialogues with what surrounds it and leaves open the possibilities of tomorrow.",  "Vers l’horizon": "Towards the horizon", "Le parcours": "The route", "Projet urbain : places, logements, halle, salle de concert, recyclerie": "Urban project: squares, housing, hall, concert hall, recycling centre", "Places des Jacobins": "Jacobins squares", "Axonométrie d’ensemble": "Overall axonometry", "Zoom · le Manège": "Close-up · the Manège", "Zoom · GRDF": "Close-up · GRDF", "Zoom · Enedis": "Close-up · Enedis", "Limoges · mars 2021 · équipe : collectif ITERA · 3 panneaux A1": "Limoges · March 2021 · team: collectif ITERA · 3 A1 boards", "Le projet sur le site Europan": "The project on the Europan website", "Échanges Europan autour du projet": "Europan exchanges on the project", "Document précédent": "Previous document", "Document suivant": "Next document", "Friche urbaine": "Urban fallow", "Quartier belvédère": "Belvedere district", "Maquette tirée du modèle SketchUp du projet (2021), allégée pour le web : véhicules, silhouettes et mobilier retirés, terrain simplifié. Point de vue et annotations repris de l’axonométrie des planches.": "Model taken from the project’s SketchUp file (2021), lightened for the web: vehicles, figures and furniture removed, terrain simplified. Viewpoint and notes taken from the axonometric drawing of the boards.", "Vers l’océan": "Towards the ocean", "Le belvédère": "The lookout", "Vue du ciel": "Aerial view", "Vue de face": "Front view", "Vue intérieure": "Interior view", "Axonométrie": "Axonometry", "Vue du dessus": "Top view", "Éclaté": "Exploded view",  "Au pied de la tour": "At the foot of the tower", "Vers la tour": "Towards the tower", "BTCA, brevet de technicien de collaborateur d’architecte": "BTCA, architectural technician diploma", "Maquette tirée du modèle SketchUp du projet (2016), allégée pour le web : mobilier retiré. La ville et les arbres viennent du même modèle.": "Model taken from the project's SketchUp file (2016), lightened for the web: furniture removed. The city and trees come from the same model.", "Rendu réaliste": "Realistic render", "Depuis le parvis, 2": "From the forecourt, 2", "Depuis le parvis": "From the forecourt", "La nef": "The nave", "Les rampes": "The ramps", "Dans la ville": "In the city", "Planches de rendu": "Presentation boards",
    "Habiter": "Live", "Produire": "Produce", "Cultiver": "Grow", "Relier": "Connect", "Paître": "Graze", "logements du T1 au T6, bureaux et équipements": "flats from studio to 6-room, offices and facilities", "l’usine de microalgues, ouverte au public": "the microalgae factory, open to the public", "la trame de photobioréacteurs du jardin": "the garden’s grid of photobioreactors", "la voie ferrée, vers la gare de Glostrup": "the railway, towards Glostrup station", "les fermes-ponts, serres hydroponiques": "the bridge-farms, hydroponic greenhouses", "les tours de logements, autour des halles conservées": "housing towers around the retained halls", "le parc-pâturage entre les barres": "the pasture park between the bars", "serres hydroponiques et enclos sous le même toit": "hydroponic greenhouses and animal pens under one roof", "monter pour libérer le sol": "build up to free the ground", "le pâturage devient un parc public": "the pasture becomes a public park", "Étiquettes": "Labels", "Face au bassin": "Facing the pool", "À l'intérieur": "Inside", "Les bains thermaux": "The thermal baths", "Au-dessus du parc": "Above the park", "Les nouvelles lisières": "The new edges", "Les deux peaux": "The two skins", "Une nouvelle centralité": "A new centre", "Sur le quai": "On the quay", "Façade": "Façade", "Travailler": "Work", "les bandes horizontales : un garde-corps à chaque étage": "the horizontal bands: a railing on every floor", "les grandes verticales : des bureaux sur double hauteur": "the tall verticals: double-height offices", "Feuilleter le book PFE, avec toute l’étude urbaine": "Browse the PFE book, with the full urban study", "Flotter": "Float", "Transformer": "Transform", "Accueillir": "Welcome", "une dalle sur pilotis qui survole le bassin": "a slab on stilts hovering over the dock", "l’algue en plastique, puis l’usine en bains": "algae into plastic, then the factory into baths", "lire et dormir au bord de l’eau": "reading and sleeping by the water", "habiter la frange, au-dessus des voies": "living on the edge, above the tracks", "l’usine transforme les algues, on la traverse": "the factory processes the algae, and you walk through it", "un parc où le soleil cultive les algues": "a park where sunlight grows the algae", "Afficher ou masquer les annotations": "Show or hide annotations", "Gravir": "Climb", "depuis le parvis": "from the forecourt", "Franchir": "Cross", "les voies": "the tracks", "Connecter": "Connect",
    "← Noyau": "← Core"
  };
  var MO = { janvier: "January", "février": "February", mars: "March", avril: "April", mai: "May", juin: "June", juillet: "July",
    "août": "August", septembre: "September", octobre: "October", novembre: "November", "décembre": "December" };
  var RX = [
    [/^Semestre (\d)$/, "Semester $1"],
    [/^(\d+) logements$/, "$1 homes"],
    [/^(\d+) pages A4$/, "$1 A4 pages"],
    [/^Études (\d{4}–\d{4})$/, "Studies $1"],
    [/^(\d+) panneaux A1$/, "$1 A1 boards"],
    [/^1 planche A1$/, "1 A1 board"],
    [/^(\d+) planches originales$/, "$1 original boards"],
    [/^1 planche originale$/, "1 original board"],
    [/^panneau (\d+)$/, "panel $1"],
    [/^([A-Za-zéûôî]+) (\d{4})$/i, function (m, a, y) { var k = MO[a.toLowerCase()]; return k ? k + " " + y : m }]
  ];

  function seg(s) {
    if (SEG.hasOwnProperty(s)) return SEG[s];
    if (FULL.hasOwnProperty(s)) return FULL[s];
    for (var i = 0; i < RX.length; i++) if (RX[i][0].test(s)) return s.replace(RX[i][0], RX[i][1]);
    return null;
  }
  function tr(s) {
    var t = s.trim();
    if (!t || !/[A-Za-zÀ-ÿ]/.test(t)) return s;
    var lead = s.slice(0, s.indexOf(t)), tail = s.slice(s.indexOf(t) + t.length);
    if (FULL.hasOwnProperty(t)) return lead + FULL[t] + tail;
    var w = seg(t); if (w != null) return lead + w + tail;
    var m = /^(←\s*)(.+)$/.exec(t) || /^(.+?)(\s*→)$/.exec(t);
    if (m) { var a = m[1], b = m[2], x = /←/.test(a) ? tr(b) : tr(a); return lead + (/←/.test(a) ? a + x : x + b) + tail }
    var parts = t.split(/( · | : |, | \/ | → | \+ )/), hit = false;
    for (var i = 0; i < parts.length; i += 2) { var q = seg(parts[i]); if (q != null) { parts[i] = q; hit = true } }
    return hit ? lead + parts.join("") + tail : s;
  }

  var lang = "fr";
  try { lang = localStorage.getItem("ym-lang") || "fr" } catch (e) {}
  var ATTR = ["aria-label", "title", "alt"], FR = new WeakMap(), busy = false;
  function skip(el) { var l = el && el.closest && el.closest("[lang],[data-no-i18n],script,style"); return l && l !== R }

  function doText(n) {
    if (skip(n.parentElement)) return;
    var rec = FR.get(n);
    if (!rec || (n.nodeValue !== rec.en && n.nodeValue !== rec.fr)) rec = { fr: n.nodeValue }, FR.set(n, rec);
    var v = lang === "en" ? (rec.en = rec.en || tr(rec.fr)) : rec.fr;
    if (n.nodeValue !== v) n.nodeValue = v;
  }
  function doEl(el) {
    if (skip(el)) return;
    var rec = FR.get(el); if (!rec) FR.set(el, rec = {});
    ATTR.forEach(function (a) {
      if (!el.hasAttribute(a)) return;
      var cur = el.getAttribute(a), r = rec[a];
      if (!r || (cur !== r.en && cur !== r.fr)) r = rec[a] = { fr: cur };
      var v = lang === "en" ? (r.en = r.en || tr(r.fr)) : r.fr;
      if (cur !== v) el.setAttribute(a, v);
    });
  }
  function walk(root) {
    if (root.nodeType === 3) return doText(root);
    if (root.nodeType !== 1) return;
    doEl(root);
    root.querySelectorAll("[aria-label],[title],[alt]").forEach(doEl);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) doText(n);
  }
  function apply() {
    busy = true;
    R.lang = lang;
    if (!apply.t0) apply.t0 = document.title;
    document.title = lang === "en" ? tr(apply.t0) : apply.t0;
    walk(document.body);
    var b = document.getElementById("lng");
    if (b) { b.dataset.cur = lang; b.setAttribute("aria-label", lang === "en" ? "Passer le site en français" : "Switch the site to English") }
    obs.takeRecords(); busy = false;
  }
  var obs = new MutationObserver(function (ms) {
    if (busy) return; busy = true;
    ms.forEach(function (m) {
      if (m.type === "childList") m.addedNodes.forEach(walk);
      else if (m.type === "characterData") doText(m.target);
      else doEl(m.target);
    });
    obs.takeRecords(); busy = false;
  });
  function start() {
    var b = document.getElementById("lng");
    if (b) b.addEventListener("click", function () {
      lang = lang === "en" ? "fr" : "en";
      try { localStorage.setItem("ym-lang", lang) } catch (e) {}
      apply();
    });
    apply();
    obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTR });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
  window.__i18n = { tr: tr, get lang() { return lang } };
})();
