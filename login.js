var casper = require('casper').create({
	    pageSettings: {
        userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.10 (KHTML, like Gecko) Chrome/23.0.1262.0 Safari/537.10'
    },
    viewportSize: {
        width: 1024,
        height: 768
    }
}

);
casper.start(
	'https://secure2.store.apple.com/us/account/setup'
	);

casper.then(function fillLoginDetails() {
    this.fill("form[class='sign-in']", {
        'login-password': 'WangKang123@',
        'login-appleId': 'jker.sh.cn@gmail.com'
    }, false);
    this.capture("fill1.png")
});

casper.then(function clickButton() {
    this.click('#sign-in');
     this.capture("fill2.png")
});

casper.then( function(){
    this.wait(3000); 
    
});


casper.then( function(){
    this.echo("Capturing Page");
    this.capture("result.png")
    this.echo(this.getHTML("#appleId-body"));
    // appId = this.capture('#login-password');
    // this.echo(appId);
});

casper.run(function() {
    this.exit();
});
