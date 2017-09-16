module.exports = {
    YOUTUBE_DL_COMMAND_STRUCTURE : `youtube-dl -x --audio-format mp3 -f 'best[height<=480]' -o './tmp_files/%(id)s.%(ext)s'`,
    YOUTUBE_PATHNAME_STRUCTURE : '/watch',
    YOUTUBE_QUERY_STRUCTURE : /v=.+/
}