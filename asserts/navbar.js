Vue.component("pan-navbar", {
  template: [
    "<div>",
    '   <mt-header :title="title" style="height:1.5rem;">',
    '       <mt-button slot="left" @click="goBack" style="font-size: 0.75rem;"><i class="fa fa-home"></i></mt-button>',
    '       <mt-button icon="more" slot="right" @click="toggleMenu" style="font-size: 0.75rem;"></mt-button>',
    "   </mt-header>",
    '   <mt-popup v-model="showMenu" position="right"',
    '       style="box-shadow: -5px -1px 5px rgba(96, 93, 93, 0.5);overflow:auto;max-width:360px;margin-top:-1px;width:70%;height:100%;background-color: #f8f8f8;">',
    "       <div>",
    '           <div style="text-align: center;font-weight: bolder;font-size: 2rem;padding: 34px 0;background-color: white;">- UV -</div>',
    '           <mt-cell title="VIP解析" to="vipparse.html" is-link value="Vip Parser"></mt-cell>',
    '           <mt-cell title="问题之书" to="magicbook.html" is-link value="Magic Book"></mt-cell>',
    '           <mt-cell title="磁力转换" to="btparser.html" is-link value="BT Parser"></mt-cell>',
    '           <mt-cell title="" style="min-height: 16px;background-color: inherit;"></mt-cell>',
    '           <mt-cell title="金融转换" to="//github.com" is-link value="带链接"></mt-cell>',
    '           <mt-cell title="经纬转换" to="//github.com" is-link value="带链接"></mt-cell>',
    '           <mt-cell title="" style="min-height: 16px;background-color: inherit;"></mt-cell>',
    '           <mt-cell title="视频转动画" to="//github.com" is-link value="带链接"></mt-cell>',
    '           <mt-cell title="图片灰度转换" to="//github.com" is-link value="带链接"></mt-cell>',
    '           <mt-cell title="" style="min-height: 16px;background-color: inherit;"></mt-cell>',
    '           <mt-cell title="车辆识别号解析" to="//github.com" is-link value="带链接"></mt-cell>',
    '           <mt-cell title="" style="min-height: 16px;background-color: inherit;"></mt-cell>',
    "       </div>",
    "   </mt-popup>",
    "</div>",
  ].join(""),
  props: ['title'],
  data(){
    return {
    showMenu: false,
  }},
  methods:{
    goBack() {
        console.log(1)
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
        console.log(this.showMenu)
      },
  }
});
