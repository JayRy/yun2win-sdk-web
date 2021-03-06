'use strict';

var Attachments = function(user){
    this.user = user;

    this.uploadBase64Image = function(fileName, stream, cb){
        cb = cb || nop;
        var url = 'attachments';
        baseRequest.uploadBase64Image(url, fileName, stream, this.user.token, function(err, data){
            if(err){
                cb(err);
                return;
            }
            cb(null, data);
        })
    }
}
