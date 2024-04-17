import { FaUserGroup } from 'react-icons/fa6';
import { TbTimeDuration15 } from 'react-icons/tb';
import Link from 'next/link';

export default function RightSection() {
	return (
		<div className='w-full lg:w-1/2 flex lg:flex-col justify-center items-center'>
			<div className='container mx-auto flex flex-col justify-center items-start gap-4 xl:w-3/4'>
				<h3 className='text-3xl font-semibold'>Instructions</h3>
				<p className='text-lg'>
					The LRT contains 80 questions and will take approximately 15 minutes
					to complete. An indicator at the top of the page will show how many
					questions you have completed. You must respond to every question to
					view your report.
				</p>
				<div className='my-4 flex justify-start items-center w-full gap-20'>
					{/* column 1 */}
					<div className='flex flex-col justify-center gap-2'>
						<FaUserGroup
							color='#B5BD02'
							size={30}
						/>
						<div className='divide-y divide-[#B5BD02] flex flex-col justify-center gap-2'>
							<p>Recommended for</p>
							<p className='font-semibold py-2'>School Leaders</p>
						</div>
					</div>
					{/* column 2 */}
					<div className='flex flex-col justify-center gap-2'>
						<TbTimeDuration15
							color='#B5BD02'
							size={30}
						/>
						<div className='divide-y divide-[#B5BD02] flex flex-col justify-center gap-2'>
							<p>Suggested duration</p>
							<p className='font-semibold py-2'>15 Minutes</p>
						</div>
					</div>
				</div>
				<Link
					href={'/questions'}
					className='border py-3 px-6 bg-gray-900 text-white text-lg mt-4'
				>
					Get started
				</Link>
			</div>
		</div>
	);
}
