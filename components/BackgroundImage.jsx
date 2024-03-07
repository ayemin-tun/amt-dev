import bgImage from '@/public/background.jpg';
import Image from 'next/image';
const BackgroundImage = () => {
    return <Image
        src={bgImage}
        placeholder="blur"
        alt="background"
        fill
        sizes="100vw"
        className='object-cover -z-10 h-[100vh] w-[100vw]'
    />
}

export default BackgroundImage