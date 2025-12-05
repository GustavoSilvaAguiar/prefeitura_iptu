export default [
  {
    path: '',
    name: 'reviews',
    meta: { breadcrumb: false },
    component: () => import('./views/reviewMainView.vue'),
  },
  {
    path: '/detail/:inscricaoMunicipal/:id',
    name: 'reviewDetail',
    meta: { breadcrumb: 'Detalhes' },
    component: () => import('./views/reviewDetailView.vue'),
  },
]
