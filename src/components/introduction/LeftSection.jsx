import React from 'react';

export default function LeftSection() {
	return (
		<div
			className='lg:px-10 pt-16 lg:pt-0 w-full lg:w-1/2 lg:bg-gradient-to-l from-linear-green-1 to-dark-green
        lg:text-white  flex flex-col lg:items-center lg:justify-center'
		>
			<div className='container mx-auto flex flex-col justify-center items-start gap-6 xl:w-3/4'>
				<h1 className='text-5xl font-bold'>Welcome</h1>
				<h3 className='text-3xl font-semibold'>Leadership Reflection Tool</h3>
				<p className='text-lg tracking-wide'>
					The Leadership Reflection Tool (LRT) allows school leaders and those
					aspiring to the role to reflect on their practice in relation to the
					Leadership Profiles (the Profiles). The Profiles are a set of 80
					statements that describe the actions of effective school leaders as
					they increase in proficiency. Each Profile describes a developmental
					pathway for one of the Professional Practices of the
					<em> Australian Professional Standard for Principals.</em>
				</p>
				<p className='text-lg tracking-wide'>
					The LRT presents a set of questions that are based on the leadership
					actions described in the Profiles.
				</p>
			</div>
		</div>
	);
}
