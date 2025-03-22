import { useState, useEffect } from "react";
import styles from "@/app/home.module.css";
import { motion } from "motion/react";

export default function Modal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    comment: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://crm.bimretail.uz/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitResult({ success: true, message: "Сообщение успешно отправлено!" });
        setFormData({ name: "", phone: "", email: "", country: "", city: "", comment: "" });

        setTimeout(() => {
          onClose(); // Закрыть модалку
          setSubmitResult(null);
        }, 2000);
      } else {
        setSubmitResult({ success: false, message: "Произошла ошибка при отправке." });
      }
    } catch (error) {
      setSubmitResult({ success: false, message: "Ошибка сети, попробуйте позже." });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <motion.div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Связаться с BIM</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.boxinputs}>
            <input type="text" name="name" placeholder="Ф.И.О" value={formData.name} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Номер" value={formData.phone} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Почта" value={formData.email} onChange={handleChange} required />
            <input type="text" name="country" placeholder="Страна" value={formData.country} onChange={handleChange} required />
            <input type="text" name="city" placeholder="Город" value={formData.city} onChange={handleChange} required />
            <textarea name="comment" placeholder="Напишите формат франшизы" value={formData.comment} onChange={handleChange} required></textarea>
            <button className={`${styles.button} ${styles.primaryButton}`} type="submit" disabled={isLoading}>
              {isLoading ? "Отправка..." : "Отправить"}
            </button>

            {submitResult && (
              <div className={`${styles.submitResult} ${submitResult.success ? styles.success : styles.error}`}>
                {submitResult.message}
              </div>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
}