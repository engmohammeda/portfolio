import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  translations: any;
}

export const ContactSection = ({ translations }: ContactSectionProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: translations.contact.info.email,
      href: `mailto:${translations.contact.info.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: translations.contact.info.phone,
      href: `tel:${translations.contact.info.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: translations.contact.info.location,
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {translations.contact.title}
          </h2>
          <h3 className="text-xl text-secondary mb-4">
            {translations.contact.subtitle}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {translations.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-tech transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{translations.contact.form.name}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-space-gray border-border/50 focus:border-primary/50"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">{translations.contact.form.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-space-gray border-border/50 focus:border-primary/50"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">{translations.contact.form.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-space-gray border-border/50 focus:border-primary/50"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 shadow-glow hover:shadow-aqua-glow transition-all duration-300"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {translations.contact.form.submit}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-tech transition-all duration-500 group animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.label}</h4>
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
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