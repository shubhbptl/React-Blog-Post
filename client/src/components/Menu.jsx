import React from 'react'

const Menu = () => {
    const post =[
        {id:'2323',
        title:'Weekly Post 2024',
        desc:'This is going to be my weekly post of this week',
        img:'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
    },
        {id:'2323',
        title:'Weekly Post 2024',
        desc:'This is going to be my weekly post of this week',
        img:'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
    },
    ]
  return (
    <div className='menu'>
        <h1>Other post you may like</h1>
        {post.map(post =>(
            <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu