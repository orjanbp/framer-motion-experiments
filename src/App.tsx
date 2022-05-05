import React from 'react';
import { AppRouting } from '@/components/AppRouting/AppRouting';
import { AppBackground } from '@/components/layout/AppBackground';
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
          <AppRouting />
        </AppBackground >
      </LayoutArea>
    </AppLayout>
  );
}

export default App;
