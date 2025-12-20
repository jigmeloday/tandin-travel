import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RECURRING_CONTENT } from '@/lib/data';

function ContactForm(){
  const { contactForm } = RECURRING_CONTENT;
  
  return(
    <div className='text-white my-[42px] space-y-[24px]'>
      <div>
        <Input placeholder={contactForm.namePlaceholder} />
      </div>
       <div>
        <Input placeholder={contactForm.emailPlaceholder} />
      </div>
       <div>
        <Textarea placeholder={contactForm.messagePlaceholder} />
      </div>
      <div className='flex items-center justify-center'>
       <Button className='text-[42px] font-sans w-full bg-white text-primary rounded-none py-[28px] hover:bg-white/90 cursor-pointer'>
        {contactForm.submitButton}
       </Button>
      </div>
    </div>
  )
}

export default ContactForm;