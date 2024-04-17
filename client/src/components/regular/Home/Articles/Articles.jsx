import Cards from './data'
import './Articles.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

const Articles = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: ['home-articles'],
    queryFn: (async () => {
      const response = await fetch('/endpoints/api/articles')
      if (!response.ok) {
        throw new error('failed to fetch response')
      }
      const jsonResponse = await response.json()
      const articles = jsonResponse.data
      return articles.slice(0, 3)
    })
  })

  useEffect(() => {
    !isLoading && console.log(data)
  }, [isLoading, data])
  const SliceText = (text) => {
    const length = text.length;
    if (length > 65) {
      const slicedText = text.slice(0, 65)
      const newText = slicedText + "..."
      return newText
    } else {
      return text + "..."
    }
  }
  return (
    <div className="flex flex-col items-center w-full pb-12 text-center text-black h-fit">
      <div className='lg:px-[7.5rem] md:px-12 px-4 max-w-[87.5rem] flex flex-col justify-center items-center'>

        <div className='flex flex-col pt-6 pb-9'>
          <span className="pb-2 text-4xl font-semibold ">Our Articles</span>
          <span className="text-lg font-normal ">
            The latest industry news, interviews, technologies, and resources.
          </span>
        </div>

        <motion.div
          className="flex flex-row flex-wrap items-start justify-center w-full gap-8 pb-12 text-black">
          {/* {data ?
            data.map((card) => {
              const { id, date, title, description, blogAuthor, blogImage } = card
              return (
                <Link to="/" key={id} className='w-fit h-fit'>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.02 }}
                    transition={{ delay: 0, duration: 0.5, type: "spring" }}
                    className="flex flex-col border border-[#D4CECB] lg:max-w-[22rem] m-auto max-w-[18rem] bg-white rounded-lg text-start">
                    <div>
                      <img className='w-full rounded-t-lg' draggable="false" src={blogImage} alt="image" />
                    </div>
                    <div className="px-3 pt-5 pb-3">
                      <span className="text-xl font-semibold text-black ">
                        {title}
                      </span>
                      <p className="w-full pt-2 textLight">
                        {SliceText(description)} <a className="underline text-text-dev-orange hover:opacity-80" href="#">Read more</a>
                      </p>

                      <div className="flex items-center w-full gap-4 pt-7">
                        <img src={blogImage} alt="" />
                        <span className="text">{blogAuthor}</span>
                        <span className="textLight">{date}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              )
            })
            :
            Cards.map((card) => {
              const { id, title, desc, img, person } = card
              return (
                <Link to="/" key={id} className='w-fit h-fit'>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.02 }}
                    transition={{ delay: 0, duration: 0.5, type: "spring" }}
                    className="flex flex-col border border-[#D4CECB] lg:max-w-[22rem] m-auto max-w-[18rem] bg-white rounded-lg text-start">
                    <div>
                      <img className='w-full rounded-t-lg' draggable="false" src={img} alt="image" />
                    </div>
                    <div className="px-3 pt-5 pb-3">
                      <span className="text-xl font-semibold text-black ">
                        {title}
                      </span>
                      <p className="w-full pt-2 textLight">
                        {SliceText(desc)} <a className="underline text-text-dev-orange hover:opacity-80" href="#">Read more</a>
                      </p>

                      <div className="flex items-center w-full gap-4 pt-7">
                        <img src={person.img} alt="" />
                        <span className="text">{person.name}</span>
                        <span className="textLight">{person.date}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              )
            })
          } */}


        </motion.div>

        <div className='flex flex-col items-center pb-24'>
          <img width={50} src="/bookshelf-svgrepo-com.svg" alt="" />
          <span className='pt-4 text-3xl font-semibold text-dev-black'>No Articles Yet</span>
          <span className='font-semibold pt-2text-lg text-dev-black opacity-80'> coming soon...</span>
        </div>

        {data &&
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ delay: 0, duration: 0.3, type: "spring" }}
            className='h-12 px-5 py-3 bg-black rounded-lg w-fit text-[#FFF6F3]'>
            <a href="">Read Blog</a>
          </motion.button>}
      </div>
    </div>
  )
}

export default Articles
