import React, { useState, useEffect } from 'react';

import CustomAppBar from '../../components/CustomAppBar'

import server from "../../api/server";

interface Post {
    _id: string;
    title: string;
    description: string;
    profile: {
        name: string;
    };
}
const Home = () => {
    const token = localStorage.getItem("accesToken");
    const [post, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const getPosts = () => {

        }

    });
};

export default Home;