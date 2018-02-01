export class GrapesJSAdapter {
	constructor(options) {
		if (!window.jQuery || !jQuery.fn.cmfGrapes) {
			throw 'The FancytreeAdapter requires both jQuery and the cmfGrapes library.';
		}
		if (!window.grapesjs) {
			throw 'You have to import grapesjs globally';
		}
		if (!options.grapes_options) {
			options.grapes_options = {};
		}

		this.grapesOptions = options.grapes_options;
	}

	bindToElement($element) {
		this.grapesOptions.container = '#' + $element[0].id;
		this.editor = window.grapesjs.init(this.grapesOptions);
	}

	bindContentToForm(formId) {
		const formValue = $('#' + formId).val();
		const domComponents = this.editor.DomComponents;
		domComponents.clear();

		let wrapperChildren = domComponents.getComponents();
		wrapperChildren.add(formValue);

		this.editor.on('component:update', () => {
			$('#' + formId).val(this.editor.getHtml());
		});
	}
}
