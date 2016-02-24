import Ember from 'ember';

export default Ember.Component.extend({
  // selected: "",
  actions: {
  //   selectCategory: function(selection, component) {
  //     debugger;
  //     if (selection) {
  //       // selected = selection;
  //       this.set('selected', selection)
  //     } else {
  //       this.set('category', component.get('default'))
  //     }
  //   },
    save1() {
      var params = {
        // category: selected,
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        body: this.get('body'),
        time: "2016-02-23",
      };
      // this.set('category', "");
      this.set('title', "");
      this.set('image', "");
      this.set('author', "");
      this.set('body', "");
      this.sendAction('save2', params);
    }
  }
});
