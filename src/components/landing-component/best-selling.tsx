import { ChevronLeft, ChevronRight } from 'lucide-react';

function BestSelling() {
  return(
    <div className='flex items-center justify-center my-[32px] space-x-[12px]'>
      <ChevronLeft size={32} />
      <div className='flex space-x-[80px]'>
        <div className='h-[400px] w-[600px] border '></div>
      <div className='h-[400px] w-[600px] border '></div>
      </div>
      <ChevronRight size={32} />
    </div>
  )
}

export default BestSelling;