import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';


export default Controller.extend({
  message: '',
  emailAddress: '',
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte('message.length', 5),

  isAlsoDisabled: not('isValid'),
  isDisabled: not('isLongEnough'),

  isBothTrue: Ember.computed.and('isValid', 'isLongEnough'),

  isEmailMess: not('isBothTrue'),

  actions: {

    saveInvitation() {
      alert(`Saving : ${this.get('emailAddress')} ${this.get('message')}`);
      this.set('responseMessage', `We've got your message and we'll be in touch soon`);
      this.set('emailAddress', '');
      this.set('message', '');

    }
  }
});
