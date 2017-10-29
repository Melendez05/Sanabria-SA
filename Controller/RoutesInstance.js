var company = require('./CompanyController');
var client = require('./ClientController');
var diameters = require('./DiametersController');
var email = require('./EmailController');
var images = require('./ImagesController');
var phones = require('./PhoneController');
var product = require('./ProductController');
var social_network = require('./SocialNetworkController');
var tissue = require('./TissueController');
var advantage = require('./AdvantageController');
var applications = require('./ApplicationsController');

function RoutesInstance(){
    this.config = function(app){
        company.config(app);
        client.config(app);
        diameters.config(app);
        email.config(app);
        images.config(app);
        phones.config(app);
        product.config(app);
        social_network.config(app);
        tissue.config(app);
        advantage.config(app);
        applications.config(app);
    }
}
module.exports = new RoutesInstance()