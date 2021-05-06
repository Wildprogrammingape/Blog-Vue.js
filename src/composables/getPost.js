// 这个函数用来获得某个id的blog信息
import { ref } from 'vue'

const getPost = (id) => {
    // use ref Object to define changeable variable
    const post = ref(null)
    const error = ref(null)

    // fetch data
    const load = async () => {
      try{
        // fetch the data
        let response = await fetch('http://localhost:3000/posts/' + id)
        let data = await response.json()
        
        // assign the value with data
        post.value = data

        if (!response.ok){
          throw Error('the post does not exist')
        }
      }
      catch(err){
        error.value = err.message
        console.log(error.value)
      }
    }

    return {post, error, load}
}

// 最终导出这个可复用函数，其他函数就可以import它了
export default getPost