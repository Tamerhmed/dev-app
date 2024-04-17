import React from 'react'

export default function InstructionSection() {
  return (
		<div className='flex flex-col justify-center items-start gap-4 text-lg'>
			<h2 className='text-3xl font-semibold'>Instructions</h2>
			<p>
				The LRT contains 80 questions and will take approximately 15 minutes to
				complete. An indicator at the top of the page will show how many
				questions you have completed. You must respond to every question to view
				your report.
			</p>
			<p>
				Read each question carefully and select the answer that best reflects
				you, using the scale below.
			</p>
			<ul className='list-disc pl-8'>
				<li>
					Very true – this item describes a behaviour or activity always
					demonstrated.
				</li>
				<li>
					True – this item describes a behaviour or activity regularly
					demonstrated.
				</li>
				<li>
					Somewhat true – this item describes an activity or behaviour
					demonstrated sometimes but not regularly.
				</li>
				<li>
					Somewhat untrue – this item describes an activity or behaviour
					demonstrated on rare occasions but on the whole is unusual.
				</li>
				<li>
					Untrue – this item does not describe an activity or behaviour
					demonstrated.
				</li>
				<li>Not applicable – this item isn’t relevant to your current role.</li>
			</ul>
			<p>
				Once you have completed all questions, click ‘View my report’ in the
				navigation bar to view your report.
			</p>
			<p>
				As the LRT is saved to your computer, you can save the document at any
				time and complete it when convenient.
			</p>
			<p>
				Click &apos;Go to questions&apos; in the navigation bar to commence the
				LRT.
			</p>
		</div>
	);
}
