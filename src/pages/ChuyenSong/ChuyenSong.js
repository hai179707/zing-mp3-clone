import { useEffect } from "react"
import BlogPageWrapper from "~/components/BlogPageWrapper"
import PostItem from "~/components/PostItem"
import { chuyenSong } from '../postList.js'

function ChuyenSong() {
    const { title, subtitle, full } = chuyenSong

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <BlogPageWrapper title={title} subtitle={subtitle}>
            {full.map((post, index) => (
                <PostItem data={post} divide key={index} />
            ))}
        </BlogPageWrapper>
    )
}

export default ChuyenSong