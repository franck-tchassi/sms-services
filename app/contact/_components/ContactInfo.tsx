
import { Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div>
        <h2 className='text-xl font-bold mb-6'>Ma société:</h2>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-row space-x-4'>
                <MapPin />
                <p>240 Rte d'Avignon, 84250 Le Thor</p>
            </div>
            <div className='flex flex-row space-x-4'>
                <Phone />
                <p>+33 07 71 52 69 27</p>
            </div>
            <div className='flex flex-row space-x-4'>
                <Link href={""}>
                    <FaFacebook size={18} />
                </Link>
                <Link href={""}>
                    <FaInstagram size={18}/>
                </Link>
                <Link href={""}>
                    <FaTiktok size={18}/>
                </Link>
                
            </div>
        </div>
        
    </div>
  )
}

export default ContactInfo