const ap = new APlayer({
    container: document.getElementById('aplayer'),//播放器容器元素
	mini: false,//迷你模式
    autoplay: true, //自动播放
	//theme: '#66ccff', //主题色
    loop: 'all',//音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
	order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
	preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.5,//默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
	mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: true,//列表默认折叠
    listMaxHeight: 50,//列表最大高度
	lrcType: 3, //歌词传递方式
    audio: [//音频信息,包含以下
		{
            name: 'More One Night',//音频名称
            artist: '久保ユリカ&水瀬いのり',//音频艺术家
            url: '/dist/musics/More One Night.mp3',//音频外链
			//url: 'http://www.ytmp3.cn/down/60365.mp3',
            cover: '/dist/imgs/luoli.png', //音频封面
			lrc: '/dist/lrc/MoreOneNight.lrc' //音频歌词，配合上面的lrcType使用
			//theme: '#000' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
		{
            name: 'Puppet',
            artist: 'Nightcore',
            url: '/dist/musics/Puppet.mp3',
            cover: '/dist/imgs/puppet.png',
			lrc: '/dist/lrc/puppet.lrc'
        },
		{
			name: 'Lemon',
            artist: '米津玄師',
            url: '/dist/musics/lemon.mp3',
            cover: '/dist/imgs/lemon.png',
			lrc: '/dist/lrc/lemon.lrc'
		},
        {
            name: 'Frontier(Cargo Remix)',
            artist: 'Cargo/VINAI/SCNDL',
            url: '/dist/musics/Frontier (Cargo Remix).mp3',
            cover: '/dist/imgs/fron1.png',
			lrc: '/dist/lrc/chun.lrc'
        },
		{
            name: 'Frontier',
            artist: 'Doctor Vox',
            url: '/dist/musics/Frontier.mp3',
            cover: '/dist/imgs/fron2.png',
			lrc: '/dist/lrc/chun.lrc'
        },
		{
			name: '一个人',
            artist: '韩红',
            url: '/dist/musics/一个人-韩红.mp3',
            cover: '/dist/imgs/one1.png',
			lrc: '/dist/lrc/one1.lrc'
		}
    ]
});