import React from 'react';
import { Route, Routes } from 'react-router';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import BlogForm from './components/BlogForm';

const Blog = () => {
    return (
        <>
         <Routes>
            <Route path='/' element={<BlogList/>}/>  
            <Route path='/blogs/:id' element={<BlogDetails/>}/>  
            <Route path='/add' element={<BlogForm/>}/>
            <Route path='/edit/:id' element={<BlogForm/>}/>
        </Routes>   
        </>
    );
};

export default Blog;