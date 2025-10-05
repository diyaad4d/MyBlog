# MyBlog

 A dynamic blogging platform where users can **create, edit, and delete posts**.  
Built using **Node.js**, **Express**, **EJS**, and **Axios** for API communication.

🏋️‍♂️ This project was built for **Full-Stack development training**.

---



---

## 🧰 Technologies Used

- **Node.js**  
- **Express.js**  
- **Axios** (for API requests)  
- **EJS** (Embedded JavaScript templating)  
- **CSS / HTML / JavaScript**  
- **REST API** (Custom backend server)

---

## 🌟 Features

- 📝 **Create new posts** with a title and content.  
- ✏️ **Edit existing posts** directly through the interface.  
- 🗑️ **Delete posts** 
- 🖥️ **Dynamic rendering** using EJS for a smooth user experience.  
- 🌐 **API-based architecture** separates frontend from backend.  

---

## 📌 API Structure

- **GET** `/allposts` – Fetch all posts  
- **GET** `/posts/:id` – Fetch a single post  
- **POST** `/posts` – Create a new post  
- **PATCH** `/posts/:id` – Update an existing post  
- **DELETE** `/delete/posts/:id` – Delete a post  

---

## 🙋 Author

**d4d Diyaa Daifi**  
GitHub: [@diyaad4d](https://github.com/diyaad4d)

---

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/diyaad4d/MyBlog.git
cd MyBlog
```
2. Install dependencies:

```bash
npm install
```

3. Start the API server:

```bash
node server.js
```

4. Start the frontend server:

```bash
node app.js
```

5. Open your browser:

``` bash
http://localhost:3000
```
