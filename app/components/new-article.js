import Ember from 'ember';

export default Ember.Component.extend({
  save1() {
    var params = {
      title: this.get('title'),
      author: this.get('author'),
      image: this.get('image'),
      body: this.get('body'),
      publish-time: "2016-02-23",
    };
    this.sendAction('save2', params);
  }
});
