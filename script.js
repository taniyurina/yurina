new Vue({
      el: '#app',
      vuetify: new Vuetify(),
      data: {
        scenes: [
          {
            text: 'あなたはお宝を求めて旅に出ました。しばらくすると三つの道が出てきました。どの道を進む？',
            options: [
              { text: 'ぼこぼこの砂利道', nextScene: 1, isCorrect: false, message: '砂利道を進むと、小石につまづき命を落としました。' },
              { text: 'ボロボロの吊り橋', nextScene: 2, isCorrect: true },
              { text: 'どろどろのぬかるみ', nextScene: 1, isCorrect: false, message: 'ぬかるみに足を取られ、動けなくなり死にました。' },
            ],
          },
          {
            text: '😊が ん ば れ😊',
            options: [],
          },
          {
            text: '吊り橋をなんとか渡りきり、先に進みます。また少し歩くとあなたは見知らぬおじいさんに出会いました。どうする？',
            options: [
              { text: '挨拶をする', nextScene: 3, isCorrect: false, message: '礼儀がなっておらず怒らせてしまい命を落としました。' },
              { text: '手を振る', nextScene: 4, isCorrect: true },
              { text: '無視する', nextScene: 1, isCorrect: false, message: '逆上され、命を落としました。' },
            ],
          },
          {
            text: '礼儀がなっておらず怒らせてしまい命を落としました。再挑戦してください。',
            options: [],
          },
          {
            text: 'おじいさんはあなたに優しく微笑みかけてくれました。そしてようやくお宝がある洞窟にたどり着きましたが入口が3つあるようです。どれを選ぶ？',
            options: [
              { text: '正面の大きい入口', nextScene: 5, isCorrect: false, message: '落石で体をはさまれ命を落としました。' },
              { text: '一人がギリギリ入れる穴', nextScene: 6, isCorrect: true },
              { text: '反対側の地下に続く階段', nextScene: 1, isCorrect: false, message: '足を滑らせ、命を落としました。' },
            ],
          },
          {
            text: '落石で体をはさまれ命を落としました。再挑戦してください。',
            options: [],
          },
          {
            text: '体をねじこみ、洞窟の奥にお宝が見えました。近づくとどうやら先客がいるようです。どうする？',
            options: [
              { text: '山分けを持ちかける', nextScene: 7, isCorrect: true },
              { text: '倒す', nextScene: 8, isCorrect: true },
              { text: '横取りする', nextScene: 1, isCorrect: false, message: 'もみ合いになり命を落としました。' },
            ],
          },
          {
            text: '山分けを持ちかけ、平和に半分のお宝を手に入れました。おめでとう！',
            options: [],
          },
          {
            text: 'お宝すべてを手に入れましたが、恨みを買ってしまいました。To Be Continued...',
            options: [],
          },
        ],
        currentSceneIndex: 0,
        resultMessage: '',
      },
      computed: {
        currentScene() {
          return this.scenes[this.currentSceneIndex];
        },
      },
      methods: {
        selectOption(option) {
          this.resultMessage = option.message || '';
          if (option.isCorrect) {
            this.currentSceneIndex = option.nextScene;
          } else {
            this.currentSceneIndex = 1; 
          }
        },
        resetStory() {
          this.currentSceneIndex = 0;
          this.resultMessage = '';
        },
      },
    });