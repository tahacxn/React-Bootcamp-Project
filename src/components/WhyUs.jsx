import React from 'react';
import { FaCalendarAlt, FaRegSmile, FaLock } from 'react-icons/fa';
import '../styles/WhyUs.css'; // Stil dosyasını içe aktar

const WhyUs = () => {
  return (
    <section className="why-choose-us-container">
      <div className="feature">
        <FaCalendarAlt size={40} />
        <h2>Geniş Etkinlik Yelpazesi:</h2>
        <p>EventFinder, geniş bir etkinlik yelpazesi sunarak herkesin ilgisini çekecek farklı kategorilerde etkinlikleri bir araya getirir.</p>
      </div>

      <div className="feature">
        <FaRegSmile size={40} />
        <h2>Kolay Kullanım:</h2>
        <p>Kullanıcı dostu arayüzü sayesinde EventFinder, etkinlik arama ve bilet alma süreçlerini hızlı ve kolay bir şekilde gerçekleştirmenize olanak tanır.</p>
      </div>

      <div className="feature">
        <FaLock size={40} />
        <h2>Güvenli ve Hızlı Bilet Alma:</h2>
        <p>EventFinder, güvenli ödeme sistemleriyle hızlı bir bilet alma süreci sağlar, böylece kullanıcılar etkinliklerine odaklanabilirler.</p>
      </div>
    </section>
  );
};

export default WhyUs;
