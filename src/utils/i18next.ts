// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

interface HeaderTranslation {
 title: string;
 subtitle: string;
 myBookings: string;
 currency: string;
 login: string;
 logout: string;
 changeLanguage: string;
}

interface FooterTranslation {
 title: string;
 copyright: string;
 rights: string;
}

interface Translation {
 header: HeaderTranslation;
 footer: FooterTranslation;
}

interface I18nResources {
 [key: string]: {
    translation: Translation;
 };
}

const resources: I18nResources = {
 en: {
    translation: {
      header: {
        title: 'Kickdrum',
        subtitle: 'Internet Booking Engine',
        myBookings: 'MY BOOKINGS',
        currency: '$USD',
        login: 'Login',
        logout: 'Logout',
        changeLanguage: 'Change Language',
      },
      footer: {
        title: 'Kickdrum',
        copyright: '© Kickdrum Technology Group LLC.',
        rights: 'All rights reserved.',
      },
    },
 },
 fr: {
    translation: {
      header: {
        title: 'Kickdrum',
        subtitle: 'Moteur de réservation Internet',
        myBookings: 'MES RESERVATIONS',
        currency: '€EUR',
        login: 'Connexion',
        logout: 'Déconnexion',
        changeLanguage: 'Changer de langue',
      },
      footer: {
        title: 'Kickdrum',
        copyright: '© Kickdrum Groupe de Technologie S.A.S.',
        rights: 'Tous droits réservés.',
      },
    },
 },
 hn: {
    translation: {
      header: {
        title: 'Kickdrum',
        subtitle: 'इंटरनेट बुकिंग इंजन',
        myBookings: 'मेरी बुकिंग्स',
        currency: '₹INR',
        login: 'लॉग इन करें',
        logout: 'लॉग आउट करें',
        changeLanguage: 'भाषा बदलें',
      },
      footer: {
        title: 'Kickdrum',
        copyright: '© किकड्रम टेक्नोलॉजी ग्रूप एलसीएलसी.',
        rights: 'सभी अधिकार सुरक्षित।',
      },
    },
 },
 
};

i18n
 .use(initReactI18next)
 .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
 });

export default i18n;