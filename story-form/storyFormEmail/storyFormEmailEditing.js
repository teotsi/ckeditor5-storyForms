import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { toWidgetEditable, toWidget } from '@ckeditor/ckeditor5-widget/src/utils';
import StoryFormEditing from '../storyFormEditing';

export default class StoryFormEmailEditing extends Plugin {
    static get requires(){
        return [ StoryFormEditing ];
    }

    init() {
        console.log( 'StorFormEmailEditing#init() got called' );

        this._defineSchema();
        this._defineConverters();
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register( 'emailSender', {
            // Cannot be split or left by the caret.
            isLimit: true,

            allowIn: 'storyForm',

            // Allow content which is allowed in blocks (i.e. text with attributes).
            allowContentOf: '$block'
        } );

        schema.register( 'emailRecipient', {
            // Cannot be split or left by the caret.
            isLimit: true,

            allowIn: 'storyForm',

            // Allow content which is allowed in blocks (i.e. text with attributes).
            allowContentOf: '$block'
        } );

      
        schema.register( 'emailSubject', {
            // Cannot be split or left by the caret.
            isLimit: true,

            allowIn: 'storyForm',

            // Allow content which is allowed in blocks (i.e. text with attributes).
            allowContentOf: '$block'
        } );

        schema.register( 'emailBody', {
            // Cannot be split or left by the caret.
            isLimit: true,

            allowIn: 'storyForm',

            // Allow content which is allowed in the root (e.g. paragraphs).
            allowContentOf: '$root'
        } ); 

    }

    _defineConverters() {
        const conversion = this.editor.conversion;

        conversion.for('upcast').elementToElement( {
            model: 'emailSender',
            view: {
                name: 'p',
                classes: 'email-sender'
            }
        } );

        conversion.for('dataDowncast').elementToElement( {
            model: 'emailSender',
            view: {
                name: 'p',
                classes: 'email-sender'
            }
        } );

        conversion.for('editingDowncast').elementToElement({
            model: 'emailSender',
            view: (modelElement, viewWriter) => {
                const p = viewWriter.createEditableElement('p',{ class:'email-sender'});
                return toWidgetEditable( p, viewWriter );
            }
        });


        conversion.for('upcast').elementToElement( {
            model: 'emailRecipient',
            view: {
                name: 'p',
                classes: 'email-recipient'
            }
        } );

        conversion.for('dataDowncast').elementToElement( {
            model: 'emailRecipient',
            view: {
                name: 'p',
                classes: 'email-recipient'
            }
        } );

        conversion.for('editingDowncast').elementToElement({
            model: 'emailRecipient',
            view: (modelElement, viewWriter) => {
                const p = viewWriter.createEditableElement('p',{ class:'email-recipient'});
                return toWidgetEditable( p, viewWriter );
            }
        });

        conversion.for('upcast').elementToElement( {
            model: 'emailSubject',
            view: {
                name: 'h3',
                classes: 'email-subject'
            }
        } );

        conversion.for('dataDowncast').elementToElement( {
            model: 'emailSubject',
            view: {
                name: 'h3',
                classes: 'email-subject'
            }
        } );

        conversion.for('editingDowncast').elementToElement({
            model: 'emailSubject',
            view: (modelElement, viewWriter) => {
                const h3 = viewWriter.createEditableElement('h3',{ class:'email-subject'});
                return toWidgetEditable( h3, viewWriter );
            }
        });

        conversion.for('upcast').elementToElement( {
            model: 'emailBody',
            view: {
                name: 'div',
                classes: 'email-body'
            }
        } );

        conversion.for('dataDowncast').elementToElement( {
            model: 'emailBody',
            view: {
                name: 'div',
                classes: 'email-body'
            }
        } );

        conversion.for('editingDowncast').elementToElement({
            model: 'emailBody',
            view: (modelElement, viewWriter) => {
                const div = viewWriter.createEditableElement('div',{ class:'email-body'});
                return toWidgetEditable( div, viewWriter );
            }
        });


    }
}