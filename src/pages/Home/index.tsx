import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Divider } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';
import CustomAppBar from '../../components/CustomAppBar'
import PostCard from "../../components/PostCard";

import server from "../../api/server";
import { Post } from "../../Models/Post";

const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("accesToken");
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState<number>(0);
    let [hasMore, setHasMore] = useState<boolean>(true);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await server.get(`/feed?page=${page}`, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
                setHasMore(response.data.length > 0);
                setPosts([...posts, ...response.data ]);
            } catch (err) {
                console.log(err);
            }
        };

        getPosts();
    }, [token, page]);

    const loadMorePosts = () => {
        setPage(page + 1);
     };

     const handlePostClick = (postId: string) => {
        navigate(`/posts/${postId}`);
      };

    return (
        <div>
            <CustomAppBar title="Home" />
            <div style={{ marginTop: "56px" }}>
                <InfiniteScroll 
                dataLength={posts.length}
                next={loadMorePosts}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                >
                  {posts &&  
                posts.map((post) => (
                    <div key={post._id}>
                        <PostCard post={post} handlePostClick={handlePostClick} />
                        <Divider />
                    </div>
                ))}
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default Home;