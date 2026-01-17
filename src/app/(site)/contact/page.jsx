import React from 'react'
import ContactInfo from '../components/ContactInfo'
import ContactSection from '../components/ContactDetail'

export default function Contact() {
  return (
    <main className='pageOffset'>
      <ContactSection/>
      <ContactInfo />
    </main>
  )
}
