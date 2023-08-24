const express = require('express');
const app = express();
app.use(express.json());
const {auth} = require('express-oauth2-jwt-bearer')
const autorizacion = auth({
    audience: 'http://localhost:3000/api/productos',
    issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
    tokenSigningAlg: 'RS256'
});
const librosRouter = require('./routes/libros');
const errorHandler = require('./middlewares/errorHandler');


app.use('/libros', autorizacion, librosRouter);

app.use(errorHandler);

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})