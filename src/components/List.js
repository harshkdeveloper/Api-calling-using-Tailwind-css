import React, { Component, useState,useEffect } from 'react'
import axios from 'axios'
import  { useParams,Link } from 'react-router-dom'
function List(){
	const {id}=useParams()
	const url=`https://jsonplaceholder.typicode.com/posts/${id}`
	const [product,setProduct]=useState(null)

	let content=null;
	useEffect(()=>{
axios.get(url)
.then(response=>{
	setProduct(response.data)
	
})
	},[url])
	console.log(product)
	if(product){
		content =
		<div>
			
	{/* <p>{product.title}</p> */}
	<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-20">
  <div class="md:flex">
    
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">ID:{product.id}</div>
      <Link to="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{product.title}</Link>
      <p class="mt-2 text-gray-500">{product.body}</p>
    </div>
  </div>
</div>

	</div>
}
return(
<div>
	{/* <h1>product</h1> */}
	{/* <h1>{product.title}</h1> */}
	{content}
</div>
)
}

export default List