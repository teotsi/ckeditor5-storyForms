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
        const schema = this.editor.model.schema;

        schema.register( 'emailNavbar',{
            isLimit: true, 
            allowIn: 'storyForm',
            allowContentOf: '$root'
        });

        schema.register( 'emailBoldButton',{
            isLimit:true,
            allowIn: 'emailNavbar',
            allowContentOf: '$block'
        });
        
        schema.register( 'emailItalicButton',{
            isLimit:true,
            allowIn: 'emailNavbar',
            allowContentOf: '$block'
        });
        
        schema.register( 'emailLinkButton',{
            isLimit:true,
            allowIn: 'emailNavbar',
            allowContentOf: '$block'
        });
        
        schema.register( 'emailHrButton',{
            isLimit:true,
            allowIn: 'emailNavbar',
            allowContentOf: '$block'
        });
        
        schema.register( 'emailStrikeButton',{
            isLimit:true,
            allowIn: 'emailNavbar',
            allowContentOf: '$block'
        });

        schema.register( 'emailUndoButton',{
            isLimit:true,
            allowIn: 'emailNavbar',
            allowContentOf: '$block'
        });

        schema.register( 'emailRedoButton',{
            isLimit:true,
            allowIn: 'emailNavbar',
            allowContentOf: '$block'
        });

        schema.register( 'emailAttachmentButton',{
            isLimit:true,
            allowIn: 'emailNavbar',
            allowContentOf: '$block'
        });

    }

    _defineConverters() {
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
            model:'emailBoldButton',
            view: {
                name: 'div',
                classes: 'email-bold-button'
            }
        });
        conversion.for('dataDowncast').elementToElement( {
            model:'emailBoldButton',
            view: {
                name: 'div',
                classes: 'email-bold-button'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'emailBoldButton',
            view: (modelElement, viewWriter) => {
                const emailBoldButton = viewWriter.createEditableElement('div',{ class:'email-bold-button'});
                return toWidget( emailBoldButton, viewWriter );
            }
        });

        conversion.for('upcast').elementToElement( {
            model:'emailItalicButton',
            view: {
                name: 'div',
                classes: 'email-italic-button'
            }
        });
        conversion.for('dataDowncast').elementToElement( {
            model:'emailItalicButton',
            view: {
                name: 'div',
                classes: 'email-italic-button'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'emailItalicButton',
            view: (modelElement, viewWriter) => {
                const emailItalicButton = viewWriter.createEditableElement('div',{ class:'email-italic-button'});
                return toWidget( emailItalicButton, viewWriter );
            }
        });

        conversion.for('upcast').elementToElement( {
            model:'emailLinkButton',
            view: {
                name: 'div',
                classes: 'email-link-button'
            }
        });
        conversion.for('dataDowncast').elementToElement( {
            model:'emailLinkButton',
            view: {
                name: 'div',
                classes: 'email-link-button'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'emailLinkButton',
            view: (modelElement, viewWriter) => {
                const emailLinkButton = viewWriter.createEditableElement('div',{ class:'email-link-button'});
                return toWidget( emailLinkButton, viewWriter );
            }
        });

        conversion.for('upcast').elementToElement( {
            model:'emailHrButton',
            view: {
                name: 'div',
                classes: 'email-hr-button'
            }
        });
        conversion.for('dataDowncast').elementToElement( {
            model:'emailHrButton',
            view: {
                name: 'div',
                classes: 'email-hr-button'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'emailHrButton',
            view: (modelElement, viewWriter) => {
                const emailHrButton = viewWriter.createEditableElement('div',{ class:'email-hr-button'});
                return toWidget( emailHrButton, viewWriter );
            }
        });

        conversion.for('upcast').elementToElement( {
            model:'emailStrikeButton',
            view: {
                name: 'div',
                classes: 'email-strike-button'
            }
        });
        conversion.for('dataDowncast').elementToElement( {
            model:'emailStrikeButton',
            view: {
                name: 'div',
                classes: 'email-strike-button'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'emailStrikeButton',
            view: (modelElement, viewWriter) => {
                const emailStrikeButton = viewWriter.createEditableElement('div',{ class:'email-strike-button'});
                return toWidget( emailStrikeButton, viewWriter );
            }
        });
        
        conversion.for('upcast').elementToElement( {
            model:'emailUndoButton',
            view: {
                name: 'div',
                classes: 'email-undo-button'
            }
        });
        conversion.for('dataDowncast').elementToElement( {
            model:'emailUndoButton',
            view: {
                name: 'div',
                classes: 'email-undo-button'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'emailUndoButton',
            view: (modelElement, viewWriter) => {
                const emailUndoButton = viewWriter.createEditableElement('div',{ class:'email-undo-button'});
                return toWidget( emailUndoButton, viewWriter );
            }
        });

        conversion.for('upcast').elementToElement( {
            model:'emailRedoButton',
            view: {
                name: 'div',
                classes: 'email-redo-button'
            }
        });
        conversion.for('dataDowncast').elementToElement( {
            model:'emailRedoButton',
            view: {
                name: 'div',
                classes: 'email-redo-button'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'emailRedoButton',
            view: (modelElement, viewWriter) => {
                const emailRedoButton = viewWriter.createEditableElement('div',{ class:'email-redo-button'});
                return toWidget( emailRedoButton, viewWriter );
            }
        });
        
        conversion.for('upcast').elementToElement( {
            model:'emailAttachmentButton',
            view: {
                name: 'div',
                classes: 'email-attachment-button'
            }
        });
        conversion.for('dataDowncast').elementToElement( {
            model:'emailAttachmentButton',
            view: {
                name: 'div',
                classes: 'email-attachment-button'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'emailAttachmentButton',
            view: (modelElement, viewWriter) => {
                const emailAttachmentButton = viewWriter.createEditableElement('div',{ class:'email-attachment-button'});
                return toWidget( emailAttachmentButton, viewWriter );
            }
        });
    }

}