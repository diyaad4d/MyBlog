import express from 'express';
import bodyParser from 'body-parser';
import {posts} from './Data/posts.js';

const app=express();
const port=3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/allposts", (req, res) => {
    res.json(posts);
});

app.get('/posts/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const post=posts.find((post)=>post.id===id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
});

app.post('/posts',(req,res)=>{
   const newId=posts.length+1;
   const date=new Date();
   const post={
       id:newId,
       title:req.body.title,
       content:req.body.content,
       date:date.toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' }),
   }
   posts.push(post);
   res.status(201).json(post);
});

app.patch('/posts/:id',(req,res)=>{
  const id=parseInt(req.params.id);
  const post=posts.find((item)=>item.id===id);
    if (!post) return res.status(404).json({ message: "Post not found" });

  if(req.body.title){
      post.title=req.body.title;
  }
  if(req.body.content){
      post.content=req.body.content;
  }
  res.json(post);
});

app.delete('/delete/posts/:id',(req,res)=>{
   const id=parseInt(req.params.id);
   const index=posts.findIndex((post)=>post.id===id);

   if(index===-1)return res.status(404).json({message:"Post not found"});
   posts.splice(index,1);
   res.json({message: "Post deleted"});
});




app.listen(port, () => {
    console.log(`API Server running on http://localhost:${port}`);
});