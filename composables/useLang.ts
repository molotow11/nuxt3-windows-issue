import { Locale } from '~/interfaces';
import {
  useI18n,
  useLocalePath,
  useSwitchLocalePath,
  useLocaleHead
} from '#i18n';

// eslint-disable-next-line import/prefer-default-export
export const useLang = () => {
  const { t, locale, locales } = useI18n();
  const localePath = useLocalePath();
  const switchLocalePath = useSwitchLocalePath();
  const i18nHead = useLocaleHead({ addSeoAttributes: true });

  return {
    t,
    localePath,
    switchLocalePath,
    i18nHead,
    locales,
    locale: computed(() => {
      const currentLocale = locale.value;
      return locales.value.find((i: Locale) => i.code === currentLocale);
    })
  };
};
