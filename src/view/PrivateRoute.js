import React, { useEffect, useState } from 'react'
import { Route, Redirect, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getInfo , clearLogin} from '../reduxapp/actions'
import Layout from 'src/components/Layout'
function PrivateRoute({ component: Component, ...rest }) {



  return (
    <Route
      {...rest}
      render={(props) =>
          (isAuth) ? (
              <Layout>
                  <Component {...props} />
              </Layout>
        ) : (
               <Redirect to='/login' />

        )
      }
    />
  )
}

export default PrivateRoute
