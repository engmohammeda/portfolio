import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ContactSectionProps {
  translations: any;
}

export const ContactSection = ({ translations }: ContactSectionProps) => {
  const contactInfo = [
    {
      icon: () => (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.488"/>
        </svg>
      ),
      label: 'WhatsApp',
      value: translations.contact.info.whatsapp,
      href: `https://wa.me/${translations.contact.info.whatsapp.replace(/[^0-9]/g, '')}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: translations.contact.info.phone,
      href: `tel:${translations.contact.info.phone}`
    },
    {
      icon: Mail,
      label: 'Email',
      value: translations.contact.info.email,
      href: `mailto:${translations.contact.info.email}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: translations.contact.info.location,
      href: 'https://maps.google.com/?q=Sana\'a,Yemen'
    }
  ];

  return (
    <section id="contact" className="py-20 w-full bg-gradient-to-br from-background to-background/95">
      <div className="w-full px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {translations.contact.title}
          </h2>
          <h3 className="text-lg sm:text-xl text-survey-orange mb-4">
            {translations.contact.subtitle}
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {translations.contact.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-professional transition-all duration-500 group"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="p-3 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">{info.label}</h4>
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base break-all"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};