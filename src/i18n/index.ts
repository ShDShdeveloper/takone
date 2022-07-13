import translationUz from "../locales/uz/translation.json";
import translationRu from "../locales/ru/translation.json";
import translationEn from "../locales/en/translation.json";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		keySeparator: "|",
		resources: {
			en: {
				translation: translationEn
			},
			uz: {
				translation: translationUz
			},
			ru: {
				translation: translationRu
			}
		},
		fallbackLng: ["en", "uz", "ru"],
		detection: {
			order: ["localStorage"]
		},

		react: {
			useSuspense: false
		}
	});

export default i18n;

export const getLocaleName = (name: string) => (i18n.language ? `${name}_${i18n.language}` : `${name}_ru`);