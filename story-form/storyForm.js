
import StoryFormEditing from './storyFormEditing';
import StoryFormUI from './storyFormUi';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import '../theme/storyForm.css';
import storyFormLetter from './storyFormLetter/storyFormLetter';
export default class StoryForm extends Plugin {
    static get requires() {
        return [ StoryFormEditing, StoryFormUI, storyFormLetter ];
    }
}