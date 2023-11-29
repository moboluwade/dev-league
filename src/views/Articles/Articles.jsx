// import { useState } from 'react'
import Cards from './data'

const Articles = () => {
  // const [readMore, setReadMore] = useState(false)
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full mx-auto mt-8 text-center">
      <div>
        <h1 className="font-bold text-3xl pb-2">Our Articles</h1>
        <span className=" text-normal">
          The latest industry news, interviews, technologies, and resources.
        </span>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {Cards.map((card) => {
          const { id, desc, img, person } = card
          return (
            <div key={id} className="flex flex-col text-start gap-4">
              <div>
                <img src={img} alt="image" />
              </div>
              <div className="innerWidth">
                <h1 className="pt-4 pl-6 pb-2 textBig">
                  {/* {readMore ? title : title.substring(0, 50)} : title} */}
                </h1>
                <p className="pl-6 textLight">
                  {desc}
                  {/* <button>{readMore ? 'show less' : 'read more'}</button> */}
                </p>
              </div>

              <div className="flex gap-4 items-center pl-6">
                <img src={person.img} alt="" />
                <span className="text">{person.name}</span>
                <span className="textLight">{person.date}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Articles
