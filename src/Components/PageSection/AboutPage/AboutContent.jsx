import { Para } from '../../Typography.jsx';

const AboutContent = () => {
	return (
		<section className="p-4 rounded-2xl border border-gray-300 bg-white shadow-lg">
			<h4 className="text-xl font-medium tracking-wide text-gray-500 mb-4">Introduction</h4>
			<h2 className="text-5xl font-semibold text-dark1  mb-3">The Al-Kasib Group of Engineering Services</h2>
			<div className="flex flex-col gap-4">
				<Para><>The name <span className='font-bold'>AGES</span> is an abbreviation for <span className='font-bold'>“Al-Kasib Group of Engineering Services”.</span> The term Al-Kasib is an extract from the Arabic quote <span className='font-extrabold text-black'>الْكاسِبُ حَبِيبُ اللهِ </span>— which translates to “The one who strives to earn (through fair means) is the beloved of Allah (SWT)”. This quote has a strong basis in the way AGES Consultants conducts its business and has been a strong driving force in the firm’s ventures.</></Para>
				<Para>Since its inception, AGES has in a very short span of time propelled itself to the forefront of the consulting landscape, earning a distinct reputation for its pioneering initiatives across various engineering disciplines. With a dynamic management ethos guiding its operations, the firm has managed to consistently push the envelope of engineering excellence.</Para>
				<Para>This ethos not only fuels AGES’ exceptional growth trajectory but also permeates throughout its dedicated team of seasoned and young professionals, fostering an environment where creativity and expertise intersect seamlessly.</Para>
			</div>
		</section>
	)
}

export default AboutContent
