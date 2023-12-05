import iconComplete from "../images/Payment Images/icon-complete.svg"
import "../styles/PaymentThanks.css"
import { Link } from "react-router-dom"


export default function PaymentThanks ({ setFormData, animateSlider }) {
	const resetForm = () => {
		setFormData({ name: null, number: null, mm: null, yy: null, cvc: null })
		animateSlider(false)
	}

	return (
		<div className='cardThanks'>
			<img src={iconComplete} alt='' />
			<p>Thank you!</p>
			<p>For your purchase</p>
			<Link to="/">
			<button className='btn-primary' onClick={resetForm}>Go Back</button>
			</Link>
		</div>
	)
}