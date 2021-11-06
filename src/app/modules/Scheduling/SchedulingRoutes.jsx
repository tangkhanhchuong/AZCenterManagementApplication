import React from 'react'

const schedulingRoutes = [
  {
    path: '/courses/list',
    exact: true,
    component: React.lazy(() => import('./Course/Course')),
  },
  {
    path: '/courses/add',
    exact: true,
    component: React.lazy(() => import('./Course/AddCourse')),
  },
  {
    path: '/classes/list',
    exact: true,
    component: React.lazy(() => import('./Class/Class')),
  },
  {
    path: '/classes/add',
    exact: true,
    component: React.lazy(() => import('./Class/AddClass')),
  },
  {
    path: '/rooms/list',
    exact: true,
    component: React.lazy(() => import('./Room/Room')),
  },
  {
    path: '/rooms/add',
    exact: true,
    component: React.lazy(() => import('./Room/AddRoom')),
  },
  {
    path: '/enrollments/list',
    exact: true,
    component: React.lazy(() => import('./Enrollment/Enrollment')),
  },
  {
    path: '/enrollments/first-course',
    exact: true,
    component: React.lazy(() => import('./Enrollment/EnrollmentFirstCourse')),
  },
  {
    path: '/enrollments/next-course',
    exact: true,
    component: React.lazy(() => import('./Enrollment/EnrollNextCourse')),
  }
]

export default schedulingRoutes
