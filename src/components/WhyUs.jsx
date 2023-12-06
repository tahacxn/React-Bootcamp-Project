import React from 'react';
import { FaCalendarAlt, FaRegSmile, FaLock } from 'react-icons/fa';
import '../styles/WhyUs.css'; // Stil dosyasını içe aktar

const WhyUs = () => {
  return (
  <>
  <div className="why-us-wrapper">
<h1 className='why-us-title'>Neden EventFinder</h1>
    <section className="why-choose-us-container">
      <div className="feature">
        <FaCalendarAlt size={70} className='why-us-icon'/>
        <h2 className='feature-title'>Geniş Etkinlik Yelpazesi</h2>
        <p>EventFinder, geniş bir etkinlik yelpazesi sunarak herkesin ilgisini çekecek farklı kategorilerde etkinlikleri bir araya getirir.</p>
      </div>

      <div className="feature">
        <FaRegSmile size={70} className='why-us-icon'/>
        <h2 className='feature-title'>Kolay Kullanım</h2>
        <p>Kullanıcı dostu arayüzü sayesinde EventFinder, etkinlik arama ve bilet alma süreçlerini hızlı ve kolay bir şekilde gerçekleştirmenize olanak tanır.</p>
      </div>

      <div className="feature">
        <FaLock size={70} className='why-us-icon'/>
        <h2 className='feature-title'>Güvenli ve Hızlı Bilet Alma</h2>
        <p>EventFinder, güvenli ödeme sistemleriyle hızlı bir bilet alma süreci sağlar, böylece kullanıcılar etkinliklerine odaklanabilirler.</p>
      </div>
    </section>
  </div>
  </>
  );
};

export default WhyUs;
