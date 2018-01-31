
export class GrapesJSAdapter {
  grapesOptions = {};
  editor = {};

  constructor(options) {
      if (!window.jQuery || !jQuery.fn.cmfGrapes) {
        throw 'The FancytreeAdapter requires both jQuery and the cmfGrapes library.';
      }

    	if (!options.grapes_options) {
    		options.grapes_options = {};
    	}

    	this.grapesOptions = options.grapes_options;
  }

  bindToElement($element) {
    this.grapesOptions.container = '#' + $element[0].id;
  	this.editor = grapesjs.init(this.grapesOptions);
  }

  bindContentToForm(formId) {
    const formValue = $('#'+formId).val();
    const domComponents = editor.DomComponents;
  	domComponents.clear();
  	domComponents.addComponent(formValue);
  	this.editor.on('component:update', () => {
  		$('#'+formId).val(this.editor.getHtml());
  	});
  }
}
