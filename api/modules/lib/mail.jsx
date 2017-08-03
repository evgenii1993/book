import email from 'emailjs';

let mail = {
    send: function () {
        let server 	= email.server.connect({
            user:	"mironovpib101@yandex.ru",
            password:"3110011q",
            host:	"smtp.yandex.ru",
            ssl:	true,
            port:   465
        });

        let message	= {
            text:	"i hope this works",
            from:	"you <mironovpib101@yandex.ru>",
            to:		"someone <mironovpib101@gmail.com>, another <mironovpib101@gmail.com>",
            cc:		"else <mironovpib101@gmail.com>",
            subject:	"testing emailjs",
            attachment:
                [
                    {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
                   // {path:"path/to/file.zip", type:"application/zip", name:"renamed.zip"}
                ]
        };
        server.send(message, function(err, message) { console.log(err || message); });
    }
};

module.exports = mail;
