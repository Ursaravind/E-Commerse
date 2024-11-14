
import blogsData from '../data/blogs.json'

const Blogs = () => {
    console.log(blogsData)
  return (
    <section className='section__container blog__container '>
        <h2 className='section__header  lg:ml-0'>Latest From Blog</h2>
        <p className='text-center'>Elevate your wardrobe with our freshest style tips,trends,and inspiration on our blog</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-10'>
            {
                blogsData.map((blog,index)=>(
                    <div key={index} className='blog__card ml-16 lg:ml-0 cursor-pointer hover:scale-105 transition-all duration-300 shadow-xl shadow-black' ><img  src={blog.imageUrl} alt="" />
                    <div className="blog__card__content">
                        <h6>{blog.subtitle}</h6>
                        <h4>{blog.title}</h4>
                        <p>{blog.date}</p>
                    </div>
                    </div>

                ))
            }
        </div>
      
    </section>
  )
}

export default Blogs
