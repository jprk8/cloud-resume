import '../styles/Card.css'
import ghIcon from '../assets/icons/github-white.svg'
import openIcon from '../assets/icons/open-in-new-white.svg'

export default function Card({ imgUrl, name, description, git, url }) {
    return (
        <div className='card'>
            <div className='img-container'>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                    <img className='project-ss' src={imgUrl} alt='' />
                </a>
            </div>
            <div className='project-text'>
                <div className='project-text-header'>
                    <div className='project-text-title'>
                        {name}
                    </div>
                    <div className='project-links'>
                        <a href={git} target='_blank' rel='noopener noreferrer'>
                            <img src={ghIcon} alt='' width='28px' />
                        </a>
                        <a href={url} target='_blank' rel='noopener noreferrer'>
                            <img src={openIcon} alt='' width='28px' />
                        </a>
                    </div>
                </div>
                <div className='project-description'>
                    {description}
                </div>
            </div>
        </div>
    )
}