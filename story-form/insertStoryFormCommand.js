import Command from '@ckeditor/ckeditor5-core/src/command';

export default class StoryFormCommand extends Command {
    execute( { type }) {
        const editor = this.editor;
        editor.model.change( writer => {
            this.editor.model.insertContent( createStoryForm( writer, type ) );
        } );
    }

    refresh() {
        const model = this.editor.model;
        const selection = model.document.selection;
        const allowedIn = model.schema.findAllowedParent( selection.getFirstPosition(), 'storyForm' );

        this.isEnabled = allowedIn !== null;
    }
}

function createStoryForm( writer, type ) {
    const storyForm = writer.createElement( 'storyForm' );
    
    if(type === 'email'){
        const emailSender = writer.createElement( 'emailSender' );
        const emailRecipient = writer.createElement( 'emailRecipient' );
        const emailSubject = writer.createElement( 'emailSubject' );
        const emailBody = writer.createElement( 'emailBody' );
    

        const span = writer.createElement('span');
        writer.insertText("From",span);


        writer.insertText("teotsi@gmail.com", emailSender);
        // writer.append(span,storyForm)
        writer.append( emailSender, storyForm );
    
        // There must be at least one paragraph for the description to be editable.
        // See https://github.com/ckeditor/ckeditor5/issues/1464.
        const p = writer.createElement( 'paragraph' );
        writer.insertText("hey! This is an email!", p);
        writer.append(p,emailBody);
        writer.append( emailBody, storyForm );

    }else if(type === 'letter'){
        const storyFormPaper = writer.createElement('storyFormPaper');
        const letterBody = writer.createElement( 'letterBody' );
        writer.append(storyFormPaper, storyForm)
        writer.append( letterBody, storyFormPaper );

        // There must be at least one paragraph for the description to be editable.
        // See https://github.com/ckeditor/ckeditor5/issues/1464.
        writer.appendElement("paragraph",letterBody);

    }
    
    return storyForm;
}