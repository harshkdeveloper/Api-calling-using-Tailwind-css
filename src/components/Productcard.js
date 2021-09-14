import React from 'react'
import '../styles/main.css'
import { Link } from 'react-router-dom'

const Productcard = (props) => {
    return (
        <div>
 <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
  <Link to={`/List/${props.product.id}`}>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">ID:{props.product.id}</div>
      <Link to="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{props.product.title}</Link>
     <p class="mt-2 text-gray-500">{props.product.body}</p>
    </div></Link>
  </div>
</div>
      </div>
    )
}

export default Productcard
