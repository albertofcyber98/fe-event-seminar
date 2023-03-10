import { Navigate, Route, Routes } from "react-router-dom";
import GuardRoute from '../components/GuardRoute'
import GuestOnlyRoute from '../components/GuestOnlyRoute'

import Login from '../pages/signin';
import { HomeRoute } from './HomeRoute'
// import { TalentsRoute } from './TalentsRoute'
import { CategoriesRoute } from './CategoriesRoute'
// import { PaymentsRoute } from './PaymentsRoute'
import SNavbar from '../components/Navbar'

export function AppRoute() {
  return (
    <Routes>
      <Route
        path='login'
        element={
          <GuestOnlyRoute>
            <Login/>
          </GuestOnlyRoute>
        }
      />
      <Route
        path='/'
        element={
          <>
            <SNavbar />
            <GuardRoute/>
          </>
        }
      >
        <Route path='dashboard/*' element={<HomeRoute />} />
        <Route path='categories/*' element={<CategoriesRoute/>} />
        {/* <Route path='dashboard' element={<HomeRoute/>} /> */}
        <Route path='' element={<Navigate to='/dashboard' replace={true} />} />
      </Route>
    </Routes>
  )
}