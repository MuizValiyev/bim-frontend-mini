import styles from "./nav.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function nav() {
  const [isModalOpenAdaptive, setIsModalOpenAdaptive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    comment: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const openModalWithImage = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpenAdaptive(!isModalOpenAdaptive);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://crm.bimretail.uz/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitResult({
          success: true,
          message: 'Сообщение успешно отправлено!'
        });
        
        // Очистить форму при успешной отправке
        setFormData({
          name: '',
          phone: '',
          email: '',
          country: '',
          city: '',
          comment: ''
        });
        
        // Закрыть модальное окно через 2 секунды после успешной отправки
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitResult(null);
        }, 2000);
      } else {
        setSubmitResult({
          success: false,
          message: 'Произошла ошибка при отправке.'
        });
      }
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
      setSubmitResult({
        success: false,
        message: 'Произошла ошибка при отправке данных.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header
      className={isModalOpenAdaptive ? styles.headerModalOpen : styles.header}
    >
      <div className={`${styles.headerContainer} ${styles.container}`}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="BIM" />
        </div>
        <nav className={styles.mainNav}>
          <ul>
            <li>
              <a href="#about">Концепция</a>
            </li>
            <li>
              <a href="#concept">Цифры</a>
            </li>
            <li>
              <a href="#franchisee">Поддержка</a>
            </li>
            <li>
              <a href="#bim-not-only">Как стать партнером</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </nav>
        <div className={styles.burgerandbutton}>
          <img onClick={openModal} src="/burger.svg" alt="Бургер" />
          <button
            className={`${styles.button} ${styles.primaryButton}`}
            onClick={openModalWithImage}
          >
            Связаться с нами
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>Связаться с BIM</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.boxinputs}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Ф.И.О" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Номер" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Почта" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="text" 
                  name="country" 
                  placeholder="Страна" 
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="text" 
                  name="city" 
                  placeholder="Город" 
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="comment"
                  placeholder="Напишите формат франшизы"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                ></textarea>
                <button 
                  className={`${styles.button} ${styles.primaryButton}`} 
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Отправка...' : 'Отправить'}
                </button>
                
                {submitResult && (
                  <div className={styles.submitResult + (submitResult.success ? ' ' + styles.success : ' ' + styles.error)}>
                    {submitResult.message}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      {isModalOpenAdaptive && (
        <div className={styles.boxModalAdaptive}>
          <div className={styles.boxrowbtns}>
            <a href="#about" className={styles.onebtn}>
              О нас
            </a>
            <a href="#franchisee" className={styles.onebtn}>
              Франшиза
            </a>
            <a href="#concept" className={styles.onebtn}>
              Геонрафия
            </a>
            <a href="#bim-not-only" className={styles.onebtn}>
              Условия
            </a>
            <a href="#contacts" className={styles.onebtn}>
              Этапы
            </a>
            <a href="#contacts" className={styles.onebtn}>
              Контакты
            </a>
            <button
              className={`${styles.button} ${styles.primaryButton}`}
              onClick={openModalWithImage}
            >
              Связаться с нами
            </button>
          </div>
        </div>
      )}
    </header>
  );
}