
import StoryFormEditing from './storyFormEditing';
import StoryFormUI from './storyFormUi';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import '../theme/storyForm.css';
import storyFormLetter from './storyFormLetter/storyFormLetter';
import StoryFormEmail from './storyFormEmail/storyFormEmail';
import storyFormNavbar from './storyFormNavbar/storyFormNavbar';
export default class StoryForm extends Plugin {
    static get requires() {
        return [ StoryFormEditing, StoryFormUI, storyFormLetter, StoryFormEmail, storyFormNavbar ];
    }
}