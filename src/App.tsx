import React from 'react';
import { AppRouting } from '@/components/AppRouting/AppRouting';
import { AppBackground } from '@/components/layout/AppBackground';
import { Header } from './components/shared/Header/Header';
import { Sidebar } from './components/shared/Sidebar/Sidebar';
import { AppLayout, LayoutArea } from './components/layout/AppLayout';

function App() {
  return (
    <AppLayout>
      <LayoutArea area="sidebar">
        <Sidebar />
      </LayoutArea>
      <LayoutArea area="content">
        <AppBackground>
          <Header />
          <AppRouting />
        </AppBackground >
      </LayoutArea>
    </AppLayout>
  );
}

export default App;
