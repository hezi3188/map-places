import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DrawerLayout from './pages/drawerLayout/drawerLayout';
import ErrorPage from './pages/errorPage/errorPage';
import MyPlaces from './pages/myPlaces/myPlaces';
import AddPlace from './pages/addPlace/addPlace';

const router = createBrowserRouter([
	{
		path: '/',
		element: <DrawerLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <MyPlaces />,
			},
			{
				path: 'addPlace',
				element: <AddPlace />,
			},
		],
	},
]);
const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
