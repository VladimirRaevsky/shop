import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../../../../public/locales/en/translation.json";
import translationRU from "../../../../public/locales/ru/translation.json";

void i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "ru",
		debug: true,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		resources: {
			en: {
				translationEN,
			},
			ru: {
				translationRU,
			},
		},
	});

export default i18n;
