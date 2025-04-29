import React from 'react'
export default function Stars({ rating }) {
  let num = rating
  let temp = []

  for (let i = 1; i <= num - 1; i++) {
    temp.push(i)
  }
  if (rating % 2 === 0.5 || rating % 2 === 1.5) {
    temp.push(rating)
  }

  return (
    <>
      {temp.map((star) => {
        return <i className='ic-yellow fa fa-star' key={star} />
        // if (star % 2 === 0.5 || star % 2 === 1.5) {
        //   return <FaIcons.FaStarHalf />
        // }
        // return <FaIcons.FaStar color='yellow' />
      })}
    </>
  )
}
