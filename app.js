const express=require('express');
const app=express();
//this line just to use heroku or using 5000 in local
const PORT=process.env.PORT || 5000;
//routing
const router = require('./routes');
//using static content from the public folder 
app.use('/static',express.static('public'));
//using the pug engine
app.set('view engine','pug');

app.use(router);

//error handling
app.use((req,res,next)=>{   
	const err=new Error('oh noooo!');
	res.locals.error=err;
	err.status = 404;
	res.render('error');
	next(err);
	});
	
app.listen(PORT,(req,res)=>{
	console.log('listening on port '+PORT);

});
