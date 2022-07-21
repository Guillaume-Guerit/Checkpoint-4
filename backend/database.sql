-- MySQL Script generated by MySQL Workbench
-- Wed Jul 20 16:34:29 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Check4
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Check4` ;

-- -----------------------------------------------------
-- Schema Check4
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Check4` DEFAULT CHARACTER SET utf8 ;
USE `Check4` ;

-- -----------------------------------------------------
-- Table `Check4`.`Admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Check4`.`Admin` ;

CREATE TABLE IF NOT EXISTS `Check4`.`Admin` (
  `idAdmin` INT NOT NULL AUTO_INCREMENT,
  `AdminMail` VARCHAR(255) NOT NULL,
  `AdminPassword` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idAdmin`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Check4`.`Comments`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Check4`.`Comments` ;

CREATE TABLE IF NOT EXISTS `Check4`.`Comments` (
  `idComments` INT NOT NULL AUTO_INCREMENT,
  `Limits_Details_idLimits_Details` INT NOT NULL,
  `NickName` VARCHAR(255) NOT NULL,
  `Comment` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idComments`),
  INDEX `fk_Comments_Limits_Details1_idx` (`Limits_Details_idLimits_Details` ASC) VISIBLE,
  CONSTRAINT `fk_Comments_Limits_Details1`
    FOREIGN KEY (`Limits_Details_idLimits_Details`)
    REFERENCES `Check4`.`Limits_Details` (`idLimits_Details`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Check4`.`Contact`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Check4`.`Contact` ;

CREATE TABLE IF NOT EXISTS `Check4`.`Contact` (
  `idContact` INT NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(255) NOT NULL,
  `LastName` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Message` LONGTEXT NOT NULL,
  `ButtonLabel` VARCHAR(45) NOT NULL,
  `Title` VARCHAR(255) NOT NULL,
  `Text` LONGTEXT NOT NULL,
  PRIMARY KEY (`idContact`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Check4`.`Footer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Check4`.`Footer` ;

CREATE TABLE IF NOT EXISTS `Check4`.`Footer` (
  `idFooter` INT NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(255) NOT NULL,
  `LastName` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Phone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idFooter`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Check4`.`Home`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Check4`.`Home` ;

CREATE TABLE IF NOT EXISTS `Check4`.`Home` (
  `idHome` INT NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(255) NOT NULL,
  `Text` LONGTEXT NOT NULL,
  `FirstImageLink` LONGTEXT NOT NULL,
  `FirstImageAlt` LONGTEXT NOT NULL,
  `SecondImageLink` LONGTEXT NOT NULL,
  `SecondImageAlt` LONGTEXT NOT NULL,
  PRIMARY KEY (`idHome`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Check4`.`Limits`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Check4`.`Limits` ;

CREATE TABLE IF NOT EXISTS `Check4`.`Limits` (
  `idLimits` INT NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idLimits`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Check4`.`Limits_Details`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Check4`.`Limits_Details` ;

CREATE TABLE IF NOT EXISTS `Check4`.`Limits_Details` (
  `idLimits_Details` INT NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(255) NOT NULL,
  `FirstText` LONGTEXT NOT NULL,
  `SecondText` LONGTEXT NOT NULL,
  `ThirdText` LONGTEXT NOT NULL,
  `FirstImageLink` LONGTEXT NOT NULL,
  `FirstImageAlt` LONGTEXT NOT NULL,
  `SecondImageLink` LONGTEXT NOT NULL,
  `SecondImageAlt` LONGTEXT NOT NULL,
  `ThirdImageLink` LONGTEXT NOT NULL,
  `ThirdImageAlt` LONGTEXT NOT NULL,
  `FourthImageLink` LONGTEXT NOT NULL,
  `FourthImageAlt` LONGTEXT NOT NULL,
  PRIMARY KEY (`idLimits_Details`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Check4`.`Limits_Elements`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Check4`.`Limits_Elements` ;

CREATE TABLE IF NOT EXISTS `Check4`.`Limits_Elements` (
  `idLimits_Elements` INT NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(255) NOT NULL,
  `Text` LONGTEXT NOT NULL,
  `ImageLink` LONGTEXT NOT NULL,
  `ImageAlt` LONGTEXT NOT NULL,
  PRIMARY KEY (`idLimits_Elements`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Check4`.`Login`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Check4`.`Login` ;

CREATE TABLE IF NOT EXISTS `Check4`.`Login` (
  `idLogin` INT NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(255) NOT NULL,
  `Firstinput` VARCHAR(255) NULL,
  `SecondInput` VARCHAR(255) NULL,
  `ForgotPassword` VARCHAR(255) NULL,
  `ForgotPassWordOnClick` VARCHAR(255) NULL,
  PRIMARY KEY (`idLogin`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Check4`.`NavLink`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Check4`.`NavLink` ;

CREATE TABLE IF NOT EXISTS `Check4`.`NavLink` (
  `idNavLink` INT NOT NULL AUTO_INCREMENT,
  `LinkLabel` VARCHAR(45) NOT NULL,
  `LinkPath` VARCHAR(45) NOT NULL,
  `Navigation_idNavigation` INT NOT NULL,
  PRIMARY KEY (`idNavLink`),
  INDEX `fk_NavLink_Navigation1_idx` (`Navigation_idNavigation` ASC) VISIBLE,
  CONSTRAINT `fk_NavLink_Navigation1`
    FOREIGN KEY (`Navigation_idNavigation`)
    REFERENCES `Check4`.`Navigation` (`idNavigation`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Check4`.`Navigation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Check4`.`Navigation` ;

CREATE TABLE IF NOT EXISTS `Check4`.`Navigation` (
  `idNavigation` INT NOT NULL AUTO_INCREMENT,
  `ImageLink` LONGTEXT NOT NULL,
  `ImageAlt` LONGTEXT NULL,
  PRIMARY KEY (`idNavigation`))
ENGINE = InnoDB;

INSERT INTO
  `Check4`.`Navigation` (ImageLink, ImageAlt)
VALUES
  ("https://i.ibb.co/ZK1nprT/Limites2.png" , 'Logo planete en detresse');

  Insert INTO
  `Check4`.`Home` (Title, Text, FirstImageLink, FirstImageAlt, SecondImageLink, SecondImageAlt)
VALUES
  ("Les Limites planétaires", "Les limites planétaires sont les seuils que l'humanité ne devrait pas dépasser pour ne pas compromettre les conditions favorables dans lesquelles elle a pu se développer et pour pouvoir durablement vivre dans un écosystème sûr, c’est-à-dire en évitant les modifications brutales et difficilement prévisibles de l'environnement planétaire.

Ce concept a été proposé par une équipe internationale de vingt-six chercheurs et publié en 2009. Notamment du Stockholm Resilience Centre et de l'université nationale australienne, il a depuis été mis à jour par des publications régulières.", "https://images.theconversation.com/files/470590/original/file-20220623-56660-8q0pnu.png?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip", "Graphique Limites Planétaires", "https://www.thefancarpet.com/wp-content/uploads/2021/04/breakingboundariesnetflix.jpg", "Deux chercheurs");

  Insert INTO
  `Check4`.`Limits` (Title)
VALUES
  ("Et quelles sont donc ces limites");

  Insert INTO
  `Check4`.`Limits_Elements` (Title, Text, ImageLink , ImageAlt)
VALUES
  ("Cycle biogéochimique", "Un cycle biogéochimique est le processus de transport et de transformation cyclique (recyclage) d'un élément ou composé chimique entre les grands réservoirs que sont la géosphère, l'atmosphère, l'hydrosphère, dans lesquels se retrouve la biosphère.", "https://fertilisation-edu.fr/images/cycles-bio-geo/cycle-phosphore.jpg", "Cycle du phosphore"),
  ("Changement d'usage des sols", "Les changements d'utilisation des sols ont de lourdes conséquences sur l'environnement : perte de biodiversité et de services écosystémiques, érosion des sols, risque d'inondations et coulées d'eau boueuse, déstockage de carbone, etc.", "https://www.la-viande.fr/sites/default/files/images/environnement-ethique/atlas/chapitres/role-social-patrimonial-filieres-herbivores/05-02-changement-usage-sols-entre-2016-2012-h.jpg", "Dessin changement d'usage des sols"),
  ("Intégrité de la biosphère", "La biosphère est un réservoir de l'atmosphère qui contient les éléments chimiques dont la structure est importante pour la vie des plantes et des animaux, son intégrité est considérés une limite planétaire fondamentales. ", "https://www.researchgate.net/profile/Francois-Delorme-2/publication/311451761/figure/fig4/AS:436319643017219@1481038117335/Interactions-entre-les-differentes-limites-et-entre-lintegrite-de-la-biosphere-et.png", "Graphique Biosphere"),
  ("Charge en aérosols atmosphériques", "Les aérosols sont des particules fines qui sont en suspension dans l’atmosphère. Beaucoup sont d’origine naturelle, mais l’humanité en produit également, notamment au travers des cheminées, des gaz d’échappement de nos véhicules, des incendies ou même des sèche-linge.", "https://imgs.mongabay.com/wp-content/uploads/sites/20/2022/03/03074108/7-role-of-aerosols-in-the-atmosphere.jpg", "Schéma aérosols atmosphériques"),
  ("Diminution de l'ozone stratosphérique", "La destruction (ou dégradation) de la couche d'ozone est un amincissement voire une disparition de cette couche qui résulte d'un déséquilibre entre la production et la destruction de l’ozone dans la stratosphère.", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/NASA_and_NOAA_Announce_Ozone_Hole_is_a_Double_Record_Breaker.png/600px-NASA_and_NOAA_Announce_Ozone_Hole_is_a_Double_Record_Breaker.png", "Trou dans la couche d'ozone"),
  ("Acidification des océans", "Les océans deviennent de plus en plus acides et le changement se produit plus rapidement qu'à tout autre moment de l'histoire géologique. Il a été estimé que de 1751 à 2004, le pH des eaux superficielles des océans a diminué, passant de 8,25 à 8,14.", "https://i0.wp.com/mrmondialisation.org/wp-content/uploads/2019/12/acidification-des-oceans-1.png", "Schéma acidification des océans"),
  ("Consommation d'eau douce", "À l’échelle mondiale, au cours du 20ème siècle, les prélèvements d’eau ont augmenté deux fois plus vite que la taille de la population. Ce fort accroissement concerne notamment l’agriculture qui prélève encore 70 % du volume total", "http://cdn.statcdn.com/Infographic/images/normal/27079.jpeg", "Carte projection du manque d'eau en 2040"),
  ("Introduction d'entités nouvelles dans l'environnement", "La pollution chimique et autres d’entités dans la biosphère, il est question des trop nombreux plastiques, micro-plastiques et autres produits chimiques produits quotidiennement à un rythme effréné dans le monde entier.", "https://bonpote.com/wp-content/uploads/2022/01/LIMITES-VIGNETTE-5EME.jpg", "Schéma d'introduction d'entités nouvelles dans la biosphère"),
  ("Le réchauffement climatique", "Le terme réchauffement climatique désigne l'augmentation de la température moyenne de la surface terrestre en cours aux xxe et xxie siècles mais aussi, plus généralement, la modification des régimes météorologiques à grande échelle qui en résulte.", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Effet_de_serre.svg/600px-Effet_de_serre.svg.png", "Schéma effet de serre");

  Insert INTO
  `Check4`.`Limits_Details` (Title, FirstText, SecondText, ThirdText, FirstImageLink, FirstImageAlt, SecondImageLink, SecondImageAlt, ThirdImageLink, ThirdImageAlt, FourthImageLink, FourthImageAlt)
  VALUES
  ("Cycle biogéochimique", "Un cycle biogéochimique correspond à un ensemble de processus grâce auxquels un élément passe d'un milieu à un autre, puis retourne dans son milieu original, en suivant une boucle de recyclage infinie.", "Sous l'effet des activités humaines, les cycles biogéochimiques sont perturbés, ce qui peut provoquer, dans les cas les plus graves, de lourds dommages à l'environnement (anoxie des océans, eutrophisation des eaux douces continentales, prolifération d'algues vertes, etc.).", "En France métropolitaine, le surplus de phosphore est passé de 9 kg/ha de SAU à 0 kg/ha entre 2000 et 2015. Cette baisse est principalement liée à la diminution des apports de fertilisants minéraux. Depuis 2009, le bilan est proche de l’équilibre.", "https://t2.ev.ltmcdn.com/fr/posts/9/5/5/cycle_biogeochimique_definition_types_et_role_559_orig.jpg", "Schéma cycles biogéochimiques", "https://upload.wikimedia.org/wikipedia/commons/d/de/Nitrogen_Cycle.jpg", "Schéma cycle de l'azote", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Carbon_cycle-cute_diagram.svg/1024px-Carbon_cycle-cute_diagram.svg.png", "Schéma cycle de carbone", "https://www.alternatives-economiques.fr/sites/default/files/public/media/20110501/F609049A.GIF", "Schéma cycle du phosphore"),
  ("Changement d'usage des sols", "Les changements d’utilisation des sols à l’échelle planétaire sont principalement dus à l’intensification et à l’extension de surfaces agricoles qui conduisent au déboisement de vastes surfaces forestières. Au cours des cinquante dernières années, la transformation de milieux naturels et semi-naturels (forêts, prairies, etc) en terres agricoles, s’accroît en moyenne de 0,8 % par an.", "L’utilisation des sols au profit de telle ou telle activité détermine un équilibre entre la production alimentaire, la régulation des débits d’eau douce, les habitats humains et la préservation de l’environnement.", "Les pertes en terres agricoles en France s’élèvent à 35 853 ha dont 35 780 ha en France métropolitaine entre 2012 et 2018", "https://planet-terre.ens-lyon.fr/planetterre/objets/Images/erosion-sols/erosion-sols-23.jpg", "Schéma érosion des sols", "https://www.notre-environnement.gouv.fr/IMG/png/r2-changement-uti-sols.png", "Schéma artificialisation", "https://www.adaptation-changement-climatique.gouv.fr/sites/cracc/files/images/2019/11/exemples_0.jpg", "Schéma usage des sols", "https://www.cerema.fr/sites/default/files/inline-images/fonctions_1.jpg", "Schéma fonctions des sols"),
  ("Intégrité de la biosphère", "Le constat est sans appel. L’érosion de la biodiversité est bien réelle. La difficulté est de penser la biodiversité comme un des constituants de la biosphère, la condition de la vie sur la planète.", "La biodiversité ne rend pas seulement de simples services à sauvegarder comme le présentent généralement les institutions mais un enjeu aussi fondamental, mais finalement tellement plus complexe, que le changement climatique et la lutte contre les GES.", "Malgré les connaissances acquises et les réactions des institutions et des populations, le déni persiste avec la difficulté à relier, à intégrer l’enjeu d’une gestion durable de la biodiversité à notre vie quotidienne (alimentation, emplois et activités économiques, loisirs, etc.).", "https://images.ladepeche.fr/api/v1/images/view/5c2c8e1d3e4546060c75e2d3/large/image.jpg", "Schéma biosphère", "https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgeo.2F2019.2F01.2F09.2Fd89e562c-2c24-4e93-a87d-55f27eb40b4b.2Ejpeg/1120x667/quality/80/thumbnail.jpeg", "Schéma biodiversité France", "https://www.iybssd2022.org/wp-content/uploads/Bending-the-Curve_PR.jpg", "Schéma projection biodiversité", "https://thumbs.dreamstime.com/b/probl%C3%A8mes-et-causes-de-la-perte-biodiversit%C3%A9-en-tant-que-probl%C3%A8me-des-%C3%A9cosyst%C3%A8mes-climatiques-ou-l-extinction-faune-par-d-214124583.jpg", "Schéma perte de biodiversité"),
  ("Charge en aérosols atmosphériques", "Les aérosols désignent des particules fines en suspension dans l’air, solides (poussières) ou liquides (embruns), de nature organique (suie) ou minérale (roche érodée).", "La grande majorité d’entre elles sont d’origine naturelle, mais elles peuvent également résulter des activités humaines (aérosols primaires) ou de transformations physico-chimiques dans l’atmosphère (aérosols secondaires).", "En raison de leurs effets potentiellement néfastes sur le climat et la santé, l’augmentation des aérosols dans l’atmosphère constitue un des neuf processus critiques globaux (Rockström et al., 2009).", "https://imgs.mongabay.com/wp-content/uploads/sites/20/2022/03/03074108/7-role-of-aerosols-in-the-atmosphere.jpg", "Schéma aérosols", "https://www.researchgate.net/profile/Jean-Dalphin/publication/303392746/figure/fig4/AS:367381043007490@1464601874104/Processus-de-formation-et-devolution-des-aerosols-dans-latmosphere-Source-A-Renoud.png", "Schéma aérosols", "https://trustmyscience.com/wp-content/uploads/2018/11/injection-aerosols-stratosphere.jpeg", "Schéma aérosols", "https://www.umr-cnrm.fr/local/cache-vignettes/L500xH375/schema_tactic_global-5b9ab.png?1652285897", "Schéma aérosols"),
  ("Diminution de l'ozone stratosphérique", "L’atmosphère s’étend sur quelques centaines de kilomètres au-dessus de la surface de la Terre. Elle est constituée de plusieurs couches concentriques qui entourent la Terre comme des pelures.", "L’appauvrissement de l’ozone est l’expression consacrée pour désigner l’amincissement de la couche d’ozone dans la stratosphère. L’ozone s’appauvrit lorsque l’équilibre naturel entre sa production et sa destruction dans la stratosphère est perturbé en faveur de sa destruction.", "Les activités humaines sont le principal facteur responsable de la perturbation de cet équilibre naturel, principalement à cause des émissions dans l’atmosphère de produits chimiques de synthèse connus sous le nom de substances appauvrissant la couche d’ozone.", "http://education.meteofrance.fr/documents/10192/92670/22382-43.gif/", "Gif couche d'ozone", "https://www.edunet.ch/archives/activite/wall/encyclopedie/images/ozone.gif", "Schéma sphère", "http://www1.onf.fr/renecofor/sommaire/resultats/alimentation_pollution/ozone/20090127-160128-69949/1/++illustration++/++display++w530.jpeg", "Schéma ozone", "https://pbs.twimg.com/media/D9HEzv2XkAER9vt.jpg", "Schéma ozone"),
  ("Acidification des océans", "L'acidification entraîne une diminution du pH, donc une augmentation de l’acidité, ainsi qu'une diminution du nombre de « briques » indispensables à la fabrication des coquilles calcaires de certains organismes: les ions carbonates.", " L’Océan absorbe un quart du CO2 produit par l’Homme, entraînant une modification chimique des masses d’eau. Le CO2 étant un gaz acide, il augmente l’acidité de l’eau dans laquelle il se dilue : elle a augmentée de 30% depuis le début de la Révolution industrielle.", "Les impacts d’une telle modification chimique sont une réelle menace pour l’équilibre du vivant, y compris pour l’homme.", "https://i.ytimg.com/vi/Sosvgy5MXvU/maxresdefault.jpg", "Schéma océan", "https://pbs.twimg.com/media/EVCAmKZUUAEi8mm.jpg", "Schéma océan", "https://reseauactionclimat.org/wp-content/uploads/2018/05/zones-peu-oxygenees-et-consequences-sur-les-organismes-marins-538x700.png", "Schéma océan", "https://cibul.s3.amazonaws.com/59640cb86b3042e0b71183232c4cf720.base.image.jpg", "Bande déssiné océan"),
  ("Consommation d'eau douce", "Malgré un ralentissement depuis les années 1990, les prélèvements d’eau devraient continuer de croître de 1 % par an d’ici à 2050, entraînés notamment par l’augmentation des usages industriels et des besoins de refroidissement des centrales électriques.", "La part de la ressource annuelle renouvelable d’eau douce prélevée par les activités humaines est passée de moins de 2 % à 10 % au cours du 20ème siècle. Elle atteindrait 12 % en 2050 si la ressource disponible ne diminuait pas.", "L’enjeu est donc de disposer de suffisamment d’eau de bonne qualité pour tous les usages, en en laissant une partie pour le bon fonctionnement des écosystèmes naturels, dont les activités humaines dépendent aussi.", "https://bonpote.com/wp-content/uploads/2022/04/cycle-eau-verte-1024x689.png", "Schéma eau douce", "https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2022/04/c-est-ruee-vers-eau-comment-monde-fait-face-crise-hydrique-5.jpg", "Schéma eau douce", "https://www.researchgate.net/profile/Enguerrand-Burel/publication/333031393/figure/fig5/AS:757574844563457@1557631326124/Reponse-adaptative-de-la-plante-au-stress-hydrique-a-court-et-long-terme-Chaves-et.jpg", "Schéma stress hydrique", "https://www.novethic.fr/fileadmin/user_upload/risque_inondation.jpg", "Schéma stress hydrique France"),
  ("Introduction d'entités nouvelles dans l'environnement", "L’introduction d’entités nouvelles dans la biosphère est la neuvième des neuf limites planétaires. En 2009, définie sous l’intitulé « pollution chimique », elle désignait les éléments radioactifs, les métaux lourds et de nombreux composés organiques d’origine humaine présents dans l’environnement.", "La pollution chimique peut avoir des répercussions sur la limite « érosion de la biodiversité » en réduisant l’abondance des espèces et en augmentant potentiellement la vulnérabilité des organismes à d’autres menaces.", "Elle interagit également avec la limite « changement climatique » par les rejets de mercure dans l’environnement et par les émissions de CO2 dues aux produits chimiques industriels.", "https://www.pollution-chimique.com/medias/images/contenu/impacts/devenir-produits.png", "Schéma déchets chimiques", "https://www.selecdepol.fr/sites/default/files/medias/Fiche%20technique/F011/DESCRIPTION/Figure%202%20-%20Sch%C3%A9ma%20de%20principe%20de%20l%E2%80%99oxydation%20chimique%20in%20situ%20(m%C3%A9lange%20m%C3%A9canique%20in%20situ).png", "Schéma injection polluants", "https://pbs.twimg.com/media/ELvDztIWsAA8nol.jpg", "Schéma plastique", "https://www.notre-environnement.gouv.fr/IMG/png/r3-entite-biosphere.png", "Graphique produits chimiques"),
  ("Le réchauffement climatique", "Le réchauffement climatique est un phénomène causé par les gaz à effet de serre émis par les humains. Il se traduit par une augmentation très rapide de la température moyenne de l’atmosphère depuis les années 1850.", "Si peu, pourrait-on dire ? Il ne faut pas se faire avoir par ce « peu » de 1,1 °C. Les spécialistes de l’histoire du climat savent que la Terre ne s’est jamais autant réchauffée en aussi peu de temps.", "Et il faut bien comprendre ce que représente cette moyenne mondiale : à l’échelle des temps géologiques, entre une période froide dite glaciaire et une période plus chaude interglaciaire, il n’y a que 4 °C de différence en moyenne.", "https://www.citeco.fr/sites/default/files/images_spip/arton1215.jpg", "Schéma effet de serre", "https://www.statistiques.developpement-durable.gouv.fr/edition-numerique/chiffres-cles-du-climat/image/effet-de-serre-naturel-et-perturbations-CGDD.png", "Schéma absorption", "https://kaizen-magazine.com/wp-content/uploads/2019/03/Graph-2-1.png", "Schéma énergie", "https://cdn.bioalaune.com/img/article/thumb/900x500/13653-illustration_comprendre_le_rechauffement_climatique_avec_penelope_bagieu.jpg", "Bande déssiné réchauffement");

  Insert INTO
  `Check4`.`Footer` (FirstName, LastName, Email, Phone)
  VALUES
  ("Guillaume", "Guerit", "guillaumeguerit@gmail.com", "+33685991756");

  Insert INTO
  `Check4`.`Contact` (FirstName, LastName, Email, Message, ButtonLabel, Title, Text)
  VALUES
  ("Prénom", "Nom", "Email", "Taper votre message ici", "Envoyer", "N'hésitez à nous envoyer un message !", "En effet, nous sommes extrêmement attentifs à vos remarques, de nouvelles limites sont sans cesse découvertes, nous pouvons en ajouter ou encore un complément à celles existantes, merci d'avance à vous.");

  Insert INTO
  `Check4`.`NavLink` (LinkLabel, LinkPath, Navigation_idNavigation)
  VALUES
  ("Acceuil", "/", 1),
  ("Les limites", "/limits", 1),
  ("Contact", "/contact", 1);

  Insert INTO
  `Check4`.`Login` (Title, FirstInput, SecondInput, ForgotPassword, ForgotPasswordOnClick)
  VALUES
  ("Connexion", "Email", "Mot de passe", "Mot de passe oublié ?", "Eh bien c'est dommage");

  Insert INTO
  `Check4`.`Comments` (Limits_Details_idLimits_Details, NickName, Comment)
  VALUES
  (1, "Kevin Boule D'acier", "Ca m'en touche une sans faire bouger l'autre, comme dirais un grand homme, ou pas...");


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
