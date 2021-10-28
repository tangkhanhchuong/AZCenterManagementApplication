import React from 'react'

import { Breadcrumb } from 'app/components'

const Bookings = () => {
  return (
    <div>
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: 'Course', path: '/courses/list' },
              { name: 'Bookings' },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default Bookings
