<template>
  <div class="home">
    <h1>Home Page</h1>

    <div v-if="error">{{error}}</div>

    <div v-if="posts.length">
      <PostList :posts="posts"  />
    </div>

    <div v-else>Loading...</div>

  </div>
</template>

<script>
import getPosts from '../composables/getPosts.js'
import PostList from '../components/PostList.vue'
export default {
  name: 'Home',
  components: {PostList},
  setup(){ // run before any lifecycle hooks
    
    // 调用封装起来的getPost函数
    // 用destructure来分别获取想要的data和function
    // 这时posts还是空数组[]，因为还没运行fetch的函数
    const {posts, error, load} = getPosts()

    // call the fetch function
    load()



    // setup返回的是想用在<template>的数据，property-value的格式
    return {posts, error}
  }
}
</script>
