import Image from 'next/image';

function SliderComponent() {
  return(
    <div>
      <Image src='/images/slide.jpg' alt='slide' height={800} width={800} className='w-full h-full'/>
    </div>
  )
}

export default SliderComponent;