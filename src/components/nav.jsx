import styles from "./nav.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import Modal from "@/components/modal";
import { motion } from "motion/react";
import Link from "next/link";
import LanguageSwitcher from "@/components/language";
import { useLanguage } from "@/context/languageContext";

export default function nav() {
  const [isModalOpenAdaptive, setIsModalOpenAdaptive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { translate } = useLanguage();

  const openModal = () => {
    setIsModalOpenAdaptive(!isModalOpenAdaptive);
  };

  return (
    <header className={styles.header}>
      <motion.div
        initial={{ borderRadius: 20 }}
        animate={
          isModalOpenAdaptive
            ? {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }: { borderRadius: 20 }}
        transition={{ duration: 0.2 }}
        className={`${styles.headerContainer} ${styles.container}`}
      >
        <Link href="/" className={styles.logo}>
          <img src="/logo.svg" alt="BIM" />
        </Link>
        <nav className={styles.mainNav}>
          <ul>
            <li>
              <a href="#concept">{translate("concept")}</a>
            </li>
            <li>
              <a href="#numbers">{translate("numbers")}</a>
            </li>
            <li>
              <a href="#contacts">{translate("support")}</a>
            </li>
            <li>
              <a href="#partners">{translate("partners")}</a>
            </li>
            <li>
              <a href="#contacts">{translate("contacts")}</a>
            </li>
          </ul>
        </nav>
        <div className={styles.burgerandbutton}>
          <motion.div animate={isModalOpenAdaptive ? {rotate:180} : {rotate:0}} transition={{transition:"easy"}} className={styles.burgerimg}>
            <img onClick={openModal} src={isModalOpenAdaptive ? "/closeburger.svg" : "/burger.svg"} alt="Бургер" />
          </motion.div>
          <LanguageSwitcher/>
          <button
            className={`${styles.button} ${styles.primaryButton}`}
            onClick={() => setIsModalOpen(true)}>
            {translate("request")}
          </button>
        </div>
      </motion.div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <motion.div
        initial={{ height: 0, opacity: 0, pointerEvents: "none" }}
        animate={isModalOpenAdaptive ? { height: "auto", opacity: 1, pointerEvents: "auto" } : { height: 0, opacity: 0, pointerEvents: "none" }}
        className={styles.boxModalAdaptive}>
        <motion.div
          className={styles.boxrowbtns}
          initial="hidden"
          animate={isModalOpenAdaptive ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {opacity: 1,transition: { staggerChildren: 0.09 }}}}>
          {[
            { text: translate("concept"), href: "#concept" },
            { text: translate("numbers"), href: "#numbers" },
            { text: translate("support"), href: "#contacts" },
            { text: translate("partners"), href: "#partners" },
            { text: translate("contacts"), href: "#contacts" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className={styles.onebtn}
              variants={{hidden: { opacity: 0, y: 10 },visible: { opacity: 1, y: 0 },}}>
              {item.text}
            </motion.a>
          ))}

          <motion.button
            className={`${styles.button} ${styles.primaryButton}`}
            onClick={() => setIsModalOpen(true)}
            variants={{hidden: { opacity: 0, y: 10 },visible: { opacity: 1, y: 0 },}}>
            {translate("request")}
          </motion.button>
        </motion.div>
      </motion.div>
    </header>
  );
}
