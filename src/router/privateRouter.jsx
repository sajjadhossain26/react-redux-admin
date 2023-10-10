// create private router

import PageLayout from "../components/PageLayout/PageLayout";
import Dashborad from "../pages/dashboard/Dashborad";
import User from "../pages/user/User";

const privateRouter = [
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Dashborad />,
      },
      {
        path: "/users",
        element: <User />,
      },
    ],
  },
];

// export router
export default privateRouter;
