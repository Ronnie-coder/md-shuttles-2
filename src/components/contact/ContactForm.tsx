<<<<<<< HEAD
// src/components/contact/ContactForm.tsx

"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './ContactForm.module.scss';
import { Send } from 'lucide-react';

// 1. Define the form schema with Zod for validation
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

// 2. Create a TypeScript type from the schema
type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  // 3. Initialize the form hook
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset 
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  // 4. Handle form submission
  const onSubmit = async (data: ContactFormInputs) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, you would send this data to an API endpoint:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    
    console.log("Form data submitted:", data);
    reset(); // Reset form fields after successful submission
  };

  if (isSubmitSuccessful) {
    return (
      <div className={styles.successMessage}>
        <h3>Thank you!</h3>
        <p>Your message has been sent successfully. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
      <div className={styles.inputGroup}>
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" {...register('name')} placeholder="John Doe" />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" {...register('email')} placeholder="you@example.com" />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      
      <div className={styles.inputGroup}>
        <label htmlFor="phone">Phone Number (Optional)</label>
        <input id="phone" type="tel" {...register('phone')} placeholder="+27 12 345 6789" />
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="subject">Subject</label>
        <input id="subject" type="text" {...register('subject')} placeholder="Booking Inquiry" />
        {errors.subject && <p className={styles.error}>{errors.subject.message}</p>}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register('message')} rows={5} placeholder="Hi, I would like to inquire about..."></textarea>
        {errors.message && <p className={styles.error}>{errors.message.message}</p>}
      </div>

      <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
        {!isSubmitting && <Send size={18} />}
      </button>
    </form>
  );
=======
// src/components/contact/ContactForm.tsx

"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './ContactForm.module.scss';
import { Send } from 'lucide-react';

// 1. Define the form schema with Zod for validation
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

// 2. Create a TypeScript type from the schema
type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  // 3. Initialize the form hook
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset 
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  // 4. Handle form submission
  const onSubmit = async (data: ContactFormInputs) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, you would send this data to an API endpoint:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    
    console.log("Form data submitted:", data);
    reset(); // Reset form fields after successful submission
  };

  if (isSubmitSuccessful) {
    return (
      <div className={styles.successMessage}>
        <h3>Thank you!</h3>
        <p>Your message has been sent successfully. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
      <div className={styles.inputGroup}>
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" {...register('name')} placeholder="John Doe" />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" {...register('email')} placeholder="you@example.com" />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      
      <div className={styles.inputGroup}>
        <label htmlFor="phone">Phone Number (Optional)</label>
        <input id="phone" type="tel" {...register('phone')} placeholder="+27 12 345 6789" />
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="subject">Subject</label>
        <input id="subject" type="text" {...register('subject')} placeholder="Booking Inquiry" />
        {errors.subject && <p className={styles.error}>{errors.subject.message}</p>}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register('message')} rows={5} placeholder="Hi, I would like to inquire about..."></textarea>
        {errors.message && <p className={styles.error}>{errors.message.message}</p>}
      </div>

      <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
        {!isSubmitting && <Send size={18} />}
      </button>
    </form>
  );
>>>>>>> d838527dfb3712e23902bb78922705722be566fb
}