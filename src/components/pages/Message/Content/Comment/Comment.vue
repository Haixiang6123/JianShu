<template>
    <div class="jian-comments-wrapper">
        <!--标题-->
        <div class="jian-comments-title">
            收到的评论
        </div>
        <!--评论列表-->
        <div class="jian-comments-list">
            <jian-comment-item v-for="(comment, index) in comments" :comment="comment" :key="index"></jian-comment-item>
        </div>
    </div>
</template>

<script>
import JianCommentItem from '@/components/pages/Message/Content/Comment/CommentItem/CommentItem'

export default {
    data() {
        return {
            comments: []
        }
    },
    components: {
        'jian-comment-item': JianCommentItem
    },
    beforeMount() {
        // 发送请求，获取评论
        this.$axios.get('/comment')
            .then((res) => {
                // 获取分类
                this.comments = res.data.data;
            })
            .catch((err) => {
                console.log('axios err', err);
            });
    }
}
</script>

<style scoped>
/*标题*/

.jian-comments-title {
    margin-bottom: 20px;
    color: rgb(51, 51, 51);
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
}
</style>
