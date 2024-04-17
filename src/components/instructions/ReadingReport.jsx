import Image from 'next/image';

export default function ReadingReport() {
  return (
		<div className='flex flex-col justify-center items-start gap-4 py-8 text-lg'>
			<h2 className='text-3xl font-semibold'>Reading your report</h2>
			<p>
				Your report provides a view of your current leadership practice in each
				of the Professional Practices. When viewed through the Professional
				Practices lens, the Profiles describe the leadership actions of each
				focus at increasing proficiency, providing a developmental pathway, or
				Profile, that progresses from left to right.
			</p>
      <Image src='/images/instructions.JPG' alt='report instructions' width={600} height={400} className='self-center'/>
			<p>Your report locates your current practice using three indicators.</p>
			<ul className='list-disc pl-8'>
				<li>
					<em>Proficient</em>
					you have demonstrated all of the leadership actions at this point of
					the Profile.
				</li>
				<li>
					<em>Current focus</em>
					you have demonstrated some, but not all, of the leadership actions at
					this point of the Profile. This is your current developmental focus.
				</li>
				<li>
					<em>Future focus</em>
					your developmental pathway. These are areas for future focus.
				</li>
			</ul>
			<p>
				This approach ensures that whilst you may demonstrate actions described
				by the more proficient statements in the Profiles, you take a
				comprehensive approach to addressing all statements within the Profiles.
			</p>
			<p>
				Detailed results for each Professional Practice includes the following
				elements:
			</p>
			<ul>
				<li>
					<em>Practice description</em>: is taken directly from the Australian
					Professional Standard for Principals and describes what principals are
					expected to know, understand and do to succeed in this area.
				</li>
				<li>
					<em>Area for development</em>: this is your lowest scored leadership
					action, typically drawn from the Current focus chevron.
				</li>
				<li>
					<em>Area of strength</em>: this is your highest scored leadership
					action drawn from the Current focus chevron or highest Proficient
					chevron.
				</li>
				<li>
					<em>Area also relates to</em>: indicates which Leadership Requirement
					and Leadership Emphasis focus relates to your area for development and
					area of strength.
				</li>
			</ul>
			<p>
				A link to the Interactive Leadership Profiles – this will enable you to:
			</p>
			<ul className='list-disc pl-8'>
				<li>
					see your area for development and area of strength within the Profile
				</li>
				<li>view your developmental pathway</li>
				<li>
					access a maintained list of tools and resources to support your
					growth.
				</li>
			</ul>
		</div>
	);
}
