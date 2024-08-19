import React, { useState } from 'react'
import  Card  from './Card';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';

const Testimonials = (props) => {

    let reviews=props.reviews;
    
    const [index,setIndex]=useState(0);


    function leftShiftHandler(){
      if(index-1<0){
        setIndex(reviews.length-1);
      }
      else{
        setIndex(index-1);
      }
    }


    function rightShiftHandler(){
      if(index+1>=reviews.length){
        setIndex(0);
      }
      else{
        setIndex(index+1);
      }
    }


    function surpriseHandler(){
    let randomIndex=Math.floor(Math.random()*reviews.length);
    console.log(randomIndex);
    setIndex(randomIndex);
    }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
        <Card review={reviews[index]}></Card>

        <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>
            <button 
            onClick={leftShiftHandler}
            className='cursor-pointer hover:text-violet-500'>
                <FiChevronLeft></FiChevronLeft>
            </button>
            <button 
            onClick={rightShiftHandler}
            className='cursor-pointer hover:text-violet-500'>
                <FiChevronRight></FiChevronRight>
            </button>
        </div>

        <div >
            <button 
            onClick={surpriseHandler}
            className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                Surprise Me
            </button>
        </div>
    </div>
  )
}
export default Testimonials;


//  React detects the state change and re-renders the Card 
// component with the new index value. The review prop passed 
// to the Card component is now reviews[randomIndex].
// useState is used whenever any state is change it re renders the code.