import React from 'react'

const schedulingRoutes = [
  {
    path: '/courses/list',
    component: React.lazy(() => import('./Courses/CoursesList')),
  },
  {
    path: '/courses/lessons',
    component: React.lazy(() => import('./Courses/Lessons')),
  },
  {
    path: '/courses/bookings',
    component: React.lazy(() => import('./Courses/Bookings')),
  },
  {
    path: '/courses/enrollments',
    component: React.lazy(() => import('./Courses/Enrollments')),
  }
]

export default schedulingRoutes
