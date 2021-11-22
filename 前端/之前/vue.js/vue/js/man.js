var app = new Vue({
    el: "#app",
    data: {
        city: "",
        weatherlist: []
    },
    methods: {
        search: function () {
            var that = this;
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city).then(function (response) {
                that.weatherlist = response.data.data.forecast;
            }).catch(function (err) { })
        }

    }
})