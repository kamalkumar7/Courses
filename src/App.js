import React from 'react'
import Course from './components/Course'
import CourseHeader from './components/CourseHeader'

import './assets/styles/courseSection.css'


function App() {
  return (

    <>
    
    <div>
    <CourseHeader/>
    </div>

    <div className='courseContainer'>
  

        <Course class={1} />
        <Course class={2}/>
        <Course class={3}/>
        <Course class={4}/>
        <Course class={5} />
        <Course class={6}/>
        <Course class={7}/>
        <Course class={8}/>
        <Course class={9}/>
       
    

    </div>
    </>

  )
}

export default App