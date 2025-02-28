import '../styles/About.css'
import diagram from '../assets/project/aws-diagram.png'

export default function About() {
    return (
        <div className='about'>
            <div className='about-title'>ABOUT</div>
            <div className='about-header'>
                <h2>Welcome to my website!</h2>
                <p className='about-header-text'>I built this website as part of the <i>Cloud Resume Challenge</i>, an initiative that demonstrates hands-on experience with cloud services and infrastructure. My goal was to strengthen my cloud computing skills while gaining real-world practice in building and deploying end-to-end solutions.</p>
            </div>
            <div className='about-content'>
                <h3>Project Overview</h3>
                <ul>
                    <li><b>Challenge Goal:</b> Construct and host a resume site showcasing practical cloud knowledge.</li>
                    <li><b>Motivation:</b> Develop career-ready cloud skills and experience with industry-standard tools.</li>
                </ul>
                <h3>Technology Stack</h3>
                <ul>
                    <li><b>AWS Services:</b> S3, Cloudfront, Route 53, Lambda, DynamoDB</li>
                    <li><b>Infrastructure as Code:</b> Deployed and managed via Terraform.</li>
                    <li><b>CI/CD:</b> Streamlined updates with GitHub Actions for automated testing and deployment.</li>
                </ul>
                <h3>Source Code</h3>
                <p>If you are interested in the technical details or wish to explore the code,</p>
                <p>
                    <a href='https://github.com/jprk8/cloud-resume' target='_blank' rel='noopener noreferrer'>
                    View the GitHub Repository
                    </a>
                </p>
            </div>
            <img className='diagram-img' src={diagram} alt=''/>
        </div>
    )
}