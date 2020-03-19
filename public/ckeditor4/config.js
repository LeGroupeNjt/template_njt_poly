/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	
	config.toolbar_Full = [
	    { name: 'document',    groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source', 'Templates', 'document' ] },
	    // On the basic preset, clipboard and undo is handled by keyboard.
	    // Uncomment the following line to enable them on the toolbar as well.
	     { name: 'clipboard',   groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', 'Undo', 'Redo' ] },
	   // { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', 'SelectAll', 'Scayt' ] },
	     { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline','RemoveFormat' ] },
	     { name: 'insert', items: [ 'CreatePlaceholder', 'Image', 'Table', 'HorizontalRule', 'Smiley', 'Youtube' ] }, //, 'SpecialChar', 'PageBreak', 'Iframe', 'InsertPre',
	   // { name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'Flash', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] }, // [ 'Bold', 'Italic', 'Underline','Strike', 'Subscript', 'Superscript','RemoveFormat' ] 
	    { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
	    { name: 'tools', items: [ 'UIColor', 'Maximize'] }, //, 'ShowBlocks' 
	    { name: 'links', items: [ 'Link', 'Unlink' ] },
	    '/',
	    
	    { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align' ], items: [ 'NumberedList', 'BulletedList', 'Outdent', 'Indent', 'Blockquote', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', 'BidiLtr', 'BidiRtl' ] }, // 'CreateDiv',
	    //, 'Anchor'
	    { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
	  ];

	  config.toolbar = "Full";
	  
	  config.extraPlugins = "youtube,backgrounds";
	  //config.extraPlugins = "backgrounds";
	  config.height = 120;

};
