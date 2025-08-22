import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface ContactFormEmailProps {
  translations: any;
}

export const ContactFormEmail = ({ translations }: ContactFormEmailProps) => {
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
    
    try {
      // EmailJS service configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'engmohammedalbukhaiti@gmail.com'
      };

      // Initialize EmailJS with your public key
      emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
      
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );

      toast({
        title: "تم إرسال الرسالة!",
        description: "شكراً لك على رسالتك. سأتواصل معك قريباً.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "فشل في الإرسال",
        description: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
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
          "جاري الإرسال..."
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            {translations.contact.form.submit}
          </>
        )}
      </Button>
    </form>
  );
};
