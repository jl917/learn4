import { atom } from 'recoil';

export const atomLocale = atom({
  key: 'locale',
  default: localStorage.getItem('locale') || 'en_US',
});