import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import StoryFormEmailEditing from './storyFormEmailEditing';
import '../../theme/storyFormEmail.css';
export default class storyFormEmail extends Plugin{
    static get requires() {
        return [StoryFormEmailEditing];
    }
}