import {GrapesJSAdapter} from './adapter/cmf_grapes_adapter';

/**
 * A simple layer between jQuery front-end and the JS grapes library.
 *
 * By default, it uses the GrapesJSApapter. You can pass other adapter by changing `adapter`setting.
 * @param options
 * @returns {GrapesJSAdapter}
 */
jQuery.fn.extend({
	cmfGrapes: function (options) {
		options = jQuery.extend({adapter: null}, options);
		const $output = jQuery(this);

		if (!options.adapter) {
			options.adapter = new GrapesJSAdapter(options);
		}
		const adapter = options.adapter;

		adapter.bindToElement($output);

		if (options.simple_form_content && options.simple_form_content.formId) {
			adapter.bindContentToForm(options.simple_form_content.formId);
		}

		return adapter;
	}
});
