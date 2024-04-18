'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
	const pathname = usePathname();

	console.log(pathname);
	return (
		<div
			className={
				`${pathname === '/'}`
					? 'flex  h-24 text-white px-2 bg-black'
					: 'flex  h-24 bg-linear-green-1 text-white px-2'
			}
		>
			<div
				className={
					`${pathname === '/'}`
						? 'container mx-auto flex justify-between items-center max-w-4xl    text-white  px-8  bg-black'
						: 'container mx-auto flex justify-between items-center max-w-4xl'
				}
			>
				<div className='logo'>
					<h2 className='text-3xl font-semibold'>quiz</h2>
				</div>
				<div>
					<ul className='flex justify-center items-center gap-8 text-xl'>
						{pathname === '/questions' && (
							<>
								<li className='hover:scale-x-110 transition'>
									<Link
										href={'/'}
										target='_blank'
									>
										Home
									</Link>
								</li>
								<li className='hover:scale-x-110 transition'>
									<Link
										href={'/instructions'}
										target='_blank'
									>
										Instructions
									</Link>
								</li>
							</>
						)}
						{pathname === '/questions' && (
							<>
								<li className='hover:scale-x-110 transition'>
									<Link
										href={'/'}
										target='_blank'
									>
										Home
									</Link>
								</li>
								<li className='hover:scale-x-110 transition'>
									<Link href={'/questions'}>Questions</Link>
								</li>
							</>
						)}
						{pathname === '/' && (
							<>
								<li className='hover:scale-x-110 transition'>
									<Link
										href={'/instructions'}
										target='_blank'
									>
										Instructions
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}
