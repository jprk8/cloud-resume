import '../styles/Resume.css';
import resumeIcon from '../assets/icons/article-person.svg';

export default function Resume() {
    return (
        <div className='resume'>
            <div className='resume-title'>RESUME</div>
            <img src={resumeIcon} alt='' width='150px' />
            <a href='/resume-johnpark-web.pdf' download>
                <button className='resume-dl-btn'>Download Resume</button>
            </a>
        </div>
    )
}