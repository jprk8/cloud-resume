import '../styles/Resume.css'

export default function Resume() {
    return (
        <div className='resume'>
            <div className='resume-title'>RESUME</div>
            {/* <div className='resume-header'>
                <div className='resume-name'>John J. Park</div>
                <div className='resume-contact'>
                    ❖ San Diego, CA ❖ johnjpark.com
                </div>
            </div> */}
            <div className='education'>
                <div className='education-title'>
                    EDUCATION
                </div>
                <div className='school'>
                    <div className='school-name'>
                        <b>California Institute of Applied Technology</b><br/>
                        <span className='study'>Cloud Administration Program</span>
                    </div>
                    <div className='school-year'>
                        2023
                    </div>
                </div>
                <div className='school'>
                    <div className='school-name'>
                        <b>University of California, Riverside</b><br/>
                        <span className='study'>B.S. Information Systems</span>
                    </div>
                    <div className='school-year'>
                        2011
                    </div>
                </div>
            </div>
            <div className='cert'>
                <div className='cert-title'>
                    CERTIFICATIONS
                </div>
                <div className='cert-container'>
                    <ul className='cert-list'>
                        <li>AWS Certified Solutions Architect &#40;SAA-C03&#41;</li>
                        <li>AWS Certified Cloud Practitioner &#40;CLF-C02&#41;</li>
                        <li>CompTIA Security+</li>
                    </ul>
                    <ul className='cert-list'>
                        <li>Microsoft Azure Administrator Associate &#40;AZ-104&#41;</li>
                        <li>Microsoft Azure Fundamentals &#40;AZ-900&#41;</li>
                    </ul>
                </div>
            </div>
            <div className='project-exp'>
                <div className='project-exp-title'>
                    PROJECT EXPERIENCE
                </div>
                <div className='project-exp-entry'>
                    <div className='project-exp-entry-header'>
                        <div className='project-exp-name'>
                            <b>Cloud Resume Challenge – AWS Full-Stack Project</b>
                        </div>
                        <div className='project-exp-year'>
                            2025
                        </div>
                    </div>
                    <div className='project-exp-entry-title'>
                        <i>Personal Project | johnjpark.com</i>
                    </div>
                    <div className='project-exp-detail'>
                        <ul>
                            <li>Deployed a static website on S3 and CloudFront with a custom domain and Terraform for infrastructure as Code.</li>
                            <li>Built a serverless backend using Lambda (Python) and DynamoDB to track page views.</li>
                            <li>Implemented CI/CD with GitHub Actions and OIDC, automating S3 deployments and CloudFront cache invalidation.</li>
                            <li>Managed DNS and SSL via Route 53 and ACM, securing HTTPS and subdomain delegation across AWS accounts.</li>
                        </ul>
                        <b>Tech Stack:</b> AWS (S3, CloudFront, Lambda, DynamoDB, Route 53, IAM, ACM), Terraform, GitHub Actions, Python, React
                    </div>
                </div>
            </div>
            <div className='work'>
                <div className='work-title'>
                    WORK EXPERIENCE
                </div>
                <div className='work-entry'>
                    <div className='work-entry-header'>
                        <div className='company'>
                            <b>Park & Gold, LLC</b>
                        </div>
                        <div className='work-year'>
                            Jun 2023 - Present
                        </div>
                    </div>
                    <div className='job-title'>
                        <i>IT Operations Manager</i>
                    </div>
                    <div className='work-detail'>
                        <ul className='work-list'>
                            <li>Develop and launch secure website to enhance customer experience and increase sales.</li>
                            <li>Create system to track customer location, automate sales tax calculations ensuring compliance.</li>
                            <li>Maintain an error rate of less than 1% across operations through stringent quality assurance.</li>
                            <li>Use data analysis for informed, data-driven decisions to optimize business operations.</li>
                            <li>Ensure secure handling of customer information via robust IT security measures.</li>
                        </ul>
                    </div>
                </div>
                <div className='work-entry'>
                    <div className='work-entry-header'>
                        <div className='company'>
                            <b>LG Display America</b>
                        </div>
                        <div className='work-year'>
                            Oct 2012 - Jun 2023
                        </div>
                    </div>
                    <div className='job-title'>
                        <i>Customer Support Engineer/Quality Assurance</i>
                    </div>
                    <div className='work-detail'>
                        <ul className='work-list'>
                            <li>Awarded LG Vision Incentive Award multiple times for KPI achievement and CSR.</li>
                            <li>Reduced customer process defect rate by 60% on LCD production line in 2022.</li>
                            <li>Analyze quality data and failure trends for LCD and OLED panels in customer production facilities.</li>
                            <li>Support product launches (NPI/NMI), resolve quality issues, and drive continuous improvement.</li>
                            <li>Implement risk management procedures to ensure product integrity.</li>
                            <li>Collaborate with customers and production sites to verify design conformance.</li>
                            <li>Serve as a liaison between HQ and customer sites for manufacturing and quality concerns.</li>
                            <li>Identify root causes and implement corrective actions with cross-functional teams.</li>
                            <li>Provide engineering evaluations and Failure Analysis Reports to develop solutions.</li>
                            <li>Oversee IQC/OQC screening and third-party rework, securing funding through risk assessment.</li>
                            <li>Conduct quality meetings (MQR, QBR) and perform on-site manufacturing audits.</li>
                        </ul>
                    </div>
                </div>
                <div className='work-entry'>
                    <div className='work-entry-header'>
                        <div className='company'>
                            <b>University of California, Riverside</b>
                        </div>
                        <div className='work-year'>
                            Apr 2010 - Dec 2010
                        </div>
                    </div>
                    <div className='job-title'>
                        <i>Application Developer Intern</i>
                    </div>
                    <div className='work-detail'>
                        <ul className='work-list'>
                            <li>Built a comprehensive database for an airline research project, improving data accessibility.</li>
                            <li>Developed a PHP-based web interface for seamless data access and manipulation.</li>
                            <li>Analyzed data and provided actionable insights based on research findings.</li>
                            <li>Managed the full project lifecycle from requirements to deployment.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}