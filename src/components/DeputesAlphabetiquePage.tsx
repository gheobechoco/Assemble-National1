// src/components/DeputesAlphabetiquePage.tsx
import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react'; // Importation de l'icône Home

// Données pour les articles "À la une" avec des images de remplacement (réutilisées)
const featuredArticles = [
  {
    image: "/images/president-AN-transition.jpeg", // Image des Travaux Législatifs
    title: "Travaux : Plusieurs textes législatifs structurants dont celui...",
    link: "#"
  },
  {
    image: "/images/jean-francois-ndoungou.png", // Image d'une Séance Plénière 1
    title: "Travaux : Jean François NDONGOU préside une séance plénière",
    link: "#"
  },
  {
    image: "/images/assembler-nat-vote.webp", // Image d'une Réforme Constitutionnelle
    title: "Réforme constitutionnelle : Les enjeux",
    link: "#"
  },
  {
    image: "public/images/cloture-solennelle-premiere=session.jpeg", // Image du Budget 2024
    title: "Budget 2024 : Adoption des mesures",
    link: "#"
  }
];

// URLs des images des présidents (placeholders) (réutilisées)
const presidentImages: { [key: string]: string } = {
  "Jean-François NDONGOU": "/images/jean-francois-ndoungou.png", // Image de Jean-François NDONGOU
  "placeholder_member": "https://placehold.co/150x150/e0e0e0/333333?text=Membre" // Image générique d'un membre
};

// Images spécifiques des députés (basées sur les captures d'écran)
const deputeImages: { [key: string]: string } = {
  "ABIERY WILLY BERTRAND": "https://placehold.co/150x150/e0e0e0/333333?text=A.W.+BERTRAND",
  "ABOUGHE OTSAGHE Charlotte": "https://placehold.co/150x150/e0e0e0/333333?text=C.+ABOUGHE",
  "ADIABENOT-MEPOREWA Flavienne Patricia Hélène": "https://placehold.co/150x150/e0e0e0/333333?text=F.P.H.+ADIABENOT",
  "AKOMEZOGHO FRANCOIS AUGUSTE": "https://placehold.co/150x150/e0e0e0/333333?text=F.A.+AKOMEZOGHO",
  "AKURE DAVAIN Séraphin": "https://placehold.co/150x150/e0e0e0/333333?text=S.+AKURE",
  "AWASSI Alexandre Gilbert": "https://placehold.co/150x150/e0e0e0/333333?text=A.G.+AWASSI",
  "BADJINA MOUDOUMA épse ELLA ASSEKO Firmine Olga": "https://placehold.co/150x150/e0e0e0/333333?text=F.O.+BADJINA",
  "BANDEGA LENDOYE Raphaël": "https://placehold.co/150x150/e0e0e0/333333?text=R.+BANDEGA",
  "BECKOPA Epse Roy Valentin Virginie": "https://placehold.co/150x150/e0e0e0/333333?text=V.+BECKOPA",
  "BEKA B'OBAME Jean Marie": "https://placehold.co/150x150/e0e0e0/333333?text=J.M.+BEKA",
  "BEKALLE-AKWE Henri": "https://placehold.co/150x150/e0e0e0/333333?text=H.+BEKALLE",
  "BIAHODJOW Germain": "https://placehold.co/150x150/e0e0e0/333333?text=G.+BIAHODJOW",
  "BIYOGHE MBA Paul": "https://placehold.co/150x150/e0e0e0/333333?text=P.+BIYOGHE",
  "BOUANGA MOMBO ep. MAKITA Nicole": "https://placehold.co/150x150/e0e0e0/333333?text=N.+BOUANGA",
  "BOUKANDOU Elza Richtuelle": "https://placehold.co/150x150/e0e0e0/333333?text=E.+BOUKANDOU",
  "BOUYOU Tatiana Mireille": "https://placehold.co/150x150/e0e0e0/333333?text=T.+BOUYOU",
  "DIOUMY MOUBASSANGO Donatien Lhye": "https://placehold.co/150x150/e0e0e0/333333?text=D.L.+DIOUMY",
  "DOUFOUNDOU Emerencienne": "https://placehold.co/150x150/e0e0e0/333333?text=E.+DOUFOUNDOU",
  "DOUMBENENY Jean Lucien": "https://placehold.co/150x150/e0e0e0/333333?text=J.L.+DOUMBENENY",
  "EBANETH EP. SIMA EYI NATHALIE": "https://placehold.co/150x150/e0e0e0/333333?text=N.+EBANETH",
  "EKOUA SIMA Jean Paulin": "https://placehold.co/150x150/e0e0e0/333333?text=J.P.+EKOUA",
  "ELLA ENGONGA Leonel": "https://placehold.co/150x150/e0e0e0/333333?text=L.+ELLA",
  "ELLA NGUEMA Gerard": "https://placehold.co/150x150/e0e0e0/333333?text=G.+ELLA",
  "EYEGHE Ali": "https://placehold.co/150x150/e0e0e0/333333?text=A.+EYEGHE",
  "FOUMBOULA LIBEKA M. GEOFFROY": "https://placehold.co/150x150/e0e0e0/333333?text=M.G.+FOUMBOULA",
  "FOUTY Frateli Martial": "https://placehold.co/150x150/e0e0e0/333333?text=F.M.+FOUTY",
  "GEY Charles-Henri": "https://placehold.co/150x150/e0e0e0/333333?text=C.H.+GEY",
  "GONDJOUT INDJENDJET Melvin Vincent": "https://placehold.co/150x150/e0e0e0/333333?text=M.V.+GONDJOUT",
  "IDODO Jean Lambert": "https://placehold.co/150x150/e0e0e0/333333?text=J.L.+IDODO",
  "IMMONGUALT TATANGANI Eudes Régis": "https://placehold.co/150x150/e0e0e0/333333?text=E.R.+IMMONGUALT",
  "ISSEMBE Serge Aimé": "https://placehold.co/150x150/e0e0e0/333333?text=S.A.+ISSEMBE",
  "KOUMBA Brigitte": "https://placehold.co/150x150/e0e0e0/333333?text=B.+KOUMBA",
  "LEKOGO Justine Judith": "https://placehold.co/150x150/e0e0e0/333333?text=J.J.+LEKOGO",
  "LEYAMA Jean Valentin": "https://placehold.co/150x150/e0e0e0/333333?text=J.V.+LEYAMA",
  "LIBAMA Marcel": "https://placehold.co/150x150/e0e0e0/333333?text=M.+LIBAMA",
  "LISSENGUET GOUMBOU Irène": "https://placehold.co/150x150/e0e0e0/333333?text=I.+LISSENGUET",
  "LOUEMBE Blaise": "https://placehold.co/150x150/e0e0e0/333333?text=B.+LOUEMBE",
  "MABIALA Serge Maurice": "https://placehold.co/150x150/e0e0e0/333333?text=S.M.+MABIALA",
  "MAGANGA MOUSSAVOU née MALANDOU BOUKA Albertine": "https://placehold.co/150x150/e0e0e0/333333?text=A.+MAGANGA",
  "MALLY HODJOUA Gabriel": "https://placehold.co/150x150/e0e0e0/333333?text=G.+MALLY",
  "MANDJOU NGAYOUO Paulin": "https://placehold.co/150x150/e0e0e0/333333?text=P.+MANDJOU",
  "MATSIENDI Roland": "https://placehold.co/150x150/e0e0e0/333333?text=R.+MATSIENDI",
  "MAVOUNGOU MIHINDOU": "https://placehold.co/150x150/e0e0e0/333333?text=M.+MAVOUNGOU",
  "MBADINGA MBADINGA Josué": "https://placehold.co/150x150/e0e0e0/333333?text=J.+MBADINGA",
  "MBAGOU Jean-Bosco": "https://placehold.co/150x150/e0e0e0/333333?text=J.B.+MBAGOU",
  "MBAGOU Jeanne": "https://placehold.co/150x150/e0e0e0/333333?text=J.+MBAGOU",
  "MBOUMBOU MAKANGA Jean-Marie": "https://placehold.co/150x150/e0e0e0/333333?text=J.M.+MBOUMBOU",
  "MBOUMI NZINZI Jean Claude": "https://placehold.co/150x150/e0e0e0/333333?text=J.C.+MBOUMI",
  "MENGUE EKOMIE Roger": "https://placehold.co/150x150/e0e0e0/333333?text=R.+MENGUE",
  "MENGUE M'AKUE Diane Dorothée": "https://placehold.co/150x150/e0e0e0/333333?text=D.D.+MENGUE",
  "MENIE M'YEYI Antoine": "https://placehold.co/150x150/e0e0e0/333333?text=A.+MENIE",
  "MIHINDOU MI NZAMBA Carl": "https://placehold.co/150x150/e0e0e0/333333?text=C.+MIHINDOU",
  "MINKO MI ETOUA Christian": "https://placehold.co/150x150/e0e0e0/333333?text=C.+MINKO",
  "MOUDOUNDGA MOUITY Patrice": "https://placehold.co/150x150/e0e0e0/333333?text=P.+MOUDOUNDGA",
  "MOUELE ROMAIN ROMAIN": "https://placehold.co/150x150/e0e0e0/333333?text=R.+MOUELE",
  "MOURI BOUSSOUGOU Dieudonné": "https://placehold.co/150x150/e0e0e0/333333?text=D.+MOURI",
  "MOUPOUMBOU Clément": "https://placehold.co/150x150/e0e0e0/333333?text=C.+MOUPOUMBOU",
  "MOUSSAVOU Florentin": "https://placehold.co/150x150/e0e0e0/333333?text=F.+MOUSSAVOU",
  "MVE EBANG Marcellin": "https://placehold.co/150x150/e0e0e0/333333?text=M.+MVE",
  "NANG ONDO THIERRY": "https://placehold.co/150x150/e0e0e0/333333?text=T.+NANG",
  "NDIMAL BARRY": "https://placehold.co/150x150/e0e0e0/333333?text=B.+NDIMAL",
  "NDJIMBI Franck": "https://placehold.co/150x150/e0e0e0/333333?text=F.+NDJIMBI",
  "NDJOUNGA Jean Bosco": "https://placehold.co/150x150/e0e0e0/333333?text=J.B.+NDJOUNGA",
  "NDONG OBIANG François": "https://placehold.co/150x150/e0e0e0/333333?text=F.+NDONG",
  "NDONGOU Jean François": "https://placehold.co/150x150/e0e0e0/333333?text=J.F.+NDONGOU",
  "NGABIKOUMOU WADA Mesmin Boris": "https://placehold.co/150x150/e0e0e0/333333?text=M.B.+NGABIKOUMOU",
  "NGOMA Angélique": "https://placehold.co/150x150/e0e0e0/333333?text=A.+NGOMA",
  "NGOUENENI NDZENGOUIMA Joël": "https://placehold.co/150x150/e0e0e0/333333?text=J.+NGOUENENI",
  "NGOUNDJI Ludwine Staelle": "https://placehold.co/150x150/e0e0e0/333333?text=L.S.+NGOUNDJI",
  "NGUEMA NGUEMA Sosthène": "https://placehold.co/150x150/e0e0e0/333333?text=S.+NGUEMA",
  "NGUIENO Dominique Guy-Noël": "https://placehold.co/150x150/e0e0e0/333333?text=D.G.N.+NGUIENO",
  "NTOUTOUME MEBIAME Aurélien": "https://placehold.co/150x150/e0e0e0/333333?text=A.+NTOUTOUME",
  "NTOUTOUME Béatrice": "https://placehold.co/150x150/e0e0e0/333333?text=B.+NTOUTOUME",
  "NZE NDONG NZE PASCAL FRANCK": "https://placehold.co/150x150/e0e0e0/333333?text=P.F.+NZE",
  "NZONDO ELOI": "https://placehold.co/150x150/e0e0e0/333333?text=E.+NZONDO",
  "NZUE EDZANG Frédéric": "https://placehold.co/150x150/e0e0e0/333333?text=F.+NZUE",
  "OBAME EYEGUE Jean-Marie": "https://placehold.co/150x150/e0e0e0/333333?text=J.M.+OBAME",
  "OGOULIGUENDE née MAVIKANA Pepeçy": "https://placehold.co/150x150/e0e0e0/333333?text=P.+OGOULIGUENDE",
  "ONA NGUEMA Freddy Fernandez": "https://placehold.co/150x150/e0e0e0/333333?text=F.F.+ONA",
  "ONDJAMBI ONGUIA Gérard": "https://placehold.co/150x150/e0e0e0/333333?text=G.+ONDJAMBI",
  "OSSINGA ONANGA Alban Stéphane": "https://placehold.co/150x150/e0e0e0/333333?text=A.S.+OSSINGA",
  "OTANDO Charles": "https://placehold.co/150x150/e0e0e0/333333?text=C.+OTANDO",
  "OVONO MBOUENGOU Jean Placilde": "https://placehold.co/150x150/e0e0e0/333333?text=J.P.+OVONO",
  "OWONO NDONG Edgard": "https://placehold.co/150x150/e0e0e0/333333?text=E.+OWONO",
  "POLO ép PANDZOU ODETTE": "https://placehold.co/150x150/e0e0e0/333333?text=O.+POLO",
  "REVANGUE Ep ABIOUME Madeleine Sidonie": "https://placehold.co/150x150/e0e0e0/333333?text=M.S.+REVANGUE",
  "ROYEMBO Albert Richard": "https://placehold.co/150x150/e0e0e0/333333?text=A.R.+ROYEMBO",
  "SOUGOU LATSIERE Alix": "https://placehold.co/150x150/e0e0e0/333333?text=A.+SOUGOU",
  "SOWA AKENDENGUE NIANG Stephen Darell": "https://placehold.co/150x150/e0e0e0/333333?text=S.D.+SOWA",
  "TATY KOUMBA Odette Jeanine": "https://placehold.co/150x150/e0e0e0/333333?text=O.J.+TATY",
  "TRISSAUGUI OGOUILATH Pendi Georges": "https://placehold.co/150x150/e0e0e0/333333?text=P.G.+TRISSAUGUI",
  "TSONO Huguette": "https://placehold.co/150x150/e0e0e0/333333?text=H.+TSONO",
  "WAURA Fidèle": "https://placehold.co/150x150/e0e0e0/333333?text=F.+WAURA",
  "YEMBIT MANGALA Jean de Dieu": "https://placehold.co/150x150/e0e0e0/333333?text=J.D.+YEMBIT",
};

// Liste des députés avec leurs noms et clés d'image correspondantes, triée alphabétiquement
const deputesList = [
  { name: "ABIERY WILLY BERTRAND", imageKey: "ABIERY WILLY BERTRAND" },
  { name: "ABOUGHE OTSAGHE Charlotte", imageKey: "ABOUGHE OTSAGHE Charlotte" },
  { name: "ADIABENOT-MEPOREWA Flavienne Patricia Hélène", imageKey: "ADIABENOT-MEPOREWA Flavienne Patricia Hélène" },
  { name: "AKOMEZOGHO FRANCOIS AUGUSTE", imageKey: "AKOMEZOGHO FRANCOIS AUGUSTE" },
  { name: "AKURE DAVAIN Séraphin", imageKey: "AKURE DAVAIN Séraphin" },
  { name: "AWASSI Alexandre Gilbert", imageKey: "AWASSI Alexandre Gilbert" },
  { name: "BADJINA MOUDOUMA épse ELLA ASSEKO Firmine Olga", imageKey: "BADJINA MOUDOUMA épse ELLA ASSEKO Firmine Olga" },
  { name: "BANDEGA LENDOYE Raphaël", imageKey: "BANDEGA LENDOYE Raphaël" },
  { name: "BECKOPA Epse Roy Valentin Virginie", imageKey: "BECKOPA Epse Roy Valentin Virginie" },
  { name: "BEKA B'OBAME Jean Marie", imageKey: "BEKA B'OBAME Jean Marie" },
  { name: "BEKALLE-AKWE Henri", imageKey: "BEKALLE-AKWE Henri" },
  { name: "BIAHODJOW Germain", imageKey: "BIAHODJOW Germain" },
  { name: "BIYOGHE MBA Paul", imageKey: "BIYOGHE MBA Paul" },
  { name: "BOUANGA MOMBO ep. MAKITA Nicole", imageKey: "BOUANGA MOMBO ep. MAKITA Nicole" },
  { name: "BOUKANDOU Elza Richtuelle", imageKey: "BOUKANDOU Elza Richtuelle" },
  { name: "BOUYOU Tatiana Mireille", imageKey: "BOUYOU Tatiana Mireille" },
  { name: "DIOUMY MOUBASSANGO Donatien Lhye", imageKey: "DIOUMY MOUBASSANGO Donatien Lhye" },
  { name: "DOUFOUNDOU Emerencienne", imageKey: "DOUFOUNDOU Emerencienne" },
  { name: "DOUMBENENY Jean Lucien", imageKey: "DOUMBENENY Jean Lucien" },
  { name: "EBANETH EP. SIMA EYI NATHALIE", imageKey: "EBANETH EP. SIMA EYI NATHALIE" },
  { name: "EKOUA SIMA Jean Paulin", imageKey: "EKOUA SIMA Jean Paulin" },
  { name: "ELLA ENGONGA Leonel", imageKey: "ELLA ENGONGA Leonel" },
  { name: "ELLA NGUEMA Gerard", imageKey: "ELLA NGUEMA Gerard" },
  { name: "EYEGHE Ali", imageKey: "EYEGHE Ali" },
  { name: "FOUMBOULA LIBEKA M. GEOFFROY", imageKey: "FOUMBOULA LIBEKA M. GEOFFROY" },
  { name: "FOUTY Frateli Martial", imageKey: "FOUTY Frateli Martial" },
  { name: "GEY Charles-Henri", imageKey: "GEY Charles-Henri" },
  { name: "GONDJOUT INDJENDJET Melvin Vincent", imageKey: "GONDJOUT INDJENDJET Melvin Vincent" },
  { name: "IDODO Jean Lambert", imageKey: "IDODO Jean Lambert" },
  { name: "IMMONGUALT TATANGANI Eudes Régis", imageKey: "IMMONGUALT TATANGANI Eudes Régis" },
  { name: "ISSEMBE Serge Aimé", imageKey: "ISSEMBE Serge Aimé" },
  { name: "KOUMBA Brigitte", imageKey: "KOUMBA Brigitte" },
  { name: "LEKOGO Justine Judith", imageKey: "LEKOGO Justine Judith" },
  { name: "LEYAMA Jean Valentin", imageKey: "LEYAMA Jean Valentin" },
  { name: "LIBAMA Marcel", imageKey: "LIBAMA Marcel" },
  { name: "LISSENGUET GOUMBOU Irène", imageKey: "LISSENGUET GOUMBOU Irène" },
  { name: "LOUEMBE Blaise", imageKey: "LOUEMBE Blaise" },
  { name: "MABIALA Serge Maurice", imageKey: "MABIALA Serge Maurice" },
  { name: "MAGANGA MOUSSAVOU née MALANDOU BOUKA Albertine", imageKey: "MAGANGA MOUSSAVOU née MALANDOU BOUKA Albertine" },
  { name: "MALLY HODJOUA Gabriel", imageKey: "MALLY HODJOUA Gabriel" },
  { name: "MANDJOU NGAYOUO Paulin", imageKey: "MANDJOU NGAYOUO Paulin" },
  { name: "MATSIENDI Roland", imageKey: "MATSIENDI Roland" },
  { name: "MAVOUNGOU MIHINDOU", imageKey: "MAVOUNGOU MIHINDOU" },
  { name: "MBADINGA MBADINGA Josué", imageKey: "MBADINGA MBADINGA Josué" },
  { name: "MBAGOU Jean-Bosco", imageKey: "MBAGOU Jean-Bosco" },
  { name: "MBAGOU Jeanne", imageKey: "MBAGOU Jeanne" },
  { name: "MBOUMBOU MAKANGA Jean-Marie", imageKey: "MBOUMBOU MAKANGA Jean-Marie" },
  { name: "MBOUMI NZINZI Jean Claude", imageKey: "MBOUMI NZINZI Jean Claude" },
  { name: "MENGUE EKOMIE Roger", imageKey: "MENGUE EKOMIE Roger" },
  { name: "MENGUE M'AKUE Diane Dorothée", imageKey: "MENGUE M'AKUE Diane Dorothée" },
  { name: "MENIE M'YEYI Antoine", imageKey: "MENIE M'YEYI Antoine" },
  { name: "MIHINDOU MI NZAMBA Carl", imageKey: "MIHINDOU MI NZAMBA Carl" },
  { name: "MINKO MI ETOUA Christian", imageKey: "MINKO MI ETOUA Christian" },
  { name: "MOUDOUNDGA MOUITY Patrice", imageKey: "MOUDOUNDGA MOUITY Patrice" },
  { name: "MOUELE ROMAIN ROMAIN", imageKey: "MOUELE ROMAIN ROMAIN" },
  { name: "MOURI BOUSSOUGOU Dieudonné", imageKey: "MOURI BOUSSOUGOU Dieudonné" },
  { name: "MOUPOUMBOU Clément", imageKey: "MOUPOUMBOU Clément" },
  { name: "MOUSSAVOU Florentin", imageKey: "MOUSSAVOU Florentin" },
  { name: "MVE EBANG Marcellin", imageKey: "MVE EBANG Marcellin" },
  { name: "NANG ONDO THIERRY", imageKey: "NANG ONDO THIERRY" },
  { name: "NDIMAL BARRY", imageKey: "NDIMAL BARRY" },
  { name: "NDJIMBI Franck", imageKey: "NDJIMBI Franck" },
  { name: "NDJOUNGA Jean Bosco", imageKey: "NDJOUNGA Jean Bosco" },
  { name: "NDONG OBIANG François", imageKey: "NDONG OBIANG François" },
  { name: "NDONGOU Jean François", imageKey: "NDONGOU Jean François" },
  { name: "NGABIKOUMOU WADA Mesmin Boris", imageKey: "NGABIKOUMOU WADA Mesmin Boris" },
  { name: "NGOMA Angélique", imageKey: "NGOMA Angélique" },
  { name: "NGOUENENI NDZENGOUIMA Joël", imageKey: "NGOUENENI NDZENGOUIMA Joël" },
  { name: "NGOUNDJI Ludwine Staelle", imageKey: "NGOUNDJI Ludwine Staelle" },
  { name: "NGUEMA NGUEMA Sosthène", imageKey: "NGUEMA NGUEMA Sosthène" },
  { name: "NGUIENO Dominique Guy-Noël", imageKey: "NGUIENO Dominique Guy-Noël" },
  { name: "NTOUTOUME MEBIAME Aurélien", imageKey: "NTOUTOUME MEBIAME Aurélien" },
  { name: "NTOUTOUME Béatrice", imageKey: "NTOUTOUME Béatrice" },
  { name: "NZE NDONG NZE PASCAL FRANCK", imageKey: "NZE NDONG NZE PASCAL FRANCK" },
  { name: "NZONDO ELOI", imageKey: "NZONDO ELOI" },
  { name: "NZUE EDZANG Frédéric", imageKey: "NZUE EDZANG Frédéric" },
  { name: "OBAME EYEGUE Jean-Marie", imageKey: "OBAME EYEGUE Jean-Marie" },
  { name: "OGOULIGUENDE née MAVIKANA Pepeçy", imageKey: "OGOULIGUENDE née MAVIKANA Pepeçy" },
  { name: "ONA NGUEMA Freddy Fernandez", imageKey: "ONA NGUEMA Freddy Fernandez" },
  { name: "ONDJAMBI ONGUIA Gérard", imageKey: "ONDJAMBI ONGUIA Gérard" },
  { name: "OSSINGA ONANGA Alban Stéphane", imageKey: "OSSINGA ONANGA Alban Stéphane" },
  { name: "OTANDO Charles", imageKey: "OTANDO Charles" },
  { name: "OVONO MBOUENGOU Jean Placilde", imageKey: "OVONO MBOUENGOU Jean Placilde" },
  { name: "OWONO NDONG Edgard", imageKey: "OWONO NDONG Edgard" },
  { name: "POLO ép PANDZOU ODETTE", imageKey: "POLO ép PANDZOU ODETTE" },
  { name: "REVANGUE Ep ABIOUME Madeleine Sidonie", imageKey: "REVANGUE Ep ABIOUME Madeleine Sidonie" },
  { name: "ROYEMBO Albert Richard", imageKey: "ROYEMBO Albert Richard" },
  { name: "SOUGOU LATSIERE Alix", imageKey: "SOUGOU LATSIERE Alix" },
  { name: "SOWA AKENDENGUE NIANG Stephen Darell", imageKey: "SOWA AKENDENGUE NIANG Stephen Darell" },
  { name: "TATY KOUMBA Odette Jeanine", imageKey: "TATY KOUMBA Odette Jeanine" },
  { name: "TRISSAUGUI OGOUILATH Pendi Georges", imageKey: "TRISSAUGUI OGOUILATH Pendi Georges" },
  { name: "TSONO Huguette", imageKey: "TSONO Huguette" },
  { name: "WAURA Fidèle", imageKey: "WAURA Fidèle" },
  { name: "YEMBIT MANGALA Jean de Dieu", imageKey: "YEMBIT MANGALA Jean de Dieu" },
].sort((a, b) => a.name.localeCompare(b.name)); // Tri alphabétique par nom

const DeputesAlphabetiquePage: React.FC = () => {
  // État pour gérer l'index de l'article "À la une" actuellement affiché
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  // Effet pour le défilement automatique des articles "À la une"
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticleIndex((prevIndex) =>
        (prevIndex + 1) % featuredArticles.length
      );
    }, 4000); // Change toutes les 4 secondes

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {/* Zone de contenu principale */}
        <div className="w-full md:w-9/12 px-4">

          {/* Fil d'Ariane */}
          <div className="mb-6">
            <ul className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <a href="/" className="flex items-center hover:text-blue-600 transition-colors">
                  <Home className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">Accueil</span>
                </a>
              </li>
              <li>&gt;</li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors" onClick={(e) => e.preventDefault()}>
                  Députés
                </a>
              </li>
              <li>&gt;</li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors" onClick={(e) => e.preventDefault()}>
                  Les Députés de la Transition
                </a>
              </li>
              <li>&gt;</li>
              <li className="text-blue-800 font-semibold">
                Liste des Députés par ordre alphabétique
              </li>
            </ul>
          </div>

          {/* Titre de la page */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">
            Liste des Députés par ordre alphabétique
          </h2>

          {/* Liste des députés */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {deputesList.map((depute, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-4">
                <img
                  src={deputeImages[depute.imageKey] || "https://placehold.co/150x150/e0e0e0/333333?text=Depute"}
                  alt={depute.name}
                  className="rounded-lg mx-auto mb-3 w-32 h-32 object-cover border-2 border-blue-300 shadow-sm"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=Depute"; }}
                />
                <p className="text-gray-800 font-semibold text-sm">{depute.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Barre latérale (colonne de droite) */}
        <div className="w-full md:w-3/12 px-4 mt-8 md:mt-0">
          {/* Section Président */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Jean-François NDONGOU</h3>
            <div className="text-center mb-4">
              <img
                src={presidentImages["Jean-François NDONGOU"]}
                alt="Jean-François NDONGOU"
                className="rounded-full mx-auto mb-2 w-28 h-28 object-cover border-2 border-blue-500 shadow-lg"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/150x150/e0e0e0/333333?text=President"; }} // Fallback
              />
              <p className="text-gray-600 text-sm font-semibold">Président de l'Assemblée Nationale de la Transition</p>
            </div>
          </div>

          {/* Section "À la une" avec défilement automatique */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 overflow-hidden relative h-64">
            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">À la une</h3>
            <div className="relative w-full h-48"> {/* Hauteur fixe pour le contenu du carousel */}
              {featuredArticles.map((article, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out
                              ${index === currentArticleIndex ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}
                >
                  <a href={article.link} className="block text-center w-full">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-32 object-cover rounded-md mb-2 shadow-sm"
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/270x186/e0e0e0/333333?text=Article"; }} // Fallback
                    />
                    <p className="text-sm font-semibold text-blue-600 hover:underline px-2">{article.title}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Section Editorial */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Editorial</h3>
            <ul className="space-y-2 text-blue-600">
              <li><a href="#" className="hover:underline">Edito</a></li>
            </ul>
          </div>

          {/* Section Publications */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Publications</h3>
            <ul className="space-y-2 text-blue-600">
              <li><a href="#" className="hover:underline">Audition du Ministre de la Santé et de la Prévoyance Sociale</a></li>
              <li><a href="#" className="hover:underline">Répertoire des Lois votées en 2013</a></li>
              <li><a href="#" className="hover:underline">Bilan des travaux législatifs</a></li>
              <li><a href="#" className="hover:underline">Le Travail collaboratif dans les assemblées parlementaires</a></li>
              <li><a href="#" className="hover:underline">Lois de finances 2011</a></li>
              <li><a href="#" className="hover:underline">Toutes les publications</a></li>
            </ul>
          </div>

          {/* Section Textes de référence */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Textes de référence</h3>
            <ul className="space-y-2 text-blue-600">
              <li><a href="#" className="hover:underline">Règlement du parlement</a></li>
              <li><a href="#" className="hover:underline">La Constitution</a></li>
              <li><a href="#" className="hover:underline">Tous les textes</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeputesAlphabetiquePage;
