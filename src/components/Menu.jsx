import '../styles/Menu.css'

export default function Menu({ handleMenuClick }) {
    return (
        <div className='menu'>
            <button className='menu-btn' onClick={() => handleMenuClick('about')}>ABOUT</button>
            <button className='menu-btn' onClick={() => handleMenuClick('resume')}>RESUME</button>
            <button className='menu-btn' onClick={() => handleMenuClick('projects')}>PROJECTS</button>
            <button className='menu-btn'>CONTACT</button>
        </div>
    )
}