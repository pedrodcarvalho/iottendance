import { lazy } from 'react';

import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const AddStudent = Loadable(lazy(() => import('pages/main-pages/AddStudent')));
const EditStudent = Loadable(lazy(() => import('pages/main-pages/EditStudent')));
const AddClass = Loadable(lazy(() => import('pages/main-pages/AddClass')));
const AttendanceCheck = Loadable(lazy(() => import('pages/main-pages/AttendanceCheck')));
const StudentPresence = Loadable(lazy(() => import('pages/main-pages/StudentPresence')));
const ErrorPage = Loadable(lazy(() => import('pages/error-page/ErrorPage')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'add-student',
      element: <AddStudent />
    },
    {
      path: 'edit-student',
      element: <EditStudent />
    },
    {
      path: 'add-class',
      element: <AddClass />
    },
    {
      path: 'attendance-check',
      element: <AttendanceCheck />
    },
    {
      path: 'student-presence',
      element: <StudentPresence />
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ]
};

export default MainRoutes;
