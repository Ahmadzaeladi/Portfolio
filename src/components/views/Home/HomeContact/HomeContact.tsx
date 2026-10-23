import { motion } from 'framer-motion';
import {
  Card,
  CardBody,
  Button,
  Tooltip,
  Link as HeroLink,
} from '@heroui/react';
import { Mail, MapPin, Terminal, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '@/constants/portfolioData';
import SectionHeader from '@/components/ui/SectionHeader';
import { SOCIAL_ICON_MAP } from './HomeContact.constants';

export default function HomeContact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Mail}
          eyebrow="Get in Touch"
          title="Let's Connect"
          accent="Directly"
          description="Reach out by email or connect with me on social media."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <Card
            isBlurred
            shadow="sm"
            classNames={{
              base: 'bg-white/60 glass rounded-3xl border border-white/70 backdrop-blur-2xl',
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
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
