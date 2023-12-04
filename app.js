const app = Vue.createApp({
      data(){
            return {
                  isClicked : false,   
                  clickCount : 0                                 
            }
      },
      methods:{
            openMenu(){
                  this.isClicked = !this.isClicked;              
                  this.clickCount ++;
            }
      }
});
app.mount("#app");