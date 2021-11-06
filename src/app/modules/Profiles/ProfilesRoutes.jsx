import React from 'react'

const profilesRoutes = [
  {
    path: '/admins/list',
    exact: true,
    component: React.lazy(() => import('./Administrator/Administrator')),
  },
  {
    path: '/instructors/list',
    exact: true,
    component: React.lazy(() => import('./Instructor/Instructor')),
  },
  {
    path: '/instructors/add',
    exact: true,
    component: React.lazy(() => import('./Instructor/AddInstructor')),
  },
  {
    path: '/instructors/edit/:id',
    exact: true,
    component: React.lazy(() => import('./Instructor/AddInstructor')),
  },
  {
    path: '/students/list',
    exact: true,
    component: React.lazy(() => import('./Student/Student')),
  },
  {
    path: '/students/add',
    exact: true,
    component: React.lazy(() => import('./Student/AddStudent/AddStudent')),
  }
]

export default profilesRoutes
