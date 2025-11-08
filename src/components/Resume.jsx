import '../styles/Resume.css';
import resumeIcon from '../assets/icons/article-person.svg';

export default function Resume() {
    return (
        <div className='resume'>
            <div className='resume-title'>RESUME</div>
            <img src={resumeIcon} alt='' width='150px' />
            <a href='https://www.linkedin.com/in/john-park-98590488/' noopener noreferrer target="_blank">
                Linkedin Profile
            </a>
        </div>
    )
}