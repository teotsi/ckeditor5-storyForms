import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import StoryFormNavbarEditing from './storyFormNavbarEditing';

import '../../theme/storyFormNavbar.css';

export default class storyFormNavbar extends Plugin {
    static get requires() {
        return [StoryFormNavbarEditing];
    }
}