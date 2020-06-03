module.exports.profile=function(req,res){
    console.log('user profile');
    return res.end('<h1>User Profile</h1>');
};

module.exports.add=function(req,response){
        console.log('INSIDE POST');
        return response.send('<h1>Post request</h1>');
};

