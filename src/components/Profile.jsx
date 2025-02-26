import '../styles/Profile.css'
import john from '../assets/profile2-bw.jpg'

export default function Profile() {
    return (
        <div className='profile'>
            <img src={john} alt='' className='profile-img' width='140px' />
            <div className='name'>JOHN J. PARK</div>
            <div className='career'>WEB DEV | CLOUD ARCHITECT</div>
        </div>
    )
}