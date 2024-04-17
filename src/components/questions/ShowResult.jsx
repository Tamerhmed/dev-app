import React from 'react';

export default function ShowResult({ score, reset }) {
	return (
		<div>
			<h2>Assessment Result</h2>
			<h3>Your Score: {((score / 5) * 100).toFixed(0)}%</h3>
			<button onClick={() => reset()} 
            className='py-2 px-4 border-2 bg-black text-white rounded-lg text-xl'>
                Start Again
            </button>
		</div>
	);
}
