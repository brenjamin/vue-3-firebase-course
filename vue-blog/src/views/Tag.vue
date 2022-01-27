<template>
  <div class="tags">
        <h1>#{{route.params.tag}}</h1>
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
            <div class="layout" v-if="filteredPosts.length">
                <PostList :posts="filteredPosts" />
                <TagCloud :posts="posts" />
            </div>
            <div v-else="">No posts with that tag.</div>
        </div>
        <div v-else>
            <Spinner />
        </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import TagCloud from '@/components/TagCloud'
import Spinner from '@/components/Spinner'
import getPosts from '@/composables/getPosts'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
    components: {
        PostList,
        Spinner,
        TagCloud
    },
    setup() {
        const route = useRoute()
        const {posts, error, load} = getPosts()
        load()

        const filteredPosts = computed(() => {
            return posts.value.filter(post => post.tags.includes(route.params.tag))
        })

        return {route, posts, error, filteredPosts}
    }
}
</script>

<style>
.tags {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>