import { useState, useRef, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import About from './components/About'
import Resume from './components/Resume'
import Profile from './components/Profile'
import Menu from './components/Menu'
import Counter from './components/Counter'
import closeBtn from './assets/close.svg'

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

  function handleMenuClick(section) {
    if (section === 'about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'resume') {
      resumeRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // function handleMenuClick(item) {
  //   if (item === 'resume') {
  //     resumeRef.current.showModal();
  //     resumeRef.current.classList.add('open');
  //   } else if (item === 'about') {
  //     aboutRef.current.showModal();
  //     aboutRef.current.classList.add('open');
  //   }
  //   document.addEventListener('keydown', handleKeyDown);
  // }

  // function handleClose(modalRef) {
  //   if (modalRef?.current) {
  //     modalRef.current.classList.remove('open');
  //     setTimeout(() => {
  //       modalRef.current.close();
  //     }, 300);
  //   }
  //   document.removeEventListener('keydown', handleKeyDown);
  // }

  // function handleKeyDown(e) {
  //   if (e.key === 'Escape') {
  //     e.preventDefault();
  //     if (resumeRef.current?.open) handleClose(resumeRef);
  //     if (aboutRef.current?.open) handleClose(aboutRef);
  //   }
  // }

  useEffect(() => {
    const getCount = async() => {
      const newCount = await fetchCount();
      setCount(newCount);
    }
    getCount();
  }, []);

  // function handleClickOutside(e) {
  //   if (e.target === resumeRef.current) {
  //     e.preventDefault();
  //     handleClose(resumeRef);
  //   } else if (e.target === aboutRef.current) {
  //     e.preventDefault();
  //     handleClose(aboutRef);
  //   }
  // }

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
      </main>

      {/* <dialog ref={resumeRef} className='resume-modal' onClick={handleClickOutside}>
        <Resume />
        <button className='dialog-btn' onClick={() => handleClose(resumeRef)}>
          <img src={closeBtn} alt='' />
        </button>
      </dialog>

      <dialog ref={aboutRef} className='about-modal' onClick={handleClickOutside}>
        <About />
        <button className='dialog-btn' onClick={() => handleClose(aboutRef)}>
          <img src={closeBtn} alt='' />
        </button>
      </dialog> */}
      <Footer />
    </>
  )
}

export default App
