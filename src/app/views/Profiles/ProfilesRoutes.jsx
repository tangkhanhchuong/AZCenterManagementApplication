import React from 'react'

const profilesRoutes = [
  {
    path: '/profiles/admins',
    component: React.lazy(() => import('./Administrator/Administrator')),
  },
  {
    path: '/profiles/instructors',
    component: React.lazy(() => import('./Instructor/Instructor')),
  },
  {
    path: '/profiles/students',
    component: React.lazy(() => import('./Student/Student')),
  }
]

export default profilesRoutes
