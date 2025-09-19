import Image from 'next/image';

function SliderComponent() {
  return(
    <div className='h-screen'>
      <Image src='/images/slide.jpg' alt='slide' height={800} width={800} className='w-full h-full object-cover'/>
    </div>
  )
}

export default SliderComponent;