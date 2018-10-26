import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '故事',
        imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },{
        id: 2,
        title: '读书',
        imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },{
        id: 3,
        title: '@IT.互联网',
        imgUrl: '//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },{
        id: 4,
        title: '简书电影',
        imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },{
        id: 5,
        title: '手绘',
        imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },{
        id: 6,
        title: '旅行.在路上',
        imgUrl: '//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },{
        id: 7,
        title: '自然科学',
        imgUrl: '//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    }],
    articleList: [{
        id: 1,
        title: '二十多岁吃的苦，决定你三十多岁的生活！',
        desc: '我是个不折不扣的90后，月薪6000，住着两室一厅大出租房，工作不累很少加班，家离得也不远，坐动车一小时就到了。 按理说我工资还凑合，工作可以说...',
        imgUrl: '//upload-images.jianshu.io/upload_images/4285923-814f1612e7cab9b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id: 2,
        title: '二十多岁吃的苦，决定你三十多岁的生活！',
        desc: '我是个不折不扣的90后，月薪6000，住着两室一厅大出租房，工作不累很少加班，家离得也不远，坐动车一小时就到了。 按理说我工资还凑合，工作可以说...',
        imgUrl: '//upload-images.jianshu.io/upload_images/4285923-814f1612e7cab9b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id: 3,
        title: '二十多岁吃的苦，决定你三十多岁的生活！',
        desc: '我是个不折不扣的90后，月薪6000，住着两室一厅大出租房，工作不累很少加班，家离得也不远，坐动车一小时就到了。 按理说我工资还凑合，工作可以说...',
        imgUrl: '//upload-images.jianshu.io/upload_images/4285923-814f1612e7cab9b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id: 4,
        title: '二十多岁吃的苦，决定你三十多岁的生活！',
        desc: '我是个不折不扣的90后，月薪6000，住着两室一厅大出租房，工作不累很少加班，家离得也不远，坐动车一小时就到了。 按理说我工资还凑合，工作可以说...',
        imgUrl: '//upload-images.jianshu.io/upload_images/4285923-814f1612e7cab9b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id: 5,
        title: '二十多岁吃的苦，决定你三十多岁的生活！',
        desc: '我是个不折不扣的90后，月薪6000，住着两室一厅大出租房，工作不累很少加班，家离得也不远，坐动车一小时就到了。 按理说我工资还凑合，工作可以说...',
        imgUrl: '//upload-images.jianshu.io/upload_images/4285923-814f1612e7cab9b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id: 6,
        title: '二十多岁吃的苦，决定你三十多岁的生活！',
        desc: '我是个不折不扣的90后，月薪6000，住着两室一厅大出租房，工作不累很少加班，家离得也不远，坐动车一小时就到了。 按理说我工资还凑合，工作可以说...',
        imgUrl: '//upload-images.jianshu.io/upload_images/4285923-814f1612e7cab9b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id: 7,
        title: '二十多岁吃的苦，决定你三十多岁的生活！',
        desc: '我是个不折不扣的90后，月薪6000，住着两室一厅大出租房，工作不累很少加班，家离得也不远，坐动车一小时就到了。 按理说我工资还凑合，工作可以说...',
        imgUrl: '//upload-images.jianshu.io/upload_images/4285923-814f1612e7cab9b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id: 8,
        title: '二十多岁吃的苦，决定你三十多岁的生活！',
        desc: '我是个不折不扣的90后，月薪6000，住着两室一厅大出租房，工作不累很少加班，家离得也不远，坐动车一小时就到了。 按理说我工资还凑合，工作可以说...',
        imgUrl: '//upload-images.jianshu.io/upload_images/4285923-814f1612e7cab9b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id: 9,
        title: '二十多岁吃的苦，决定你三十多岁的生活！',
        desc: '我是个不折不扣的90后，月薪6000，住着两室一厅大出租房，工作不累很少加班，家离得也不远，坐动车一小时就到了。 按理说我工资还凑合，工作可以说...',
        imgUrl: '//upload-images.jianshu.io/upload_images/4285923-814f1612e7cab9b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id: 10,
        title: '二十多岁吃的苦，决定你三十多岁的生活！',
        desc: '我是个不折不扣的90后，月薪6000，住着两室一厅大出租房，工作不累很少加班，家离得也不远，坐动车一小时就到了。 按理说我工资还凑合，工作可以说...',
        imgUrl: '//upload-images.jianshu.io/upload_images/4285923-814f1612e7cab9b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }]
})

export default (state = defaultState , action) => {
    switch(action.type){
        default:
            return state;
    }
}