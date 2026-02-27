export class Component {
    constructor(props = {}, containerId = null) {
        this.props = props;
        this.state = {};
        this.containerId = containerId;
        this.element = null;
    }

    render() {
        return ``;
    }

    mounted() {}

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.update();
    }

    update() {
        if (this.element) {
            this.element.innerHTML = this.render();
            this.mounted();
        }
    }
}