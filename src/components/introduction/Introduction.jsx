import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

export default function Introduction() {
	return (
		<div className='w-full'>
			<div className='mx-auto flex flex-col lg:flex-row gap-8 lg:h-[calc(100vh-96px)]'>
				<LeftSection />
				<RightSection />
			</div>
		</div>
	);
}
