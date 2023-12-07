export default function PaymentCard({ formData }) {
	return (
		<aside className='cardDeco'>
			<div className='cardFront'>
				<span>{formData.number || "0000 0000 0000 0000"}</span>
				<div>
					<span>{formData.name || "<Taha Can>"}</span>
					<span>{formData.mm || "00"}/{formData.yy || "00"}</span>
				</div>
			</div>

			<div className='cardBack'><span>{formData.cvc || "000"}</span></div>
		</aside>
	)
}