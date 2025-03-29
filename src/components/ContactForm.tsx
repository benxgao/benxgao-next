import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null); // explicitly typed

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSending(true);
    setIsSuccess(null); //reset status on new submit.

    try {
      // Replace with your actual service ID, template ID, and public key
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      console.log(`serviceId: ${serviceId}, templateId: ${templateId}, publicKey: ${publicKey}`);
      console.log(`formData: ${JSON.stringify(formData)}`);

      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS credentials not configured properly in .env.local');
        setIsSuccess(false);
        setIsSending(false);
        return;
      }

      await emailjs.send(serviceId, templateId, formData, publicKey);
      console.log('SUCCESS!');
      setIsSuccess(true);
    } catch (error) {
      console.error('FAILED...', error);
      setIsSuccess(false);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='grid gap-4 w-full p-4 sm:p-8 border border-gray-300 rounded-sm'
    >
      <div>
        {/* <label htmlFor='from_name'>Name:</label> */}
        <input
          type='text'
          id='from_name'
          name='from_name'
          placeholder='Your Name'
          className='p-3 border border-gray-200 rounded-sm text-sm sm:text-base w-full focus:outline-none focus:border-gray-400'
          value={formData.from_name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        {/* <label htmlFor='reply_to'>Email:</label> */}
        <input
          type='email'
          id='reply_to'
          name='reply_to'
          placeholder='Your Email'
          className='p-3 border border-gray-200 rounded-sm text-sm sm:text-base w-full focus:outline-none focus:border-gray-400'
          value={formData.reply_to}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        {/* <label htmlFor='message'>Message:</label> */}
        <textarea
          id='message'
          name='message'
          value={formData.message}
          placeholder='Your Message'
          className='p-3 border border-gray-200 rounded-sm text-sm sm:text-base w-full focus:outline-none focus:border-gray-400'
          rows={6}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type='submit'
        disabled={isSending}
        className='p-3 bg-black text-white rounded-sm hover:bg-blue-400 text-sm sm:text-base w-full cursor-pointer focus:outline-none focus:ring-blue-400'
      >
        {isSending ? 'Sending...' : 'Send message'}
      </button>

      {isSuccess === true && <p style={{ color: 'green' }}>Message sent successfully!</p>}
      {isSuccess === false && <p style={{ color: 'red' }}>Failed to send message. Please try again.</p>}
    </form>
  );
};

export default ContactForm;
