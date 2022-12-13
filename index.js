const app = require("express")();

app.get("/" , (req , res) => {
	return res.send("Your are on the Home page");
});
app.get("/:name" , (req , res) => {
	const {name} = req.params;
	return res.json({name});
});
var server = app.listen(process.env.PORT || 3000 , () => console.log("Listening on Port "+server.address().port));
