---
title: TwinCity
description: Explorer le potentiel de l'intelligence artificielle grâce aux
  jumeaux numériques de villes
who: Ministère de l'Intérieur
place: ""
themes:
  - Innovation
promos:
  - Promotion 6
town: Paris (75)
date: 2022
expertises:
  - Développement
  - Data science
image: img/promotion-6/defis/07_TwinCity.svg
visible: true
---
#### L'administration porteuse{.subtitle}
### La SDITN, au laboratoire de valorisation des données
La Sous-direction de l’innovation et de la transformation numérique (SDITN) du ministère de l'Intérieur (MININT) fabrique des outils numériques à destination de ses agents ou des citoyens, dans une logique de transparence des méthodes et d'ouverture des données.

## Le défi aujourd’hui

#### La problématique identifiée{.subtitle}
### L'accès à des jeux de données pertinents, annotés et exploitables par les data scientists en computer vision est complexe et coûteux
Au cours des différents projets réalisés au sein de la SDITN, par exemple en matière de comptage de foules, les ingénieur(e)s en sciences de la donnée du ministère de l'Intérieur et des Outre-mer, spécialisé(e)s en vision par ordinateur, se sont retrouvé(e)s confronté(e)s à des difficultés liées aux biais algorithmiques présents dans leurs modèles. Ces modèles, lorsqu'ils sont issus d'organismes externes à la SDITN, peuvent se révéler être de réelles boîtes noires dont l'entraînement et les plages d'usage ne sont pas transparents.

#### Les besoins confirmés{.subtitle}
### Afin d'en assurer la performance et d'en limiter les biais, les modèles d'IA doivent faire l'objet de tests à partir de jeux de données variés
Grâce aux différents recueils de besoins réalisés, les EIG ont pu constater que les jeux de données accessibles ne répondent pas toujours aux besoins des data scientists en computer vision : difficultés à trouver des scènes avec les conditions météorologiques souhaitées, homogénéité des physiques des individus représentés, absence de scènes urbaines typiquement françaises et de variété dans les prises de vue des images, etc. Également, leur annotation, nécessaire à leur exploitation en computer vision, est coûteuse.

#### Le concept expérimenté{.subtitle}
### Un bac à sable de données synthétiques paramétrables en fonction des besoins des data scientists en computer vision
TwinCity est un logiciel permettant de générer des images de scènes urbaines françaises sous différents formats pertinents en computer vision. Plus précisément, l'utilisateur/utilisatrice peut visualiser des scènes parisiennes, simuler des animations (piétons, véhicules, personnes au sol), déterminer la luminosité et les conditions météorologiques souhaitées. À partir des jeux de données issus de TwinCity, le/la data scientist est en mesure de tester les performances de son modèle et d'évaluer les biais algorithmiques existants.

#### Plus d'informations{.subtitle}
### Comment contribuer au projet ?

* Une démonstration de l'extracteur et du générateur de données synthétiques : https://www.youtube.com/watch?v=VtDNRBaCIC4&t=1s&ab_channel=JehanneDussert
* Une présentation de la version alpha de TwinCity : https://medium.com/@jehanne-dussert/pr%C3%A9sentation-dun-twincity-alpha-vers-l-amplification-du-d%C3%A9fi-fdd274f2ad7e
* Le guide méthodologique et collaboratif du projet Unreal : https://github.com/twin-city/unreal-project/wiki

{{< dailymotion x8akknn "Vidéo de présentation du défi TwinCity">}}

## Aux origines du défi

#### La problématique pressentie{.subtitle}
### Les données du MININT sont toujours plus volumineuses, notamment grâce à la vidéoprotection mais difficilement exploitables pour des raisons juridiques
Le respect des données à caractère personnel constitue un garde-fou nécessaire dans nos sociétés, ce qui empêche en même temps l'élaboration de systèmes intelligents qui visent à améliorer la sécurité dans l'espace public. De plus, ces données sont difficiles d'accès, longues à annotées et parfois rares.

#### L'hypothèse à vérifier{.subtitle}
### Elaborer des jumeaux numériques des villes françaises avec des moteurs open-source de jeux vidéos/film d’animation, pour simuler les problèmes de sécurité dans l'espace public.
De cette manière, des jeux de données synthétiques seront générer afin d'entraîner des intelligences artificielles. L'exemplarité déontologique de l'Etat pose des limites claires : il ne sera question ni de suivi d'individus ni de reconnaissance faciale, aussi l'un des fondements de ce défi portera sur le floutage.
Ce générateur de données synthétiques pourra par conséquent d'abord être mis en place dans les villes et préfectures disposant d'un système de vidéoprotection. Les premières contributions porteront sur le comptage de foule et potentiellement dans un second temps sur la détection de malaises, d'agressions ou de dépôts d'ordures sauvages.

#### Les ambitions du projet{.subtitle}
### Explorer le potentiel de l'intelligence artificielle grâce à des jumeaux numériques de villes
Le projet permettra d’accélérer le développement d'outils automatisés d'analyse d'images des espaces publics, notamment pour les besoins du ministère de l'Intérieur. Par souci de transparence, une plateforme de démonstration sur l'utilisation de ces données sera mise à disposition pour les citoyens et pour les autres services publics.
Ainsi, le monde conçu sera tout ou partie rendu public, via des banques d'objet 3D chez Unity ou Unreal, tout comme les codes visant à générer les images ; les codes d'adaptation de domaines, les codes d'apprentissages profonds et les codes produits seront ouverts et en licence libre. Seuls les modèles entraînés resterons privés.