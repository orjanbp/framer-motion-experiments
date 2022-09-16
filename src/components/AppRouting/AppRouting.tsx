import React from 'react';
import { Route, Routes } from 'react-router';
import { RouteList } from '@/utils/types';
import { HomePage } from '../pages/HomePage';
import { FadeOnLoadPage } from '../pages/FadeOnLoadPage';
import { StaggeredLoadPage } from '../pages/StaggeredLoadPage';
import { CollapsiblePanePage } from '../pages/CollapsiblePanePage';
import { FadeOnAddRemovePage } from '../pages/FadeOnAddRemovePage';

// Routes for experiments that animate on page load 
export const onLoadRoutes: RouteList = [
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
];

// Route for experiments that animate on user actions
export const onClickRoutes: RouteList = [
  {
    path: '/collapsiblepane',
    link: 'Collapsible Pane',
    element: <CollapsiblePanePage />
  },
  {
    path: '/fadeonaddremove',
    link: 'Fade on Add / Remove',
    element: <FadeOnAddRemovePage />
  }
];

/**
 * Routing component. Routes in the application propagate from this root file, which
 * is kept here separate from the App just to keep things tidy.
 */
export const AppRouting = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    {onLoadRoutes.map(route => <Route path={route.path} element={route.element} />)}
    {onClickRoutes.map(route => <Route path={route.path} element={route.element} />)}
  </Routes>
);
