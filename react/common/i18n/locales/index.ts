import en from './en/translation.json';
import fr from './fr/translation.json';
import de from './de/translation.json';

export enum Language {
  EN = 'en',
  FR = 'fr',
  DE = 'de',
}
export const supportedLngs = [Language.EN, Language.FR, Language.DE];

export const translations = {
  en,
  fr,
  de,
};
