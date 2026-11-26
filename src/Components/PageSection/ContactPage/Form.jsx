import { useState } from "react"
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiSettings, FiBriefcase, FiSend, FiShield, } from "react-icons/fi"
import formHeader from '../../../assets/Banners/ContactFrom.png'
import {Btn} from '../../Typography'

const Input = ({ icon: Icon, ...props }) => (
	<div className="relative">
		<Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
		<input {...props} className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400" />
	</div>
)

const Label = ({children}) => (
	<label className="text-sm font-bold tracking-wider text-dark1">
		{children}
	</label>
)

const inqueryForm = () => {
	const [sent, setSent] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault()
		setSent(true)
	}
	if (sent) {
		return (
			<div>
				<FiSend className="text-yellow-400 text-5xl mx-auto mb-4" />
				<h3 className="text-xl font-bold text-dark">Inquiry Sent!</h3>
				<p className="text-gray-500 mt-2">We'll get back to you within 24 hours.</p>
			</div>
		)
	}
}






const Form = () => {
	return (
		<div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
			<div className="relative">
				<div className="absolute inset-0 z-0">
					<img src={formHeader} alt="" className="w-full h-full object-cover" />
				</div>
				<div className="absolute inset-0 z-10 bg-black/40"></div>
				<div className="relative z-20 px-6 py-3">
					<h3 className="text-3xl font-bold tracking-wide text-light mb-2">Send an <span className="text-txt1">Inquiry</span></h3>
					<p className="text-xs font-bold tracking-wider text-light ">Have a project in mind? Let's discuss it!</p>
				</div>
			</div>



			<form className="p-6 flex flex-col gap-5">
				<div className="grid md:grid-cols-2 gap-5">
					<div>
						<Label>Full Name *</Label>
						<Input icon={FiUser} type="text" placeholder="e.g. Eng ABC Khan" required />
					</div>
					<div>
						<Label>Organization</Label>
						<Input icon={FiBriefcase} type="text" placeholder="Department / Company" />
					</div>
					<div>
						<Label>Email *</Label>
						<Input icon={FiMail} type="email" placeholder="you@example.com" required />
					</div>
					<div>
						<Label>Phone</Label>
						<Input icon={FiPhone} type="tel" placeholder="+92 3XX XXXXXXX" />
					</div>
				</div>

				<div>
					<Label>Inquery Type</Label>
					<div className="relative">
						<FiSettings className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
						<select defaultValue="General Inquiry"
							className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2.5 text-sm bg-white focus:outline-none focus:border-yellow-400 appearance-none">
							<option>General Inquiry</option>
							<option>Project Discussion</option>
							<option>Request a Quote</option>
							<option>Other</option>
						</select>
					</div>
				</div>


				<div>
					<Label>Message *</Label>
					<div className="relative">
						<FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
						<textarea
							rows="4"
							placeholder="Briefly describe your project or question..."
							className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 resize-none"
						/>
					</div>
				</div>


				<div className="grid md:grid-cols-2 items-center gap-5 p-2.5">
					<div className="">
						<button className="px-5 py-2.5 flex items-center gap-2 text-md font-medium rounded-full bg-txt1 border border-transparent cursor-pointer hover:bg-transparent hover:border-txt1 hover:shadow-md shadow-dark1/40 hover:-translate-y-1 transition duration-300">
							<FiSend /> Submit Inquiry
						</button>
					</div>
					<div className="flex gap-2 items-center h-full pl-2.5 border-l-3 border-gray-400">
						<FiShield className="text-5xl text-gray-400" />
						<p className="text-sm font-semibold tracking-wide text-gray-400">
							Your details are used solely to respond to your inquiry.
						</p>
					</div>
				</div>

				
			</form>
		</div>
	)
}

export default Form