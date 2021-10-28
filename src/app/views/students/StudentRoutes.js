import React from 'react'

const studentRoutes = [
  {
    path: '/students/view',
    component: React.lazy(() => import('./StudentList')),
  },
  {
    path: '/students/add',
    component: React.lazy(() => import('./AddStudent')),
  }
]

export default studentRoutes
