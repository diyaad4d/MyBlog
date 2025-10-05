import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';


const app=express();
const port=3000;
const API='http://localhost:3001';


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get("/", async (req, res) => {
   try{
       const result=await axios.get(`${API}/allposts`);
       res.render('index.ejs',{posts:result.data});
   }
   catch (error) {
       res.status(500).json({ message: "Error fetching posts" });
   }
});

app.get('/create', async(req,res)=>{
   try{
       res.render('write.ejs',{submit:"Create Post"});
   }
   catch (error) {
       res.status(500).json({ message: "Error fetching posts" });
   }
});

app.get('/Edit/:id',async(req,res)=>{
    try{
        const result =await axios.get(`${API}/posts/${req.params.id}`);
        res.render('write.ejs',{post:result.data,submit:"Update Post"});
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching post" });
    }
});

app.post('/new/posts',async(req,res)=>{
    try{
        const item=req.body;
        const result=await axios.post(`${API}/posts`,item);
        res.redirect("/");
    }
    catch (error) {
        res.status(500).json({ message: "Error creating post" });
    }
});

app.post('/update/posts/:id',async(req,res)=>{
   try{
       const id=req.params.id;
       const response = await axios.patch(
           `${API}/posts/${id}`,
           req.body
       );
       console.log(response.data);
       res.redirect("/");
   }
   catch (error) {
       res.status(500).json({ message: "Error creating post" });
   }
});

app.get('/delete/:id',async (req,res)=>{
   try{
       const result=await axios.delete(`${API}/delete/posts/${req.params.id}`);
       res.redirect("/");
   }
   catch (error) {
       res.status(500).json({ message: "Error deleting post" });
   }
});




app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});

