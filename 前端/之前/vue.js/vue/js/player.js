
var app = new Vue({
    el: "#player",
    data: {
        query: "",
        musiclist: [],
        musicUrl: "",
        musicCover: "",
    },
    methods: {
        searchMusic: function () {
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(function (response) {
                that.musiclist = response.data.result.songs;
            }, function (err) { })
        },
        playMusic: function (musicid) {
            var that = this;
            axios.get("https://autumnfish.cn/song/url?id=" + musicid).then(function (response) {
                that.musicUrl = response.data.data[0].url;
            }, function (err) { })
            axios.get("https://autumnfish.cn/song/detail?ids=" + musicid).then(function (response) {
                that.musicCover = response.data.songs[0].al.picUrl
            }, function (err) { })
        }
    }

})
