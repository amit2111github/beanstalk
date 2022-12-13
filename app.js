const app = require("express")();
const path = require("path");
app.get("/" , (req , res) => {
	return res.send("Your are on the Home page");
});
app.get("/home" , (req , res) =>{
	console.log(path.join(__dirname , "/"));
	res.sendFile(path.join(__dirname , "index.html" ));
});
app.get("/:name" , (req , res) => {
	const {name} = req.params;
	return res.json({name});
});
var server = app.listen(process.env.PORT || 3000 , () => console.log("Listening on Port "+server.address().port));
