// import { useState } from 'react'
import Cards from './data'

const Articles = () => {
  // const [readMore, setReadMore] = useState(false)
  return (
    <div className="flex flex-col items-center w-full text-center text-white bg-black h-fit">
      <div className='lg:px-[7.5rem] md:px-12 px-4 max-w-[87.5rem]'>
        <div className='flex flex-col pt-12'>
          <span className="pb-2 text-4xl font-semibold ">Our Articles</span>
          <span className="text-lg font-normal ">
            The latest industry news, interviews, technologies, and resources.
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {Cards.map((card) => {
            const { id, title, desc, img, person } = card
            return (
              <div key={id} className="flex flex-col max-w-[30rem] bg-white rounded-lg text-start">
                <div>
                  <img className='rounded-t-lg w-fit' src={img} alt="image" />
                </div>
                <div className="">
                  <h1 className="text-black  textBig">
                    {title}
                  </h1>
                  <p className="w-full pl-6 textLight">
                    {desc}
                    {/* <button>{readMore ? 'show less' : 'read more'}</button> */}
                  </p>
                </div>

                <div className="flex items-center w-full gap-4 pl-6">
                  <img src={person.img} alt="" />
                  <span className="text">{person.name}</span>
                  <span className="textLight">{person.date}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Articles
