import React from 'react'
import CoursesGrid from '../Components/CoursesGrid'


export default function Features() {
  return (
    <div>
<CoursesGrid
  category="kids"
  bgColor="bg-blue-100"
  titleColor="text-blue-800"
  buttonColor="bg-green-500"
  titleFont="font-serif"
  paragraphFont="font-sans"
/>

<CoursesGrid
  category="teens"
  bgColor="bg-blue-100"
  titleColor="text-blue-800"
  buttonColor="bg-green-500"
  titleFont="font-serif"
  paragraphFont="font-sans"
/>

    </div>
  )
}
