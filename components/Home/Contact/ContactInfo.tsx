import { contactData } from '@/Data/data';
import React from 'react'
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div >
      <div className=' flex items-center space-x-8 mt-10 md:mt-0 '>
        {/* <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 
      flex items-center justify-center flex-col hover:bg-white border-2'> */}


<div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 
    flex items-center justify-center flex-col border-2 '>

      {/* Phone Icon - Link to call */}
      {/* Change: Wrapped FaPhone icon in an anchor <a> tag with href="tel:" to initiate a phone call */}
      <a href={`tel:${contactData.phone}`}>
      <FaPhone className='w-4 h-4 md:w-7 md:h-7 text-white hover:bg-[#D04DAD]  transition-all duration-300'/>
        </a>
        </div>
        <div>
        <h1 className='text-white text-lg sm:text-xl md:text-xl font-bold'>Phone</h1>
          <h1 className='text-base sm:text-lg text-white text-opacity-70'>{contactData.phone}</h1>
      </div>
      </div>
      {/* Email */}
      <div className=' flex items-center space-x-8 mt-8 mb-8 '>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 
      flex items-center justify-center flex-col  border-2'>
     
     {/* Envelope Icon - Link to open Gmail */}
     {/* Change: Wrapped FaEnvelope icon in an anchor <a> tag with href="mailto:" to open Gmail (or any email client) */}
     <a href={`mailto:${contactData.email}`} >
      <FaEnvelope className='w-4 h-4 md:w-7 md:h-7 text-white hover:bg-[#D04DAD] '/>
     </a>
        </div>
        <div>
        <h1 className='text-white text-lg sm:text-xl md:text-xl font-bold'>Email Address</h1>
          <h1 className='text-base sm:text-lg text-white text-opacity-70'>{contactData.email}</h1>
      </div>
      </div>
      {/* Address */}
      <div className=' flex items-center space-x-8 '>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 
      flex items-center justify-center flex-col border-2'>
      
       {/* Map Icon - Link to open Google Maps */}
        {/* Change: Wrapped FaMap icon in an anchor <a> tag with href to Google Maps, showing the address location */}
        
        <a
          href={`https://www.google.com/maps?q=${encodeURIComponent(contactData.address)}`}
          target="_blank" >
      <FaMap className='w-4 h-4 md:w-7 md:h-7 text-white hover:bg-[#D04DAD]  transition-all duration-300' />
          </a>
        </div>
        <div>
        <h1 className='text-white text-lg sm:text-xl md:text-xl font-bold'>Address</h1>
          <h1 className='text-base sm:text-lg text-white text-opacity-70'>{contactData.address}</h1>
      </div>
      </div>
    </div>
  )
}

export default ContactInfo;
