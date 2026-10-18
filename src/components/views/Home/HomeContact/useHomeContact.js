import { useState } from 'react';
import { EMAIL_RE } from './HomeContact.constants';

export default function useHomeContact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email address.';
    else if (!EMAIL_RE.test(formData.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!formData.message.trim()) nextErrors.message = 'Please write your message.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return {
    formData,
    isSubmitting,
    submitted,
    setSubmitted,
    errors,
    updateField,
    handleSubmit,
  };
}
