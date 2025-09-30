

import React from 'react'

const ContactInfo = () => {
  return (
    <div className='shadow-lg pt-[80px] pb-[80px] mb-[80px] pl-[100px] pr-[100px] rounded-[24px] border-2 border-[#E6E6E6] flex justify-between  '>
        <div className=''>
            <img className='w-10' src="/local.png" alt="" />
            <p>Address</p>
            <p>2972 Westheimer Rd. Santa Ana,</p>
            <p>Illinois 85486 </p>
        </div>
        <div>
            <img className='w-10' src="/tel.png" alt="" />
            <p>Contact phone</p>
            <p>(229) 555-0109</p>
            <p>(229) 555-2872</p>
        </div>
        <div>
            <img className='w-10' src="/sms.png" alt="" />
            <p>Email</p>
            <p>Contact@example.com</p>
        </div>
    </div>
  )
}

export default ContactInfo