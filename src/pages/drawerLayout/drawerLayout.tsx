import { useState } from 'react';
import { Drawer, Footer, Sidebar } from 'flowbite-react';
import { FaBars } from 'react-icons/fa6';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineAddLocationAlt } from 'react-icons/md';
import { drawerTheme } from '../../themes/drawerTheme';
import { Outlet } from 'react-router-dom';

const MENU = 'תפריט';
const MY_PLACES = 'המקומות שלי';
const ADD_PLACE = 'הוסף מיקום';
const TITLE = 'מיקומון';

const DrawerLayout = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => setIsOpen(false);

	return (
		<div className='w-[99%] m-auto h-screen '>
			<Footer className='drop-shadow-md' container>
				<Footer.Brand href='/' src='https://flowbite.com/docs/images/logo.svg' alt='Flowbite Logo' name={TITLE} />
				<FaBars
					className='pr-2 rounded-md border border-transparent text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
					size={40}
					onClick={() => setIsOpen(true)}
				/>
			</Footer>
			<Drawer className='w-52 overflow-hidden' theme={drawerTheme} open={isOpen} onClose={handleClose}>
				<Drawer.Header title={MENU} titleIcon={() => <></>} />
				<Drawer.Items>
					<Sidebar
						aria-label='Sidebar with multi-level dropdown example'
						className=' [&>div]:bg-transparent [&>div]:p-0'>
						<div className='flex h-full flex-col justify-between py-2'>
							<div>
								<Sidebar.Items>
									<Sidebar.ItemGroup>
										<Sidebar.Item href='/myPlaces' icon={CiLocationOn}>
											{MY_PLACES}
										</Sidebar.Item>
										<Sidebar.Item href='/addPlace' icon={MdOutlineAddLocationAlt}>
											{ADD_PLACE}
										</Sidebar.Item>
									</Sidebar.ItemGroup>
								</Sidebar.Items>
							</div>
						</div>
					</Sidebar>
				</Drawer.Items>
			</Drawer>
			<div style={{ height: 'calc(100% - 120px)' }} className='ml-5 mt-3 w-full'>
				<Outlet />
			</div>
		</div>
	);
};

export default DrawerLayout;
