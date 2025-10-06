import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function ContactForm(){
  return(
    <div className='text-white my-[42px] space-y-[24px]'>
      <div>
        <Input placeholder='Name' />
      </div>
       <div>
        <Input placeholder='Email' />
      </div>
       <div>
        <Textarea placeholder='Message' />
      </div>
      <div className='flex items-center justify-center'>
       <Button className='text-[42px] font-sans w-full bg-white text-primary rounded-none py-[28px] hover:bg-white/90 cursor-pointer'>
        SUBMIT
       </Button>
      </div>
    </div>
  )
}

export default ContactForm;