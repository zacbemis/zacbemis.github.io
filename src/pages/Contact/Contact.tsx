import { FC, useState, FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Get in Touch</h1>
      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <p>Feel free to reach out to me through any of these channels:</p>
          <ul>
            <li>
              <strong>Email:</strong>{' '} <br />
              <a href="mailto:zac.bemis916@gmail.com">
                zac.bemis916@gmail.com
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{' '} <br />
              <a href="https://www.linkedin.com/in/zac-bemis-504b042a8/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/zacbemis
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{' '} <br />
              <a href="https://github.com/zacbemis" target="_blank" rel="noopener noreferrer">
                github.com/zacbemis
              </a>
            </li>
          </ul>
        </div>

        <form ref={form} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
            />
          </div>

          <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <p className={styles.successMessage}>Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className={styles.errorMessage}>Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact; 