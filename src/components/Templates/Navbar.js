/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable unused-imports/no-unused-imports */
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Navbar = ({}) => {
  const router = useRouter()
  const [navbar, setNavbar] = useState(false)
  const [modal, setModal] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeBackground)
    }
  }, [])

  return (
    <>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 999,
        }}
        className={
          navbar
            ? 'navbar bg-[#f5f5f5] border-b-2 transition-all duration-300 rounded-b-md shadow-xl'
            : 'navbar bg-[#f5f5f5] border-b-2 transition-all duration-300 rounded-b-md shadow-md'
        }>
        <div className="navbar-start">
          <div className="dropdown">
            <Image
              className="cursor-pointer mt-[-15px]"
              src="/images/logo-png.webp"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="navbar-end">
          <h1 className="btn btn-ghost normal-case text-xl text-[#e50108]">
            OTP M.WACHYU
          </h1>
        </div>
      </div>
    </>
  )
}

export default Navbar
