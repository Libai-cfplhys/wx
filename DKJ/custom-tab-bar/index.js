Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/image/app02_39.gif",
      selectedIconPath: "/image/app02_39.jpg",
      text: "首页"
    }, {
      pagePath: "/pages/data/data",
      iconPath: "/image/app02_41.gif",
      selectedIconPath: "/image/app02_41.jpg",
      text: "数据"
    }, {
      pagePath: "/pages/user/user",
      iconPath: "/image/app02_36.jpg",
      selectedIconPath: "/image/app02_36.gif",
      text: "我的"
    }]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})