'use client';

import { useEffect, useState } from 'react';
// import { quiz } from '@/data';
import { quiz } from '@/utils/short-list';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import ShowResult from './ShowResult';

const initState = {
	userAnswers: [],
	score: 0,
	correctAnswer: 0,
};

// const getUserAnswers = () => {
// 	const answers = localStorage.getItem('me');
// 	return answers ? JSON.parse(answers) : initState;
// };

export default function Questions() {
	const [activeQuestion, setActiveQuestion] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState('');
	const [checked, setChecked] = useState(false);
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
	const [showResult, setShowResult] = useState(false);
	// const [result, setResult] = useState({
	// 	score: 0,
	// 	correctAnswer: 0,
	// });
	const [userAnswers, setUserAnswers] = useState(initState);
	const [currentAnswer, setCurrentAnswer] = useState(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	

	const { questions } = quiz;
	
	const { question, answers, correctAnswer } = questions[activeQuestion];

	if (loading) {
		const userAnsweredQuestions = userAnswers?.userAnswers?.length;
		if (userAnsweredQuestions) {
			setActiveQuestion(userAnsweredQuestions);
		}
		setLoading(false);
	}

	

	const onSelectedAnswer = (answer, idx) => {
		setChecked(true);
		setSelectedAnswerIndex(idx);

		setCurrentAnswer(answer);

		console.log(answer, idx);
		if (answer === correctAnswer) {
			setSelectedAnswer(true);
			console.log('true');
		} else {
			setSelectedAnswer(false);
			console.log(false);
		}
	};

	const nextQuestion = () => {
		setSelectedAnswerIndex(null);
		// setResult((prev) =>
		// 	selectedAnswer
		// 		? {
		// 				...prev,
		// 				score: prev.score + 5,
		// 				correctAnswer: prev.correctAnswer + 1,
		// 		  }
		// 		: {
		// 				...prev,
		// 		  }
		// );

		setUserAnswers((prev) =>
			selectedAnswer
				? {
						...prev,
						userAnswers: [...prev.userAnswers, currentAnswer],
						score: prev.score + 1,
						correctAnswer: prev.correctAnswer + 1,
				  }
				: {
						...prev,
						userAnswers: [...prev.userAnswers, currentAnswer],
				  }
		);

		if (activeQuestion !== questions.length - 1) {
			setActiveQuestion((prev) => prev + 1);
		} else {
			setActiveQuestion(0);
			setShowResult(true);
		}

		if (currentAnswer !== null) {
			// setUserAnswers((prev) => [...prev, currentAnswer]);
			// setAnswer(currentAnswer);
			// setUserAnswers((prev) => ({
			// 	...prev,
			// 	userAnswers: [...prev.userAnswers, currentAnswer],
			// 	score: prev.score + 5,
			// 	correctAnswer: prev.correctAnswer + 1,
			// }));
		}
		setChecked(false);
	};

	useEffect(() => {
		localStorage.setItem('me', JSON.stringify(userAnswers));
	}, [userAnswers]);

	useEffect(() => {
		
			const answers = localStorage.getItem('me');
			setUserAnswers (answers ? JSON.parse(answers) : initState);

	}, []);


	const reset = ()=> {
		setUserAnswers(initState);
		setShowResult(false);
		// router.push('/questions')
	}
	const clear = ()=> {
		setUserAnswers(initState);
		setSelectedAnswerIndex(null);
		setActiveQuestion(0);
		router.refresh();
	}

	console.log(userAnswers);
	return (
		<div className='mx-auto flex justify-center items-start gap-8 max-w-4xl pt-14'>
			<div className='container mx-auto flex flex-col justify-center items-start gap-8'>
				{!showResult ? (
					<>
						<h2 className='text-5xl font-semibold mb-8'>Questions page</h2>

						<div>
							<h3 className='text-xl bg-light-green py-3 px-6 text-white rounded-lg'>
								Question: {activeQuestion + 1} <span>/ {questions.length}</span>
							</h3>
						</div>

						<div className='flex flex-col justify-center items-start gap-6 mt-8'>
							<h2 className='text-3xl font-semibold mb-4'>
								{questions[activeQuestion].question}
							</h2>
							<ul className='question-list flex flex-wrap justify-center items-start gap-4 text-lg md:text-xl'>
								{answers.map((answer, idx) => (
									<li
										key={idx}
										onClick={() => onSelectedAnswer(answer, idx)}
										className={
											selectedAnswerIndex === idx
												? 'bg-light-green text-white'
												: 'hover:bg-light-lime  hover:text-white transition'
										}
									>
										{answer}
									</li>
								))}
							</ul>
							<div className='flex self-end gap-10'>

							<button
								onClick={()=> clear()}
								className='border-2 bg-gray-800 text-white text-xl py-2 px-10 self-start mt-8'
								>
								reset
							</button>
							{checked ? (
								<button
								className='border-2 bg-gray-800 text-white text-xl py-2 px-10 self-end mt-8'
								onClick={nextQuestion}
								>
									{activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
								</button>
							) : (
								<button
								disabled
								className='border-2 bg-gray-800 text-white text-xl py-2 px-10 self-end mt-8'
								onClick={nextQuestion}
								>
									{activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
								</button>
							)}
							</div>
							{
								userAnswers && (
									// userAnswers.userAnswers?.map((userAnswer, index) => (
									<div
										// key={index}
										className='flex flex-col justify-center items-start  text-lg font-semibold'
									>
										<div className='flex justify-center items-start'>
											{/* <span className='p-2'>Question Number: {index + 1}</span>
										<span className='p-2'>Answer: {userAnswer}</span> */}
											<p className='p-2'>
												{' '}
												Total Score:{' '}
												{((userAnswers?.score / 5) * 100).toFixed(0)}%
											</p>
										</div>
									</div>
								)
								// ))
							}
						</div>
					</>
				) : (
					<div>
						<h1>result</h1>
						{/* <button onClick={reset}>reset</button> */}
						<ShowResult
							score={userAnswers.score}
							reset={reset}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
