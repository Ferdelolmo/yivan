
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en' | 'fr' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      gallery: 'Galería',
      biography: 'Biografía',
      about: 'Sobre el Artista',
      workshop: 'Taller',
      contact: 'Contacto'
    },
    hero: {
      title: 'Iván Gómez Aparicio',
      subtitle: 'Escultor Contemporáneo',
      description: 'Explorando la belleza a través del metal, la piedra y la madera en formas contemporáneas que dialogan entre tradición e innovación.',
      cta: 'Explorar Obras'
    },
    gallery: {
      title: 'Galería de Obras',
      all: 'Todas',
      metal: 'Metal',
      stone: 'Piedra',
      wood: 'Madera',
      mixed: 'Materiales Mixtos'
    },
    about: {
      title: 'Sobre el Artista',
      text: 'La obra de Iván Gómez Aparicio explora la introspección y la identidad a través de esculturas que fusionan fuerza y fragilidad. Utilizando materiales nobles como bronce, hierro, madera, alabastro y resina, crea un diálogo entre la perfección clásica y una sensibilidad moderna. Sus piezas, marcadas por rostros serenos y formas alargadas, evocan arquetipos universales y mitologías personales, invitando al espectador a un estado de contemplación interior.'
    },
    biography: {
      intro: 'Nace en Ávila en 1989. Graduado en Bellas Artes en la Universidad Complutense de Madrid, también es técnico superior de Artes aplicadas a la Escultura en la escuela de Arte de Salamanca.',
      vision: {
        mastery: {
          title: 'Maestría en material y forma: un puente entre épocas',
          text: 'Iván Gómez es un escultor contemporáneo español reconocido por su excepcional destreza técnica y su profunda visión filosófica. Su obra emplea magistralmente materiales nobles —bronce, hierro y resina— para crear un diálogo entre la perfección clásica de la escultura europea y una sensibilidad moderna y minimalista. Esta síntesis única convierte su trabajo en piezas muy codiciadas por coleccionistas internacionales que buscan obras con gran valor conceptual y ejecución magistral.'
        },
        archetype: {
          title: 'El arquetipo y lo mitológico: un lenguaje universal',
          text: 'La escultura de Gómez explora arquetipos universales de la condición humana. Sus icónicas cabezas alargadas, a menudo con los ojos sellados, no son retratos, sino recipientes para conceptos de inmortalidad, trascendencia y protección espiritual. Crea una nueva mitología para la era contemporánea, elevando sus figuras al estatus de deidades desconocidas. Esta exploración de temas atemporales —compartidos por filosofías orientales y occidentales— genera una poderosa conexión intuitiva con audiencias globales.'
        },
        ontology: {
          title: 'Una inversión ontológica: la escultura como objeto espiritual',
          text: 'Cada forma vertical y monumental es una meditación sobre la existencia misma: una "categoría ontológica" hecha tangible. Para el coleccionista exigente, especialmente en mercados que valoran el arte con profundidad espiritual y silencio contemplativo, la obra de Gómez representa una oportunidad única. Sus piezas no solo se observan; se experimentan como encarnaciones visuales de creencias místicas.'
        },
        exhibition: {
          title: 'Exposición y reconocimiento',
          text: 'La obra de Iván Gómez constituye una incorporación contundente a las colecciones que valoran a artistas que están redefiniendo la tradición figurativa clásica en el siglo XXI. Sus esculturas imponen presencia y generan diálogo, representando una inversión sofisticada y con profundo significado en el futuro del arte contemporáneo.'
        }
      },
      cv: {
        scholarships: 'Becas',
        scholarships_items: [
          "(2011) Beca Erasmus en prácticas durante dos meses en Estambul (Turquía) por la junta de Castilla y León.",
          "(2015) Beca NEOVERRACO en Morille, (Salamanca).",
          "(2015) Becado por la Facultad de Bellas Artes UCM en Fabero, en el primer certamen Becas Cian Fabero, (León).",
          "(2016) I Encuentro de Artistas de Castilla y León, San Rafael (Segovia).",
          "(2016) Becado por la Facultad de Bellas Artes UCM en la beca Ayllón, (Segovia)."
        ],
        symposiums: 'Simposios',
        symposiums_items: [
          "(2011) 10 simposio internacional de escultura Buyukcekmece, Estambul (Turquía).",
          "2018 Primer simposio internacional de escultura Monte Paraiso, Elvas (Portugal)."
        ],
        awards: 'Premios',
        awards_items: [
          "(2017) Accésit en el “I Premio Deméter de Escultura, UCM, (Madrid).",
          "(2016) Accésit en el XIX Certamen Jóvenes Creadores Ayuntamiento de Ávila.",
          "(2016) Accésit en la XXIX Bienal Internacional de Escultura Jacinto Higueras, (Jaén).",
          "(2016) Primer visionado de porfolio en el II Premio de Escultura Solidario Fundación Cursol, (Valencia).",
          "(2016) Tercer premio ESCOMBRARTE, V concurso con materiales reciclados de la construcción, Segovia.",
          "(2016) Premio Buquerín en la beca Ayllón, (Segovia).",
          "(2015) Premio Fundición Codina en el 82 Salón de Otoño en la AEPE, Madrid.",
          "(2015) Premio Interesarte TV en el 82 Salón de Otoño en la AEPE, Madrid.",
          "(2015) Finalista en certamen Bodegas Valduero con las Bellas Artes, UCM, (Madrid).",
          "(2015) Premio UCM Becas Cian Fabero, (León).",
          "(2015) Finalista en el premio Pintaurus, Madrid.",
          "(2014) Obra seleccionada para exposición en “El patio de columnas” de la diputación de Segovia.",
          "(2013) Selección en el concurso de “Escultura en pequeño formato” La Salita, (Gijón)."
        ],
        solo: 'Exposiciones Individuales',
        solo_items: [
          "Ha expuesto individualmente en la sala el Episcopio de Ávila en (2016)."
        ],
        group: 'Exposiciones Colectivas',
        group_items: [
          "ArtMarbella (2018)",
          "BERLINER LISTE 2017 (Berlín)",
          "Kolner Liste, Colonia, (Alemania)",
          "Art Nordic, Copenhague, (Dinamarca)",
          "“AFF ART FAIR MILANO” Galería Gaudí, Milán, (Italia)",
          "Museo MEAM de Barcelona",
          "Donostiarteaninternational art night market, (San Sebastián)",
          "(2016) Mercado de Colón, (Valencia)",
          "77 Exposición Internacional Artes plásticas Valdepeñas",
          "XV Feria DEARTE Contemporáneo en el Palacio de Neptuno, (Madrid)",
          "51 PREMIO REINA SOFIA DE PINTURA Y ESCULTURA, de la Asociación Española de Pintores y Escultores. (Madrid)",
          "(2015) Exposición en el 82 Salón de Otoño en Casa de Vacas, (Madrid)",
          "Fundación Sierra Elvira, (Granada)",
          "Tabacalera, (Madrid)",
          "(2014) Fundación Pons, (Madrid)",
          "(2013) Premios ciudad de Badajoz, entre otras"
        ],
        institutions: 'Instituciones',
        institutions_items: [
          "Obra en el Museo de Arte Contemporáneo Obispo Vellosillo, Ayllón.",
          "Obra en las Bodegas Valduero, (Burgos).",
          "Grupo escultórico en el ayuntamiento de Fabero, (León).",
          "EOLO, pieza escultórica en la Facultad de Bellas Artes de la UCM. (Madrid)."
        ],
        monumental: 'Esculturas Monumentales',
        monumental_items: [
          "Ha realizado una docena de esculturas monumentales, la mayor parte se encuentran en la provincia de Ávila."
        ]
      },
      placeholders: {
        portrait: 'Espacio para Retrato del Artista',
        work1: 'Espacio para Obra Destacada 1',
        work2: 'Espacio para Obra Destacada 2',
        studio: 'Espacio para Foto de Taller / Proceso'
      }
    },
    contact: {
      title: 'Contacto',
      email: '@hola@ivangomezaparicio.com',
      phone: '+34 xxx xxx xxx',
      exhibition: 'Próximas Exposiciones',
      available: 'Obra disponible bajo encargo',
    },
    workshop: {
      title: 'Taller',
      text: 'En el corazón de Gallegos de Altamiros se encuentra el taller de Iván Gómez Aparicio, un espacio dedicado a la creación de escultura contemporánea donde el artista transforma materiales nobles mediante técnicas innovadoras en obras que exploran la intersección entre forma, materia y emoción humana. Funcionando como un laboratorio vivo, cada pieza surge de un diálogo profundo entre concepto e intuición, combinando tradición escultórica con procesos meticulosos para reflejar una visión única y atemporal. Situado en esta localidad, el taller invita a visitantes interesados a contactar para coordinar visitas y descubrir de cerca el epicentro de su producción artística.'
    },
    common: {
      back: 'Volver al Inicio'
    }
  },
  en: {
    nav: {
      home: 'Home',
      gallery: 'Gallery',
      biography: 'Biography',
      about: 'About the Artist',
      workshop: 'Workshop',
      contact: 'Contact'
    },
    hero: {
      title: 'Iván Gómez Aparicio',
      subtitle: 'Contemporary Sculptor',
      description: 'Exploring beauty through metal, stone and wood in contemporary forms that dialogue between tradition and innovation.',
      cta: 'Explore Works'
    },
    gallery: {
      title: 'Gallery of Works',
      all: 'All',
      metal: 'Metal',
      stone: 'Stone',
      wood: 'Wood',
      mixed: 'Mixed Media'
    },
    about: {
      title: 'About the Artist',
      text: 'The work of Iván Gómez Aparicio explores introspection and identity through sculptures that fuse strength and fragility. Using noble materials such as bronze, iron, wood, alabaster, and resin, he creates a dialogue between classical perfection and modern sensibility. His pieces, marked by serene faces and elongated forms, evoke universal archetypes and personal mythologies, inviting the viewer into a state of inner contemplation.'
    },
    biography: {
      intro: 'Born in Ávila in 1989. Graduated in Fine Arts from the Complutense University of Madrid, he is also a senior technician in Applied Arts to Sculpture from the Salamanca School of Art.',
      vision: {
        mastery: {
          title: 'Mastery of Material and Form: A Bridge Between Epochs',
          text: 'Iván Gómez is a Spanish contemporary sculptor recognized for his exceptional technical skill and profound philosophical vision. His work masterfully employs noble materials—bronze, iron, and resin—to create a dialogue between the classical perfection of European sculpture and a modern, minimalist sensibility. This unique synthesis makes his work highly sought after by international collectors seeking pieces with great conceptual value and masterful execution.'
        },
        archetype: {
          title: ' The Archetype and the Mythological: A Universal Language',
          text: 'Gómez\'s sculpture explores universal archetypes of the human condition. His iconic elongated heads, often with sealed eyes, are not portraits, but vessels for concepts of immortality, transcendence, and spiritual protection. He creates a new mythology for the contemporary era, elevating his figures to the status of unknown deities. This exploration of timeless themes—shared by Eastern and Western philosophies—generates a powerful intuitive connection with global audiences.'
        },
        ontology: {
          title: 'An Ontological Investment: Sculpture as Spiritual Object',
          text: 'Each vertical and monumental form is a meditation on existence itself: an "ontological category" made tangible. For the discerning collector, especially in markets that value art with spiritual depth and contemplative silence, Gómez\'s work represents a unique opportunity. His pieces are not just observed; they are experienced as visual embodiments of mystical beliefs.'
        },
        exhibition: {
          title: 'Exhibition and Recognition',
          text: 'Iván Gómez\'s work constitutes a compelling addition to collections that value artists who are redefining the classical figurative tradition in the 21st century. His sculptures command presence and generate dialogue, representing a sophisticated investment with profound significance in the future of contemporary art.'
        }
      },
      cv: {
        scholarships: 'Scholarships',
        scholarships_items: [
          "(2011) Erasmus internship scholarship for two months in Istanbul (Turkey) by the Junta de Castilla y León.",
          "(2015) NEOVERRACO Scholarship in Morille, (Salamanca).",
          "(2015) Scholarship from the Faculty of Fine Arts UCM in Fabero, in the first Cian Fabero Scholarship contest, (León).",
          "(2016) I Meeting of Artists of Castilla y León, San Rafael (Segovia).",
          "(2016) Scholarship from the Faculty of Fine Arts UCM for the Ayllón scholarship, (Segovia)."
        ],
        symposiums: 'Symposiums',
        symposiums_items: [
          "(2011) 10th International Sculpture Symposium Buyukcekmece, Istanbul (Turkey).",
          "2018 First International Sculpture Symposium Monte Paraiso, Elvas (Portugal)."
        ],
        awards: 'Awards',
        awards_items: [
          "(2017) Honorable Mention in the 'I Deméter Sculpture Prize', UCM, (Madrid).",
          "(2016) Honorable Mention in the XIX Young Creators Contest, City Council of Ávila.",
          "(2016) Honorable Mention in the XXIX International Sculpture Biennial Jacinto Higueras, (Jaén).",
          "(2016) First portfolio review in the II Solidarity Sculpture Prize Cursol Foundation, (Valencia).",
          "(2016) Third prize ESCOMBRARTE, V contest with recycled construction materials, Segovia.",
          "(2016) Buquerín Prize in the Ayllón scholarship, (Segovia).",
          "(2015) Codina Foundry Prize at the 82nd Autumn Salon at the AEPE, Madrid.",
          "(2015) Interesarte TV Prize at the 82nd Autumn Salon at the AEPE, Madrid.",
          "(2015) Finalist in the Bodegas Valduero contest with Fine Arts, UCM, (Madrid).",
          "(2015) UCM Cian Fabero Scholarship Prize, (León).",
          "(2015) Finalist in the Pintaurus Prize, Madrid.",
          "(2014) Work selected for exhibition in 'The Column Courtyard' of the Segovia Council.",
          "(2013) Selection in the 'Small Format Sculpture' contest La Salita, (Gijón)."
        ],
        solo: 'Solo Exhibitions',
        solo_items: [
          "He has exhibited individually in the Episcopio room of Ávila in (2016)."
        ],
        group: 'Collective Exhibitions',
        group_items: [
          "ArtMarbella (2018)",
          "BERLINER LISTE 2017 (Berlin)",
          "Kolner Liste, Cologne, (Germany)",
          "Art Nordic, Copenhagen, (Denmark)",
          "“AFF ART FAIR MILANO” Gaudí Gallery, Milan, (Italy)",
          "MEAM Museum of Barcelona",
          "Donostiartean International Art Night Market, (San Sebastián)",
          "(2016) Colón Market, (Valencia)",
          "77 International Plastic Arts Exhibition Valdepeñas",
          "XV DEARTE Contemporary Fair at the Palace of Neptune, (Madrid)",
          "51 REINA SOFIA PAINTING AND SCULPTURE PRIZE, from the Spanish Association of Painters and Sculptors. (Madrid)",
          "(2015) Exhibition at the 82nd Autumn Salon at Casa de Vacas, (Madrid)",
          "Sierra Elvira Foundation, (Granada)",
          "Tabacalera, (Madrid)",
          "(2014) Pons Foundation, (Madrid)",
          "(2013) City of Badajoz Awards, among others"
        ],
        institutions: 'Institutions',
        institutions_items: [
          "Work in the Obispo Vellosillo Museum of Contemporary Art, Ayllón.",
          "Work in Bodegas Valduero, (Burgos).",
          "Sculptural group in the City Hall of Fabero, (León).",
          "EOLO, sculptural piece in the Faculty of Fine Arts of the UCM. (Madrid)."
        ],
        monumental: 'Monumental Sculptures',
        monumental_items: [
          "He has created a dozen monumental sculptures, mostly located in the province of Ávila."
        ]
      },
      placeholders: {
        portrait: 'Space for Artist Portrait',
        work1: 'Space for Featured Work 1',
        work2: 'Space for Featured Work 2',
        studio: 'Space for Studio / Process Photo'
      }
    },
    contact: {
      title: 'Contact',
      email: 'mail@ivangomezaparicio.com',
      phone: '+34 xxx xxx xxx',
      exhibition: 'Upcoming Exhibitions',
      available: 'Custom work available by commission',
    },
    workshop: {
      title: 'Workshop',
      text: 'Nestled in the heart of Gallegos de Altamiros is the workshop of Iván Gómez Aparicio, a space dedicated to the creation of contemporary sculpture where the artist transforms noble materials through innovative techniques into works that explore the intersection between form, matter, and human emotion. Functioning as a living laboratory, each piece emerges from a profound dialogue between concept and intuition, combining sculptural tradition with meticulous processes to reflect a unique and timeless vision. Located in this locality, the workshop invites interested visitors to contact for coordinating visits and discovering up close the epicenter of his artistic production.'
    },
    common: {
      back: 'Back to Home'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      gallery: 'Galerie',
      biography: 'Biographie',
      about: 'À propos de l\'Artiste',
      workshop: 'Atelier',
      contact: 'Contact'
    },
    hero: {
      title: 'Iván Gómez Aparicio',
      subtitle: 'Sculpteur Contemporain',
      description: 'Explorer la beauté à travers le métal, la pierre et le bois dans des formes contemporaines qui dialoguent entre tradition et innovation.',
      cta: 'Explorer les Œuvres'
    },
    gallery: {
      title: 'Galerie des Œuvres',
      all: 'Toutes',
      metal: 'Métal',
      stone: 'Pierre',
      wood: 'Bois',
      mixed: 'Matériaux Mixtes'
    },
    about: {
      title: 'À propos de l\'Artiste',
      text: 'L\'œuvre d\'Iván Gómez Aparicio explore l\'introspection et l\'identité à travers des sculptures qui fusionnent force et fragilité. Utilisant des matériaux nobles tels que le bronze, le fer, le bois, l\'albâtre et la résine, il crée un dialogue entre la perfection classique et une sensibilité moderne. Ses pièces, marquées par des visages sereins et des formes allongées, évoquent des archétypes universels et des mythologies personnelles, invitant le spectateur à un état de contemplation intérieure.'
    },
    biography: {
      intro: 'Né à Ávila en 1989. Diplômé en Beaux-Arts de l\'Université Complutense de Madrid, il est également technicien supérieur en Arts Appliqués à la Sculpture de l\'École d\'Art de Salamanque.',
      vision: {
        mastery: {
          title: 'Maîtrise de la Matière et de la Forme : Un Pont entre les Époques',
          text: 'Iván Gómez est un sculpteur contemporain espagnol reconnu pour son exceptionnelle dextérité technique et sa profonde vision philosophique. Son œuvre emploie magistralement des matériaux nobles — bronze, fer et résine — pour créer un dialogue entre la perfection classique de la sculpture européenne et une sensibilité moderne et minimaliste. Cette synthèse unique fait de son travail des pièces très prisées par les collectionneurs internationaux en quête d\'œuvres à grande valeur conceptuelle et exécution magistrale.'
        },
        archetype: {
          title: 'L\'Archétype et le Mythologique : Un Langage Universel',
          text: 'La sculpture de Gómez explore des archétypes universels de la condition humaine. Ses têtes allongées emblématiques, souvent aux yeux clos, ne sont pas des portraits, mais des réceptacles pour des concepts d\'immortalité, de transcendance et de protection spirituelle. Il crée une nouvelle mythologie pour l\'ère contemporaine, élevant ses figures au rang de divinités inconnues. Cette exploration de thèmes intemporels — partagés par les philosophies orientales et occidentales — génère une puissante connexion intuitive avec des audiences mondiales.'
        },
        ontology: {
          title: 'Une Investissement Ontologique : La Sculpture comme Objet Spirituel',
          text: 'Chaque forme verticale et monumentale est une méditation sur l\'existence même : une "catégorie ontologique" rendue tangible. Pour le collectionneur exigeant, en particulier sur les marchés qui valorisent l\'art avec une profondeur spirituelle et un silence contemplatif, l\'œuvre de Gómez représente une opportunité unique. Ses pièces ne sont pas seulement observées ; elles sont vécues comme des incarnations visuelles de croyances mystiques.'
        },
        exhibition: {
          title: 'Exposition et Reconnaissance',
          text: 'L\'œuvre d\'Iván Gómez constitue un ajout convaincant aux collections qui valorisent les artistes redéfinissant la tradition figurative classique au XXIe siècle. Ses sculptures imposent leur présence et génèrent un dialogue, représentant un investissement sophistiqué et porteur de sens pour l\'avenir de l\'art contemporain.'
        }
      },
      cv: {
        scholarships: 'Bourses',
        scholarships_items: [
          "(2011) Bourse de stage Erasmus de deux mois à Istanbul (Turquie) par la Junta de Castilla y León.",
          "(2015) Bourse NEOVERRACO à Morille, (Salamanque).",
          "(2015) Boursier de la Faculté des Beaux-Arts UCM à Fabero, lors du premier concours de bourses Cian Fabero, (León).",
          "(2016) I Rencontre d'Artistes de Castille-et-León, San Rafael (Ségovie).",
          "(2016) Boursier de la Faculté des Beaux-Arts UCM pour la bourse Ayllón, (Ségovie)."
        ],
        symposiums: 'Symposiums',
        symposiums_items: [
          "(2011) 10e Festival international de sculpture Buyukcekmece, Istanbul (Turquie).",
          "2018 Premier symposium international de sculpture Monte Paraiso, Elvas (Portugal)."
        ],
        awards: 'Prix',
        awards_items: [
          "(2017) Mention honorable au « Ier Prix de Sculpture Deméter », UCM, (Madrid).",
          "(2016) Mention honorable au XIXe Concours Jeunes Créateurs de la Mairie d'Ávila.",
          "(2016) Mention honorable à la XXIXe Biennale Internationale de Sculpture Jacinto Higueras, (Jaén).",
          "(2016) Première lecture de portfolio au IIe Prix de Sculpture Solidaire Fondation Cursol, (Valence).",
          "(2016) Troisième prix ESCOMBRARTE, Ve concours avec matériaux de construction recyclés, Ségovie.",
          "(2016) Prix Buquerín de la bourse Ayllón, (Ségovie).",
          "(2015) Prix Fonderie Codina au 82e Salon d'Automne de l'AEPE, Madrid.",
          "(2015) Prix Interesarte TV au 82e Salon d'Automne de l'AEPE, Madrid.",
          "(2015) Finaliste du concours Bodegas Valduero avec les Beaux-Arts, UCM, (Madrid).",
          "(2015) Prix UCM Bourses Cian Fabero, (León).",
          "(2015) Finaliste du prix Pintaurus, Madrid.",
          "(2014) Œuvre sélectionnée pour l'exposition dans « La cour des colonnes » de la députation de Ségovie.",
          "(2013) Sélection au concours de « Sculpture petit format » La Salita, (Gijón)."
        ],
        solo: 'Expositions Personnelles',
        solo_items: [
          "Il a exposé individuellement dans la salle Episcopio d'Ávila en (2016)."
        ],
        group: 'Expositions Collectives',
        group_items: [
          "ArtMarbella (2018)",
          "BERLINER LISTE 2017 (Berlin)",
          "Kolner Liste, Cologne, (Allemagne)",
          "Art Nordic, Copenhague, (Danemark)",
          "« AFF ART FAIR MILANO » Galerie Gaudí, Milan, (Italie)",
          "Musée MEAM de Barcelone",
          "Donostiartean International Art Night Market, (Saint-Sébastien)",
          "(2016) Marché de Colón, (Valence)",
          "77e Exposition Internationale d'Arts Plastiques Valdepeñas",
          "XV Foire Contemporaine DEARTE au Palais de Neptune, (Madrid)",
          "51e PRIX REINE SOFIA DE PEINTURE ET SCULPTURE, de l'Association Espagnole des Peintres et Sculpteurs. (Madrid)",
          "(2015) Exposition au 82e Salon d'Automne à Casa de Vacas, (Madrid)",
          "Fondation Sierra Elvira, (Grenade)",
          "Tabacalera, (Madrid)",
          "(2014) Fondation Pons, (Madrid)",
          "(2013) Prix de la ville de Badajoz, entre autres"
        ],
        institutions: 'Institutions',
        institutions_items: [
          "Œuvre au Musée d'Art Contemporain Obispo Vellosillo, Ayllón.",
          "Œuvre aux Bodegas Valduero, (Burgos).",
          "Groupe sculptural à la Mairie de Fabero, (León).",
          "EOLO, pièce sculpturale à la Faculté des Beaux-Arts de l'UCM. (Madrid)."
        ],
        monumental: 'Sculptures Monumentales',
        monumental_items: [
          "Il a réalisé une douzaine de sculptures monumentales, la plupart situées dans la province d'Ávila."
        ]
      },
      placeholders: {
        portrait: 'Espace pour Portrait de l\'Artiste',
        work1: 'Espace pour Œuvre Vedette 1',
        work2: 'Espace pour Œuvre Vedette 2',
        studio: 'Espace pour Photo d\'Atelier / Processus'
      }
    },
    contact: {
      title: 'Contact',
      email: 'contact@ivangomezaparicio.com',
      phone: '+34 xxx xxx xxx',
      exhibition: 'Prochaines Expositions',
      available: 'Œuvres sur commande disponibles',
    },
    workshop: {
      title: 'Atelier',
      text: 'Au cœur de Gallegos de Altamiros se trouve l\'atelier d\'Iván Gómez Aparicio, un espace dédié à la création de sculpture contemporaine où l\'artiste transforme des matériaux nobles par des techniques innovantes en œuvres explorant l\'intersection entre forme, matière et émotion humaine. Fonctionnant comme un laboratoire vivant, chaque pièce naît d\'un dialogue profond entre concept et intuition, combinant tradition sculpturale et processus méticuleux pour refléter une vision unique et intemporelle. Situé dans cette localité, l\'atelier invite les visiteurs intéressés à contacter pour coordonner des visites et découvrir de près l\'épicentre de sa production artistique.'
    },
    common: {
      back: 'Retour à l\'accueil'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      gallery: 'Галерея',
      biography: 'Биография',
      about: 'О Художнике',
      workshop: 'Мастерская',
      contact: 'Контакты'
    },
    hero: {
      title: 'Иван Гомес Апарисио',
      subtitle: 'Современный Скульптор',
      description: 'Исследуя красоту через металл, камень и дерево в современных формах, которые ведут диалог между традицией и инновацией.',
      cta: 'Посмотреть Работы'
    },
    gallery: {
      title: 'Галерея Работ',
      all: 'Все',
      metal: 'Металл',
      stone: 'Камень',
      wood: 'Дерево',
      mixed: 'Смешанные Материалы'
    },
    about: {
      title: 'О Художнике',
      text: 'Работы Ивана Гомеса Апарисио исследуют интроспекцию и идентичность через скульптуры, объединяющие силу и хрупкость. Используя благородные материалы, такие как бронза, железо, дерево, алебастр и смола, он создает диалог между классическим совершенством и современной чувствительностью. Его произведения, отмеченные безмятежными лицами и удлиненными формами, вызывают универсальные архетипы и личные мифологии, приглашая зрителя в состояние внутреннего созерцания.'
    },
    biography: {
      intro: 'Родился в Авиле в 1989 году. Окончил факультет изящных искусств Мадридского университета Комплутенсе, также является старшим техником по прикладным искусствам в скульптуре Школы искусств Саламанки.',
      vision: {
        mastery: {
          title: 'Мастерство Материала и Формы: Мост Между Эпохами',
          text: 'Иван Гомес — современный испанский скульптор, признанный за исключительное техническое мастерство и глубокое философское видение. Его работы мастерски используют благородные материалы — бронзу, железо и смолу — для создания диалога между классическим совершенством европейской скульптуры и современной минималистской чувствительностью. Этот уникальный синтез делает его работы желанными для международных коллекционеров, ищущих произведения с большой концептуальной ценностью и мастерским исполнением.'
        },
        archetype: {
          title: 'Архетип и Мифологическое: Универсальный Язык',
          text: 'Скульптура Гомеса исследует универсальные архетипы человеческого состояния. Его знаковые удлиненные головы, часто с закрытыми глазами, — это не портреты, а сосуды для концепций бессмертия, трансцендентности и духовной защиты. Он создает новую мифологию для современной эпохи, возвышая свои фигуры до статуса неизвестных божеств. Это исследование вневременных тем, общих для восточной и западной философий, порождает мощную интуитивную связь с глобальной аудиторией.'
        },
        ontology: {
          title: 'Онтологическая Инвестиция: Скульптура как Духовный Объект',
          text: 'Каждая вертикальная и монументальная форма — это медитация о самом существовании: «онтологическая категория», ставшая осязаемой. Для взыскательного коллекционера, особенно на рынках, ценящих искусство с духовной глубиной и созерцательной тишиной, работы Гомеса представляют уникальную возможность. Его произведения не просто созерцают; их переживают как визуальные воплощения мистических верований.'
        },
        exhibition: {
          title: 'Выставки и Признание',
          text: 'Работы Ивана Гомеса представляют собой убедительное дополнение к коллекциям, которые ценят художников, переосмысливающих классическую фигуративную традицию в XXI веке. Его скульптуры внушают присутствие и порождают диалог, представляя собой утонченную инвестицию с глубоким значением в будущее современного искусства.'
        }
      },
      cv: {
        scholarships: 'Стипендии',
        scholarships_items: [
          "(2011) Стипендия Erasmus на двухмесячную стажировку в Стамбуле (Турция) от Хунты Кастилии и Леона.",
          "(2015) Стипендия NEOVERRACO в Морилье, (Саламанка).",
          "(2015) Стипендиат факультета изящных искусств UCM в Фаберо, на первом конкурсе стипендий Cian Fabero, (Леон).",
          "(2016) I Встреча художников Кастилии и Леона, Сан-Рафаэль (Сеговия).",
          "(2016) Стипендиат факультета изящных искусств UCM на стипендию Айльон, (Сеговия)."
        ],
        symposiums: 'Симпозиумы',
        symposiums_items: [
          "(2011) 10-й Международный симпозиум скульптуры Бююкчекмедже, Стамбул (Турция).",
          "2018 Первый международный симпозиум скульптуры Монте-Параисо, Элваш (Португалия)."
        ],
        awards: 'Награды',
        awards_items: [
          "(2017) Почетное упоминание в «I Премии Деметры по скульптуре», UCM, (Мадрид).",
          "(2016) Почетное упоминание в XIX конкурсе молодых творцов городского совета Авилы.",
          "(2016) Почетное упоминание в XXIX Международной биеннале скульптуры Хасинто Игерас, (Хаэн).",
          "(2016) Первый просмотр портфолио во II Премии солидарной скульптуры Фонда Курсоль, (Валенсия).",
          "(2016) Третья премия ESCOMBRARTE, V конкурс с использованием переработанных строительных материалов, Сеговия.",
          "(2016) Премия Букерин на стипендии Айльон, (Сеговия).",
          "(2015) Премия литейного производства Codina на 82-м Осеннем салоне в AEPE, Мадрид.",
          "(2015) Премия Interesarte TV на 82-м Осеннем салоне в AEPE, Мадрид.",
          "(2015) Финалист конкурса Bodegas Valduero с изящными искусствами, UCM, (Мадрид).",
          "(2015) Премия стипендии UCM Cian Fabero, (Леон).",
          "(2015) Финалист премии Pintaurus, Мадрид.",
          "(2014) Работа выбрана для выставки в «Дворике колонн» совета Сеговии.",
          "(2013) Отбор на конкурс «Скульптура малого формата» La Salita, (Хихон)."
        ],
        solo: 'Персональные Выставки',
        solo_items: [
          "Персональная выставка в зале Эпископио в Авиле в (2016)."
        ],
        group: 'Коллективные Выставки',
        group_items: [
          "ArtMarbella (2018)",
          "BERLINER LISTE 2017 (Берлин)",
          "Kolner Liste, Кельн, (Германия)",
          "Art Nordic, Копенгаген, (Дания)",
          "«AFF ART FAIR MILANO» Галерея Гауди, Милан, (Италия)",
          "Музей MEAM в Барселоне",
          "Международный ночной арт-рынок Donostiartean, (Сан-Себастьян)",
          "(2016) Рынок Колон, (Валенсия)",
          "77-я Международная выставка пластических искусств Вальдепеньяс",
          "XV Современная ярмарка DEARTE во Дворце Нептуна, (Мадрид)",
          "51-Я ПРЕМИЯ КОРОЛЕВЫ СОФИИ ПО ЖИВОПИСИ И СКУЛЬПТУРЕ, от Испанской ассоциации художников и скульпторов. (Мадрид)",
          "(2015) Выставка на 82-м Осеннем салоне в Каса-де-Вакас, (Мадрид)",
          "Фонд Сьерра-Эльвира, (Гранада)",
          "Tabacalera, (Мадрид)",
          "(2014) Фонд Понс, (Мадрид)",
          "(2013) Премии города Бадахос, среди прочих"
        ],
        institutions: 'Институции',
        institutions_items: [
          "Работа в Музее современного искусства Обиспо Вельосильо, Айльон.",
          "Работа в Bodegas Valduero, (Бургос).",
          "Скульптурная группа в мэрии Фаберо, (Леон).",
          "EOLO, скульптурная работа на факультете изящных искусств UCM. (Мадрид)."
        ],
        monumental: 'Монументальные Скульптуры',
        monumental_items: [
          "Создал дюжину монументальных скульптур, большинство из которых находятся в провинции Авила."
        ]
      },
      placeholders: {
        portrait: 'Место для Портрета Художника',
        work1: 'Место для Избранной Работы 1',
        work2: 'Место для Избранной Работы 2',
        studio: 'Место для Фото Мастерской / Процесса'
      }
    },
    contact: {
      title: 'Контакты',
      email: 'почта@ivangomezaparicio.com',
      phone: '+34 xxx xxx xxx',
      exhibition: 'Предстоящие Выставки',
      available: 'Работы на заказ доступны',
    },
    workshop: {
      title: 'Мастерская',
      text: 'В сердце Галлегос-де-Альтамирос расположена мастерская Ивана Гомеса Апарисио — пространство, посвященное созданию современной скульптуры, где художник превращает благородные материалы с помощью инновационных техник в произведения, исследующие пересечение формы, материи и человеческой эмоции. Функционируя как живая лаборатория, каждая работа рождается из глубокого диалога между концепцией и интуицией, сочетая скульптурную традицию с тщательными процессами, чтобы отразить уникальное и вневременное видение. Расположенная в этом населенном пункте, мастерская приглашает заинтересованных посетителей связаться для координации визитов и близкого знакомства с эпицентром его художественного производства.'
    },
    common: {
      back: 'Вернуться на главную'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}