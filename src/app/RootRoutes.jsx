import React from 'react'
import { Redirect } from 'react-router-dom'

import dashboardRoutes from './views/dashboard/DashboardRoutes'
import utilitiesRoutes from './views/utilities/UtilitiesRoutes'

import materialRoutes from './views/material-kit/MaterialRoutes'
import chartsRoute from './views/charts/ChartsRoute'
import dragAndDropRoute from './views/Drag&Drop/DragAndDropRoute'

import formsRoutes from './views/forms/FormsRoutes'
import mapRoutes from './views/map/MapRoutes'

import studentRoutes from './views/students/StudentRoutes'
import schedulingRoutes from './views/Scheduling/SchedulingRoutes'
import profilesRoutes from './views/Profiles/ProfilesRoutes'


const redirectRoute = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard/default" />,
  }
]

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />,
  }
]

const routes = [
  ...dashboardRoutes,
  ...materialRoutes,
  ...utilitiesRoutes,
  ...studentRoutes,
  ...schedulingRoutes,
  ...profilesRoutes,
  ...chartsRoute,
  ...dragAndDropRoute,
  ...formsRoutes,
  ...mapRoutes,
  ...redirectRoute,
  ...errorRoute
]

export default routes
