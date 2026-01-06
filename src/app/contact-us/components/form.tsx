import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function ContactForm(){
  return(
    <div className='text-white my-[42px] space-y-[24px]'>
      <div>
        <Input placeholder="Your Name" />
      </div>
       <div>
        <Input placeholder="Your Email" />
      </div>
       <div>
        <Textarea placeholder="Your Message" />
      </div>
      <div className='flex items-center justify-center'>
       <Button className='text-[42px] font-sans w-full bg-white text-primary rounded-none py-[28px] hover:bg-white/90 cursor-pointer'>
        Submit
       </Button>
      </div>
    </div>
  )
}

export default ContactForm;