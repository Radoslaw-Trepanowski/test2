define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : Kariera', //Will appear in the data.
			title : {
				media : {word : Kariera}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word : 'Korporacja'},
				{word : 'Pensja'},
				{word : 'Biuro'},
				{word : 'Zawodowy'},
				{word : 'Zarzadzanie'},
				{word : 'Biznes'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Rodzina', //Will appear in the data.
			title : {
				media : {word : Rodzina}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		{word: 'slub'},
				{word: 'Malzenstwo'},
				{word: 'Rodzice'},
				{word: 'Krewni'},
				{word: 'Rodzina'},
				{word: 'Dom'}, 
				{word: 'Dzieci'} 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
