import Command from '@ckeditor/ckeditor5-core/src/command';
import {createNavbar} from './utils';

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
       writer.appendText("From: ", emailSender);

       const emailRecipient = writer.createElement( 'emailRecipient' );
       writer.appendText("To: ", emailRecipient);
       
       const emailSubject = writer.createElement( 'emailSubject' );
       writer.appendText("Subject: ", emailSubject);

       writer.append(emailSender, storyForm);
       writer.append(emailRecipient, storyForm);
       writer.append(emailSubject, storyForm);
       writer.append(createNavbar(writer), storyForm);

       const emailBody = writer.createElement('emailBody');
       writer.append(emailBody, storyForm);

       // There must be at least one paragraph for the description to be editable.
        // See https://github.com/ckeditor/ckeditor5/issues/1464.
        writer.appendElement("paragraph",emailBody);

    }else if(type === 'letter'){
        const storyFormPaper = writer.createElement('storyFormPaper');
        const letterBody = writer.createElement( 'letterBody' );
        writer.append(storyFormPaper, storyForm);
        writer.append( letterBody, storyFormPaper );

        // There must be at least one paragraph for the description to be editable.
        // See https://github.com/ckeditor/ckeditor5/issues/1464.
        writer.appendElement("paragraph",letterBody);

    }
    
    return storyForm;
} 