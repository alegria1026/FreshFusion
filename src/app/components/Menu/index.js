"use client"

import { useState } from "react"
import styles from "./Menu.module.css"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Image from "next/image"
import logo from "./logo.png"

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <nav className={`${styles.navbar} ${menuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.logo}>
        <Image src={logo.src} alt="FreshFusion Logo" fill />
      </div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>
      <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <a href="#" className={styles.navLink}>Inicio</a>
        <a href="#" className={styles.navLink}>Nosotros</a>
        <a href="#" className={styles.navLink}>Kits</a>
        <a href="#" className={styles.navLink}>Sostenibilidad</a>
        <a href="#" className={styles.navLink}>Contacto</a>
      </div>
    </nav>
  )
}

export default Menu