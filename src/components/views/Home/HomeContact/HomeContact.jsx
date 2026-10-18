import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardBody,
  Chip,
  Button,
  Input,
  Textarea,
  Tooltip,
  Link as HeroLink,
} from '@heroui/react';
import {
  Send,
  Mail,
  MapPin,
  Terminal,
  CheckCircle2,
} from 'lucide-react';
import { personalInfo } from '@/constants/portfolioData';
import SectionHeader from '@/components/ui/SectionHeader';
import { SOCIAL_ICON_MAP, INPUT_CLASS_NAMES } from './HomeContact.constants';
import useHomeContact from './useHomeContact';

export default function HomeContact() {
  const {
    formData,
    isSubmitting,
    submitted,
    setSubmitted,
    errors,
    updateField,
    handleSubmit,
  } = useHomeContact();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Send}
          eyebrow="Get in Touch"
          title="Let's Build Something"
          accent="Exceptional"
          description="Have a project in mind, need a full-stack web application, or want to discuss engineering opportunities? Reach out anytime!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: contact details & socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <Card
              isBlurred
              shadow="sm"
              classNames={{
                base: 'bg-white/60 glass rounded-3xl border border-white/70 backdrop-blur-2xl h-full',
              }}
            >
              <CardBody className="p-7 sm:p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Terminal size={18} className="text-sky-500" />
                  <span>Contact Details</span>
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-default-500">Email Address</div>
                      <HeroLink
                        href={`mailto:${personalInfo.email}`}
                        color="foreground"
                        className="text-sm sm:text-base font-semibold hover:text-primary transition-colors break-all"
                      >
                        {personalInfo.email}
                      </HeroLink>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-secondary-100 text-secondary-600 flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-default-500">Location</div>
                      <div className="text-sm sm:text-base font-semibold text-foreground">
                        {personalInfo.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-success-100 text-success-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-default-500">Availability</div>
                      <div className="text-sm sm:text-base font-semibold text-foreground">
                        {personalInfo.status}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-divider">
                  <div className="text-xs font-bold uppercase tracking-wider text-default-500 mb-4">
                    Connect on Social Media
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {personalInfo.socials.map((social) => {
                      const SocialIcon = SOCIAL_ICON_MAP[social.icon] || Mail;
                      return (
                        <Tooltip
                          key={social.name}
                          content={social.name}
                          placement="top"
                          delay={100}
                          closeDelay={100}
                        >
                          <Button
                            as={HeroLink}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            isIconOnly
                            variant="flat"
                            radius="lg"
                            aria-label={social.name}
                            className={`w-11 h-11 bg-white/70 border border-white/70 text-primary-600 ${social.color}`}
                            startContent={<SocialIcon size={18} />}
                          />
                        </Tooltip>
                      );
                    })}
                  </div>

                  <Chip
                    size="sm"
                    variant="flat"
                    color="success"
                    className="mt-6 text-[11px] font-semibold"
                    startContent={
                      <span className="relative flex h-2 w-2 ml-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    }
                  >
                    Typically replies within 24 hours
                  </Chip>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Right: message form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Card
              isBlurred
              shadow="sm"
              classNames={{
                base: 'bg-white/60 glass rounded-3xl border border-white/70 backdrop-blur-2xl h-full',
              }}
            >
              <CardBody className="p-7 sm:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-success-100 text-success-600 flex items-center justify-center mb-5">
                      <CheckCircle2 size={30} />
                    </div>
                    <h4 className="text-xl font-bold text-success-700">Message Sent Successfully!</h4>
                    <p className="text-sm text-default-500 mt-2 max-w-md">
                      Thank you for reaching out. I have received your note and will reply promptly.
                    </p>
                    <Button
                      color="success"
                      variant="shadow"
                      radius="full"
                      className="mt-7 font-semibold"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-foreground mb-1.5">Send a Message</h3>
                    <p className="text-sm text-default-500 mb-6">
                      Fill in the form below and I'll get back to you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Input
                          label="Your Name *"
                          labelPlacement="outside"
                          placeholder="e.g. Alex Johnson"
                          value={formData.name}
                          onValueChange={(v) => updateField('name', v)}
                          isInvalid={!!errors.name}
                          errorMessage={errors.name}
                          color={errors.name ? 'danger' : 'default'}
                          classNames={INPUT_CLASS_NAMES}
                        />
                        <Input
                          type="email"
                          label="Your Email *"
                          labelPlacement="outside"
                          placeholder="e.g. alex@example.com"
                          value={formData.email}
                          onValueChange={(v) => updateField('email', v)}
                          isInvalid={!!errors.email}
                          errorMessage={errors.email}
                          color={errors.email ? 'danger' : 'default'}
                          classNames={INPUT_CLASS_NAMES}
                        />
                      </div>

                      <Input
                        label="Subject"
                        labelPlacement="outside"
                        placeholder="Full-Stack Web Development Inquiry"
                        value={formData.subject}
                        onValueChange={(v) => updateField('subject', v)}
                        classNames={INPUT_CLASS_NAMES}
                      />

                      <Textarea
                        label="Message *"
                        labelPlacement="outside"
                        placeholder="Write your project requirements, tech stack questions, or ideas here..."
                        value={formData.message}
                        onValueChange={(v) => updateField('message', v)}
                        isInvalid={!!errors.message}
                        errorMessage={errors.message}
                        color={errors.message ? 'danger' : 'default'}
                        minRows={5}
                        classNames={INPUT_CLASS_NAMES}
                      />

                      <Button
                        type="submit"
                        color="primary"
                        variant="shadow"
                        radius="lg"
                        size="lg"
                        isLoading={isSubmitting}
                        className="font-bold px-8"
                        endContent={!isSubmitting ? <Send size={15} /> : undefined}
                      >
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                      </Button>
                    </form>
                  </>
                )}
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
