// src/components/Legislature13Page.tsx
import React, { useState, useEffect } from 'react';
import { Home, ChevronLeft } from 'lucide-react'; // Importation des icônes

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

// Données des députés de la 13ème législature (basées sur les captures d'écran)
const deputes13emeLegislature = [
  { name: "ABOUMI LENDOYE Alain", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AL" },
  { name: "ABOUROU OTOGO Rodrigue", party: "RV", image: "https://placehold.co/100x100/e0e0e0/333333?text=RO" },
  { name: "AKENDENGUE Pierre Philippe", party: "IND", image: "https://placehold.co/100x100/e0e0e0/333333?text=PA" },
  { name: "AKOUE Elie-Colin", party: "DN", image: "https://placehold.co/100x100/e0e0e0/333333?text=EA" },
  { name: "AKURE-DAVAIN Séraphin", party: "LD", image: "https://placehold.co/100x100/e0e0e0/333333?text=SA" },
  { name: "ANGO NDOUTOUFOU François", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=FN" },
  { name: "ANGUILET NGOUANDJI Jeanne Prisca", party: "IND", image: "https://placehold.co/100x100/e0e0e0/333333?text=JA" },
  { name: "ASSENGONE OBAME Françoise", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=FA" },
  { name: "ASSOUMOU AKUE Julien Florent", party: "CLR", image: "https://placehold.co/100x100/e0e0e0/333333?text=JA" },
  { name: "ATSAME BEKALE Aline Clémence", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AC" },
  { name: "AWASSI Alexandre Gilbert", party: "IND", image: "https://placehold.co/100x100/e0e0e0/333333?text=AA" },
  { name: "AZIZET Berthe ép. MBOUMBA", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=BM" },
  { name: "BAMBIRI Patrick Serge", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=PB" },
  { name: "BEKALLE AKWE Henri", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=HB" },
  { name: "BIAHODJOW Germain", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=GB" },
  { name: "BIMBI MAYELA Joachim", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JB" },
  { name: "BIYOGHE MBA Paul", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=PM" },
  { name: "BOKAMBA-NDOMBI ATABI Franck Ulrich", party: "PSD", image: "https://placehold.co/100x100/e0e0e0/333333?text=FB" },
  { name: "BONGO ONDIMBA Malika", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=MO" },
  { name: "BOUANGA Inès Diane", party: "LD", image: "https://placehold.co/100x100/e0e0e0/333333?text=IB" },
  { name: "BOUKOUBI Faustin", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=FB" },
  { name: "BOUNGOUERES Alain Simplice", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AB" },
  { name: "BOUSSENGUE Joseph Marie", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JB" },
  { name: "BOUTAMBA MBINA Alexis", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AB" },
  { name: "BUROBU-BU-BUSSAMBE Alain Valéry", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AB" },
  { name: "DIKOUBA Marcel", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=MD" },
  { name: "DITOMBIS Angelina", party: "UPNR", image: "https://placehold.co/100x100/e0e0e0/333333?text=AD" },
  { name: "DOUKAGA KASSA Jean Pierre", party: "LD", image: "https://placehold.co/100x100/e0e0e0/333333?text=JD" },
  { name: "EBE ATOMO Christian", party: "RV", image: "https://placehold.co/100x100/e0e0e0/333333?text=CE" },
  { name: "EDANE Jean Robert", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JE" },
  { name: "EFOUCKA Dieudonné", party: "SDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=DE" },
  { name: "ELLA MINTASA David", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=DE" },
  { name: "EMANE ANGORE Habib Junior", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=HE" },
  { name: "ENGANDJI-ALANDJI Arnaud Calixte", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AE" },
  { name: "ENGONE MINTOGHE Anges", party: "RHM", image: "https://placehold.co/100x100/e0e0e0/333333?text=AE" },
  { name: "ENGONE NDONG Raphaël", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=RE" },
  { name: "ESSIE EMANE Paul", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=PE" },
  { name: "ETOUGHE BIYOGHE Georges Joseph Casimir", party: "SDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=GE" },
  { name: "EYIENGOT Noël Mollière", party: "IND", image: "https://placehold.co/100x100/e0e0e0/333333?text=NM" },
  { name: "FOUTY Frateli Martial", party: "LD", image: "https://placehold.co/100x100/e0e0e0/333333?text=FM" },
  { name: "GOULONGANA Jean-Robert", party: "RHM", image: "https://placehold.co/100x100/e0e0e0/333333?text=JG" },
  { name: "IGNOUMBA Jonathan", party: "LD", image: "https://placehold.co/100x100/e0e0e0/333333?text=JI" },
  { name: "IMMONGUALT TATANGANI Régis", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=IR" },
  { name: "INDJENDJE NDALA Pierre Daniel", party: "SDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=PI" },
  { name: "INDOUMOU-MAMBOUGOUNGOU Barnabé", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=BI" },
  { name: "INGOGNET Idriss Junior", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=II" },
  { name: "INGUESSI Marie-Stéphanie", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=MI" },
  { name: "KOHO Paulette", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=PK" },
  { name: "KONDONDO AHADJI Mesmin", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=MK" },
  { name: "KOTHA Adélaïde Sylvie ép. NZAMBA", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AK" },
  { name: "KOUBANGOUYE Jean Boniface", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JK" },
  { name: "KOUMBA DE SOUZA Pierre André", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=PK" },
  { name: "LABAYE David", party: "RHM", image: "https://placehold.co/100x100/e0e0e0/333333?text=DL" },
  { name: "LISSENGUET GOUMBOU Irène ép. LINDZONDZO", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=IL" },
  { name: "LOUEMBE Blaise", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=BL" },
  { name: "MABIALA Martin", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=MM" },
  { name: "MABIALA Serge Maurice", party: "RHM", image: "https://placehold.co/100x100/e0e0e0/333333?text=SM" },
  { name: "MABICKA IBIATSI Jonas", party: "LD", image: "https://placehold.co/100x100/e0e0e0/333333?text=JM" },
  { name: "MADOUANGOUMOUCKAMBALA François", party: "SDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=FM" },
  { name: "MAGANGA MOUSSAVOU Née MALANDOU-BOUKA Albertine", party: "PSD", image: "https://placehold.co/100x100/e0e0e0/333333?text=AM" },
  { name: "MAKAYA MANGOMA Serge", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=SM" },
  { name: "MALEGA Marie-Hélène", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=MM" },
  { name: "MALONGA MOUELET Gabriel", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=GM" },
  { name: "MAMADOU BOUEMI Oumar", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=OM" },
  { name: "MAMBOUNDOU MOUNDZIEGOU Hyacinthe", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=HM" },
  { name: "MAMIAKA IKOUTANDA Guy Maixent", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=GM" },
  { name: "MANFOUMBI Yves-Fernand", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=YM" },
  { name: "MAPANGOU Guy-Bertrand", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=GM" },
  { name: "MASSALA Jacques", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JM" },
  { name: "MATSIENDI Roland", party: "IND", image: "https://placehold.co/100x100/e0e0e0/333333?text=RM" },
  { name: "MAYOUNGOU BOUYOU Vincent", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=VM" },
  { name: "MAYOMBOT Hugues Régis", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=HM" },
  { name: "MBA NZE Alain", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AM" },
  { name: "MBADINGA MOMBO Ferdinand", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=FM" },
  { name: "MBADINGA Wilfrid", party: "SDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=WM" },
  { name: "MBAGOU Jean-Bosco", party: "SDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JM" },
  { name: "MBOUMI NZINZI Jean-Claude", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JM" },
  { name: "MENVIE M'OBAME Christian", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=CM" },
  { name: "MESSONE Noël Nelson", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=NM" },
  { name: "MIKANGA SEMBA Philippe Romain", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=PM" },
  { name: "MIKOLO Gabriel Augé", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=GM" },
  { name: "MOMOMBA Fidèle", party: "LD", image: "https://placehold.co/100x100/e0e0e0/333333?text=FM" },
  { name: "MOUANGO BOUNGENDZA Simplice", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=SM" },
  { name: "MOUDOUMA Apollinaire Adonis", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AM" },
  { name: "MOUHOULOULOU Jules Esdras", party: "SDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JM" },
  { name: "MOUKOUNDZI Cyriaque", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=CM" },
  { name: "MOULENGUI Gladys", party: "PSD", image: "https://placehold.co/100x100/e0e0e0/333333?text=GM" },
  { name: "MOULENGUI MABENDE Martin", party: "LD", image: "https://placehold.co/100x100/e0e0e0/333333?text=MM" },
  { name: "MOUSSAVOU Marcellin", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=MM" },
  { name: "MOUSSAVOU MOUSSAVOU Jean-Paul", party: "RHM", image: "https://placehold.co/100x100/e0e0e0/333333?text=JM" },
  { name: "MPEA ONTISEKOU Adeline Léda", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AM" },
  { name: "MVOULA Etienne", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=EM" },
  { name: "NDEMENGANE NDONG Patricia", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=PN" },
  { name: "NDJERI épse. NGALIABALI Germaine", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=GN" },
  { name: "NDJOUNGA Jean Bosco", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JN" },
  { name: "NDONG ABOGHE Erick-Blaise", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=EN" },
  { name: "NDONG EKOMI Séverin Pierre", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=SN" },
  { name: "NDONG NGUEMA Landry", party: "RV", image: "https://placehold.co/100x100/e0e0e0/333333?text=LN" },
  { name: "NDONG NZONG Jean Baptiste", party: "PDG-SDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JN" },
  { name: "NDONG OBAME Serge", party: "RV", image: "https://placehold.co/100x100/e0e0e0/333333?text=SN" },
  { name: "NDONG OBIANG Albert", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AN" },
  { name: "NDONGOU Jean François", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JN" },
  { name: "NDZOUMBA Bernard", party: "LD", image: "https://placehold.co/100x100/e0e0e0/333333?text=BN" },
  { name: "NGABIKOUMOU WADA Mesmin Boris", party: "LD", image: "https://placehold.co/100x100/e0e0e0/333333?text=MN" },
  { name: "NGAIPPE Philibert", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=PN" },
  { name: "NGARI Idriss", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=IN" },
  { name: "NGAZOUZE Raphaël", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=RN" },
  { name: "NGOMA Angélique", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AN" },
  { name: "NKERO MOUGNONKO Charlotte ép. ESSONO NDOH", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=CN" },
  { name: "NKOGHE BEKALE Julien", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JN" },
  { name: "NKOGHE ESSINGONE Adrien", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AN" },
  { name: "NKOGHE NZE Arsène Edouard", party: "RV", image: "https://placehold.co/100x100/e0e0e0/333333?text=AN" },
  { name: "NKOULOU ABESSOLO Daniel", party: "RV", image: "https://placehold.co/100x100/e0e0e0/333333?text=DN" },
  { name: "NONO Jean", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JN" },
  { name: "NSO-AMYENG Jean-Rémy", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JN" },
  { name: "NTOLO EY'A Francis", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=FN" },
  { name: "NTOUTOUME MEBIAME Aurélien", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AN" },
  { name: "NZENGUE MAYILA Philippe", party: "LD", image: "https://placehold.co/100x100/e0e0e0/333333?text=PN" },
  { name: "NZUENGUI Alphonse", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AN" },
  { name: "NZIGOU MAMFOUMBI Bonaventure", party: "FER", image: "https://placehold.co/100x100/e0e0e0/333333?text=BN" },
  { name: "NZUE EDZANG Frédéric", party: "RV", image: "https://placehold.co/100x100/e0e0e0/333333?text=FN" },
  { name: "OBAME ONDO Jean-Marie", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JO" },
  { name: "OBIANG ABA'A Aimé Jean Marie", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AO" },
  { name: "OBIANG NGUEMA", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=ON" },
  { name: "OGANDAGA Jean-Marie", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JO" },
  { name: "OGOUWALANGA AWORE Lucienne", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=LO" },
  { name: "ONANGA Y'OBEGUE Ali Akbar", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AO" },
  { name: "ONDO Estelle", party: "IND", image: "https://placehold.co/100x100/e0e0e0/333333?text=EO" },
  { name: "ONDZOUNGA Pacôme Rufin", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=PO" },
  { name: "ONGONO ONKONI Charles", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=CO" },
  { name: "ONGOUORI NGOUBILI Félicité", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=FO" },
  { name: "OPIANGAH Patrick Hervé", party: "UDIS/PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=PO" },
  { name: "OTANDAULT Jean Fidèle", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JO" },
  { name: "OTANDO Charles", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=CO" },
  { name: "OWONO NDONG Edgard", party: "RHM", image: "https://placehold.co/100x100/e0e0e0/333333?text=EO" },
  { name: "OYIBA Jean-Pierre", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JO" },
  { name: "PASSANTHERE Alphonse", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AP" },
  { name: "PAZOCK MAYELE Jérémie", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=JP" },
  { name: "RETENO André Jules", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AR" },
  { name: "ROYEMBO Albert Richard", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AR" },
  { name: "SAKOUSSOU Eugénie Félicité", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=ES" },
  { name: "TSIOUKACKA Anatole", party: "PDG", image: "https://placehold.co/100x100/e0e0e0/333333?text=AT" },
  { name: "ZIMA EBEYARD Minault Maxime", party: "UN", image: "https://placehold.co/100x100/e0e0e0/333333?text=MZ" },
];

// Définition de l'interface pour les props du composant
interface Legislature13PageProps {
  navigateTo: (page: string) => void;
}

const Legislature13Page: React.FC<Legislature13PageProps> = ({ navigateTo }) => {
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
                  <Home className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">Accueil</span>
                </a>
              </li>
              <li>&gt;</li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors" onClick={() => navigateTo('deputes')}>
                  Députés
                </a>
              </li>
              <li>&gt;</li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors" onClick={() => navigateTo('legislatures-precedentes')}>
                  Les législatures précédentes
                </a>
              </li>
              <li>&gt;</li>
              <li className="text-blue-800 font-semibold">
                La 13ème Législature
              </li>
            </ul>
          </div>

          {/* Titre de la page */}
          <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">
            La 13ème Législature
          </h2>

          {/* Image de la 13ème législature */}
          <div className="mb-8 flex justify-center">
            <img
              src="/images/Capture d’écran du 2025-07-01 15-29-57.jpg"
              alt="La 13ème Législature"
              className="rounded-lg shadow-lg max-w-full h-auto"
              onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/800x400/e0e0e0/333333?text=13eme+Legislature"; }}
            />
          </div>

          {/* Liste des députés de la 13ème législature */}
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Liste des Députés de la 13ème Législature</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deputes13emeLegislature.map((depute, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
                <img
                  src={depute.image}
                  alt={depute.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-300"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/64x64/e0e0e0/333333?text=DP"; }}
                />
                <div>
                  <p className="text-gray-800 font-semibold text-base">{depute.name}</p>
                  <p className="text-gray-600 text-sm">Parti: {depute.party}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={() => navigateTo('legislatures-precedentes')}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Retour aux législatures précédentes
            </button>
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

export default Legislature13Page;
