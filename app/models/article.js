import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  title: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  body: DS.attr(),
  time: DS.attr(),
});
