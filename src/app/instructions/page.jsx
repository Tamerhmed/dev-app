import InstructionSection from '@/components/instructions/InstructionSection';
import IntroSection from '@/components/instructions/IntroSection';
import ReadingReport from '@/components/instructions/ReadingReport';
import React from 'react';

export default function InstructionsPage() {
	return (
		<div className='container mx-auto max-w-4xl px-6 lg:px-2 py-8'>
			{/* INTRODUCTION SECTION */}
			<IntroSection />
			{/* INSTRUCTIONS SECTION */}
			<InstructionSection />
			{/* READING REPORT SECTION */}
			<ReadingReport />
		</div>
	);
}
