import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<section className='bg-white dark:bg-gray-900'>
			<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
				<div className='mx-auto max-w-screen-sm text-center'>
					<h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500'>
						404
					</h1>
					<p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white'>
						משהו התפספס
					</p>
					<p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
						מצטערים... אנחנו לא יכולים למצוא את הדף
					</p>
					<a
						href='/'
						className='inline-flex text-black bg-primary-600 ring-4 hover:bg-primary-800 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-primary-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4'>
						חזור לדף הבית
					</a>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
