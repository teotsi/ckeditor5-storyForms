
export function createNavbar(writer) {
        const buttonNames = ['Bold','Italic','Hr','Link','Strike','Attachment','Undo','Redo'];
        const navbar = writer.createElement('emailNavbar');

        for(const buttonName of buttonNames) {
            const button = writer.createElement(`email${buttonName}Button`)
            writer.append(button, navbar);
        }
        
        return navbar;
    }