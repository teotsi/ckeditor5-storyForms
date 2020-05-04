
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import { toWidget, toWidgetEditable } from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';

import StoryFormCommand from './insertStoryFormCommand'

export default class StoryFormEditing extends Plugin {
    static get requires() {                                                    // ADDED
        return [ Widget ];
    }

    init() {
        console.log( 'StoryFormEditing#init() got called' );
    
        this._defineSchema();         

        this._defineConverters();

        this.editor.commands.add('storyform', new StoryFormCommand(this.editor));
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register( 'storyForm', {
            // Behaves like a self-contained object (e.g. an image).
            isObject: true,

            // Allow in places where other blocks are allowed (e.g. directly in the root).
            allowWhere: '$block',
            allowAttributes: [ 'type' ]
        } );

        schema.register( 'letterTitle', {
            // Cannot be split or left by the caret.
            isLimit: true,

            allowIn: 'storyFormPaper',

            // Allow content which is allowed in blocks (i.e. text with attributes).
            allowContentOf: '$block'
        } );
        
    }

    _defineConverters() {
        const conversion = this.editor.conversion;

        conversion.for('upcast').elementToElement( {
            model: 'storyForm',
            view: {
                name: 'section',
                classes: 'story-form'
            }
        } );

        conversion.for( 'dataDowncast' ).elementToElement( {
            model: 'storyForm',
            view: {
                name: 'section',
                classes: 'story-form'
            }
        } );


        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'storyForm',
            view: ( modelElement, viewWriter ) => {
                const section = viewWriter.createContainerElement( 'section', { class: 'story-form' } );

                return toWidget( section, viewWriter, { label: 'story form' } );
            }
        } );

        conversion.for('upcast').elementToElement( {
            model: 'letterTitle',
            view: {
                name: 'h4',
                classes: 'letter-title'
            }
        } );

        conversion.for('dataDowncast').elementToElement( {
            model: 'letterTitle',
            view: {
                name: 'h4',
                classes: 'letter-title'
            }
        } );

        conversion.for('editingDowncast').elementToElement({
            model: 'letterTitle',
            view: (modelElement, viewWriter) => {
                const h1 = viewWriter.createEditableElement('h4',{ class:'letter-title'});
                return toWidgetEditable( h1, viewWriter );
            }
        });

    }
}