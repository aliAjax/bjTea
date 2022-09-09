const defaultSwiperData = {
    name:'c_swiper',
    imgConfig:{
        cname: "docStyle",
        title: "轮播图样式",
        type: 1,
        list: [
            {
                text: "圆角",
                icon: "iconPic_fillet"
            },
            {
                text: "直角",
                icon: "iconPic_square"
            }
        ]
    },
    docConfig: {
        cname: "swiper",
        title: "指示器样式",
        type: 0,
        list: [
            {
                text: "圆形",
                icon: "iconDot"
            },
            {
                text: "矩形",
                icon: "iconSquarepoint"
            },
            {
                text: "无指示器",
                icon: "iconjinyong"
            }
        ]
    },
    txtStyle: {
        title: "指示器位置",
        type: "center",
        list: [
            {
                text: "居左",
                val: "left"
            },
            {
                text: "居中",
                val: "center"
            },
            {
                text: "居右",
                val: "right"
            }
        ]
    },
    dotColor: {
        title: "指示器颜色",
        default: [
            {
                item: "#fff"
            }
        ],
        color: [
            {
                item: "#fff"
            }
        ]
    },
    bgColor:{
        color:[{item: "#fff"}],
        default:[{item: "#fff"}],
        title:'背景颜色'
    },
    lrConfig: {
        title: "左右边距",
        val: 10,
        min: 0,
        max:100
    },
    mbConfig: {
        title: "页面间距",
        val: 0,
        min: 0,
        max:100
    },
    swiperConfig: {
        title: "最多可添加9张图片，建议宽度750px；鼠标拖拽左侧圆点可调整图片顺序；图片格式为jpg、jpeg、png、gif，大小不超过2MB",
        maxList: 9,
        list: [
            {
                img: "",
                info: [
                    {
                        title: "标题",
                        value: "",
                        tips: "请输入首页名称",
                        max: 12
                    },
                    {
                        title: "链接",
                        value: "",
                        tips: "请选择链接",
                        max: 100
                    },
                    {
                        title:'生效时间',
                        value:[],
                    }
                ]
            }
        ]
    },
    id:''
}

export default defaultSwiperData