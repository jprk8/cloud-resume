import '../styles/Profile.css'
import john from '../assets/profile2025.jpg'

export default function Profile() {
    return (
        <div className='profile'>
            <img src={john} alt='' className='profile-img' width='140px' />
            <div className='name'>JOHN J. PARK</div>
            <div className='career'>SYSTEM / CLOUD ADMIN</div>
        </div>
    )
}