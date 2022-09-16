import React from 'react';
import { Route, Routes } from 'react-router';
import { RouteList } from '@/utils/types';
import { HomePage } from '../pages/HomePage';
import { FadeOnLoadPage } from '../pages/FadeOnLoadPage';
import { StaggeredLoadPage } from '../pages/StaggeredLoadPage';
import { CollapsiblePanePage } from '../pages/CollapsiblePanePage';

export const routeList: RouteList = [
  {
    path: '/fadeonload',
    link: 'Fade on Load',
    element: <FadeOnLoadPage />
  },
  {
    path: '/staggeredload',
    link: 'Staggered Load',
    element: <StaggeredLoadPage />
  },
  {
    path: '/collapsiblepane',
    link: 'Collapsible Pane',
    element: <CollapsiblePanePage />
  }
];

/**
 * Routing component. Routes in the application propagate from this root file, which
 * is kept here separate from the App just to keep things tidy.
 */
export const AppRouting = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    {routeList.map(route => (
      <Route path={route.path} element={route.element} />
    ))}
  </Routes>
);
