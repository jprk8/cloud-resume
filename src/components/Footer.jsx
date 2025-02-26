import '../styles/Footer.css'

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className='footer'>
            © {year}{' '} JOHN J. PARK ALL RIGHTS RESERVED
        </div>
    )
}