import { lazy } from 'solid-js';
import { TNavigation } from './navigation-bar-store';

const Docs = lazy(() => import('../Pages/Docs/index'));
const Home = lazy(() => import('../Pages/Home/index'));
const Playground = lazy(() => import('../Pages/Playground/index'));
const NotFound = lazy(()=> import("../Pages/NotFound/index"))

export const routes: TNavigation[] = [
  {
    label: 'Home',
    path: '/',
    component: Home,
  },
  {
    label: 'Documentation',
    path: '/docs',
    component: Docs,
  },
  {
    label: 'API Playground',
    path: '/playground',
    component: Playground,
  },
];

export const docs_routes: TNavigation[]=[{
  label: 'Quick Start',
  path: '/docs',
  component: NotFound,
},
  {
    label: 'App Registration',
    path: '/docs/app-registration',
    component: NotFound,
  },
  {
    label: 'API Guide',
    path: '/docs/api-guide',
    component: NotFound,
  },
  {
    label: 'FAQ',
    path: '/docs/faq',
    component: NotFound,
  },
  {
    label: 'JSON Schemas',
    path: '/docs/json-schemas',
    component: NotFound,
  },
  {
    label: 'Bug Bounty',
    path: '/docs/bug-bounty',
    component: NotFound,
  }]
