import CommonConstants from '../constants/CommonConstants';

const CHANGE = 'CHANGE';
let events = [];
let register = false;

const CommonStore = {

  changeEvent(component){

    let eventName = `${CHANGE}_${component.componentName}`;

    let newEvent = new CustomEvent(eventName, {
      detail: component
    });

    events.push(newEvent);
  },
  registerEvents(){
    if(!register){
      document.addEventListener(CommonConstants.ADD_TO_CART, () => {
        events.each((event) => event.detail.render());
      }, false);

      register = true;
    }
  }
};

export default CommonStore;
