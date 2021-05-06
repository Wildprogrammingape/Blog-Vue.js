// 为了让代码reuseable, 写这个函数，返回获取的 data 和 fetch函数 {posts, error, load}
import { ref } from 'vue'
const getPosts = () => {
    // use ref Object to define changeable variable
    const posts = ref([])
    const error = ref(null)

    // fetch data
    const load = async () => {
      try{
        // fetch the data
        let response = await fetch('http://localhost:3000/posts')
        let data = await response.json()
        
        // assign the value with data
        posts.value = data

        if (!response.ok){
          throw Error('no data available')
        }
      }
      catch(err){
        error.value = err.message
        console.log(error)
      }
    }

    return {posts, error, load}
}

// 最终导出这个可复用函数，其他函数就可以import它了
export default getPosts