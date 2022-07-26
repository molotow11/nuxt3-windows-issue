import { ref } from '#imports';
import { Page } from '~/interfaces';

const primary = `bg-lab-yellow border-2 border-lab-yellow hover:bg-white active:bg-lab-yellow-dark active:text-white`;
const secondary = `bg-lab-gray-1 border-2 border-lab-yellow hover:bg-lab-yellow active:bg-lab-yellow-dark active:text-white`;

const isMenuOpen = ref<boolean>(false);

const handleMenu = (): boolean => (isMenuOpen.value = !isMenuOpen.value);

const closeMenu = (): boolean => (isMenuOpen.value = false);

const pages = ref<Page[]>([
  {
    name: 'Home',
    path: '/',
    translationTag: 'homeLink'
  },
  {
    name: 'Team',
    path: '/team',
    translationTag: 'teamLink'
  }
]);
export { isMenuOpen, handleMenu, closeMenu, pages, primary, secondary };
