import React, { lazy, Suspense } from 'react';

// Lazy load componentes pesados
export const LazyProjetos = lazy(() => import('../pages/Projetos'));
export const LazyContato = lazy(() => import('../pages/Contato'));

// Componente de fallback enquanto carrega
export function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}

// HOC para envolver componentes com Suspense
export function withLazyLoading(Component) {
  return (props) => (
    <Suspense fallback={<LoadingFallback />}>
      <Component {...props} />
    </Suspense>
  );
}
