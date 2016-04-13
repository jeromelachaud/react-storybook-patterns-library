import { configure } from '@kadira/storybook';
import '../styles/base.css'
import '../styles/button.css'

function loadStories() {
  require('../components/stories/button-example');
  // require as many as stories you need.
}

configure(loadStories, module);
