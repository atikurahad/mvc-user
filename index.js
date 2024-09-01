const app = require("./app")
const confiq = require("./confiq/confiq")


const PORT = confiq.app.port;
app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})