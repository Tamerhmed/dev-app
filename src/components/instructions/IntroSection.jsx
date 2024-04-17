import React from 'react'

export default function IntroSection() {
  return (
		<div className='flex flex-col gap-4 justify-center items-start text-lg py-8'>
			<h2 className='text-3xl font-semibold'>Introduction</h2>
			<p>
				The Leadership Reflection Tool (LRT) allows school leaders and those
				aspiring to the role to reflect on their practice in relation to the
				Leadership Profiles (the Profiles). The Profiles are a set of 80
				statements that describe the actions of effective school leaders as they
				increase in proficiency. Each Profile describes a developmental pathway
				for one of the Professional Practices of the{' '}
				<em>Australian Professional Standard for Principals.</em>
			</p>
			<p>
				The LRT presents a set of questions that are based on the leadership
				actions described in the Profiles.
			</p>
			<p>
				On completion of the questionnaire, your report will locate your
				leadership practice in each Profile, and identify specific strengths and
				areas for further development.
			</p>
			<p>
				You can use your report, together with the Interactive Leadership
				Profiles, to view your developmental pathway and access targeted
				leadership tools and resources to assist your professional growth.
			</p>
		</div>
	);
}
