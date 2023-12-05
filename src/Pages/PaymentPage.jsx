import { useState } from 'react';
import PaymentCard from '../components/PaymentCard';
import PaymentThanks from '../components/PaymentThanks';
import PaymentForm from '../components/PaymentForm';
import '../styles/PaymentPage.css';

function PaymentPage() {
  const [formData, setFormData] = useState({ name: null, number: null, mm: null, yy: null, cvc: null });
  const [validate, setValidate] = useState(false);

  const animateSlider = (validate) => {
    const axis = window.matchMedia('(max-width: 750px)').matches ? 'Y' : 'X';
    
    // Elementi seç
    const cardOverflowDiv = document.querySelector('.cardOverflow > div');
  
    // Kontrol et
    if (cardOverflowDiv) {
      // Element bulundu, güvenle kullanabilirsiniz
      cardOverflowDiv.style.transform = `translate${axis}(50${axis === 'Y' ? 'vh' : 'vw'})`;
  
      document.body.classList.add('body-slider');
  
      setTimeout(() => {
        setValidate(validate);
        document.body.classList.remove('body-slider');
        cardOverflowDiv.style.transform = 'translate(0)';
      }, 500);
    } else {
      // Element bulunamadı, hata mesajı veya diğer işlemleri yapabilirsiniz
      console.error('Hata: .cardOverflow > div elemanı bulunamadı.');
    }
  };
  

  return (
    <>
    <div className="body">

        <PaymentCard formData={formData} />
        <main className='cardOverflow'>
          <div>
            {validate ? (
              <PaymentThanks setFormData={setFormData} animateSlider={animateSlider} />
              ) : (
                <PaymentForm setFormData={setFormData} animateSlider={animateSlider} formData={formData} />
                )}
          </div>
        </main>
      </div>
    </>
  );
}

export default PaymentPage;
