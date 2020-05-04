import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import StoryFormLetterEditing from './storyFormLetterEditing';
import '../../theme/storyFormLetter.css';
export default class storyFormLetter extends Plugin{
    static get requires() {
        return [StoryFormLetterEditing];
    }
}