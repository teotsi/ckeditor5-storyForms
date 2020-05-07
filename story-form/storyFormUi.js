
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import { addListToDropdown, createDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';

import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import Model from '@ckeditor/ckeditor5-ui/src/model';

export default class StoryFormUI extends Plugin {
    init() {
        console.log( 'StoryFormUI#init() got called' );

        const editor = this.editor;
        const t = editor.t;
        const formTypes = [ 'Letter','Send email', 'Read email' ];

        editor.ui.componentFactory.add( 'storyForm', locale =>{
            const dropdownView = createDropdown( locale );
            
            addListToDropdown( dropdownView, getDropdownItemsDefinitions (formTypes) );
            
            dropdownView.buttonView.set({

                label: t( 'Story Form' ),
                tooltip: true,
                withText: true
            } );
        

            const command = editor.commands.get( 'storyform' );
            dropdownView.bind( 'isEnabled' ).to( command );

            this.listenTo( dropdownView, 'execute', evt => {
                editor.execute( 'storyform', {type: evt.source.commandParam} )
                editor.editing.view.focus();
            } );

            return dropdownView;
     });
    }
}

function getDropdownItemsDefinitions( formTypes ) {
    const itemDefinitions = new Collection();

    for ( const type of formTypes ) {
        const definition = {
            type: 'button',
            model: new Model( {
                commandParam: type,
                label: type,
                withText: true
            } )
        };

        // Add the item definition to the collection.
        itemDefinitions.add( definition );
    }

    return itemDefinitions;
}