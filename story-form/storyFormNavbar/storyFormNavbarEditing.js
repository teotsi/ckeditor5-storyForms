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
        const buttonNames = ['Bold','Italic','Hr','Link','Strike','Attachment','Undo','Redo','Reply', 'Replya', 'Send'];
        const schema = this.editor.model.schema;

        schema.register( 'emailNavbar',{
            isLimit: true, 
            allowIn: 'storyForm',
            allowContentOf: '$root'
        });
        
        schema.register( 'emailButtonContainer',{
            isLimit: true, 
            allowIn: 'emailNavbar',
            allowContentOf: '$root'
        });

        for (const buttonName of buttonNames){
            schema.register( `email${buttonName}Button`,{
                isLimit:true,
                allowIn: ['emailNavbar', 'emailButtonContainer'],
                allowContentOf: '$block'
            });
        }
       
    

    }

    _defineConverters() {
        const editButtonNames = ['Bold','Italic','Hr','Link','Strike','Attachment','Undo','Redo','Reply', 'Replya', 'Send'];
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
        
        conversion.for('upcast').elementToElement( {
            model:'emailButtonContainer',
            view: {
                name: 'div',
                classes: 'email-button-container'
            }
        });
        conversion.for('dataDowncast').elementToElement( {
            model:'emailButtonContainer',
            view: {
                name: 'div',
                classes: 'email-button-container'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'emailButtonContainer',
            view: (modelElement, viewWriter) => {
                const buttonContainer = viewWriter.createContainerElement('div',{ class:'email-button-container'});
                return toWidget( buttonContainer, viewWriter );
            }
        });


        for (const buttonName of editButtonNames){ // email navbar items
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