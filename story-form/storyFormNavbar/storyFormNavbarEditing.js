import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { toWidgetEditable, toWidget } from '@ckeditor/ckeditor5-widget/src/utils';
import StoryFormEditing from '../storyFormEditing';

export default class StoryFormNavbarEditing extends Plugin {
    static get requires(){
        return [StoryFormEditing];
    }

    init(){
        console.log( 'StorFormNavbarEditing#init() got called' );

        this._defineSchema();
        this._defineConverters();
    }

    _defineSchema() {
        const buttonNames = ['Bold','Italic','Hr','Link','Strike','Attachment','Undo','Redo'];
        const schema = this.editor.model.schema;

        schema.register( 'emailNavbar',{
            isLimit: true, 
            allowIn: 'storyForm',
            allowContentOf: '$root'
        });

        for (const buttonName of buttonNames){
            schema.register( `email${buttonName}Button`,{
                isLimit:true,
                allowIn: 'emailNavbar',
                allowContentOf: '$block'
            });
        }
       
    

    }

    _defineConverters() {
        const buttonNames = ['Bold','Italic','Hr','Link','Strike','Attachment','Undo','Redo'];
        const conversion = this.editor.conversion;

        conversion.for('upcast').elementToElement( {
            model:'emailNavbar',
            view: {
                name: 'div',
                classes: 'email-navbar'
            }
        });
        conversion.for('dataDowncast').elementToElement( {
            model:'emailNavbar',
            view: {
                name: 'div',
                classes: 'email-navbar'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'emailNavbar',
            view: (modelElement, viewWriter) => {
                const navbar = viewWriter.createContainerElement('div',{ class:'email-navbar'});
                return toWidget( navbar, viewWriter );
            }
        });

        for (const buttonName of buttonNames){
            conversion.for('upcast').elementToElement( {
                model:`email${buttonName}Button`,
                view: {
                    name: 'div',
                    classes: `email-${buttonName.toLowerCase()}-button`
                }
            });
            conversion.for('dataDowncast').elementToElement( {
                model:`email${buttonName}Button`,
                view: {
                    name: 'div',
                    classes: `email-${buttonName.toLowerCase()}-button`
                }
            });
    
            conversion.for('editingDowncast').elementToElement({
                model: `email${buttonName}Button`,
                view: (modelElement, viewWriter) => {
                    const button = viewWriter.createEditableElement('div',{ class:`email-${buttonName.toLowerCase()}-button`});
                    return toWidget( button, viewWriter );
                }
            });
    
        }
    }

}