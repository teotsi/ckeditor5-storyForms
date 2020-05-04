import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { toWidgetEditable } from '@ckeditor/ckeditor5-widget/src/utils';
import StoryFormEditing from '../storyFormEditing';

export default class StoryFormLetterEditing extends Plugin {
    static get requires() {
        return [ StoryFormEditing ];
    }

    init() {
        console.log( 'StoryFormLetterEditing#init() got called' );

        this._defineSchema();

        this._defineConverters();

    }

    _defineSchema() {
        const schema = this.editor.model.schema;
        schema.register( 'storyFormPaper',{
            isLimit: true,
            allowIn: 'storyForm',
            allowContentOf: '$root'
        });

        schema.register( 'letterBody', {
            // Cannot be split or left by the caret.
            isLimit: true,

            allowIn: 'storyFormPaper',

            // Allow content which is allowed in the root (e.g. paragraphs).
            allowContentOf: '$root'
        } );

    }


    _defineConverters() {
        const conversion = this.editor.conversion;

        conversion.for('upcast').elementToElement( {
            model: 'storyFormPaper',
            view: {
                name: 'div',
                classes: 'story-form-paper'
            }
        } );

        conversion.for( 'dataDowncast' ).elementToElement( {
            model: 'storyFormPaper',
            view: {
                name: 'div',
                classes: 'story-form-paper'
            }
        } );


        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'storyFormPaper',
            view: ( modelElement, viewWriter ) => {
                const section = viewWriter.createEditableElement( 'div', { class: 'story-form-paper' } );

                return toWidgetEditable( section, viewWriter );
            }
        } );

        conversion.for('upcast').elementToElement( {
            model: 'letterBody',
            view: {
                name: 'div',
                classes: 'letter-body'
            }
        } );

        conversion.for('dataDowncast').elementToElement( {
            model: 'letterBody',
            view: {
                name: 'div',
                classes: 'letter-body'
            }
        } );

        conversion.for('editingDowncast').elementToElement({
            model: 'letterBody',
            view: (modelElement, viewWriter) => {
                const div = viewWriter.createEditableElement('div',{ class:'letter-body'});
                return toWidgetEditable( div, viewWriter );
            }
        });


    }
}