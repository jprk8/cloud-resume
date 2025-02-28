import { useState, useRef, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import About from './components/About'
import Resume from './components/Resume'
import Profile from './components/Profile'
import Menu from './components/Menu'
import Counter from './components/Counter'
import Project from './components/Project'

//get count value from aws
async function fetchCount() {
  try {
    const url = 'https://jhyth53xe6o3en5u3cmdj44ar40ixldy.lambda-url.us-west-1.on.aws/';
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) throw new Error(response.status);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return 'Error fetching count';
  }
}

function App() {
  const [count, setCount] = useState('Loading...');
  const resumeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);

  function handleMenuClick(section) {
    if (section === 'about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'resume') {
      resumeRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'projects') {
      projectRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const getCount = async() => {
      const newCount = await fetchCount();
      setCount(newCount);
    }
    getCount();
  }, []);

  return (
    <>
      <main>
        <Profile />
        <Menu handleMenuClick={handleMenuClick} />
        <Counter count={count}/>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={resumeRef}>
          <Resume />
        </section>
        <section ref={projectRef}>
          <Project />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
