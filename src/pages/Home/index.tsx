import React, { useState, useEffect } from 'react';
import { Divider } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';
import CustomAppBar from '../../components/CustomAppBar'
import PostCard from "../../components/PostCard";

import server from "../../api/server";
import { Post } from "../../Models/Post";

const Home = () => {
    const token = localStorage.getItem("accesToken");
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState<number>(0);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await server.get(`/feed?page=${page}`, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
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

    return (
        <div>
            <CustomAppBar title="Home" />
            <div style={{ marginTop: "56px" }}>
                <InfiniteScroll 
                dataLength={posts.length}
                next={loadMorePosts}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                >
                  {posts &&  
                posts.map((post) => (
                    <div key={post._id}>
                        <PostCard post={post} />
                        <Divider />
                    </div>
                ))}
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default Home;