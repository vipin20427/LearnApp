module.exports = {

	index : function (req,res){

		var viewModel = {
    		images: [
        	{
            	uniqueId: 1,
            	title: 'Sample Image 1',
            	description: '',
            	filename: '',
            	views: 0,
            	likes: 0,
            	timestamp: Date.now()
        	}, {
            	uniqueId: 2,
            	title: 'Sample Image 2',
            	description: '',
            	filename: '',
            	views: 0,
            	likes: 0,
            	timestamp: Date.now()
        	}]
	};

	res.render('index',viewModel);

	}
}	