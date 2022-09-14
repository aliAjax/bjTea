const defaultSwiperData = {
    name:'c_swiper',
    cnName:'轮播图',
    imgConfig:{
        cname: "docStyle",
        title: "边框形状：",
        type: 0,
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
        title: "指示器样式：",
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
                text: "无",
                icon: "iconjinyong"
            }
        ]
    },
    txtStyle: {
        title: "指示器位置：",
        type: "left",
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
        title: "指示器颜色：",
        default: [
            {
                item: "#999999"
            }
        ],
        color: [
            {
                item: "#999999"
            }
        ]
    },
    bgColor:{
        color:[{item: "#fff"}],
        default:[{item: "#fff"}],
        title:'背景颜色：'
    },
    lrConfig: {
        title: "图片高度：",
        val: 0,
        min: 0,
        max:100
    },
    mbConfig: {
        title: "页面间距：",
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
                        key:"title",
                        title: "图片标题：",
                        value: "",
                        tips: "请输入首页名称",
                        max: 12
                    },
                    {
                        key:"link",
                        title: "图片链接：",
                        value: "",
                        tips: "请选择链接",
                        max: 100
                    },
                    {
                        key:"time",
                        title:'生效时间：',
                        value:[],
                    }
                ]
            }
        ]
    },
    id:''
}

export default defaultSwiperData