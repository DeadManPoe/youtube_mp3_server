const fs = require('fs');
const exec = require('child_process').exec;
const url = require('url');

const youtube_dl_command = ()=>{
    
}
const youtube_validate_url = (url_)=>{
    try {
        const url_object = url.parse(url_);
        const hostname = url_objecturl.hostname;
        const pathname = url_object.pathname;
        const query = url_object.query;
        if ( hostname !== 'www.youtube.com' || pathname !== 'watch' || /v=.+/.test(query)){
            return false
        }
        return url_object;
    }
    catch(error){
        return false;
    }
}
const convert_reaction = (req,res)=>{
    const url_ = req.query.url;
    const url_object = youtube_validate_url(url_);
    if (!url_object){
        res.status(422).end('The provided url is invalid');
        return;
    }
    const filename = url_object.query;
    const filepath = `${__dirname}/tmp_files/${filename}`.mp3;
    exec(`youtube-dl -x --audio-format mp3 -f 'best[height<=480]' -o './tmp_files/%(id)s.%(ext)s'`,(err,stdout,stderr)=>{
        if (err){
            res.status(422).end('Cannot process the video');
            return;
        }
        res.download(filepath,(err)=>{
            if (err){
                res.status(422).end('Cannot process the video');
                return;
            }
            fs.unlink(filepath,(err)=>{
                throw err;
            })
        })
    })
}
module.exports = convert_reaction;