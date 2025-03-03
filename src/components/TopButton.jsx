import '../styles/TopButton.css'
import { useState, useEffect } from 'react'
import topIcon from '../assets/icons/to-top.svg'

export default function TopButton() {
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisible() {
        if (window.scrollY > 600) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        <>
            <button 
                className={`top-btn ${isVisible ? 'visible' : ''}`} 
                onClick={scrollToTop}
            >
                <img src={topIcon} alt='' width='50px' />
                <div>BACK TO TOP</div>
            </button>
        </>
    );
}