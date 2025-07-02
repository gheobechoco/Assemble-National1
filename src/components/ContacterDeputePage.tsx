// src/components/ContacterDeputePage.tsx
import React, { useState, useEffect } from 'react';

// Données pour les articles "À la une" avec des images de remplacement (réutilisées)
const featuredArticles = [
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Travaux+Legislatifs", // Image des Travaux Législatifs
    title: "Travaux : Plusieurs textes législatifs structurants dont celui...",
    link: "#"
  },
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Seance+Pleniere+1", // Image d'une Séance Plénière 1
    title: "Travaux : Jean François NDONGOU préside une séance plénière",
    link: "#"
  },
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Reforme+Constitutionnelle", // Image d'une Réforme Constitutionnelle
    title: "Réforme constitutionnelle : Les enjeux",
    link: "#"
  },
  {
    image: "https://placehold.co/270x186/e0e0e0/333333?text=Budget+2024", // Image du Budget 2024
    title: "Budget 2024 : Adoption des mesures",
    link: "#"
  }
];

// URLs des images des présidents (placeholders) (réutilisées)
const presidentImages: { [key: string]: string } = {
  "Jean-François NDONGOU": "https://placehold.co/150x150/e0e0e0/333333?text=J.F.+NDONGOU", // Image de Jean-François NDONGOU
  "placeholder_member": "https://placehold.co/150x150/e0e0e0/333333?text=Membre" // Image générique d'un membre
};

// Images spécifiques des députés (basées sur les captures d'écran fournies)
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
  "ONDIAS SOUNA Luck Harley": "https://placehold.co/150x150/e0e0e0/333333?text=L.H.+ONDIAS",
  "ONDJAMBI ONGUIA Gérard": "https://placehold.co/150x150/e0e0e0/333333?text=G.+ONDJAMBI",
  "ONDZOUNGA Pacôme Rufin": "https://placehold.co/150x150/e0e0e0/333333?text=P.R.+ONDZOUNGA",
  "ONGUORI NGOUBILI Félicité": "https://placehold.co/150x150/e0e0e0/333333?text=F.+ONGUORI",
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
  { name: "ABIERY WILLY BERTRAND", imageKey: "ABIERY WILLY BERTRAND", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 1er Arrondissement", province: "Estuaire", commissions: ["Commission des Lois", "Commission des Finances"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "ABOUGHE OTSAGHE Charlotte", imageKey: "ABOUGHE OTSAGHE Charlotte", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Port-Gentil 2ème Arrondissement", province: "Ogooué-Maritime", commissions: ["Commission de la Santé"], politicalParty: "PSD", presentation: "Députée de la Transition" },
  { name: "ADIABENOT-MEPOREWA Flavienne Patricia Hélène", imageKey: "ADIABENOT-MEPOREWA Flavienne Patricia Hélène", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Oyem", province: "Woleu-Ntem", commissions: ["Commission de l'Environnement"], politicalParty: "RV", presentation: "Députée de la Transition" },
  { name: "AKOMEZOGHO FRANCOIS AUGUSTE", imageKey: "AKOMEZOGHO FRANCOIS AUGUSTE", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Makokou", province: "Ogooué-Ivindo", commissions: ["Commission des Lois"], politicalParty: "LD", presentation: "Député de la Transition" },
  { name: "AKURE DAVAIN Séraphin", imageKey: "AKURE DAVAIN Séraphin", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Moanda", province: "Haut-Ogooué", commissions: ["Commission de la Santé"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "AWASSI Alexandre Gilbert", imageKey: "AWASSI Alexandre Gilbert", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Lambaréné", province: "Moyen-Ogooué", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "BADJINA MOUDOUMA épse ELLA ASSEKO Firmine Olga", imageKey: "BADJINA MOUDOUMA épse ELLA ASSEKO Firmine Olga", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Franceville", province: "Haut-Ogooué", commissions: ["Commission des Finances"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "BANDEGA LENDOYE Raphaël", imageKey: "BANDEGA LENDOYE Raphaël", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Tchibanga", province: "Nyanga", commissions: ["Commission de la Santé"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "BECKOPA Epse Roy Valentin Virginie", imageKey: "BECKOPA Epse Roy Valentin Virginie", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Koulamoutou", province: "Ogooué-Lolo", commissions: ["Commission de la Santé"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "BEKA B'OBAME Jean Marie", imageKey: "BEKA B'OBAME Jean Marie", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Bitam", province: "Woleu-Ntem", commissions: ["Commission de la Santé"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "BEKALLE-AKWE Henri", imageKey: "BEKALLE-AKWE Henri", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Lastourville", province: "Ogooué-Lolo", commissions: ["Commission des Affaires Étrangères"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "BIAHODJOW Germain", imageKey: "BIAHODJOW Germain", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Ndendé", province: "Ngounié", commissions: ["Commission des Affaires Étrangères"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "BIYOGHE MBA Paul", imageKey: "BIYOGHE MBA Paul", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 3ème Arrondissement", province: "Estuaire", commissions: ["Commission de l'Environnement", "Commission de la Planification"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "BOUANGA MOMBO ep. MAKITA Nicole", imageKey: "BOUANGA MOMBO ep. MAKITA Nicole", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Port-Gentil 1er Arrondissement", province: "Ogooué-Maritime", commissions: ["Commission de la Santé"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "BOUKANDOU Elza Richtuelle", imageKey: "BOUKANDOU Elza Richtuelle", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mouila", province: "Ngounié", commissions: ["Commission de l'Environnement", "Commission de la Santé"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "BOUYOU Tatiana Mireille", imageKey: "BOUYOU Tatiana Mireille", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mitzic", province: "Woleu-Ntem", commissions: ["Commission des Affaires Étrangères", "Commission de la Planification"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "DIOUMY MOUBASSANGO Donatien Lhye", imageKey: "DIOUMY MOUBASSANGO Donatien Lhye", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Omboué", province: "Ogooué-Maritime", commissions: ["Commission des Affaires Étrangères"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "DOUFOUNDOU Emerencienne", imageKey: "DOUFOUNDOU Emerencienne", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Fougamou", province: "Ngounié", commissions: ["Commission de la Santé"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "DOUMBENENY Jean Lucien", imageKey: "DOUMBENENY Jean Lucien", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Okondja", province: "Haut-Ogooué", commissions: ["Commission des Lois", "Commission des Finances"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "EBANETH EP. SIMA EYI NATHALIE", imageKey: "EBANETH EP. SIMA EYI NATHALIE", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 5ème Arrondissement", province: "Estuaire", commissions: ["Commission des Lois", "Commission des Finances"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "EKOUA SIMA Jean Paulin", imageKey: "EKOUA SIMA Jean Paulin", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Minvoul", province: "Woleu-Ntem", commissions: ["Commission des Lois", "Commission de la Planification"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "ELLA ENGONGA Leonel", imageKey: "ELLA ENGONGA Leonel", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Oyem", province: "Woleu-Ntem", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "ELLA NGUEMA Gerard", imageKey: "ELLA NGUEMA Gerard", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 6ème Arrondissement", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "EYEGHE Ali", imageKey: "EYEGHE Ali", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 4ème Arrondissement", province: "Estuaire", commissions: ["Commission des Finances"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "FOUMBOULA LIBEKA M. GEOFFROY", imageKey: "FOUMBOULA LIBEKA M. GEOFFROY", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Ndendé", province: "Ngounié", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "FOUTY Frateli Martial", imageKey: "FOUTY Frateli Martial", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Malinga", province: "Ogooué-Lolo", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "GEY Charles-Henri", imageKey: "GEY Charles-Henri", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Port-Gentil 3ème Arrondissement", province: "Ogooué-Maritime", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "GONDJOUT INDJENDJET Melvin Vincent", imageKey: "GONDJOUT INDJENDJET Melvin Vincent", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 2ème Arrondissement", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "IDODO Jean Lambert", imageKey: "IDODO Jean Lambert", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mékambo", province: "Ogooué-Ivindo", commissions: ["Commission des Lois", "Commission de la Planification"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "IMMONGUALT TATANGANI Eudes Régis", imageKey: "IMMONGUALT TATANGANI Eudes Régis", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Lékoni", province: "Haut-Ogooué", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "ISSEMBE Serge Aimé", imageKey: "ISSEMBE Serge Aimé", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Kango", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "KOUMBA Brigitte", imageKey: "KOUMBA Brigitte", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Ndendé", province: "Ngounié", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "LEKOGO Justine Judith", imageKey: "LEKOGO Justine Judith", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mounana", province: "Haut-Ogooué", commissions: ["Commission des Finances"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "LEYAMA Jean Valentin", imageKey: "LEYAMA Jean Valentin", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Lambaréné", province: "Moyen-Ogooué", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "LIBAMA Marcel", imageKey: "LIBAMA Marcel", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Tchibanga", province: "Nyanga", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "LISSENGUET GOUMBOU Irène", imageKey: "LISSENGUET GOUMBOU Irène", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mayumba", province: "Nyanga", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "LOUEMBE Blaise", imageKey: "LOUEMBE Blaise", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Koulamoutou", province: "Ogooué-Lolo", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MABIALA Serge Maurice", imageKey: "MABIALA Serge Maurice", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Gamba", province: "Nyanga", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MAGANGA MOUSSAVOU née MALANDOU BOUKA Albertine", imageKey: "MAGANGA MOUSSAVOU née MALANDOU BOUKA Albertine", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mouila", province: "Ngounié", commissions: ["Commission des Lois"], politicalParty: "PSD", presentation: "Députée de la Transition" },
  { name: "MALLY HODJOUA Gabriel", imageKey: "MALLY HODJOUA Gabriel", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mbigou", province: "Ngounié", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MANDJOU NGAYOUO Paulin", imageKey: "MANDJOU NGAYOUO Paulin", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mékambo", province: "Ogooué-Ivindo", commissions: ["Commission des Lois", "Commission de la Planification"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MATSIENDI Roland", imageKey: "MATSIENDI Roland", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Port-Gentil 1er Arrondissement", province: "Ogooué-Maritime", commissions: ["Commission des Finances"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MAVOUNGOU MIHINDOU", imageKey: "MAVOUNGOU MIHINDOU", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Tchibanga", province: "Nyanga", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MBADINGA MBADINGA Josué", imageKey: "MBADINGA MBADINGA Josué", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Ndendé", province: "Ngounié", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MBAGOU Jean-Bosco", imageKey: "MBAGOU Jean-Bosco", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Moanda", province: "Haut-Ogooué", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MBAGOU Jeanne", imageKey: "MBAGOU Jeanne", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Franceville", province: "Haut-Ogooué", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "MBOUMBOU MAKANGA Jean-Marie", imageKey: "MBOUMBOU MAKANGA Jean-Marie", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Port-Gentil 2ème Arrondissement", province: "Ogooué-Maritime", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MBOUMI NZINZI Jean Claude", imageKey: "MBOUMI NZINZI Jean Claude", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Lambaréné", province: "Moyen-Ogooué", commissions: ["Commission des Lois", "Commission des Finances"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MENGUE EKOMIE Roger", imageKey: "MENGUE EKOMIE Roger", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Oyem", province: "Woleu-Ntem", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MENGUE M'AKUE Diane Dorothée", imageKey: "MENGUE M'AKUE Diane Dorothée", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Bitam", province: "Woleu-Ntem", commissions: ["Commission de la Planification"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "MENIE M'YEYI Antoine", imageKey: "MENIE M'YEYI Antoine", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 1er Arrondissement", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MIHINDOU MI NZAMBA Carl", imageKey: "MIHINDOU MI NZAMBA Carl", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Koulamoutou", province: "Ogooué-Lolo", commissions: ["Commission de l'Environnement"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MINKO MI ETOUA Christian", imageKey: "MINKO MI ETOUA Christian", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Oyem", province: "Woleu-Ntem", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MOUDOUNDGA MOUITY Patrice", imageKey: "MOUDOUNDGA MOUITY Patrice", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mouila", province: "Ngounié", commissions: ["Commission de la Santé"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MOUELE ROMAIN ROMAIN", imageKey: "MOUELE ROMAIN ROMAIN", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Lambaréné", province: "Moyen-Ogooué", commissions: ["Commission des Affaires Étrangères"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MOURI BOUSSOUGOU Dieudonné", imageKey: "MOURI BOUSSOUGOU Dieudonné", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Tchibanga", province: "Nyanga", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MOUPOUMBOU Clément", imageKey: "MOUPOUMBOU Clément", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mayumba", province: "Nyanga", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MOUSSAVOU Florentin", imageKey: "MOUSSAVOU Florentin", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mbigou", province: "Ngounié", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "MVE EBANG Marcellin", imageKey: "MVE EBANG Marcellin", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 1er Arrondissement", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "NANG ONDO THIERRY", imageKey: "NANG ONDO THIERRY", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Oyem", province: "Woleu-Ntem", commissions: ["Commission de la Planification"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "NDIMAL BARRY", imageKey: "NDIMAL BARRY", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Port-Gentil 3ème Arrondissement", province: "Ogooué-Maritime", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "NDJIMBI Franck", imageKey: "NDJIMBI Franck", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Koulamoutou", province: "Ogooué-Lolo", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "NDJOUNGA Jean Bosco", imageKey: "NDJOUNGA Jean Bosco", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Makokou", province: "Ogooué-Ivindo", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "NDONG OBIANG François", imageKey: "NDONG OBIANG François", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Oyem", province: "Woleu-Ntem", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "NDONGOU Jean François", imageKey: "Jean-François NDONGOU", function: "Président de l'Assemblée Nationale de la Transition", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Non applicable", province: "Non applicable", commissions: [], politicalParty: "PDG", presentation: "Président de l'Assemblée Nationale de la Transition" },
  { name: "NGABIKOUMOU WADA Mesmin Boris", imageKey: "NGABIKOUMOU WADA Mesmin Boris", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 4ème Arrondissement", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "LD", presentation: "Député de la Transition" },
  { name: "NGOMA Angélique", imageKey: "NGOMA Angélique", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Franceville", province: "Haut-Ogooué", commissions: ["Commission de la Santé"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "NGOUENENI NDZENGOUIMA Joël", imageKey: "NGOUENENI NDZENGOUIMA Joël", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Okondja", province: "Haut-Ogooué", commissions: ["Commission de l'Environnement"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "NGOUNDJI Ludwine Staelle", imageKey: "NGOUNDJI Ludwine Staelle", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mouila", province: "Ngounié", commissions: ["Commission de la Santé"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "NGUEMA NGUEMA Sosthène", imageKey: "NGUEMA NGUEMA Sosthène", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Bitam", province: "Woleu-Ntem", commissions: ["Commission de l'Environnement"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "NGUIENO Dominique Guy-Noël", imageKey: "NGUIENO Dominique Guy-Noël", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 5ème Arrondissement", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "NTOUTOUME MEBIAME Aurélien", imageKey: "NTOUTOUME MEBIAME Aurélien", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 6ème Arrondissement", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "NTOUTOUME Béatrice", imageKey: "NTOUTOUME Béatrice", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 1er Arrondissement", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "NZE NDONG NZE PASCAL FRANCK", imageKey: "NZE NDONG NZE PASCAL FRANCK", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 2ème Arrondissement", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "NZONDO ELOI", imageKey: "NZONDO ELOI", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 3ème Arrondissement", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "NZUE EDZANG Frédéric", imageKey: "NZUE EDZANG Frédéric", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 4ème Arrondissement", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "RV", presentation: "Député de la Transition" },
  { name: "OBAME EYEGUE Jean-Marie", imageKey: "OBAME EYEGUE Jean-Marie", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 5ème Arrondissement", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "OBAME ONDO Daniel", imageKey: "OBAME ONDO Daniel", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 6ème Arrondissement", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "OGOULIGUENDE née MAVIKANA Pepeçy", imageKey: "OGOULIGUENDE née MAVIKANA Pepeçy", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Port-Gentil 1er Arrondissement", province: "Ogooué-Maritime", commissions: ["Commission des Finances"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "ONA NGUEMA Freddy Fernandez", imageKey: "ONA NGUEMA Freddy Fernandez", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Port-Gentil 2ème Arrondissement", province: "Ogooué-Maritime", commissions: ["Commission des Affaires Étrangères"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "ONDIAS SOUNA Luck Harley", imageKey: "ONDIAS SOUNA Luck Harley", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Port-Gentil 3ème Arrondissement", province: "Ogooué-Maritime", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "ONDJAMBI ONGUIA Gérard", imageKey: "ONDJAMBI ONGUIA Gérard", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Lambaréné", province: "Moyen-Ogooué", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "ONDZOUNGA Pacôme Rufin", imageKey: "ONDZOUNGA Pacôme Rufin", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Franceville", province: "Haut-Ogooué", commissions: ["Commission des Finances"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "ONGUORI NGOUBILI Félicité", imageKey: "ONGUORI NGOUBILI Félicité", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mouila", province: "Ngounié", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "OSSINGA ONANGA Alban Stéphane", imageKey: "OSSINGA ONANGA Alban Stéphane", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Tchibanga", province: "Nyanga", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "OTANDO Charles", imageKey: "OTANDO Charles", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mayumba", province: "Nyanga", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "OVONO MBOUENGOU Jean Placilde", imageKey: "OVONO MBOUENGOU Jean Placilde", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mbigou", province: "Ngounié", commissions: ["Commission de la Santé"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "OWONO NDONG Edgard", imageKey: "OWONO NDONG Edgard", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mékambo", province: "Ogooué-Ivindo", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "POLO ép PANDZOU ODETTE", imageKey: "POLO ép PANDZOU ODETTE", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Koulamoutou", province: "Ogooué-Lolo", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "REVANGUE Ep ABIOUME Madeleine Sidonie", imageKey: "REVANGUE Ep ABIOUME Madeleine Sidonie", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Okondja", province: "Haut-Ogooué", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "ROYEMBO Albert Richard", imageKey: "ROYEMBO Albert Richard", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Makokou", province: "Ogooué-Ivindo", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "SOUGOU LATSIERE Alix", imageKey: "SOUGOU LATSIERE Alix", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Fougamou", province: "Ngounié", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "SOWA AKENDENGUE NIANG Stephen Darell", imageKey: "SOWA AKENDENGUE NIANG Stephen Darell", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Port-Gentil 3ème Arrondissement", province: "Ogooué-Maritime", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "TATY KOUMBA Odette Jeanine", imageKey: "TATY KOUMBA Odette Jeanine", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mounana", province: "Haut-Ogooué", commissions: ["Commission de la Planification"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "TRISSAUGUI OGOUILATH Pendi Georges", imageKey: "TRISSAUGUI OGOUILATH Pendi Georges", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Lékoni", province: "Haut-Ogooué", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "TSONO Huguette", imageKey: "TSONO Huguette", function: "Députée", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 6ème Arrondissement", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Députée de la Transition" },
  { name: "WAURA Fidèle", imageKey: "WAURA Fidèle", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Libreville 1er Arrondissement", province: "Estuaire", commissions: ["Commission des Lois"], politicalParty: "PDG", presentation: "Député de la Transition" },
  { name: "YEMBIT MANGALA Jean de Dieu", imageKey: "YEMBIT MANGALA Jean de Dieu", function: "Député", address: "B.P.: 29", email: "contact@assemblee-nationale.ga", constituency: "Mékambo", province: "Ogooué-Ivindo", commissions: ["Commission de la Planification"], politicalParty: "PDG", presentation: "Député de la Transition" },
].sort((a, b) => a.name.localeCompare(b.name)); // Tri alphabétique par nom

// Définition de l'interface pour les props du composant, incluant la fonction navigateTo
interface ContacterDeputePageProps {
  navigateTo: (page: string, data?: any) => void;
}

const ContacterDeputePage: React.FC<ContacterDeputePageProps> = ({ navigateTo }) => {
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
                <a href="#" className="flex items-center hover:text-blue-600 transition-colors" onClick={() => navigateTo('accueil')}>
                  
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
              <li className="text-blue-800 font-semibold">
                Contacter le Député
              </li>
            </ul>
          </div>

          {/* Titre de la page */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">
            Contacter un Député
          </h2>

          {/* Message d'information ou formulaire simplifié (exemple) */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-700 mb-4">
              Pour contacter un député, vous pouvez consulter la liste ci-dessous pour trouver les informations générales. Pour des requêtes spécifiques, veuillez utiliser le formulaire de contact général sur la page <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('contacts'); }} className="text-blue-600 hover:underline">Contacts</a>.
            </p>
            {/* Vous pourriez ajouter ici un formulaire de recherche si la liste est très longue */}
            {/* <input type="text" placeholder="Rechercher un député..." className="w-full px-4 py-2 border rounded-lg" /> */}
          </div>

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
                <button
                  onClick={() => navigateTo('depute-details', depute)}
                  className="mt-2 text-blue-600 hover:underline text-xs"
                >
                  Contacter
                </button>
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

export default ContacterDeputePage;
