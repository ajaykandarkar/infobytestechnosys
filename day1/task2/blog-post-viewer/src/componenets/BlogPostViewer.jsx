import React, { useState, useMemo, useCallback } from 'react';
import "./BlogPostViewer.css"
const postsData = [
    {
        id: 1,
        title: "The Future of Technology: Trends to Watch",
        category: "Tech",
        content: "In this post, we discuss the future of technology and the latest trends that will shape the industry in the coming years...",
        author: "John Doe",
    },
    {
        id: 2,
        title: "How to Stay Healthy During the Winter Season",
        category: "Health",
        content: "Winter can be tough on our bodies, but with the right tips and habits, you can stay healthy and strong all season long...",
        author: "Jane Smith",
    },
    {
        id: 3,
        title: "Top 5 Programming Languages to Learn in 2024",
        category: "Tech",
        content: "Programming languages evolve constantly. In this post, we’ll take a look at the top 5 languages that are worth learning in 2024...",
        author: "Alice Johnson",
    },
    {
        id: 4,
        title: "Essential Tips for a More Productive Lifestyle",
        category: "Lifestyle",
        content: "Everyone wants to be more productive. Here are some tips and tricks to help you stay focused and get more done in less time...",
        author: "Robert Lee",
    },
    {
        id: 5,
        title: "Understanding Mental Health: A Guide for Beginners",
        category: "Health",
        content: "Mental health is a crucial part of our well-being. In this article, we break down everything you need to know about mental health...",
        author: "Emily Davis",
    },
    {
        id: 6,
        title: "Exploring the Metaverse: What You Need to Know",
        category: "Tech",
        content: "The metaverse is a buzzword that’s quickly gaining traction. Let’s dive into what the metaverse is and how it will impact our digital lives...",
        author: "Michael Williams",
    }
];

const BlogPostViewer = () => {

    const [selectedCategory, setSelectedCategory] = useState("");
    const categories = useMemo(() => {
        return postsData
            .map((blog) => blog.category)
            .filter((value, index, self) => self.indexOf(value) === index);
    }, [postsData]); 

    const filteredPosts = useMemo(() => {
        return postsData.filter(post => post.category === selectedCategory);
    }, [selectedCategory, postsData]); 

    
    const handleCategoryChange = useCallback((category) => {
        setSelectedCategory(category);
    }, []); 

    return (
        <div className='container border mt-3'>
            <div className="btn-group m-4 shadow-lg">
                <button
                    className="btn border dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Blog posts
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {filteredPosts.map((post) => (
                <div className='card m-4 p-4 shadow-lg' key={post.id}>
                    <h1 className='font text-center'>{post.title}</h1>
                    <div className='card-body'>
                        <p className='fst-normal'><span className='fw-bold'>Content</span>: {post.content}</p>
                        <p className='fst-normal'><span className='fw-bold'>Author</span> : {post.author}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogPostViewer;
