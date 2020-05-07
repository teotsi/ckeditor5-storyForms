
export function createNavbar(writer, buttonNames = [], contained ) {

        buttonNames = !buttonNames.length ?  ['Bold','Italic','Hr','Link','Strike','Attachment','Undo','Redo']:buttonNames;
        const navbar = writer.createElement('emailNavbar');
        return createButtons(writer, buttonNames, navbar, contained);

    }

function createButtons(writer, buttonNames, navbar, contained) {

    if ( contained ){
        for(const buttonName of buttonNames) {

            const container = writer.createElement('emailButtonContainer');
            const button = writer.createElement(`email${buttonName}Button`);

            writer.append(button, container);
            writer.append(container, navbar);
        } 
    }else{
        for(const buttonName of buttonNames) {
            const button = writer.createElement(`email${buttonName}Button`)
            writer.append(button, navbar);
        }
    }
    return navbar;
} 

export function createEmail(writer, storyForm) {

    const emailSender = writer.createElement( 'emailParticipant' );
    writer.appendText("From: ", emailSender);

    const emailRecipient = writer.createElement( 'emailParticipant' );
    writer.appendText("To: ", emailRecipient);
    
    const emailSubject = writer.createElement( 'emailSubject' );
    writer.appendText("Subject: ", emailSubject);

    writer.append(emailSender, storyForm);
    writer.append(emailRecipient, storyForm);
    writer.append(emailSubject, storyForm);
    return storyForm;
}