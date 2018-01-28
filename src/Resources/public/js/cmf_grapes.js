GrapesJSAdapter = function (options) {
	if (!options.grapes_options) {
		options.grapes_options = {};
	}
	this.grapesOptions = options.grapes_options;
	this.request = options.request;
	this.rootNode = options.root_node;
	this.formId = options.form_id;
	this.formData = $('#'+this.formId).val();

}

GrapesJSAdapter.prototype.bindToElement = function ($element) {
	this.grapesOptions.container = '#' + $element[0].id;
	const editor = grapesjs.init(this.grapesOptions);
	const domComponents = editor.DomComponents;
	domComponents.clear();
	domComponents.addComponent(this.formData)
	editor.on('component:update', () => {
		$('#'+this.formId).val(editor.getHtml());
	});
}

/**
 * A simple layer between jQuery front-end and the JS grapes library.
 *
 * By default, it uses the GrapesJSApapter. You can pass other adapter by changing `adapter`setting.
 * @param options
 * @returns {GrapesJSAdapter}
 */
jQuery.fn.cmfGrapes = function (options) {
	options = jQuery.extend({adapter: null}, options);
	const $output = jQuery(this);

	if (!options.adapter) {
		options.adapter = new GrapesJSAdapter(options);
	}
	const adapter = options.adapter;

	adapter.bindToElement($output);

	return adapter;
};