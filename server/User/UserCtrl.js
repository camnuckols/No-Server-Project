const User = require('./User');

module.exports = {

getUser ( req, res ) {
  User.findById( req.params.id )
      .populate( `stories` )
      .exec( ( err, user ) => {
        if ( err ) {
          return res.status( 500 ).json( err );
        }
        return res.status( 200 ).json( user );
      });
},

getAllUsers ( req, res ) {
  User.find( {}, ( err, allUsers ) => {
    if ( err ) {
      return res.status( 500 ).json( err );
    }
    return res.status( 200 ).json( allUsers );
  });
},

createUser ( req, res ) {
  new User( req.body ).save(( err, user ) => {
    if ( err ) {
      return res.status( 500 ).json( err );
    }
    return res.status( 201 ).json( user );
  });
},

getUserByEmail ( req, res ) {
  User.find( { email: req.params.email })
  .populate( 'stories' )
  .exec(( err, user ) => {
    if ( err ) {
        return res.status( 500 ).json( err );
    } return res.status( 200 ).json( user );
  });
}


}