import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect } from "react"

const EditEvent = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['fetch-blog'],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/events/${"66a6cb4de946dab5d8f99709"}`)
      const blogResponse = response.data
      const blog = blogResponse.blog
      return blog
    },
    // enabled: !!blogId
  })

  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div>EditEvent</div>
  )
}

export default EditEvent