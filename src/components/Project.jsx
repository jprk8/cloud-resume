import '../styles/Project.css'
import { useState } from 'react'
import Card from './Card'
import memory from '../assets/project/memory-card-480w.png'
import todo from '../assets/project/todo-list-480w.png'
import battle from '../assets/project/battleship-480w.png'
import weather from '../assets/project/weather-480w.png'
import shop from '../assets/project/shopping-cart-480w.png'

export default function Project() {
    const memoryText = 'Memory card game created with React and Pokemon API. Deployed on Cloudflare'
    const todoText = 'Todo List created using Classes and Modules. Used Web Storage API (localStorage) for persistence.'
    const battleText = 'Battleship game played in browser against a computer. Applied Test Driven Development (TDD) principles using Jest.'
    const weatherText = 'Weather forecast website created using Visual Crossing API.'
    const shopText = 'Mock online store with shopping cart made with React and FakeStore API'

    const memoryGit = 'https://github.com/jprk8/memory-card';
    const memoryUrl = 'https://memory-card-aos.pages.dev/';
    const todoGit = 'https://github.com/jprk8/todo-list';
    const todoUrl = 'https://jprk8.github.io/todo-list/';
    const battleGit = 'https://github.com/jprk8/battleship';
    const battleUrl = 'https://jprk8.github.io/battleship/';
    const weatherGit = 'https://github.com/jprk8/weather-app';
    const weatherUrl = 'https://jprk8.github.io/weather-app/';
    const shopGit = 'https://github.com/jprk8/shopping-cart';
    const shopUrl = 'https://shopping-cart-eq8.pages.dev/';

    const projectArray = [
        {img: shop, name: 'Shopping Cart', text: shopText, git: shopGit, url: shopUrl},
        {img: memory, name: 'Memory Card', text: memoryText, git: memoryGit, url: memoryUrl},
        {img: todo, name: 'Todo List', text: todoText, git: todoGit, url: todoUrl},
        {img: battle, name: 'Battleship', text: battleText, git: battleGit, url: battleUrl},
        {img: weather, name: 'Weather App', text: weatherText, git: weatherGit, url: weatherUrl},
    ];

    return (
        <div className='project'>
            <div className='project-title'>PROJECTS</div>
            <div className='project-container'>
                {projectArray.map((proj, index) => (
                    <Card
                        key={index}
                        imgUrl={proj.img}
                        name={proj.name}
                        description={proj.text}
                        git={proj.git}
                        url={proj.url}
                    />
                ))}
            </div>
        </div>
    )
}