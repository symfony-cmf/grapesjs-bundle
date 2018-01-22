import * as GrapesJS from 'grapesjs';

export class GrapesJSAdapter {
	constructor (options) {
		if (!options.grapes_options) {
			options.grapes_options = {};
		}
		this.grapesOptions = options.grapes_options;
	}

	bindToElement($element) {
		this.grapesOptions.container = $element.id;
		this.editor = GrapesJS.init(this.grapesOptions);
	}
}