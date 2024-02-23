require('dotenv').config();
const mongoose=require('mongoose');
const URI=process.env.MONGODB_URI;
//mongoose.connect("")

const connectDb= async ()=>{
        try {
             await mongoose.connect(URI);
             console.log("connection successful")  
        } catch (error) {
                console.log("connection unsuccessful")
                process.exit(0);       
        }
}

module.exports=connectDb;



// git remote add origin https://github.com/1yogeshwar/fullStackUserAuthProject.git
// git branch -M main
// git push -u origin main
