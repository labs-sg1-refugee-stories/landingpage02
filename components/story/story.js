class TabLink {
	constructor(tabElement) {
		this.tabElement = tabElement;
		this.dataTab = this.tabElement.dataset.tab;
		if (this.dataTab === 'World') {
			this.stories = document.querySelectorAll('.story');
		} else {
			this.stories = document.querySelectorAll(`.story[data-tab="${this.dataTab}"]`);
		}
		this.stories = Array.from(this.stories).map(story => new TabStory(story));
		this.tabElement.addEventListener('click', () => this.selectTab());
	}

	selectTab() {
		const tabs = document.querySelectorAll('.tab');
		tabs.forEach(tab => tab.classList.remove('active-tab'));
		const stories = document.querySelectorAll('.story');
		stories.forEach(story => (story.style.display = 'none'));
		this.tabElement.classList.add('active-tab');
		this.stories.forEach(story => story.selectStory());
	}
}

class TabStory {
	constructor(storyElement) {
		this.storyElement = storyElement;
	}
	selectStory() {
		this.storyElement.style.display = 'flex';
	}
}
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => new TabLink(tab));
