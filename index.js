// Libraries
const express = require( "express" );
const path = require( "path" );
const server = express();
const router = new express.Router();
const port = process.env.PORT || 3000;

server.use( express.urlencoded() )

router.get( "/", ( request, response ) => {
    response.sendFile( path.join( __dirname + "/home.html" ) );
} );

router.get( "/contact", ( request, response ) => {
    response.sendFile( path.join( __dirname + "/contact.html" ) );
} );

router.post( "/email", ( request, response ) => {
    console.log( "/email request.body", request.body );
    try{
        sendMail( request.body );

        response.send( 200 );
    }
    catch( error ){
        response.status( 404 ).send( error );
    }
} );

server.use( express.static( __dirname ) );

server.use( router );

server.listen( port, () => {
    console.log( "Server started on Port 3000" );
} );
