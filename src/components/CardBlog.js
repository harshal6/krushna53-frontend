import React from 'react';
import './CardBlog.css';

function CardBlog() {
    return(
        <div class="blog-section">
        <h2 class="heading">Blog</h2> 

        <div class="flex-container">        

        <div class="flex-item" >   
        <div class="blogBox">
            <img src="/assets/img/blog.jpg" alt="" />
            <div class="blogContent">
            <h2 class="text">Blog1</h2>
            <p class="desc-text">Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful.  </p>
            </div>
        </div>
        </div>

        <div class="flex-item" >   
        <div class="blogBox">
        <img src="/assets/img/blog2.jpg" alt="" />
            <div class="blogContent">
            <h2 class="text">Blog2</h2>
            <p class="desc-text">Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful.  </p>
            </div>
        </div>
        </div>

        <div class="flex-item" >   
        <div class="blogBox">
            <img src="/assets/img/blog.jpg" alt="" />
            <div class="blogContent">
            <h2 class="text">Blog3</h2>
            <p class="desc-text">Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful.  </p>
            </div>
        </div>
        </div>

       
        </div>
        </div>
    );

}
export default CardBlog;