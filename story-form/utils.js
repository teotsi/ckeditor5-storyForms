
export function createNavbar(writer, buttonNames = [], contained ) {

        buttonNames = !buttonNames.length ?  ['Bold','Italic','Hr','Link','Strike','Attachment','Undo','Redo']:buttonNames;
        const navbar = writer.createElement('emailNavbar');
        console.log(buttonNames);
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