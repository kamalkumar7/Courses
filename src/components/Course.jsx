import React from 'react'
import '../assets/styles/course.css'
import image from '../assets/images/2280.jpg'

const course = (props) => {

  return (
    <div className='coursebox'>
        <div className='top_coursebox' >
            <img src={image} alt="" className='img'  style={{height:'222px' , width:'100%',}}/>
        </div>
        <div className='bottom_coursebox'>
            <div className='class_detail'>
                <div className='class_no'>
                    Class {props.class}
                </div>
                <div className='age'>
                    Age {props.class+4} - {props.class+6}
                </div>
            </div>
            <div className='course_detail'>
                <br />
            This course is designed for kids of age group  {props.class+4}-{props.class+6}. This is one of the most interactive course available on the internet to teach kids coding.    </div>
            <div className='btn_div'>
            <button className='button'>Enroll Now</button>

            </div>
            </div>

            
    </div>
  )
}

export default course