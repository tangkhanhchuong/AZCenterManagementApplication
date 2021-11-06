import React from 'react'
import { Redirect } from 'react-router-dom'

import dashboardRoutes from './views/dashboard/DashboardRoutes'
import utilitiesRoutes from './views/utilities/UtilitiesRoutes'

import materialRoutes from './views/material-kit/MaterialRoutes'
import chartsRoute from './views/charts/ChartsRoute'
import dragAndDropRoute from './views/Drag&Drop/DragAndDropRoute'

import formsRoutes from './views/forms/FormsRoutes'
import mapRoutes from './views/map/MapRoutes'

import schedulingRoutes from './modules/Scheduling/SchedulingRoutes'
import profilesRoutes from './modules/Profiles/ProfilesRoutes'
import chatRoutes from './views/Chat/ChatRoutes'

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
  ...chatRoutes,
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
