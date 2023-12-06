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
			<p>İşleminiz onaylanmıştır</p>
			<p>İyi eğlenceler!</p>
			<Link to="/">
			<button className='btn-primary' onClick={resetForm}>Ana Sayfaya Dön</button>
			</Link>
		</div>
	)
}